---
layout: deck-light
---

<script setup lang="ts">
import { adPoints, adResult } from '../data/report'
</script>

<SlideHeading eyebrow="Progres Iklan" title="Iklan Efektif Mendatangkan Leads" index="03" class="mb-9" />

<AdSummary :points="adPoints" :result="adResult" />
