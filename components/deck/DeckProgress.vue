<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ current: number, total: number }>()

const width = computed(() => `${(props.current / Math.max(props.total, 1)) * 100}%`)
</script>

<template>
  <div class="deck-progress" :style="{ width }" />
</template>
