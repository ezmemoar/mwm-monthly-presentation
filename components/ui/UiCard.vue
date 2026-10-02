<script setup lang="ts">
import { toRef } from 'vue'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { useTone } from '../../composables/useTone'

const props = defineProps<{ variant?: SlideVariant }>()
const { card } = useTone(toRef(props, 'variant'))
</script>

<template>
  <div :class="card">
    <slot />
  </div>
</template>
