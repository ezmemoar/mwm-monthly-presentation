<script setup lang="ts">
import { brandLogo } from '../../data/images'
import { company } from '../../data/company'
</script>

<template>
  <div class="brand-chip">
    <img :src="brandLogo" :alt="`Logo ${company.legalName}`" class="brand-chip__logo">
    <span class="brand-chip__name">MITRA WISATA MANDIRI</span>
  </div>
</template>
