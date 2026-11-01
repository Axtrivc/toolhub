'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Curl Converter 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中,faqs 已丢弃),DOM 级 SEO 安全。es/de 在客户端
 * hydration 后按 locale 切换。<code> 中的 curl 标志 (-X/-H/-d/-F/-k/-u 等)、
 * 代码片段 (fetch/axios/json= 等) 与专有名词保持不变。
 */

// ──────────────────────────── en (matches original rendering) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <code>curl</code>{' '}
      is the universal language of HTTP debugging &mdash; copy a request from your browser&apos;s
      DevTools, a colleague&apos;s README, or a Stripe doc, and you want to fire the same request from your own
      code. This converter parses the curl command (URL, method, headers, body) and emits ready-to-use
      snippets for <strong>JavaScript Fetch</strong>, <strong>Axios</strong>, and <strong>Python requests</strong>.
    </p>
    <div>
      <h2>What gets parsed</h2>
      <ul>
        <li>
          <strong>URL &amp; method</strong> &mdash; the target URL and the HTTP verb (<code>-X</code> /{' '}
          <code>--request</code>); <code>-I</code> / <code>--head</code> maps to a <code>HEAD</code>{' '}
          request. If you send a body with <code>-d</code> but omit{' '}
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
        output assumes you have <code>axios</code>{' '}
        installed; it tends to produce shorter code and
        throws on non-2xx status codes by default. Pick whichever matches your project&apos;s existing
        HTTP layer.
      </p>
    </div>
    <div>
      <h2>What is not converted</h2>
      <p>
        Multipart form uploads (<code>-F</code> / <code>--form</code>) and cookie jars (<code>-b</code>{' '}
        / <code>-c</code>) are not expanded into language-specific multipart code &mdash; they are noisy
        to generate correctly and vary by library. Basic auth (<code>-u user:pass</code>), on the other
        hand, <em>is</em> converted into an <code>Authorization: Basic</code>{' '}
        header automatically. For
        the rest, use your HTTP client&apos;s dedicated multipart helpers with the parsed URL and
        headers as a starting point.
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
      de tu navegador, del README de un colega o de la documentación de Stripe, y quieres hacer la misma
      petición desde tu propio código. Este conversor analiza el comando curl (URL, método, cabeceras, cuerpo)
      y genera fragmentos listos para usar en <strong>JavaScript Fetch</strong>, <strong>Axios</strong> y{' '}
      <strong>Python requests</strong>.
    </p>
    <div>
      <h2>Qué se analiza</h2>
      <ul>
        <li>
          <strong>URL y método</strong> — la URL de destino y el verbo HTTP (<code>-X</code> /{' '}
          <code>--request</code>); <code>-I</code> / <code>--head</code> se convierte en una petición{' '}
          <code>HEAD</code>. Si envías un cuerpo con <code>-d</code> pero omites{' '}
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
          <strong>Entrecomillado</strong> — las comillas simples, dobles, las barras invertidas de escape y la
          sintaxis ANSI-C <code>$&apos;...&apos;</code> se gestionan con un analizador léxico escrito a mano.
        </li>
      </ul>
    </div>
    <div>
      <h2>JavaScript Fetch frente a Axios</h2>
      <p>
        La salida de Fetch usa la API nativa <code>fetch()</code> con un <code>await</code> sobre{' '}
        <code>response.json()</code> — cero dependencias, funciona en navegadores y Node 18+. La salida de
        Axios asume que tienes <code>axios</code> instalado; tiende a producir código más corto y por defecto
        lanza una excepción con los códigos de estado fuera del rango 2xx. Elige la que coincida con la capa HTTP
        existente de tu proyecto.
      </p>
    </div>
    <div>
      <h2>Lo que no se convierte</h2>
      <p>
        Las subidas de formularios multipart (<code>-F</code> / <code>--form</code>) y las cookie jars (<code>-b</code>{' '}
        / <code>-c</code>) no se expanden a código multipart específico del lenguaje — son propensas a
        errores al generarlas y varían según la biblioteca. La autenticación básica (<code>-u user:pass</code>),
        en cambio, sí se convierte automáticamente en una cabecera <code>Authorization: Basic</code>. Para el
        resto, usa las utilidades multipart dedicadas de tu cliente HTTP, tomando la URL y las cabeceras
        ya analizadas como punto de partida.
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
      Header, Body) und erzeugt fertige Snippets für <strong>JavaScript Fetch</strong>, <strong>Axios</strong>{' '}
      und <strong>Python requests</strong>.
    </p>
    <div>
      <h2>Was geparst wird</h2>
      <ul>
        <li>
          <strong>URL &amp; Methode</strong> — die Ziel-URL und das HTTP-Verb (<code>-X</code> /{' '}
          <code>--request</code>); <code>-I</code> / <code>--head</code> wird zu einer{' '}
          <code>HEAD</code>-Anfrage. Wenn du einen Body mit <code>-d</code> sendest, aber{' '}
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
          Backslash-Escapes und die ANSI-C-Syntax <code>$&apos;...&apos;</code> werden alle von einem
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
        Code und löst standardmäßig bei Statuscodes außerhalb des 2xx-Bereichs eine Ausnahme aus. Wähl das,
        was zur bestehenden HTTP-Schicht deines Projekts passt.
      </p>
    </div>
    <div>
      <h2>Was nicht konvertiert wird</h2>
      <p>
        Multipart-Formular-Uploads (<code>-F</code> / <code>--form</code>) und Cookie-Jars (<code>-b</code>{' '}
        / <code>-c</code>) werden nicht zu sprachspezifischem Multipart-Code expandiert — sie korrekt zu
        erzeugen ist fehleranfällig, und der resultierende Code variiert je nach Bibliothek. Basic-Auth per{' '}
        <code>-u user:pass</code> hingegen wird automatisch in einen <code>Authorization: Basic</code>-Header
        umgesetzt. Für den Rest greif auf die dedizierten Multipart-Helfer deines HTTP-Clients zurück und nutze
        die geparste URL und die Header als Ausgangspunkt.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CurlConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
