'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * AsciiTable 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Reading the table</h2>
    <p>Each row shows one character in decimal, hexadecimal, octal, and binary. 65 = 0x41 = 01000001 = "A" — same value, four notations. Control characters (0-31) have standard abbreviations like CR and LF instead of glyphs.</p>
    <h2>The rows worth memorizing</h2>
    <p>32 = space, 48-57 = digits 0-9, 65-90 = uppercase A-Z, 97-122 = lowercase a-z. Case difference is always exactly 32, which is why toggling case is a single bit flip.</p>
    <h2>Beyond ASCII</h2>
    <p>ASCII stops at 127. Modern systems encode text as UTF-8, which keeps ASCII byte-compatible — every ASCII character is itself in UTF-8 — while emoji and accented letters take multiple bytes.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>读懂这张表</h2>
    <p>每一行用十进制、十六进制、八进制和二进制展示同一个字符:65 = 0x41 = 01000001 = "A"——同一个值,四种记法。控制字符(0-31)不显示字形,而是标 CR、LF 这类标准缩写。</p>
    <h2>值得背下来的行</h2>
    <p>32 是空格,48-57 是数字 0-9,65-90 是大写 A-Z,97-122 是小写 a-z。大小写永远恰好相差 32——这正是"翻转大小写只需翻转一个比特"的原因。</p>
    <h2>ASCII 之外</h2>
    <p>ASCII 止于 127。现代系统用 UTF-8 编码文本,并与 ASCII 保持字节兼容——每个 ASCII 字符在 UTF-8 里原样不变——而 emoji 和带重音的字母则要占多个字节。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cómo leer la tabla</h2>
    <p>Cada fila muestra un carácter en decimal, hexadecimal, octal y binario. 65 = 0x41 = 01000001 = «A»: el mismo valor en cuatro notaciones. Los caracteres de control (0-31) llevan abreviaturas estándar como CR y LF en lugar de glifos.</p>
    <h2>Las filas que conviene memorizar</h2>
    <p>32 = espacio, 48-57 = dígitos 0-9, 65-90 = mayúsculas A-Z, 97-122 = minúsculas a-z. La diferencia entre mayúscula y minúscula es siempre exactamente 32, y por eso cambiar de caso es voltear un solo bit.</p>
    <h2>Más allá de ASCII</h2>
    <p>ASCII termina en 127. Los sistemas modernos codifican el texto en UTF-8, que mantiene la compatibilidad byte a byte con ASCII — cada carácter ASCII es idéntico en UTF-8 — mientras que los emoji y las letras acentuadas ocupan varios bytes.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Tabelle lesen</h2>
    <p>Jede Zeile zeigt ein Zeichen in dezimal, hexadezimal, oktal und binär. 65 = 0x41 = 01000001 = „A" — derselbe Wert in vier Schreibweisen. Steuerzeichen (0-31) tragen Standardkürzel wie CR und LF statt Glyphen.</p>
    <h2>Die Zeilen, die man kennen sollte</h2>
    <p>32 = Leerzeichen, 48-57 = Ziffern 0-9, 65-90 = Großbuchstaben A-Z, 97-122 = Kleinbuchstaben a-z. Der Unterschied zwischen Groß- und Kleinschreibung ist immer exakt 32 — deshalb ist das Umschalten der Schreibweise ein einziger Bit-Flip.</p>
    <h2>Über ASCII hinaus</h2>
    <p>ASCII endet bei 127. Moderne Systeme kodieren Text als UTF-8, das bytekompatibel zu ASCII bleibt — jedes ASCII-Zeichen ist in UTF-8 sich selbst — während Emoji und akzentuierte Buchstaben mehrere Bytes belegen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function AsciiTableContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
