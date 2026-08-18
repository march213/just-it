import type { NextConfig } from 'next'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = dirname(fileURLToPath(import.meta.url))

const config: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: projectRoot,
  },
}

export default config
