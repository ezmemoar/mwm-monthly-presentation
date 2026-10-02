---
layout: deck-light
---

<script setup lang="ts">
import { prospects } from '../data/report'
</script>

<SlideHeading eyebrow="Kerja Sama" title="Satu Pertemuan, Dua Penjajakan" index="05" class="mb-9" />

<div class="grid grid-cols-3 items-stretch gap-5">
  <ProspectCard v-for="(prospect, i) in prospects" :key="prospect.name" v-reveal="i + 1" :prospect="prospect" />
</div>
