# -*- coding: utf-8 -*-
"""一次性生成 10 篇 Pillar 博客的 app/blog/<slug>/page.tsx(2026-09-05 批次)。
模板对齐 app/blog/mortgage-loan-calculators/page.tsx:Metadata + JSON-LD +
面包屑 + BlogArticleBody + BlogToolsBanner。生成后可安全删除本脚本。
"""
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent

TEMPLATE = '''import type {{ Metadata }} from 'next'
import Link from 'next/link'
import {{ SITE_NAME, jsonLdStringify }} from '@/lib/seo'
import {{ SITE_URL }} from '@/lib/constants'
import {{ BlogToolsBanner }} from '@/components/BlogToolsBanner'
import {{ getFeaturedTools, getPublishedTools }} from '@/lib/tools'
import {{ BlogArticleBody }} from '@/components/BlogArticleBody'

/**
 * {comment}
 * 静态导出兼容:纯 server component;正文交由 BlogArticleBody 客户端
 * 组件跟随 locale 渲染(SSR 首帧英文)。
 */

const SLUG = '/blog/{slug}/'
const PUBLISH_DATE = '2026-09-05'
const READ_TIME = '{read_time} read'
const TITLE = {title}
const DESC = {desc}

export const metadata: Metadata = {{
  title: TITLE,
  description: DESC,
  keywords: {keywords},
  alternates: {{ canonical: SLUG }},
  openGraph: {{
    type: 'article',
    url: `${{SITE_URL}}${{SLUG}}`,
    title: TITLE,
    description: DESC,
    siteName: SITE_NAME,
    publishedTime: PUBLISH_DATE,
    authors: [SITE_NAME],
    images: [{{ url: '/og.png', width: 1200, height: 630, alt: TITLE }}],
  }},
  twitter: {{
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/og.png'],
  }},
}}

const articleJsonLd = {{
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESC,
  datePublished: PUBLISH_DATE,
  dateModified: PUBLISH_DATE,
  author: {{ '@type': 'Organization', name: SITE_NAME, url: SITE_URL }},
  publisher: {{ '@type': 'Organization', name: SITE_NAME, url: SITE_URL }},
  mainEntityOfPage: `${{SITE_URL}}${{SLUG}}`,
  url: `${{SITE_URL}}${{SLUG}}`,
  inLanguage: 'en',
  keywords: {ld_keywords},
  about: {about},
}}

// 博客 Banner 数据(服务端预计算):featured 前 6 个的轻字段 + 已上线总数,
// 注册表本体不进博客页客户端 chunk(见 BlogToolsBanner 注释)。
const bannerTools = getFeaturedTools()
  .slice(0, 6)
  .map(({{ slug, name, shortIntro, category, icon }}) => ({{ slug, name, shortIntro, category, icon }}))
const bannerCount = Math.floor(getPublishedTools().length / 10) * 10

export default function {component}() {{
  return (
    <div className="container-page py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: jsonLdStringify(articleJsonLd) }}}}
      />

      <div className="mb-6">
        <Link href="/" className="btn btn-secondary">
          <span aria-hidden="true">←</span> Back to {{SITE_NAME}}
        </Link>
      </div>

      <nav aria-label="Breadcrumb" className="mb-6 text-sm" style={{{{ color: 'rgb(var(--text-subtle))' }}}}>
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog/" className="hover:text-brand-600">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" style={{{{ color: 'rgb(var(--text-muted))' }}}}>
            {breadcrumb}
          </li>
        </ol>
      </nav>

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs" style={{{{ color: 'rgb(var(--text-subtle))' }}}}>
          <time dateTime={{PUBLISH_DATE}}>{{PUBLISH_DATE}}</time>
          <span aria-hidden="true">·</span>
          <span>{{READ_TIME}}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{{{ color: 'rgb(var(--text))' }}}}>
          {{TITLE}}
        </h1>
      </header>

      <article className="mx-auto max-w-3xl">
        <BlogArticleBody articleKey="{slug}" />
      </article>

      <div className="mx-auto mt-12 max-w-3xl">
        <BlogToolsBanner tools={{bannerTools}} publishedCount={{bannerCount}} />
      </div>
    </div>
  )
}}
'''

POSTS = [
    dict(
        slug='mortgage-piti-and-amortization-guide',
        component='MortgagePitiGuidePost',
        comment='Pillar #1:房贷摊销与 PITI 深度指南(四语正文 + 工具内链卡)。',
        read_time='11 min',
        title='The Complete Guide to Mortgage Amortization, PITI Breakdown, and Prepayment Strategies',
        desc='Open the black box of a 30-year loan: the amortization formula, why 87% of your first payment is interest, the full PITI stack, and the prepayment math that saves five figures — with free in-browser calculators.',
        keywords=['mortgage amortization schedule', 'piti calculator', 'mortgage prepayment strategy', 'extra payment savings', 'down payment pmi', 'rent vs buy crossover', 'amortization table generator'],
        ld_keywords='mortgage amortization, piti breakdown, prepayment strategies, extra payments, pmi, rent vs buy',
        about=[('Mortgage loan',), ('Amortization schedule',), ('Real estate',)],
        breadcrumb='Mortgage Amortization &amp; PITI Guide',
    ),
    dict(
        slug='hysa-vs-cd-wealth-building-guide',
        component='CashAllocationGuidePost',
        comment='Pillar #2:HYSA / CD / 货币基金现金配置指南(四语正文 + 工具内链卡)。',
        read_time='10 min',
        title='HYSA vs. CD vs. Money Market: The Optimal Cash Allocation Strategy for 2026',
        desc='One dollar, three prices. The 2026 cash stack — emergency fund in HYSA, dated goals in a CD ladder, the real-yield math after inflation, and the APY-vs-APR conversion banks hope you skip.',
        keywords=['hysa vs cd', 'cd ladder strategy', 'high yield savings calculator', 'apy vs apr', 'money market vs savings', 'cash allocation 2026'],
        ld_keywords='hysa, cd ladder, money market, apy vs apr, cash allocation, real yield',
        about=[('High-yield savings account',), ('Certificate of deposit',), ('Money market fund',)],
        breadcrumb='HYSA vs CD Cash Strategy',
    ),
    dict(
        slug='fire-movement-retire-early-playbook',
        component='FirePlaybookPost',
        comment='Pillar #3:FIRE 提前退休行动手册(四语正文 + 工具内链卡)。',
        read_time='12 min',
        title='The 2026 FIRE Playbook: Safe Withdrawal Rates, Coast FIRE, and Tax-Advantaged Stacking',
        desc='FIRE is a solvency equation, not a vibe: the Trinity Study\u2019s real 4% rule, the Coast FIRE checkpoint you hit shockingly early, the account-stacking order that beats taxes, and guardrails for sequence risk.',
        keywords=['fire calculator', '4 percent rule', 'coast fire', 'safe withdrawal rate', 'roth ira vs traditional', 'sequence of returns risk', 'early retirement'],
        ld_keywords='fire movement, 4% rule, coast fire, safe withdrawal rate, tax-advantaged accounts, sequence risk',
        about=[('FIRE movement',), ('Retirement planning',), ('Withdrawal rate',)],
        breadcrumb='2026 FIRE Playbook',
    ),
    dict(
        slug='saas-unit-economics-cac-ltv-churn',
        component='SaasEconomicsPost',
        comment='Pillar #4:SaaS 单位经济 CAC/LTV/Churn 权威指南(四语正文 + 工具内链卡)。',
        read_time='10 min',
        title='Mastering SaaS Unit Economics: The Mathematical Relationship Between CAC, LTV, and Churn',
        desc='CAC, LTV, and churn are one equation, not three KPIs. Fully-loaded CAC, margin-based LTV with churn in the denominator, the LTV/CAC \u2265 3 rule, payback period, and why 3% monthly churn is really 31% a year.',
        keywords=['saas unit economics', 'ltv cac ratio', 'cac payback period', 'monthly churn to annual', 'customer lifetime value formula', 'saas break even'],
        ld_keywords='saas unit economics, cac, ltv, churn, ltv cac ratio, payback period, break even',
        about=[('Software as a service',), ('Customer acquisition cost',), ('Customer lifetime value',), ('Churn rate',)],
        breadcrumb='SaaS Unit Economics',
    ),
    dict(
        slug='client-side-cryptography-web-crypto-guide',
        component='WebCryptoGuidePost',
        comment='Pillar #5:浏览器端加密 WebCrypto 实战指南(四语正文 + 工具内链卡)。',
        read_time='12 min',
        title='Demystifying In-Browser AES-256-GCM and PBKDF2: A Developer\u2019s Practical Guide',
        desc='Zero-knowledge architecture in the browser: why GCM\u2019s auth tag beats CBC, the IV-reuse rule that must never break, PBKDF2 parameters that stretch passwords properly, CSPRNG key generation, and JWT decoding vs verifying.',
        keywords=['aes 256 gcm browser', 'webcrypto tutorial', 'pbkdf2 iterations', 'client side encryption', 'jwt decode vs verify', 'crypto.getRandomValues'],
        ld_keywords='aes-256-gcm, pbkdf2, web crypto api, client-side encryption, csprng, jwt',
        about=[('Cryptography',), ('Web Crypto API',), ('JSON Web Token',)],
        breadcrumb='In-Browser AES &amp; PBKDF2 Guide',
    ),
    dict(
        slug='metabolism-fasting-and-calorie-deficit',
        component='MetabolismGuidePost',
        comment='Pillar #6:代谢科学与热量缺口权威指南(四语正文 + 工具内链卡)。',
        read_time='11 min',
        title='The Science of Human Metabolism: Calculating BMR, TDEE, Caloric Deficits, and 16:8 Fasting',
        desc='The clinician\u2019s equation set — Mifflin-St Jeor BMR, honest TDEE activity tiers, the 7,700-kcal-per-kg deficit ledger, where 16:8 fasting actually helps, and how to fight adaptive thermogenesis.',
        keywords=['bmr calculator mifflin st jeor', 'tdee calculator', 'calorie deficit per week', '16 8 fasting results', 'adaptive thermogenesis', '7700 kcal per kg'],
        ld_keywords='basal metabolic rate, tdee, caloric deficit, intermittent fasting 16:8, mifflin-st jeor, adaptive thermogenesis',
        about=[('Metabolism',), ('Calorie restriction',), ('Intermittent fasting',)],
        breadcrumb='Metabolism &amp; Calorie Deficit Guide',
    ),
    dict(
        slug='llm-api-pricing-and-tokenomics',
        component='LlmPricingGuidePost',
        comment='Pillar #7:LLM API 定价与 token 经济学手册(四语正文 + 工具内链卡)。',
        read_time='10 min',
        title='The 2026 LLM Pricing Handbook: Measuring Token Density, Context Caching, and Monthly API Budgets',
        desc='LLM bills are multiplication: requests \u00d7 tokens \u00d7 price. Measure real p50/p95 token density, capture the 50\u201390% caching discount, split batch from interactive traffic, route easy work to small models, and stop over-optimizing embeddings.',
        keywords=['llm api cost calculator', 'token pricing 2026', 'prompt caching discount', 'batch api pricing', 'embedding cost', 'monthly llm budget'],
        ld_keywords='llm pricing, token density, prompt caching, batch api, embedding cost, api budget',
        about=[('Large language model',), ('API pricing',), ('Prompt engineering',)],
        breadcrumb='2026 LLM Pricing Handbook',
    ),
    dict(
        slug='pricing-strategies-margin-vs-markup',
        component='PricingMathPost',
        comment='Pillar #8:Markup vs Margin 定价数学指南(四语正文 + 工具内链卡)。',
        read_time='10 min',
        title='Markup vs. Margin: The Math of Profitable E-commerce and Retail Pricing',
        desc='A 50% markup is only a 33% margin — the gap is where profits leak. The formulas, price-from-target-margin, the real fee stack (2.9% + $0.30 is really 3.9% on a $30 order), freelance rates, and discount discipline.',
        keywords=['markup vs margin', 'profit margin calculator', 'pricing formula', 'stripe fee reverse calculator', 'keystone pricing', 'discount impact on profit'],
        ld_keywords='markup vs margin, profit margin, pricing strategy, payment processing fees, discount math',
        about=[('Pricing',), ('Profit margin',), ('E-commerce',)],
        breadcrumb='Markup vs Margin Guide',
    ),
    dict(
        slug='canine-nutrition-and-calorie-guide',
        component='CanineNutritionPost',
        comment='Pillar #9:犬类营养 RER/MER 权威指南(四语正文 + 工具内链卡)。',
        read_time='9 min',
        title='Veterinary Math for Dog Owners: Decoding RER, MER, and Accurate Daily Calorie Intake',
        desc='Bag guidelines are written for intact, active, young dogs — yours probably isn\u2019t. The RER = 70 \u00d7 kg^0.75 baseline, MER life-stage multipliers from 3.0\u00d7 puppies to 1.0\u00d7 weight loss, the 10% treat rule, and the body condition score.',
        keywords=['dog calorie calculator', 'rer mer dog', 'how much to feed my dog', 'dog food grams per day', 'body condition score dog', 'dog human years'],
        ld_keywords='resting energy requirement, maintenance energy requirement, dog calories, body condition score, dog age',
        about=[('Dog nutrition',), ('Veterinary medicine',), ('Pet obesity',)],
        breadcrumb='Canine RER &amp; MER Guide',
    ),
    dict(
        slug='home-flooring-and-renovation-math',
        component='RenovationMathPost',
        comment='Pillar #10:家居施工材料估算与损耗系数指南(四语正文 + 工具内链卡)。',
        read_time='9 min',
        title='The Contractor\u2019s Guide to Material Estimating: Calculating Tile, Flooring, and Paint Waste Factors',
        desc='The waste factor separates a DIY weekend from a third trip to the store: 10% straight-lay flooring, 15\u201320% diagonal tile, 350\u2013400 ft\u00b2 per gallon per coat, batch-number matching, and the 10\u201320% budget contingency.',
        keywords=['flooring waste factor', 'tile waste percentage', 'paint coverage per gallon', 'how much flooring do i need', 'renovation contingency budget', 'material estimating'],
        ld_keywords='flooring calculator, tile waste factor, paint coverage, material estimating, renovation budget',
        about=[('Home improvement',), ('Flooring',), ('Paint',)],
        breadcrumb='Material Estimating Guide',
    ),
]


def ts_str(s: str) -> str:
    """Render a Python string as a TS single-quoted literal (escape backslash/quote/$)."""
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'").replace('${', '\\${') + "'"


def main() -> None:
    for p in POSTS:
        keywords = '[\n    ' + ',\n    '.join(ts_str(k) for k in p['keywords']) + ',\n  ]'
        about = '[\n    ' + ',\n    '.join(
            "{{ '@type': 'Thing', name: {} }}".format(ts_str(a[0])) for a in p['about']
        ) + ',\n  ]'
        out = TEMPLATE.format(
            comment=p['comment'],
            slug=p['slug'],
            read_time=p['read_time'],
            title=ts_str(p['title']),
            desc=ts_str(p['desc']),
            keywords=keywords,
            ld_keywords=ts_str(p['ld_keywords']),
            about=about,
            component=p['component'],
            breadcrumb=p['breadcrumb'],
        )
        dest = ROOT / 'app' / 'blog' / p['slug'] / 'page.tsx'
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(out, encoding='utf-8')
        print('wrote', dest)


if __name__ == '__main__':
    main()
