import type { Ref } from 'vue'
import { onBeforeUnmount, ref, watch } from 'vue'

/**
 * Fires once when the bound element first becomes visible — used to kick off
 * the stat count-up only when its slide is actually on screen.
 */
export function useInView(threshold = 0.25): { target: Ref<HTMLElement | null>, inView: Ref<boolean> } {
  const target = ref<HTMLElement | null>(null)
  const inView = ref(false)
  let observer: IntersectionObserver | null = null

  watch(target, (el) => {
    observer?.disconnect()
    if (!el)
      return

    observer = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        inView.value = true
        observer?.disconnect()
      }
    }, { threshold })

    observer.observe(el)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { target, inView }
}
