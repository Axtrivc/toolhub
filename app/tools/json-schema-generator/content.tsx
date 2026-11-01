'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * JSON Schema Generator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      A <strong>JSON Schema</strong> describes the shape of a JSON document — which fields exist, what types they
      have, and which ones are required — so APIs, config files, and databases can be validated automatically.
      This generator infers a <strong>Draft-07 schema</strong> from any example JSON you paste, and it runs 100%
      in your browser: nothing is uploaded, so it is safe for private payloads, API responses, and production
      configs.
    </p>

    <div>
      <h2>How the inference works</h2>
      <p>
        Every value in your JSON is walked recursively. Objects become <code>type: &quot;object&quot;</code>{' '}
        with a <code>properties</code> map, all observed keys listed in <code>required</code>, and{' '}
        <code>additionalProperties: true</code> so the schema stays permissive. Numbers are split into{' '}
        <code>integer</code> and <code>number</code>, and strings are tested against common formats —{' '}
        <code>date-time</code>, <code>date</code>, <code>email</code>, <code>uri</code>, and <code>uuid</code> —
        with the <code>format</code> keyword only added when the value actually matches.
      </p>
    </div>

    <div>
      <h2>Arrays are merged, not sampled</h2>
      <p>
        Instead of describing only the first array element, the generator <strong>merges the schemas of every
        element</strong>. Two objects with the same fields collapse into one schema; a field that is missing
        from some elements drops out of <code>required</code>; and genuinely mixed arrays — say{' '}
        <code>[1, &quot;two&quot;, true]</code> — become an <code>anyOf</code> union. For the best result, paste
        an example whose arrays contain several representative elements.
      </p>
    </div>

    <div>
      <h2>Tips and pitfalls</h2>
      <p>
        A generated schema is only as complete as your sample: optional fields that are absent from the example
        cannot be inferred, and <code>null</code> values are typed as <code>null</code> rather than their
        eventual type. Treat the output as a <strong>starting point</strong> — review <code>required</code>{' '}
        lists, tighten <code>format</code> hints, and add constraints like <code>minimum</code> or{' '}
        <code>maxLength</code> by hand. Finally, note that <code>format</code> is annotation-only in many
        validators unless you explicitly enable format checking.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Un <strong>JSON Schema</strong> describe la estructura de un documento JSON — qué campos existen, qué tipo tienen y cuáles son obligatorios — para que APIs, archivos de configuración y bases de datos puedan validarse automáticamente. Este generador infiere un <strong>esquema Draft-07</strong> a partir de cualquier JSON de ejemplo que pegues, y funciona 100 % en tu navegador: no se sube nada, así que es seguro para payloads privados, respuestas de API y configuraciones de producción.
    </p>

    <div>
      <h2>Cómo funciona la inferencia</h2>
      <p>
        Cada valor de tu JSON se recorre de forma recursiva. Los objetos se convierten en <code>type: "object"</code> con un mapa <code>properties</code>, todas las claves encontradas se listan en <code>required</code> y se añade <code>additionalProperties: true</code> para que el esquema siga siendo permisivo.
        Los números se dividen en <code>integer</code> y <code>number</code>, y las cadenas se prueban contra formatos comunes — <code>date-time</code>, <code>date</code>, <code>email</code>, <code>uri</code> y <code>uuid</code> —, la palabra clave <code>format</code> solo se añade cuando el valor realmente coincide.
      </p>
    </div>

    <div>
      <h2>Los arrays se fusionan, no se muestrean</h2>
      <p>
        En vez de describir solo el primer elemento del array, el generador <strong>fusiona los esquemas de todos los elementos</strong>. Dos objetos con los mismos campos se reducen a un único esquema; un campo que falte en algunos elementos queda fuera de <code>required</code>; y los arrays realmente mixtos — por ejemplo <code>[1, "two", true]</code> — se convierten en una unión <code>anyOf</code>.
        Para obtener el mejor resultado, pega un ejemplo cuyos arrays contengan varios elementos representativos.
      </p>
    </div>

    <div>
      <h2>Consejos y trampas</h2>
      <p>
        Un esquema generado solo puede ser tan completo como tu muestra: los campos opcionales ausentes del ejemplo no se pueden inferir, y los valores <code>null</code> se tipan como <code>null</code> en vez de como su tipo final. Trata la salida como un <strong>punto de partida</strong> — revisa las listas de <code>required</code>, ajusta las pistas de <code>format</code> y añade restricciones como <code>minimum</code> o <code>maxLength</code> a mano.
        Por último, ten en cuenta que <code>format</code> solo es una anotación en muchos validadores a menos que actives explícitamente la comprobación de formato.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Ein <strong>JSON Schema</strong> beschreibt die Struktur eines JSON-Dokuments — welche Felder es gibt, welche Typen sie haben und welche erforderlich sind —, sodass APIs, Konfigurationsdateien und Datenbanken automatisch validiert werden können. Dieser Generator leitet ein <strong>Draft-07-Schema</strong> aus jedem JSON-Beispiel ab, das du einfügst, und läuft zu 100 % im Browser: Es wird nichts hochgeladen, daher ist es sicher für private Payloads, API-Antworten und Produktionskonfigurationen.
    </p>

    <div>
      <h2>Wie die Inferenz funktioniert</h2>
      <p>
        Jeder Wert in deinem JSON wird rekursiv durchlaufen. Objekte werden zu <code>type: "object"</code> mit einer <code>properties</code>-Map, alle vorkommenden Schlüssel werden in <code>required</code> gelistet und <code>additionalProperties: true</code> hält das Schema großzügig.
        Zahlen werden in <code>integer</code> und <code>number</code> unterteilt, und Strings werden gegen gängige Formate getestet — <code>date-time</code>, <code>date</code>, <code>email</code>, <code>uri</code> und <code>uuid</code> —, das Schlüsselwort <code>format</code> wird nur gesetzt, wenn der Wert tatsächlich passt.
      </p>
    </div>

    <div>
      <h2>Arrays werden zusammengeführt, nicht nur anhand einer Stichprobe</h2>
      <p>
        Anstatt nur das erste Array-Element zu beschreiben, <strong>führt der Generator die Schemata aller Elemente zusammen</strong>. Zwei Objekte mit denselben Feldern werden zu einem Schema zusammengefasst; ein Feld, das bei einigen Elementen fehlt, fällt aus <code>required</code> heraus; und wirklich gemischte Arrays — etwa <code>[1, "two", true]</code> — werden zu einer <code>anyOf</code>-Union.
        Für das beste Ergebnis füge ein Beispiel ein, dessen Arrays mehrere repräsentative Elemente enthalten.
      </p>
    </div>

    <div>
      <h2>Tipps und Stolpersteine</h2>
      <p>
        Ein generiertes Schema ist nur so vollständig wie deine Stichprobe: optionale Felder, die im Beispiel fehlen, können nicht abgeleitet werden, und <code>null</code>-Werte werden als <code>null</code> typisiert statt als ihr eigentlicher Typ. Behandle die Ausgabe als <strong>Startpunkt</strong> — prüfe die <code>required</code>-Listen, verschärfe die <code>format</code>-Hinweise und füge Einschränkungen wie <code>minimum</code> oder <code>maxLength</code> von Hand hinzu.
        Beachte zuletzt, dass <code>format</code> in vielen Validatoren nur eine Annotation ist, es sei denn, du aktivierst explizit die Formatprüfung.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function JsonSchemaGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
