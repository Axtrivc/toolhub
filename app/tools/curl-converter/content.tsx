'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Curl Converter 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中,faqs 已丢弃),DOM 级 SEO 安全。zh/es/de 在客户端
 * hydration 后按 locale 切换。<code> 中的 curl 标志 (-X/-H/-d/-F/-k/-u 等)、
 * 代码片段 (fetch/axios/json= 等) 与专有名词保持不变。
 */

// ──────────────────────────── en (matches original rendering) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <code>curl</code> is the universal language of HTTP debugging &mdash; copy a request from your browser&apos;s
      DevTools, a colleague&apos;s README, or a Stripe doc, and you want to fire the same request from your own
      code. This converter parses the curl command (URL, method, headers, body) and emits ready-to-use
      snippets for <strong>JavaScript Fetch</strong>, <strong>Axios</strong>, and <strong>Python requests</strong>.
    </p>
    <div>
      <h2>What gets parsed</h2>
      <ul>
        <li>
          <strong>URL &amp; method</strong> &mdash; the target URL and the HTTP verb (<code>-X</code> /{' '}
          <code>--request</code>). If you send a body with <code>-d</code> but omit{' '}
          <code>-X</code>, the method automatically becomes <code>POST</code>.
        </li>
        <li>
          <strong>Headers</strong> &mdash; every <code>-H</code> / <code>--header</code>{' '}
          <code>&quot;Key: Value&quot;</code> pair is extracted into a headers object.
        </li>
        <li>
          <strong>Body</strong> &mdash; <code>-d</code> / <code>--data</code> /{' '}
          <code>--data-raw</code> bodies are detected. If the body is JSON (or{' '}
          <code>Content-Type: application/json</code> is set), Python uses <code>json=</code> and JS
          uses <code>JSON.stringify()</code>; otherwise it is sent as a raw string.
        </li>
        <li>
          <strong>Quoting</strong> &mdash; single quotes, double quotes, backslash escapes, and the{' '}
          <code>$&apos;...&apos;</code> ANSI-C syntax are all handled by a hand-written tokenizer.
        </li>
      </ul>
    </div>
    <div>
      <h2>JavaScript Fetch vs Axios</h2>
      <p>
        The Fetch output uses the native <code>fetch()</code> API with an <code>await</code> on{' '}
        <code>response.json()</code> &mdash; zero dependencies, works in browsers and Node 18+. The Axios
        output assumes you have <code>axios</code> installed; it tends to produce shorter code and
        throws on non-2xx status codes by default. Pick whichever matches your project&apos;s existing
        HTTP layer.
      </p>
    </div>
    <div>
      <h2>What is not converted</h2>
      <p>
        Multipart form uploads (<code>-F</code> / <code>--form</code>), cookie jars (<code>-b</code>{' '}
        / <code>-c</code>), and authentication via <code>-u user:pass</code> are not expanded into
        language-specific multipart or auth code &mdash; they are noisy to generate correctly and vary by
        library. For those, use your HTTP client&apos;s dedicated multipart/auth helpers with the
        parsed URL and headers as a starting point.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <code>curl</code> 是 HTTP 调试的通用语言——你从浏览器的 DevTools、同事的 README 或 Stripe 文档里复制了一条请求,想在自己的代码中发起同样的请求。这个转换器会解析 curl 命令(URL、方法、请求头、请求体),并输出可直接使用的 <strong>JavaScript Fetch</strong>、<strong>Axios</strong> 和 <strong>Python requests</strong> 代码片段。
    </p>
    <div>
      <h2>哪些内容会被解析</h2>
      <ul>
        <li>
          <strong>URL 与方法</strong> —— 目标 URL 和 HTTP 动词(<code>-X</code> /{' '}
          <code>--request</code>)。如果你用 <code>-d</code> 发送了请求体却省略了{' '}
          <code>-X</code>,方法会自动变为 <code>POST</code>。
        </li>
        <li>
          <strong>请求头</strong> —— 每个 <code>-H</code> / <code>--header</code>{' '}
          <code>&quot;Key: Value&quot;</code> 键值对都会被提取到一个 headers 对象中。
        </li>
        <li>
          <strong>请求体</strong> —— 会检测 <code>-d</code> / <code>--data</code> /{' '}
          <code>--data-raw</code> 请求体。如果请求体是 JSON(或设置了{' '}
          <code>Content-Type: application/json</code>),Python 使用 <code>json=</code>,JS 使用{' '}
          <code>JSON.stringify()</code>;否则以原始字符串发送。
        </li>
        <li>
          <strong>引号处理</strong> —— 单引号、双引号、反斜杠转义,以及{' '}
          <code>$&apos;...&apos;</code> 的 ANSI-C 语法,都由手写的分词器处理。
        </li>
      </ul>
    </div>
    <div>
      <h2>JavaScript Fetch 与 Axios</h2>
      <p>
        Fetch 输出使用原生 <code>fetch()</code> API,并对{' '}
        <code>response.json()</code> 使用 <code>await</code>——零依赖,在浏览器和 Node 18+ 中均可运行。Axios 输出假定你已安装 <code>axios</code>;它生成的代码通常更短,并且默认在非 2xx 状态码时抛出异常。选择与你项目现有 HTTP 层一致的方式即可。
      </p>
    </div>
    <div>
      <h2>哪些内容不会被转换</h2>
      <p>
        Multipart 表单上传(<code>-F</code> / <code>--form</code>)、cookie jars(<code>-b</code>{' '}
        / <code>-c</code>),以及通过 <code>-u user:pass</code> 的认证,不会被展开为特定语言的多部分或认证代码——正确生成这些内容会很繁琐,而且各库实现各异。对于这些情况,请使用你的 HTTP 客户端提供的专用 multipart/认证辅助函数,并以解析出的 URL 和请求头作为起点。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      <code>curl</code> es el lenguaje universal de la depuración HTTP — copias una petición de las DevTools
      de tu navegador, del README de un colega o de la documentación de Stripe, y quieres lanzar la misma
      petición desde tu propio código. Este conversor analiza el comando curl (URL, método, cabeceras, cuerpo)
      y genera fragmentos listos para usar en <strong>JavaScript Fetch</strong>, <strong>Axios</strong> y
      <strong>Python requests</strong>.
    </p>
    <div>
      <h2>Qué se analiza</h2>
      <ul>
        <li>
          <strong>URL y método</strong> — la URL de destino y el verbo HTTP (<code>-X</code> /{' '}
          <code>--request</code>). Si envías un cuerpo con <code>-d</code> pero omites{' '}
          <code>-X</code>, el método pasa automáticamente a <code>POST</code>.
        </li>
        <li>
          <strong>Cabeceras</strong> — cada par <code>-H</code> / <code>--header</code>{' '}
          <code>&quot;Key: Value&quot;</code> se extrae a un objeto de cabeceras.
        </li>
        <li>
          <strong>Cuerpo</strong> — se detectan los cuerpos <code>-d</code> / <code>--data</code> /{' '}
          <code>--data-raw</code>. Si el cuerpo es JSON (o se establece{' '}
          <code>Content-Type: application/json</code>), Python usa <code>json=</code> y JS usa{' '}
          <code>JSON.stringify()</code>; en caso contrario se envía como cadena sin procesar.
        </li>
        <li>
          <strong>Comillado</strong> — las comillas simples, dobles, las barras invertidas de escape y la
          sintaxis ANSI-C <code>$&apos;...&apos;</code> se gestionan con un analizador léxico escrito a mano.
        </li>
      </ul>
    </div>
    <div>
      <h2>JavaScript Fetch frente a Axios</h2>
      <p>
        La salida de Fetch usa la API nativa <code>fetch()</code> con un <code>await</code> sobre{' '}
        <code>response.json()</code> — cero dependencias, funciona en navegadores y Node 18+. La salida de
        Axios asume que tienes <code>axios</code> instalado; tiende a producir código más corto y lanza una
        excepción por defecto con códigos de estado fuera del rango 2xx. Elige la que coincida con la capa HTTP
        existente de tu proyecto.
      </p>
    </div>
    <div>
      <h2>Lo que no se convierte</h2>
      <p>
        Las subidas de formularios multipart (<code>-F</code> / <code>--form</code>), las cookie jars (<code>-b</code>{' '}
        / <code>-c</code>) y la autenticación mediante <code>-u user:pass</code> no se expanden a código
        multipart o de autenticación específico del lenguaje — son propensas a errores al generarlas y varían
        según la biblioteca. Para esos casos, usa las utilidades dedicadas multipart/auth de tu cliente HTTP
        partiendo de la URL y las cabeceras ya analizadas.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      <code>curl</code> ist die universelle Sprache beim HTTP-Debugging — du kopierst einen Request aus den
      DevTools deines Browsers, aus dem README eines Kollegen oder aus der Stripe-Doku und möchtest denselben
      Request aus deinem eigenen Code absetzen. Dieser Konverter analysiert den curl-Befehl (URL, Methode,
      Header, Body) und erzeugt fertige Snippets für <strong>JavaScript Fetch</strong>, <strong>Axios</strong>
      und <strong>Python requests</strong>.
    </p>
    <div>
      <h2>Was ausgewertet wird</h2>
      <ul>
        <li>
          <strong>URL &amp; Methode</strong> — die Ziel-URL und das HTTP-Verb (<code>-X</code> /{' '}
          <code>--request</code>). Wenn du einen Body mit <code>-d</code> sendest, aber{' '}
          <code>-X</code> weglässt, wird die Methode automatisch zu <code>POST</code>.
        </li>
        <li>
          <strong>Header</strong> — jedes <code>-H</code> / <code>--header</code>{' '}
          <code>&quot;Key: Value&quot;</code>-Paar wird in ein Header-Objekt übernommen.
        </li>
        <li>
          <strong>Body</strong> — <code>-d</code> / <code>--data</code> /{' '}
          <code>--data-raw</code>-Bodys werden erkannt. Wenn der Body JSON ist (oder{' '}
          <code>Content-Type: application/json</code> gesetzt ist), verwendet Python <code>json=</code> und JS{' '}
          <code>JSON.stringify()</code>; sonst wird er als roher String gesendet.
        </li>
        <li>
          <strong>Quoting</strong> — einfache Anführungszeichen, doppelte Anführungszeichen,
          Backslash-Escapes und die ANSI-C-Syntax <code>$&apos;...&apos;</code> werden alles von einem
          handgeschriebenen Tokenizer behandelt.
        </li>
      </ul>
    </div>
    <div>
      <h2>JavaScript Fetch vs. Axios</h2>
      <p>
        Die Fetch-Ausgabe nutzt die native <code>fetch()</code>-API mit einem <code>await</code> auf{' '}
        <code>response.json()</code> — null Abhängigkeiten, funktioniert in Browsern und Node 18+. Die
        Axios-Ausgabe setzt voraus, dass <code>axios</code> installiert ist; sie erzeugt tendenziell kürzeren
        Code und wirft standardmäßig bei Statuscodes außerhalb des 2xx-Bereichs. Wähl das, was zur bestehenden
        HTTP-Schicht deines Projekts passt.
      </p>
    </div>
    <div>
      <h2>Was nicht konvertiert wird</h2>
      <p>
        Multipart-Formular-Uploads (<code>-F</code> / <code>--form</code>), Cookie-Jars (<code>-b</code>{' '}
        / <code>-c</code>) und die Authentifizierung per <code>-u user:pass</code> werden nicht zu
        sprachspezifischem Multipart- oder Auth-Code expandiert — sie korrekt zu erzeugen ist fehleranfällig
        und variiert je nach Bibliothek. Greif dafür auf die dedizierten Multipart/Auth-Helfer deines
        HTTP-Clients zurück und nutze die ausgewertete URL und Header als Ausgangspunkt.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CurlConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
