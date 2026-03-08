'use client'

import Link from 'next/link'
import { motion, useInView } from 'motion/react'
import { useRef, useState, useEffect } from 'react'
import { useReducedMotion } from '@/lib/useReducedMotion'

/* ─────────────────────────────────────────────────────────
 * ANIMATION STORYBOARD — Landing Page
 *
 *    0ms   waiting for mount
 *  100ms   name springs in (opacity 0 → 1, y 8 → 0)
 *  350ms   subtitle fades up
 *  600ms   social links stagger in (80ms each)
 * ───────────────────────────────────────────────────────── */

const TIMING = {
  name:     100,   // name appears
  subtitle: 350,   // subtitle fades up
  links:    600,   // social links begin staggering
}

/* Hero name */
const NAME = {
  offsetY:  8,     // px the name slides up from
  spring: { type: 'spring' as const, visualDuration: 0.5, bounce: 0.05 },
}

/* Subtitle */
const SUBTITLE = {
  offsetY:  6,
  spring: { type: 'spring' as const, visualDuration: 0.45, bounce: 0 },
}

/* Social links */
const LINKS = {
  stagger:  0.08,  // seconds between each link
  offsetY:  6,
  spring: { type: 'spring' as const, visualDuration: 0.4, bounce: 0 },
  items: [
    { label: 'GitHub',    href: 'https://github.com/march213' },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/jane-molodetskaya-799bb757/' },
    { label: 'Twitter',   href: 'https://twitter.com/march213_ya' },
    { label: 'Instagram', href: 'https://www.instagram.com/march213' },
  ],
}

const INTRO_KEY = 'just-it:home-intro-seen'

export default function Home() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  const reduced = useReducedMotion()
  const [stage, setStage] = useState(0)
  const [skipIntro, setSkipIntro] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_KEY)) {
      setSkipIntro(true)
      setStage(3)
    }
  }, [])

  useEffect(() => {
    if (!isInView || skipIntro || reduced) return

    setStage(0)
    const timers: NodeJS.Timeout[] = []
    timers.push(setTimeout(() => setStage(1), TIMING.name))
    timers.push(setTimeout(() => setStage(2), TIMING.subtitle))
    timers.push(setTimeout(() => {
      setStage(3)
      sessionStorage.setItem(INTRO_KEY, '1')
    }, TIMING.links))
    return () => timers.forEach(clearTimeout)
  }, [isInView, skipIntro, reduced])

  const noMotion = reduced || skipIntro

  return (
    <main ref={ref} className="relative z-10 min-h-screen flex flex-col px-8 sm:px-16 max-w-5xl mx-auto">
      <header className="flex-1 flex flex-col justify-center py-20">
        {/* Name */}
        <motion.h1
          initial={noMotion ? false : { opacity: 0, y: NAME.offsetY }}
          animate={{
            opacity: stage >= 1 ? 1 : 0,
            y:       stage >= 1 ? 0 : NAME.offsetY,
          }}
          transition={noMotion ? { duration: 0 } : NAME.spring}
          className="font-light text-[clamp(36px,9vw,96px)] leading-[0.95] tracking-[-0.02em] text-white mb-7 text-wrap-balance"
        >
          Jane<br />Molodetskaya
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={noMotion ? false : { opacity: 0, y: SUBTITLE.offsetY }}
          animate={{
            opacity: stage >= 2 ? 1 : 0,
            y:       stage >= 2 ? 0 : SUBTITLE.offsetY,
          }}
          transition={noMotion ? { duration: 0 } : SUBTITLE.spring}
          className="font-normal text-white/85 text-lg max-w-[520px] leading-[1.72]"
        >
          Product engineer, 8 years in. I think in flows, ship with craft,
          and care about the user more than the code.
        </motion.p>
      </header>

      <footer className="pb-20">
        <nav aria-label="Social links and resume">
            <ul className="flex flex-wrap gap-x-7 gap-y-2 font-body text-xs uppercase tracking-[0.18em] text-white/55">
            {LINKS.items.map(({ label, href }, i) => (
              <motion.li
                key={label}
                initial={noMotion ? false : { opacity: 0, y: LINKS.offsetY }}
                animate={{
                  opacity: stage >= 3 ? 1 : 0,
                  y:       stage >= 3 ? 0 : LINKS.offsetY,
                }}
                transition={noMotion ? { duration: 0 } : { ...LINKS.spring, delay: i * LINKS.stagger }}
              >
                <a href={href} target="_blank" rel="noopener noreferrer" className="min-h-11 inline-flex items-center hover:text-white/90 transition-colors duration-200">
                  {label}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={noMotion ? false : { opacity: 0, y: LINKS.offsetY }}
              animate={{
                opacity: stage >= 3 ? 1 : 0,
                y:       stage >= 3 ? 0 : LINKS.offsetY,
              }}
              transition={noMotion ? { duration: 0 } : { ...LINKS.spring, delay: LINKS.items.length * LINKS.stagger }}
            >
              <Link href="/resume" className="min-h-11 inline-flex items-center hover:text-white/90 transition-colors duration-200">
                See my work →
              </Link>
            </motion.li>
          </ul>
        </nav>
      </footer>
    </main>
  )
}
