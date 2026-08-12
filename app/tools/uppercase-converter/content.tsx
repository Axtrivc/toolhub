'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool converts any text to <strong>uppercase</strong> (ALL CAPS) instantly. Every
      lowercase letter becomes its uppercase equivalent; numbers, symbols, and already-uppercase
      letters stay the same. The conversion happens entirely in your browser — nothing is sent
      anywhere.
    </p>
    <div>
      <h2>When to Use Uppercase</h2>
      <ul>
        <li><strong>Headings and titles</strong> for emphasis in print and design</li>
        <li><strong>Acronyms</strong> like NASA, HTML, CEO — convention is all caps</li>
        <li><strong>Warning labels</strong> and signage where visibility matters</li>
        <li><strong>Keyboard shortcuts and code</strong> — many tools show keys in caps</li>
        <li><strong>Product codes and serial numbers</strong> to avoid ambiguity</li>
      </ul>
    </div>
    <div>
      <h2>Typography Tip</h2>
      <p>
        All-caps text is harder to read in long passages because letters lose their distinctive
        shapes (word outlines). Use it for short labels and headings, not paragraphs. For body
        text, sentence case or title case reads much faster.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      本工具可将任意文本即时转换为<strong>大写</strong>(全大写)。每个小写字母都会变成对应的大写形式;数字、符号以及已是大写的字母保持不变。整个转换都在你的浏览器中完成 —— 不会向任何地方发送数据。
    </p>
    <div>
      <h2>何时使用大写</h2>
      <ul>
        <li><strong>标题</strong>,用于印刷和设计中的强调</li>
        <li><strong>缩写</strong>,如 NASA、HTML、CEO —— 惯例是全部大写</li>
        <li><strong>警示标签</strong>和标识,可见性至关重要的场合</li>
        <li><strong>键盘快捷键和代码</strong> —— 许多工具用大写显示按键</li>
        <li><strong>产品编码和序列号</strong>,避免歧义</li>
      </ul>
    </div>
    <div>
      <h2>排版提示</h2>
      <p>
        在长段落中全大写文本较难阅读,因为字母会失去各自的轮廓(词形)。请用于简短的标签和标题,而非正文。正文使用句首大写或标题大写阅读起来要快得多。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta convierte cualquier texto a <strong>mayúsculas</strong> (TODO EN
      MAYÚSCULAS) al instante. Cada letra minúscula se convierte en su equivalente en mayúscula;
      los números, los símbolos y las letras que ya están en mayúscula se mantienen igual. La
      conversión ocurre completamente en tu navegador — no se envía nada a ningún sitio.
    </p>
    <div>
      <h2>Cuándo usar mayúsculas</h2>
      <ul>
        <li><strong>Titulares y títulos</strong> para dar énfasis en imprenta y diseño</li>
        <li><strong>Acrónimos</strong> como NASA, HTML, CEO — la convención es todo en mayúsculas</li>
        <li><strong>Etiquetas de advertencia</strong> y señalética donde la visibilidad importa</li>
        <li><strong>Atajos de teclado y código</strong> — muchas herramientas muestran las teclas en mayúsculas</li>
        <li><strong>Códigos de producto y números de serie</strong> para evitar ambigüedades</li>
      </ul>
    </div>
    <div>
      <h2>Consejo tipográfico</h2>
      <p>
        El texto todo en mayúsculas es más difícil de leer en pasajes largos porque las letras
        pierden sus formas distintivas (contornos de palabra). Úsalo para etiquetas cortas y
        titulares, no para párrafos. Para el cuerpo del texto, la capitalización de frase o de
        título se lee mucho más rápido.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug wandelt jeden Text sofort in <strong>GROSSBUCHSTABEN</strong> um. Aus jedem
      Kleinbuchstaben wird sein großes Gegenstück; Zahlen, Symbole und bereits großgeschriebene
      Buchstaben bleiben gleich. Die Umwandlung erfolgt vollständig in deinem Browser — es wird
      nichts irgendwohin gesendet.
    </p>
    <div>
      <h2>Wann du Großschreibung einsetzt</h2>
      <ul>
        <li><strong>Überschriften und Titel</strong> zur Hervorhebung in Print und Design</li>
        <li><strong>Akronyme</strong> wie NASA, HTML, CEO — hier ist alles groß Konvention</li>
        <li><strong>Warnschilder</strong> und Beschilderung, wo Sichtbarkeit zählt</li>
        <li><strong>Tastaturkürzel und Code</strong> — viele Tools zeigen Tasten in Großbuchstaben</li>
        <li><strong>Produktcodes und Seriennummern</strong> zur Vermeidung von Mehrdeutigkeit</li>
      </ul>
    </div>
    <div>
      <h2>Typografie-Tipp</h2>
      <p>
        reiner Großbuchstabentext ist in längeren Passagen schwerer zu lesen, weil die Buchstaben
        ihre charakteristischen Formen (Wortumrisse) verlieren. Setze ihn für kurze Beschriftungen
        und Überschriften ein, nicht für Absätze. Für Fließtext liest sich Satz- oder
        Titelmajuskelschreibung deutlich schneller.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function UppercaseConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
