import type { Metadata } from 'next'
import FieldNotesResume from '@/components/FieldNotesResume'

export const metadata: Metadata = {
  title: 'Résumé',
  description:
    'Jane Molodetskaya — full-stack product engineer and tech lead. React, React Native, Go, platform architecture, and product systems.',
  alternates: {
    canonical: '/resume',
  },
}

export default function ResumePage() {
  return <FieldNotesResume />
}
