<script setup lang="ts">
import { toRef } from 'vue'
import type { Prospect } from '../../data/report'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

/** One institution we are talking to: who they are, where it stands, what came of it. */
const props = defineProps<{ prospect: Prospect, variant?: SlideVariant }>()
const { card, muted, accent, pkgItem } = useTone(toRef(props, 'variant'))
</script>

<template>
  <article class="flex flex-col p-6" :class="card">
    <div class="flex items-center justify-between gap-3">
      <p class="eyebrow" :class="accent">{{ prospect.kind }}</p>
      <StatusPill :tone="prospect.tone" :variant="variant">{{ prospect.status }}</StatusPill>
    </div>

    <h3 class="font-display mt-4 text-[1.7rem] leading-tight font-semibold -tracking-[0.02em]">{{ prospect.name }}</h3>

    <ul class="mt-4 flex flex-col border-t border-gold/45 pt-3">
      <li v-for="outcome in prospect.outcomes" :key="outcome.text" :class="pkgItem">
        <span class="pkg-item__icon" :class="outcome.icon" aria-hidden="true" />
        <span class="text-[0.88rem] leading-snug" :class="muted">{{ outcome.text }}</span>
      </li>
    </ul>
  </article>
</template>
