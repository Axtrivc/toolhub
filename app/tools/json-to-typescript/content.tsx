'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Manually writing TypeScript types for a large API response is tedious and error-prone. This tool
      takes any valid JSON and <strong>recursively infers the shape</strong>, emitting clean, nested{' '}
      <code>interface</code> declarations you can paste straight into your codebase. It handles nested
      objects, arrays, optional (nullable) fields, and even mixed-type arrays.
    </p>
    <div>
      <h2>How the types are inferred</h2>
      <ul>
        <li>
          <strong>Primitives</strong> — strings become <code>string</code>, numbers become{' '}
          <code>number</code>, booleans become <code>boolean</code>.
        </li>
        <li>
          <strong>Objects</strong> — each object becomes its own <code>interface</code>, named after
          its parent key in PascalCase (e.g. <code>address</code> → <code>Address</code>). Nested
          objects recurse, so deeply structured responses produce a complete type tree.
        </li>
        <li>
          <strong>Arrays</strong> — typed as the element type plus <code>[]</code>. If every element
          shares a type you get <code>string[]</code>; if they differ, you get a union like{' '}
          <code>(string | number)[]</code>.
        </li>
        <li>
          <strong>Null</strong> — JSON <code>null</code> is typed as <code>null</code> and the
          property is marked optional (<code>?:</code>), since nullable API fields are usually also
          absent when empty.
        </li>
      </ul>
    </div>
    <div>
      <h2>Interfaces vs type aliases</h2>
      <p>
        This generator uses <code>interface</code> declarations because they are the most extensible
        convention for object shapes — they support declaration merging and are easier to augment
        later. If your codebase prefers <code>type</code> aliases, a simple find-and-replace of{' '}
        <code>interface Foo {`{'{'}`} </code> → <code>type Foo = {'{'}</code> on the output converts
        them. The inferred member types are identical either way.
      </p>
    </div>
    <div>
      <h2>When the sample data is incomplete</h2>
      <p>
        The inferred types reflect <em>exactly</em> the JSON you pasted, not the full schema the API
        might return. If a field is <code>string</code> in your sample but can also be{' '}
        <code>null</code> in production, widen it manually. For APIs you control, prefer generating
        types from a sample that includes optional and empty states so the union captures reality.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      为大型 API 响应手动编写 TypeScript 类型既繁琐又容易出错。本工具接收任意合法的 JSON,并
      <strong>递归推断其结构</strong>,生成干净、嵌套的 <code>interface</code> 声明,可直接粘贴到你的代码库中。它能处理嵌套对象、数组、可选(可空)字段,甚至混合类型数组。
    </p>
    <div>
      <h2>类型是如何推断的</h2>
      <ul>
        <li>
          <strong>基本类型</strong> —— 字符串变为 <code>string</code>,数字变为{' '}
          <code>number</code>,布尔值变为 <code>boolean</code>。
        </li>
        <li>
          <strong>对象</strong> —— 每个对象都会成为独立的 <code>interface</code>,按其父键的 PascalCase 形式命名(例如 <code>address</code> → <code>Address</code>)。嵌套对象会递归处理,因此深层结构的响应会生成完整的类型树。
        </li>
        <li>
          <strong>数组</strong> —— 类型为元素类型加上 <code>[]</code>。如果每个元素都是同一类型,会得到 <code>string[]</code>;如果类型不同,则会得到联合类型,例如{' '}
          <code>(string | number)[]</code>。
        </li>
        <li>
          <strong>空值</strong> —— JSON 的 <code>null</code> 会被推断为 <code>null</code>,该属性被标记为可选(<code>?:</code>),因为可空的 API 字段在为空时通常也是缺失的。
        </li>
      </ul>
    </div>
    <div>
      <h2>接口与类型别名</h2>
      <p>
        本生成器使用 <code>interface</code> 声明,因为这是对象结构最可扩展的约定——它支持声明合并,后续也更易于扩充。如果你的代码库更偏好 <code>type</code> 别名,只需对输出做一次简单的查找替换:{' '}
        <code>interface Foo {`{'{'}`} </code> → <code>type Foo = {'{'}</code> 即可完成转换。两种方式推断出的成员类型完全相同。
      </p>
    </div>
    <div>
      <h2>当示例数据不完整时</h2>
      <p>
        推断出的类型 <em>精确</em> 反映了你粘贴的 JSON,而非 API 可能返回的完整模式。如果某个字段在你的示例中是 <code>string</code>,但在生产环境中也可能是{' '}
        <code>null</code>,请手动放宽其类型。对于你能控制的 API,建议使用一个包含可选和空状态的样本来生成类型,这样联合类型才能反映真实情况。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Escribir a mano los tipos de TypeScript para una respuesta de API grande es tedioso y propenso a errores. Esta herramienta toma cualquier JSON válido y <strong>infiere la forma de manera recursiva</strong>, generando declaraciones <code>interface</code> limpias y anidadas que puedes pegar directamente en tu base de código. Maneja objetos anidados, arrays, campos opcionales (aceptan null) e incluso arrays con tipos mezclados.
    </p>
    <div>
      <h2>Cómo se infieren los tipos</h2>
      <ul>
        <li>
          <strong>Primitivos</strong> — las cadenas se convierten en <code>string</code>, los números en{' '}
          <code>number</code>, los booleanos en <code>boolean</code>.
        </li>
        <li>
          <strong>Objetos</strong> — cada objeto se convierte en su propio <code>interface</code>, con el nombre de su clave padre en PascalCase (p. ej. <code>address</code> → <code>Address</code>). Los objetos anidados se procesan de forma recursiva, así que las respuestas con estructuras profundas producen un árbol de tipos completo.
        </li>
        <li>
          <strong>Arrays</strong> — se tipan como el tipo del elemento más <code>[]</code>. Si todos los elementos comparten un tipo obtienes <code>string[]</code>; si difieren, obtienes una unión como{' '}
          <code>(string | number)[]</code>.
        </li>
        <li>
          <strong>Null</strong> — el <code>null</code> de JSON se tipa como <code>null</code> y la propiedad se marca como opcional (<code>?:</code>), ya que los campos de API que admiten null suelen estar también ausentes cuando están vacíos.
        </li>
      </ul>
    </div>
    <div>
      <h2>Interfaces frente a alias de tipo</h2>
      <p>
        Este generador utiliza declaraciones <code>interface</code> porque son la convención más extensible para las formas de objeto — admiten la fusión de declaraciones y son más fáciles de ampliar posteriormente. Si tu base de código prefiere los alias <code>type</code>, una simple búsqueda y reemplazo de{' '}
        <code>interface Foo {`{'{'}`} </code> → <code>type Foo = {'{'}</code> en la salida los convierte. Los tipos de miembro inferidos son idénticos en cualquier caso.
      </p>
    </div>
    <div>
      <h2>Cuando los datos de muestra están incompletos</h2>
      <p>
        Los tipos inferidos reflejan <em>exactamente</em> el JSON que pegaste, no el esquema completo que la API podría devolver. Si un campo es <code>string</code> en tu muestra pero también puede ser{' '}
        <code>null</code> en producción, amplíalo manualmente. Para las API que controlas, prefiere generar los tipos a partir de una muestra que incluya estados opcionales y vacíos para que la unión capture la realidad.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Das manuelle Schreiben von TypeScript-Typen für eine große API-Antwort ist mühsam und fehleranfällig. Dieses Werkzeug nimmt jeden gültigen JSON-Code und <strong>leitet die Form rekursiv ab</strong>, gibt saubere, verschachtelte <code>interface</code>-Deklarationen aus, die du direkt in deine Codebasis einfügen kannst. Es verarbeitet verschachtelte Objekte, Arrays, optionale (nullable) Felder und sogar Arrays mit gemischten Typen.
    </p>
    <div>
      <h2>Wie die Typen abgeleitet werden</h2>
      <ul>
        <li>
          <strong>Primitive</strong> — aus Strings wird <code>string</code>, aus Zahlen{' '}
          <code>number</code>, aus Booleans <code>boolean</code>.
        </li>
        <li>
          <strong>Objekte</strong> — jedes Objekt wird zu einem eigenen <code>interface</code>, benannt nach seinem übergeordneten Schlüssel in PascalCase (z. B. <code>address</code> → <code>Address</code>). Verschachtelte Objekte werden rekursiv verarbeitet, sodass tief strukturierte Antworten einen vollständigen Typbaum erzeugen.
        </li>
        <li>
          <strong>Arrays</strong> — werden als Elementtyp plus <code>[]</code> typisiert. Wenn jedes Element denselben Typ hat, erhältst du <code>string[]</code>; wenn sie abweichen, erhältst du eine Union wie{' '}
          <code>(string | number)[]</code>.
        </li>
        <li>
          <strong>Null</strong> — JSON-<code>null</code> wird als <code>null</code> typisiert und die Eigenschaft als optional markiert (<code>?:</code>), da nullable API-Felder meist auch fehlen, wenn sie leer sind.
        </li>
      </ul>
    </div>
    <div>
      <h2>Interfaces vs. Type-Aliase</h2>
      <p>
        Dieser Generator verwendet <code>interface</code>-Deklarationen, da sie die am besten erweiterbare Konvention für Objektformen sind — sie unterstützen Declaration Merging und lassen sich später leichter erweitern. Wenn deine Codebasis <code>type</code>-Aliase bevorzugt, wandelt ein einfaches Suchen-Ersetzen von{' '}
        <code>interface Foo {`{'{'}`} </code> → <code>type Foo = {'{'}</code> in der Ausgabe sie um. Die abgeleiteten Elementtypen sind in beiden Fällen identisch.
      </p>
    </div>
    <div>
      <h2>Wenn die Beispieldaten unvollständig sind</h2>
      <p>
        Die abgeleiteten Typen spiegeln <em>exakt</em> den JSON-Code wider, den du eingefügt hast, nicht das vollständige Schema, das die API möglicherweise zurückgibt. Wenn ein Feld in deiner Stichprobe <code>string</code> ist, in Produktion aber auch{' '}
        <code>null</code> sein kann, erweitere es manuell. Bei APIs, die du selbst kontrollierst, ziehe vor, Typen aus einer Stichprobe zu generieren, die optionale und leere Zustände enthält, damit die Union die Realität abbildet.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function JsonToTypeScriptContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
