import type { InjectionKey } from 'vue'
import { inject, provide } from 'vue'

export type SlideVariant = 'dark' | 'light'

const VariantKey: InjectionKey<SlideVariant> = Symbol('deck-slide-variant')

/** Called by the layouts so nested components can pick their own contrast. */
export function provideSlideVariant(variant: SlideVariant): void {
  provide(VariantKey, variant)
}

/** Defaults to `dark`, matching the deck's dominant surface. */
export function useSlideVariant(): SlideVariant {
  return inject(VariantKey, 'dark')
}

export function isLight(variant: SlideVariant): boolean {
  return variant === 'light'
}
