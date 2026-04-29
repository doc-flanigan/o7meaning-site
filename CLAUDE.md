# CLAUDE.md — o7meaning.com

## Project Overview
Single-purpose definition funnel site. Targets people who googled "o7 meaning"
or "what does o7 mean" from any gaming community (not just Star Citizen).
Answers their question immediately, then introduces Star Citizen naturally,
then funnels to o7citizen.com and referral signup.

## Quick Reference
```
Referral code:  STAR-GCQJ-N6NC
Enlist URL:     https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
Hub:            https://dayonecitizen.com
Conventions:    E:\Claude Code\sc-portfolio\SHARED_CONVENTIONS.md
```

## Agentic Build Instructions
Use an agentic, incremental approach. Complete and confirm each agent before
proceeding to the next. Never attempt to build the full site in one pass.

### Agent 1 — Scaffold
- Initialize Next.js 14, TypeScript, Tailwind CSS
- Color palette:
    slate: '#1a1f2e'
    slateMid: '#252d40'
    cyan: '#00d4ff'
    cyanDark: '#0099bb'
    white: '#f0f4f8'
    muted: '#7a8599'
- Set up /public/images/hero/ with 12 placeholder images
- Place /public/images/made-by-community.png placeholder
- Confirm dev server runs

### Agent 2 — Shared Components
- HeroCarousel.tsx (12 slides, 5s auto-advance, fade)
- CTAButton.tsx: "Join Star Citizen Free — Get 50,000 UEC"
  → https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
- SecondaryLink.tsx: "Learn More at dayonecitizen.com" → https://dayonecitizen.com
- Footer.tsx: fan disclaimer + FTC disclosure + fankit badge
- NavBar.tsx: minimal, logo "o7meaning.com", links: Home, In Star Citizen,
  In Gaming, FAQ

### Agent 3 — Homepage (/)
This is the primary SEO page. Optimize aggressively.
  - SEO: title="What Does o7 Mean? The Gaming Salute Explained"
    description="o7 is a text emoticon salute used across gaming communities.
    The 'o' represents a head, the '7' a raised arm. Full explanation here."
  - FAQPage schema markup with 8 questions
  - H1: "What Does o7 Mean?"
  - Above-fold answer (no scrolling required): immediate plain-English answer
  - HeroCarousel below the fold
  - Sections:
    * "The Quick Answer" — 2 sentences, immediately visible
    * "Breaking Down the Emoticon" — visual showing o + 7 = salute
    * "Where Did o7 Come From?" — gaming history
    * "o7 in Star Citizen" — most prominent use, natural SC intro
    * "o7 on Twitch and Discord" — broad gaming context
    * "o7 in Other Games" — EVE Online, Elite Dangerous mention
    * "New to Star Citizen?" CTA block → CTAButton
    * "Explore Star Citizen Terms" → https://o7citizen.com/glossary
  - SecondaryLink to o7citizen.com
  - Footer
  Confirm renders on mobile and desktop.

### Agent 4 — Star Citizen Page (/in-star-citizen)
  - SEO: title="o7 in Star Citizen — What It Means and How to Use It"
  - Deeper SC-specific content
  - Natural funnel: "Ready to try Star Citizen?" → CTAButton
  - Internal link back to homepage

### Agent 5 — FAQ Page (/faq)
  - 15+ FAQ items about o7 and related terms
  - FAQPage schema
  - CTAButton at bottom

### Agent 6 — SEO & Technical
  - Sitemap, robots.txt, OG tags, canonical URLs
  - JSON-LD FAQPage schema on homepage
  - npm run build must pass cleanly

## Color Palette
  --slate: #1a1f2e
  --slate-mid: #252d40
  --cyan: #00d4ff
  --cyan-dark: #0099bb
  --white: #f0f4f8
  --muted: #7a8599

## Network Conventions
See `E:\Claude Code\sc-portfolio\SHARED_CONVENTIONS.md` for footer spec,
tone rules, commit convention, tech stack, and agentic build pattern.
