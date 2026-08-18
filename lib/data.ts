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
  { num: 657, suffix: '', label: 'Merged PRs', sub: '13 weeks · 4 repositories · 4,231 files' },
  { num: 34, suffix: '', label: 'Backend PRs', sub: 'Dapper Labs · Go, SQL, protobuf contracts' },
  { num: 15, suffix: '+', label: 'Funnels & insights', sub: 'Dapper Labs Mixpanel reads used by the organization' },
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
    title: 'The Dapper Labs marketplace system',
    body: 'Shipped live listings, live sales, offers, packs, discovery filters, and the unified table experience across brands. Worked at the API boundary when the contract was the real constraint, including pagination semantics, sub-dollar purchases, and idempotent activity.',
  },
  {
    title: 'The Contentful migration',
    body: 'Single-handedly consolidated NBA and NFL content infrastructure across frontend queries, Go structs, Secret Manager, Kubernetes, ArgoCD, and authentication. Diagnosed and recovered a production home-feed outage mid-migration, then delivered on schedule.',
  },
  {
    title: 'One capability model, ten card surfaces',
    body: 'Collapsed fragmented CollectibleCard variants onto one typed capability-preset model across web and React Native. The work spanned 77 PRs—and stopped before becoming a generic render engine that would have been harder to understand than the code it replaced.',
  },
]

/* ─── Breadth behind the case studies ─────────────────────────────── */

export const IMPACT_AREAS: Story[] = [
  {
    title: 'Sets, completion, and Collect Hub',
    body: 'Shipped Set Page V2 under the existing route, corrected a doubled 688-row data path to 344 real slots, and made purchase progress revalidate. Built set completion as an isolated, count-based state machine with 11 TDD cases, plus parallels, cost-to-complete, bulk locking, and the Collect Hub consolidation.',
  },
  {
    title: 'Profiles, packs, gifting, and activity',
    body: 'Built Profile V2 across overview, trophy, wishlist, identity, privacy, and collector discovery surfaces. Delivered the packs marketplace and detail history, unopened-pack gifting, Moment gifting on web and mobile, the global activity feed, collector context, and mobile-parity account activity.',
  },
  {
    title: 'Backend contracts and data integrity',
    body: 'Changed auction ASC semantics to board order so pagination became correct by construction, then removed the client workaround. Fixed triplicated NFT results, canonicalized transfer addresses, made activity IDs idempotent, exposed auction lot and spectator data, and corrected sub-dollar purchases and fractional-cent listings.',
  },
  {
    title: 'Measurement as part of the product',
    body: 'Authored the Dapper Labs platform Mixpanel dashboards and more than 15 funnels and insights used by the organization. Found Checkout Started undercounting by roughly half, added typed funnel and session context, and amended the repository constitution so analytics ships with the feature rather than arriving as cleanup.',
  },
  {
    title: 'Collector safety and product judgment',
    body: 'Added special-serial warnings before irreversible trade-ins, gated every path after a one-tap $334 purchase, hid unsafe multi-lot auctions instead of misrepresenting one prize as the whole lot, and researched eight marketplaces before designing offer guidance. The details protect trust, not just task completion.',
  },
  {
    title: 'Brands, leagues, and platform range',
    body: 'Carried Dapper Labs’ unified collectibles platform across NBA, NFL, WNBA, LaLiga, and Disney: asset roles, themes, badges, metadata, team identifiers, seasonal rewards, active-team boards, pin layouts, navigation, and feature capability differences. Also shipped favorite-team selection and leaderboard parity across web and mobile.',
  },
  {
    title: 'NFL and NBA foundations',
    body: 'Helped launch NFL ALL DAY Playbook and the NBA packs marketplace; owned NFL Collection Groups end to end; took NFL marketplace from zero to one; and built team collecting pages that documented VIP feedback said made people want to collect and complete more.',
  },
  {
    title: 'Technical and organizational leadership',
    body: 'Named frontend engineering driver for the CEO-authored Economic Confidence OKR with a real revenue target and selected by the CEO for a Kaizen / Star of the Month award. Held the NBA Top Shot and NFL ALL DAY migration to Dapper Labs’ unified platform together, led incident response, raised team standards, and became a direct source of truth for frontend decisions.',
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
  {
    quote: 'Our products benefit from Jane simply being a part of the projects. Her impact is seen throughout our code base, and user-facing features.',
    role: 'Formal company values review · Impact',
  },
  {
    quote: 'Jane has been the epitome of end-to-end ownership and is an amazing example of what a successful startup mentality looks like.',
    role: 'NFL Collection Groups launch recognition',
  },
  {
    quote: 'Even if that were the case I don\u2019t think you\u2019d be at any risk at all.',
    role: 'VP Engineering · Direct feedback on invisible work',
  },
  {
    quote: 'I highly recommend we all check out Jane\u2019s real-time prototype. This is the power of social.',
    role: 'VP Product · Company-wide recommendation',
  },
  {
    quote: 'Jane is the epitome of an owner. She is willing to jump into any fire, any line of work, any ask and critically think about how best to drive the product forward.',
    role: 'Formal company values review · Ownership',
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
    role: 'Tech Lead · Senior Software Engineer · Remote / Toronto',
    dates: 'May 2022 – Present',
    tags: ['TypeScript', 'React', 'Next.js', 'React Native (Expo)', 'GraphQL', 'XState', 'TailwindCSS', 'TanStack Query'],
    bullets: [
      'Joined as a frontend engineer, grew into a full-stack tech lead, and became a founding engineer of Dapper Labs’ unified web and mobile collectibles platform, replacing the legacy NBA Top Shot and NFL ALL DAY frontends.',
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
