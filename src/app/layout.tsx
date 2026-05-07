import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mag Dental Clinic — Zâmbetul tău, arta noastră',
  description:
    'Clinică stomatologică premium în Chișinău. Stomatologie generală, implantologie, ortodonție, estetică dentară, albire profesională și urgențe.',
  keywords: [
    'stomatologie',
    'dentist',
    'Chișinău',
    'implantologie',
    'ortodonție',
    'estetică dentară',
    'albire dinți',
  ],
  openGraph: {
    title: 'Mag Dental Clinic — Zâmbetul tău, arta noastră',
    description: 'Clinică stomatologică premium în Chișinău, Moldova.',
    locale: 'ro_MD',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans text-ink">{children}</body>
    </html>
  )
}
