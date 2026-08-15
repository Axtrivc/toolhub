'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Reading & Speaking Time 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
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
        wpm), and a <strong>fast speaker</strong> (~160 wpm).
      </p>
    </div>

    <div>
      <h2>Which number should you use?</h2>
      <p>
        For a <strong>blog read-time badge</strong>, some CMS plugins assume 150–200 wpm; Medium, for example,
        assumes ~265 wpm. For a <strong>speech or voice-over</strong>, use the speaking figures — and remember they assume
        continuous delivery. Slides, demos, pauses for laughter, and Q&amp;A easily add 10–20%, so if the tool
        says 9:30, plan a 10–11 minute slot. The <em>pages</em> estimate (250 words/page) helps when a brief asks
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      粘贴任意文章、博客草稿、脚本或演讲稿,这个工具会立刻估算出<strong>阅读或朗读需要多长时间</strong>,并同时给出词数、字符数、句子数和页数。它专为核对阅读时长徽章的作者、为演讲掐时间的讲者,以及衡量脚本篇幅的播客打造。一切都在你的浏览器中运行,文本绝不上传。
    </p>

    <div>
      <h2>估算方式是如何计算的</h2>
      <p>
        词数通过将去除首尾空白的文本按空白拆分来统计,时间就是 <code>words ÷ words-per-minute</code>。预设覆盖了常见语速:<strong>慢速阅读</strong>(100 wpm)、<strong>成年人平均</strong>(~150 wpm)、<strong>快速阅读</strong>(200 wpm)和<strong>略读</strong>(300 wpm),另有 50–400 wpm 的自定义滑块。口语预设反映真实表达:从容的<strong>演讲</strong>(~100 wpm)、正常<strong>对话</strong>(~130 wpm)和<strong>快语速</strong>(~160 wpm)。
      </p>
    </div>

    <div>
      <h2>你该用哪个数字?</h2>
      <p>
        做<strong>博客阅读时长徽章</strong>时,一些 CMS 插件假设 150–200 wpm;而 Medium,例如,假设约 265 wpm。做<strong>演讲或配音</strong>时,请使用口语数据 —— 并记住它们假定不间断地表达。幻灯片、演示、等笑声的停顿以及 Q&A 很容易额外增加 10–20%,所以如果工具显示 9:30,请预留 10–11 分钟的档期。<em>页数</em>估算(250 词/页)在需求写「约四页」时很有用。
      </p>
    </div>

    <div>
      <h2>值得了解的注意事项</h2>
      <p>
        估算会把每个 token 都当作一个词,因此密集的技术性文字、代码块、需要逐字读出的数字(念「3.14159」要花点时间)以及生僻人名在实际中都会更慢。句子通过结尾标点(<code>.</code>、<code>!</code>、<code>?</code>)来统计,所以缩写和省略号可能会让计数略有偏差。对于关键的时间把控 —— 比如主题演讲、广播片段 —— 务必用秒表做一次真实的通读排练。
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
      caracteres, frases y páginas. Está pensada para escritores que comprueban las insignias de tiempo de lectura,
      oradores que cronometran una charla y podcasters que dimensionan un guion. Todo se ejecuta en tu navegador; tu
      texto nunca se sube.
    </p>

    <div>
      <h2>Cómo se calcula la estimación</h2>
      <p>
        Las palabras se cuentan dividiendo el texto recortado por los espacios en blanco, y el tiempo es simplemente{' '}
        <code>words ÷ words-per-minute</code>. Los preajustes cubren velocidades habituales:{' '}
        <strong>lectura lenta</strong> (100 wpm), el <strong>promedio de adultos</strong> (~150 wpm),{' '}
        <strong>lectura rápida</strong> (200 wpm) y <strong>lectura diagonal</strong> (300 wpm), además de un
        deslizador personalizado de 50–400 wpm. Los preajustes de habla reflejan una entrega real: una{' '}
        <strong>presentación</strong> mesurada (~100 wpm), una <strong>conversación</strong> normal (~130 wpm) y un{' '}
        <strong>hablante rápido</strong> (~160 wpm).
      </p>
    </div>

    <div>
      <h2>¿Qué número deberías usar?</h2>
      <p>
        Para una <strong>insignia de tiempo de lectura de blog</strong>, algunos plugins de CMS asumen 150–200
        wpm; Medium, por ejemplo, asume ~265 wpm. Para un <strong>discurso o locución</strong>, usa las cifras de habla
        — y recuerda que asumen una entrega continua. Diapositivas, demos, pausas para las risas y Q&A añaden
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
      timen, und für Podcaster, die ein Skript vermessen. Alles läuft in deinem Browser; dein Text wird nie
      hochgeladen.
    </p>

    <div>
      <h2>Wie die Schätzung berechnet wird</h2>
      <p>
        Wörter werden gezählt, indem der getrimmte Text an Leerzeichen geteilt wird, und die Zeit ist einfach{' '}
        <code>words ÷ words-per-minute</code>. Voreinstellungen decken gängige Geschwindigkeiten ab:{' '}
        <strong>langsames Lesen</strong> (100 wpm), der <strong>Erwachsenen-Durchschnitt</strong> (~150 wpm),{' '}
        <strong>schnelles Lesen</strong> (200 wpm) und <strong>überfliegendes Lesen</strong> (300 wpm), plus ein
        Schieberegler von 50–400 wpm. Sprech-Voreinstellungen spiegeln reales Sprechen: eine gemessene{' '}
        <strong>Präsentation</strong> (~100 wpm), ein normales <strong>Gespräch</strong> (~130 wpm) und ein{' '}
        <strong>schneller Sprecher</strong> (~160 wpm).
      </p>
    </div>

    <div>
      <h2>Welche Zahl solltest du verwenden?</h2>
      <p>
        Für ein <strong>Blog-Read-Time-Badge</strong> nehmen manche CMS-Plugins 150–200 wpm an; Medium geht
        beispielsweise von ~265 wpm aus. Für eine <strong>Rede oder Sprechrolle</strong> verwende die Sprech-Zahlen — und denke
        daran, dass sie durchgehendes Sprechen voraussetzen. Folien, Demos, Lach-Pausen und Q&A bringen leicht
        10–20 % extra, also plane bei einer Tool-Angabe von 9:30 einen 10–11-Minuten-Slot ein. Die{' '}
        <em>Seiten</em>-Schätzung (250 Wörter/Seite) hilft bei Briefings, die „ungefähr vier Seiten" verlangen.
      </p>
    </div>

    <div>
      <h2>Wissenswerte Einschränkungen</h2>
      <p>
        Schätzungen behandeln jedes Token als ein Wort, daher laufen dichte Fachprosa, Code-Blöcke, laut vorgelesene
        Zahlen („3.14159" dauert eine Weile) und unbekannte Namen in der Praxis langsamer. Sätze werden über
        Satzschlusszeichen (<code>.</code>, <code>!</code>, <code>?</code>) gezählt, deshalb können Abkürzungen und
        Auslassungspunkte die Zahl leicht verändern. Bei zeitkritischen Einsätzen — einer Keynote, einem
        Broadcast-Segment — mach immer einen echten Durchlauf mit Stoppuhr.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ReadingSpeakingTimeContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
