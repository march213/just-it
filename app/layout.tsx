import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import ShaderCanvas from '@/components/ShaderCanvas'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jane Molodetskaya',
  description: 'A coffee first software engineer at Dapper Labs, living in Toronto, Canada.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jakarta.variable} suppressHydrationWarning>
        <ShaderCanvas />
        {children}
      </body>
    </html>
  )
}
