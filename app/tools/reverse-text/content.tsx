'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool reverses any text — the last character becomes the first, the first becomes the
      last. Text is reversed by Unicode code point, so most emoji and accented letters stay intact;
      multi-codepoint emoji (ZWJ sequences, flags) and combining marks can split apart.
    </p>
    <div>
      <h2>Fun and Practical Uses</h2>
      <ul>
        <li><strong>Puzzles and word games</strong> — decode reversed messages</li>
        <li><strong>Creating ambigrams</strong> or symmetrical designs</li>
        <li><strong>Testing code</strong> that processes strings</li>
        <li><strong>Privacy</strong> — reversing email addresses can confuse basic scrapers (john@example.com → moc.elpmaxe@nhoj)</li>
        <li><strong>Hebrew/Arabic processing</strong> in left-to-right contexts</li>
      </ul>
    </div>
    <div>
      <h2>Reversing Words vs. Characters</h2>
      <p>
        This tool reverses <em>characters</em>. To reverse word order (&quot;hello world&quot; →
        &quot;world hello&quot;), you would split on spaces, reverse the array, and rejoin.
        Character reversal is the more common request and is what this tool does.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      本工具可反转任意文本 —— 最后一个字符变成第一个,第一个变成最后一个。文本按 Unicode 码位反转,多数表情符号和带重音的字母能保持完整;由多个码位组成的 emoji(ZWJ 序列、旗帜)和组合变音符则可能被拆开。
    </p>
    <div>
      <h2>有趣与实用的用途</h2>
      <ul>
        <li><strong>谜题和文字游戏</strong> —— 解码反转的消息</li>
        <li><strong>创作回文/对称图形</strong>或对称设计</li>
        <li><strong>测试代码</strong>,处理字符串的程序</li>
        <li><strong>隐私保护</strong> —— 反转邮箱地址可以迷惑基础的爬虫(john@example.com → moc.elpmaxe@nhoj)</li>
        <li><strong>希伯来语/阿拉伯语处理</strong>,在从左到右的环境中</li>
      </ul>
    </div>
    <div>
      <h2>反转单词 vs. 反转字符</h2>
      <p>
        本工具反转的是<em>字符</em>。要反转单词顺序(「hello world」→「world hello」),你需要按空格分割、反转数组,再重新拼接。字符反转是更常见的需求,也是本工具所做的。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta invierte cualquier texto — el último carácter se convierte en el primero, y
      el primero en el último. El texto se invierte por puntos de código Unicode, así que la
      mayoría de los emojis y las letras acentuadas se mantienen intactos; los emojis de varios
      puntos de código (secuencias ZWJ, banderas) y los diacríticos combinantes pueden separarse.
    </p>
    <div>
      <h2>Usos divertidos y prácticos</h2>
      <ul>
        <li><strong>Acertijos y juegos de palabras</strong> — descifra mensajes invertidos</li>
        <li><strong>Crear ambigramas</strong> o diseños simétricos</li>
        <li><strong>Probar código</strong> que procesa cadenas de texto</li>
        <li><strong>Privacidad</strong> — invertir direcciones de correo puede confundir a los raspadores básicos (john@example.com → moc.elpmaxe@nhoj)</li>
        <li><strong>Procesamiento de hebreo/árabe</strong> en contextos de izquierda a derecha</li>
      </ul>
    </div>
    <div>
      <h2>Invertir palabras vs. caracteres</h2>
      <p>
        Esta herramienta invierte <em>caracteres</em>. Para invertir el orden de las palabras
        («hello world» → «world hello»), tendrías que dividir por espacios, invertir el arreglo y
        volver a unir. La inversión de caracteres es la solicitud más común y es lo que hace esta
        herramienta.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug kehrt jeden Text um — das letzte Zeichen wird zum ersten, das erste zum
      letzten. Der Text wird nach Unicode-Codepunkten umgekehrt, sodass die meisten Emojis und
      akzentuierten Buchstaben intakt bleiben; Emojis aus mehreren Codepunkten (ZWJ-Folgen,
      Flaggen) und kombinierende diakritische Zeichen können auseinanderfallen.
    </p>
    <div>
      <h2>Lustige und praktische Verwendungszwecke</h2>
      <ul>
        <li><strong>Rätsel und Wortspiele</strong> — entschlüssele umgekehrte Nachrichten</li>
        <li><strong>Ambigramme erstellen</strong> oder symmetrische Designs</li>
        <li><strong>Code testen</strong>, der Zeichenketten verarbeitet</li>
        <li><strong>Datenschutz</strong> — das Umkehren von E-Mail-Adressen kann einfache Scraper verwirren (john@example.com → moc.elpmaxe@nhoj)</li>
        <li><strong>Hebräisch/Arabisch-Verarbeitung</strong> in Links-nach-Rechts-Kontexten</li>
      </ul>
    </div>
    <div>
      <h2>Wörter vs. Zeichen umkehren</h2>
      <p>
        Dieses Werkzeug kehrt <em>Zeichen</em> um. Um die Wortreihenfolge umzukehren („hello world"
        → „world hello"), würdest du an Leerzeichen aufteilen, das Array umkehren und wieder
        zusammenfügen. Zeichenumkehr ist die häufigere Anfrage und ist, was dieses Werkzeug tut.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ReverseTextContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
