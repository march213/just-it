'use client'

import { motion, Variants } from 'motion/react'
import ExportButton from './ExportButton'
import { METRICS, STACK } from '@/lib/data'

/* ─── Variants ────────────────────────────────────────────────────────── */

const REVEAL: Variants = {
  hidden: { opacity: 0.12, y: 10, filter: 'blur(10px)' },
  show: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const STAGGER = (delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: delay } },
})

const VP = { once: true, margin: '-60px 0px' }

/* ─── Component ───────────────────────────────────────────────────────── */

export default function WebContent() {
  return (
    <div className="print:hidden">

      {/* Bottom blur vignette — always visible, blurs content scrolling underneath */}
      <div
        className="fixed bottom-0 left-0 right-0 h-36 pointer-events-none z-20 backdrop-blur-md print:hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
        }}
      />

      <a
        href="/"
        className="fixed top-7 left-7 z-50 font-mono text-[10px] tracking-[0.14em] uppercase text-white/40 hover:text-white/70 transition-colors duration-200"
      >
        ← Home
      </a>
      <ExportButton />

      {/* Hero */}
      <section className="relative h-[88vh] flex flex-col justify-center px-8 sm:px-16 py-20 max-w-5xl mx-auto">
        <motion.div initial="hidden" animate="show" variants={STAGGER(0.05)} className="mb-10">
          <motion.p variants={REVEAL} className="font-mono text-[clamp(11px,1.1vw,13px)] tracking-[0.2em] uppercase text-white/55 mb-5">
            Senior Software Engineer
          </motion.p>
          <motion.h1
            variants={REVEAL}
            className="font-light text-[clamp(36px,9vw,96px)] leading-[0.95] tracking-[-0.02em] text-white mb-7"
          >
            Jane<br />Molodetskaya
          </motion.h1>
          <motion.p variants={REVEAL} className="font-body font-normal text-white/85 text-[clamp(16px,1.6vw,20px)] max-w-[520px] leading-[1.72]">
            Product and design engineer, 8 years in.
            Thinking in flows, shipping with craft, always close to the user.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden" animate="show" variants={STAGGER(0.5)}
          className="flex flex-wrap gap-x-7 gap-y-2 font-mono text-[clamp(11px,1.1vw,13px)] text-white/55"
        >
          {[
            { label: 'Toronto, ON', href: null },
            { label: 'info@janemolodetskaya.com', href: 'mailto:info@janemolodetskaya.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/jane-molodetskaya-799bb757' },
            { label: 'GitHub',   href: 'https://github.com/march213' },
          ].map(({ label, href }) => (
            <motion.span key={label} variants={REVEAL}>
              {href
                ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="hover:text-white/90 transition-colors duration-200">{label}</a>
                : label
              }
            </motion.span>
          ))}
        </motion.div>

      </section>

      {/* Scrollable content */}
      <div className="relative z-10 max-w-[720px] mx-auto px-8 sm:px-16 pb-40">

        {/* ── About ───────────────────────────────────────────── */}
        <Reveal className="mb-16 pt-4">
          <Label>About</Label>
          <p className="font-display font-light text-[clamp(19px,2.2vw,26px)] text-white/85 leading-[1.7]">
            8 years building at the intersection of product and design.
            I think in flows, prototype to test ideas, and ship with craft.
            The engineering is the means; the <span className="font-normal text-white">user experience</span> is the point.
          </p>
        </Reveal>

        <Divider />

        {/* ── Impact ──────────────────────────────────────────── */}
        <section className="mb-20">
          <Reveal><Label>Impact</Label></Reveal>
          <motion.div
            initial="hidden" whileInView="show" viewport={VP} variants={STAGGER()}
            className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10"
          >
            {METRICS.map(m => (
              <motion.div key={m.value} variants={REVEAL}>
                <p className="font-display font-light text-[clamp(38px,5vw,60px)] text-white leading-none mb-2">{m.value}</p>
                <p className="font-mono text-[clamp(11px,1.1vw,13px)] text-white/65 leading-snug">{m.label}</p>
                <p className="font-mono text-[clamp(10px,1vw,11px)] text-white/40 leading-snug mt-0.5">{m.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <Divider />

        {/* ── Experience ──────────────────────────────────────── */}
        <section className="mb-20">
          <Reveal><Label>Work</Label></Reveal>

          <Job company="Dapper Labs" role="Senior Software Engineer · Remote / Toronto" dates="May 2022 – Present"
            tags={['TypeScript','React','Next.js','React Native (Expo)','GraphQL','XState','TailwindCSS','TanStack Query']}>
            <p>
              Worked across consumer products: marketplaces, onboarding, marketing pages, challenges, leaderboards.
              The biggest one was the marketplace revamp: started from a blank slate on the UX,
              saw it through to shipping, and kept iterating after.
            </p>
            <p>
              The FTUE rebuild: took conversion from <Hi>~0.4% to 1.6%</Hi> by stripping
              friction at every step, measuring, and iterating until it clicked. Same
              approach across other features too: challenges, home feed.
            </p>
            <p>
              One of the founding engineers on the shared platform that powers all Dapper
              products: common infrastructure, unified codebase, theme support across brands.
            </p>
          </Job>

          <Job company="Lazer Technologies" role="Senior Software Engineer · Toronto" dates="Jul 2021 – May 2022">
            <p>
              React and React Native product engineering with high UX quality and
              tight product/design collaboration. Fast iteration, clean code, real outcomes.
            </p>
          </Job>

          <Job company="Bunch" role="Full Stack Engineer" dates="Oct 2019 – Sep 2021"
            tags={['React Native','Redux Sagas','TypeScript','Jest/RTL','Firebase','Agora','Stream Chat']}>
            <p>
              Led chat, feed, and video reaction features contributing to a <Hi>17% DAU increase</Hi>.
              Cut app loading from <Hi>7s to 3s</Hi> through profiling and optimization.
              Shipped the Snapchat OAuth integration. Mentored teammates, ran user interviews.
            </p>
          </Job>

          <Job company="Axept Global" role="Intermediate Frontend Engineer · Toronto" dates="Dec 2017 – Oct 2019"
            tags={['React','React Native','Redux','CSS-in-JS','Firebase','Node.js']}>
            <p>
              Led a 3-person team: travel insurance comparison tool in <Hi>6 months</Hi>,
              then a similar platform in <Hi>4</Hi>. Built the reusable boilerplate that
              made the second one faster.
            </p>
          </Job>

          <Job company="Rocketbank" role="Frontend Engineer · Moscow" dates="Apr 2017 – Dec 2017"
            tags={['React','Flow','PostCSS','Redux','Jest']}>
            <p>
              Registration flow rebuild: <Hi>20% faster</Hi> time-to-apply,{' '}
              <Hi>15% conversion increase</Hi>. Close collaboration with design and backend.
            </p>
          </Job>

          <Reveal>
            <p className="font-mono text-[clamp(10px,1vw,11px)] text-white/25 leading-relaxed">
              Earlier: Axept Global, Frontend Engineer (Dec 2016 – Apr 2017)<br />
              Digital Team, Junior Frontend Engineer (Jan 2016 – Dec 2016)
            </p>
          </Reveal>
        </section>

        <Divider />

        {/* ── Stack ───────────────────────────────────────────── */}
        <section className="mb-20">
          <Reveal><Label>Stack</Label></Reveal>
          <motion.div
            initial="hidden" whileInView="show" viewport={VP} variants={STAGGER()}
            className="flex flex-col gap-[18px]"
          >
            {STACK.map(([cat, val]) => (
              <motion.div key={cat} variants={REVEAL} className="grid grid-cols-[120px_1fr] gap-4 items-baseline">
                <span className="font-mono text-[clamp(10px,1vw,11px)] text-white/50">{cat}</span>
                <span className="font-body font-normal text-[clamp(13px,1.3vw,15px)] text-white/85 leading-snug">{val}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <Divider />

        {/* ── Education ───────────────────────────────────────── */}
        <Reveal className="mb-4">
          <Label>Education</Label>
          <p className="font-display font-light text-[clamp(17px,2vw,22px)] text-white/90 mb-1.5">
            Moscow Power Engineering Institute
          </p>
          <p className="font-mono text-[clamp(11px,1.1vw,13px)] text-white/40">Computer Programming · 2007–2010</p>
        </Reveal>

        <Reveal>
          <p className="font-mono text-[clamp(10px,1vw,11px)] text-white/20 tracking-[0.12em] mt-20">
            info@janemolodetskaya.com · toronto, on
          </p>
        </Reveal>
      </div>
    </div>
  )
}

/* ─── Helpers ─────────────────────────────────────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[clamp(11px,1.1vw,13px)] tracking-[0.2em] uppercase text-white/55 mb-6">
      {children}
    </p>
  )
}

function Divider() {
  return (
    <motion.hr
      initial="hidden" whileInView="show" viewport={VP} variants={REVEAL}
      className="border-none h-px bg-gradient-to-r from-white/[0.1] to-transparent my-14"
    />
  )
}

function Hi({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-white/95">{children}</strong>
}

function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={VP} variants={REVEAL} className={className}>
      {children}
    </motion.div>
  )
}

function Job({ company, role, dates, tags, children }: {
  company: string; role: string; dates: string; tags?: string[]; children: React.ReactNode
}) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={VP} variants={STAGGER()}
      className="pb-10 mb-10 border-b border-white/[0.07] last:border-none last:mb-0 last:pb-0"
    >
      <motion.div variants={REVEAL} className="flex justify-between items-baseline flex-wrap gap-x-4 gap-y-1 mb-1.5">
        <h2 className="font-display font-light text-[clamp(20px,2.2vw,26px)] text-white tracking-tight">{company}</h2>
        <span className="font-mono text-[clamp(10px,1vw,11px)] text-white/30">{dates}</span>
      </motion.div>
      <motion.p variants={REVEAL} className="font-mono text-[clamp(11px,1.1vw,12px)] tracking-[0.08em] uppercase text-white/50 mb-5">
        {role}
      </motion.p>
      <motion.div variants={REVEAL} className="flex flex-col gap-3 font-body font-normal text-[clamp(14px,1.4vw,16px)] text-white/85 leading-[1.8]">
        {children}
      </motion.div>
      {tags && (
        <motion.div variants={REVEAL} className="flex flex-wrap gap-1.5 mt-5">
          {tags.map(t => (
            <span key={t} className="font-mono text-[clamp(10px,1vw,11px)] text-white/40 bg-white/[0.06] px-2 py-1 rounded-sm">
              {t}
            </span>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}
