import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import DynamicShaderCanvas from '@/components/DynamicShaderCanvas'
import './globals.css'

const SITE_URL = 'https://janemolodetskaya.com'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Jane Molodetskaya — Product Engineer',
    template: '%s | Jane Molodetskaya',
  },
  description:
    'Product engineer with 8 years building at the intersection of product and design. React, Next.js, React Native. Currently at Dapper Labs.',
  keywords: [
    'Jane Molodetskaya',
    'software engineer',
    'product engineer',
    'frontend engineer',
    'React',
    'Next.js',
    'React Native',
    'TypeScript',
    'Toronto',
    'Dapper Labs',
  ],
  authors: [{ name: 'Jane Molodetskaya' }],
  creator: 'Jane Molodetskaya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Jane Molodetskaya',
    title: 'Jane Molodetskaya — Product Engineer',
    description:
      'Product engineer with 8 years building at the intersection of product and design. React, Next.js, React Native.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@march213_ya',
    title: 'Jane Molodetskaya — Product Engineer',
    description:
      'Product engineer with 8 years building at the intersection of product and design.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jane Molodetskaya',
  jobTitle: 'Senior Software Engineer',
  url: SITE_URL,
  sameAs: [
    'https://github.com/march213',
    'https://linkedin.com/in/jane-molodetskaya-799bb757',
    'https://twitter.com/march213_ya',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Dapper Labs',
    url: 'https://www.dapperlabs.com',
  },
  knowsAbout: [
    'React', 'Next.js', 'TypeScript', 'React Native', 'GraphQL',
    'Product Engineering', 'Frontend Development',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jakarta.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <DynamicShaderCanvas />
        {children}
      </body>
    </html>
  )
}
