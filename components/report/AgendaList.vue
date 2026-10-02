<script setup lang="ts">
import { toRef } from 'vue'
import type { AgendaItem } from '../../data/report'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

/** The report's contents, each line keyed to the numeral on its own slide. */
const props = defineProps<{ items: AgendaItem[], variant?: SlideVariant }>()
const { muted, accent } = useTone(toRef(props, 'variant'))
</script>

<template>
  <ol class="agenda">
    <li v-for="item in items" :key="item.index" class="agenda__item">
      <span class="font-display text-[0.95rem] font-semibold" :class="accent">{{ item.index }}</span>
      <div>
        <p class="font-display text-[1.12rem] leading-tight font-semibold">{{ item.title }}</p>
        <p class="mt-0.5 text-[0.78rem]" :class="muted">{{ item.note }}</p>
      </div>
    </li>
  </ol>
</template>
