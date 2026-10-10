'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * LogFilterTool 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why local filtering matters</h2>
    <p>Logs contain tokens, user identifiers, stack traces with internal paths. Pasting them into random web tools leaks production detail; this filter parses everything in your browser and never uploads a byte.</p>
    <h2>Level filtering behavior</h2>
    <p>Level matching is word-boundary exact: WARN matches WARN lines but not WARNING, so mixed-format logs stay predictable. Leave it on "All levels" and rely on include/exclude patterns when formats vary.</p>
    <h2>Regex tips</h2>
    <p>Enable regex mode for alternation like error|timeout|refused. Keep patterns simple — catastrophic backtracking patterns freeze the same here as anywhere; stick to literal alternations over nested quantifiers.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>为什么本地过滤很重要</h2>
    <p>日志里全是令牌、用户标识、带内部路径的堆栈。把它们粘贴到来路不明的网页工具里等于泄露生产细节;本过滤器全程在你的浏览器里解析,一个字节都不上传。</p>
    <h2>级别过滤的行为</h2>
    <p>级别匹配按词边界精确进行:WARN 只匹配 WARN 行而不匹配 WARNING,混合格式的日志因此保持可预期。格式不统一时,留在"全部级别",改用包含/排除模式。</p>
    <h2>正则技巧</h2>
    <p>需要形如 error|timeout|refused 的多选一时,打开正则模式。模式保持简单——灾难性回溯的正则在哪里都会卡死,页面也不例外;优先用平铺的多选一,少用嵌套量词。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué importa filtrar en local</h2>
    <p>Los logs contienen tokens, identificadores de usuario y stack traces con rutas internas. Pegarlos en herramientas web aleatorias filtra detalle de producción; este filtro lo analiza todo en tu navegador y no sube ni un byte.</p>
    <h2>Comportamiento del filtro por nivel</h2>
    <p>El nivel casa por límite de palabra exacto: WARN casa líneas WARN pero no WARNING, así que los logs de formato mixto se mantienen predecibles. Déjalo en «Todos los niveles» y usa patrones de incluir/excluir cuando los formatos varían.</p>
    <h2>Consejos de regex</h2>
    <p>Activa el modo regex para alternancias como error|timeout|refused. Mantén los patrones simples — el backtracking catastrófico se congela aquí igual que en cualquier otro sitio; quédate con alternancias literales antes que con cuantificadores anidados.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum lokales Filtern zählt</h2>
    <p>Logs enthalten Tokens, Nutzerkennungen und Stacktraces mit internen Pfaden. Wer sie in beliebige Web-Tools einfügt, leakt Produktionsdetails; dieser Filter parst alles in deinem Browser und lädt kein einziges Byte hoch.</p>
    <h2>Verhalten des Level-Filters</h2>
    <p>Level matchen exakt an Wortgrenzen: WARN trifft WARN-Zeilen, aber nicht WARNING — Logs mit gemischtem Format bleiben so vorhersehbar. Lass es auf „Alle Stufen" und arbeite mit Ein-/Ausschluss-Mustern, wenn die Formate variieren.</p>
    <h2>Regex-Tipps</h2>
    <p>Aktiviere den Regex-Modus für Alternativen wie error|timeout|refused. Halte die Muster einfach — katastrophales Backtracking friert hier genau wie überall die Seite ein; setze auf literale Alternativen statt verschachtelter Quantoren.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function LogFilterToolContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
