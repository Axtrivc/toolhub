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
      <strong>JSON</strong> is the data interchange format every API speaks. Converting YAML to JSON is
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
          <strong>Comments</strong> — anything after <code>#</code> (outside quotes) is ignored.
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
        <code>off</code> become booleans in older YAML 1.1 parsers, which is a famous source of
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

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <strong>YAML</strong>(YAML Ain't Markup Language)是一种对人类友好的配置格式,被 Docker Compose、Kubernetes、GitHub Actions、Ansible 以及许多 CI 工具使用。{' '}
      <strong>JSON</strong> 是每个 API 都在使用的通用数据交换格式。当需要把配置喂给只接受 JSON 的工具时,YAML 转 JSON 是常见需求——而且 YAML 的缩进规则很容易让人手工出错。本工具在本地解析 YAML,并输出干净的 JSON。
    </p>
    <div>
      <h2>本解析器支持什么</h2>
      <ul>
        <li>
          <strong>映射与序列</strong> —— 嵌套的键值对和列表({`- item`})。
        </li>
        <li>
          <strong>内联流</strong> —— 用 <code>[a, b]</code> 表示数组,用{' '}
          <code>{`{key: value}`}</code> 表示对象。
        </li>
        <li>
          <strong>标量</strong> —— 字符串(带引号和纯文本)、数字、布尔值(<code>true</code> /<code>false</code>),以及 <code>null</code>(也可以是 <code>~</code>)。
        </li>
        <li>
          <strong>注释</strong> —— <code>#</code> 之后的内容(引号外的)会被忽略。
        </li>
        <li>
          <strong>块标量</strong> —— <code>|</code>(字面量)和 <code>&gt;</code>(折叠)。
        </li>
      </ul>
    </div>
    <div>
      <h2>为什么 YAML 解析很棘手</h2>
      <p>
        与 JSON 不同,YAML 对 <strong>缩进敏感</strong> —— 两个空格和四个空格会得到完全不同的结构。缩进禁止使用制表符(只能用空格)。纯标量还会被隐式推断类型:<code>yes</code>、<code>no</code>、<code>on</code> 和{' '}
        <code>off</code> 在旧版 YAML 1.1 解析器中会变成布尔值,这是一个著名的 bug 来源(即「Norway problem」,<code>NO</code> 被解释成了 <code>false</code>)。如果需要把它们当作字符串,请加上引号。
      </p>
    </div>
    <div>
      <h2>当转换失败时</h2>
      <p>
        最常见的原因是缩进不一致——混合使用 2 空格和 4 空格,或者从复制粘贴中混入了制表符。错误信息会指向出错的那一行。此外还要留意同一个映射中是否有重复键:虽然有些 YAML 库会静默覆盖,但本解析器会将其报告为错误,因为重复键几乎总是意味着一个真实的错误。
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
      <strong>JSON</strong> es el formato de intercambio de datos que habla cada API. Convertir YAML a JSON es una necesidad común cuando se pasa configuración a herramientas que solo aceptan JSON — y las reglas de indentación de YAML hacen que sea fácil equivocarse a mano. Esta herramienta analiza YAML localmente y emite JSON limpio.
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
          <strong>Escalares</strong> — cadenas (entre comillas y simples), números, booleanos (<code>true</code> /<code>false</code>) y <code>null</code> (también <code>~</code>).
        </li>
        <li>
          <strong>Comentarios</strong> — todo lo que sigue a <code>#</code> (fuera de comillas) se ignora.
        </li>
        <li>
          <strong>Escalares en bloque</strong> — <code>|</code> (literal) y <code>&gt;</code> (plegado).
        </li>
      </ul>
    </div>
    <div>
      <h2>Por qué analizar YAML es delicado</h2>
      <p>
        A diferencia de JSON, YAML es <strong>sensible a la indentación</strong> — dos espacios frente a cuatro cambia por completo la estructura. Las tabulaciones están prohibidas para la indentación (usa solo espacios). Los escalares simples también se tipan implícitamente: <code>yes</code>, <code>no</code>, <code>on</code> y{' '}
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
      <strong>JSON</strong> ist das Datenaustauschformat, das jede API spricht. Das Umwandeln von YAML in JSON ist ein häufiges Bedürfnis, wenn man Konfiguration an Werkzeuge übergibt, die nur JSON akzeptieren — und die Einrückungsregeln von YAML machen es fehleranfällig, dies von Hand zu tun. Dieses Werkzeug parst YAML lokal und gibt sauberes JSON aus.
    </p>
    <div>
      <h2>Was dieser Parser unterstützt</h2>
      <ul>
        <li>
          <strong>Mappings &amp; Sequences</strong> — verschachtelte Schlüssel-Wert-Paare und Listen ({`- item`}).
        </li>
        <li>
          <strong>Inline-Flow</strong> — <code>[a, b]</code> für Arrays und{' '}
          <code>{`{key: value}`}</code> für Objekte.
        </li>
        <li>
          <strong>Skalare</strong> — Strings (in Anführungszeichen und einfach), Zahlen, Booleans (<code>true</code> /<code>false</code>) und <code>null</code> (auch <code>~</code>).
        </li>
        <li>
          <strong>Kommentare</strong> — alles nach <code>#</code> (außerhalb von Anführungszeichen) wird ignoriert.
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
        <code>off</code> werden in älteren YAML-1.1-Parsern zu Booleans, was eine berühmte Fehlerquelle ist (das „Norway-Problem", bei dem <code>NO</code> zu <code>false</code> wurde). Setze solche Werte in Anführungszeichen, wenn du sie als Strings brauchst.
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function YamlToJsonContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
