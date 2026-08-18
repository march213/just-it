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
  { num: 657, suffix: '', label: 'Merged PRs', sub: 'Atlas quarter · 13 weeks' },
  { num: 4, suffix: '×', label: 'FTUE conversion', sub: 'Dapper Labs · ~0.4% → 1.6%' },
  { num: 17, suffix: '%', label: 'DAU increase', sub: 'Bunch · chat, feed, video reactions' },
  { num: 5, suffix: 'd', label: 'Content migration', sub: 'Four products · frontend to infrastructure' },
]

/* ─── Highlight stories ────────────────────────────────────────────── */

export type Story = {
  title: string
  body: string
}

export const STORIES: Story[] = [
  {
    title: 'Trade-In Auctions, end to end',
    body: 'Built the capability across web, mobile, and backend contracts: spectator board, bid composition, truthful standings, success states, safety gates, and the full Expo port. Moved verdict logic into shared typed data so every platform agrees about who won.',
  },
  {
    title: 'The Atlas marketplace system',
    body: 'Shipped live listings, live sales, offers, packs, discovery filters, and the unified table experience across brands. Worked at the API boundary when the contract was the real constraint, including pagination semantics, sub-dollar purchases, and idempotent activity.',
  },
  {
    title: 'The Contentful Migration',
    body: 'Single-handedly consolidated NBA and NFL content infrastructure across frontend queries, Go structs, Secret Manager, Kubernetes, ArgoCD, and authentication. Diagnosed and recovered a production home-feed outage mid-migration, then delivered on schedule.',
  },
  {
    title: 'One capability model, ten card surfaces',
    body: 'Collapsed fragmented CollectibleCard variants onto one typed capability-preset model across web and React Native. The work spanned 77 PRs—and stopped before becoming a generic render engine that would have been harder to understand than the code it replaced.',
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
  ['Backend',    'Go, protobuf contracts, GraphQL, Firebase/Firestore, serverless, API integrations'],
  ['Platform',   'Google Cloud, Secret Manager, Kubernetes, ArgoCD, Contentful'],
  ['Product',    'UX simplification, prototyping → refinement, Mixpanel, experimentation, funnel thinking'],
  ['Quality',    'Jest, React Testing Library, code reviews, pragmatic test strategy'],
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
      'Joined as a frontend engineer, grew into a full-stack tech lead, and became a founding engineer of Atlas—the unified web and mobile platform replacing legacy NBA Top Shot and NFL ALL DAY frontends.',
      'Built Trade-In Auctions end to end across React, Expo, Go, and protobuf contracts, including standings, bid safety, spectator flows, and shared verdict logic.',
      'Owned major marketplace, set-completion, profile, pack, gifting, feed, and measurement capabilities across NBA, NFL, WNBA, LaLiga, and Disney.',
      'Led cross-layer migrations and production incident response; encoded analytics-with-the-feature into the repository constitution and built the Mixpanel reads used by the organization.',
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
