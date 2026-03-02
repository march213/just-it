import DynamicWebContent from '@/components/DynamicWebContent'
import { STACK } from '@/lib/data'

export default function ResumePage() {
  return (
    <>
      {/* Client-only: shader, animations, web story view */}
      <DynamicWebContent />

      {/* ─── PRINT VIEW (SSR'd, always in DOM, visible only when printing) ─── */}
      <div className="hidden print:block font-body text-neutral-900 leading-normal">
        {/* Header */}
        <div className="mb-6 pb-4 border-b border-neutral-300">
          <h1 className="text-4xl font-light tracking-tight text-neutral-950 mb-1">
            Jane Molodetskaya
          </h1>
          <p className="text-xs uppercase tracking-[0.12em] text-violet-700 mb-3 font-mono">
            Senior Software Engineer · Product-Minded · Web + Mobile
          </p>
          <p className="text-xs text-neutral-600 font-mono">
            Toronto, ON · info@janemolodetskaya.com · linkedin.com/in/jane-molodetskaya-799bb757 · github.com/march213
          </p>
        </div>

        {/* About */}
        <div className="mb-5">
          <p className="text-sm text-neutral-800 leading-relaxed">
            8 years building at the intersection of product and design. I think in flows,
            prototype to test ideas, and ship with craft. The engineering is the means;
            the user experience is the point.
          </p>
        </div>

        <div className="border-t border-neutral-200 mb-4" />

        {/* Skills */}
        <div className="mb-5">
          <p className="text-xs uppercase tracking-[0.18em] text-violet-700 font-mono mb-2.5">Core Skills</p>
          <div className="flex flex-col gap-2">
            {STACK.map(([cat, val]) => (
              <div key={cat} className="grid grid-cols-[100px_1fr] gap-3 text-xs">
                <span className="text-neutral-500 font-mono pt-0.5">{cat}</span>
                <span className="text-neutral-700">{val}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-neutral-200 mb-4" />

        {/* Experience */}
        <div className="mb-5">
          <p className="text-xs uppercase tracking-[0.18em] text-violet-700 font-mono mb-3">Experience</p>

          <PrintJob company="Dapper Labs" role="Senior Software Engineer · Remote / Toronto" dates="May 2022 – Present">
            <li>Led marketplace revamp from blank-slate UX to shipping, then kept iterating</li>
            <li>Rebuilt FTUE/onboarding: <strong>~0.4–0.6% to 1.6% conversion</strong> through flow simplification and data-driven iteration</li>
            <li>One of the founding engineers on the shared platform powering all Dapper products: common infrastructure, unified codebase, theme support across brands</li>
            <li>Simplified complex flows (challenges, onboarding, leaderboards) with reduced friction and increased engagement</li>
            <li>Cross-platform delivery across Web + React Native (Expo); fast iteration loops based on product data</li>
            <p className="text-xs text-neutral-500 mt-1.5 font-mono">TypeScript, React, Next.js, React Native (Expo), GraphQL (Apollo), XState, TailwindCSS, TanStack Query</p>
          </PrintJob>

          <PrintJob company="Lazer Technologies" role="Senior Software Engineer · Toronto" dates="Jul 2021 – May 2022">
            <li>Shipped React and React Native features with high UX quality and close product/design collaboration</li>
          </PrintJob>

          <PrintJob company="Bunch" role="Full Stack Engineer" dates="Oct 2019 – Sep 2021">
            <li>Led chat, feed, and video reaction features → <strong>17% DAU increase</strong></li>
            <li>Improved app loading from <strong>7s → 3s</strong>; shipped Snapchat OAuth integration; mentored teammates, ran user interviews</li>
            <p className="text-xs text-neutral-500 mt-1.5 font-mono">React Native, Redux Sagas, TypeScript, Jest/RTL, Firebase, Agora, Stream Chat</p>
          </PrintJob>

          <PrintJob company="Axept Global" role="Intermediate Frontend Engineer · Toronto" dates="Dec 2017 – Oct 2019">
            <li>Led 3-person team: delivered travel insurance comparison tool in <strong>6 months</strong>, similar product in <strong>4</strong></li>
            <li>Built reusable project boilerplate; paired with junior engineers</li>
          </PrintJob>

          <PrintJob company="Rocketbank" role="Frontend Engineer · Moscow" dates="Apr 2017 – Dec 2017">
            <li>Registration flow rewrite: <strong>20% faster</strong> time-to-apply, <strong>15% conversion increase</strong></li>
          </PrintJob>

          <p className="text-xs text-neutral-400 font-mono mt-2">
            Earlier: Axept Global, Frontend Engineer (Dec 2016 – Apr 2017) · Digital Team, Junior Frontend (Jan 2016 – Dec 2016)
          </p>
        </div>

        <div className="border-t border-neutral-200 mb-4" />

        {/* Education */}
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-violet-700 font-mono mb-2">Education</p>
          <p className="text-sm text-neutral-900">Moscow Power Engineering Institute, Computer Programming, 2007–2010</p>
        </div>
      </div>
    </>
  )
}

function PrintJob({ company, role, dates, children }: {
  company: string; role: string; dates: string; children: React.ReactNode
}) {
  return (
    <div className="mb-4 break-inside-avoid">
      <div className="flex justify-between items-baseline flex-wrap gap-x-3 mb-0.5">
        <span className="text-sm font-medium text-neutral-950">{company}</span>
        <span className="text-xs text-neutral-400 font-mono">{dates}</span>
      </div>
      <p className="text-xs uppercase tracking-[0.08em] text-violet-700 font-mono mb-1.5">{role}</p>
      <ul className="flex flex-col gap-1 list-none">
        {children}
      </ul>
    </div>
  )
}
