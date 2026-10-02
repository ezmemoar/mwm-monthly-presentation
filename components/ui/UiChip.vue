<script setup lang="ts">
import { toRef } from 'vue'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

const props = withDefaults(defineProps<{
  tone?: 'primary' | 'outline'
  /** Prefix the label with the small accent dot. */
  dot?: boolean
  variant?: SlideVariant
}>(), {
  tone: 'outline',
  dot: false,
})

const { chipOutline } = useTone(toRef(props, 'variant'))
</script>

<template>
  <span class="chip" :class="tone === 'primary' ? 'chip--primary' : chipOutline">
    <span v-if="dot" class="chip__dot" />
    <slot />
  </span>
</template>
