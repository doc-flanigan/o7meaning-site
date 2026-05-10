'use client'
import { useState, useEffect } from 'react'
import { getRotatedReferralUrl, FALLBACK_REFERRAL_URL } from '@/lib/referral-rotator'

export default function CTAButton() {
  const [href, setHref] = useState(FALLBACK_REFERRAL_URL)
  useEffect(() => { setHref(getRotatedReferralUrl()) }, [])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-sc-cyan hover:bg-sc-cyan-dark text-sc-slate font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
    >
      Join Star Citizen Free — Get 50,000 UEC
    </a>
  )
}
