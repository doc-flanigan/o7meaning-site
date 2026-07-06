'use client'
import { useState, useEffect, useRef } from 'react'
import { getRotatedReferralUrl, FALLBACK_REFERRAL_URL } from '@/lib/referral-rotator'

type Props = {
  trackingLabel?: string;
}

export default function CTAButton({ trackingLabel }: Props) {
  const [href, setHref] = useState(FALLBACK_REFERRAL_URL)
  useEffect(() => { setHref(getRotatedReferralUrl()) }, [])

  const linkRef = useRef<HTMLAnchorElement>(null)
  const impressionFired = useRef(false)

  useEffect(() => {
    const el = linkRef.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || impressionFired.current) continue
        impressionFired.current = true
        observer.disconnect()

        const code = el.href.split('referral=')[1] ?? ''
        fetch('/api/log', {
          method: 'POST',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            label: `impression:${trackingLabel ?? 'unknown'}`,
            referralCode: code,
            page: window.location.pathname,
            site: window.location.hostname,
          }),
        }).catch(() => {})
        ;(window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'cta_impression', {
          cta_label: trackingLabel ?? 'unknown',
          referral_code: code,
          page_path: window.location.pathname,
          site: window.location.hostname,
        })
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [trackingLabel])

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
      ref={linkRef}
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
