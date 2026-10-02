---
# Monthly report deck. Slide bodies live in `pages/`, copy in `data/report.ts`.
theme: default
title: Laporan Bulanan September 2026 — PT Mitra Wisata Mandiri
info: |
  ## Laporan Bulanan · September 2026
  Keberangkatan jemaah, progres iklan, program agen referral, kerja sama
  lembaga, dan rencana kerja bulan berikutnya.
author: PT Mitra Wisata Mandiri
lang: id
canvasWidth: 1280
aspectRatio: 16/9
fonts:
  sans: Plus Jakarta Sans
  serif: Fraunces
  weights: '400,500,600,700,800'
transition: fade
mdc: true
drawings:
  persist: false
layout: deck-cover
photo: kaabaNight
photoAlt: Kakbah di malam hari, Masjidil Haram
hint: true
---

<script setup lang="ts">
import { report } from './data/report'
</script>

<p v-reveal class="eyebrow flex items-center gap-3 text-gold-300">
  <span class="gold-rule inline-block w-8 rotate-180" aria-hidden="true"></span>
  Laporan Bulanan · {{ report.period }}
  <span class="gold-rule inline-block w-8" aria-hidden="true"></span>
</p>

<h1 v-reveal="1" class="font-display text-[4.4rem] leading-[1.0] font-semibold -tracking-[0.03em]">
  Laporan Kegiatan<br>{{ report.period }}
</h1>

<p v-reveal="2" class="max-w-[40ch] text-[1.05rem] leading-relaxed text-white/75">
  Keberangkatan jemaah, iklan, agen referral, kerja sama, dan rencana untuk
  bulan Oktober.
</p>

---
src: ./pages/01-ringkasan.md
---

---
src: ./pages/02-keberangkatan.md
---

---
src: ./pages/03-progres-iklan.md
---

---
src: ./pages/04-agen-referral.md
---

---
src: ./pages/05-kerja-sama.md
---

---
src: ./pages/06-langkah-selanjutnya.md
---

---
src: ./pages/07-penutup.md
---
