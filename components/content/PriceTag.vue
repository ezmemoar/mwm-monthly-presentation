<script setup lang="ts">
import { toRef } from 'vue'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

const props = withDefaults(defineProps<{
  price: string
  caption?: string
  variant?: SlideVariant
}>(), {
  caption: 'Harga mulai dari',
})

const { subtle, accent } = useTone(toRef(props, 'variant'))
</script>

<template>
  <div>
    <p class="eyebrow mb-1.5" :class="subtle">{{ caption }}</p>
    <p class="font-display text-[2.6rem] leading-none font-semibold -tracking-[0.03em]" :class="accent">
      {{ price }}
    </p>
  </div>
</template>
