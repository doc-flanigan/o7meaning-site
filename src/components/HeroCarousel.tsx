'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const SLIDES = [
  { src: '/images/hero/hero-01.jpg', alt: 'A UEE Bengal carrier in orbit high above a planet' },
  { src: '/images/hero/hero-02.jpg', alt: 'An armored trooper overlooking a Star Citizen city skyline' },
  { src: '/images/hero/hero-03.jpg', alt: 'A spacecraft backlit by the sun on a snowy planet surface' },
  { src: '/images/hero/hero-04.jpg', alt: 'The interior of a capital-ship hangar with docked spacecraft' },
  { src: '/images/hero/hero-05.jpg', alt: 'A spacecraft in orbit above a cloud-wrapped planet' },
  { src: '/images/hero/hero-06.jpg', alt: 'A starship and ground rover on a misty frontier moon' },
  { src: '/images/hero/hero-07.jpg', alt: 'A pilot beside a ship in an orange desert dust storm' },
  { src: '/images/hero/hero-08.jpg', alt: 'A glowing blue orbital hologram inside a space station' },
  { src: '/images/hero/hero-09.jpg', alt: 'A large industrial capital ship seen up close' },
  { src: '/images/hero/hero-10.jpg', alt: 'A banded gas giant framed by a rocky canyon arch' },
  { src: '/images/hero/hero-11.jpg', alt: 'A spacecraft streaking through quantum travel' },
  { src: '/images/hero/hero-12.jpg', alt: 'A starship silhouetted against a golden sunset on a mountain ridge' },
  { src: '/images/hero/hero-13.jpg', alt: 'A Sabre fighter banking over a green planet' },
  { src: '/images/hero/hero-14.jpg', alt: 'A Hammerhead gunship patrolling above a cratered moon' },
  { src: '/images/hero/hero-15.jpg', alt: 'A formation of fighters over a lake at sunset' },
  { src: '/images/hero/hero-16.jpg', alt: 'Two bombers flying above golden sunset clouds' },
  { src: '/images/hero/hero-17.jpg', alt: 'An F8C Lightning on a landing pad in a hazy city' },
  { src: '/images/hero/hero-18.jpg', alt: 'An Idris frigate firing its railgun in a bright flash' },
]

const START = 10

export default function HeroCarousel() {
  const [current, setCurrent] = useState(START)

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
            priority={current === START}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
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
