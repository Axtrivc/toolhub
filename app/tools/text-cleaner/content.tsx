'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Text Cleaner 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      A <strong>deep text cleaner</strong> that scrubs pasted text down to exactly what you want to keep: strip
      emojis and pictographs, remove accents and diacritics, delete special characters, cut URLs and HTML tags,
      collapse runaway whitespace, drop empty lines, and lowercase everything. It is handy when you are cleaning
      copied web content, preparing data for import, or normalizing user-generated text. Everything runs 100% in
      your browser — your text is never sent anywhere.
    </p>

    <div>
      <h2>Each cleaner is an independent toggle</h2>
      <p>
        Nothing happens unless you ask for it. Check only the operations you need — the output updates live as
        you type or flip switches. The <strong>Remove special characters</strong> option keeps letters, digits,
        and spaces plus whatever you put in the <em>characters to keep</em> field (default{' '}
        <code>.,!?-&apos;&quot;</code>), so punctuation you care about survives while ™, ©, and stray symbols
        disappear. Accent removal uses Unicode normalization (<code>NFD</code>) to split <code>é</code> into{' '}
        <code>e</code> + accent, then strips the accent — so <em>café</em> becomes <em>cafe</em> cleanly.
      </p>
    </div>

    <div>
      <h2>Order of operations matters</h2>
      <p>
        The pipeline runs in a deliberate order: HTML tags and URLs are removed <em>first</em>, before special
        character stripping — otherwise a URL would be shredded into pieces before the URL remover could
        recognize it. Accents are folded before special-character stripping too, so accented letters become plain
        ASCII instead of being deleted. Whitespace operations (collapse spaces, trim lines, remove empty lines)
        run last, tidying whatever the earlier steps left behind. The before/after character counts show exactly
        how much was removed.
      </p>
    </div>

    <div>
      <h2>Tips and pitfalls</h2>
      <p>
        Emoji stripping also removes dingbats and symbol ranges like ✓ and ❤ — that is intentional, but worth
        knowing if your checkmarks matter. Lowercasing is applied to the whole text, so it is not suitable when
        case carries meaning (acronyms, sentence case for publication). If you need to keep specific symbols —
        say <code>#</code> for headings or <code>@</code> for mentions — simply add them to the keep list. When
        in doubt, enable one cleaner at a time and watch the live preview.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      一个 <strong>深度文本清理器</strong>，把粘贴进来的文字清洗成你真正想保留的样子：去除 emoji 与图形符号、移除重音与变音符号、删除特殊字符、剔除 URL 与 HTML 标签、合并多余空白、删除空行，以及全部转为小写。在你清洗复制的网页内容、为导入准备数据，或规范化用户生成内容时格外好用。所有处理 100% 在浏览器中完成——文本绝不外发。
    </p>

    <div>
      <h2>每个清理项都是独立开关</h2>
      <p>
        除非你主动要求，否则什么都不会发生。只勾选你需要的操作——你打字或切换开关时输出会实时更新。<strong>移除特殊字符</strong> 选项会保留字母、数字和空格，以及你填入 <em>要保留的字符</em> 字段的内容（默认为 <code>.,!?-&apos;&quot;</code>），这样你在意的标点得以保留，而 ™、© 等多余符号则被清除。重音移除使用 Unicode 规范化（<code>NFD</code>）把 <code>é</code> 拆成 <code>e</code> + 重音，再剥除重音——于是 <em>café</em> 干净地变成 <em>cafe</em>。
      </p>
    </div>

    <div>
      <h2>操作顺序很重要</h2>
      <p>
        处理流水线按精心设计的顺序运行：HTML 标签和 URL 会在特殊字符剥离之 <em>前</em> 先被移除——否则 URL 会在 URL 移除器识别它之前就被切成碎片。重音也会在特殊字符剥离之前被折叠，于是带重音的字母会变成普通 ASCII，而不是被直接删除。空白操作（合并空格、修剪行、删除空行）放在最后，把前面步骤留下的杂乱一并收拾干净。前后的字符计数会准确显示移除了多少。
      </p>
    </div>

    <div>
      <h2>技巧与陷阱</h2>
      <p>
        emoji 剥离也会移除装饰符号和符号区段，例如 ✓ 和 ❤——这是有意为之，但如果你的对勾很重要，就值得注意。全部转小写会作用于整段文本，所以当大小写承载含义时（缩写、用于出版的句首大写）并不适用。如果你需要保留特定符号——比如用作标题的 <code>#</code> 或用作提及的 <code>@</code>——只要把它们加进保留列表即可。拿不准时，一次只开一个清理项，并留意实时预览。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Un <strong>limpiador de texto profundo</strong> que depura el texto pegado hasta dejar exactamente lo que quieres conservar: elimina emojis y pictogramas, quita acentos y diacríticos, borra caracteres especiales, corta URLs y etiquetas HTML, colapsa espacios en blanco descontrolados, suprime líneas vacías y pasa todo a minúsculas. Resulta práctico cuando limpias contenido web copiado, preparas datos para importar o normalizas texto generado por usuarias. Todo se ejecuta 100 % en tu navegador — tu texto no se envía a ningún sitio.
    </p>

    <div>
      <h2>Cada limpiador es un interruptor independiente</h2>
      <p>
        No ocurre nada salvo que lo pidas. Marca solo las operaciones que necesites — la salida se actualiza en vivo mientras escribes o activas interruptores. La opción <strong>Quitar caracteres especiales</strong> conserva letras, dígitos y espacios más lo que pongas en el campo <em>caracteres a conservar</em> (por defecto <code>.,!?-&apos;&quot;</code>), así la puntuación que te importa sobrevive mientras ™, © y otros símbolos sueltos desaparecen. La eliminación de acentos usa normalización Unicode (<code>NFD</code>) para descomponer <code>é</code> en <code>e</code> + acento y luego quitar el acento — de modo que <em>café</em> pasa limpiamente a <em>cafe</em>.
      </p>
    </div>

    <div>
      <h2>El orden de las operaciones importa</h2>
      <p>
        La tubería se ejecuta en un orden deliberado: las etiquetas HTML y las URLs se eliminan <em>primero</em>, antes de quitar caracteres especiales — de lo contrario una URL quedaría hecha pedazos antes de que el eliminador de URLs pudiera reconocerla. Los acentos también se pliegan antes de la eliminación de caracteres especiales, así las letras acentuadas se convierten en ASCII plano en vez de borrarse. Las operaciones de espacios en blanco (colapsar espacios, recortar líneas, eliminar líneas vacías) se ejecutan al final, ordenando lo que dejaron los pasos previos. Los conteos de caracteres «antes/después» muestran exactamente cuánto se eliminó.
      </p>
    </div>

    <div>
      <h2>Consejos y trampas</h2>
      <p>
        La eliminación de emojis también quita dingbats y rangos de símbolos como ✓ y ❤ — es intencionado, pero vale la pena saberlo si tus marcas de verificación importan. El paso a minúsculas se aplica a todo el texto, así que no es adecuado cuando las mayúsculas tienen significado (acrónimos, mayúsculas de frase para publicación). Si necesitas conservar símbolos específicos — por ejemplo <code>#</code> para encabezados o <code>@</code> para menciones — simplemente añádelos a la lista de conservación. Ante la duda, activa un limpiador cada vez y observa la vista previa en vivo.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Ein <strong>tiefgehender Text-Reiniger</strong>, der eingefügten Text auf genau das reduziert, was du behalten willst: Emojis und Piktogramme entfernen, Akzente und Diakritika abstreifen, Sonderzeichen löschen, URLs und HTML-Tags herausschneiden, wildgewordene Leerzeichen zusammenziehen, Leerzeilen fallen lassen und alles kleinschreiben. Er ist praktisch, wenn du kopierte Web-Inhalte säuberst, Daten für den Import vorbereitest oder nutzergenerierten Text normalisierst. Alles läuft zu 100 % in deinem Browser — dein Text wird nie irgendwo hingeschickt.
    </p>

    <div>
      <h2>Jeder Reiniger ist ein unabhängiger Schalter</h2>
      <p>
        Nichts passiert, außer du forderst es. Aktiviere nur die Operationen, die du brauchst — die Ausgabe aktualisiert sich live, während du tippst oder Schalter umlegst. Die Option <strong>Sonderzeichen entfernen</strong> behält Buchstaben, Ziffern und Leerzeichen plus das, was du ins Feld <em>zu behaltende Zeichen</em> einträgst (Standard <code>.,!?-&apos;&quot;</code>), sodass die Zeichensetzung, die dir wichtig ist, erhalten bleibt, während ™, © und verstreute Symbole verschwinden. Die Akzententfernung nutzt Unicode-Normalisierung (<code>NFD</code>), um <code>é</code> in <code>e</code> + Akzent zu zerlegen, und streift dann den Akzent — aus <em>café</em> wird so sauber <em>cafe</em>.
      </p>
    </div>

    <div>
      <h2>Die Reihenfolge der Operationen ist wichtig</h2>
      <p>
        Die Pipeline läuft in einer bewussten Reihenfolge: HTML-Tags und URLs werden <em>zuerst</em> entfernt, noch bevor Sonderzeichen gestrippt werden — sonst würde eine URL in Stücke zerrissen, bevor der URL-Entferner sie erkennen könnte. Auch Akzente werden vor dem Sonderzeichen-Stripping gefaltet, sodass akzentuierte Buchstaben zu plain ASCII werden, statt gelöscht zu werden. Leerzeichen-Operationen (Leerzeichen zusammenziehen, Zeilen trimmen, Leerzeilen entfernen) laufen zuletzt und räumen auf, was die früheren Schritte hinterlassen haben. Die Vorher-/Nachher-Zeichenzähler zeigen genau, wie viel entfernt wurde.
      </p>
    </div>

    <div>
      <h2>Tipps und Fallstricke</h2>
      <p>
        Das Entfernen von Emojis entfernt auch Dingbats und Symbolbereiche wie ✓ und ❤ — das ist beabsichtigt, aber gut zu wissen, wenn deine Häkchen wichtig sind. Die Kleinschreibung wird auf den gesamten Text angewendet, ist also ungeeignet, wenn Groß-/Kleinschreibung Bedeutung trägt (Akronyme, Satzanfang-Großschreibung für Publikationen). Wenn du bestimmte Symbole behalten willst — etwa <code>#</code> für Überschriften oder <code>@</code> für Erwähnungen — füge sie einfach zur Behaltens-Liste hinzu. Im Zweifel aktiviere jeweils nur einen Reiniger und beobachte die Live-Vorschau.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function TextCleanerContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
