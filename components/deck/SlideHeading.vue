<script setup lang="ts">
import { toRef } from 'vue'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

const props = defineProps<{
  eyebrow: string
  title?: string
  subtitle?: string
  /** Outlined slide number rendered on the right, e.g. `01`. */
  index?: string
  variant?: SlideVariant
}>()

const { muted, accent } = useTone(toRef(props, 'variant'))
</script>

<template>
  <header class="flex items-start justify-between gap-10">
    <div v-reveal>
      <p class="eyebrow mb-3.5 flex items-center gap-2.5" :class="accent">
        <span class="gold-rule inline-block w-7" aria-hidden="true" />
        {{ eyebrow }}
      </p>
      <h2 v-if="title" class="font-display max-w-[19ch] text-[2.5rem] leading-[1.06] font-semibold -tracking-[0.02em]">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="mt-3 max-w-[52ch] text-[0.92rem] leading-relaxed" :class="muted">
        {{ subtitle }}
      </p>
    </div>
    <BigNumber v-if="index" :value="index" />
  </header>
</template>
