'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Naming Case Converter 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Every language and framework has its own naming convention — JavaScript favors <strong>camelCase</strong>,
      Python <strong>snake_case</strong>, CSS classes <strong>kebab-case</strong>, and constants are usually{' '}
      <strong>CONSTANT_CASE</strong>. This converter takes any phrase — or a whole list of phrases in bulk mode —
      and instantly renders it in eight common code naming cases. It runs entirely in your browser, and every row
      has its own copy button so you can grab exactly the variant you need.
    </p>

    <div>
      <h2>How words are split</h2>
      <p>
        The input is first broken on <strong>spaces, underscores, hyphens, dots, and slashes</strong>, so{' '}
        <code>user profile-settings</code> and <code>user/profile_settings</code> both yield the same words.
        Then camelCase and PascalCase boundaries are detected — including acronym runs — so{' '}
        <code>getHTTPResponse</code> correctly splits into <code>get</code>, <code>http</code>,{' '}
        <code>response</code> rather than <code>gethttpresponse</code>. All words are lowercased before the
        target case is applied.
      </p>
    </div>

    <div>
      <h2>Which case should you use?</h2>
      <p>
        As a rule of thumb: <code>camelCase</code> for variables and functions in JS/Java,{' '}
        <code>PascalCase</code> for classes, components, and types, <code>snake_case</code> for Python, Ruby,
        and database columns, <code>CONSTANT_CASE</code> for environment variables and constants,{' '}
        <code>kebab-case</code> for CSS classes and URL slugs, <code>Train-Case</code> for HTTP headers, and{' '}
        <code>dot.case</code> or <code>path/case</code> for config keys and namespaced identifiers. When in
        doubt, match the convention of the surrounding file.
      </p>
    </div>

    <div>
      <h2>Bulk mode for renames</h2>
      <p>
        Flip on <strong>bulk mode</strong> and paste one phrase per line — ideal when renaming a batch of
        variables, migrating config keys, or generating CSS classes from a design spec. Each output row then
        shows every converted line, and the row&apos;s copy button copies the whole block at once. Blank lines
        are ignored, and the conversion updates live as you type.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      每种语言和框架都有自己的命名约定 —— JavaScript 偏好 <strong>camelCase</strong>,Python 用 <strong>snake_case</strong>,CSS 类名用 <strong>kebab-case</strong>,而常量通常用 <strong>CONSTANT_CASE</strong>。本转换器接受任意短语 —— 或在 bulk 模式下接受一整列短语 —— 并即时渲染成八种常见的代码命名格式。
      它完全在浏览器中运行,每行都有独立的复制按钮,让你精确取用所需的那个变体。
    </p>

    <div>
      <h2>单词是如何拆分的</h2>
      <p>
        输入会先按<strong>空格、下划线、连字符、点和斜杠</strong>拆分,因此 <code>user profile-settings</code> 与 <code>user/profile_settings</code> 会得到相同的单词。
        接着会检测 camelCase 与 PascalCase 的边界(包括连续缩写),所以 <code>getHTTPResponse</code> 会被正确拆分为 <code>get</code>、<code>http</code>、<code>response</code>,而不是 <code>gethttpresponse</code>。所有单词在应用目标命名格式前都会先被转为小写。
      </p>
    </div>

    <div>
      <h2>应该用哪种命名格式?</h2>
      <p>
        经验法则:JS/Java 中的变量和函数用 <code>camelCase</code>;类、组件和类型用 <code>PascalCase</code>;Python、Ruby 和数据库列用 <code>snake_case</code>;环境变量和常量用 <code>CONSTANT_CASE</code>;CSS 类名和 URL slug 用 <code>kebab-case</code>;HTTP 头用 <code>Train-Case</code>;配置键和带命名空间的标识符用 <code>dot.case</code> 或 <code>path/case</code>。
        拿不准时,跟随所在文件的约定即可。
      </p>
    </div>

    <div>
      <h2>用于重命名的 bulk 模式</h2>
      <p>
        打开 <strong>bulk 模式</strong>,每行粘贴一个短语 —— 在批量重命名变量、迁移配置键,或根据设计稿生成 CSS 类名时尤为好用。每一行输出都会显示所有转换后的结果,该行的复制按钮可一次复制整块内容。
        空行会被忽略,转换在你输入时实时更新。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Cada lenguaje y framework tiene su propia convención de nombres — JavaScript prefiere <strong>camelCase</strong>, Python <strong>snake_case</strong>, las clases CSS <strong>kebab-case</strong>, y las constantes suelen usar <strong>CONSTANT_CASE</strong>. Este conversor toma cualquier frase — o una lista entera de frases en modo bulk — y la renderiza al instante en ocho casos de nombres comunes.
      Funciona por completo en tu navegador, y cada fila tiene su propio botón de copiar para que te lleves exactamente la variante que necesitas.
    </p>

    <div>
      <h2>Cómo se dividen las palabras</h2>
      <p>
        La entrada se parte primero por <strong>espacios, guiones bajos, guiones, puntos y barras</strong>, así que <code>user profile-settings</code> y <code>user/profile_settings</code> producen las mismas palabras.
        Luego se detectan los límites de camelCase y PascalCase — incluidas las rachas de acrónimos —, de modo que <code>getHTTPResponse</code> se divide correctamente en <code>get</code>, <code>http</code>, <code>response</code> en vez de <code>gethttpresponse</code>. Todas las palabras se pasan a minúsculas antes de aplicar el caso destino.
      </p>
    </div>

    <div>
      <h2>¿Qué caso deberías usar?</h2>
      <p>
        Como regla general: <code>camelCase</code> para variables y funciones en JS/Java; <code>PascalCase</code> para clases, componentes y tipos; <code>snake_case</code> para Python, Ruby y columnas de bases de datos; <code>CONSTANT_CASE</code> para variables de entorno y constantes; <code>kebab-case</code> para clases CSS y slugs de URL; <code>Train-Case</code> para cabeceras HTTP; y <code>dot.case</code> o <code>path/case</code> para claves de configuración e identificadores con espacio de nombres.
        Cuando dudes, sigue la convención del archivo en el que estás trabajando.
      </p>
    </div>

    <div>
      <h2>Modo bulk para renombrados</h2>
      <p>
        Activa el <strong>modo bulk</strong> y pega una frase por línea — ideal al renombrar un lote de variables, migrar claves de configuración o generar clases CSS a partir de una especificación de diseño. Cada fila de salida muestra todas las líneas convertidas, y el botón de copiar de la fila copia todo el bloque de una vez.
        Las líneas en blanco se ignoran, y la conversión se actualiza en vivo mientras escribes.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Jede Sprache und jedes Framework hat seine eigene Namenskonvention — JavaScript bevorzugt <strong>camelCase</strong>, Python <strong>snake_case</strong>, CSS-Klassen <strong>kebab-case</strong>, und Konstanten verwenden meist <strong>CONSTANT_CASE</strong>. Dieser Konverter nimmt einen beliebigen Ausdruck — oder im Bulk-Modus eine ganze Liste von Ausdrücken — und rendert ihn sofort in acht gängige Code-Namensfälle.
      Er läuft vollständig in deinem Browser, und jede Zeile hat einen eigenen Kopier-Button, damit du genau die Variante bekommst, die du brauchst.
    </p>

    <div>
      <h2>Wie Wörter getrennt werden</h2>
      <p>
        Die Eingabe wird zuerst an <strong>Leerzeichen, Unterstrichen, Bindestrichen, Punkten und Schrägstrichen</strong> getrennt, sodass <code>user profile-settings</code> und <code>user/profile_settings</code> dieselben Wörter ergeben.
        Dann werden camelCase- und PascalCase-Grenzen erkannt — einschließlich Aneinanderreihungen von Akronymen —, sodass <code>getHTTPResponse</code> korrekt in <code>get</code>, <code>http</code>, <code>response</code> zerlegt wird statt in <code>gethttpresponse</code>. Alle Wörter werden kleingeschrieben, bevor der Zielfall angewendet wird.
      </p>
    </div>

    <div>
      <h2>Welchen Fall solltest du verwenden?</h2>
      <p>
        Als Faustregel: <code>camelCase</code> für Variablen und Funktionen in JS/Java; <code>PascalCase</code> für Klassen, Komponenten und Typen; <code>snake_case</code> für Python, Ruby und Datenbankspalten; <code>CONSTANT_CASE</code> für Umgebungsvariablen und Konstanten; <code>kebab-case</code> für CSS-Klassen und URL-Slugs; <code>Train-Case</code> für HTTP-Header; sowie <code>dot.case</code> oder <code>path/case</code> für Konfigurationsschlüssel und namensraumbehaftete Bezeichner.
        Im Zweifel richte dich nach der Konvention der umgebenden Datei.
      </p>
    </div>

    <div>
      <h2>Bulk-Modus für Umbenennungen</h2>
      <p>
        Aktiviere den <strong>Bulk-Modus</strong> und füge einen Ausdruck pro Zeile ein — ideal, wenn du einen Schwung Variablen umbenennst, Konfigurationsschlüssel migrierst oder CSS-Klassen aus einem Design-Spec generierst. Jede Ausgabezeile zeigt dann alle konvertierten Zeilen, und der Kopier-Button der Zeile kopiert den gesamten Block auf einmal.
        Leerzeilen werden ignoriert, und die Umrechnung aktualisiert sich live beim Tippen.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function NamingCaseConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
