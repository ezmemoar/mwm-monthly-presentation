---
layout: deck-cover
photo: pilgrims
photoAlt: Jemaah di Masjidil Haram, Makkah
---

<script setup lang="ts">
import { company } from '../data/company'
import { report } from '../data/report'
</script>

<UiChip v-reveal tone="primary">Laporan {{ report.period }}</UiChip>

<h2 v-reveal="1" class="font-display text-[3.4rem] leading-tight font-semibold">Terima Kasih</h2>

<p v-reveal="2" class="max-w-[44ch] text-[1rem] leading-relaxed text-white/75">
  Sampai jumpa di laporan bulan Oktober.
</p>

<p v-reveal="4" class="mt-4 text-xs tracking-wide text-white/75">{{ company.legalName }} · {{ company.tagline }} · {{ company.headOffice }}</p>
