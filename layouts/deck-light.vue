<script setup lang="ts">
import { provideSlideVariant } from '../composables/useSlideVariant'

provideSlideVariant('light')
</script>

<template>
  <div class="deck-slide deck-slide--light">
    <div class="ornament ornament--fade" aria-hidden="true" />

    <div class="deck-inner">
      <slot />
    </div>
  </div>
</template>
