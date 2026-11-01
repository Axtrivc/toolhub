'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>Sentence case</strong>{' '}
      capitalizes only the first letter of each sentence, leaving the
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


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      El <strong>tipo oración</strong> capitaliza solo la primera letra de cada frase, dejando el
      resto en minúsculas. Es la capitalización natural de la escritura normal y la más legible para
      párrafos de texto.
    </p>
    <div>
      <h2>Cuándo usar el tipo oración</h2>
      <ul>
        <li><strong>Texto corrido</strong> en artículos, correos y documentación</li>
        <li><strong>Titulares de periódicos</strong> — la mayoría del periodismo impreso usa el tipo oración</li>
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
        manuell „john“ → „John“, „paris“ → „Paris“ usw. um. Für die meisten Aufräumaufgaben (in
        GROSSBUCHSTABEN getippter Text) erledigt dieses Werkzeug 95 % der Arbeit.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function SentenceCaseConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
