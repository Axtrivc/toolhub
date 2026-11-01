'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How Does the Word Counter Work?</h2>
    <p>
      This tool counts words, characters, sentences, paragraphs, and estimated reading time in
      real time as you type. A &quot;word&quot; is defined as any sequence of non-whitespace
      characters — so <code>hello</code>, <code>2026</code>, and <code>don&apos;t</code> each count
      as one word. Everything happens locally in your browser, so there is no delay and your text
      never leaves your device.
    </p>

    <h2>Why Count Words?</h2>
    <p>
      Word counts matter in more situations than you might think. Here are the most common ones:
    </p>
    <ul>
      <li>
        <strong>Academic writing.</strong> Essays, dissertations, and journal submissions almost
        always have strict word limits. Going under or over can cost you marks or get your work
        rejected.
      </li>
      <li>
        <strong>SEO and content marketing.</strong> Search engines tend to favor in-depth
        articles. A common benchmark is 1,000-2,000 words for pillar content, though quality
        always beats length.
      </li>
      <li>
        <strong>Legal and professional documents.</strong> Briefs, contracts, and reports often
        have word-count limits set by courts or clients.
      </li>
      <li>
        <strong>Social media.</strong> Each platform has its own limits: X (Twitter) posts, meta
        descriptions for SEO (around 155 characters), ad copy, and more.
      </li>
      <li>
        <strong>Translation and freelance writing.</strong> Many translators and writers are paid
        per word, so accurate counts are essential for invoicing.
      </li>
    </ul>

    <h2>Reading Time vs. Speaking Time</h2>
    <p>
      The tool estimates two durations based on your word count, using standard reading speeds:
    </p>
    <ul>
      <li>
        <strong>Reading time:</strong> ~200 words per minute (around the average for adult fiction
        reading; conservative estimates use 150 — see our Reading Time tool).
      </li>
      <li>
        <strong>Speaking time:</strong> ~130 words per minute (the average pace for a clear
        presentation or podcast).
      </li>
      <li>
        <strong>Chinese, Japanese, and Korean text:</strong> each character counts as one word, and
        the speeds switch to ~350 characters per minute reading and ~220 speaking.
      </li>
    </ul>
    <p>
      These are averages — your actual speed depends on content density, technical jargon, and
      whether you&apos;re skimming. Use them as a planning guide, not a stopwatch.
    </p>

    <h2>Character Counts for Common Platforms</h2>
    <p>Quick reference for limits you might be writing toward:</p>
    <ul>
      <li><strong>Google meta description:</strong> ~155 characters (after which it gets truncated).</li>
      <li><strong>X (Twitter) post:</strong> 280 characters.</li>
      <li><strong>Instagram caption:</strong> 2,200 characters (only the first 125 show without tapping &quot;more&quot;).</li>
      <li><strong>Facebook post:</strong> No strict limit, but shorter posts get more engagement.</li>
      <li><strong>LinkedIn post:</strong> 3,000 characters.</li>
      <li><strong>YouTube title:</strong> 100 characters (~70 visible in search).</li>
    </ul>

    <h2>Tips for Reaching Your Target Word Count</h2>
    <ol>
      <li>
        <strong>Don&apos;t pad.</strong>{' '}
        Adding fluff hurts readability and SEO. If you&apos;re
        short, add substance — examples, data, or a deeper explanation — not filler.
      </li>
      <li>
        <strong>Outline first.</strong> A structured outline makes it easier to hit your target
        without rambling. Allocate roughly equal words to each section.
      </li>
      <li>
        <strong>Edit ruthlessly to cut.</strong>{' '}
        If you&apos;re over the limit, look for redundant
        phrases, adverbs, and repetition. Cutting usually improves the writing.
      </li>
    </ol>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Cómo funciona el contador de palabras?</h2>
    <p>
      Esta herramienta cuenta palabras, caracteres, frases, párrafos y el tiempo estimado de
      lectura en tiempo real mientras escribes. Una «palabra» se define como cualquier secuencia de
      caracteres que no sean espacios en blanco — así que <code>hello</code>, <code>2026</code> y{' '}
      <code>don&apos;t</code> cuentan cada uno como una palabra. Todo ocurre localmente en tu
      navegador, así que no hay demoras y tu texto nunca sale de tu dispositivo.
    </p>

    <h2>¿Por qué contar palabras?</h2>
    <p>
      El recuento de palabras importa en más situaciones de las que crees. Aquí están las más
      comunes:
    </p>
    <ul>
      <li>
        <strong>Escritura académica.</strong> Ensayos, tesis y envíos a revistas casi siempre tienen
        límites estrictos de palabras. Quedarse corto o pasarse te puede costar puntos o hacer que rechacen
        tu trabajo.
      </li>
      <li>
        <strong>SEO y marketing de contenidos.</strong> Los motores de búsqueda tienden a favorecer
        artículos en profundidad. Un referente habitual es 1,000-2,000 palabras para contenido pilar,
        aunque la calidad siempre supera a la longitud.
      </li>
      <li>
        <strong>Documentos legales y profesionales.</strong> Informes, contratos y dictámenes suelen
        tener límites de palabras fijados por tribunales o clientes.
      </li>
      <li>
        <strong>Redes sociales.</strong> Cada plataforma tiene sus propios límites: publicaciones en
        X (Twitter), meta descripciones para SEO (unos 155 caracteres), textos de anuncios y más.
      </li>
      <li>
        <strong>Traducción y redacción freelance.</strong> Muchos traductores y redactores cobran por
        palabra, así que los recuentos precisos son esenciales para facturar.
      </li>
    </ul>

    <h2>Tiempo de lectura frente a tiempo de locución</h2>
    <p>
      La herramienta estima dos duraciones a partir de tu recuento de palabras, usando velocidades de
      lectura estándar:
    </p>
    <ul>
      <li>
        <strong>Tiempo de lectura:</strong> ~200 palabras por minuto (un ritmo medio de lectura de
        ficción para adultos; las estimaciones conservadoras usan 150 — consulta nuestra
        herramienta de tiempo de lectura).
      </li>
      <li>
        <strong>Tiempo de locución:</strong> ~130 palabras por minuto (el ritmo medio de una
        presentación clara o un pódcast).
      </li>
      <li>
        <strong>Texto en chino, japonés o coreano:</strong> cada carácter cuenta como una palabra, y
        las velocidades pasan a ~350 caracteres por minuto de lectura y ~220 de locución.
      </li>
    </ul>
    <p>
      Son promedios — tu velocidad real depende de la densidad del contenido, la jerga técnica y de si
      estás hojeando. Úsalos como guía de planificación, no como cronómetro.
    </p>

    <h2>Recuentos de caracteres en plataformas comunes</h2>
    <p>Referencia rápida de los límites hacia los que podrías estar escribiendo:</p>
    <ul>
      <li><strong>Meta descripción de Google:</strong> ~155 caracteres (a partir de ahí se trunca).</li>
      <li><strong>Publicación en X (Twitter):</strong> 280 caracteres.</li>
      <li><strong>Pie de foto de Instagram:</strong> 2,200 caracteres (solo se muestran los primeros 125 sin tocar «más»).</li>
      <li><strong>Publicación en Facebook:</strong> Sin límite estricto, pero las publicaciones más cortas obtienen más interacción.</li>
      <li><strong>Publicación en LinkedIn:</strong> 3,000 caracteres.</li>
      <li><strong>Título de YouTube:</strong> 100 caracteres (~70 visibles en la búsqueda).</li>
    </ul>

    <h2>Consejos para alcanzar tu recuento de palabras objetivo</h2>
    <ol>
      <li>
        <strong>No rellenes.</strong> Añadir relleno perjudica la legibilidad y el SEO. Si te quedas
        corto, añade sustancia — ejemplos, datos o una explicación más profunda —, no relleno.
      </li>
      <li>
        <strong>Haz un esquema primero.</strong> Un esquema estructurado facilita alcanzar tu objetivo
        sin divagar. Reparte aproximadamente la misma cantidad de palabras en cada sección.
      </li>
      <li>
        <strong>Edita sin piedad para recortar.</strong> Si te pasas del límite, busca frases
        redundantes, adverbios y repeticiones. Recortar suele mejorar la escritura.
      </li>
    </ol>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wie funktioniert der Wörterzähler?</h2>
    <p>
      Dieses Werkzeug zählt Wörter, Zeichen, Sätze, Absätze und die geschätzte Lesezeit in Echtzeit
      während du tippst. Ein „Wort“ ist definiert als jede Folge von Zeichen, die keine Leerzeichen
      sind — also zählen <code>hello</code>, <code>2026</code> und <code>don&apos;t</code> jeweils als
      ein Wort. Alles passiert lokal in deinem Browser, sodass es keine Verzögerung gibt und dein Text
      nie dein Gerät verlässt.
    </p>

    <h2>Warum Wörter zählen?</h2>
    <p>
      Wortzahlen sind in mehr Situationen wichtig, als du vielleicht denkst. Hier sind die
      häufigsten:
    </p>
    <ul>
      <li>
        <strong>Wissenschaftliches Schreiben.</strong> Hausarbeiten, Dissertationen und
        Zeitschrifteneinreichungen haben fast immer strenge Wortlimits. Unter- oder Überschreitung
        kann Punkte kosten oder zur Ablehnung führen.
      </li>
      <li>
        <strong>SEO und Content-Marketing.</strong> Suchmaschinen bevorzugen tendenziell tiefgehende
        Artikel. Ein gängiger Richtwert für Pillar-Content sind 1,000-2,000 Wörter, wobei Qualität
        stets über Länge steht.
      </li>
      <li>
        <strong>Juristische und professionelle Dokumente.</strong> Schriftsätze, Verträge und
        Berichte haben oft Wortlimits, die von Gerichten oder Auftraggebern vorgegeben sind.
      </li>
      <li>
        <strong>Soziale Medien.</strong> Jede Plattform hat eigene Limits: X (Twitter)-Posts,
        Meta-Beschreibungen für SEO (rund 155 Zeichen), Werbetexte und mehr.
      </li>
      <li>
        <strong>Übersetzung und freiberufliches Schreiben.</strong> Viele Übersetzer und Autoren werden pro
        Wort bezahlt, daher sind genaue Zählungen für die Abrechnung unerlässlich.
      </li>
    </ul>

    <h2>Lesezeit vs. Sprechzeit</h2>
    <p>
      Auf Grundlage deiner Wortzahl schätzt das Werkzeug zwei Zeiten, jeweils mit gängigen
      Standardgeschwindigkeiten:
    </p>
    <ul>
      <li>
        <strong>Lesezeit:</strong> ~200 Wörter pro Minute (etwa das Durchschnittstempo erwachsener
        Leser bei Belletristik; konservative Schätzungen nehmen 150 — siehe unser Tool zur
        Lesezeit).
      </li>
      <li>
        <strong>Sprechzeit:</strong> ~130 Wörter pro Minute (das durchschnittliche Tempo einer
        klaren Präsentation oder eines Podcasts).
      </li>
      <li>
        <strong>Chinesischer, japanischer und koreanischer Text:</strong> Jedes Zeichen zählt als
        Wort, und die Geschwindigkeiten ändern sich auf ~350 Zeichen pro Minute beim Lesen bzw. ~220
        beim Sprechen.
      </li>
    </ul>
    <p>
      Dies sind Durchschnittswerte — dein tatsächliches Tempo hängt von der Inhaltsdichte, dem
      Fachjargon und davon ab, ob du nur überfliegst. Nutze sie als Planungshilfe, nicht als
      Stoppuhr.
    </p>

    <h2>Zeichenanzahlen gängiger Plattformen</h2>
    <p>Schnellreferenz für Limits, an denen du dich beim Schreiben orientieren kannst:</p>
    <ul>
      <li><strong>Google Meta-Beschreibung:</strong> ~155 Zeichen (danach wird abgeschnitten).</li>
      <li><strong>X (Twitter)-Post:</strong> 280 Zeichen.</li>
      <li><strong>Instagram-Caption:</strong> 2,200 Zeichen (nur die ersten 125 sind ohne Tippen auf „mehr“ sichtbar).</li>
      <li><strong>Facebook-Post:</strong> Kein striktes Limit, aber kürzere Posts bekommen mehr Engagement.</li>
      <li><strong>LinkedIn-Post:</strong> 3,000 Zeichen.</li>
      <li><strong>YouTube-Titel:</strong> 100 Zeichen (~70 sichtbar in der Suche).</li>
    </ul>

    <h2>Tipps, um deine Zielwortzahl zu erreichen</h2>
    <ol>
      <li>
        <strong>Nicht aufblähen.</strong> Füllmaterial schadet der Lesbarkeit und dem SEO. Wenn du zu kurz bist,
        füge Substanz hinzu — Beispiele, Daten oder eine tiefere Erklärung —, keinen Fülltext.
      </li>
      <li>
        <strong>Zuerst gliedern.</strong> Eine strukturierte Gliederung macht es leichter, dein Ziel
        zu treffen, ohne abzuschweifen. Verteile ungefähr gleich viele Wörter auf jeden Abschnitt.
      </li>
      <li>
        <strong>Beim Kürzen schonungslos überarbeiten.</strong> Wenn du über dem Limit liegst, suche
        nach redundanten Phrasen, Adverbien und Wiederholungen. Kürzen verbessert den Text meistens.
      </li>
    </ol>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function WordCounterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
