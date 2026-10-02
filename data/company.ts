import { logos } from './images'

export interface Stat {
  /** Numeric target for the count-up animation. */
  value: number
  suffix?: string
  label: string
}

export interface Credential {
  mark: string
  name: string
  /** Full institution name, used as the image alt text. */
  full: string
  /** Omit when no public asset exists — the badge falls back to `mark`. */
  logo?: string
}

export interface Office {
  kind: 'Kantor Pusat' | 'Cabang'
  city: string
  region: string
  address: string
  phone?: string
  note?: string
}

export interface Partner {
  mark: string
  name: string
  org: string
  logo?: string
  class?: string
}

export interface Contact {
  icon: string
  label: string
}

export const company = {
  legalName: 'PT Mitra Wisata Mandiri',
  tagline: 'Travel Haji & Umroh Berizin PPIU',
  headOffice: 'Jl. Pisangan Baru Tengah No. 4, Matraman, Jakarta Timur',
} as const

export const stats: Stat[] = [
  { value: 12, label: 'Tahun melayani perjalanan ibadah' },
  { value: 20000, suffix: '+', label: 'Jemaah telah diberangkatkan' },
  { value: 1000, suffix: '+', label: 'Jemaah diberangkatkan sepanjang 2025' },
  { value: 4, label: 'Kantor cabang aktif' },
]

export const credentials: Credential[] = [
  { mark: 'KAN', name: 'Komite Akreditasi Nasional', full: 'Komite Akreditasi Nasional', logo: logos.kan },
  { mark: 'ASITA', name: 'Tour & Travel Agencies', full: 'Association of the Indonesian Tours and Travel Agencies', logo: logos.asita },
  { mark: 'KESTHURI', name: 'Tour Travel Haji Umrah RI', full: 'Kesatuan Tour Travel Haji Umrah Republik Indonesia', logo: logos.kesthuri },
  { mark: '5 PASTI', name: 'Program 5 Pasti Umroh', full: 'Kementerian Agama Republik Indonesia — Program 5 Pasti Umroh', logo: logos.kemenag },
]

export const offices: Office[] = [
  {
    kind: 'Kantor Pusat',
    city: 'Jakarta Timur',
    region: 'DKI Jakarta',
    address: 'Jl. Pisangan Baru Tengah No. 4, Matraman, Jakarta Timur',
    phone: '(021) 2882-1415',
  },
  {
    kind: 'Cabang',
    city: 'Sukabumi',
    region: 'Jawa Barat',
    address: 'Ruko Biru Pertigaan, Jl. Cikiray-Cijambu, Sukamanah, Kec. Cisaat, Kabupaten Sukabumi 43152',
    note: 'Melayani jemaah dan mitra area Jawa Barat selatan',
  },
]

export const partners: Partner[] = [
  { mark: 'BI', name: 'Masjid Baitul Ihsan', org: 'Bank Indonesia', logo: logos.bankIndonesia, class: "w-18" },
  { mark: 'SKI', name: 'Sarana Kerohanian Islam', org: 'Indosat Ooredoo Hutchison', logo: logos.indosat, class: "w-40" },
  { mark: 'BH', name: 'Yayasan Baitul Hikmah', org: 'Elnusa', logo: logos.elnusa, class: "w-20" },
  { mark: 'AR', name: 'Masjid Ar-Raqib', org: 'BPKP', logo: logos.bpkp, class: "w-24" },
  { mark: 'AK', name: 'Ponpes Terpadu Al-Kahfi', org: 'Lembaga Pendidikan', logo: logos.alKahfi, class: "w-40" },
]

export const contacts: Contact[] = [
  { icon: 'i-simple-icons-whatsapp', label: '0852-1320-1452' },
  { icon: 'i-heroicons-phone', label: '(021) 2289-9683' },
  { icon: 'i-heroicons-envelope', label: 'info@mitrawisatamandiri.co.id' },
]

export interface Benefit {
  /** Two-digit ordinal — the partnership is a sequence, not a menu. */
  step: string
  headline: string
  headlineNote: string
  title: string
  body: string
}

export const agentBenefits: Benefit[] = [
  {
    step: '01',
    headline: 'Rp300.000',
    headlineNote: 'per jemaah',
    title: 'Komisi setiap jemaah',
    body: 'Anda hanya perlu menawarkan paket kami ke calon jemaah. Seluruh proses pendaftaran, dokumen, hingga keberangkatan sepenuhnya kami yang tangani.',
  },
  {
    step: '02',
    headline: 'Umroh gratis',
    headlineNote: 'di jemaah ke-25',
    title: 'Ucapan terima kasih dari kami',
    body: 'Berhasil mengajak 25 jemaah secara akumulatif selama kerja sama kita berjalan? Kami berangkatkan Anda umroh secara gratis.',
  },
  {
    step: '03',
    headline: 'Fasilitas bus',
    headlineNote: 'jika 25 orang dalam 1 keberangkatan.',
    title: 'Gratis bus perjalanan pulang pergi',
    body: 'Apabila jemaah yang berangkat dalam 1 keberangkatan berjumlah 25 orang, maka kami bisa sediakan bus untuk perjalanan sehingga jemaah bisa berangkat dengan nyaman. Belum termasuk makan dan minum.',
  },
]
