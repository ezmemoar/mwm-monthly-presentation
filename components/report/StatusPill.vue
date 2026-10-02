<script setup lang="ts">
import { toRef } from 'vue'
import type { ReportStatus } from '../../data/report'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

/** Where a line of work stands: settled, still moving, or not yet. */
const props = defineProps<{ tone: ReportStatus, variant?: SlideVariant }>()
const { status } = useTone(toRef(props, 'variant'))
</script>

<template>
  <span :class="[status, `status--${tone}`]">
    <span class="status__dot" aria-hidden="true" />
    <slot />
  </span>
</template>
