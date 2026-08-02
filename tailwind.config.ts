import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // safelist:防止动态拼接的颜色类被 purge。所有高亮态用到的色阶固定保留。
  safelist: [
    'text-blue-600',
    'text-green-600',
    'text-yellow-600',
    'text-orange-600',
    'text-red-600',
    'text-red-700',
    'text-brand-600',
    // 置顶工具卡片高亮态(FeaturedTools 模块)
    'border-blue-100',
    'dark:border-blue-900/40',
    'from-blue-50/30',
    'bg-orange-500',
    'bg-blue-500',
  ],
  theme: {
    extend: {
      colors: {
        // 中性专业色调,适合工具站
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
