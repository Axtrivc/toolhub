'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This tool estimates the storage size of your text in different formats — bytes (UTF-8),
      kilobytes, Base64, and character/word/line counts. Useful for planning database fields and API
      limits.
    </p>
    <div>
      <h2>Why UTF-8 Size Matters</h2>
      <p>
        Characters take different byte counts in UTF-8: ASCII letters = 1 byte, accented Latin = 2
        bytes, Chinese/CJK = 3 bytes, emoji = 4 bytes. A 1000-character Chinese text is ~3000 bytes,
        not 1000.
      </p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Planning database VARCHAR sizes</li>
        <li>Checking API payload limits</li>
        <li>Estimating storage costs</li>
        <li>Validating text field constraints</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      这个工具用于估算文本在不同格式下的存储大小——字节(UTF-8)、千字节、Base64,以及字符/单词/行数。适合规划数据库字段和
      API 限制。
    </p>
    <div>
      <h2>为什么 UTF-8 大小很重要</h2>
      <p>
        在 UTF-8 中,不同字符占用的字节数不同:ASCII 字母 = 1 字节,带重音的拉丁字母 = 2 字节,中文/CJK = 3 字节,emoji
        = 4 字节。1000 个字符的中文文本约为 3000 字节,而不是 1000。
      </p>
    </div>
    <div>
      <h2>常见用途</h2>
      <ul>
        <li>规划数据库 VARCHAR 字段大小</li>
        <li>检查 API 负载限制</li>
        <li>估算存储成本</li>
        <li>校验文本字段约束</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta herramienta estima el tamaño de almacenamiento de tu texto en diferentes formatos — bytes
      (UTF-8), kilobytes, Base64 y recuentos de caracteres/palabras/líneas. Útil para planificar
      campos de bases de datos y límites de API.
    </p>
    <div>
      <h2>Por qué importa el tamaño en UTF-8</h2>
      <p>
        Los caracteres ocupan distintas cantidades de bytes en UTF-8: letras ASCII = 1 byte, latín
        acentuado = 2 bytes, chino/CJK = 3 bytes, emoji = 4 bytes. Un texto chino de 1000 caracteres
        ocupa ~3000 bytes, no 1000.
      </p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Planificar tamaños de VARCHAR en bases de datos</li>
        <li>Comprobar límites de payloads de API</li>
        <li>Estimar costes de almacenamiento</li>
        <li>Validar restricciones de campos de texto</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieses Werkzeug schätzt die Speichergröße deines Textes in verschiedenen Formaten — Bytes
      (UTF-8), Kilobytes, Base64 sowie Zeichen-/Wort-/Zeilenzahlen. Nützlich für die Planung von
      Datenbankfeldern und API-Limits.
    </p>
    <div>
      <h2>Warum die UTF-8-Größe wichtig ist</h2>
      <p>
        Zeichen belegen in UTF-8 unterschiedlich viele Bytes: ASCII-Buchstaben = 1 Byte, akzentuiertes
        Latein = 2 Bytes, Chinesisch/CJK = 3 Bytes, Emoji = 4 Bytes. Ein chinesischer Text mit 1000
        Zeichen belegt ~3000 Bytes, nicht 1000.
      </p>
    </div>
    <div>
      <h2>Häufige Einsatzbereiche</h2>
      <ul>
        <li>VARCHAR-Größen in Datenbanken planen</li>
        <li>API-Payload-Limits prüfen</li>
        <li>Speicherkosten abschätzen</li>
        <li>Textfeld-Einschränkungen validieren</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function TextSizeEstimatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
