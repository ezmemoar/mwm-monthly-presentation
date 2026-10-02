import { defineConfig } from 'unocss'

/**
 * Slidev ships UnoCSS with `presetIcons` enabled, which is what turns the
 * `i-heroicons-*` / `i-simple-icons-*` classes into inline SVG. Icon names that
 * only ever appear inside `data/*.ts` are not part of UnoCSS' default scan
 * pipeline, so they are safelisted here.
 */
const icons = [
  // heroicons
  'i-heroicons-academic-cap',
  'i-heroicons-arrow-down',
  'i-heroicons-arrow-right',
  'i-heroicons-banknotes',
  'i-heroicons-book-open',
  'i-heroicons-building-library',
  'i-heroicons-building-office-2',
  'i-heroicons-building-storefront',
  'i-heroicons-cake',
  'i-heroicons-calendar-days',
  'i-heroicons-chat-bubble-left-right',
  'i-heroicons-check-badge',
  'i-heroicons-chevron-down',
  'i-heroicons-clock',
  'i-heroicons-document-text',
  'i-heroicons-envelope',
  'i-heroicons-gift',
  'i-heroicons-globe-alt',
  'i-heroicons-map',
  'i-heroicons-map-pin',
  'i-heroicons-megaphone',
  'i-heroicons-minus-circle',
  'i-heroicons-paper-airplane',
  'i-heroicons-phone',
  'i-heroicons-share',
  'i-heroicons-shield-check',
  'i-heroicons-sparkles',
  'i-heroicons-star',
  'i-heroicons-ticket',
  'i-heroicons-trophy',
  'i-heroicons-user-group',
  // simple-icons
  'i-simple-icons-ethiopianairlines',
  'i-simple-icons-lionair',
  'i-simple-icons-whatsapp',
]

export default defineConfig({
  safelist: icons,
})
