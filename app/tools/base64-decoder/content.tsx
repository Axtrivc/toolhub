'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool decodes Base64 back to readable text. Paste any valid Base64 string to recover the original content.
      Handles UTF-8 properly for international text.
    </p>
    <div>
      <h2>Common Decode Scenarios</h2>
      <ul>
        <li>Decode JWT tokens to inspect their payload</li>
        <li>Read data URIs from HTML or CSS</li>
        <li>Debug API responses that contain Base64</li>
        <li>Recover text from email attachments</li>
        <li>Inspect HTTP Basic Auth headers</li>
      </ul>
    </div>
    <div>
      <h2>When Decoding Fails</h2>
      <p>
        If you see an error, the input is likely not valid Base64. Common causes: missing padding (=), stray
        whitespace, or characters outside the Base64 alphabet (A-Z, a-z, 0-9, +, /).
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      本工具把 Base64 解码回可读文本。粘贴任意合法的 Base64 字符串,即可还原原始内容。对国际文本能正确处理 UTF-8。
    </p>
    <div>
      <h2>常见的解码场景</h2>
      <ul>
        <li>解码 JWT 令牌,查看其中的 payload</li>
        <li>读取 HTML 或 CSS 中的 data URI</li>
        <li>调试包含 Base64 的 API 响应</li>
        <li>从邮件附件中还原文本</li>
        <li>查看 HTTP Basic Auth 头</li>
      </ul>
    </div>
    <div>
      <h2>解码失败时</h2>
      <p>
        如果出现错误,输入很可能不是合法的 Base64。常见原因:缺少填充 (=)、多余的空白,或不在 Base64 字母表 (A-Z, a-z, 0-9, +, /) 之内的字符。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta descodifica Base64 de vuelta a texto legible. Pega cualquier cadena Base64 válida para
      recuperar el contenido original. Gestiona UTF-8 correctamente para texto internacional.
    </p>
    <div>
      <h2>Escenarios comunes de descodificación</h2>
      <ul>
        <li>Descodificar tokens JWT para inspeccionar su payload</li>
        <li>Leer data URIs de HTML o CSS</li>
        <li>Depurar respuestas de API que contienen Base64</li>
        <li>Recuperar texto de adjuntos de correo</li>
        <li>Inspeccionar cabeceras HTTP Basic Auth</li>
      </ul>
    </div>
    <div>
      <h2>Cuando la descodificación falla</h2>
      <p>
        Si ves un error, la entrada probablemente no es Base64 válido. Causas comunes: falta de relleno (=), espacios
        en blanco sobrantes o caracteres fuera del alfabeto Base64 (A-Z, a-z, 0-9, +, /).
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug dekodiert Base64 zurück zu lesbarem Text. Füge einen beliebigen gültigen Base64-String ein, um
      den ursprünglichen Inhalt wiederherzustellen. Es verarbeitet UTF-8 für internationalen Text korrekt.
    </p>
    <div>
      <h2>Häufige Dekodierungsszenarien</h2>
      <ul>
        <li>JWT-Tokens dekodieren, um den Payload zu inspizieren</li>
        <li>Data URIs aus HTML oder CSS lesen</li>
        <li>API-Antworten debuggen, die Base64 enthalten</li>
        <li>Text aus E-Mail-Anhängen wiederherstellen</li>
        <li>HTTP-Basic-Auth-Header inspizieren</li>
      </ul>
    </div>
    <div>
      <h2>Wenn die Dekodierung fehlschlägt</h2>
      <p>
        Wenn ein Fehler auftritt, ist die Eingabe wahrscheinlich kein gültiges Base64. Häufige Ursachen: fehlendes
        Padding (=), versehentliche Leerzeichen oder Zeichen außerhalb des Base64-Alphabets (A-Z, a-z, 0-9, +, /).
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function Base64DecoderContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
