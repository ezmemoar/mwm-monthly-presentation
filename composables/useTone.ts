import type { Ref } from 'vue'
import { computed } from 'vue'
import type { SlideVariant } from './useSlideVariant'
import { useSlideVariant } from './useSlideVariant'

/**
 * Resolves the light/dark class pairs a component needs. The variant is taken
 * from the surrounding layout unless a component overrides it with a prop.
 */
export function useTone(override?: Ref<SlideVariant | undefined>) {
  const inherited = useSlideVariant()
  const variant = computed<SlideVariant>(() => override?.value ?? inherited)
  const light = computed(() => variant.value === 'light')

  return {
    variant,
    light,
    /** Body copy that sits below the headline. */
    muted: computed(() => (light.value ? 'text-ink-600' : 'text-white/85')),
    /** Footnotes and disclaimers. */
    subtle: computed(() => (light.value ? 'text-ink-600' : 'text-white/70')),
    card: computed(() => (light.value ? 'card card--light' : 'card card--dark')),
    hairline: computed(() => (light.value ? 'hairline-light' : 'hairline-dark')),
    chipOutline: computed(() => (light.value ? 'chip--outline-light' : 'chip--outline-dark')),
    pkgItem: computed(() => (light.value ? 'pkg-item pkg-item--light' : 'pkg-item')),
    /** The white tile an institution mark sits on. */
    plate: computed(() => (light.value ? 'logo-plate' : 'logo-plate logo-plate--dark')),
    /** Report status pill; the modifier for its state is added by the caller. */
    status: computed(() => (light.value ? 'status status--light' : 'status')),
    /** Brass reads darker on paper than it does on ink. */
    accent: computed(() => (light.value ? 'text-gold-600' : 'text-gold-300')),
  }
}
