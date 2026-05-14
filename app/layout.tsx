import type { Metadata } from 'next'
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Happy Spin — Table Tennis Academy · Forest Hill, VIC',
  description: 'Structured table tennis coaching for all ages and levels in Forest Hill, Melbourne. Individual, 1-on-2 and group sessions. Book your trial session today.',
  keywords: ['table tennis', 'coaching', 'Forest Hill', 'Melbourne', 'kids', 'adults', 'beginners', 'Happy Spin'],
  openGraph: {
    title: 'Happy Spin Table Tennis Academy | Forest Hill Melbourne',
    description: 'Structured coaching for all ages and levels in Forest Hill, Melbourne. Book your trial session today.',
    images: [{ url: '/hero-graphic.png', width: 800, height: 600, alt: 'Happy Spin Table Tennis Academy' }],
    locale: 'en_AU',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Happy Spin Table Tennis Academy',
  description: 'Structured table tennis coaching for all ages and levels in Forest Hill, Melbourne.',
  url: 'https://happyspintt.com.au',
  telephone: '0433883078',
  email: 'happyspintt@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '140 Mahoneys Road',
    addressLocality: 'Forest Hill',
    addressRegion: 'VIC',
    postalCode: '3131',
    addressCountry: 'AU',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '16:30', closes: '18:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '16:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '16:30', closes: '18:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '13:00', closes: '19:00' },
  ],
  image: '/hero-graphic.png',
  priceRange: '$$',
  currenciesAccepted: 'AUD',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
