import { EVIDENCE, IMPACT_AREAS, JOBS, STACK, STORIES, TESTIMONIALS } from '@/lib/data'

const PROFILE = {
  location: 'Toronto, Canada',
  email: 'info@janemolodetskaya.com',
  links: [
    ['LinkedIn', 'https://linkedin.com/in/jane-molodetskaya-799bb757'],
    ['GitHub', 'https://github.com/march213'],
  ] as const,
}

export default function FieldNotesResume() {
  return (
    <main className="field-notes-resume min-h-screen">
      <header className="border-b border-[var(--fn-border)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[var(--fn-muted)]">
              Personal impact index
            </p>
            <h1 className="max-w-[12ch] font-display text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-[var(--fn-blue)] text-balance">
              Jane<br />Molodetskaya
            </h1>
            <p className="mt-8 max-w-[62ch] text-lg leading-[1.65] text-[var(--fn-body)] text-pretty sm:text-xl">
              Full-stack product engineer and tech lead with 8 years building systems at the intersection of product and design. I see the real problem, fix it at the right layer, and leave the platform better than I found it.
            </p>
          </div>

          <address className="font-mono text-sm not-italic text-[var(--fn-muted)]">
            <p className="mb-3 text-xs uppercase tracking-[0.12em]">{PROFILE.location}</p>
            <div className="flex flex-wrap items-center gap-x-5">
              <a className="inline-flex min-h-11 items-center transition-colors duration-150 hover:text-[var(--fn-blue)] focus-visible:outline-2 focus-visible:outline-offset-2" href={`mailto:${PROFILE.email}`}>Email</a>
              {PROFILE.links.map(([label, href]) => (
                <a className="inline-flex min-h-11 items-center transition-colors duration-150 hover:text-[var(--fn-blue)] focus-visible:outline-2 focus-visible:outline-offset-2" href={href} key={label}>{label}</a>
              ))}
            </div>
          </address>
        </div>
      </header>

      <div aria-hidden="true" className="h-px bg-[repeating-linear-gradient(90deg,var(--fn-border)_0,var(--fn-border)_1px,transparent_1px,transparent_12px)]" />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-14">
        <section aria-labelledby="impact-title" className="border-t border-[var(--fn-border)]">
          <div className="grid border-x border-b border-[var(--fn-border)] lg:grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.7fr)]">
            <SectionIntro index="01" label="Impact" title="How I create impact" id="impact-title">
              Ownership, product and business outcomes, systemic improvement, and speed when it matters.
            </SectionIntro>

            <dl className="grid border-t border-[var(--fn-border)] sm:grid-cols-2 lg:border-l lg:border-t-0">
              {EVIDENCE.map((evidence, index) => (
                <div key={evidence.label} className="min-h-44 border-b border-[var(--fn-border-faint)] p-5 sm:odd:border-r sm:p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--fn-blue)]">Evidence {String(index + 1).padStart(2, '0')}</p>
                  <dd className="mt-6 font-mono text-4xl leading-none tracking-[-0.04em] tabular-nums">{evidence.value}</dd>
                  <dt className="mt-4 text-base font-semibold">{evidence.label}</dt>
                  <dd className="mt-1 max-w-[48ch] text-sm leading-relaxed text-[var(--fn-muted)] text-pretty">{evidence.sub}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby="systems-title" className="border-x border-b border-[var(--fn-border)]">
          <div className="grid lg:grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.7fr)]">
            <SectionIntro index="02" label="Systems" title="Selected work" id="systems-title">
              Capabilities carried across product judgment, interface craft, backend contracts, and operations.
            </SectionIntro>

            <div className="border-t border-[var(--fn-border)] lg:border-l lg:border-t-0">
              {STORIES.map((story, index) => (
                <article key={story.title} className="grid border-b border-[var(--fn-border-faint)] p-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5 sm:p-6">
                  <p className="font-mono text-xs text-[var(--fn-blue)] tabular-nums">{String(index + 1).padStart(2, '0')}</p>
                  <div>
                    <h3 className="text-base font-semibold leading-snug text-balance">{story.title}</h3>
                    <p className="mt-3 max-w-[65ch] text-base leading-[1.68] text-[var(--fn-body)]">{story.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="scope-title" className="border-x border-b border-[var(--fn-border)]">
          <div className="grid lg:grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.7fr)]">
            <SectionIntro index="03" label="Scope" title="Impact across the platform" id="scope-title">
              The breadth behind the case studies—product domains, platform layers, and organizational leverage.
            </SectionIntro>

            <div className="grid border-t border-[var(--fn-border)] sm:grid-cols-2 lg:border-l lg:border-t-0">
              {IMPACT_AREAS.map((area, index) => (
                <article key={area.title} className="border-b border-[var(--fn-border-faint)] p-5 sm:odd:border-r sm:p-6">
                  <p className="font-mono text-xs text-[var(--fn-blue)] tabular-nums">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="mt-5 text-base font-semibold leading-snug text-balance">{area.title}</h3>
                  <p className="mt-3 max-w-[65ch] text-sm leading-[1.7] text-[var(--fn-body)] text-pretty">{area.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="voices-title" className="border-x border-b border-[var(--fn-border)]">
          <div className="grid lg:grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.7fr)]">
            <SectionIntro index="04" label="Voices" title="Recognition index" id="voices-title" tinted>
              What engineering, product, and design leaders said after seeing the work up close.
            </SectionIntro>

            <div className="border-t border-[var(--fn-border)] lg:border-l lg:border-t-0">
              <div aria-hidden="true" className="hidden grid-cols-[3rem_minmax(10rem,0.55fr)_minmax(0,1.45fr)] gap-5 bg-[var(--fn-blue-dim)] px-6 py-4 font-mono text-xs uppercase tracking-[0.1em] text-[var(--fn-muted)] sm:grid">
                <span>No.</span>
                <span>Source</span>
                <span>Recognition</span>
              </div>

              {TESTIMONIALS.map((testimonial, index) => (
                <blockquote key={testimonial.quote} className="grid gap-3 border-t border-[var(--fn-border-faint)] p-5 sm:grid-cols-[3rem_minmax(10rem,0.55fr)_minmax(0,1.45fr)] sm:gap-5 sm:p-6">
                  <p className="font-mono text-xs text-[var(--fn-blue)] tabular-nums">{String(index + 1).padStart(2, '0')}</p>
                  <footer className="font-mono text-xs uppercase leading-relaxed tracking-[0.08em] text-[var(--fn-muted)]">{testimonial.role}</footer>
                  <p className="max-w-[65ch] text-base leading-[1.62] text-[var(--fn-body)] text-pretty">“{testimonial.quote}”</p>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="experience-title" className="border-x border-b border-[var(--fn-border)]">
          <div className="grid lg:grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.7fr)]">
            <SectionIntro index="05" label="Timeline" title="Experience" id="experience-title" />

            <div className="border-t border-[var(--fn-border)] lg:border-l lg:border-t-0">
              {JOBS.map((job, index) => (
                <article key={job.company} className="grid border-b border-[var(--fn-border-faint)] p-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6 sm:p-6">
                  <div>
                    <p className="font-mono text-xs text-[var(--fn-blue)] tabular-nums">{String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mt-3 text-base font-semibold leading-snug text-balance">{job.company}</h3>
                    <time className="mt-2 block font-mono text-xs leading-relaxed text-[var(--fn-muted)] tabular-nums">{job.dates}</time>
                  </div>
                  <div className="mt-5 sm:mt-0">
                    <p className="font-mono text-xs leading-relaxed text-[var(--fn-blue)]">{job.role}</p>
                    <ul className="mt-4 grid max-w-[65ch] gap-3 text-base leading-[1.65] text-[var(--fn-body)]">
                      {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="capabilities-title" className="border-x border-b border-[var(--fn-border)]">
          <div className="grid lg:grid-cols-[minmax(15rem,0.8fr)_minmax(0,1.7fr)]">
            <SectionIntro index="06" label="Range" title="Capabilities" id="capabilities-title">
              The stack follows the problem. Product judgment and system ownership are the through-line.
            </SectionIntro>

            <dl className="border-t border-[var(--fn-border)] lg:border-l lg:border-t-0">
              {STACK.map(([category, details]) => (
                <div key={category} className="grid gap-2 border-b border-[var(--fn-border-faint)] p-5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6 sm:p-6">
                  <dt className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--fn-blue)]">{category}</dt>
                  <dd className="max-w-[65ch] text-base leading-[1.62] text-[var(--fn-body)]">{details}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-5 border-x border-b border-[var(--fn-border)] px-6 py-7 font-mono text-xs uppercase tracking-[0.12em] text-[var(--fn-muted)] sm:px-8">
          <p>Jane Molodetskaya / résumé</p>
          <p>Toronto · 2026</p>
        </footer>
      </div>
    </main>
  )
}

function SectionIntro({
  index,
  label,
  title,
  id,
  children,
  tinted = false,
}: {
  index: string
  label: string
  title: string
  id: string
  children?: React.ReactNode
  tinted?: boolean
}) {
  return (
    <div className={`p-6 sm:p-8 ${tinted ? 'bg-[var(--fn-blue-dim)]' : ''}`}>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--fn-blue)]">{index} / {label}</p>
      <h2 id={id} className="mt-8 text-base font-semibold leading-snug text-balance">{title}</h2>
      {children ? <p className="mt-3 max-w-[34ch] text-base leading-[1.65] text-[var(--fn-muted)] text-pretty">{children}</p> : null}
    </div>
  )
}
