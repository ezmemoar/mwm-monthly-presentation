<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  current: number
  total: number
  light?: boolean
}>()

const pad = (n: number) => String(n).padStart(2, '0')
const label = computed(() => `${pad(props.current)} / ${pad(props.total)}`)
</script>

<template>
  <span class="slide-counter" :class="light && 'slide-counter--light'">
    {{ label }}
  </span>
</template>
