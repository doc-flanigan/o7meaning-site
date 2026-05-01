import type { Metadata } from 'next'
import HeroCarousel from '@/components/HeroCarousel'
import CTAButton from '@/components/CTAButton'
import SecondaryLink from '@/components/SecondaryLink'
import { faqs } from '@/data/faq'

export const metadata: Metadata = {
  title: 'What Does o7 Mean? The Gaming Salute Explained',
  description:
    'o7 is a text emoticon salute used across gaming communities. The "o" represents a head, the "7" a raised arm. Full explanation here.',
  alternates: { canonical: 'https://o7meaning.com' },
  openGraph: {
    title: 'What Does o7 Mean? The Gaming Salute Explained',
    description:
      'o7 is a text emoticon salute used across gaming communities. The "o" represents a head, the "7" a raised arm. Full explanation here.',
    url: 'https://o7meaning.com',
  },
}

const schemaFaqs = faqs.slice(0, 8)

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: schemaFaqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-16">

        {/* Above-fold answer — immediate, no scroll required */}
        <section>
          <h1 className="text-4xl md:text-5xl font-bold text-sc-white mb-4">
            What Does o7 Mean?
          </h1>
          <div className="bg-sc-slate-mid rounded-xl p-6 border border-sc-cyan/20">
            <p className="text-xl text-sc-white leading-relaxed">
              <strong className="text-sc-cyan">o7 is a text emoticon representing a salute.</strong>{' '}
              The &ldquo;o&rdquo; is a head, the &ldquo;7&rdquo; is a raised arm.
              Gamers type it to greet, respect, or bid farewell to other players.
            </p>
          </div>
        </section>

        {/* Hero carousel */}
        <HeroCarousel />

        {/* Breaking down the emoticon */}
        <section>
          <h2 className="text-2xl font-bold text-sc-white mb-6">Breaking Down the Emoticon</h2>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="bg-sc-slate-mid rounded-xl p-6 text-center min-w-[110px]">
              <span className="text-5xl font-mono text-sc-cyan">o</span>
              <p className="text-sc-muted text-sm mt-2">head</p>
            </div>
            <div className="text-3xl text-sc-muted font-light">+</div>
            <div className="bg-sc-slate-mid rounded-xl p-6 text-center min-w-[110px]">
              <span className="text-5xl font-mono text-sc-cyan">7</span>
              <p className="text-sc-muted text-sm mt-2">raised arm</p>
            </div>
            <div className="text-3xl text-sc-muted font-light">=</div>
            <div className="bg-sc-slate-mid rounded-xl p-6 text-center min-w-[110px]">
              <span className="text-5xl font-mono text-sc-cyan">o7</span>
              <p className="text-sc-muted text-sm mt-2">salute</p>
            </div>
          </div>
          <p className="text-sc-muted mt-5 leading-relaxed">
            Turn your head ninety degrees to the left and you can see it: a figure with a rounded
            head raising one arm in a sharp military salute.
          </p>
        </section>

        {/* Where did o7 come from */}
        <section>
          <h2 className="text-2xl font-bold text-sc-white mb-4">Where Did o7 Come From?</h2>
          <p className="text-sc-muted leading-relaxed">
            The salute emoticon emerged from massively multiplayer online game communities in the
            early 2000s. Space games — where military ranks and ship commands are part of the
            fiction — gave it fertile ground. EVE Online (a space-based online game released
            in 2003) is widely credited as one of the first communities to make o7 a standard
            greeting. From there it spread to other games and eventually to general gaming culture.
          </p>
        </section>

        {/* o7 in Star Citizen */}
        <section>
          <h2 className="text-2xl font-bold text-sc-white mb-4">o7 in Star Citizen</h2>
          <p className="text-sc-muted leading-relaxed mb-4">
            Star Citizen is a space game currently in development by Cloud Imperium Games. It has
            the largest community use of o7 outside of EVE Online. Players greet each other with
            o7 in the game&rsquo;s chat channels, on the official forums at Roberts Space Industries
            (the in-game fiction&rsquo;s space agency), and in community videos and streams.
          </p>
          <p className="text-sc-muted leading-relaxed">
            The game&rsquo;s military setting — players take on roles as pilots, soldiers, and
            traders in a far-future universe — makes the salute feel completely at home.
            &ldquo;o7 citizen&rdquo; is one of the most common phrases you&rsquo;ll hear from
            experienced players welcoming newcomers.
          </p>
        </section>

        {/* o7 on Twitch and Discord */}
        <section>
          <h2 className="text-2xl font-bold text-sc-white mb-4">o7 on Twitch and Discord</h2>
          <p className="text-sc-muted leading-relaxed">
            On Twitch, viewers type o7 in chat to salute a streamer — often when something
            impressive happens, or when saying goodbye at the end of a stream. The emoticon works
            across any gaming stream, not only space games. On Discord servers, o7 functions as a
            quick respectful greeting that takes one keystroke and needs no explanation among gamers.
          </p>
        </section>

        {/* o7 in other games */}
        <section>
          <h2 className="text-2xl font-bold text-sc-white mb-4">o7 in Other Games</h2>
          <p className="text-sc-muted leading-relaxed">
            EVE Online and Elite Dangerous (a space exploration and combat game) have the strongest
            traditions of o7 outside Star Citizen. Both games have military rank structures and
            community cultures where formality and respect carry real meaning. You will also find
            o7 in military-themed games, flight simulators, and anywhere player culture values
            camaraderie and mutual respect.
          </p>
        </section>

        {/* CTA block */}
        <section className="bg-sc-slate-mid rounded-xl p-8 border border-sc-cyan/20 text-center space-y-4">
          <h2 className="text-2xl font-bold text-sc-white">New to Star Citizen?</h2>
          <p className="text-sc-muted max-w-xl mx-auto">
            Star Citizen is free to try. Sign up with a referral code and receive 50,000 UEC
            (United Earth Credits — the in-game currency) to get started, at no extra cost.
          </p>
          <CTAButton />
          <p className="text-sc-muted text-sm">
            Use referral code <strong className="text-sc-white">STAR-GCQJ-N6NC</strong> at signup.
          </p>
        </section>

        {/* Explore Star Citizen Terms */}
        <section className="text-center space-y-3">
          <h2 className="text-xl font-semibold text-sc-white">Explore Star Citizen Terms</h2>
          <p className="text-sc-muted">
            Learn more Star Citizen language, mechanics, and lore at the community hub.
          </p>
          <SecondaryLink />
        </section>

      </div>
    </>
  )
}
