import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
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
    'border-blue-200',
    'dark:border-blue-900/40',
    'dark:border-blue-800',
    'from-blue-50/40',
    // POPULAR Badge(柔和淡橙)
    'bg-amber-50',
    'text-amber-600',
    'dark:bg-amber-950/50',
    'dark:text-amber-400',
    // NEW Badge(淡蓝)
    'bg-blue-50',
    'dark:bg-blue-950/50',
    'dark:text-blue-400',
  ],
  theme: {
    extend: {
      colors: {
        // 语义化令牌 —— 映射 globals.css 的 CSS 变量,支持 /alpha 修饰符。
        // 让组件可用 border-border/80、bg-card、bg-primary/5、text-primary
        // 等语义类,而不是散落 inline style 或硬编码 slate。
        border: 'rgb(var(--border) / <alpha-value>)',
        background: 'rgb(var(--bg) / <alpha-value>)',
        card: 'rgb(var(--bg-card) / <alpha-value>)',
        muted: 'rgb(var(--bg-subtle) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
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
