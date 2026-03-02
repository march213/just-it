import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen flex flex-col px-8 sm:px-16 max-w-5xl mx-auto">
        <article className="flex-1 flex flex-col justify-center py-20">
          <h1 className="font-light text-[clamp(36px,9vw,96px)] leading-[0.95] tracking-[-0.02em] text-white mb-7">
            Jane<br />Molodetskaya
          </h1>
          <p className="font-normal text-white/85 text-[clamp(16px,1.6vw,20px)] max-w-[520px] leading-[1.72]">
            A coffee first software engineer at{' '}
            <a
              href="https://www.dapperlabs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors duration-200"
            >
              Dapper Labs
            </a>
            , living in Toronto, Canada.
          </p>
        </article>

        <footer className="pb-20">
          <ul className="flex flex-wrap gap-x-7 gap-y-2 font-body text-[clamp(11px,1.1vw,13px)] uppercase tracking-[0.18em] text-white/55">
            {[
              { label: 'GitHub',    href: 'https://github.com/march213' },
              { label: 'Facebook',  href: 'https://www.facebook.com/march213' },
              { label: 'Twitter',   href: 'https://twitter.com/march213_ya' },
              { label: 'Instagram', href: 'https://www.instagram.com/march213' },
              { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/jane-molodetskaya-799bb757/' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-white/90 transition-colors duration-200">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/resume" className="hover:text-white/90 transition-colors duration-200">
                Resume →
              </Link>
            </li>
          </ul>
        </footer>
    </main>
  )
}
