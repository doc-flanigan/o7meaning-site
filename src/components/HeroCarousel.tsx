'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const SLIDES = [
  { src: '/images/hero/hero-01.jpg', alt: 'Star Citizen spacecraft approaching a space station above a gas giant' },
  { src: '/images/hero/hero-02.jpg', alt: 'Explorer on foot on a rocky alien moon with a spacecraft in the distance' },
  { src: '/images/hero/hero-03.jpg', alt: 'Interior of a capital ship hangar with multiple docked spacecraft' },
  { src: '/images/hero/hero-04.jpg', alt: 'Aerial view of a Star Citizen landing zone city at dusk' },
  { src: '/images/hero/hero-05.jpg', alt: 'Two spacecraft flying in formation through an asteroid field' },
  { src: '/images/hero/hero-06.jpg', alt: 'Ground crew near a landed starship on an alien planet surface' },
  { src: '/images/hero/hero-07.jpg', alt: 'Star Citizen pilot cockpit view overlooking a space station dock' },
  { src: '/images/hero/hero-08.jpg', alt: 'Massive capital ship silhouetted against a bright star in deep space' },
  { src: '/images/hero/hero-09.jpg', alt: 'Quantum travel light-tunnel effect surrounding a spacecraft at jump' },
  { src: '/images/hero/hero-10.jpg', alt: 'Space station exterior with approaching ships against a nebula backdrop' },
  { src: '/images/hero/hero-11.jpg', alt: 'Star Citizen spacecraft hull detail with planet curvature in background' },
  { src: '/images/hero/hero-12.jpg', alt: 'Combat spacecraft banking through an asteroid field debris cloud' },
]

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
