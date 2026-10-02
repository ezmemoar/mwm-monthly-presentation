<script setup lang="ts">
import { computed } from 'vue'
import { photos } from '../data/images'
import { provideSlideVariant } from '../composables/useSlideVariant'

const props = withDefaults(defineProps<{
  /** Key from `data/images.ts`; omit for a flat ink background. */
  photo?: keyof typeof photos
  photoAlt?: string
  fadeTop?: boolean
}>(), {
  fadeTop: true,
})

const src = computed(() => (props.photo ? photos[props.photo] : undefined))

provideSlideVariant('dark')
</script>

<template>
  <div class="deck-slide deck-slide--dark">
    <PhotoBackdrop v-if="src" :src="src" :alt="photoAlt" :fade-top="fadeTop" />
    <div class="ornament ornament--fade" aria-hidden="true" />

    <div class="deck-inner">
      <slot />
    </div>
  </div>
</template>
