'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool formats and validates JSON. Paste minified or messy JSON and get back properly
      indented, human-readable output. Syntax errors are reported with a message.
    </p>
    <div>
      <h2>Why Format JSON?</h2>
      <ul>
        <li>Debugging API responses</li>
        <li>Reading configuration files</li>
        <li>Reviewing large payloads during development</li>
        <li>Catching syntax errors before deployment</li>
      </ul>
    </div>
    <div>
      <h2>Common JSON Errors</h2>
      <ul>
        <li>Trailing commas (not allowed in strict JSON)</li>
        <li>Single quotes instead of double quotes</li>
        <li>Comments (JSON doesn&apos;t support them)</li>
        <li>Unquoted keys</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      这个工具用于格式化和校验 JSON。粘贴压缩或混乱的 JSON,即可获得正确缩进、便于阅读的输出。语法错误会附带提示信息显示。
    </p>
    <div>
      <h2>为什么要格式化 JSON?</h2>
      <ul>
        <li>调试 API 响应</li>
        <li>阅读配置文件</li>
        <li>开发期间审查大型 payload</li>
        <li>部署前捕捉语法错误</li>
      </ul>
    </div>
    <div>
      <h2>常见的 JSON 错误</h2>
      <ul>
        <li>尾随逗号(严格 JSON 不允许)</li>
        <li>用单引号代替双引号</li>
        <li>注释(JSON 不支持注释)</li>
        <li>键未加引号</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta formatea y valida JSON. Pega JSON minimizado o desordenado y obtén una salida
      correctamente indentada y legible. Los errores de sintaxis se muestran con un mensaje.
    </p>
    <div>
      <h2>¿Por qué formatear JSON?</h2>
      <ul>
        <li>Depurar respuestas de API</li>
        <li>Leer archivos de configuración</li>
        <li>Revisar payloads grandes durante el desarrollo</li>
        <li>Detectar errores de sintaxis antes del despliegue</li>
      </ul>
    </div>
    <div>
      <h2>Errores comunes de JSON</h2>
      <ul>
        <li>Comas finales (no permitidas en JSON estricto)</li>
        <li>Comillas simples en lugar de comillas dobles</li>
        <li>Comentarios (JSON no los admite)</li>
        <li>Claves sin comillas</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug formatiert und validiert JSON. Füge minimiertes oder unordentliches JSON ein
      und erhältst richtig eingerückten, lesbaren Output. Syntaxfehler werden mit einer Meldung
      angezeigt.
    </p>
    <div>
      <h2>Warum JSON formatieren?</h2>
      <ul>
        <li>API-Antworten debuggen</li>
        <li>Konfigurationsdateien lesen</li>
        <li>Große Payloads während der Entwicklung prüfen</li>
        <li>Syntaxfehler vor dem Deployment abfangen</li>
      </ul>
    </div>
    <div>
      <h2>Häufige JSON-Fehler</h2>
      <ul>
        <li>Nachgestellte Kommas (in strengem JSON nicht erlaubt)</li>
        <li>Einfache Anführungszeichen statt doppelter</li>
        <li>Kommentare (JSON unterstützt keine)</li>
        <li>Nicht in Anführungszeichen gesetzte Schlüssel</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function JSONFormatterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
