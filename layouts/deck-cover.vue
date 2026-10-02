<script setup lang="ts">
import { computed } from 'vue'
import { photos } from '../data/images'
import { provideSlideVariant } from '../composables/useSlideVariant'

const props = withDefaults(defineProps<{
  /** Key from `data/images.ts` — the full-bleed backdrop. */
  photo?: keyof typeof photos
  photoAlt?: string
  /** The brass arch drawn over the photo; the deck's signature shape. */
  portal?: boolean
  /** Nudge-to-continue affordance, shown on the opening slide only. */
  hint?: boolean
}>(), {
  portal: true,
})

const src = computed(() => (props.photo ? photos[props.photo] : undefined))

provideSlideVariant('dark')
</script>

<template>
  <div class="deck-slide deck-slide--dark">
    <PhotoBackdrop v-if="src" :src="src" :alt="photoAlt" fade-top />

    <div class="deck-inner flex flex-col items-center gap-5 text-center">
      <slot />
    </div>

    <div
      v-if="hint"
      class="absolute bottom-6 left-1/2 z-3 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[0.6rem] tracking-[0.24em] text-gold-300/70"
    >
      <span>LANJUT</span>
      <span class="i-heroicons-chevron-down text-base" aria-hidden="true" />
    </div>
  </div>
</template>
