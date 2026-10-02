---
layout: deck-dark
---

<script setup lang="ts">
import { nextSteps, report } from '../data/report'
</script>

<SlideHeading eyebrow="Langkah Selanjutnya" :title="`Rencana ${report.nextPeriod}`" subtitle="Untuk Oktober kami fokus menambah agen, memperluas referral, dan mencari kerja sama baru." index="06" class="mb-8" />

<div>
  <BenefitRow v-for="(step, i) in nextSteps" :key="step.step" v-reveal="i + 1" :benefit="step" />
</div>
