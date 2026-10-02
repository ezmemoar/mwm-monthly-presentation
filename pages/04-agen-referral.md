---
layout: deck-dark
photo: nabawi
photoAlt: Masjid Nabawi, Madinah
---

<script setup lang="ts">
import { referralFee, referralReach, referralSteps } from '../data/report'
</script>

<SlideHeading eyebrow="Agen Referral" title="Kenalkan Jemaah, Dapat Bonus Fee" subtitle="Kami memulai program ini di bulan September. Siapa pun yang mengenalkan calon jemaah ke kami mendapat bonus saat jemaah tersebut berangkat." index="04" class="mb-9" />

<div class="grid grid-cols-[1fr_0.78fr] items-start gap-14">
  <ReferralSteps :steps="referralSteps" />
  <UiCard v-reveal="2" class="p-6">
    <PriceTag :price="referralFee.amount" :caption="referralFee.caption" />
    <p class="eyebrow mt-7 mb-1 text-gold-300">Status penyebaran</p>
    <ul>
      <li v-for="line in referralReach" :key="line.label" class="hairline-dark flex items-center justify-between py-2.5">
        <span class="text-[0.88rem] font-semibold">{{ line.label }}</span>
        <StatusPill :tone="line.tone">{{ line.status }}</StatusPill>
      </li>
    </ul>
  </UiCard>
</div>
