<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt?: string
  fadeTop?: boolean
  fadeBottom?: boolean
}>(), {
  alt: '',
  fadeTop: false,
  fadeBottom: true,
})
</script>

<template>
  <div class="photo-backdrop" aria-hidden="true">
    <img :src="src" :alt="alt" class="photo-backdrop__img">
    <div class="photo-backdrop__tint" />
    <div v-if="fadeTop" class="photo-backdrop__fade-top" />
    <div v-if="fadeBottom" class="photo-backdrop__fade-bottom" />
  </div>
</template>
