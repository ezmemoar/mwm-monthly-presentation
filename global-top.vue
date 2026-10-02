<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

/**
 * Persistent deck chrome: brand mark, slide counter, progress rail and the
 * right-hand nav dots. Slidev renders `global-top.vue` above every slide, in
 * both the live deck and the PDF export.
 */
const { currentPage, total, currentLayout, go } = useNav()

const isLightSlide = computed(() => currentLayout.value === 'deck-light')
</script>

<template>
  <DeckProgress :current="currentPage" :total="total" />

  <div class="deck-topbar">
    <BrandChip />
    <SlideCounter :current="currentPage - 1" :total="total - 1" :light="isLightSlide" />
  </div>

  <NavDots :current="currentPage" :total="total" :light="isLightSlide" @go="go" />
</template>
