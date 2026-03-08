/* ─── Metric cards (AnimateNumber-friendly) ────────────────────────── */

export type Metric = {
  /** Numeric part for AnimateNumber (e.g. 1.6) */
  num: number
  /** Display suffix/prefix (e.g. '%', 's') */
  suffix: string
  prefix?: string
  label: string
  sub: string
}

export const METRICS: Metric[] = [
  { num: 1.6, suffix: '%', label: 'FTUE conversion',  sub: 'Dapper Labs · up from ~0.4%' },
  { num: 17,  suffix: '%', label: 'DAU increase',     sub: 'Bunch' },
  { num: 3,   suffix: 's', label: 'App load time',    sub: 'Bunch · down from 7s' },
  { num: 20,  suffix: '%', label: 'Faster signup',    sub: 'Rocketbank · +15% conversion' },
]

/* ─── Highlight stories ────────────────────────────────────────────── */

export type Story = {
  title: string
  body: string
}

export const STORIES: Story[] = [
  {
    title: 'The Marketplace',
    body: 'Started from a blank slate on the UX for Dapper\u2019s marketplace — the full buy/sell/offer cycle. Architected a purchase state machine, built live listings with real-time polling, and kept iterating post-launch until it felt right.',
  },
  {
    title: 'The Conversion Problem',
    body: 'First-time user conversion was stuck at 0.4%. Stripped friction at every step — simplified flows, measured drop-off, iterated fast. Took it to 1.6%, a 4\u00D7 lift that changed how the team thought about onboarding.',
  },
  {
    title: 'The Contentful Migration',
    body: 'Single-handedly migrated the content infrastructure across four products in 5 days. When an unexpected deploy triggered a production issue mid-migration, diagnosed the root cause in real-time, coordinated the fix, and delivered the complete migration on schedule.',
  },
]

/* ─── Testimonials ─────────────────────────────────────────────────── */

export type Testimonial = {
  quote: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Jane is an x-factor on any team. She drives excellence within every facet of building our products. Her relentless drive for understanding challenges us to build the best products for our users.',
    role: 'Senior Engineering Manager',
  },
  {
    quote: 'Inspiring to see the energy and dedication you\u2019ve put in here\u2026 you\u2019ve really shown up and established yourself as one of our most impactful engineers.',
    role: 'Staff Software Engineer',
  },
  {
    quote: 'Front-end heroine! Always jumping in to push quick wins and striving to create a quality product. Very thankful to be working so close with you!',
    role: 'Product Designer',
  },
  {
    quote: 'Very lucky to be your teammate. Thank you for raising the bar every day.',
    role: 'Director of Product',
  },
  {
    quote: 'Jane consistently impresses with her fast and impactful contributions\u2026 proactive problem solving, adaptability, and attention to details make her a highly respected teammate.',
    role: 'Company-wide announcement · Promotion to Senior Engineer, Oct 2023',
  },
]

/* ─── Stack ────────────────────────────────────────────────────────── */

export const STACK: [string, string][] = [
  ['Web',        'React, Next.js, TypeScript, TailwindCSS, XState, Apollo (GraphQL), TanStack Query, Nuqs'],
  ['Mobile',     'React Native, Expo, performance tuning, micro-interactions, cross-platform UX'],
  ['Product',    'UX simplification, prototyping \u2192 refinement, A/B testing, instrumentation, funnel thinking'],
  ['Quality',    'Jest, React Testing Library, code reviews, pragmatic test strategy'],
  ['Backend',    'Firebase/Firestore, serverless, API integrations'],
  ['Leadership', 'Cross-functional collaboration, mentoring, stakeholder alignment, hackathons'],
]

/* ─── Jobs ─────────────────────────────────────────────────────────── */

export type Job = {
  company: string
  role: string
  dates: string
  tags?: string[]
  bullets: string[]
}

export const JOBS: Job[] = [
  {
    company: 'Dapper Labs',
    role: 'Senior Software Engineer · Remote / Toronto',
    dates: 'May 2022 – Present',
    tags: ['TypeScript', 'React', 'Next.js', 'React Native (Expo)', 'GraphQL', 'XState', 'TailwindCSS', 'TanStack Query'],
    bullets: [
      'Built features across Dapper\u2019s collectibles products (NBA, NFL, Disney): marketplaces, onboarding, marketing pages, challenges, leaderboards.',
      'Led the marketplace revamp end-to-end — from blank-slate UX to shipping, then kept iterating.',
      'Rebuilt FTUE onboarding: took conversion from ~0.4% to 1.6% by stripping friction at every step.',
      'One of the founding engineers on the shared platform powering all Dapper products: common infrastructure, unified codebase, cross-brand theming.',
    ],
  },
  {
    company: 'Lazer Technologies',
    role: 'Senior Software Engineer · Toronto',
    dates: 'Jul 2021 – May 2022',
    bullets: [
      'React and React Native product engineering with high UX quality and tight product/design collaboration.',
    ],
  },
  {
    company: 'Bunch',
    role: 'Full Stack Engineer',
    dates: 'Oct 2019 – Sep 2021',
    tags: ['React Native', 'Redux Sagas', 'TypeScript', 'Jest/RTL', 'Firebase', 'Agora', 'Stream Chat'],
    bullets: [
      'Led chat, feed, and video reaction features contributing to a 17% DAU increase.',
      'Cut app loading from 7s to 3s through profiling and optimization. Shipped Snapchat OAuth integration.',
    ],
  },
  {
    company: 'Axept Global',
    role: 'Intermediate Frontend Engineer · Toronto',
    dates: 'Dec 2017 – Oct 2019',
    tags: ['React', 'React Native', 'Redux', 'CSS-in-JS', 'Firebase', 'Node.js'],
    bullets: [
      'Led a 3-person team: travel insurance comparison tool in 6 months, then a similar platform in 4. Built the reusable boilerplate that made the second one faster.',
    ],
  },
  {
    company: 'Rocketbank',
    role: 'Frontend Engineer · Moscow',
    dates: 'Apr 2017 – Dec 2017',
    tags: ['React', 'Flow', 'PostCSS', 'Redux', 'Jest'],
    bullets: [
      'Registration flow rebuild: 20% faster time-to-apply, 15% conversion increase.',
    ],
  },
]
