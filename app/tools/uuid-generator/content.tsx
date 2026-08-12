'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * UUID Generator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出(<h2>What Is This Tool?</h2> + intro
 * + 各 section 包在 <div> 中,faqs 已丢弃),DOM 级 SEO 安全。zh/es/de 在客户端
 * hydration 后按 locale 切换。UUID、RFC 4122 等专有名词与十六进制示例保持不变。
 */

// ──────────────────────────── en (matches original rendering) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      A <strong>UUID</strong> (Universally Unique Identifier) is a 128-bit number used as a unique ID in databases, APIs, sessions, and distributed systems. This generator creates RFC 4122 version 4 UUIDs (random) using your browser&apos;s cryptographic random source.
    </p>
    <div>
      <h2>Why UUIDs?</h2>
      <ul>
        <li><strong>No central authority</strong> &mdash; anyone can generate without coordination</li>
        <li><strong>Effectively unique</strong> &mdash; collision probability is astronomically low</li>
        <li><strong>Used everywhere</strong> &mdash; databases, OAuth, file systems, message queues</li>
        <li><strong>Anonymous</strong> &mdash; no embedded sequence or timestamp reveals count/order</li>
      </ul>
    </div>
    <div>
      <h2>The Structure of a UUID</h2>
      <p>
        A UUID looks like <code>550e8400-e29b-41d4-a716-446655440000</code> &mdash; 32 hex digits in 5 groups separated by hyphens. Version 4 (the most common) uses random bits except for a version indicator and a variant indicator.
      </p>
    </div>
    <div>
      <h2>Common Uses</h2>
      <ul>
        <li>Primary keys in databases (especially distributed systems)</li>
        <li>Session tokens and API request IDs</li>
        <li>File names for uploaded content</li>
        <li>Identifying devices, users, or events</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      <strong>UUID</strong>(通用唯一标识符)是一个 128 位的数字,在数据库、API、会话和分布式系统中用作唯一 ID。这个生成器使用你浏览器的加密随机源来创建 RFC 4122 版本 4(随机)的 UUID。
    </p>
    <div>
      <h2>为什么需要 UUID?</h2>
      <ul>
        <li><strong>无需中心化机构</strong> —— 任何人都可以无需协调地生成</li>
        <li><strong>实际唯一</strong> —— 冲突概率低到天文级别</li>
        <li><strong>无处不在</strong> —— 数据库、OAuth、文件系统、消息队列</li>
        <li><strong>匿名</strong> —— 不嵌入序列号或时间戳,不会泄露数量或顺序</li>
      </ul>
    </div>
    <div>
      <h2>UUID 的结构</h2>
      <p>
        一个 UUID 看起来像 <code>550e8400-e29b-41d4-a716-446655440000</code> —— 由连字符分隔的 5 组共 32 个十六进制数字。版本 4(最常见)除了版本指示位和变体指示位外,其余位均为随机。
      </p>
    </div>
    <div>
      <h2>常见用途</h2>
      <ul>
        <li>数据库中的主键(尤其是分布式系统)</li>
        <li>会话令牌和 API 请求 ID</li>
        <li>上传内容的文件名</li>
        <li>标识设备、用户或事件</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Un <strong>UUID</strong> (Identificador Único Universal) es un número de 128 bits usado como identificador único en bases de datos, APIs, sesiones y sistemas distribuidos. Este generador crea UUIDs RFC 4122 versión 4 (aleatorios) usando la fuente criptográfica de tu navegador.
    </p>
    <div>
      <h2>¿Por qué UUID?</h2>
      <ul>
        <li><strong>Sin autoridad central</strong> — cualquiera puede generarlos sin coordinación</li>
        <li><strong>Efectivamente únicos</strong> — la probabilidad de colisión es astronómicamente baja</li>
        <li><strong>Usados en todas partes</strong> — bases de datos, OAuth, sistemas de archivos, colas de mensajes</li>
        <li><strong>Anónimos</strong> — ninguna secuencia o marca de tiempo incrustada revela cantidad u orden</li>
      </ul>
    </div>
    <div>
      <h2>La estructura de un UUID</h2>
      <p>
        Un UUID se ve así: <code>550e8400-e29b-41d4-a716-446655440000</code> — 32 dígitos hexadecimales en 5 grupos separados por guiones. La versión 4 (la más común) usa bits aleatorios salvo un indicador de versión y un indicador de variante.
      </p>
    </div>
    <div>
      <h2>Usos comunes</h2>
      <ul>
        <li>Claves primarias en bases de datos (especialmente sistemas distribuidos)</li>
        <li>Tokens de sesión e IDs de petición API</li>
        <li>Nombres de archivo para contenido subido</li>
        <li>Identificar dispositivos, usuarios o eventos</li>
      </ul>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Eine <strong>UUID</strong> (Universally Unique Identifier / universell eindeutiger Bezeichner) ist eine 128-Bit-Zahl, die als eindeutige ID in Datenbanken, APIs, Sessions und verteilten Systemen verwendet wird. Dieser Generator erzeugt RFC 4122 Version-4-UUIDs (zufällig) mit der kryptografischen Zufallsquelle deines Browsers.
    </p>
    <div>
      <h2>Warum UUIDs?</h2>
      <ul>
        <li><strong>Keine zentrale Instanz</strong> — jeder kann sie ohne Absprache erzeugen</li>
        <li><strong>Effektiv eindeutig</strong> — die Kollisionswahrscheinlichkeit ist astronomisch gering</li>
        <li><strong>Überall im Einsatz</strong> — Datenbanken, OAuth, Dateisysteme, Message-Queues</li>
        <li><strong>Anonym</strong> — keine eingebettete Sequenz oder kein Zeitstempel verrät Anzahl oder Reihenfolge</li>
      </ul>
    </div>
    <div>
      <h2>Der Aufbau einer UUID</h2>
      <p>
        Eine UUID sieht so aus: <code>550e8400-e29b-41d4-a716-446655440000</code> — 32 Hexadezimalziffern in 5 durch Bindestriche getrennten Gruppen. Version 4 (die häufigste) verwendet zufällige Bits bis auf einen Versions-Indikator und einen Varianten-Indikator.
      </p>
    </div>
    <div>
      <h2>Häufige Anwendungen</h2>
      <ul>
        <li>Primärschlüssel in Datenbanken (besonders in verteilten Systemen)</li>
        <li>Session-Tokens und API-Request-IDs</li>
        <li>Dateinamen für hochgeladene Inhalte</li>
        <li>Identifikation von Geräten, Nutzern oder Ereignissen</li>
      </ul>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function UUIDGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
