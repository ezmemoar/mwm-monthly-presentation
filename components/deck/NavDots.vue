<script setup lang="ts">
defineProps<{
  total: number
  current: number
  light?: boolean
}>()

const emit = defineEmits<{ go: [page: number] }>()
</script>

<template>
  <nav class="nav-dots" aria-label="Navigasi slide">
    <button
      v-for="page in total"
      :key="page"
      class="nav-dots__dot"
      :class="[light && 'nav-dots__dot--light', page === current && 'nav-dots__dot--active']"
      :aria-label="`Slide ${page}`"
      :aria-current="page === current ? 'true' : undefined"
      @click="emit('go', page)"
    />
  </nav>
</template>
