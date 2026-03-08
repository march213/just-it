import type { Metadata } from 'next'
import DynamicWebContent from '@/components/DynamicWebContent'
import { STACK, JOBS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Jane Molodetskaya — Senior Software Engineer. 8 years of product engineering across React, Next.js, and React Native. Currently at Dapper Labs.',
  alternates: {
    canonical: '/resume',
  },
}

export default function ResumePage() {
  return (
    <>
      {/* Client-only: shader, animations, web story view */}
      <DynamicWebContent />

      {/* ─── PRINT VIEW (SSR'd, always in DOM, visible only when printing) ─── */}
      <article className="hidden print:block font-body text-neutral-900 leading-normal">
        {/* Header */}
        <header className="mb-6 pb-4 border-b border-neutral-300">
          <h1 className="text-4xl font-light tracking-tight text-neutral-950 mb-1 text-wrap-balance">
            Jane Molodetskaya
          </h1>
          <p className="text-xs uppercase tracking-[0.12em] text-violet-700 mb-3 font-mono">
            Senior Software Engineer · Product-Minded · Web + Mobile
          </p>
          <address className="not-italic text-xs text-neutral-600 font-mono">
            Toronto, ON · info@janemolodetskaya.com · linkedin.com/in/jane-molodetskaya-799bb757 · github.com/march213
          </address>
        </header>

        {/* About */}
        <section className="mb-5">
          <p className="text-sm text-neutral-800 leading-relaxed">
            Product engineer with 8 years building at the intersection of product and design.
            I think in flows, prototype to test ideas, and ship with craft.
            The engineering is the means; the user experience is the point.
          </p>
        </section>

        <hr className="border-neutral-200 mb-4" />

        {/* Skills */}
        <section className="mb-5">
          <h2 className="text-xs uppercase tracking-[0.18em] text-violet-700 font-mono mb-2.5">Core Skills</h2>
          <dl className="flex flex-col gap-2">
            {STACK.map(([cat, val]) => (
              <div key={cat} className="grid grid-cols-[100px_1fr] gap-3 text-xs">
                <dt className="text-neutral-500 font-mono pt-0.5">{cat}</dt>
                <dd className="text-neutral-700">{val}</dd>
              </div>
            ))}
          </dl>
        </section>

        <hr className="border-neutral-200 mb-4" />

        {/* Experience */}
        <section className="mb-5">
          <h2 className="text-xs uppercase tracking-[0.18em] text-violet-700 font-mono mb-3">Experience</h2>

          {JOBS.map((job) => (
            <PrintJob key={job.company} company={job.company} role={job.role} dates={job.dates}>
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
              {job.tags && (
                <li className="text-xs text-neutral-500 mt-1.5 font-mono list-none">
                  {job.tags.join(', ')}
                </li>
              )}
            </PrintJob>
          ))}

          <p className="text-xs text-neutral-400 font-mono mt-2">
            Earlier: Axept Global, Frontend Engineer (Dec 2016 – Apr 2017) · Digital Team, Junior Frontend (Jan 2016 – Dec 2016)
          </p>
        </section>

        <hr className="border-neutral-200 mb-4" />

        {/* Education */}
        <section>
          <h2 className="text-xs uppercase tracking-[0.18em] text-violet-700 font-mono mb-2">Education</h2>
          <p className="text-sm text-neutral-900">Moscow Power Engineering Institute, Computer Programming, 2007–2010</p>
        </section>
      </article>
    </>
  )
}

function PrintJob({ company, role, dates, children }: {
  company: string; role: string; dates: string; children: React.ReactNode
}) {
  return (
    <article className="mb-4 break-inside-avoid">
      <div className="flex justify-between items-baseline flex-wrap gap-x-3 mb-0.5">
        <h3 className="text-sm font-medium text-neutral-950">{company}</h3>
        <time className="text-xs text-neutral-400 font-mono">{dates}</time>
      </div>
      <p className="text-xs uppercase tracking-[0.08em] text-violet-700 font-mono mb-1.5">{role}</p>
      <ul className="flex flex-col gap-1 list-none">
        {children}
      </ul>
    </article>
  )
}
