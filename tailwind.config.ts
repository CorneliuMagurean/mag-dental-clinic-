import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          2: '#142539',
        },
        gold: {
          DEFAULT: '#C9A84C',
          2: '#B8962F',
          soft: '#E8D9A4',
        },
        ink: '#1B2230',
        muted: '#5C6675',
        bg: '#F7F7F5',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Times New Roman', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(13,27,42,.04), 0 4px 14px rgba(13,27,42,.05)',
        md: '0 6px 20px rgba(13,27,42,.07), 0 24px 60px -20px rgba(13,27,42,.18)',
        gold: '0 10px 30px -10px rgba(201,168,76,.45)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
