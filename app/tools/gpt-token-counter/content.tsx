'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * GPT Token Counter 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
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
        Tokenizers such as <code>cl100k_base</code> (used by GPT-4o) split text into sub-word units, so a token
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
        The dropdown lists per-million-token prices for GPT-4o, GPT-4o mini, Claude 3.5 Sonnet, and Claude 3.5
        Haiku <em>as of 2025</em> — providers change pricing frequently, so verify before committing. A quick
        sanity check: a 1,000-word prompt is roughly 1,300 tokens, which at GPT-4o input prices costs well under
        a cent. Costs only become meaningful at scale, so multiply by your real request volume — and remember
        that <strong>output tokens are billed separately</strong>, usually at 3–5× the input rate.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      每张 LLM API 账单都以 <strong>token</strong>(模型实际读写的文本片段)来计量。本计数器估算你的 prompt 或文档包含多少 token,以及在主流 GPT 和 Claude 模型上输入这些内容大约需要多少钱。它<strong>100% 在你的浏览器中运行</strong>:你粘贴的任何内容都不会上传,因此可以安全地处理未发布的草稿、客户数据和 API 密钥。
    </p>

    <div>
      <h2>估算值是如何算出来的</h2>
      <p>
        诸如 <code>cl100k_base</code>(GPT-4o 使用)之类的分词器会把文本切成子词单元,因此一个 token 大约对应英文的 <strong>4 个字符或 0.75 个单词</strong>。本工具以这条经典的「字符数 ÷ 4」经验法则为起点,再通过把文本拆分为单词段和标点来细化:短词大约算 1 个 token,长词大约每 5 个字符算 1 个,每个标点符号各算 1 个 token,最后取两种启发式的平均值。结果通常与真实计数相差约 10–20%——足够做预算估算,但不足以用于计费争议。
      </p>
    </div>

    <div>
      <h2>估算值什么时候会偏离实际</h2>
      <p>
        这套启发式是针对英文散文调校的。<strong>源代码</strong>的分词效果较差(符号和缩进密集);<strong>非英文文本</strong>——尤其是中日韩(CJK)——往往 1–2 个字符就是 1 个 token,而不是 4 个;emoji 或罕见 Unicode 字符每个可能就要消耗好几个 token。如果你需要精确数字,请用各提供商自己的分词器(<code>tiktoken</code> 用于 OpenAI,或 Anthropic SDK 中的 token 计数接口)对同一段文本运行一遍,再作比较。
      </p>
    </div>

    <div>
      <h2>用价格表估算 prompt 成本</h2>
      <p>
        下拉菜单列出了 GPT-4o、GPT-4o mini、Claude 3.5 Sonnet 和 Claude 3.5 Haiku 每百万 token 的价格(<em>截至 2025 年</em>)——各提供商调价频繁,正式使用前请核实。一个快速的直觉校验:1,000 个单词的 prompt 大约是 1,300 个 token,按 GPT-4o 输入价格算远低于 1 美分。成本只有在规模上来之后才有意义,所以请乘以你的实际请求量——并记住<strong>输出 token 单独计费</strong>,通常费率是输入的 3–5 倍。
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
        Los tokenizadores como <code>cl100k_base</code> (usado por GPT-4o) dividen el texto en unidades subléxicas,
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
        (símbolos densos y sangría); el <strong>texto no inglés</strong> — especialmente CJK — suele costar 1–2
        caracteres por token en lugar de 4, y los emoji o caracteres Unicode raros pueden costar varios tokens cada
        uno. Si necesitas una cifra exacta, ejecuta el tokenizador del proveedor (<code>tiktoken</code> para OpenAI,
        o el endpoint de recuento de tokens del SDK de Anthropic) sobre el mismo texto y compara.
      </p>
    </div>

    <div>
      <h2>Presupuestar prompts con la tabla de precios</h2>
      <p>
        El menú desplegable lista los precios por millón de tokens de GPT-4o, GPT-4o mini, Claude 3.5 Sonnet y
        Claude 3.5 Haiku <em>a fecha de 2025</em> — los proveedores cambian los precios con frecuencia, así que
        verifica antes de comprometerte. Una comprobación rápida: un prompt de 1.000 palabras son unos 1.300 tokens,
        que a los precios de entrada de GPT-4o cuesta bastante menos de un céntimo. Los costes solo importan a escala,
        así que multiplícalos por tu volumen real de peticiones — y recuerda que los <strong>tokens de salida se
        facturan aparte</strong>, normalmente a 3–5× la tarifa de entrada.
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
        Tokenizer wie <code>cl100k_base</code> (von GPT-4o verwendet) zerlegen Text in sublexikalische Einheiten,
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
        Das Dropdown listet die Preise pro Million Tokens für GPT-4o, GPT-4o mini, Claude 3.5 Sonnet und Claude 3.5
        Haiku <em>Stand 2025</em> — Anbieter ändern ihre Preise häufig, also prüfe sie vor der Verbindlichkeit. Ein
        kurzer Plausibilitätscheck: Ein 1.000-Wörter-Prompt sind etwa 1.300 Tokens, was zu GPT-4o-Eingabepreisen
        deutlich unter einem Cent kostet. Kosten werden erst bei Skalierung relevant, also multipliziere sie mit
        deinem tatsächlichen Anfragevolumen — und denk daran, dass <strong>Ausgabe-Tokens separat abgerechnet
        werden</strong>, meist zum 3–5-fachen des Eingabepreises.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function GptTokenCounterClientContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
