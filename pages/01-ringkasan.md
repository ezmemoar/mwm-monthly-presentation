---
layout: deck-light
---

<script setup lang="ts">
import { agenda, report, summaryStats } from '../data/report'
</script>

<!-- No blank lines inside the HTML blocks below: markdown-it would end the
     block there and render the rest as a code fence. -->

<SlideHeading eyebrow="Ringkasan" :title="`Sekilas ${report.period}`" subtitle="Bulan ini kami memberangkatkan 3 jemaah, memulai program agen referral, dan bertemu SMP IT Iman untuk membahas kerja sama." index="01" class="mb-9" />

<div class="grid grid-cols-[0.9fr_1fr] items-start gap-16">
  <div v-reveal="1" class="grid grid-cols-2 gap-x-8 gap-y-8 pt-1">
    <StatCounter v-for="stat in summaryStats" :key="stat.label" v-bind="stat" />
  </div>
  <div v-reveal="2">
    <p class="eyebrow mb-2 text-gold-600">Isi laporan</p>
    <AgendaList :items="agenda" />
  </div>
</div>
