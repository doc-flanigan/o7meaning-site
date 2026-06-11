'use client'
import { useState, useEffect } from 'react'
import { getRotatedReferralUrl, FALLBACK_REFERRAL_URL } from '@/lib/referral-rotator'

type Props = {
  trackingLabel?: string;
}

export default function CTAButton({ trackingLabel }: Props) {
  const [href, setHref] = useState(FALLBACK_REFERRAL_URL)
  useEffect(() => { setHref(getRotatedReferralUrl()) }, [])

  const handleClick = () => {
    const code = href.split('referral=')[1] ?? ''
    fetch('/api/log', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        label: trackingLabel ?? 'unknown',
        referralCode: code,
        page: window.location.pathname,
        site: window.location.hostname,
      }),
    }).catch(() => {})
    ;(window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'referral_click', {
      referral_code: code,
      page_path: window.location.pathname,
      site: window.location.hostname,
    })
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="inline-block w-full sm:w-auto bg-sc-cyan hover:bg-sc-cyan-dark text-sc-slate font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg text-center"
      onClick={handleClick}
    >
      Join Star Citizen Free — Get 50,000 UEC
    </a>
  )
}
