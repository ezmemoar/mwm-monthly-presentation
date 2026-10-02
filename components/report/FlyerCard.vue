<script setup lang="ts">
import { ref, toRef } from 'vue'
import type { Departure } from '../../data/report'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

/**
 * One departure, led by its package flyer. Flyers are printed artwork, so they
 * sit uncropped on the brass plate. A package with no flyer (or a hot-linked
 * one that fails to load) gets a typographic stand-in at the same 4:5 size.
 */
const props = defineProps<{ departure: Departure, variant?: SlideVariant }>()
const { subtle, accent } = useTone(toRef(props, 'variant'))

const broken = ref(false)
</script>

<template>
  <figure class="flex flex-col">
    <div class="plate h-[23rem]">
      <img
        v-if="departure.flyer && !broken"
        :src="departure.flyer"
        :alt="`Brosur ${departure.package}`"
        class="plate__img"
        @error="broken = true"
      >
      <div v-else class="flyer-standin">
        <div class="ornament" aria-hidden="true" />
        <p class="eyebrow relative text-gold-200">Paket umroh</p>
        <p class="font-display relative mt-2 text-[2.3rem] leading-[1.02] font-semibold -tracking-[0.02em]">
          {{ departure.package }}
        </p>
      </div>
    </div>

    <figcaption class="mt-4">
      <p class="eyebrow" :class="accent">{{ departure.weekday }}, {{ departure.date }}</p>
      <p class="font-display mt-1 text-[1.45rem] leading-tight font-semibold">{{ departure.package }}</p>
      <p class="mt-1 flex items-baseline gap-2">
        <span class="font-display text-[2rem] leading-none font-semibold" :class="accent">{{ departure.pilgrims }}</span>
        <span class="text-[0.68rem] tracking-[0.16em] uppercase" :class="subtle">jemaah berangkat</span>
      </p>
    </figcaption>
  </figure>
</template>
