'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is a URL Slug?</h2>
    <p>
      A <strong>URL slug</strong> is the human-readable part of a web address that identifies a
      specific page. In the URL <code>example.com/blog/{`{slug}`}</code>, the slug is the
      descriptive text at the end — for example, <code>how-to-brew-coffee</code> in{' '}
      <code>example.com/blog/how-to-brew-coffee</code>. A well-crafted slug tells both readers and
      search engines what the page is about before anyone clicks.
    </p>

    <h2>Why Do Slugs Matter for SEO?</h2>
    <p>Search engines like Google use the URL as one of many signals to understand a page&apos;s topic. A clean, descriptive slug contributes to rankings in three concrete ways:</p>
    <ul>
      <li>
        <strong>Keyword relevance.</strong> When the slug contains the target keyword (e.g.{' '}
        <code>best-coffee-grinders</code>), it reinforces the page&apos;s topic. Google has
        confirmed that words in the URL are a (minor) ranking signal.
      </li>
      <li>
        <strong>Click-through rate.</strong> A readable URL like{' '}
        <code>/seo-slug-guide</code> earns more clicks in search results than a cryptic one like{' '}
        <code>/p=12345</code> or <code>/2024/01/15/post-id-987</code>.
      </li>
      <li>
        <strong>Anchor text when linked.</strong> Other sites often paste the raw URL as the link
        text. A descriptive slug becomes natural anchor text, which helps search engines understand
        the link context.
      </li>
    </ul>

    <h2>What Makes a Good Slug?</h2>
    <p>Follow these rules and your slugs will be both SEO-friendly and user-friendly:</p>
    <ol>
      <li>
        <strong>Keep it short.</strong> Aim for 3–5 words. Long slugs dilute keyword weight and get
        truncated in search results. <code>best-coffee-grinders</code> beats{' '}
        <code>the-absolute-best-coffee-grinders-for-home-use-in-2026</code>.
      </li>
      <li>
        <strong>Use lowercase.</strong> URLs are technically case-sensitive on many servers, and
        mixed case causes duplicate-content issues. Lowercase is the safe convention.
      </li>
      <li>
        <strong>Separate words with hyphens.</strong> Google treats hyphens (<code>-</code>) as
        word separators but ignores underscores (<code>_</code>). Always prefer{' '}
        <code>how-to-brew</code> over <code>how_to_brew</code>.
      </li>
      <li>
        <strong>Strip stop words.</strong> Articles and prepositions like &quot;the,&quot;
        &quot;a,&quot; &quot;of,&quot; &quot;for&quot; add length without value.{' '}
        <code>best-coffee-grinders</code> is better than <code>the-best-coffee-grinders-for-you</code>.
      </li>
      <li>
        <strong>Remove special characters.</strong> Avoid apostrophes, quotes, parentheses, and
        accents. They must be percent-encoded in URLs, producing ugly strings like{' '}
        <code>%26</code> or <code>%e2%80%99</code>.
      </li>
    </ol>

    <h2>How This Slug Generator Works</h2>
    <p>
      This tool runs entirely in your browser — no data is sent to any server. When you type a
      title, it applies the following pipeline in real time:
    </p>
    <ol>
      <li>Normalizes Unicode (so <code>café</code> becomes <code>cafe</code>).</li>
      <li>Lowercases the text if the option is enabled.</li>
      <li>Removes special characters, keeping only letters, numbers, and spaces.</li>
      <li>Replaces spaces with your chosen separator (hyphen by default).</li>
      <li>Collapses multiple separators and trims leading/trailing ones.</li>
    </ol>
    <p>The result is a clean, URL-safe string ready to paste into your CMS, static site generator, or routing config.</p>

    <h2>Slug Examples</h2>
    <p>Here are a few real-world conversions to show what to expect:</p>
    <ul>
      <li>
        <code>10 SEO Tips for Better Rankings</code> → <code>10-seo-tips-for-better-rankings</code>
      </li>
      <li>
        <code>How to Use Node.js with Docker</code> → <code>how-to-use-nodejs-with-docker</code>
      </li>
      <li>
        <code>Café &amp; Résumé Guide (2026)</code> → <code>cafe-resume-guide-2026</code>
      </li>
      <li>
        <code>What is a Slug? — Complete Guide</code> → <code>what-is-a-slug-complete-guide</code>
      </li>
    </ul>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>什么是 URL 别名?</h2>
    <p>
      <strong>URL 别名(slug)</strong>是网址中可读的部分,用于标识特定页面。在网址 <code>example.com/blog/{`{slug}`}</code> 中,别名就是末尾的描述性文本 —— 例如 <code>example.com/blog/how-to-brew-coffee</code> 里的 <code>how-to-brew-coffee</code>。一个精心设计的别名能在任何人点击之前就告诉读者和搜索引擎这个页面是关于什么的。
    </p>

    <h2>为什么别名对 SEO 很重要?</h2>
    <p>Google 等搜索引擎会把网址作为理解页面主题的众多信号之一。简洁、具描述性的别名会从三个方面切实提升排名:</p>
    <ul>
      <li>
        <strong>关键词相关性。</strong>当别名包含目标关键词(如 <code>best-coffee-grinders</code>)时,会强化页面主题。Google 已确认网址中的词是一个(次要的)排名信号。
      </li>
      <li>
        <strong>点击率。</strong>像 <code>/seo-slug-guide</code> 这样可读的网址,在搜索结果中比 <code>/p=12345</code> 或 <code>/2024/01/15/post-id-987</code> 这类晦涩网址获得更多点击。
      </li>
      <li>
        <strong>被链接时的锚文本。</strong>其他网站常把原始网址直接当作链接文本粘贴。具描述性的别名会变成自然的锚文本,帮助搜索引擎理解链接的语境。
      </li>
    </ul>

    <h2>什么样的别名才是好别名?</h2>
    <p>遵循这些规则,你的别名就能既利于 SEO 又对用户友好:</p>
    <ol>
      <li>
        <strong>保持简短。</strong>目标 3–5 个词。过长的别名会稀释关键词权重,并在搜索结果中被截断。<code>best-coffee-grinders</code> 胜过 <code>the-absolute-best-coffee-grinders-for-home-use-in-2026</code>。
      </li>
      <li>
        <strong>使用小写。</strong>许多服务器上网址在技术上区分大小写,混用大小写会导致重复内容问题。小写是最稳妥的惯例。
      </li>
      <li>
        <strong>用连字符分隔单词。</strong>Google 把连字符(<code>-</code>)当作单词分隔符,但忽略下划线(<code>_</code>)。始终优先使用 <code>how-to-brew</code> 而非 <code>how_to_brew</code>。
      </li>
      <li>
        <strong>去掉停用词。</strong>冠词和介词(如「the」「a」「of」「for」)只增加长度却不带来价值。<code>best-coffee-grinders</code> 比 <code>the-best-coffee-grinders-for-you</code> 更好。
      </li>
      <li>
        <strong>移除特殊字符。</strong>避免撇号、引号、括号和重音符号。它们在网址中必须做百分号编码,生成像 <code>%26</code> 或 <code>%e2%80%99</code> 这样难看的字符串。
      </li>
    </ol>

    <h2>这款别名生成器的工作原理</h2>
    <p>
      本工具完全在你的浏览器中运行 —— 不会向任何服务器发送数据。当你输入标题时,它会实时执行以下处理流程:
    </p>
    <ol>
      <li>归一化 Unicode(使 <code>café</code> 变为 <code>cafe</code>)。</li>
      <li>若开启选项,则将文本转为小写。</li>
      <li>移除特殊字符,只保留字母、数字和空格。</li>
      <li>用你选择的分隔符(默认连字符)替换空格。</li>
      <li>合并多个连续的分隔符,并去除首尾的分隔符。</li>
    </ol>
    <p>最终结果是一段干净、URL 安全的字符串,可直接粘贴到你的 CMS、静态站点生成器或路由配置中。</p>

    <h2>别名示例</h2>
    <p>这里有几个真实场景的转换,展示你可以期待的结果:</p>
    <ul>
      <li>
        <code>10 SEO Tips for Better Rankings</code> → <code>10-seo-tips-for-better-rankings</code>
      </li>
      <li>
        <code>How to Use Node.js with Docker</code> → <code>how-to-use-nodejs-with-docker</code>
      </li>
      <li>
        <code>Café &amp; Résumé Guide (2026)</code> → <code>cafe-resume-guide-2026</code>
      </li>
      <li>
        <code>What is a Slug? — Complete Guide</code> → <code>what-is-a-slug-complete-guide</code>
      </li>
    </ul>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es un slug de URL?</h2>
    <p>
      Un <strong>slug de URL</strong> es la parte legible de una dirección web que identifica una
      página concreta. En la URL <code>example.com/blog/{`{slug}`}</code>, el slug es el texto
      descriptivo del final — por ejemplo, <code>how-to-brew-coffee</code> en{' '}
      <code>example.com/blog/how-to-brew-coffee</code>. Un slug bien elaborado indica a lectores y
      motores de búsqueda de qué trata la página antes de que nadie haga clic.
    </p>

    <h2>¿Por qué importan los slugs para el SEO?</h2>
    <p>Los motores de búsqueda como Google usan la URL como una de muchas señales para entender el tema de una página. Un slug limpio y descriptivo contribuye al ranking de tres formas concretas:</p>
    <ul>
      <li>
        <strong>Relevancia de palabras clave.</strong> Cuando el slug contiene la palabra clave
        objetivo (p. ej. <code>best-coffee-grinders</code>), refuerza el tema de la página. Google
        ha confirmado que las palabras en la URL son una señal de ranking (menor).
      </li>
      <li>
        <strong>Tasa de clics.</strong> Una URL legible como <code>/seo-slug-guide</code> obtiene
        más clics en los resultados de búsqueda que una críptica como <code>/p=12345</code> o{' '}
        <code>/2024/01/15/post-id-987</code>.
      </li>
      <li>
        <strong>Texto ancla al enlazar.</strong> Otros sitios suelen pegar la URL sin formato como
        texto del enlace. Un slug descriptivo se convierte en texto ancla natural, lo que ayuda a
        los buscadores a entender el contexto del enlace.
      </li>
    </ul>

    <h2>¿Qué hace bueno a un slug?</h2>
    <p>Sigue estas reglas y tus slugs serán amigables tanto para el SEO como para el usuario:</p>
    <ol>
      <li>
        <strong>Mantenlo corto.</strong> Apunta a 3–5 palabras. Los slugs largos diluyen el peso de
        la palabra clave y se truncan en los resultados de búsqueda. <code>best-coffee-grinders</code>{' '}
        vence a <code>the-absolute-best-coffee-grinders-for-home-use-in-2026</code>.
      </li>
      <li>
        <strong>Usa minúsculas.</strong> Las URL distinguen mayúsculas y minúsculas en muchos
        servidores, y mezclar mayúsculas provoca problemas de contenido duplicado. Las minúsculas
        son la convención segura.
      </li>
      <li>
        <strong>Separa las palabras con guiones.</strong> Google trata los guiones (<code>-</code>)
        como separadores de palabras pero ignora los guiones bajos (<code>_</code>). Prefiere siempre{' '}
        <code>how-to-brew</code> frente a <code>how_to_brew</code>.
      </li>
      <li>
        <strong>Elimina las palabras vacías.</strong> Artículos y preposiciones como «the», «a»,
        «of», «for» añaden longitud sin valor. <code>best-coffee-grinders</code> es mejor que{' '}
        <code>the-best-coffee-grinders-for-you</code>.
      </li>
      <li>
        <strong>Quita los caracteres especiales.</strong> Evita apóstrofos, comillas, paréntesis y
        acentos. Deben codificarse porcentualmente en las URL, produciendo cadenas feas como{' '}
        <code>%26</code> o <code>%e2%80%99</code>.
      </li>
    </ol>

    <h2>Cómo funciona este generador de slugs</h2>
    <p>
      Esta herramienta se ejecuta completamente en tu navegador — no se envían datos a ningún
      servidor. Cuando escribes un título, aplica la siguiente canalización en tiempo real:
    </p>
    <ol>
      <li>Normaliza Unicode (así <code>café</code> pasa a <code>cafe</code>).</li>
      <li>Pasa el texto a minúsculas si la opción está activada.</li>
      <li>Elimina los caracteres especiales, conservando solo letras, números y espacios.</li>
      <li>Sustituye los espacios por el separador que elijas (guion por defecto).</li>
      <li>Colapsa varios separadores seguidos y recorta los del principio y final.</li>
    </ol>
    <p>El resultado es una cadena limpia y segura para URL, lista para pegar en tu CMS, generador de sitios estáticos o configuración de enrutado.</p>

    <h2>Ejemplos de slugs</h2>
    <p>Aquí tienes algunas conversiones reales para que veas qué esperar:</p>
    <ul>
      <li>
        <code>10 SEO Tips for Better Rankings</code> → <code>10-seo-tips-for-better-rankings</code>
      </li>
      <li>
        <code>How to Use Node.js with Docker</code> → <code>how-to-use-nodejs-with-docker</code>
      </li>
      <li>
        <code>Café &amp; Résumé Guide (2026)</code> → <code>cafe-resume-guide-2026</code>
      </li>
      <li>
        <code>What is a Slug? — Complete Guide</code> → <code>what-is-a-slug-complete-guide</code>
      </li>
    </ul>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist ein URL-Slug?</h2>
    <p>
      Ein <strong>URL-Slug</strong> ist der lesbare Teil einer Webadresse, der eine bestimmte Seite
      identifiziert. In der URL <code>example.com/blog/{`{slug}`}</code> ist der Slug der
      beschreibende Text am Ende — zum Beispiel <code>how-to-brew-coffee</code> in{' '}
      <code>example.com/blog/how-to-brew-coffee</code>. Ein gut gestalteter Slug verrät Lesern und
      Suchmaschinen, worum es auf der Seite geht, noch bevor jemand klickt.
    </p>

    <h2>Warum sind Slugs für SEO wichtig?</h2>
    <p>Suchmaschinen wie Google nutzen die URL als eines von vielen Signalen, um das Thema einer Seite zu verstehen. Ein sauberer, beschreibender Slug trägt auf drei konkrete Arten zum Ranking bei:</p>
    <ul>
      <li>
        <strong>Keyword-Relevanz.</strong> Wenn der Slug das Ziel-Keyword enthält (z. B.{' '}
        <code>best-coffee-grinders</code>), unterstreicht er das Thema der Seite. Google hat
        bestätigt, dass Wörter in der URL ein (geringes) Ranking-Signal sind.
      </li>
      <li>
        <strong>Klickrate.</strong> Eine lesbare URL wie <code>/seo-slug-guide</code> erhält in den
        Suchergebnissen mehr Klicks als eine kryptische wie <code>/p=12345</code> oder{' '}
        <code>/2024/01/15/post-id-987</code>.
      </li>
      <li>
        <strong>Ankertext beim Verlinken.</strong> Andere Seiten fügen oft die rohe URL als
        Linktext ein. Ein beschreibender Slug wird zu natürlichem Ankertext, was Suchmaschinen hilft,
        den Kontext des Links zu verstehen.
      </li>
    </ul>

    <h2>Was macht einen guten Slug aus?</h2>
    <p>Halte dich an diese Regeln und deine Slugs sind sowohl SEO-freundlich als auch nutzerfreundlich:</p>
    <ol>
      <li>
        <strong>Halte es kurz.</strong> Strebe 3–5 Wörter an. Lange Slugs verwässern das
        Keyword-Gewicht und werden in den Suchergebnissen abgeschnitten. <code>best-coffee-grinders</code>{' '}
        schlägt <code>the-absolute-best-coffee-grinders-for-home-use-in-2026</code>.
      </li>
      <li>
        <strong>Verwende Kleinbuchstaben.</strong> URLs sind auf vielen Servern technisch
        case-sensitiv, und gemischte Schreibweise führt zu Duplicate-Content-Problemen.
        Kleinbuchstaben sind die sichere Konvention.
      </li>
      <li>
        <strong>Trenne Wörter mit Bindestrichen.</strong> Google behandelt Bindestriche (<code>-</code>)
        als Worttrenner, ignoriert aber Unterstriche (<code>_</code>). Bevorzuge immer{' '}
        <code>how-to-brew</code> gegenüber <code>how_to_brew</code>.
      </li>
      <li>
        <strong>Streiche Füllwörter.</strong> Artikel und Präpositionen wie „the", „a", „of", „for"
        verlängern ohne Mehrwert. <code>best-coffee-grinders</code> ist besser als{' '}
        <code>the-best-coffee-grinders-for-you</code>.
      </li>
      <li>
        <strong>Entferne Sonderzeichen.</strong> Vermeide Apostrophe, Anführungszeichen, Klammern und
        Akzente. Sie müssen in URLs prozentkodiert werden und erzeugen hässliche Zeichenketten wie{' '}
        <code>%26</code> oder <code>%e2%80%99</code>.
      </li>
    </ol>

    <h2>Wie dieser Slug-Generator funktioniert</h2>
    <p>
      Dieses Werkzeug läuft vollständig in deinem Browser — es werden keine Daten an einen Server
      gesendet. Wenn du einen Titel eingibst, wendet es in Echtzeit folgende Pipeline an:
    </p>
    <ol>
      <li>Normalisiert Unicode (aus <code>café</code> wird <code>cafe</code>).</li>
      <li>Wandelt den Text in Kleinbuchstaben um, wenn die Option aktiviert ist.</li>
      <li>Entfernt Sonderzeichen und behält nur Buchstaben, Zahlen und Leerzeichen.</li>
      <li>Ersetzt Leerzeichen durch dein gewähltes Trennzeichen (standardmäßig Bindestrich).</li>
      <li>Fasst mehrere Trennzeichen zusammen und entfernt führende/abschließende.</li>
    </ol>
    <p>Das Ergebnis ist eine saubere, URL-sichere Zeichenkette, die du direkt in dein CMS, deinen Static-Site-Generator oder deine Routing-Konfiguration einfügen kannst.</p>

    <h2>Slug-Beispiele</h2>
    <p>Hier sind ein paar reale Umwandlungen, damit du weißt, was du erwarten kannst:</p>
    <ul>
      <li>
        <code>10 SEO Tips for Better Rankings</code> → <code>10-seo-tips-for-better-rankings</code>
      </li>
      <li>
        <code>How to Use Node.js with Docker</code> → <code>how-to-use-nodejs-with-docker</code>
      </li>
      <li>
        <code>Café &amp; Résumé Guide (2026)</code> → <code>cafe-resume-guide-2026</code>
      </li>
      <li>
        <code>What is a Slug? — Complete Guide</code> → <code>what-is-a-slug-complete-guide</code>
      </li>
    </ul>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SlugGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
