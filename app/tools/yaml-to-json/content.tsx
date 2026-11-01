'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      <strong>YAML</strong> (YAML Ain&apos;t Markup Language) is a human-friendly configuration format
      used by Docker Compose, Kubernetes, GitHub Actions, Ansible, and many CI tools.{' '}
      <strong>JSON</strong>{' '}
      is the data interchange format every API speaks. Converting YAML to JSON is
      a common need when feeding config into tooling that only accepts JSON — and YAML&apos;s
      indentation rules make it easy to get wrong by hand. This tool parses YAML locally and emits
      clean JSON.
    </p>
    <div>
      <h2>What this parser supports</h2>
      <ul>
        <li>
          <strong>Mappings &amp; sequences</strong> — nested key-value pairs and lists ({`- item`}).
        </li>
        <li>
          <strong>Inline flow</strong> — <code>[a, b]</code> for arrays and{' '}
          <code>{`{key: value}`}</code> for objects.
        </li>
        <li>
          <strong>Scalars</strong> — strings (quoted and plain), numbers, booleans (<code>true</code>
          /<code>false</code>), and <code>null</code> (also <code>~</code>).
        </li>
        <li>
          <strong>Comments</strong> — a <code>#</code> preceded by a space (outside quotes)
          starts a comment; the rest of the line is ignored.
        </li>
        <li>
          <strong>Block scalars</strong> — <code>|</code> (literal) and <code>&gt;</code> (folded).
        </li>
      </ul>
    </div>
    <div>
      <h2>Why YAML parsing is tricky</h2>
      <p>
        Unlike JSON, YAML is <strong>indentation-sensitive</strong> — two spaces versus four changes
        the structure entirely. Tabs are forbidden for indentation (use spaces only). Plain scalars
        are also implicitly typed: <code>yes</code>, <code>no</code>, <code>on</code>, and{' '}
        <code>off</code>{' '}
        become booleans in older YAML 1.1 parsers, which is a famous source of
        bugs (the &quot;Norway problem&quot; where <code>NO</code> became <code>false</code>). Quote
        such values if you need them as strings.
      </p>
    </div>
    <div>
      <h2>When the conversion fails</h2>
      <p>
        The most common cause is inconsistent indentation — mixing 2-space and 4-space steps, or tabs
        sneaking in from a copy-paste. The error message points to the offending line. Also watch for
        duplicate keys in the same mapping: while some YAML libraries silently overwrite, this parser
        reports them as errors because they almost always indicate a real mistake.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      <strong>YAML</strong> (YAML Ain't Markup Language) es un formato de configuración amigable para humanos utilizado por Docker Compose, Kubernetes, GitHub Actions, Ansible y muchas herramientas de CI.{' '}
      <strong>JSON</strong> es el formato de intercambio de datos que entiende cada API. Convertir YAML a JSON es una necesidad común cuando se pasa configuración a herramientas que solo aceptan JSON — y las reglas de indentación de YAML hacen que sea fácil equivocarse a mano. Esta herramienta analiza YAML localmente y genera JSON limpio.
    </p>
    <div>
      <h2>Qué admite este analizador</h2>
      <ul>
        <li>
          <strong>Mapeos y secuencias</strong> — pares clave-valor anidados y listas ({`- item`}).
        </li>
        <li>
          <strong>Flujo en línea</strong> — <code>[a, b]</code> para arrays y{' '}
          <code>{`{key: value}`}</code> para objetos.
        </li>
        <li>
          <strong>Escalares</strong> — cadenas (con comillas y sin comillas), números, booleanos (<code>true</code> /<code>false</code>) y <code>null</code> (también <code>~</code>).
        </li>
        <li>
          <strong>Comentarios</strong> — un <code>#</code> precedido de un espacio (fuera de
          comillas) inicia un comentario; el resto de la línea se ignora.
        </li>
        <li>
          <strong>Escalares en bloque</strong> — <code>|</code> (literal) y <code>&gt;</code> (plegado).
        </li>
      </ul>
    </div>
    <div>
      <h2>Por qué analizar YAML es delicado</h2>
      <p>
        A diferencia de JSON, YAML es <strong>sensible a la indentación</strong> — dos espacios en lugar de cuatro cambian por completo la estructura. Las tabulaciones están prohibidas para la indentación (usa solo espacios). Los escalares simples también se tipan implícitamente: <code>yes</code>, <code>no</code>, <code>on</code> y{' '}
        <code>off</code> se convierten en booleanos en los analizadores YAML 1.1 más antiguos, una fuente célebre de errores (el «Norway problem», donde <code>NO</code> se convertía en <code>false</code>). Entrecomilla esos valores si necesitas que sean cadenas.
      </p>
    </div>
    <div>
      <h2>Cuando la conversión falla</h2>
      <p>
        La causa más común es una indentación inconsistente — mezclar pasos de 2 y 4 espacios, o tabulaciones que se cuelan al copiar y pegar. El mensaje de error señala la línea problemática. También conviene vigilar las claves duplicadas en un mismo mapeo: mientras que algunas librerías YAML las sobrescriben en silencio, este analizador las reporta como errores porque casi siempre indican un fallo real.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      <strong>YAML</strong> (YAML Ain't Markup Language) ist ein menschenfreundliches Konfigurationsformat, das von Docker Compose, Kubernetes, GitHub Actions, Ansible und vielen CI-Tools verwendet wird.{' '}
      <strong>JSON</strong> ist das Datenaustauschformat, das jede API versteht. Die Umwandlung von YAML in JSON ist häufig nötig, wenn man Konfiguration an Werkzeuge übergibt, die nur JSON akzeptieren — und die Einrückungsregeln von YAML machen die manuelle Umwandlung fehleranfällig. Dieses Werkzeug parst YAML lokal und gibt sauberes JSON aus.
    </p>
    <div>
      <h2>Was dieser Parser unterstützt</h2>
      <ul>
        <li>
          <strong>Mappings &amp; Sequenzen</strong> — verschachtelte Schlüssel-Wert-Paare und Listen ({`- item`}).
        </li>
        <li>
          <strong>Inline-Flow</strong> — <code>[a, b]</code> für Arrays und{' '}
          <code>{`{key: value}`}</code> für Objekte.
        </li>
        <li>
          <strong>Skalare</strong> — Strings (mit und ohne Anführungszeichen), Zahlen, Booleans (<code>true</code> /<code>false</code>) und <code>null</code> (auch <code>~</code>).
        </li>
        <li>
          <strong>Kommentare</strong> — ein <code>#</code> nach einem Leerzeichen (außerhalb von
          Anführungszeichen) beginnt einen Kommentar; der Rest der Zeile wird ignoriert.
        </li>
        <li>
          <strong>Block-Skalare</strong> — <code>|</code> (literal) und <code>&gt;</code> (gefaltet).
        </li>
      </ul>
    </div>
    <div>
      <h2>Warum YAML-Parsing tückisch ist</h2>
      <p>
        Im Gegensatz zu JSON ist YAML <strong>einrückungsempfindlich</strong> — zwei statt vier Leerzeichen ändern die Struktur vollständig. Tabulatoren sind für die Einrückung verboten (verwende nur Leerzeichen). Einfache Skalare werden außerdem implizit typisiert: <code>yes</code>, <code>no</code>, <code>on</code> und{' '}
        <code>off</code> werden in älteren YAML-1.1-Parsern zu Booleans, was eine berühmte Fehlerquelle ist (das „Norway-Problem“, bei dem <code>NO</code> zu <code>false</code> wurde). Setze solche Werte in Anführungszeichen, wenn du sie als Strings brauchst.
      </p>
    </div>
    <div>
      <h2>Wenn die Konvertierung scheitert</h2>
      <p>
        Die häufigste Ursache ist inkonsistente Einrückung — ein Mix aus 2er- und 4er-Schritten oder Tabulatoren, die beim Kopieren und Einfügen hineinrutschen. Die Fehlermeldung verweist auf die betreffende Zeile. Achte außerdem auf doppelte Schlüssel innerhalb desselben Mappings: Während einige YAML-Bibliotheken diese stillschweigend überschreiben, meldet dieser Parser sie als Fehler, da sie fast immer auf einen echten Fehler hinweisen.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function YamlToJsonContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
