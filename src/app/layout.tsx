import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://o7meaning.com'),
  title: {
    default: 'What Does o7 Mean? | o7meaning.com',
    template: '%s | o7meaning.com',
  },
  description:
    'o7 is a text emoticon salute used across gaming communities. The "o" represents a head, the "7" a raised arm. Full explanation here.',
  openGraph: {
    siteName: 'o7meaning.com',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'o7 — the gaming salute explained at o7meaning.com',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Does o7 Mean? | o7meaning.com',
    description:
      'o7 is a text emoticon salute used across gaming communities. The "o" represents a head, the "7" a raised arm.',
    images: ['/images/og-default.jpg'],
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'o7meaning.com',
  url: 'https://o7meaning.com',
  description:
    'o7 is a text emoticon salute used across gaming communities. Explained in plain English.',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'o7meaning.com',
  url: 'https://o7meaning.com',
  description: 'Fan-made Star Citizen community resource by Doc_Flanigan. Not affiliated with Cloud Imperium Games.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-sc-slate text-sc-white min-h-screen`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
