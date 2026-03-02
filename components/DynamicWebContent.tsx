'use client'

import dynamic from 'next/dynamic'

// Must be in a Client Component to use ssr: false
const WebContent = dynamic(() => import('./WebContent'), { ssr: false })

export default function DynamicWebContent() {
  return <WebContent />
}
