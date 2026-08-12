'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>Lorem Ipsum</strong> is placeholder text used by designers and developers to fill
      layouts before the real content is ready. This generator produces paragraphs of
      pseudo-Latin that look like natural text without being distracting.
    </p>
    <div>
      <h2>Why Placeholder Text?</h2>
      <p>
        When designing a page, real text distracts reviewers — they read it instead of judging
        the layout. Lorem Ipsum has the look of language (word lengths, sentence flow) without
        the meaning, so it fills space without pulling attention.
      </p>
    </div>
    <div>
      <h2>The Origin</h2>
      <p>
        Lorem Ipsum isn&apos;t random — it&apos;s scrambled pieces of a 1st-century BC Latin
        text by Cicero (De finibus bonorum et malorum). The scrambling happened in the 1500s
        when an unknown printer used it as a type specimen. The modern version was
        popularized in the 1960s with Letraset sheets.
      </p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Mockups and wireframes</li>
        <li>Website templates and demos</li>
        <li>Print layouts before final copy</li>
        <li>Testing how text flows in a design</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <strong>Lorem Ipsum</strong> 是设计师和开发者使用的占位文本,用于在真实内容准备好之前填充布局。这个生成器会生成伪拉丁语段落,看起来像自然文本又不会分散注意力。
    </p>
    <div>
      <h2>为什么需要占位文本?</h2>
      <p>
        在设计页面时,真实文本会分散审阅者的注意力——他们会去读内容,而不是评判布局。Lorem Ipsum 具有语言的外观(词长、句子节奏),却没有实际含义,因此既能填充空间又不会吸引注意力。
      </p>
    </div>
    <div>
      <h2>起源</h2>
      <p>
        Lorem Ipsum 并非随机生成——它是公元前 1 世纪 Cicero(De finibus bonorum et malorum)一段拉丁语文本的拼凑片段。这种拼凑发生在 16 世纪,当时一位不知名的印刷工人将它用作字体样张。现代版本是在 20 世纪 60 年代随 Letraset 字母贴片流行起来的。
      </p>
    </div>
    <div>
      <h2>常见用途</h2>
      <ul>
        <li>原型图和线框图</li>
        <li>网站模板和演示</li>
        <li>最终文案前的印刷排版</li>
        <li>测试文本在设计中如何流动</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      <strong>Lorem Ipsum</strong> es texto de relleno usado por diseñadores y desarrolladores para
      ocupar diseños antes de que el contenido real esté listo. Este generador produce párrafos de
      pseudo-latín que parecen texto natural sin resultar distractores.
    </p>
    <div>
      <h2>¿Por qué texto de relleno?</h2>
      <p>
        Al diseñar una página, el texto real distrae a los revisores — lo leen en lugar de juzgar el
        diseño. Lorem Ipsum tiene el aspecto del lenguaje (longitudes de palabras, flujo de frases)
        sin el significado, así que ocupa espacio sin llamar la atención.
      </p>
    </div>
    <div>
      <h2>El origen</h2>
      <p>
        Lorem Ipsum no es aleatorio — son fragmentos mezclados de un texto en latín del siglo I a.
        C. de Cicerón (De finibus bonorum et malorum). La mezcla ocurrió en la década de 1500, cuando
        un impresor desconocido lo usó como muestra tipográfica. La versión moderna se popularizó en
        los años 60 con las hojas Letraset.
      </p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Mockups y wireframes</li>
        <li>Plantillas y demos de sitios web</li>
        <li>Diseños de imprenta antes del texto final</li>
        <li>Probar cómo fluye el texto en un diseño</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      <strong>Lorem Ipsum</strong> ist Platzhaltertext, den Designer und Entwickler verwenden, um
      Layouts zu füllen, bevor der eigentliche Inhalt fertig ist. Dieser Generator erzeugt Absätze
      mit Pseudo-Latein, die wie natürlicher Text wirken, ohne abzulenken.
    </p>
    <div>
      <h2>Warum Platzhaltertext?</h2>
      <p>
        Beim Entwerfen einer Seite lenkt echter Text Prüfer ab — sie lesen ihn, statt das Layout zu
        beurteilen. Lorem Ipsum hat das Aussehen von Sprache (Wortlängen, Satzbau) ohne die Bedeutung,
        füllt also den Raum, ohne die Aufmerksamkeit zu binden.
      </p>
    </div>
    <div>
      <h2>Der Ursprung</h2>
      <p>
        Lorem Ipsum ist nicht zufällig — es sind zusammengewürfelte Teile eines lateinischen Textes
        aus dem 1. Jahrhundert v. Chr. von Cicero (De finibus bonorum et malorum). Die Mischung
        entstand in den 1500er Jahren, als ein unbekannter Drucker ihn als Schriftmuster verwendete.
        Die moderne Version wurde in den 1960er Jahren mit Letraset-Bogen populär.
      </p>
    </div>
    <div>
      <h2>Häufige Einsatzzwecke</h2>
      <ul>
        <li>Mockups und Wireframes</li>
        <li>Website-Vorlagen und Demos</li>
        <li>Drucklayouts vor dem finalen Text</li>
        <li>Testen, wie Text in einem Design fließt</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function LoremIpsumGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
