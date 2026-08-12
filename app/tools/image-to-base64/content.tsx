'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      A <strong>data URI</strong> embeds a file&apos;s contents directly inside a URL string, prefixed
      with <code>data:image/png;base64,…</code>. Inlining an image as a data URI means the browser does
      not make a separate HTTP request to fetch it — useful for tiny icons, email assets, and
      self-contained HTML/CSS demos. This tool converts any image you upload into a Base64 data URI
      ready to paste into HTML, CSS, or JSON.
    </p>
    <div>
      <h2>When to use a data URI</h2>
      <ul>
        <li>
          <strong>Small icons &amp; logos</strong> — a 2 KB logo saves a network round-trip by living
          inline in the CSS.
        </li>
        <li>
          <strong>Email signatures &amp; newsletters</strong> — many email clients block external
          images, so inline assets render reliably.
        </li>
        <li>
          <strong>Single-file demos</strong> — a self-contained HTML file with no external
          dependencies is easy to share and archive.
        </li>
        <li>
          <strong>JSON payloads</strong> — APIs that accept image uploads sometimes want a Base64
          string in the JSON body instead of multipart form data.
        </li>
      </ul>
    </div>
    <div>
      <h2>When NOT to use a data URI</h2>
      <p>
        Base64 encoding inflates file size by roughly <strong>33%</strong>, and a large data URI
        blocks the parser from rendering the page until it is decoded. For anything over a few
        kilobytes — hero photos, product images, videos — serve a real file with proper caching
        instead. Also, data URIs cannot be cached independently: if the same image appears on 50
        pages, each page carries its own copy.
      </p>
    </div>
    <div>
      <h2>Privacy and how it works</h2>
      <p>
        The conversion uses <code>FileReader.readAsDataURL()</code>, which reads the file into memory
        in your browser and produces the Base64 string locally. Your image is never uploaded to a
        server — which matters for private or sensitive assets, and also means the tool works offline
        once the page is loaded. Three output formats are provided: the raw data URI, a ready-to-paste{' '}
        <code>&lt;img&gt;</code> tag, and a CSS <code>background-image</code> declaration.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <strong>data URI</strong> 把文件内容直接嵌入到 URL 字符串中,以 <code>data:image/png;base64,…</code> 作为前缀。把图片以内联 data URI 的方式嵌入,意味着浏览器不需要发起单独的 HTTP 请求去获取它——这对小图标、邮件素材以及自包含的 HTML/CSS 演示很有用。本工具把你上传的任意图片转换为 Base64 data URI,可以直接粘贴到 HTML、CSS 或 JSON 中。
    </p>
    <div>
      <h2>何时使用 data URI</h2>
      <ul>
        <li>
          <strong>小图标与 Logo</strong> —— 一个 2 KB 的 Logo 内联在 CSS 中,可以省去一次网络往返。
        </li>
        <li>
          <strong>邮件签名与电子报</strong> —— 许多邮件客户端会屏蔽外部图片,内联素材能稳定渲染。
        </li>
        <li>
          <strong>单文件演示</strong> —— 一个无外部依赖的自包含 HTML 文件,便于分享和归档。
        </li>
        <li>
          <strong>JSON 负载</strong> —— 接受图片上传的 API 有时希望 JSON body 里是 Base64 字符串,而不是 multipart 表单数据。
        </li>
      </ul>
    </div>
    <div>
      <h2>何时不要使用 data URI</h2>
      <p>
        Base64 编码会让文件体积膨胀大约 <strong>33%</strong>,而一个大的 data URI 会阻塞解析器,直到它被解码完才能渲染页面。对于超过几 KB 的内容——首屏大图、商品图片、视频——请改用真实文件并配合恰当的缓存。此外,data URI 无法被独立缓存:如果同一张图片出现在 50 个页面上,每个页面都会自带一份副本。
      </p>
    </div>
    <div>
      <h2>隐私与工作原理</h2>
      <p>
        转换过程使用 <code>FileReader.readAsDataURL()</code>,它会在你的浏览器内把文件读入内存,并在本地生成 Base64 字符串。你的图片绝不会被上传到服务器——这对私密或敏感素材很重要,同时也意味着页面加载后本工具可离线使用。提供三种输出格式:原始 data URI、可直接粘贴的 <code>&lt;img&gt;</code> 标签,以及 CSS 的 <code>background-image</code> 声明。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Una <strong>data URI</strong> incrusta el contenido de un archivo directamente dentro de una cadena URL, con el prefijo <code>data:image/png;base64,…</code>. Incrustar una imagen como data URI significa que el navegador no hace una petición HTTP separada para obtenerla — útil para iconos pequeños, recursos de correo y demos autocontenidas de HTML/CSS. Esta herramienta convierte cualquier imagen que subas en una data URI en Base64 lista para pegar en HTML, CSS o JSON.
    </p>
    <div>
      <h2>Cuándo usar una data URI</h2>
      <ul>
        <li>
          <strong>Iconos y logos pequeños</strong> — un logo de 2 KB ahorra un viaje de red al vivir en línea dentro del CSS.
        </li>
        <li>
          <strong>Firmas de correo y newsletters</strong> — muchos clientes de correo bloquean las imágenes externas, así que los recursos en línea se renderizan de forma fiable.
        </li>
        <li>
          <strong>Demos de un solo archivo</strong> — un archivo HTML autocontenido, sin dependencias externas, es fácil de compartir y archivar.
        </li>
        <li>
          <strong>Payloads JSON</strong> — las API que aceptan subidas de imágenes a veces quieren una cadena Base64 en el cuerpo JSON en lugar de datos de formulario multipart.
        </li>
      </ul>
    </div>
    <div>
      <h2>Cuándo NO usar una data URI</h2>
      <p>
        La codificación Base64 infla el tamaño del archivo aproximadamente un <strong>33 %</strong>, y una data URI grande bloquea el analizador e impide que la página se renderice hasta que se decodifica. Para cualquier cosa de más de unos pocos kilobytes — fotos principales, imágenes de producto, vídeos — sirve mejor un archivo real con caché adecuada. Además, las data URIs no se pueden cachear de forma independiente: si la misma imagen aparece en 50 páginas, cada una lleva su propia copia.
      </p>
    </div>
    <div>
      <h2>Privacidad y cómo funciona</h2>
      <p>
        La conversión usa <code>FileReader.readAsDataURL()</code>, que lee el archivo en memoria dentro de tu navegador y produce la cadena Base64 localmente. Tu imagen nunca se sube a un servidor — lo cual importa para recursos privados o sensibles, y también significa que la herramienta funciona sin conexión una vez cargada la página. Se proporcionan tres formatos de salida: la data URI en bruto, una etiqueta <code>&lt;img&gt;</code> lista para pegar y una declaración CSS <code>background-image</code>.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Eine <strong>Data URI</strong> bettet den Inhalt einer Datei direkt in einen URL-String ein, mit dem Präfix <code>data:image/png;base64,…</code>. Eine Bild als Data URI einzubetten bedeutet, dass der Browser keine separate HTTP-Anfrage stellt, um es abzurufen — nützlich für kleine Icons, E-Mail-Assets und in sich geschlossene HTML/CSS-Demos. Dieses Werkzeug wandelt jedes Bild, das du hochlädst, in eine Base64-Data-URI um, die direkt in HTML, CSS oder JSON eingefügt werden kann.
    </p>
    <div>
      <h2>Wann du eine Data URI verwenden solltest</h2>
      <ul>
        <li>
          <strong>Kleine Icons &amp; Logos</strong> — ein 2-KB-Logo spart einen Netzwerk-Roundtrip, weil es inline im CSS lebt.
        </li>
        <li>
          <strong>E-Mail-Signaturen &amp; Newsletter</strong> — viele E-Mail-Clients blockieren externe Bilder, daher rendern Inline-Assets zuverlässig.
        </li>
        <li>
          <strong>Einzel-Datei-Demos</strong> — eine in sich geschlossene HTML-Datei ohne externe Abhängigkeiten lässt sich leicht teilen und archivieren.
        </li>
        <li>
          <strong>JSON-Payloads</strong> — APIs, die Bild-Uploads akzeptieren, möchten manchmal einen Base64-String im JSON-Body statt Multipart-Formulardaten.
        </li>
      </ul>
    </div>
    <div>
      <h2>Wann du KEINE Data URI verwenden solltest</h2>
      <p>
        Die Base64-Kodierung bläht die Dateigröße um etwa <strong>33 %</strong> auf, und eine große Data URI blockiert den Parser daran, die Seite zu rendern, bis sie dekodiert ist. Für alles über wenige Kilobyte — Hero-Fotos, Produktbilder, Videos — liefere stattdessen eine echte Datei mit richtigem Caching aus. Außerdem lassen sich Data URIs nicht unabhängig cachen: Wenn dasselbe Bild auf 50 Seiten erscheint, trägt jede Seite ihre eigene Kopie.
      </p>
    </div>
    <div>
      <h2>Datenschutz und Funktionsweise</h2>
      <p>
        Die Umwandlung verwendet <code>FileReader.readAsDataURL()</code>, das die Datei im Speicher deines Browsers liest und die Base64-Zeichenkette lokal erzeugt. Dein Bild wird nie auf einen Server hochgeladen — was für private oder sensible Assets wichtig ist und außerdem bedeutet, dass das Werkzeug offline funktioniert, sobald die Seite geladen ist. Es werden drei Ausgabeformate bereitgestellt: die rohe Data URI, ein zum Einfügen bereites <code>&lt;img&gt;</code>-Tag und eine CSS-<code>background-image</code>-Deklaration.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ImageToBase64Content(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
