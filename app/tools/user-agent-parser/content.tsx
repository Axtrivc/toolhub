'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * User Agent Parser 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Every HTTP request your browser sends carries a <strong>User-Agent header</strong> — a dense string
      identifying the browser, rendering engine, operating system, and device type. This parser decodes that
      string into readable fields plus a structured JSON result. It auto-detects your own browser on load, accepts
      any pasted string for testing, flags known search-engine bots, and runs entirely in your browser — nothing
      is sent anywhere.
    </p>

    <div>
      <h2>Why UA strings are parsed in a specific order</h2>
      <p>
        UA parsing is really pattern matching with precedence traps. Microsoft Edge, Opera, and Samsung Internet
        all contain <code>Chrome/…</code> in their strings, so they must be checked <em>before</em> Chrome — and
        Chrome before Safari, since every Chromium browser also ends with <code>Safari/537.36</code>. The same
        applies to operating systems: Android UAs contain the word <code>Linux</code>, and iOS UAs contain{' '}
        <code>like Mac OS X</code>, so mobile platforms must win over desktop ones. This tool encodes exactly
        that ordering.
      </p>
    </div>

    <div>
      <h2>What the fields can and cannot tell you</h2>
      <p>
        The <strong>engine</strong> field (Blink, Gecko, WebKit) often matters more than the browser brand for
        CSS and JavaScript compatibility. <strong>Device type</strong> is inferred from tokens like{' '}
        <code>Mobile</code> and <code>iPad</code> — an Android UA without <code>Mobile</code> is treated as a
        tablet, matching how the browsers self-report. Two honest limitations: Windows 10 and 11 both report{' '}
        <code>Windows NT 10.0</code> and are indistinguishable from the UA alone, and iPadOS pretends to be
        desktop macOS by design.
      </p>
    </div>

    <div>
      <h2>Practical uses — and why not to rely on it</h2>
      <p>
        Paste the UA from a server log to identify what a visitor or bot actually was — the bot detector covers
        Googlebot, Bingbot, DuckDuckBot, GPTBot, and a dozen more. It is also handy when building test fixtures
        or debugging &quot;works on my machine&quot; issues. For production feature support, though, prefer{' '}
        <strong>feature detection</strong> (<code>&apos;clipboard&apos; in navigator</code>) over UA sniffing:
        strings are trivially spoofed, browsers freeze or shuffle tokens regularly, and Client Hints are
        gradually replacing the UA header in Chromium.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      你的浏览器发出的每一个 HTTP 请求都带有一个 <strong>User-Agent 头</strong>——一段密密麻麻的字符串,标识了浏览器、渲染引擎、操作系统和设备类型。本解析器把这段字符串解码成易读的字段,并附上结构化的 JSON 结果。加载时会自动检测你自己的浏览器,也接受任意粘贴的字符串用于测试,还能标记已知的搜索引擎爬虫——所有运算都在你的浏览器中完成,不向任何地方发送数据。
    </p>

    <div>
      <h2>为什么要按特定顺序解析 UA 字符串</h2>
      <p>
        UA 解析本质上就是带有优先级陷阱的模式匹配。Microsoft Edge、Opera 和 Samsung Internet 的字符串里都含有 <code>Chrome/…</code>,因此必须在 Chrome <em>之前</em>检测它们——而 Chrome 又要先于 Safari,因为每个 Chromium 浏览器的结尾都是 <code>Safari/537.36</code>。操作系统同理:Android 的 UA 含有 <code>Linux</code> 一词,iOS 的 UA 含有 <code>like Mac OS X</code>,因此移动平台必须优先于桌面平台。本工具正是按这种顺序来处理的。
      </p>
    </div>

    <div>
      <h2>各字段能告诉你什么、不能告诉你什么</h2>
      <p>
        对于 CSS 和 JavaScript 兼容性而言,<strong>引擎</strong>字段(Blink、Gecko、WebKit)往往比浏览器品牌更重要。<strong>设备类型</strong>是根据 <code>Mobile</code>、<code>iPad</code> 等标记推断的——不含 <code>Mobile</code> 的 Android UA 会被当作平板,这与浏览器自我报告的方式一致。两个诚实的局限:Windows 10 和 11 都报告 <code>Windows NT 10.0</code>,仅凭 UA 无法区分;而 iPadOS 出于设计会伪装成桌面版 macOS。
      </p>
    </div>

    <div>
      <h2>实际用途——以及为什么不应过度依赖它</h2>
      <p>
        粘贴来自服务器日志的 UA,就能识别访客或爬虫的真实身份——爬虫检测器覆盖了 Googlebot、Bingbot、DuckDuckBot、GPTBot 等十余种。在构造测试夹具或调试「在我机器上能跑」的问题时也很方便。但对于生产环境的功能支持,请优先使用<strong>特性检测</strong>(<code>&apos;clipboard&apos; in navigator</code>)而非 UA 嗅探:字符串极易伪造,浏览器会定期冻结或打乱这些标记,而 Client Hints 正在 Chromium 中逐步取代 UA 头。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Cada petición HTTP que envía tu navegador lleva una <strong>cabecera User-Agent</strong> — una cadena densa
      que identifica el navegador, el motor de renderizado, el sistema operativo y el tipo de dispositivo. Este
      analizador decodifica esa cadena en campos legibles además de un resultado JSON estructurado. Detecta tu propio
      navegador al cargar, acepta cualquier cadena pegada para pruebas, marca los bots de buscadores conocidos y se
      ejecuta por completo en tu navegador — nada se envía a ningún sitio.
    </p>

    <div>
      <h2>Por qué las cadenas UA se analizan en un orden específico</h2>
      <p>
        Analizar un UA es, en realidad, coincidencia de patrones con trampas de precedencia. Microsoft Edge, Opera y
        Samsung Internet contienen <code>Chrome/…</code> en sus cadenas, así que deben comprobarse <em>antes</em> que
        Chrome — y Chrome antes que Safari, puesto que todo navegador Chromium termina con <code>Safari/537.36</code>.
        Lo mismo aplica a los sistemas operativos: los UA de Android contienen la palabra <code>Linux</code> y los de
        iOS contienen <code>like Mac OS X</code>, por lo que las plataformas móviles deben prevalecer sobre las de
        escritorio. Esta herramienta codifica exactamente ese orden.
      </p>
    </div>

    <div>
      <h2>Qué pueden y qué no pueden decirte los campos</h2>
      <p>
        El campo <strong>motor</strong> (Blink, Gecko, WebKit) a menudo importa más que la marca del navegador para
        la compatibilidad de CSS y JavaScript. El <strong>tipo de dispositivo</strong> se infiere de marcadores como{' '}
        <code>Mobile</code> e <code>iPad</code> — un UA de Android sin <code>Mobile</code> se trata como una tablet,
        coincidiendo con cómo se autoidentifican los navegadores. Dos limitaciones honestas: Windows 10 y 11 ambos
        reportan <code>Windows NT 10.0</code> y son indistinguibles solo por el UA, y iPadOS finge ser macOS de
        escritorio por diseño.
      </p>
    </div>

    <div>
      <h2>Usos prácticos — y por qué no depender de ello</h2>
      <p>
        Pega el UA de un log del servidor para identificar qué era realmente un visitante o un bot — el detector cubre
        Googlebot, Bingbot, DuckDuckBot, GPTBot y una docena más. También es útil para construir fixtures de prueba o
        depurar problemas de «en mi máquina funciona». Sin embargo, para el soporte de funciones en producción,
        prefiere la <strong>detección de características</strong> (<code>&apos;clipboard&apos; in navigator</code>) al
        rastreo del UA: las cadenas se falsifican trivialmente, los navegadores congelan o reordenan los marcadores con
        regularidad y Client Hints está reemplazando gradualmente la cabecera UA en Chromium.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Jede HTTP-Anfrage, die dein Browser sendet, trägt einen <strong>User-Agent-Header</strong> — eine dichte
      Zeichenkette, die Browser, Rendering-Engine, Betriebssystem und Gerätetyp identifiziert. Dieser Parser decodiert
      diese Zeichenkette in lesbare Felder plus ein strukturiertes JSON-Ergebnis. Er erkennt deinen eigenen Browser beim
      Laden, akzeptiert beliebige eingefügte Zeichenketten zum Testen, markiert bekannte Suchmaschinen-Bots und läuft
      vollständig in deinem Browser — nichts wird irgendwohin gesendet.
    </p>

    <div>
      <h2>Warum UA-Zeichenketten in einer bestimmten Reihenfolge geparst werden</h2>
      <p>
        UA-Parsing ist in Wirklichkeit Mustererkennung mit Vorrang-Fallen. Microsoft Edge, Opera und Samsung Internet
        enthalten alle <code>Chrome/…</code> in ihren Zeichenketten, daher müssen sie <em>vor</em> Chrome geprüft
        werden — und Chrome vor Safari, da jeder Chromium-Browser auch mit <code>Safari/537.36</code> endet. Dasselbe
        gilt für Betriebssysteme: Android-UAs enthalten das Wort <code>Linux</code>, iOS-UAs enthalten{' '}
        <code>like Mac OS X</code>, weshalb mobile Plattformen vor Desktop-Plattformen Vorrang haben müssen. Dieses
        Werkzeug kodiert genau diese Reihenfolge.
      </p>
    </div>

    <div>
      <h2>Was die Felder dir sagen können — und was nicht</h2>
      <p>
        Das Feld <strong>Engine</strong> (Blink, Gecko, WebKit) ist für CSS- und JavaScript-Kompatibilität oft
        wichtiger als die Browser-Marke. Der <strong>Gerätetyp</strong> wird aus Tokens wie <code>Mobile</code> und{' '}
        <code>iPad</code> erschlossen — eine Android-UA ohne <code>Mobile</code> wird als Tablet behandelt, passend zu
        der Art, wie sich die Browser selbst melden. Zwei ehrliche Einschränkungen: Windows 10 und 11 melden beide{' '}
        <code>Windows NT 10.0</code> und sind allein anhand der UA nicht unterscheidbar, und iPadOS gibt sich
        absichtlich als Desktop-macOS aus.
      </p>
    </div>

    <div>
      <h2>Praktische Anwendungen — und warum du dich nicht darauf verlassen solltest</h2>
      <p>
        Füge die UA aus einem Server-Log ein, um zu erkennen, was ein Besucher oder Bot wirklich war — der Bot-Detektor
        deckt Googlebot, Bingbot, DuckDuckBot, GPTBot und ein Dutzend weitere ab. Es ist auch praktisch beim Erstellen
        von Test-Fixtures oder beim Debuggen von „bei mir funktioniert es"-Problemen. Für Produktions-Feature-Support
        solltest du jedoch <strong>Feature Detection</strong> (<code>&apos;clipboard&apos; in navigator</code>) dem
        UA-Sniffing vorziehen: Zeichenketten lassen sich trivial fälschen, Browser frieren Tokens regelmäßig ein oder
        mischen sie um, und Client Hints ersetzen in Chromium zunehmend den UA-Header.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function UserAgentParserClientContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
