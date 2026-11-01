'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * GPT Token Counter 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Every LLM API bill is measured in <strong>tokens</strong> — the chunks of text a model actually reads and
      writes. This counter estimates how many tokens your prompt or document contains and what that input would
      cost on popular GPT and Claude models. It runs <strong>100% in your browser</strong>: nothing you paste is
      ever uploaded, which makes it safe for unreleased drafts, customer data, and API keys.
    </p>

    <div>
      <h2>How the estimate is computed</h2>
      <p>
        Tokenizers such as <code>cl100k_base</code> (used by GPT-4 and GPT-3.5) split text into sub-word units, so a token
        is roughly <strong>4 characters or 0.75 words</strong> of English. This tool starts from that classic
        chars÷4 rule of thumb, then refines it by splitting your text into word runs and punctuation: short
        words count as about one token, long words as roughly one per five characters, and each punctuation mark
        as its own token. The two heuristics are averaged. Expect the result to land within about 10–20% of the
        real count — close enough for budgeting, not for billing disputes.
      </p>
    </div>

    <div>
      <h2>When estimates drift from reality</h2>
      <p>
        The heuristic is tuned for English prose. <strong>Source code</strong> tokenizes worse (dense symbols and
        indentation), <strong>non-English text</strong> — especially CJK — often costs 1–2 characters per token
        instead of 4, and emoji or rare Unicode can cost several tokens each. If you need an exact figure, run
        the provider&apos;s own tokenizer (<code>tiktoken</code> for OpenAI, or the token-count endpoint in the
        Anthropic SDK) on the same text and compare.
      </p>
    </div>

    <div>
      <h2>Budgeting prompts with the price table</h2>
      <p>
        The dropdown lists per-million-token prices for the current flagship models from OpenAI, Anthropic,
        Google, DeepSeek and others — for example GPT-5.6, Claude Sonnet 5 and Gemini 3.6 Flash —{' '}
        <em>as of 2026</em>. Providers change pricing frequently, so verify before committing. A quick sanity
        check: a 1,000-word prompt is roughly 1,300 tokens, which at the input prices in the dropdown costs at
        most a cent or two. Costs only become meaningful at scale, so multiply by your real request volume — and
        remember that <strong>output tokens are billed separately</strong>, usually at several times the input
        rate.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Cada factura de la API de un LLM se mide en <strong>tokens</strong> — los fragmentos de texto que un modelo
      realmente lee y escribe. Este contador estima cuántos tokens contiene tu prompt o documento y cuánto costaría
      esa entrada en los modelos populares de GPT y Claude. Funciona <strong>100 % en tu navegador</strong>: nada de
      lo que pegues se sube, lo que lo hace seguro para borradores sin publicar, datos de clientes y claves de API.
    </p>

    <div>
      <h2>Cómo se calcula la estimación</h2>
      <p>
        Los tokenizadores como <code>cl100k_base</code> (usado por GPT-4 y GPT-3.5) dividen el texto en unidades subléxicas,
        así que un token corresponde aproximadamente a <strong>4 caracteres o 0,75 palabras</strong> de inglés. Esta
        herramienta parte de esa regla clásica de caracteres÷4 y luego la refina dividiendo tu texto en secuencias
        de palabras y signos de puntuación: las palabras cortas cuentan como un token, las largas como uno por cada
        cinco caracteres y cada signo de puntuación como su propio token. Se promedian ambas heurísticas. Espera que
        el resultado caiga dentro de un 10–20 % del recuento real — suficiente para presupuestos, no para disputas de facturación.
      </p>
    </div>

    <div>
      <h2>Cuándo las estimaciones se desvían de la realidad</h2>
      <p>
        La heurística está ajustada para prosa en inglés. El <strong>código fuente</strong> se tokeniza peor
        (símbolos densos y sangría); el <strong>texto en otros idiomas</strong> — especialmente CJK — suele costar 1–2
        caracteres por token en lugar de 4, y los emoji o caracteres Unicode raros pueden costar varios tokens cada
        uno. Si necesitas una cifra exacta, ejecuta el tokenizador del proveedor (<code>tiktoken</code> para OpenAI,
        o el endpoint de recuento de tokens del SDK de Anthropic) sobre el mismo texto y compara.
      </p>
    </div>

    <div>
      <h2>Presupuestar prompts con la tabla de precios</h2>
      <p>
        El menú desplegable lista los precios por millón de tokens de los modelos insignia actuales de OpenAI,
        Anthropic, Google, DeepSeek y otros — por ejemplo GPT-5.6, Claude Sonnet 5 y Gemini 3.6 Flash —{' '}
        <em>a fecha de 2026</em>. Los proveedores cambian los precios con frecuencia, así que verifica los precios
        antes de decidirte. Una comprobación rápida: un prompt de 1.000 palabras son unos 1.300 tokens, que a los
        precios de entrada del desplegable cuestan como mucho uno o dos céntimos. Los costes solo cobran importancia a
        gran escala, así que multiplícalos por tu volumen real de peticiones — y recuerda que los{' '}
        <strong>tokens de salida se facturan aparte</strong>, normalmente a varias veces la tarifa de entrada.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Jede LLM-API-Rechnung wird in <strong>Tokens</strong> gemessen — den Textstücken, die ein Modell tatsächlich
      liest und schreibt. Dieser Zähler schätzt, wie viele Tokens dein Prompt oder Dokument enthält und was diese
      Eingabe bei gängigen GPT- und Claude-Modellen kosten würde. Er läuft <strong>zu 100 % in deinem Browser</strong>:
      Nichts, was du einfügst, wird hochgeladen, was ihn sicher für unveröffentlichte Entwürfe, Kundendaten und API-Schlüssel macht.
    </p>

    <div>
      <h2>Wie die Schätzung berechnet wird</h2>
      <p>
        Tokenizer wie <code>cl100k_base</code> (von GPT-4 und GPT-3.5 verwendet) zerlegen Text in sublexikalische Einheiten,
        sodass ein Token etwa <strong>4 Zeichen oder 0,75 Wörter</strong> Englisch entspricht. Dieses Werkzeug geht
        von dieser klassischen Zeichen÷4-Regel aus und verfeinert sie, indem es deinen Text in Wortfolgen und
        Satzzeichen zerlegt: Kurze Wörter zählen als etwa ein Token, lange als grob eins pro fünf Zeichen und jedes
        Satzzeichen als eigenes Token. Beide Heuristiken werden gemittelt. Erwarte ein Ergebnis innerhalb von etwa
        10–20 % der tatsächlichen Anzahl — gut genug für die Budgetplanung, nicht für Abrechnungsstreitigkeiten.
      </p>
    </div>

    <div>
      <h2>Wann Schätzungen von der Realität abweichen</h2>
      <p>
        Die Heuristik ist auf englischen Prosatext abgestimmt. <strong>Quellcode</strong> tokenisiert schlechter
        (dichte Symbole und Einrückungen), <strong>nicht-englischer Text</strong> — besonders CJK — kostet oft
        1–2 Zeichen pro Token statt 4, und Emoji oder seltene Unicode-Zeichen können jeweils mehrere Tokens kosten.
        Wenn du eine exakte Zahl brauchst, führe den hauseigenen Tokenizer des Anbieters (<code>tiktoken</code> für
        OpenAI bzw. den Token-Count-Endpunkt im Anthropic-SDK) mit demselben Text aus und vergleiche.
      </p>
    </div>

    <div>
      <h2>Prompts mit der Preistabelle budgetieren</h2>
      <p>
        Das Dropdown listet die Preise pro Million Tokens für die aktuellen Flaggschiff-Modelle von OpenAI,
        Anthropic, Google, DeepSeek und anderen — etwa GPT-5.6, Claude Sonnet 5 und Gemini 3.6 Flash —{' '}
        <em>Stand 2026</em>. Anbieter ändern ihre Preise häufig, also prüfe sie, bevor du dich darauf verlässt. Ein
        kurzer Plausibilitätscheck: Ein 1.000-Wörter-Prompt sind etwa 1.300 Tokens, was zu den Eingabepreisen
        im Dropdown höchstens ein bis zwei Cent kostet. Kosten werden erst bei größerem Volumen relevant, also
        multipliziere sie mit deinem tatsächlichen Anfragevolumen — und denk daran, dass{' '}
        <strong>Ausgabe-Tokens separat abgerechnet werden</strong>, meist zum Mehrfachen des Eingabepreises.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function GptTokenCounterClientContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
