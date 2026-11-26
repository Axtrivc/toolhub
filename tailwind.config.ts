import type { Config } from 'tailwindcss'

const warmGray = {
  50: '#faf9f5',
  100: '#f5f0e8',
  200: '#e6dfd8',
  300: '#d6cec2',
  400: '#a09d96',
  500: '#8e8b82',
  600: '#6c6a64',
  700: '#3d3d3a',
  800: '#252320',
  900: '#1f1e1b',
  950: '#141413',
}

const coral = {
  50: '#fcf5f1',
  100: '#f8e7de',
  200: '#f0d1bf',
  300: '#e7b39e',
  400: '#dc9981',
  500: '#cc785c',
  600: '#a9583e',
  700: '#8c4632',
  800: '#703b2b',
  900: '#553024',
  950: '#36221b',
}

const teal = {
  50: '#f2f9f7',
  100: '#e0f2ed',
  200: '#c0e3db',
  300: '#93d1c3',
  400: '#5db8a6',
  500: '#459c8b',
  600: '#367c6f',
  700: '#2a645b',
  800: '#254f49',
  900: '#203f3b',
  950: '#122925',
}

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

const config: Config = {
  darkMode: 'class',
  future: { hoverOnlyWhenSupported: true },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['text-blue-600', 'text-green-600', 'text-yellow-600', 'text-orange-600', 'text-red-600', 'text-red-700', 'text-brand-600'],
  theme: {
    extend: {
      colors: {
        'primary': token('primary'),
        'primary-active': token('primary-active'),
        'primary-disabled': token('primary-disabled'),
        'ink': token('ink'),
        'body': token('body'),
        'body-strong': token('body-strong'),
        'muted-soft': token('muted-soft'),
        'hairline': token('hairline'),
        'hairline-soft': token('hairline-soft'),
        'canvas': token('canvas'),
        'surface-soft': token('surface-soft'),
        'surface-card': token('surface-card'),
        'surface-strong': token('surface-strong'),
        'surface-dark': token('surface-dark'),
        'dark-elevated': token('dark-elevated'),
        'dark-soft': token('dark-soft'),
        'on-primary': token('on-primary'),
        'on-dark': token('on-dark'),
        'on-dark-soft': token('on-dark-soft'),
        'accent-teal': token('accent-teal'),
        'accent-amber': token('accent-amber'),
        'success': token('success'),
        'warning': token('warning'),
        'error': token('error'),
        'muted-ink': token('muted'),
        'coral': { ...coral, DEFAULT: token('primary') },
        background: token('canvas'),
        card: token('surface-card'),
        border: token('hairline'),
        muted: token('surface-card'),
        brand: coral,
        slate: warmGray, gray: warmGray, zinc: warmGray, neutral: warmGray,
        blue: coral, indigo: coral, sky: coral, violet: coral, purple: coral, fuchsia: coral,
        cyan: teal, teal,
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        sm: '0 1px 3px rgba(20,20,19,.08)',
        DEFAULT: 'none', md: 'none', lg: 'none', xl: 'none', '2xl': 'none', inner: 'none',
      },
    },
  },
  plugins: [],
}

export default config
