import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'o7 Meaning in Gaming — The Salute Explained',
  description:
    'In gaming, o7 is a text salute — the "o" is a head, the "7" a raised arm. How EVE, Elite Dangerous, Star Citizen, and Twitch use it.',
  alternates: { canonical: 'https://o7meaning.com/in-gaming' },
  openGraph: {
    title: 'o7 Meaning in Gaming — The Salute Used Across Gaming Communities',
    description:
      'In gaming, o7 is a text emoticon salute — the "o" is a head, the "7" a raised arm. Learn how EVE Online, Elite Dangerous, Star Citizen, Twitch, and Discord communities use it.',
    url: 'https://o7meaning.com/in-gaming',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'o7 in gaming — the salute emoticon across gaming communities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'o7 Meaning in Gaming — The Salute Used Across Gaming Communities',
    description:
      'In gaming, o7 is a text emoticon salute used in EVE Online, Elite Dangerous, Star Citizen, and on Twitch and Discord.',
    images: ['/images/og-default.jpg'],
  },
}

const pageFaqs = [
  {
    question: 'What does o7 mean in gaming?',
    answer:
      'In gaming, o7 is a text emoticon that represents a salute — the "o" is a head and the "7" is a raised arm. Players type it to greet each other, show respect, or say goodbye. It is most strongly associated with space games like EVE Online, Elite Dangerous, and Star Citizen, but it appears across gaming culture, including Twitch chat and Discord.',
  },
  {
    question: 'Which game started o7?',
    answer:
      'The salute emoticon grew in popularity through massively multiplayer online games in the early 2000s. EVE Online is widely credited as one of the first communities to make o7 a standard greeting, and from there it spread to other games and to general gaming culture.',
  },
  {
    question: 'Is o7 only used in space games?',
    answer:
      'No. Space-sim communities gave o7 its strongest traditions, but it is now used across gaming — in Twitch chat to salute a streamer, on Discord servers as a quick respectful greeting, and even on social media with no gaming context at all.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: pageFaqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://o7meaning.com' },
    { '@type': 'ListItem', position: 2, name: 'o7 in Gaming', item: 'https://o7meaning.com/in-gaming' },
  ],
}

export default function InGamingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

        {/* Answer-first lead */}
        <section>
          <h1 className="text-4xl font-bold text-sc-white mb-4">o7 in Gaming</h1>
          <div className="bg-sc-slate-mid rounded-xl p-6 border border-sc-cyan/20">
            <p className="text-xl text-sc-white leading-relaxed">
              <strong className="text-sc-cyan">
                In gaming, o7 is a text emoticon salute — the &ldquo;o&rdquo; is a head, the
                &ldquo;7&rdquo; is a raised arm — typed to greet, respect, or bid farewell to
                other players.
              </strong>{' '}
              It began in online game communities, became a signature of space-sim culture,
              and now shows up everywhere from Twitch chat to Discord servers.
            </p>
          </div>
        </section>

        {/* EVE Online and Elite Dangerous */}
        <section>
          <h2 className="text-2xl font-bold text-sc-white mb-4">EVE Online and Elite Dangerous</h2>
          <p className="text-sc-muted leading-relaxed mb-4">
            The salute emoticon grew in popularity through massively multiplayer online games in
            the early 2000s, and space games gave it its strongest home. EVE Online — a
            space-based online game with a formal, corporation-driven player culture — is widely
            credited as one of the first communities to make o7 a standard greeting. Pilots
            exchange it in chat, in forum posts, and at the start and end of fleet operations.
          </p>
          <p className="text-sc-muted leading-relaxed">
            Elite Dangerous players adopted the same convention. In a game where everyone is
            addressed as &ldquo;Commander,&rdquo; a crisp text salute between pilots fits
            naturally. In both communities, o7 works as hello, goodbye, and &ldquo;fly
            safe&rdquo; all at once.
          </p>
        </section>

        {/* Star Citizen */}
        <section>
          <h2 className="text-2xl font-bold text-sc-white mb-4">Star Citizen</h2>
          <p className="text-sc-muted leading-relaxed">
            Star Citizen inherited the convention from the space-sim communities that came before
            it, and today it has the largest community use of o7 outside of EVE Online.
            &ldquo;o7 citizen&rdquo; is one of the most common phrases experienced players use to
            welcome newcomers, and the salute appears in game chat, on the official forums, and
            across community videos and streams. For the full picture of how the phrase works in
            that game — including when and how to use it — see our guide to{' '}
            <Link href="/in-star-citizen" className="text-sc-cyan underline hover:text-sc-cyan-dark">
              o7 in Star Citizen
            </Link>
            .
          </p>
        </section>

        {/* Twitch and Discord */}
        <section>
          <h2 className="text-2xl font-bold text-sc-white mb-4">Twitch and Discord</h2>
          <p className="text-sc-muted leading-relaxed">
            Outside of any single game, o7 has become a general sign of respect. On Twitch,
            viewers type it to salute a streamer after an impressive play, and end-of-stream
            chats often fill with a wall of o7s as a collective goodbye. You will also see
            &ldquo;o7 to the fallen&rdquo; when a community marks a loss or a farewell. On
            Discord, o7 works as a quick, respectful greeting that needs no explanation among
            gamers — two keystrokes that say &ldquo;I see you, and I respect you.&rdquo;
          </p>
        </section>

        {/* How to use it */}
        <section>
          <h2 className="text-2xl font-bold text-sc-white mb-4">How to Use o7</h2>
          <ul className="space-y-3">
            <li className="flex gap-4">
              <span className="text-sc-cyan font-mono shrink-0">o7</span>
              <span className="text-sc-muted">
                Type a lowercase &ldquo;o&rdquo; followed by the number &ldquo;7&rdquo;, no space.
                Use it as a greeting when joining a lobby, server, or chat.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-sc-cyan font-mono shrink-0">o7</span>
              <span className="text-sc-muted">
                Use it as a farewell — leaving a session, ending a stream, or logging off for
                the night.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-sc-cyan font-mono shrink-0">7o</span>
              <span className="text-sc-muted">
                Some players return a salute with the reversed form, though replying with
                another o7 is always correct.
              </span>
            </li>
          </ul>
          <p className="text-sc-muted leading-relaxed mt-5">
            The etiquette is simple: o7 is sincere by default. It can be used playfully, but it
            is rarely an insult — when in doubt, read it as respect. Returning someone&rsquo;s o7
            costs you two keystrokes and marks you as someone who knows the culture.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-sc-white mb-6">o7 in Gaming — FAQ</h2>
          <dl className="space-y-4">
            {pageFaqs.map(({ question, answer }) => (
              <div
                key={question}
                className="bg-sc-slate-mid rounded-xl p-6 border border-sc-slate-mid hover:border-sc-cyan/30 transition-colors"
              >
                <dt className="text-sc-white font-semibold text-lg mb-2">{question}</dt>
                <dd className="text-sc-muted leading-relaxed">{answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="pt-4">
          <Link href="/" className="text-sc-cyan hover:text-sc-cyan-dark transition-colors text-sm">
            ← Back to o7 Meaning
          </Link>
        </div>

      </div>
    </>
  )
}
