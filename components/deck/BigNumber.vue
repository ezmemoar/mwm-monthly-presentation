<script setup lang="ts">
defineProps<{ value: string }>()
</script>

<template>
  <span class="bignum shrink-0 select-none" aria-hidden="true">{{ value }}</span>
</template>
