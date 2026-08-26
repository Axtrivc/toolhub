/**
 * 博客文章注册表(单一数据源)——app/blog/page.tsx 与 app/sitemap.ts 共用。
 * 按日期倒序排列;新文章四件套:内容模块 + BlogArticleBody 注册 +
 * page.tsx + 在此登记(sitemap 自动收录)。
 */
import type { BlogPostMeta } from '@/components/BlogIndex'

export const posts: BlogPostMeta[] = [
  {
    slug: 'mortgage-loan-calculators',
    title: 'Mortgage & Loan Calculators: The Honest Guide (PITI, PMI, Payoff Curves)',
    description:
      'Lenders quote P&I and skip taxes, insurance, and PMI. The real numbers — full PITI, the five-figure lever of extra payments, the rent-vs-buy crossover year, and the minimum-payment trap — with free in-browser calculators.',
    date: '2026-08-26',
    readTime: '7 min',
    tags: ['mortgage', 'loans', 'personal-finance', 'calculators'],
    published: true,
    i18n: {
      zh: {
        title: '房贷与贷款计算器诚实指南(PITI、PMI、还款曲线)',
        description:
          '银行只报本息、跳过税费保险与 PMI。真实数字——PITI 全口径、提前还款的五位数杠杆、租买交叉年与最低还款陷阱,配套全程浏览器本地运行的免费计算器。',
      },
      es: {
        title: 'Calculadoras hipotecarias y de préstamos: la guía honesta (PITI, PMI, curvas de amortización)',
        description:
          'Los bancos citan capital e intereses y omiten impuestos, seguro y PMI. Los números reales — PITI completo, la palanca de cinco cifras de los pagos extra, el cruce alquilar/comprar y la trampa del mínimo — con calculadoras gratuitas en el navegador.',
      },
      de: {
        title: 'Hypotheken- und Kreditrechner: der ehrliche Leitfaden (PITI, PMI, Tilgungskurven)',
        description:
          'Banken nennen Tilgung und Zins und lassen Steuern, Versicherung und PMI weg. Die echten Zahlen — volle PITI, der fünfstellige Hebel der Sondertilgung, das Mieten-Kaufen-Schnittpunkt-Jahr und die Mindestzahlungs-Falle — mit kostenlosen Rechnern im Browser.',
      },
    },
  },
  {
    slug: 'how-i-built-toolhub',
    title: 'How I Built ToolHub: A 169-Tool Static PWA That Stays Sub-Second',
    description:
      'A no-bullshit architecture retrospective — Next.js static export, lazy Service-Worker caching, 169+ JSON-LD pSEO schemas, and zero-CLS AdSense. The tradeoffs and the numbers.',
    date: '2026-08-04',
    readTime: '9 min',
    tags: ['architecture', 'seo', 'pwa', 'build-in-public'],
    published: true,
    i18n: {
      zh: {
        title: '我是如何构建 ToolHub 的:169 个工具的静态 PWA,始终亚秒级',
        description:
          '一份不掺水的架构复盘 —— Next.js 静态导出、懒加载 Service Worker 缓存、169+ JSON-LD pSEO 结构化数据,以及零 CLS 的 AdSense。讲清取舍与真实数字。',
      },
      es: {
        title: 'Cómo construí ToolHub: una PWA estática de 169 herramientas que sigue siendo sub-segundo',
        description:
          'Una retrospectiva de arquitectura sin rodeos — Next.js estático, caché Service Worker perezosa, 169+ esquemas pSEO JSON-LD y AdSense sin CLS. Los tradeoffs y los números.',
      },
      de: {
        title: 'Wie ich ToolHub baute: Eine statische PWA mit 169 Werkzeugen, die unter einer Sekunde bleibt',
        description:
          'Ein ehrlicher Architektur-Rückblick — Next.js Static Export, Lazy Service-Worker-Cache, 169+ JSON-LD-pSEO-Schemata und Zero-CLS AdSense. Die Tradeoffs und die Zahlen.',
      },
    },
  },
]

export const publishedBlogPosts = posts.filter((p) => p.published)
