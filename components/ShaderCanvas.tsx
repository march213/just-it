'use client'

import { OmbreSatin7 } from '@ombre-ui/react'

export default function ShaderCanvas({ brightness = 0.7 }: { brightness?: number }) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none print:hidden">
      <OmbreSatin7 speed={0.5} brightness={brightness} />
    </div>
  )
}
