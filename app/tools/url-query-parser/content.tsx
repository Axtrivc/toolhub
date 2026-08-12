'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>URL <strong>query strings</strong> are the part after the &quot;?&quot; — parameters like <code>?q=hello&page=2</code>. This tool parses them into a clean JSON object for easy inspection or use.</p>
    <div>
      <h2>When You&apos;ll Need This</h2>
      <ul>
        <li>Debugging API requests</li>
        <li>Reverse-engineering tracking URLs</li>
        <li>Inspecting UTM campaign parameters</li>
        <li>Building query strings in code</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>URL <strong>查询字符串</strong>就是「?」之后的部分 — 例如 <code>?q=hello&page=2</code> 这样的参数。本工具会将其解析为清晰的 JSON 对象,便于检查或使用。</p>
    <div>
      <h2>何时会用到它</h2>
      <ul>
        <li>调试 API 请求</li>
        <li>逆向分析跟踪链接</li>
        <li>检查 UTM 广告系列参数</li>
        <li>在代码中构建查询字符串</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>Las <strong>cadenas de consulta</strong> de URL son la parte que va después del «?» — parámetros como <code>?q=hello&page=2</code>. Esta herramienta las analiza y las convierte en un objeto JSON limpio para inspección o uso sencillos.</p>
    <div>
      <h2>Cuándo lo necesitarás</h2>
      <ul>
        <li>Depurar solicitudes de API</li>
        <li>Ingeniería inversa de URLs de seguimiento</li>
        <li>Inspeccionar parámetros de campaña UTM</li>
        <li>Construir cadenas de consulta en código</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p><strong>URL-Abfragezeichenketten</strong> (Query Strings) sind der Teil nach dem „?" — Parameter wie <code>?q=hello&page=2</code>. Dieses Werkzeug parst sie in ein sauberes JSON-Objekt zur einfachen Inspektion oder Verwendung.</p>
    <div>
      <h2>Wann du das brauchst</h2>
      <ul>
        <li>API-Anfragen debuggen</li>
        <li>Tracking-URLs per Reverse Engineering analysieren</li>
        <li>UTM-Kampagnenparameter inspizieren</li>
        <li>Query-Strings im Code erstellen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function URLQueryParserContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
