'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * JSON Diff 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why structural diff?</h2>
    <p>Two JSON objects can carry identical data with keys in different order. A plain text diff would flag every line as changed; this tool parses both documents and compares them structurally, so only real differences appear.</p>
    <h2>How arrays are compared</h2>
    <p>Object key order does not matter, but array order does: <code>[&quot;a&quot;,&quot;b&quot;]</code> and <code>[&quot;b&quot;,&quot;a&quot;]</code> count as changed. That mirrors how most applications consume JSON.</p>
    <h2>Reading the output</h2>
    <p>Each row shows the exact path of a difference using dot notation (<code>user.address.city</code>). Green lines were added, red removed, and amber shows value changes as old → new.</p>
    <h2>Privacy</h2>
    <p>Both documents are parsed entirely in your browser. Nothing is uploaded, so it is safe for API responses containing tokens or personal data.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>为什么要做结构化比对?</h2>
    <p>两个 JSON 对象可能数据完全相同、只是键的顺序不同。纯文本比对会把每一行都标成改动;本工具会解析两份文档并按结构比较,因此只有真正的差异会显示出来。</p>
    <h2>数组怎么比较</h2>
    <p>对象的键顺序无关紧要,但数组的顺序有关:<code>[&quot;a&quot;,&quot;b&quot;]</code> 和 <code>[&quot;b&quot;,&quot;a&quot;]</code> 会被视为已更改。这与大多数应用消费 JSON 的方式一致。</p>
    <h2>如何读懂输出</h2>
    <p>每一行用点号路径标出差异的确切位置(<code>user.address.city</code>)。绿色表示新增,红色表示删除,琥珀色以「旧值 → 新值」展示值变化。</p>
    <h2>隐私</h2>
    <p>两份文档都在你的浏览器里解析,不上传任何内容,因此即使是含令牌或个人数据的 API 响应也可以放心比对。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Por qué un diff estructural?</h2>
    <p>Dos objetos JSON pueden contener los mismos datos con las claves en distinto orden. Un diff de texto plano marcaría cada línea como cambiada; esta herramienta analiza ambos documentos y los compara estructuralmente, así que solo aparecen las diferencias reales.</p>
    <h2>Cómo se comparan los arrays</h2>
    <p>El orden de las claves de un objeto no importa, pero el de los arrays sí: <code>[&quot;a&quot;,&quot;b&quot;]</code> y <code>[&quot;b&quot;,&quot;a&quot;]</code> cuentan como cambio. Eso refleja cómo la mayoría de las aplicaciones consumen JSON.</p>
    <h2>Cómo leer la salida</h2>
    <p>Cada fila muestra la ruta exacta de una diferencia en notación de puntos (<code>user.address.city</code>). Las líneas verdes son adiciones, las rojas eliminaciones y las ámbar muestran cambios de valor como antiguo → nuevo.</p>
    <h2>Privacidad</h2>
    <p>Ambos documentos se analizan por completo en tu navegador. No se sube nada, así que es seguro incluso para respuestas de API con tokens o datos personales.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum ein strukturelles Diff?</h2>
    <p>Zwei JSON-Objekte können identische Daten mit unterschiedlich sortierten Schlüsseln enthalten. Ein reines Text-Diff würde jede Zeile als geändert markieren; dieses Tool parst beide Dokumente und vergleicht sie strukturell — nur echte Unterschiede erscheinen.</p>
    <h2>Wie Arrays verglichen werden</h2>
    <p>Die Schlüsselreihenfolge von Objekten ist egal, die Reihenfolge von Arrays nicht: <code>[&quot;a&quot;,&quot;b&quot;]</code> und <code>[&quot;b&quot;,&quot;a&quot;]</code> gelten als geändert. Das spiegelt, wie die meisten Anwendungen JSON verarbeiten.</p>
    <h2>Die Ausgabe lesen</h2>
    <p>Jede Zeile zeigt den exakten Pfad einer Abweichung in Punktnotation (<code>user.address.city</code>). Grün heißt hinzugefügt, rot entfernt, und in Bernsteinfarbe erscheinen Wertänderungen als alt → neu.</p>
    <h2>Datenschutz</h2>
    <p>Beide Dokumente werden vollständig im Browser geparst. Es wird nichts hochgeladen — auch API-Antworten mit Tokens oder persönlichen Daten kannst du bedenkenlos vergleichen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function JsonDiffContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
