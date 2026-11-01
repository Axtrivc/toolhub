'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Naming Case Converter 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Every language and framework has its own naming convention — JavaScript favors <strong>camelCase</strong>,
      Python <strong>snake_case</strong>, CSS classes <strong>kebab-case</strong>, and constants are usually{' '}
      <strong>CONSTANT_CASE</strong>. This converter takes any phrase — or a whole list of phrases in bulk mode —
      and instantly renders it in ten common naming cases. It runs entirely in your browser, and every row
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
        Flip on <strong>bulk mode</strong>{' '}
        and paste one phrase per line — ideal when renaming a batch of
        variables, migrating config keys, or generating CSS classes from a design spec. Each output row then
        shows every converted line, and the row&apos;s copy button copies the whole block at once. Blank lines
        are ignored, and the conversion updates live as you type.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Cada lenguaje y framework tiene su propia convención de nombres — JavaScript prefiere <strong>camelCase</strong>, Python <strong>snake_case</strong>, las clases CSS <strong>kebab-case</strong>, y las constantes suelen usar <strong>CONSTANT_CASE</strong>. Este conversor toma cualquier frase — o una lista entera de frases en modo por lotes — y la convierte al instante a diez estilos de nombres comunes.
      Funciona por completo en tu navegador, y cada fila tiene su propio botón de copiar para que te lleves exactamente la variante que necesitas.
    </p>

    <div>
      <h2>Cómo se dividen las palabras</h2>
      <p>
        La entrada se parte primero por <strong>espacios, guiones bajos, guiones, puntos y barras</strong>, así que <code>user profile-settings</code> y <code>user/profile_settings</code> producen las mismas palabras.
        Luego se detectan los límites de camelCase y PascalCase — incluidas las secuencias de acrónimos —, de modo que <code>getHTTPResponse</code> se divide correctamente en <code>get</code>, <code>http</code>, <code>response</code> en vez de <code>gethttpresponse</code>. Todas las palabras se pasan a minúsculas antes de aplicar el estilo de destino.
      </p>
    </div>

    <div>
      <h2>¿Qué estilo deberías usar?</h2>
      <p>
        Como regla general: <code>camelCase</code> para variables y funciones en JS/Java; <code>PascalCase</code> para clases, componentes y tipos; <code>snake_case</code> para Python, Ruby y columnas de bases de datos; <code>CONSTANT_CASE</code> para variables de entorno y constantes; <code>kebab-case</code> para clases CSS y slugs de URL; <code>Train-Case</code> para cabeceras HTTP; y <code>dot.case</code> o <code>path/case</code> para claves de configuración e identificadores con espacio de nombres.
        Ante la duda, sigue la convención del archivo en el que estás trabajando.
      </p>
    </div>

    <div>
      <h2>Modo por lotes para renombrados</h2>
      <p>
        Activa el <strong>modo por lotes</strong> y pega una frase por línea — ideal al renombrar un lote de variables, migrar claves de configuración o generar clases CSS a partir de una especificación de diseño. Cada fila de salida muestra todas las líneas convertidas, y el botón de copiar de la fila copia todo el bloque de una vez.
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
      Jede Sprache und jedes Framework hat seine eigene Namenskonvention — JavaScript bevorzugt <strong>camelCase</strong>, Python <strong>snake_case</strong>, CSS-Klassen <strong>kebab-case</strong>, und Konstanten verwenden meist <strong>CONSTANT_CASE</strong>. Dieser Konverter nimmt einen beliebigen Ausdruck — oder im Stapelmodus eine ganze Liste von Ausdrücken — und wandelt ihn sofort in zehn gängige Schreibweisen um.
      Er läuft vollständig in deinem Browser, und jede Zeile hat einen eigenen Kopier-Button, damit du genau die Variante bekommst, die du brauchst.
    </p>

    <div>
      <h2>Wie Wörter getrennt werden</h2>
      <p>
        Die Eingabe wird zuerst an <strong>Leerzeichen, Unterstrichen, Bindestrichen, Punkten und Schrägstrichen</strong> getrennt, sodass <code>user profile-settings</code> und <code>user/profile_settings</code> dieselben Wörter ergeben.
        Dann werden camelCase- und PascalCase-Grenzen erkannt — auch bei aufeinanderfolgenden Akronymen —, sodass <code>getHTTPResponse</code> korrekt in <code>get</code>, <code>http</code>, <code>response</code> zerlegt wird statt in <code>gethttpresponse</code>. Alle Wörter werden kleingeschrieben, bevor die Zielschreibweise angewendet wird.
      </p>
    </div>

    <div>
      <h2>Welche Schreibweise solltest du verwenden?</h2>
      <p>
        Als Faustregel: <code>camelCase</code> für Variablen und Funktionen in JS/Java; <code>PascalCase</code> für Klassen, Komponenten und Typen; <code>snake_case</code> für Python, Ruby und Datenbankspalten; <code>CONSTANT_CASE</code> für Umgebungsvariablen und Konstanten; <code>kebab-case</code> für CSS-Klassen und URL-Slugs; <code>Train-Case</code> für HTTP-Header; sowie <code>dot.case</code> oder <code>path/case</code> für Konfigurationsschlüssel und namensraumbehaftete Bezeichner.
        Im Zweifel richte dich nach der Konvention der umgebenden Datei.
      </p>
    </div>

    <div>
      <h2>Stapelmodus für Umbenennungen</h2>
      <p>
        Aktiviere den <strong>Stapelmodus</strong> und füge einen Ausdruck pro Zeile ein — ideal, wenn du einen Schwung Variablen umbenennst, Konfigurationsschlüssel migrierst oder CSS-Klassen aus einem Design-Spec generierst. Jede Ausgabezeile zeigt dann alle konvertierten Zeilen, und der Kopier-Button der Zeile kopiert den gesamten Block auf einmal.
        Leerzeilen werden ignoriert, und die Konvertierung aktualisiert sich live beim Tippen.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function NamingCaseConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
