import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#E8610A',
        'orange-dark': '#c9520a',
        navy: '#1B3A8C',
        blue: '#4BA3D3',
        'off-white': '#F8F7F4',
        dark: '#111827',
        muted: '#6B7280',
        'card-bg': '#FFFFFF',
        'section-alt': '#F0F4FF',
      },
      fontFamily: {
        condensed: ['var(--font-barlow-condensed)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        pill: '50px',
        modal: '20px',
      },
      boxShadow: {
        card: '0 8px 32px rgba(27,58,140,.12)',
        'card-hover': '0 16px 48px rgba(27,58,140,.18)',
        cta: '0 4px 20px rgba(232,97,10,.35)',
        'cta-hover': '0 8px 28px rgba(232,97,10,.45)',
      },
    },
  },
  plugins: [],
}

export default config
