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
  },
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
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
