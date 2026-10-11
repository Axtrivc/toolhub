'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * MarkdownFenceExtractor 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Built for AI answers</h2>
    <p>Chat replies mix prose with runnable code. This extractor pulls every triple-backtick block, keeps the language tag, and drops everything else — ending the era of scroll-and-select on long answers.</p>
    <h2>Language chips</h2>
    <p>Detected languages become filter chips (click "python" to see only Python). The filter matches substrings, so "py" finds python; type anything for custom matches.</p>
    <h2>What about indented code blocks?</h2>
    <p>Four-space indented blocks (old Markdown style) are intentionally skipped — they are rare in AI output and frequently false-positive regular paragraphs. If you need them, wrap the region in fences first.</p>
    <h2>Copy all in one go</h2>
    <p>The "Copy all" button concatenates every filtered block — handy for pasting a full solution into an editor or a gist in a single move.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>为 AI 回答而生</h2>
    <p>聊天回复里散文与可运行代码混在一起。本提取器把每个三反引号代码块都抽出来,保留语言标签,丢掉其余一切——终结在长回答里滚动选取的时代。</p>
    <h2>语言筛选芯片</h2>
    <p>检测到的语言会变成筛选芯片(点「python」只看 Python)。筛选按子串匹配,所以「py」能找到 python;也可以输入任意关键字做自定义匹配。</p>
    <h2>缩进代码块怎么办?</h2>
    <p>四空格缩进块(老式 Markdown 写法)被有意跳过——它们在 AI 输出里很罕见,而且经常误伤普通段落。确实需要时,先给该区域套上围栏。</p>
    <h2>一键全部复制</h2>
    <p>「全部复制」按钮把筛选后的所有代码块拼接在一起——一次操作就能把完整解答粘进编辑器或 gist。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Hecho para respuestas de IA</h2>
    <p>Las respuestas de chat mezclan prosa con código ejecutable. Este extractor rescata cada bloque de tres acentos abiertos, conserva la etiqueta de lenguaje y descarta todo lo demás — se acabó seleccionar a mano en respuestas largas.</p>
    <h2>Fichas de lenguaje</h2>
    <p>Los lenguajes detectados se convierten en fichas de filtro (pulsa «python» para ver solo Python). El filtro coincide por subcadenas: «py» encuentra python; escribe lo que quieras para coincidencias a medida.</p>
    <h2>¿Y los bloques indentados?</h2>
    <p>Los bloques indentados con cuatro espacios (Markdown clásico) se ignoran a propósito — son raros en la salida de IA y a menudo son falsos positivos de párrafos normales. Si los necesitas, envuelve antes la zona con vallas.</p>
    <h2>Copiar todo de una vez</h2>
    <p>El botón «Copiar todo» concatena todos los bloques filtrados — ideal para pegar una solución completa en un editor o un gist de un solo movimiento.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Gebaut für KI-Antworten</h2>
    <p>Chat-Antworten mischen Prosa mit ausführbarem Code. Dieser Extraktor zieht jeden Dreifach-Backtick-Block heraus, behält das Sprach-Tag und verwirft den Rest — Schluss mit Scrollen und Selektieren in langen Antworten.</p>
    <h2>Sprach-Chips</h2>
    <p>Erkannte Sprachen werden zu Filter-Chips (klicke „python“, um nur Python zu sehen). Der Filter matcht Teilstrings: „py“ findet python; tippe beliebige Zeichen für eigene Treffer.</p>
    <h2>Und eingerückte Codeblöcke?</h2>
    <p>Vier-Leerzeichen-eingerückte Blöcke (klassisches Markdown) werden bewusst übersprungen — sie sind in KI-Ausgaben selten und häufig falsch-positive normale Absätze. Falls du sie brauchst, setze vorher Zäune um den Bereich.</p>
    <h2>Alles auf einmal kopieren</h2>
    <p>Die Schaltfläche „Alles kopieren“ verkettet alle gefilterten Blöcke — praktisch, um eine komplette Lösung mit einem Zug in einen Editor oder ein Gist einzufügen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function MarkdownFenceExtractorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
