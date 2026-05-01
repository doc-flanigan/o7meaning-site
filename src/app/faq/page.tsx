import type { Metadata } from 'next'
import CTAButton from '@/components/CTAButton'
import { faqs } from '@/data/faq'

export const metadata: Metadata = {
  title: 'FAQ — Everything About o7 and Star Citizen',
  description:
    'Answers to the most common questions about o7: what it means, where it came from, and how it is used in Star Citizen and other games.',
  alternates: { canonical: 'https://o7meaning.com/faq' },
  openGraph: {
    title: 'FAQ — Everything About o7 and Star Citizen',
    description:
      'Answers to the most common questions about o7: what it means, where it came from, and how it is used in Star Citizen and other games.',
    url: 'https://o7meaning.com/faq',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        <section>
          <h1 className="text-4xl font-bold text-sc-white mb-3">Frequently Asked Questions</h1>
          <p className="text-sc-muted text-lg">
            Everything you want to know about o7, gaming salutes, and Star Citizen.
          </p>
        </section>

        <dl className="space-y-4">
          {faqs.map(({ question, answer }) => (
            <div
              key={question}
              className="bg-sc-slate-mid rounded-xl p-6 border border-sc-slate-mid hover:border-sc-cyan/30 transition-colors"
            >
              <dt className="text-sc-white font-semibold text-lg mb-2">{question}</dt>
              <dd className="text-sc-muted leading-relaxed">{answer}</dd>
            </div>
          ))}
        </dl>

        <section className="bg-sc-slate-mid rounded-xl p-8 border border-sc-cyan/20 text-center space-y-4">
          <h2 className="text-2xl font-bold text-sc-white">Ready to Try Star Citizen?</h2>
          <p className="text-sc-muted max-w-xl mx-auto">
            Create a free account and get 50,000 UEC (United Earth Credits — the in-game currency)
            with referral code <strong className="text-sc-white">STAR-GCQJ-N6NC</strong>.
          </p>
          <CTAButton />
        </section>
      </div>
    </>
  )
}
