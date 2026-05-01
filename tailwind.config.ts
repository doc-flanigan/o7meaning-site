import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'sc-slate':     '#1a1f2e',
        'sc-slate-mid': '#252d40',
        'sc-cyan':      '#00d4ff',
        'sc-cyan-dark': '#0099bb',
        'sc-white':     '#f0f4f8',
        'sc-muted':     '#7a8599',
      },
    },
  },
  plugins: [],
}
export default config
