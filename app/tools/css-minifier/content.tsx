'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CssMinifier 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Where the bytes actually go</h2>
    <p>Hand-written CSS is mostly air: indentation, one declaration per line, section comments. Stripping comments and collapsing whitespace typically cuts 15-30% — but gzip squeezes whitespace extremely well, so the honest network win is smaller than the byte counter suggests. What minification really buys is parse time, a stable cache hash for a smaller artifact, and CSS small enough to inline above the fold without wrecking the HTML.</p>
    <h2>The traps a minifier must not spring</h2>
    <p>calc() requires whitespace around + and − — remove it and the declaration is dead. div :hover and div:hover are different selectors, so space before a colon stays. 0% and 0 are not interchangeable inside flex-basis. And string content (content: "…", font names, url()) must never be re-spaced. This tool pulls strings and /*! banners out as placeholders before touching whitespace, then folds only what is provably safe: 0px→0, 0.5→.5, trailing semicolons, empty rules.</p>
    <h2>Why it refuses to merge rules</h2>
    <p>Aggressive minifiers rewrite .a&#123;color:red&#125; .b&#123;color:red&#125; into .a,.b&#123;color:red&#125; — and when merged selectors have differing specificity or order-dependent overrides, the cascade shifts and a page 2,000 lines away quietly breaks. Byte-level folds never change meaning; selector merging sometimes does. The 5-10% extra compression is not worth a stylesheet that needs visual regression testing to trust.</p>
    <h2>When to minify, and when not to</h2>
    <p>Ship minified: production bundles, inlined critical CSS, style blocks inside components destined for publish. Keep readable: anything a teammate will open in devtools with the original sources available — source maps are the proper bridge, and a build pipeline (esbuild, cssnano, Lightning CSS) automates this. This tool is for the one-off paste: the email template, the CMS theme field, the quick fix that needs to be small right now.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>字节到底花在哪</h2>
    <p>手写 CSS 大半是空气:缩进、一行一条声明、分节注释。剥掉注释、折叠空白通常省 15-30%——但 gzip 本身就极擅长压空白,网络层的真实收益比字节计数器暗示的小。压缩真正买到的是解析时间、更小产物对应的稳定缓存指纹,以及小到可以内联进首屏而不拖累 HTML 的 CSS。</p>
    <h2>压缩器绝不能踩的坑</h2>
    <p>calc() 内 + 和 − 两侧必须有空白——删掉,整条声明就死了。div :hover 与 div:hover 是两个选择器,所以冒号前的空格要保留。0% 与 0 在 flex-basis 里不能互换。字符串内容(content: "…"、字体名、url())更是碰都碰不得。本工具先把字符串与 /*! 横幅抽成占位符再做空白处理,之后只做可证明安全的折叠:0px→0、0.5→.5、末尾分号、空规则。</p>
    <h2>为什么拒绝合并规则</h2>
    <p>激进压缩器会把 .a&#123;color:red&#125; .b&#123;color:red&#125; 改写成 .a,.b&#123;color:red&#125;——一旦被合并的选择器优先级不同或依赖覆盖顺序,层叠就变了,两千行之外的页面悄悄坏掉。字节级折叠永不改变语义;选择器合并偶尔会。多压 5-10% 不值得让样式表必须靠视觉回归测试才能信任。</p>
    <h2>何时压缩,何时不</h2>
    <p>该用压缩产物的:生产 bundle、内联关键 CSS、要发布的组件内样式块。该保留可读的:队友会在 devtools 里翻、且能拿到原始源码的场景——source map 才是正确的桥,构建管线(esbuild、cssnano、Lightning CSS)会自动完成。本工具服务的是一次性粘贴:邮件模板、CMS 主题字段、当下就要变小的临时修补。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Dónde van realmente los bytes</h2>
    <p>El CSS escrito a mano es sobre todo aire: sangrías, una declaración por línea, comentarios de sección. Quitar comentarios y colapsar espacios recorta típicamente un 15-30 % — pero gzip comprime el blanco buenísimo, así que la ganancia honesta en red es menor de lo que sugiere el contador. Lo que de verdad compra la minificación es tiempo de parseo, un hash de caché estable para un artefacto menor y un CSS lo bastante compacto para inlinerlo above the fold sin destrozar el HTML.</p>
    <h2>Las trampas que un minificador no debe pisar</h2>
    <p>calc() exige espacios alrededor de + y −: quítalos y la declaración muere. div :hover y div:hover son selectores distintos, así que el espacio antes de los dos puntos se queda. 0% y 0 no son intercambiables dentro de flex-basis. Y el contenido de cadenas (content: «…», nombres de fuente, url()) no debe re-espaciarse jamás. Esta herramienta aísla cadenas y banners /*! como placeholders antes de tocar el blanco, y luego solo pliega lo demostrablemente seguro: 0px→0, 0.5→.5, punto y coma final, reglas vacías.</p>
    <h2>Por qué se niega a fusionar reglas</h2>
    <p>Los minificadores agresivos reescriben .a&#123;color:red&#125; .b&#123;color:red&#125; como .a,.b&#123;color:red&#125; — y cuando los selectores fusionados tienen especificidad u orden de cascada distintos, la cascada se mueve y una página a 2 000 líneas de distancia se rompe en silencio. Los pliegues a nivel de byte nunca cambian el significado; fusionar selectores, a veces sí. El 5-10 % extra de compresión no vale una hoja de estilos que exija pruebas de regresión visual para confiarse.</p>
    <h2>Cuándo minificar y cuándo no</h2>
    <p>Minificado en producción: bundles, critical CSS inline, bloques de estilo en componentes listos para publicar. Legible en el resto: cualquier cosa que un compañero vaya a abrir en devtools con las fuentes originales a mano — el puente correcto son los source maps, y un pipeline de build (esbuild, cssnano, Lightning CSS) lo automatiza. Esta herramienta es para el pegado puntual: la plantilla de email, el campo de tema del CMS, el arreglo que necesita ser pequeño ya.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wo die Bytes wirklich stecken</h2>
    <p>Handgeschriebenes CSS ist überwiegend Luft: Einrückung, eine Deklaration pro Zeile, Sektionierungskommentare. Kommentare streichen und Weißraum kollabieren zieht typischerweise 15-30 % ab — doch gzip packt Weißraum extrem gut, der ehrliche Netzgewinn ist kleiner, als der Bytezähler glauben macht. Was Minifizierung wirklich kauft, sind Parse-Zeit, ein stabiler Cache-Hash für das kleinere Artefakt und CSS, das sich ohne HTML-Schaden above the fold inline legen lässt.</p>
    <h2>Die Fallen, die ein Minifier nicht auslösen darf</h2>
    <p>calc() verlangt Whitespace um + und − — weg damit, und die Deklaration ist tot. div :hover und div:hover sind verschiedene Selektoren, also bleibt das Leerzeichen vor dem Doppelpunkt. 0% und 0 sind in flex-basis nicht austauschbar. Und String-Inhalte (content: „…“, Schriftnamen, url()) dürfen nie neu gespacingt werden. Dieses Tool zieht Strings und /*!-Banner als Platzhalter heraus, bevor Weißraum anfasst wird, und faltet danach nur nachweislich Sicheres: 0px→0, 0.5→.5, Schlusssemikolon, leere Regeln.</p>
    <h2>Warum es Regeln nicht merged</h2>
    <p>Aggressive Minifier schreiben .a&#123;color:red&#125; .b&#123;color:red&#125; zu .a,.b&#123;color:red&#125; um — und sobald die gemergten Selektoren abweichende Spezifität oder ordnungsabhängige Overrides haben, verschiebt sich die Kaskade und 2 000 Zeilen weiter unten bricht still eine Seite. Byte-Folds ändern nie die Bedeutung; Selektor-Merging manchmal. Die 5-10 % Extra-Kompression sind kein Stylesheet wert, das erst visuelle Regressionstests braucht, um vertrauenswürdig zu sein.</p>
    <h2>Wann minifizieren — und wann nicht</h2>
    <p>Minifiziert ausliefern: Produktions-Bundles, inline Critical CSS, Style-Blöcke in zur Veröffentlichung bestimmten Komponenten. Lesbar lassen: alles, was ein Teamkollege in den Devtools öffnet, während die Originalquellen greifbar sind — Source Maps sind die richtige Brücke, und eine Build-Pipeline (esbuild, cssnano, Lightning CSS) automatisiert das. Dieses Werkzeug ist für den Einzelfall-Paste: die E-Mail-Vorlage, das CMS-Themenfeld, der Quickfix, der jetzt klein sein muss.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CssMinifierContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
