import type { Benefit, Stat } from './company'
import { brochures } from './images'

/**
 * Copy for the September 2026 monthly report (`slides.md`). Every string lives
 * here; the slides only arrange it.
 */
export const report = {
  period: 'September 2026',
  nextPeriod: 'Oktober 2026',
} as const

/** `done` reads as settled, `progress` as still moving, `idle` as not yet. */
export type ReportStatus = 'done' | 'progress' | 'idle'

export const summaryStats: Stat[] = [
  { value: 3, label: 'Jemaah diberangkatkan' },
  { value: 2, label: 'Jadwal keberangkatan' },
  { value: 1, label: 'Pertemuan kerja sama' },
  { value: 2, label: 'Organisasi sedang dihubungi' },
]

export interface AgendaItem {
  /** Outlined numeral of the slide that covers it. */
  index: string
  title: string
  note: string
}

export const agenda: AgendaItem[] = [
  { index: '02', title: 'Keberangkatan Jemaah', note: '2 keberangkatan, 3 jemaah' },
  { index: '03', title: 'Progres Iklan', note: 'Iklan efektif mendatangkan leads' },
  { index: '04', title: 'Agen Referral', note: 'Bonus Rp300.000 per jemaah' },
  { index: '05', title: 'Kerja Sama', note: 'SMP IT Iman, Tempe Azaki, Porto' },
  { index: '06', title: 'Langkah Selanjutnya', note: 'Agent Workshop 10 Oktober' },
]

export interface Departure {
  date: string
  weekday: string
  package: string
  pilgrims: number
  /** Package flyer; without one the slide sets a typographic stand-in. */
  flyer?: string
}

export const departures: Departure[] = [
  { date: '9 September 2026', weekday: 'Rabu', package: 'Umroh Plus Turki', pilgrims: 1 },
  { date: '20 September 2026', weekday: 'Minggu', package: 'Umroh Barokah', pilgrims: 2, flyer: brochures.barokah9 },
]

export interface AdPoint {
  icon: string
  label: string
  tone: ReportStatus
  title: string
  body: string
}

export const adPoints: AdPoint[] = [
  {
    icon: 'i-heroicons-megaphone',
    label: 'Yang berjalan',
    tone: 'done',
    title: 'Leads berdatangan',
    body: 'Setelah melihat iklan, banyak calon jemaah menghubungi kami lewat chat.',
  },
  {
    icon: 'i-heroicons-chat-bubble-left-right',
    label: 'Kendala',
    tone: 'progress',
    title: 'Banyak yang hanya sebatas bertanya',
    body: 'Belum ada kepastian dari mereka. Sudah di follow up dan diajak untuk berkunjung ke kantor tapi sepertinya masih sebatas ingin tanya-tanya dulu.',
  },
]

/** Stated in words on purpose: the slide reports the result without a bare zero. */
export const adResult = {
  label: 'Hasil iklan September',
  value: 'Leads mulai mengalir',
  note: 'Langkah berikutnya adalah memilah dan menindaklanjuti leads yang serius sampai mendaftar.',
}

export interface Step {
  icon: string
  title: string
  body: string
}

export const referralSteps: Step[] = [
  {
    icon: 'i-heroicons-share',
    title: 'Bagikan info',
    body: 'Info umroh Mitra Wisata Mandiri dibagikan ke keluarga, teman, atau kenalan.',
  },
  {
    icon: 'i-heroicons-chat-bubble-left-right',
    title: 'Calon jemaah chat kami',
    body: 'Orang yang dikenalkan menghubungi kami untuk bertanya soal umroh.',
  },
  {
    icon: 'i-heroicons-banknotes',
    title: 'Jemaah berangkat, bonus cair',
    body: 'Begitu jemaah itu mengambil keberangkatan, orang yang mengenalkannya menerima bonus fee.',
  },
]

export const referralFee = {
  amount: 'Rp300.000',
  caption: 'Bonus fee per jemaah',
}

export interface StatusLine {
  label: string
  status: string
  tone: ReportStatus
}

export const referralReach: StatusLine[] = [
  { label: 'Perorangan', status: 'Sudah disebarkan', tone: 'done' },
  { label: 'Organisasi', status: 'Sudah disebarkan', tone: 'done' },
  { label: 'Penyebaran berikutnya', status: 'Berlanjut', tone: 'progress' },
]

export interface Outcome {
  icon: string
  text: string
}

export interface Prospect {
  name: string
  kind: string
  status: string
  tone: ReportStatus
  outcomes: Outcome[]
}

export const prospects: Prospect[] = [
  {
    name: 'SMP IT Iman',
    kind: 'Sekolah',
    status: 'Sudah bertemu',
    tone: 'done',
    outcomes: [
      { icon: 'i-heroicons-minus-circle', text: 'Untuk saat ini belum bisa memberangkatkan umroh.' },
      { icon: 'i-heroicons-document-text', text: 'Kami diizinkan menyebarkan brosur di sekolah.' },
    ],
  },
  {
    name: 'Tempe Azaki',
    kind: 'Organisasi',
    status: 'Dalam proses',
    tone: 'progress',
    outcomes: [
      { icon: 'i-heroicons-clock', text: 'Sudah kami hubungi, tapi belum ada tanggapan.' },
    ],
  },
  {
    name: 'Porto',
    kind: 'Organisasi',
    status: 'Dalam proses',
    tone: 'progress',
    outcomes: [
      { icon: 'i-heroicons-clock', text: 'Sudah kami hubungi, tapi belum ada tanggapan.' },
    ],
  },
]

/** Rendered with `BenefitRow`, the same ledger rows the old partnership slide used. */
export const nextSteps: Benefit[] = [
  {
    step: '01',
    headline: '10 Okt',
    headlineNote: 'Agent Workshop · Sabtu',
    title: 'Mencari calon agen baru',
    body: 'Mengikuti agenda agen baru dari MWM Pusat, kami mencari orang yang berpotensi menjadi agen dan mengajak mereka ikut Agent Workshop tanggal 10 Oktober, atau di waktu lain yang cocok untuk semua.',
  },
  {
    step: '02',
    headline: 'Referral',
    headlineNote: 'Penyebaran berlanjut',
    title: 'Menambah agen referral',
    body: 'Kami terus menyebarkan info program ini supaya makin banyak orang mau menjadi agen referral.',
  },
  {
    step: '03',
    headline: 'Kerja sama',
    headlineNote: 'Instansi · sekolah · organisasi',
    title: 'Mencari kerja sama baru',
    body: 'Kami akan mencari peluang kerja sama lain dengan instansi, sekolah, organisasi, dan lembaga lainnya.',
  },
]
