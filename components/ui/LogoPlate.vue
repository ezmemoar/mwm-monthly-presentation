<script setup lang="ts">
import { ref, toRef } from 'vue'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

const props = defineProps<{
  /** Omit when the institution publishes no public mark. */
  logo?: string
  alt: string
  /** Set in the monogram fallback, and read by the deck as a label. */
  mark: string
  variant?: SlideVariant
  imageClass: string
}>()

const { plate } = useTone(toRef(props, 'variant'))

// A hot-linked mark can disappear; the monogram takes over rather than leaving
// an empty tile on a slide about credibility.
const broken = ref(false)
</script>

<template>
  <div :class="plate">
    <img
      v-if="logo && !broken"
      :src="logo"
      :alt="alt"
      class="logo-plate__img"
      :class="imageClass"
      loading="eager"
      @error="broken = true"
    >
    <span v-else class="logo-plate__mark">{{ mark }}</span>
  </div>
</template>
