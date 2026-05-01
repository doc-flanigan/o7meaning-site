import type { Metadata } from 'next'
import Link from 'next/link'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'o7 in Star Citizen — What It Means and How to Use It',
  description:
    'In Star Citizen, o7 is the universal greeting between players. Learn how to use it, when to use it, and how to get started in the game.',
  alternates: { canonical: 'https://o7meaning.com/in-star-citizen' },
  openGraph: {
    title: 'o7 in Star Citizen — What It Means and How to Use It',
    description:
      'In Star Citizen, o7 is the universal greeting between players. Learn how to use it, when to use it, and how to get started in the game.',
    url: 'https://o7meaning.com/in-star-citizen',
  },
}

export default function InStarCitizenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

      <section>
        <h1 className="text-4xl font-bold text-sc-white mb-4">
          o7 in Star Citizen
        </h1>
        <p className="text-sc-muted text-lg leading-relaxed">
          In Star Citizen, o7 is more than a text emoticon — it is the standard greeting
          of the player community. Understanding it is your first step into one of the
          most active gaming communities online.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sc-white mb-4">What It Means in This Game</h2>
        <p className="text-sc-muted leading-relaxed mb-4">
          Star Citizen is a space game set in a far-future universe where players take on
          roles as pilots, soldiers, traders, and explorers. The game&rsquo;s fiction draws on
          military and naval traditions, so a salute fits naturally into the culture.
        </p>
        <p className="text-sc-muted leading-relaxed">
          When a player types o7 in game chat or on the official Roberts Space Industries
          (RSI) forums, they are greeting another player as a fellow citizen of the in-game
          universe. It signals: &ldquo;I respect you, fly safe, and good luck out there.&rdquo;
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sc-white mb-4">How to Use It</h2>
        <ul className="space-y-3">
          <li className="flex gap-4">
            <span className="text-sc-cyan font-mono shrink-0">o7</span>
            <span className="text-sc-muted">Standard greeting when entering a server or meeting another player.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-sc-cyan font-mono shrink-0">o7 citizen</span>
            <span className="text-sc-muted">Common welcome phrase used toward new or unfamiliar players.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-sc-cyan font-mono shrink-0">fly safe o7</span>
            <span className="text-sc-muted">A farewell, often used at the end of a group session.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-sc-cyan font-mono shrink-0">o7 commander</span>
            <span className="text-sc-muted">Used when addressing an org (player organisation) leader or experienced player.</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sc-white mb-4">Where You Will See It</h2>
        <p className="text-sc-muted leading-relaxed mb-3">
          o7 appears across all Star Citizen community spaces:
        </p>
        <ul className="list-disc list-inside text-sc-muted space-y-2 ml-2">
          <li>In-game chat channels (Global, Region, and Organisation channels)</li>
          <li>The official RSI forums and Spectrum (the RSI community platform)</li>
          <li>YouTube thumbnails and video titles from Star Citizen content creators</li>
          <li>Twitch chat during Star Citizen streams</li>
          <li>The Star Citizen subreddit and Discord servers</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-sc-white mb-4">Star Citizen Is Free to Try</h2>
        <p className="text-sc-muted leading-relaxed mb-6">
          You do not need to spend money to start playing Star Citizen. Create a free account,
          use referral code <strong className="text-sc-white">STAR-GCQJ-N6NC</strong>,
          and receive 50,000 UEC (United Earth Credits — the in-game currency) automatically.
          During Free Fly events, the full game is playable without any purchase.
        </p>
        <CTAButton />
      </section>

      <div className="pt-4">
        <Link href="/" className="text-sc-cyan hover:text-sc-cyan-dark transition-colors text-sm">
          ← Back to o7 Meaning
        </Link>
      </div>

    </div>
  )
}
