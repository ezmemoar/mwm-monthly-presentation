<script setup lang="ts">
import { computed, ref, toRef, watch } from 'vue'
import type { SlideVariant } from '../../composables/useSlideVariant'
import { isPrintMode } from '../../composables/useEnv'
import { useInView } from '../../composables/useInView'
import { useTone } from '../../composables/useTone'

const props = defineProps<{
  value: number
  suffix?: string
  label: string
  variant?: SlideVariant
}>()

const { muted } = useTone(toRef(props, 'variant'))
const { target, inView } = useInView(0.3)

const current = ref(isPrintMode() ? props.value : 0)
const formatted = computed(() => current.value.toLocaleString('id-ID'))

const DURATION = 1600

function countUp() {
  const startedAt = performance.now()

  const step = (now: number) => {
    const t = Math.min((now - startedAt) / DURATION, 1)
    // easeOutCubic, matching the original GSAP `power2.out` feel
    current.value = Math.round(props.value * (1 - (1 - t) ** 3))
    if (t < 1)
      requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

watch(inView, (visible) => {
  if (visible && !isPrintMode())
    countUp()
})
</script>

<template>
  <div ref="target" class="stat-card">
    <span class="stat-card__value">{{ formatted }}<template v-if="suffix">{{ suffix }}</template></span>
    <p class="mt-2 text-[0.8rem] leading-snug" :class="muted">{{ label }}</p>
  </div>
</template>
