import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

/**
 * Slidev's client and its themes ship CSS written for UnoCSS (`@apply` against
 * UnoCSS utilities). Tailwind's Vite plugin otherwise tries to compile those
 * files too and dies on utilities it does not know about, so it is scoped to
 * our own Tailwind entry — everything else keeps flowing through UnoCSS.
 */
const TAILWIND_ENTRY = /[\/]styles[\/]tailwind\.css(?:$|\?)/
const CSS_FILE = /\.(?:css|s[ac]ss|less|styl|postcss)(?:$|\?)/

function scopedTailwind(): Plugin[] {
  return (tailwindcss() as Plugin[]).map((plugin) => {
    const hook = plugin.transform
    if (!hook)
      return plugin

    const handler = typeof hook === 'function' ? hook : hook.handler
    function wrapped(this: any, code: string, id: string, options: any) {
      if (CSS_FILE.test(id) && !TAILWIND_ENTRY.test(id))
        return null

      return handler.call(this, code, id, options)
    }

    return {
      ...plugin,
      transform: typeof hook === 'function' ? wrapped : { ...hook, handler: wrapped },
    } as Plugin
  })
}

// Slidev merges this config into its own Vite config.
export default defineConfig({
  plugins: [
    scopedTailwind(),
  ],
})
