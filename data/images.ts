/**
 * Every remote asset the deck references, in one place — swap a URL here and it
 * updates on every slide that uses it.
 */
export const brandLogo
  = 'https://bb71d2eac085c69b0.nos.wjv-1.neo.id/1710408602-478630/17708782534377-MJIzTJueE1.png'

export const photos = {
  /** Cover: the whole Haram seen from above, Kakbah at its centre. */
  kaabaAerial: 'https://images.unsplash.com/photo-1720482229376-d5574ffeb0c8?auto=format&fit=crop&w=2000&q=80',
  kaabaCrowd: 'https://images.unsplash.com/photo-1605553378313-22d0dc541393?auto=format&fit=crop&w=1800&q=80',
  kaabaNight: 'https://images.unsplash.com/photo-1771170983433-1576bc4a7eec?auto=format&fit=crop&w=1800&q=80',
  kaaba: 'https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?auto=format&fit=crop&w=1200&q=80',
  kaabaThumb: 'https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?auto=format&fit=crop&w=700&q=80',
  nabawi: 'https://images.unsplash.com/photo-1523151164408-6540213bd2c8?auto=format&fit=crop&w=1800&q=80',
  nabawiThumb: 'https://images.unsplash.com/photo-1523151164408-6540213bd2c8?auto=format&fit=crop&w=700&q=80',
  nabawiDome: 'https://images.unsplash.com/photo-1692977579997-948328cdb7d2?auto=format&fit=crop&w=700&q=80',
  haram: 'https://images.unsplash.com/photo-1579305796153-ab71ce202953?auto=format&fit=crop&w=1800&q=80',
  haramWide: 'https://images.unsplash.com/photo-1579305796153-ab71ce202953?auto=format&fit=crop&w=1200&q=80',
  pilgrims: 'https://images.unsplash.com/photo-1513072064285-240f87fa81e8?auto=format&fit=crop&w=1800&q=80',
  pilgrimsWide: 'https://images.unsplash.com/photo-1513072064285-240f87fa81e8?auto=format&fit=crop&w=1200&q=80',
  madinah: 'https://images.unsplash.com/photo-1577295605163-132e25c3c914?auto=format&fit=crop&w=700&q=80',
} as const

/**
 * Institution marks. The supervising bodies (`public/images/diawasi`) and the
 * partner institutions (`public/images/lembaga`) are served locally; the two
 * without a local asset are hot-linked, and anything with no asset at all falls
 * back to a typographic tile (see `CredentialBadge` / `PartnerCard`).
 */
export const logos = {
  kan: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Logo_KAN.png',
  asita: '/images/diawasi/asita.png',
  kesthuri: '/images/diawasi/kesthuri.png',
  kemenag: '/images/diawasi/5-pasti-umroh.png',
  bankIndonesia: '/images/lembaga/mmbi.png',
  indosat: '/images/lembaga/ski-indosat.webp',
  elnusa: '/images/lembaga/ybh-elnusa.png',
  bpkp: '/images/lembaga/bpkb.jpg',
  alKahfi: 'https://pesantrenalkahfi.com/wp-content/uploads/2023/08/LOGO-WEB-AL-KAHFI-2.webp',
} as const

const brochureBase = 'https://brosur.mwm.web.id/brosur/img'

export const brochures = {
  barokah9: `${brochureBase}/9a3c514cdc8ff58b7eb6ace6f06f0eae14a063a9f844be98f7173f42e019c121.jpg`,
  umroh13: `${brochureBase}/46d0515ac03acf594c58ce02e80181f02c0dbb5b56a664c54ec0206e45a807ec.jpg`,
  barokah9Waris: '/images/brosur/barokah-9-waris.jpg',
  itikafRamadhan: `${brochureBase}/9268aaa89017f7c70dd07beab9d16bdf8d6479626b1cf0c4fe50b03f58072d93.jpg`,
} as const
