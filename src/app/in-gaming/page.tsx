import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'o7 in Gaming — Coming Soon',
  description: 'A guide to how o7 is used across gaming communities. Coming soon.',
  robots: { index: false },
}

export default function InGamingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
      <h1 className="text-4xl font-bold text-sc-white">o7 in Gaming</h1>
      <p className="text-sc-muted text-lg max-w-xl mx-auto">
        A deep-dive into how o7 is used across gaming communities — Twitch, Discord,
        EVE Online, Elite Dangerous, and beyond. Coming soon.
      </p>
      <Link href="/" className="text-sc-cyan hover:text-sc-cyan-dark transition-colors">
        ← Back to o7 Meaning
      </Link>
    </div>
  )
}
