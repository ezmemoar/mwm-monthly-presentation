<script setup lang="ts">
import { toRef } from 'vue'
import type { Step } from '../../data/report'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

/** Three things happen in order, so they hang off one vertical brass line. */
const props = defineProps<{ steps: Step[], variant?: SlideVariant }>()
const { muted } = useTone(toRef(props, 'variant'))
</script>

<template>
  <ol class="steps">
    <li v-for="(step, i) in steps" :key="step.title" v-reveal="i + 1" class="steps__item">
      <span class="steps__node" aria-hidden="true">
        <span :class="step.icon" />
      </span>
      <div>
        <h3 class="font-display text-[1.2rem] leading-tight font-semibold">{{ step.title }}</h3>
        <p class="mt-1.5 max-w-[46ch] text-[0.86rem] leading-relaxed" :class="muted">{{ step.body }}</p>
      </div>
    </li>
  </ol>
</template>
