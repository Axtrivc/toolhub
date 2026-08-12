'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>Sentence case</strong> capitalizes only the first letter of each sentence, leaving the
      rest lowercase. It&apos;s the natural capitalization of normal writing and the most readable
      for paragraphs of text.
    </p>
    <div>
      <h2>When to Use Sentence Case</h2>
      <ul>
        <li><strong>Body text</strong> in articles, emails, and documentation</li>
        <li><strong>Headlines in newspapers</strong> — most print journalism uses sentence case</li>
        <li><strong>Plain-language writing</strong> where readability matters most</li>
      </ul>
    </div>
    <div>
      <h2>Limitations of Automatic Conversion</h2>
      <p>
        This tool capitalizes after sentence-ending punctuation (. ! ?) but cannot detect proper
        nouns like names, brands, or places. After conversion, manually capitalize
        &quot;john&quot; → &quot;John,&quot; &quot;paris&quot; → &quot;Paris,&quot; etc. For most
        cleanup tasks (text typed in all caps), this tool gets you 95% of the way there.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <strong>句首大写</strong>只将每个句子的首字母大写,其余保持小写。它是正常书写最自然的大小写方式,也最适合用于段落正文。
    </p>
    <div>
      <h2>何时使用句首大写</h2>
      <ul>
        <li>文章、邮件和文档中的<strong>正文</strong></li>
        <li><strong>报纸标题</strong> —— 大多数平面新闻采用句首大写</li>
        <li><strong>平实写作</strong>,可读性至关重要的场合</li>
      </ul>
    </div>
    <div>
      <h2>自动转换的局限性</h2>
      <p>
        本工具会在句子结束标点(. ! ?)之后将首字母大写,但无法识别人名、品牌、地名等专有名词。转换后,请手动将「john」改为「John」、「paris」改为「Paris」等。对于大多数清理任务(如全部用大写输入的文本),本工具能完成 95% 的工作。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      El <strong>Sentence case</strong> capitaliza solo la primera letra de cada frase, dejando el
      resto en minúsculas. Es la capitalización natural de la escritura normal y la más legible para
      párrafos de texto.
    </p>
    <div>
      <h2>Cuándo usar sentence case</h2>
      <ul>
        <li><strong>Texto corrido</strong> en artículos, correos y documentación</li>
        <li><strong>Titulares de periódicos</strong> — la mayoría del periodismo impreso usa sentence case</li>
        <li><strong>Escritura en lenguaje claro</strong> donde la legibilidad importa más</li>
      </ul>
    </div>
    <div>
      <h2>Limitaciones de la conversión automática</h2>
      <p>
        Esta herramienta capitaliza después de los signos de puntuación que cierran las frases
        (. ! ?) pero no puede detectar nombres propios como personas, marcas o lugares. Después de
        la conversión, capitaliza manualmente «john» → «John», «paris» → «Paris», etc. Para la
        mayoría de tareas de limpieza (texto escrito todo en mayúsculas), esta herramienta hace el
        95 % del trabajo.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Die <strong>Satzschreibweise</strong> schreibt nur den ersten Buchstaben jedes Satzes groß
      und lässt den Rest klein. Sie ist die natürliche Groß-/Kleinschreibung normaler Texte und die
      am besten lesbare für Textabsätze.
    </p>
    <div>
      <h2>Wann du Satzschreibweise einsetzt</h2>
      <ul>
        <li><strong>Fließtext</strong> in Artikeln, E-Mails und Dokumentation</li>
        <li><strong>Zeitungsschlagzeilen</strong> — der Großteil des Printjournalismus verwendet Satzschreibweise</li>
        <li><strong>Einfache Sprache</strong>, bei der Lesbarkeit am wichtigsten ist</li>
      </ul>
    </div>
    <div>
      <h2>Grenzen der automatischen Umwandlung</h2>
      <p>
        Dieses Werkzeug schreibt nach satzbeendender Zeichensetzung (. ! ?) groß, kann aber
        Eigennamen wie Personen-, Marken- oder Ortsnamen nicht erkennen. Wandle nach der Umwandlung
        manuell „john" → „John", „paris" → „Paris" usw. um. Für die meisten Aufräumaufgaben (in
        GROSSBUCHSTABEN getippter Text) erledigt dieses Werkzeug 95 % der Arbeit.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SentenceCaseConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
