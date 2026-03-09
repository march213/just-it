'use client'

import { useRef, useState, useEffect, createContext, useContext } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'motion/react'
import { AnimateNumber, Ticker } from 'motion-plus/react'
import ExportButton from './ExportButton'
import { METRICS, STORIES, TESTIMONIALS, STACK, JOBS } from '@/lib/data'
import { useReducedMotion } from '@/lib/useReducedMotion'

const ReducedMotionContext = createContext(false)

/* ─────────────────────────────────────────────────────────
 * ANIMATION STORYBOARD — Resume / Story Page
 *
 * HERO (mount-triggered, stage-driven):
 *    0ms   waiting for mount
 *  100ms   role label fades in
 *  250ms   name springs in (y 12 → 0)
 *  500ms   subtitle reveals
 *  800ms   contact links stagger (80ms each)
 *
 * SCROLL SECTIONS (viewport-triggered):
 *  about    → paragraph springs in on scroll
 *  metrics  → cards stagger in, numbers count up from 0
 *  stories  → each card reveals independently (stagger 120ms)
 *  quotes   → infinite ticker, pauses on hover, draggable
 *  jobs     → each entry reveals per-scroll
 *  stack    → rows stagger in
 *  education → simple fade
 * ───────────────────────────────────────────────────────── */

/* ─── Hero timing (ms after mount) ────────────────────────────────── */

const HERO_TIMING = {
  role:     100,   // role label fades in
  name:     250,   // name springs in
  subtitle: 500,   // subtitle reveals
  links:    800,   // contact links stagger
}

/* ─── Element configs ─────────────────────────────────────────────── */

const HERO_ROLE = {
  offsetY: 6,
  spring: { type: 'spring' as const, visualDuration: 0.4, bounce: 0 },
}

const HERO_NAME = {
  offsetY: 12,
  spring: { type: 'spring' as const, visualDuration: 0.55, bounce: 0.05 },
}

const HERO_SUB = {
  offsetY: 8,
  spring: { type: 'spring' as const, visualDuration: 0.45, bounce: 0 },
}

const HERO_LINKS = {
  stagger: 0.08,   // seconds between each link
  offsetY: 6,
  spring: { type: 'spring' as const, visualDuration: 0.4, bounce: 0 },
  items: [
    { label: 'Toronto, ON', href: null },
    { label: 'info@janemolodetskaya.com', href: 'mailto:info@janemolodetskaya.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/jane-molodetskaya-799bb757' },
    { label: 'GitHub',   href: 'https://github.com/march213' },
  ] as { label: string; href: string | null }[],
}

/* Scroll-section shared spring */
const SECTION_SPRING = { type: 'spring' as const, visualDuration: 0.5, bounce: 0 }

/* Metric cards */
const METRIC_CARD = {
  stagger: 0.1,
  offsetY: 10,
  spring: SECTION_SPRING,
  numberTransition: {
    y:       { type: 'spring' as const, visualDuration: 0.5, bounce: 0.15 },
    layout:  { duration: 0.4 },
    opacity: { ease: 'linear' as const },
  },
}

/* Story cards */
const STORY_CARD = {
  stagger: 0.12,
  offsetY: 14,
  spring: SECTION_SPRING,
}

/* Testimonial ticker */
const QUOTE_TICKER = {
  velocity: 30,        // px/s — gentle rightward scroll
  hoverFactor: 0,      // pause completely on hover
  gap: 20,             // px between cards
  fade: 80,            // px fade on each edge
  cardWidth: 360,      // px — fixed card width
  spring: SECTION_SPRING,
}

/* Job entries */
const JOB_ENTRY = {
  offsetY: 10,
  childStagger: 0.08,
  spring: SECTION_SPRING,
}

/* Stack rows */
const STACK_ROW = {
  stagger: 0.06,
  offsetY: 8,
  spring: SECTION_SPRING,
}

/* Viewport detection config */
const VP = { once: true, margin: '-60px 0px' as const }

/* ─── Component ───────────────────────────────────────────────────── */

const INTRO_KEY = 'just-it:resume-intro-seen'

export default function WebContent() {
  /* Hero stage */
  const heroRef = useRef<HTMLElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const reduced = useReducedMotion()
  const [stage, setStage] = useState(0)
  const [skipIntro, setSkipIntro] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(INTRO_KEY)) {
      setSkipIntro(true)
      setStage(4)
    }
  }, [])

  useEffect(() => {
    if (!heroInView || skipIntro || reduced) return

    setStage(0)
    const t: NodeJS.Timeout[] = []
    t.push(setTimeout(() => setStage(1), HERO_TIMING.role))
    t.push(setTimeout(() => setStage(2), HERO_TIMING.name))
    t.push(setTimeout(() => setStage(3), HERO_TIMING.subtitle))
    t.push(setTimeout(() => {
      setStage(4)
      sessionStorage.setItem(INTRO_KEY, '1')
    }, HERO_TIMING.links))
    return () => t.forEach(clearTimeout)
  }, [heroInView, skipIntro, reduced])

  const noMotion = reduced || skipIntro

  return (
    <ReducedMotionContext.Provider value={reduced}>
    <article className="print:hidden">
      {/* Bottom blur vignette */}
      <div
        aria-hidden="true"
        className="fixed bottom-0 left-0 right-0 h-36 pointer-events-none z-20 backdrop-blur-md print:hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
        }}
      />

      <nav aria-label="Page navigation" className="fixed top-4 left-4 sm:top-7 sm:left-7 z-50">
        <Link
          href="/"
          className="min-h-11 min-w-11 inline-flex items-center justify-center px-3 rounded-sm font-mono text-xs tracking-[0.14em] uppercase text-white/55 hover:text-white/80 transition-colors duration-200"
        >
          ← Home
        </Link>
      </nav>
      <ExportButton />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <header ref={heroRef} className="relative h-[88vh] flex flex-col justify-center px-8 sm:px-16 py-20 max-w-5xl mx-auto">
        <div className="mb-10">
          {/* Role */}
          <motion.p
            initial={noMotion ? false : { opacity: 0, y: HERO_ROLE.offsetY }}
            animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : HERO_ROLE.offsetY }}
            transition={noMotion ? { duration: 0 } : HERO_ROLE.spring}
            className="font-mono text-xs tracking-[0.2em] uppercase text-white/55 mb-5"
          >
            Senior Software Engineer
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={noMotion ? false : { opacity: 0, y: HERO_NAME.offsetY }}
            animate={{ opacity: stage >= 2 ? 1 : 0, y: stage >= 2 ? 0 : HERO_NAME.offsetY }}
            transition={noMotion ? { duration: 0 } : HERO_NAME.spring}
            className="font-light text-[clamp(36px,9vw,96px)] leading-[0.95] tracking-[-0.02em] text-white mb-7 text-wrap-balance"
          >
            Jane<br />Molodetskaya
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={noMotion ? false : { opacity: 0, y: HERO_SUB.offsetY }}
            animate={{ opacity: stage >= 3 ? 1 : 0, y: stage >= 3 ? 0 : HERO_SUB.offsetY }}
            transition={noMotion ? { duration: 0 } : HERO_SUB.spring}
            className="font-body font-normal text-white/85 text-lg max-w-[520px] leading-[1.72]"
          >
            Product engineer, 8 years in.
            Thinking in flows, shipping with craft, always close to the user.
          </motion.p>
        </div>

        {/* Contact links */}
        <address className="not-italic flex flex-wrap gap-x-7 font-mono text-xs text-white/55">
          {HERO_LINKS.items.map(({ label, href }, i) => (
            <motion.span
              key={label}
              className="min-h-11 inline-flex items-center"
              initial={noMotion ? false : { opacity: 0, y: HERO_LINKS.offsetY }}
              animate={{ opacity: stage >= 4 ? 1 : 0, y: stage >= 4 ? 0 : HERO_LINKS.offsetY }}
              transition={noMotion ? { duration: 0 } : { ...HERO_LINKS.spring, delay: i * HERO_LINKS.stagger }}
            >
              {href
                ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="hover:text-white/90 transition-colors duration-200">{label}</a>
                : label
              }
            </motion.span>
          ))}
        </address>
      </header>

      {/* ═══════════════════ SCROLLABLE CONTENT ═══════════════════ */}
      <div className="relative z-10 max-w-[720px] mx-auto px-8 sm:px-16">

        {/* ── About ─────────────────────────────────────── */}
        <section aria-labelledby="about-heading" className="mb-16 pt-4">
          <Reveal>
            <h2 id="about-heading" className="font-mono text-xs tracking-[0.2em] uppercase text-white/55 mb-6">About</h2>
            <p className="font-display font-light text-xl sm:text-2xl text-white/85 leading-[1.7]">
              I build at the intersection of product and engineering.
              Coffee first, then prototypes. I test ideas fast, iterate on what works,
              and care about the <em className="font-normal text-white not-italic">user experience</em> more than the code that powers it.
              The engineering is the means; the outcome is the point.
            </p>
          </Reveal>
        </section>

        <Divider />

        {/* ── Impact (AnimateNumber) ────────────────────── */}
        <section aria-labelledby="impact-heading" className="mb-20">
          <Reveal><h2 id="impact-heading" className="font-mono text-xs tracking-[0.2em] uppercase text-white/55 mb-6">Impact</h2></Reveal>
          <MetricGrid />
        </section>

        <Divider />

        {/* ── What I've shipped (stories) ───────────────── */}
        <section aria-labelledby="shipped-heading" className="mb-20">
          <Reveal><h2 id="shipped-heading" className="font-mono text-xs tracking-[0.2em] uppercase text-white/55 mb-6">What I&apos;ve shipped</h2></Reveal>
          <StoryCards />
        </section>

        <Divider />

        {/* ── What people say (testimonials) ─────────────── */}
        <section aria-labelledby="testimonials-heading">
          <Reveal><h2 id="testimonials-heading" className="font-mono text-xs tracking-[0.2em] uppercase text-white/55 mb-6">From the team</h2></Reveal>
        </section>
      </div>

      {/* Ticker breaks out of the content column for full-bleed effect */}
      <div className="relative z-10 -mt-2">
        <QuoteTicker />
      </div>

      <div className="relative z-10 max-w-[720px] mx-auto px-8 sm:px-16 pb-20 pt-14">

        {/* ── Experience ─────────────────────────────────── */}
        <section aria-labelledby="work-heading" className="mb-20">
          <Reveal><h2 id="work-heading" className="font-mono text-xs tracking-[0.2em] uppercase text-white/55 mb-6">Work</h2></Reveal>
          {JOBS.map((job) => (
            <JobEntry key={job.company} job={job} />
          ))}
          <Reveal>
            <p className="font-mono text-xs text-white/45 leading-relaxed">
              Earlier: Axept Global, Frontend Engineer (Dec 2016 – Apr 2017)<br />
              Digital Team, Junior Frontend Engineer (Jan 2016 – Dec 2016)
            </p>
          </Reveal>
        </section>

        <Divider />

        {/* ── Stack ──────────────────────────────────────── */}
        <section aria-labelledby="stack-heading" className="mb-20">
          <Reveal><h2 id="stack-heading" className="font-mono text-xs tracking-[0.2em] uppercase text-white/55 mb-6">Stack</h2></Reveal>
          <StackList />
        </section>

        <Divider />

        {/* ── Education ──────────────────────────────────── */}
        <section aria-labelledby="education-heading">
          <Reveal className="mb-4">
            <h2 id="education-heading" className="font-mono text-xs tracking-[0.2em] uppercase text-white/55 mb-6">Education</h2>
            <p className="font-display font-light text-xl text-white/90 mb-1.5">
              Moscow Power Engineering Institute
            </p>
            <p className="font-mono text-xs text-white/40">Computer Programming · 2007–2010</p>
          </Reveal>
        </section>

        <footer className="mt-20">
          <Reveal>
            <address className="not-italic font-mono text-xs text-white/20 tracking-[0.12em]">
              info@janemolodetskaya.com · toronto, on
            </address>
          </Reveal>
        </footer>
      </div>
    </article>
    </ReducedMotionContext.Provider>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
 *  SECTION COMPONENTS
 * ═══════════════════════════════════════════════════════════════════════ */

/* ── Metrics with AnimateNumber count-up ─────────────────────────── */

function MetricGrid() {
  const ref = useRef<HTMLDListElement>(null)
  const isInView = useInView(ref, VP)
  const reduced = useContext(ReducedMotionContext)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isInView) setVisible(true)
  }, [isInView])

  return (
    <dl ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
      {METRICS.map((m, i) => (
        <motion.div
          key={m.label}
          initial={reduced ? false : { opacity: 0, y: METRIC_CARD.offsetY }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={reduced ? { duration: 0 } : { ...METRIC_CARD.spring, delay: i * METRIC_CARD.stagger }}
        >
          <dd className="font-display font-light text-[clamp(38px,5vw,60px)] text-white leading-none mb-2 tabular-nums">
            {m.prefix}
            <AnimateNumber transition={reduced ? { duration: 0 } : METRIC_CARD.numberTransition}>
              {visible ? m.num : 0}
            </AnimateNumber>
            <span className="text-[0.55em] text-white/70">{m.suffix}</span>
          </dd>
          <dt className="font-mono text-xs text-white/65 leading-snug">{m.label}</dt>
          <dd className="font-mono text-xs text-white/40 leading-snug mt-0.5">{m.sub}</dd>
        </motion.div>
      ))}
    </dl>
  )
}

/* ── Story cards ──────────────────────────────────────────────────── */

function StoryCards() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, VP)
  const reduced = useContext(ReducedMotionContext)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isInView) setVisible(true)
  }, [isInView])

  return (
    <div ref={ref} className="flex flex-col gap-8">
      {STORIES.map((s, i) => (
        <motion.article
          key={s.title}
          initial={reduced ? false : { opacity: 0, y: STORY_CARD.offsetY }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={reduced ? { duration: 0 } : { ...STORY_CARD.spring, delay: i * STORY_CARD.stagger }}
          className="border-l border-white/[0.12] pl-6"
        >
          <h3 className="font-display font-normal text-lg text-white mb-2">
            {s.title}
          </h3>
          <p className="font-body font-normal text-base text-white/70 leading-[1.8]">
            {s.body}
          </p>
        </motion.article>
      ))}
    </div>
  )
}

/* ── Testimonial ticker (infinite, draggable, pauses on hover) ──── */

function QuoteTicker() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, VP)
  const reduced = useContext(ReducedMotionContext)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isInView) setVisible(true)
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0 }}
      animate={visible ? { opacity: 1 } : {}}
      transition={reduced ? { duration: 0 } : QUOTE_TICKER.spring}
    >
      <Ticker
        velocity={QUOTE_TICKER.velocity}
        hoverFactor={QUOTE_TICKER.hoverFactor}
        gap={QUOTE_TICKER.gap}
        fade={QUOTE_TICKER.fade}
        loop
        align="stretch"
        className="[&_li]:!h-auto [&_li]:!self-stretch"
        items={TESTIMONIALS.map((t, i) => (
          <blockquote
            key={i}
            className="flex flex-col justify-between rounded-lg bg-white/10 border border-white/[0.08] px-6 py-5 select-none"
            style={{ width: `min(${QUOTE_TICKER.cardWidth}px, calc(100vw - 48px))`, height: '100%' }}
          >
            <p className="font-body font-light italic text-base text-white/80 leading-[1.75] mb-4">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="font-mono text-xs mt-auto pt-3 border-t border-white/[0.06]">
              <cite className="not-italic text-white/40">{t.role}</cite>
            </footer>
          </blockquote>
        ))}
      />
    </motion.div>
  )
}

/* ── Job entry ────────────────────────────────────────────────────── */

function JobEntry({ job }: { job: typeof JOBS[number] }) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, VP)
  const reduced = useContext(ReducedMotionContext)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isInView) setVisible(true)
  }, [isInView])

  return (
    <article
      ref={ref}
      className="pb-10 mb-10 border-b border-white/[0.07] last:border-none last:mb-0 last:pb-0"
    >
      {/* Header row */}
      <motion.div
        initial={reduced ? false : { opacity: 0, y: JOB_ENTRY.offsetY }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={reduced ? { duration: 0 } : JOB_ENTRY.spring}
        className="flex justify-between items-baseline flex-wrap gap-x-4 gap-y-1 mb-1.5"
      >
        <h3 className="font-display font-light text-2xl text-white tracking-tight">{job.company}</h3>
        <time className="font-mono text-xs text-white/30">{job.dates}</time>
      </motion.div>

      {/* Role */}
      <motion.p
        initial={reduced ? false : { opacity: 0, y: JOB_ENTRY.offsetY }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={reduced ? { duration: 0 } : { ...JOB_ENTRY.spring, delay: JOB_ENTRY.childStagger }}
        className="font-mono text-xs tracking-[0.08em] uppercase text-white/50 mb-5"
      >
        {job.role}
      </motion.p>

      {/* Bullets */}
      <ul className="flex flex-col gap-3 font-body font-normal text-base text-white/85 leading-[1.8] list-none">
        {job.bullets.map((b, i) => (
          <motion.li
            key={i}
            initial={reduced ? false : { opacity: 0, y: JOB_ENTRY.offsetY }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={reduced ? { duration: 0 } : { ...JOB_ENTRY.spring, delay: JOB_ENTRY.childStagger * (i + 2) }}
          >
            {b}
          </motion.li>
        ))}
      </ul>

      {/* Tags */}
      {job.tags && (
        <motion.ul
          aria-label={`Technologies at ${job.company}`}
          initial={reduced ? false : { opacity: 0, y: JOB_ENTRY.offsetY }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={reduced ? { duration: 0 } : { ...JOB_ENTRY.spring, delay: JOB_ENTRY.childStagger * (job.bullets.length + 2) }}
          className="flex flex-wrap gap-1.5 mt-5 list-none"
        >
          {job.tags.map(t => (
            <li key={t} className="font-mono text-xs text-white/40 bg-white/[0.06] px-2 py-1 rounded-sm">
              {t}
            </li>
          ))}
        </motion.ul>
      )}
    </article>
  )
}

/* ── Stack list ───────────────────────────────────────────────────── */

function StackList() {
  const ref = useRef<HTMLDListElement>(null)
  const isInView = useInView(ref, VP)
  const reduced = useContext(ReducedMotionContext)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isInView) setVisible(true)
  }, [isInView])

  return (
    <dl ref={ref} className="flex flex-col gap-[18px]">
      {STACK.map(([cat, val], i) => (
        <motion.div
          key={cat}
          initial={reduced ? false : { opacity: 0, y: STACK_ROW.offsetY }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={reduced ? { duration: 0 } : { ...STACK_ROW.spring, delay: i * STACK_ROW.stagger }}
          className="grid grid-cols-[120px_1fr] gap-4 items-baseline"
        >
          <dt className="font-mono text-xs text-white/50">{cat}</dt>
          <dd className="font-body font-normal text-sm text-white/85 leading-snug">{val}</dd>
        </motion.div>
      ))}
    </dl>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
 *  SHARED HELPERS
 * ═══════════════════════════════════════════════════════════════════════ */

function Divider() {
  return (
    <Reveal>
      <hr className="border-none h-px bg-gradient-to-r from-white/[0.1] to-transparent my-14" />
    </Reveal>
  )
}

function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, VP)
  const reduced = useContext(ReducedMotionContext)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isInView) setVisible(true)
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 10 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={reduced ? { duration: 0 } : SECTION_SPRING}
      className={className}
    >
      {children}
    </motion.div>
  )
}
