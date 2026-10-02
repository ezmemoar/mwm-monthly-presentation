import { defineAppSetup } from '@slidev/types'
import { isPrintMode } from '../composables/useEnv'

/**
 * `v-reveal` — the staggered entrance the source deck drove with GSAP
 * ScrollTrigger. Slidev only paints the slide that is on screen, so an
 * IntersectionObserver reproduces the same "play once when the slide arrives"
 * behaviour without pulling in an animation library.
 *
 * Usage: `<div v-reveal>` or `<div v-reveal="2">` to push it later in the stagger.
 */
export default defineAppSetup(({ app }) => {
  app.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      if (isPrintMode())
        return

      const order = Number(binding.value ?? 0) || 0
      el.classList.add('is-revealing')

      const play = () => {
        el.style.animationDelay = `${order * 90}ms`
        el.classList.remove('is-revealing')
        el.classList.add('is-revealed')
      }

      const observer = new IntersectionObserver((entries) => {
        if (entries.some(entry => entry.isIntersecting)) {
          observer.disconnect()
          play()
        }
      }, { threshold: 0.1 })

      observer.observe(el)
      ;(el as any).__revealObserver = observer
    },
    unmounted(el: HTMLElement) {
      ;(el as any).__revealObserver?.disconnect()
    },
  })
})
