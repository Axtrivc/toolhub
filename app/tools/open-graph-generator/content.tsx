'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      When someone pastes your link into Facebook, X, LinkedIn, Slack, or Discord, the platform reads
      special <code>&lt;meta&gt;</code> tags in your page to build the title, description, and image
      card. Getting those tags right is the difference between a link that gets clicked and one that
      looks broken. This tool lets you fill in the fields and <strong>see the preview live</strong> while
      it generates the full set of Open Graph and Twitter Card tags.
    </p>
    <div>
      <h2>Open Graph vs Twitter Cards</h2>
      <p>
        <strong>Open Graph</strong> (<code>og:</code> prefix) was created by Facebook and is now read
        by almost every platform — Facebook, LinkedIn, Slack, Discord, Telegram, iMessage.{' '}
        <strong>Twitter Cards</strong> (<code>twitter:</code> prefix) are X/Twitter-specific, but
        Twitter falls back to Open Graph when its own tags are missing. Generating both means your
        preview looks correct everywhere with no guesswork.
      </p>
    </div>
    <div>
      <h2>Choosing the right image</h2>
      <p>
        For <code>og:image</code> and <code>twitter:image</code>, use a <strong>1.91:1</strong> ratio
        at <strong>1200×630px</strong>, kept under ~1 MB and in JPG or PNG. Square images
        (1080×1080) work for the <code>summary</code> card type but get cropped on platforms that
        expect the wide ratio. Always use an absolute URL (including <code>https://</code>) for the
        image — relative paths do not work.
      </p>
    </div>
    <div>
      <h2>Why your deployed preview still looks wrong</h2>
      <p>
        Platforms cache previews aggressively, sometimes for days. After deploying your tags, force a
        re-scrape with the{' '}
        <strong>Facebook Sharing Debugger</strong>,{' '}
        <strong>Twitter Card Validator</strong>, or{' '}
        <strong>LinkedIn Post Inspector</strong>. Critically, the tags must live in the raw server
        HTML (SSR or static) — crawlers that do not run JavaScript cannot see tags injected by a
        client-side framework at runtime.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      当有人把你的链接粘贴到 Facebook、X、LinkedIn、Slack 或 Discord 时,平台会读取页面中特殊的{' '}
      <code>&lt;meta&gt;</code> 标签来生成标题、描述和图片卡片。把这些标签写对,是决定链接被点击还是看起来像坏链的关键。本工具让你填写各字段,并在生成完整 Open Graph 与 Twitter Card 标签的同时<strong>实时预览</strong>效果。
    </p>
    <div>
      <h2>Open Graph 与 Twitter Cards</h2>
      <p>
        <strong>Open Graph</strong>(<code>og:</code> 前缀)由 Facebook 创建,如今几乎被所有平台读取——Facebook、LinkedIn、Slack、Discord、Telegram、iMessage。{' '}
        <strong>Twitter Cards</strong>(<code>twitter:</code> 前缀)是 X/Twitter 专属,但当其自身标签缺失时,Twitter 会回退到 Open Graph。同时生成两者,意味着你的预览在任何地方都正确,无需猜测。
      </p>
    </div>
    <div>
      <h2>选择合适的图片</h2>
      <p>
        对于 <code>og:image</code> 和 <code>twitter:image</code>,使用 <strong>1.91:1</strong> 比例、<strong>1200×630px</strong> 的图片,控制在约 1 MB 以内,格式为 JPG 或 PNG。正方形图片(1080×1080)适用于 <code>summary</code> 卡片类型,但在期望宽比例的平台上会被裁剪。图片务必使用绝对网址(包含 <code>https://</code>)——相对路径无效。
      </p>
    </div>
    <div>
      <h2>为什么部署后预览仍然不对</h2>
      <p>
        平台会激进地缓存预览,有时长达数天。部署标签后,使用{' '}
        <strong>Facebook Sharing Debugger</strong>、{' '}
        <strong>Twitter Card Validator</strong> 或{' '}
        <strong>LinkedIn Post Inspector</strong> 强制重新抓取。关键的是,这些标签必须存在于服务器原始 HTML(SSR 或静态)中——不执行 JavaScript 的爬虫无法看到由客户端框架在运行时注入的标签。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Cuando alguien pega tu enlace en Facebook, X, LinkedIn, Slack o Discord, la plataforma lee
      etiquetas <code>&lt;meta&gt;</code> especiales de tu página para construir el título, la
      descripción y la tarjeta de imagen. Configurar bien esas etiquetas es la diferencia entre un
      enlace que recibe clics y uno que parece roto. Esta herramienta te permite rellenar los campos y{' '}
      <strong>ver la vista previa en vivo</strong> mientras genera el conjunto completo de etiquetas
      Open Graph y Twitter Card.
    </p>
    <div>
      <h2>Open Graph frente a Twitter Cards</h2>
      <p>
        <strong>Open Graph</strong> (prefijo <code>og:</code>) fue creado por Facebook y hoy lo leen
        casi todas las plataformas — Facebook, LinkedIn, Slack, Discord, Telegram, iMessage. Las{' '}
        <strong>Twitter Cards</strong> (prefijo <code>twitter:</code>) son específicas de X/Twitter,
        pero Twitter recurre a Open Graph cuando faltan sus propias etiquetas. Generar ambas significa
        que tu vista previa se ve correcta en todas partes, sin conjeturas.
      </p>
    </div>
    <div>
      <h2>Elegir la imagen adecuada</h2>
      <p>
        Para <code>og:image</code> y <code>twitter:image</code>, usa una proporción{' '}
        <strong>1.91:1</strong> a <strong>1200×630px</strong>, por debajo de ~1 MB y en JPG o PNG. Las
        imágenes cuadradas (1080×1080) funcionan para el tipo de tarjeta <code>summary</code>, pero se
        recortan en plataformas que esperan la proporción amplia. Usa siempre una URL absoluta
        (incluido <code>https://</code>) para la imagen — las rutas relativas no funcionan.
      </p>
    </div>
    <div>
      <h2>Por qué tu vista previa desplegada sigue viéndose mal</h2>
      <p>
        Las plataformas almacenan las vistas previas en caché de forma agresiva, a veces durante días.
        Tras desplegar tus etiquetas, fuerza un nuevo rastreo con el{' '}
        <strong>Facebook Sharing Debugger</strong>, el{' '}
        <strong>Twitter Card Validator</strong> o el{' '}
        <strong>LinkedIn Post Inspector</strong>. Lo crítico es que las etiquetas deben estar en el
        HTML sin procesar del servidor (SSR o estático) — los rastreadores que no ejecutan JavaScript
        no pueden ver las etiquetas inyectadas por un framework del lado del cliente en tiempo de
        ejecución.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Wenn jemand deinen Link in Facebook, X, LinkedIn, Slack oder Discord einfügt, liest die
      Plattform besondere <code>&lt;meta&gt;</code>-Tags auf deiner Seite, um Titel, Beschreibung und
      Bildkarte zu erzeugen. Diese Tags richtig zu setzen, ist der Unterschied zwischen einem Link,
      auf den geklickt wird, und einem, der kaputt wirkt. Dieses Werkzeug lässt dich die Felder
      ausfüllen und <strong>die Vorschau live sehen</strong>, während es den kompletten Satz an
      Open-Graph- und Twitter-Card-Tags erzeugt.
    </p>
    <div>
      <h2>Open Graph vs. Twitter Cards</h2>
      <p>
        <strong>Open Graph</strong> (Präfix <code>og:</code>) wurde von Facebook entwickelt und wird
        heute von fast jeder Plattform gelesen — Facebook, LinkedIn, Slack, Discord, Telegram,
        iMessage. <strong>Twitter Cards</strong> (Präfix <code>twitter:</code>) sind
        X/Twitter-spezifisch, aber Twitter greift auf Open Graph zurück, wenn die eigenen Tags fehlen.
        Wenn du beide erzeugst, sieht deine Vorschau überall korrekt aus, ohne Rätselraten.
      </p>
    </div>
    <div>
      <h2>Das passende Bild wählen</h2>
      <p>
        Verwende für <code>og:image</code> und <code>twitter:image</code> ein Seitenverhältnis von{' '}
        <strong>1.91:1</strong> bei <strong>1200×630px</strong>, unter ~1 MB und als JPG oder PNG.
        Quadratische Bilder (1080×1080) funktionieren für den Kartentyp <code>summary</code>, werden
        aber auf Plattformen, die das breite Verhältnis erwarten, abgeschnitten. Verwende für das Bild
        immer eine absolute URL (inklusive <code>https://</code>) — relative Pfade funktionieren
        nicht.
      </p>
    </div>
    <div>
      <h2>Warum deine Live-Vorschau immer noch falsch aussieht</h2>
      <p>
        Plattformen cachen Vorschauen aggressiv, manchmal tagelang. Erzwinge nach dem Deployment
        deiner Tags einen neuen Abruf mit dem <strong>Facebook Sharing Debugger</strong>, dem{' '}
        <strong>Twitter Card Validator</strong> oder dem{' '}
        <strong>LinkedIn Post Inspector</strong>. Entscheidend ist, dass die Tags im rohen
        Server-HTML (SSR oder statisch) stehen müssen — Crawler, die kein JavaScript ausführen, können
        Tags, die ein clientseitiges Framework zur Laufzeit einfügt, nicht sehen.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function OpenGraphGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
