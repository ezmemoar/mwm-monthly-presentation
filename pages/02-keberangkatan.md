---
layout: deck-dark
---

<script setup lang="ts">
import { departures } from '../data/report'

const total = departures.reduce((sum, d) => sum + d.pilgrims, 0)
</script>

<!-- No blank lines inside the HTML blocks below: markdown-it would end the
     block there and render the rest as a code fence. -->

<div class="grid grid-cols-[0.8fr_1.2fr] items-center gap-12">
  <div>
    <BigNumber value="02" class="mb-8 block" />
    <SlideHeading eyebrow="Keberangkatan Jemaah" :title="`${total} Jemaah Berangkat ke Tanah Suci`" :subtitle="`Ada ${departures.length} keberangkatan sepanjang September.`" />
  </div>
  <div class="grid grid-cols-2 gap-8">
    <FlyerCard v-for="(departure, i) in departures" :key="departure.date" v-reveal="i + 1" :departure="departure" />
  </div>
</div>
