'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Reading & Speaking Time 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Paste any article, blog draft, script, or speech and this tool instantly estimates{' '}
      <strong>how long it takes to read or say out loud</strong> — along with word, character, sentence, and page
      counts. It&apos;s built for writers checking read-time badges, speakers timing a talk, and podcasters sizing
      a script. Everything runs in your browser; your text is never uploaded.
    </p>

    <div>
      <h2>How the estimate is calculated</h2>
      <p>
        Words are counted by splitting the trimmed text on whitespace, and the time is simply{' '}
        <code>words ÷ words-per-minute</code>. Presets cover common speeds: <strong>slow reading</strong> (100
        wpm), the <strong>adult average</strong> (~150 wpm), <strong>fast reading</strong> (200 wpm), and{' '}
        <strong>skimming</strong> (300 wpm), plus a custom slider from 50–400 wpm. Speaking presets reflect real
        delivery: a measured <strong>presentation</strong> (~100 wpm), normal <strong>conversation</strong> (~130
        wpm), and a <strong>fast speaker</strong> (~160 wpm). For Chinese, Japanese, or Korean text, every
        character counts as one word and the presets switch to characters-per-minute (reading 200/300/400/600,
        speaking 150/200/250) with the slider reaching 800.
      </p>
    </div>

    <div>
      <h2>Which number should you use?</h2>
      <p>
        For a <strong>blog read-time badge</strong>, some CMS plugins assume 150–200 wpm; Medium, for example,
        assumes ~265 wpm. For a <strong>speech or voice-over</strong>, use the speaking figures — and remember they assume
        continuous delivery. Slides, demos, pauses for laughter, and Q&amp;A easily add 10–20%, so if the tool
        says 9:30, plan a 10–11 minute slot. The <em>pages</em>{' '}
        estimate (250 words/page) helps when a brief asks
        for &quot;about four pages&quot;.
      </p>
    </div>

    <div>
      <h2>Caveats worth knowing</h2>
      <p>
        Estimates treat every token as one word, so dense technical prose, code blocks, numbers read aloud
        (&quot;3.14159&quot; takes a while to say), and unfamiliar names all run slower in practice. Sentences are
        counted by terminal punctuation (<code>.</code>, <code>!</code>, <code>?</code>), so abbreviations and
        ellipses can nudge the count. For a critical timing — a keynote, a broadcast segment — always do one real
        read-through with a stopwatch.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Pega cualquier artículo, borrador de blog, guion o discurso y esta herramienta estima al instante{' '}
      <strong>cuánto tiempo lleva leerlo o decirlo en voz alta</strong>, junto con los recuentos de palabras,
      caracteres, frases y páginas. Está pensada para escritores que comprueban las etiquetas de tiempo de lectura,
      oradores que cronometran una charla y podcasters que calculan la duración de un guion. Todo se ejecuta en tu navegador; tu
      texto nunca se sube.
    </p>

    <div>
      <h2>Cómo se calcula la estimación</h2>
      <p>
        Las palabras se cuentan dividiendo por espacios en blanco el texto tras recortar los extremos, y el tiempo es simplemente{' '}
        <code>words ÷ words-per-minute</code>. Los preajustes cubren velocidades habituales:{' '}
        <strong>lectura lenta</strong> (100 ppm), el <strong>promedio de adultos</strong> (~150 ppm),{' '}
        <strong>lectura rápida</strong> (200 ppm) y <strong>lectura diagonal</strong> (300 ppm), además de un
        deslizador personalizado de 50–400 ppm. Los preajustes de habla reflejan una entrega real: una{' '}
        <strong>presentación</strong> mesurada (~100 ppm), una <strong>conversación</strong> normal (~130 ppm) y un{' '}
        <strong>hablante rápido</strong> (~160 ppm). Con texto chino, japonés o coreano, cada carácter cuenta
        como una palabra y los preajustes cambian automáticamente a caracteres por minuto (lectura
        200/300/400/600, habla 150/200/250), con el deslizador hasta 800.
      </p>
    </div>

    <div>
      <h2>¿Qué número deberías usar?</h2>
      <p>
        Para una <strong>etiqueta de tiempo de lectura de blog</strong>, algunos plugins de CMS asumen 150–200
        ppm; Medium, por ejemplo, asume ~265 ppm. Para un <strong>discurso o locución</strong>, usa los tiempos de habla
        — y recuerda que suponen hablar sin interrupciones. Diapositivas, demos, pausas para las risas y Q&A añaden
        fácilmente un 10–20 %, así que si la herramienta dice 9:30, planifica un hueco de 10–11 minutos. La
        estimación de <em>páginas</em> (250 palabras/página) ayuda cuando un brief pide «unas cuatro páginas».
      </p>
    </div>

    <div>
      <h2>Advertencias que vale la pena conocer</h2>
      <p>
        Las estimaciones tratan cada token como una palabra, así que la prosa técnica densa, los bloques de código,
        los números leídos en voz alta («3.14159» tarda un rato en decirse) y los nombres desconocidos van más
        lentos en la práctica. Las frases se cuentan por la puntuación terminal (<code>.</code>,{' '}
        <code>!</code>, <code>?</code>), de modo que las abreviaturas y los puntos suspensivos pueden alterar el
        recuento. Para un cronometraje crítico — una keynote, un segmento de retransmisión — haz siempre una lectura
        completa real con cronómetro.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Füge einen beliebigen Artikel, Blog-Entwurf, ein Skript oder eine Rede ein und dieses Werkzeug schätzt sofort{' '}
      <strong>wie lange es dauert, ihn zu lesen oder laut vorzutragen</strong> — inklusive Wort-, Zeichen-, Satz-
      und Seitenanzahl. Es ist gemacht für Autoren, die Read-Time-Badges prüfen, für Vortragende, die einen Talk
      timen, und für Podcaster, die die Länge eines Skripts
      abschätzen. Alles läuft in deinem Browser; dein Text wird nie
      hochgeladen.
    </p>

    <div>
      <h2>Wie die Schätzung berechnet wird</h2>
      <p>
        Wörter werden gezählt, indem der Text an Anfang und Ende von Leerzeichen befreit und anschließend an
        Leerzeichen aufgeteilt wird; die Zeit ist einfach{' '}
        <code>words ÷ words-per-minute</code>. Voreinstellungen decken gängige Geschwindigkeiten ab:{' '}
        <strong>langsames Lesen</strong> (100 WpM), der <strong>Erwachsenen-Durchschnitt</strong> (~150 WpM),{' '}
        <strong>schnelles Lesen</strong> (200 WpM) und <strong>überfliegendes Lesen</strong> (300 WpM), plus ein
        Schieberegler von 50–400 WpM. Sprech-Voreinstellungen spiegeln reales Sprechen wider: eine{' '}
        <strong>Präsentation</strong> in ruhigem Tempo (~100 WpM), ein normales <strong>Gespräch</strong> (~130 WpM) und ein{' '}
        <strong>schneller Sprecher</strong> (~160 WpM). Bei chinesischem, japanischem oder koreanischem Text
        zählt jedes Zeichen als Wort, und die Voreinstellungen wechseln automatisch auf Zeichen pro Minute
        (Lesen 200/300/400/600, Sprechen 150/200/250); der Regler reicht dann bis 800.
      </p>
    </div>

    <div>
      <h2>Welche Zahl solltest du verwenden?</h2>
      <p>
        Für ein <strong>Blog-Read-Time-Badge</strong> nehmen manche CMS-Plugins 150–200 WpM an; Medium geht
        beispielsweise von ~265 WpM aus. Für eine <strong>Rede oder ein Voice-over</strong> verwende die Sprechwerte — und denke
        daran, dass sie durchgehendes Sprechen voraussetzen. Folien, Demos, Lachpausen und Q&A bringen leicht
        10–20 % extra, also plane bei einer Tool-Angabe von 9:30 einen 10–11-Minuten-Slot ein. Die{' '}
        <em>Seiten</em>-Schätzung (250 Wörter/Seite) hilft bei Briefings, die „ungefähr vier Seiten“ verlangen.
      </p>
    </div>

    <div>
      <h2>Wissenswerte Einschränkungen</h2>
      <p>
        Schätzungen behandeln jedes Token als ein Wort, daher kosten dichte Fachprosa, Code-Blöcke, laut vorgelesene
        Zahlen („3.14159“ dauert eine Weile) und unbekannte Namen in der Praxis mehr Zeit. Sätze werden über
        Satzschlusszeichen (<code>.</code>, <code>!</code>, <code>?</code>) gezählt, deshalb können Abkürzungen und
        Auslassungspunkte die Zahl leicht verändern. Bei zeitkritischen Einsätzen — einer Keynote, einem
        Broadcast-Segment — mach immer einen echten Probelauf mit der Stoppuhr.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ReadingSpeakingTimeContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
