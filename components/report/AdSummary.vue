<script setup lang="ts">
import { toRef } from 'vue'
import type { AdPoint } from '../../data/report'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

/**
 * The ads month as a scorecard: what worked, what got in the way, and the
 * result, read side by side rather than as a sequence of stages.
 */
const props = defineProps<{
  points: AdPoint[]
  result: { label: string, value: string, note: string }
  variant?: SlideVariant
}>()
const { card, muted } = useTone(toRef(props, 'variant'))
</script>

<template>
  <div class="grid grid-cols-[1fr_1fr_0.82fr] items-stretch gap-5">
    <article v-for="(point, i) in points" :key="point.title" v-reveal="i + 1" class="flex flex-col p-6" :class="card">
      <div class="flex items-center justify-between">
        <span class="ad-point__icon" :class="point.icon" aria-hidden="true" />
        <StatusPill :tone="point.tone" :variant="variant">{{ point.label }}</StatusPill>
      </div>
      <h3 class="font-display mt-7 text-[1.6rem] leading-[1.08] font-semibold -tracking-[0.02em]">{{ point.title }}</h3>
      <p class="mt-3 text-[0.9rem] leading-relaxed" :class="muted">{{ point.body }}</p>
    </article>

    <article v-reveal="points.length + 1" class="result-tile">
      <p class="eyebrow text-gold-300">{{ result.label }}</p>
      <p class="result-tile__value">{{ result.value }}</p>
      <p class="text-[0.84rem] leading-relaxed text-white/80">{{ result.note }}</p>
    </article>
  </div>
</template>
