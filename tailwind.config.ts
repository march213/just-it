import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-body)', 'sans-serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        mono:    ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        bg:          '#242424',
        ink:         'rgba(255,255,255,0.9)',
        accent:      '#c4b5fd',
        'accent-w':  '#ddd6fe',
      },
    },
  },
  plugins: [],
}

export default config
