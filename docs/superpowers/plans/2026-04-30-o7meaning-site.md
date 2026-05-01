# o7meaning.com Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build o7meaning.com — a single-purpose definition funnel site that answers "what does o7 mean?" immediately, then funnels visitors to Star Citizen via referral link and hub.

**Architecture:** Next.js 14 App Router site with six pages (home, /in-star-citizen, /in-gaming, /faq, sitemap, robots). Shared components (NavBar, Footer, HeroCarousel, CTAButton, SecondaryLink) compose each page. FAQ data lives in one data file and is consumed by both the FAQ page and the homepage JSON-LD schema.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, framer-motion (HeroCarousel fade), next/image (hero slides).

---

## Task 1: Initialize Next.js 14 project

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

- [ ] **Step 1: Run create-next-app inside the existing repo**

```powershell
cd "E:\Claude Code\sc-portfolio\o7meaning-site"
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git --yes
```

Expected: Scaffolds Next.js 14 without re-initialising git. Our existing `public/images/` directory is preserved — create-next-app only adds `public/next.svg` and `public/vercel.svg`.

- [ ] **Step 2: Delete default Next.js placeholder assets**

```powershell
Remove-Item "public\next.svg" -ErrorAction SilentlyContinue
Remove-Item "public\vercel.svg" -ErrorAction SilentlyContinue
```

- [ ] **Step 3: Verify dev server starts**

```powershell
npm run dev
```

Expected: Server starts on http://localhost:3000. Default Next.js page renders. Stop with Ctrl+C before continuing.

- [ ] **Step 4: Commit scaffold**

```powershell
git add package.json package-lock.json next.config.ts tailwind.config.ts postcss.config.mjs tsconfig.json .eslintrc.json src\app\layout.tsx src\app\page.tsx src\app\globals.css
git commit -m "feat: scaffold Next.js 14 with TypeScript and Tailwind"
```

---

## Task 2: Configure Tailwind custom palette and global styles

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace tailwind.config.ts with custom color palette**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'sc-slate':     '#1a1f2e',
        'sc-slate-mid': '#252d40',
        'sc-cyan':      '#00d4ff',
        'sc-cyan-dark': '#0099bb',
        'sc-white':     '#f0f4f8',
        'sc-muted':     '#7a8599',
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Step 2: Replace globals.css with minimal base styles**

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --slate:     #1a1f2e;
  --slate-mid: #252d40;
  --cyan:      #00d4ff;
  --cyan-dark: #0099bb;
  --white:     #f0f4f8;
  --muted:     #7a8599;
}

body {
  background-color: var(--slate);
  color: var(--white);
}
```

- [ ] **Step 3: Type-check**

```powershell
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 4: Commit**

```powershell
git add tailwind.config.ts src\app\globals.css
git commit -m "feat: configure Tailwind custom palette and global styles"
```

---

## Task 3: NavBar component

**Files:**
- Create: `src/components/NavBar.tsx`

- [ ] **Step 1: Write NavBar.tsx**

```typescript
// src/components/NavBar.tsx
import Link from 'next/link'

const links = [
  { href: '/',               label: 'Home'         },
  { href: '/in-star-citizen', label: 'In Star Citizen' },
  { href: '/in-gaming',      label: 'In Gaming'    },
  { href: '/faq',            label: 'FAQ'          },
]

export default function NavBar() {
  return (
    <nav className="bg-sc-slate border-b border-sc-slate-mid px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-sc-cyan font-bold text-lg tracking-tight">
          o7meaning.com
        </Link>
        <div className="flex gap-5 text-sm">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sc-white hover:text-sc-cyan transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Type-check**

```powershell
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```powershell
git add src\components\NavBar.tsx
git commit -m "feat: add NavBar component"
```

---

## Task 4: Footer component

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Write Footer.tsx**

Verbatim copy from `SHARED_CONVENTIONS.md` footer spec:

```typescript
// src/components/Footer.tsx
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-sc-slate border-t border-sc-slate-mid py-10 px-4 mt-16">
      <div className="max-w-4xl mx-auto space-y-4 text-sc-muted text-sm leading-relaxed">
        <p>
          This is an unofficial fan site not affiliated with Cloud Imperium Games or
          Star Citizen®. Star Citizen® is a registered trademark of Cloud Imperium
          Rights LLC.
        </p>
        <p>
          Affiliate Disclosure: If you create a Star Citizen account using referral
          code STAR-GCQJ-N6NC, the site owner (Doc_Flanigan) will receive an in-game
          bonus reward. You still receive your full 50,000 UEC bonus.
        </p>
        <div className="pt-2">
          <Image
            src="/images/made-by-community.png"
            alt="Made by the Star Citizen Community"
            width={120}
            height={40}
            className="opacity-60"
          />
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Type-check**

```powershell
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```powershell
git add src\components\Footer.tsx
git commit -m "feat: add Footer component with fan disclaimer and FTC disclosure"
```

---

## Task 5: CTAButton and SecondaryLink components

**Files:**
- Create: `src/components/CTAButton.tsx`
- Create: `src/components/SecondaryLink.tsx`

- [ ] **Step 1: Write CTAButton.tsx**

```typescript
// src/components/CTAButton.tsx
export default function CTAButton() {
  return (
    <a
      href="https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-sc-cyan hover:bg-sc-cyan-dark text-sc-slate font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
    >
      Join Star Citizen Free — Get 50,000 UEC
    </a>
  )
}
```

- [ ] **Step 2: Write SecondaryLink.tsx**

```typescript
// src/components/SecondaryLink.tsx
export default function SecondaryLink() {
  return (
    <a
      href="https://dayonecitizen.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-sc-cyan hover:text-sc-cyan-dark underline underline-offset-2 transition-colors"
    >
      Learn More at dayonecitizen.com
    </a>
  )
}
```

- [ ] **Step 3: Type-check**

```powershell
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 4: Commit**

```powershell
git add src\components\CTAButton.tsx src\components\SecondaryLink.tsx
git commit -m "feat: add CTAButton and SecondaryLink components"
```

---

## Task 6: HeroCarousel component

**Files:**
- Create: `src/components/HeroCarousel.tsx`
- Modify: `package.json` (add framer-motion)

- [ ] **Step 1: Install framer-motion**

```powershell
npm install framer-motion
```

Expected: Added to `dependencies` in package.json.

- [ ] **Step 2: Write HeroCarousel.tsx**

```typescript
// src/components/HeroCarousel.tsx
'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const SLIDES = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/hero/hero-${String(i + 1).padStart(2, '0')}.jpg`,
  alt: `Star Citizen scene ${i + 1}`,
}))

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={SLIDES[current].src}
            alt={SLIDES[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? 'bg-sc-cyan' : 'bg-sc-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Type-check**

```powershell
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 4: Commit**

```powershell
git add src\components\HeroCarousel.tsx package.json package-lock.json
git commit -m "feat: add HeroCarousel with 12 slides, 5s auto-advance, fade transition"
```

---

## Task 7: Root layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace layout.tsx**

```typescript
// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sc-slate text-sc-white min-h-screen`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Type-check**

```powershell
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```powershell
git add src\app\layout.tsx
git commit -m "feat: update root layout with NavBar, Footer, and base metadata"
```

---

## Task 8: FAQ data

**Files:**
- Create: `src/data/faq.ts`

The FAQ data is consumed by both the `/faq` page and the homepage JSON-LD schema. Defining it once here prevents drift.

- [ ] **Step 1: Write src/data/faq.ts with 17 items**

```typescript
// src/data/faq.ts
export interface FAQ {
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    question: 'What does o7 mean?',
    answer:
      'o7 is a text emoticon representing a salute. The "o" is a head and the "7" is a raised arm completing the gesture. Gamers use it as a respectful greeting or farewell across many online games and communities.',
  },
  {
    question: 'How do you pronounce o7?',
    answer:
      'Most players say it out loud as "oh-seven." In practice it is almost always typed, not spoken.',
  },
  {
    question: 'Where did o7 come from?',
    answer:
      'The salute emoticon grew in popularity through massively multiplayer online games in the early 2000s, especially space games like EVE Online where military culture and formality are part of the setting.',
  },
  {
    question: 'What does the "o" represent in o7?',
    answer: 'The "o" represents a head — think of it as a small circle when viewed from the front.',
  },
  {
    question: 'What does the "7" represent in o7?',
    answer:
      'The "7" represents an arm raised in salute. The horizontal stroke of the seven is the outstretched arm, and the angled stroke is the upper arm.',
  },
  {
    question: 'Is o7 used in Star Citizen?',
    answer:
      'Yes. o7 is one of the most common greetings in the Star Citizen community. Players use it in chat, on forums, and in video titles. It fits the game\'s military fiction setting perfectly.',
  },
  {
    question: 'What does o7 mean in Star Citizen specifically?',
    answer:
      'In Star Citizen, o7 carries the same salute meaning but also acts as a community handshake — a shorthand for "I\'m a fellow citizen, fly safe." Players exchange it when meeting in the game world or online.',
  },
  {
    question: 'What does o7 mean on Twitch?',
    answer:
      'On Twitch, o7 is typed in chat to salute a streamer or another viewer — often when something impressive happens, to say goodbye, or to show respect. It is common across gaming streams, not only Star Citizen.',
  },
  {
    question: 'What does o7 mean on Reddit?',
    answer:
      'On Reddit it carries the same salute meaning. You\'ll find it at the end of farewell posts, in tribute threads, and in gaming subreddits where military culture is present.',
  },
  {
    question: 'What does o7 mean in EVE Online?',
    answer:
      'EVE Online is one of the earliest communities to popularize o7. The game has a formal, corporation-based culture where the salute fits naturally. EVE players exchanged o7 in chat and on forums long before it spread to other games.',
  },
  {
    question: 'What does o7 mean in Elite Dangerous?',
    answer:
      'Elite Dangerous players use o7 in the same way — as a respectful greeting between pilots. The space exploration setting makes the military salute feel at home.',
  },
  {
    question: 'How do you respond to o7?',
    answer:
      'Reply with o7. The salute goes both ways. Some players respond with "o7 commander," "o7 citizen," or similar phrasing that fits their game\'s setting.',
  },
  {
    question: 'Is o7 ever used sarcastically?',
    answer:
      'Rarely. The salute is almost always sincere in gaming communities. When used sarcastically, context makes it obvious — and it is still understood as a salute, just a mocking one.',
  },
  {
    question: 'What other emoticons are similar to o7?',
    answer:
      'The reverse "7o" is sometimes used as a return salute. You may also see "O7" (capital O) and "0/" (zero-slash) as variations, though o7 is the most widely recognized form.',
  },
  {
    question: 'Can you use o7 outside of gaming?',
    answer:
      'Yes. o7 has crossed over into general internet culture. People use it on social media to show respect, mark farewells, or honor someone — even with no gaming context.',
  },
  {
    question: 'What does UEC mean in Star Citizen?',
    answer:
      'UEC stands for United Earth Credits — the in-game currency of Star Citizen. New players receive 50,000 UEC when they sign up using a referral code like STAR-GCQJ-N6NC.',
  },
  {
    question: 'What is a referral code in Star Citizen?',
    answer:
      'A referral code is a short code tied to an existing player\'s account. When a new player uses one during signup, both the new player and the referrer receive in-game rewards. The new player gets 50,000 UEC at no extra cost.',
  },
]
```

- [ ] **Step 2: Type-check**

```powershell
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```powershell
git add src\data\faq.ts
git commit -m "feat: add FAQ data with 17 items"
```

---

## Task 9: Homepage

**Files:**
- Modify: `src/app/page.tsx`

The homepage is the primary SEO page. It answers the query above the fold, shows the carousel below, then walks through eight content sections ending with CTAs.

- [ ] **Step 1: Write src/app/page.tsx**

```typescript
// src/app/page.tsx
import type { Metadata } from 'next'
import HeroCarousel from '@/components/HeroCarousel'
import CTAButton from '@/components/CTAButton'
import SecondaryLink from '@/components/SecondaryLink'
import { faqs } from '@/data/faq'

export const metadata: Metadata = {
  title: 'What Does o7 Mean? The Gaming Salute Explained',
  description:
    "o7 is a text emoticon salute used across gaming communities. The \"o\" represents a head, the \"7\" a raised arm. Full explanation here.",
  alternates: { canonical: 'https://o7meaning.com' },
  openGraph: {
    title: 'What Does o7 Mean? The Gaming Salute Explained',
    description:
      "o7 is a text emoticon salute used across gaming communities. The \"o\" represents a head, the \"7\" a raised arm. Full explanation here.",
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

        {/* Above-fold answer — no scroll required */}
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
          <h2 className="text-2xl font-bold text-sc-white mb-4">Breaking Down the Emoticon</h2>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="bg-sc-slate-mid rounded-xl p-6 text-center min-w-[120px]">
              <span className="text-5xl font-mono text-sc-cyan">o</span>
              <p className="text-sc-muted text-sm mt-2">head</p>
            </div>
            <div className="text-3xl text-sc-muted">+</div>
            <div className="bg-sc-slate-mid rounded-xl p-6 text-center min-w-[120px]">
              <span className="text-5xl font-mono text-sc-cyan">7</span>
              <p className="text-sc-muted text-sm mt-2">raised arm</p>
            </div>
            <div className="text-3xl text-sc-muted">=</div>
            <div className="bg-sc-slate-mid rounded-xl p-6 text-center min-w-[120px]">
              <span className="text-5xl font-mono text-sc-cyan">o7</span>
              <p className="text-sc-muted text-sm mt-2">salute</p>
            </div>
          </div>
          <p className="text-sc-muted mt-4 leading-relaxed">
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
            (in-game currency) to get started — at no extra cost.
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
```

- [ ] **Step 2: Type-check**

```powershell
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Verify in browser**

```powershell
npm run dev
```

Navigate to http://localhost:3000. Confirm:
- H1 "What Does o7 Mean?" visible without scrolling
- Cyan highlight box with quick answer visible
- HeroCarousel renders below
- All eight sections present
- CTA button links to RSI enlist URL
- SecondaryLink links to dayonecitizen.com
- Stop dev server with Ctrl+C.

- [ ] **Step 4: Commit**

```powershell
git add src\app\page.tsx
git commit -m "feat: add homepage with FAQ schema, 8 content sections, and CTAs"
```

---

## Task 10: Star Citizen page (/in-star-citizen)

**Files:**
- Create: `src/app/in-star-citizen/page.tsx`

- [ ] **Step 1: Write src/app/in-star-citizen/page.tsx**

```typescript
// src/app/in-star-citizen/page.tsx
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
        <ul className="space-y-3 text-sc-muted">
          <li className="flex gap-3">
            <span className="text-sc-cyan font-mono">o7</span>
            <span>— Standard greeting when entering a server or meeting another player.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-sc-cyan font-mono">o7 citizen</span>
            <span>— Common welcome phrase used toward new or unfamiliar players.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-sc-cyan font-mono">fly safe o7</span>
            <span>— A farewell, often used at the end of a group session.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-sc-cyan font-mono">o7 commander</span>
            <span>— Used when addressing an org leader or experienced player.</span>
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
          use a referral code like <strong className="text-sc-white">STAR-GCQJ-N6NC</strong>,
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
```

- [ ] **Step 2: Type-check**

```powershell
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```powershell
git add src\app\in-star-citizen\page.tsx
git commit -m "feat: add Star Citizen page with community usage guide and CTA"
```

---

## Task 11: FAQ page (/faq)

**Files:**
- Create: `src/app/faq/page.tsx`

- [ ] **Step 1: Write src/app/faq/page.tsx**

```typescript
// src/app/faq/page.tsx
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

        <dl className="space-y-6">
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
            Create a free account and get 50,000 UEC (in-game currency) with referral
            code <strong className="text-sc-white">STAR-GCQJ-N6NC</strong>.
          </p>
          <CTAButton />
        </section>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Type-check**

```powershell
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```powershell
git add src\app\faq\page.tsx
git commit -m "feat: add FAQ page with full FAQPage schema and 17 Q&As"
```

---

## Task 12: In Gaming placeholder page (/in-gaming)

The NavBar links to /in-gaming. A missing page causes a 404 and a broken nav. Add a minimal placeholder so the nav works cleanly.

**Files:**
- Create: `src/app/in-gaming/page.tsx`

- [ ] **Step 1: Write src/app/in-gaming/page.tsx**

```typescript
// src/app/in-gaming/page.tsx
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
```

- [ ] **Step 2: Type-check**

```powershell
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```powershell
git add src\app\in-gaming\page.tsx
git commit -m "feat: add in-gaming placeholder page (noindex)"
```

---

## Task 13: Sitemap and robots

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`

- [ ] **Step 1: Write src/app/sitemap.ts**

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://o7meaning.com'
  return [
    { url: base,                        lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/in-star-citizen`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
```

- [ ] **Step 2: Write src/app/robots.ts**

```typescript
// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/in-gaming' },
    sitemap: 'https://o7meaning.com/sitemap.xml',
  }
}
```

- [ ] **Step 3: Type-check**

```powershell
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 4: Commit**

```powershell
git add src\app\sitemap.ts src\app\robots.ts
git commit -m "seo: add sitemap and robots (disallow in-gaming placeholder)"
```

---

## Task 14: Production build verification

**Files:** No new files — verify all existing files compile and build cleanly.

- [ ] **Step 1: Run full production build**

```powershell
npm run build
```

Expected: Build completes with no errors. You will see route output like:

```
Route (app)                    Size    First Load JS
┌ ○ /                          ...
├ ○ /faq                       ...
├ ○ /in-gaming                 ...
├ ○ /in-star-citizen           ...
├ ○ /robots.txt                ...
└ ○ /sitemap.xml               ...
```

If there are TypeScript or build errors, fix them before continuing.

- [ ] **Step 2: Stage modified made-by-community.png if changed**

The git status shows `public/images/made-by-community.png` as modified. Stage it now:

```powershell
git add public\images\made-by-community.png
```

- [ ] **Step 3: Final commit**

```powershell
git add -A
git commit -m "feat: complete o7meaning.com site — all pages, components, SEO

- Homepage with FAQPage schema, 8 content sections, above-fold answer
- /in-star-citizen with community usage guide
- /faq with 17 Q&As and full FAQPage schema
- /in-gaming placeholder (noindex)
- Sitemap and robots.txt
- NavBar, Footer, HeroCarousel (12 slides), CTAButton, SecondaryLink
- framer-motion fade transition on carousel"
```

- [ ] **Step 4: Push to GitHub**

```powershell
git push origin main
```

---

## Self-Review Against Spec

**Spec requirement → Task mapping:**

| Spec requirement | Task |
|---|---|
| Next.js 14, TypeScript, Tailwind | Task 1 |
| Color palette | Task 2 |
| 12 hero images carousel (5s, fade) | Task 6 |
| made-by-community.png | Task 4, Task 14 |
| Dev server confirmation | Task 1 |
| HeroCarousel.tsx | Task 6 |
| CTAButton.tsx → RSI enlist URL | Task 5 |
| SecondaryLink.tsx → dayonecitizen.com | Task 5 |
| Footer.tsx with fan disclaimer + FTC | Task 4 |
| NavBar.tsx with 4 links | Task 3 |
| Homepage SEO title + description | Task 9 |
| FAQPage schema (8 questions) | Task 8 + Task 9 |
| H1 "What Does o7 Mean?" | Task 9 |
| Above-fold answer | Task 9 |
| 8 homepage sections | Task 9 |
| /in-star-citizen page with CTAButton | Task 10 |
| /faq with 15+ items + schema | Task 8 + Task 11 |
| Sitemap, robots.txt | Task 13 |
| OG tags + canonical URLs | Task 7 + Tasks 9-11 |
| npm run build passes | Task 14 |

All spec requirements covered. No gaps found.
