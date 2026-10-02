/**
 * Slidev renders every slide at once when exporting to PDF/PNG. Entrance
 * animations must be skipped there, otherwise pages get captured mid-transition.
 */
export function isPrintMode(): boolean {
  if (typeof window === 'undefined')
    return false

  const { pathname, search, hash } = window.location

  return pathname.startsWith('/print')
    || search.includes('print')
    || hash.includes('print')
}
