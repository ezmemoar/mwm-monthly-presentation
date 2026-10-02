<script setup lang="ts">
import { toRef } from 'vue'
import type { Benefit } from '../../data/company'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

/**
 * A ledger row, not a card. The partnership is two promises in order, so the
 * numbers lead and brass rules separate them — nothing is boxed off.
 */
const props = defineProps<{ benefit: Benefit, variant?: SlideVariant }>()
const { muted, subtle } = useTone(toRef(props, 'variant'))
</script>

<template>
  <div class="manifest">
    <span class="manifest__step">{{ benefit.step }}</span>

    <div>
      <p class="manifest__headline">{{ benefit.headline }}</p>
      <p class="mt-1.5 text-[0.7rem] tracking-[0.16em] uppercase" :class="subtle">
        {{ benefit.headlineNote }}
      </p>
    </div>

    <div class="pt-1">
      <h3 class="font-display text-[1.15rem] leading-tight font-semibold">{{ benefit.title }}</h3>
      <p class="mt-2 max-w-[58ch] text-[0.86rem] leading-relaxed" :class="muted">{{ benefit.body }}</p>
    </div>
  </div>
</template>
