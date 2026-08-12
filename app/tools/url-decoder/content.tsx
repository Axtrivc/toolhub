'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool decodes percent-encoded URLs back to readable text. Paste any URL-encoded
      string to recover the original characters, including spaces, symbols, and international
      text.
    </p>
    <div>
      <h2>When You'll Need This</h2>
      <ul>
        <li>Reading encoded URLs from server logs</li>
        <li>Decoding query parameters in analytics data</li>
        <li>Cleaning up scraped or exported URLs</li>
        <li>Debugging URL handling in code</li>
      </ul>
    </div>
    <div>
      <h2>Double Encoding</h2>
      <p>
        Sometimes URLs get encoded twice by accident — a space becomes <code>%2520</code>{' '}
        instead of <code>%20</code>. If decoded text still contains <code>%</code> sequences,
        run it through this tool again to fully decode.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      本工具会把经过百分比编码的 URL 解码回可读文本。粘贴任意 URL 编码字符串,即可还原原始字符,包括空格、符号以及国际文本。
    </p>
    <div>
      <h2>什么时候会用到</h2>
      <ul>
        <li>读取服务器日志中的编码 URL</li>
        <li>解析分析数据中的查询参数</li>
        <li>清理抓取或导出的 URL</li>
        <li>调试代码中的 URL 处理</li>
      </ul>
    </div>
    <div>
      <h2>双重编码</h2>
      <p>
        有时候 URL 会被意外编码两次 —— 空格会变成 <code>%2520</code>,而不是 <code>%20</code>。如果解码后的文本里仍然含有 <code>%</code> 序列,再把它放进本工具跑一次即可完全解码。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta descodifica URLs codificadas en porcentaje de vuelta a texto legible. Pega cualquier cadena codificada en URL para recuperar los caracteres originales, incluidos espacios, símbolos y texto internacional.
    </p>
    <div>
      <h2>Cuándo lo necesitarás</h2>
      <ul>
        <li>Leer URLs codificadas de los registros del servidor</li>
        <li>Descodificar parámetros de consulta en datos de analítica</li>
        <li>Limpiar URLs extraídas o exportadas</li>
        <li>Depurar el manejo de URLs en código</li>
      </ul>
    </div>
    <div>
      <h2>Doble codificación</h2>
      <p>
        A veces las URLs se codifican dos veces por accidente — un espacio se convierte en <code>%2520</code> en lugar de <code>%20</code>. Si el texto descodificado aún contiene secuencias de <code>%</code>, pásalo por esta herramienta otra vez para descodificarlo por completo.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug dekodiert prozent-kodierte URLs zurück zu lesbarem Text. Füge eine beliebige URL-kodierte Zeichenkette ein, um die ursprünglichen Zeichen wiederherzustellen, einschließlich Leerzeichen, Symbole und internationaler Text.
    </p>
    <div>
      <h2>Wann du das brauchst</h2>
      <ul>
        <li>Kodierte URLs aus Server-Logs lesen</li>
        <li>Query-Parameter in Analytics-Daten dekodieren</li>
        <li>Externe oder exportierte URLs bereinigen</li>
        <li>URL-Verarbeitung im Code debuggen</li>
      </ul>
    </div>
    <div>
      <h2>Doppelte Kodierung</h2>
      <p>
        Manchmal werden URLs versehentlich doppelt kodiert — ein Leerzeichen wird zu <code>%2520</code> statt <code>%20</code>. Wenn der dekodierte Text noch <code>%</code>-Sequenzen enthält, lege ihn erneut durch dieses Werkzeug, um ihn vollständig zu dekodieren.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function URLdecoderContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
