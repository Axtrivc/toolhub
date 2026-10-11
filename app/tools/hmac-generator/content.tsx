'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * HmacGenerator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>HMAC versus plain hashing</h2>
    <p>SHA-256 alone lets anyone re-compute the digest of a modified message. HMAC folds a secret key into the computation, making forgery infeasible without the key — that is why webhooks use it.</p>
    <h2>Verifying webhook signatures</h2>
    <p>Stripe, GitHub, and Slack sign payloads as HMAC-SHA256 of the raw body with your signing secret. Paste the exact raw body (not re-serialized JSON) and compare the computed hex against the header value.</p>
    <h2>Hex vs base64 output</h2>
    <p>Same bytes, different encoding. Services differ: Stripe shows hex-style comparisons, AWS SigV4 uses hex, OAuth1 uses base64. This tool gives both so no conversion step is needed.</p>
    <h2>Key hygiene</h2>
    <p>Short secrets undermine HMAC. Use 32+ random bytes. Rotating a leaked key invalidates old signatures immediately — compute a new expected signature after any rotation before debugging mismatches.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>HMAC 与普通哈希的区别</h2>
    <p>单独的 SHA-256 意味着任何人都能对篡改后的消息重新算出摘要。HMAC 在计算中混入一个密钥,没有密钥就无法伪造——这正是 Webhook 采用它的原因。</p>
    <h2>验证 Webhook 签名</h2>
    <p>Stripe、GitHub 和 Slack 都用你的签名密钥对原始请求体计算 HMAC-SHA256 来签名。粘贴一字不差的原始请求体(而不是重新序列化的 JSON),再把算出的 hex 与请求头里的值比对。</p>
    <h2>hex 与 base64 输出</h2>
    <p>同一份字节,不同的编码。各家服务不同:Stripe 按 hex 风格比对,AWS SigV4 用 hex,OAuth1 用 base64。本工具两种都给,省去一步转换。</p>
    <h2>密钥卫生</h2>
    <p>短密钥会削弱 HMAC。请使用 32 字节以上的随机值。轮换已泄露的密钥会立刻让旧签名失效——轮换后先重新算一遍期望签名,再去排查不匹配的问题。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>HMAC frente a un hash simple</h2>
    <p>Un SHA-256 a secas permite a cualquiera recalcular el digest de un mensaje modificado. HMAC incorpora una clave secreta al cálculo, haciendo la falsificación inviable sin ella — por eso los webhooks lo usan.</p>
    <h2>Verificar firmas de webhooks</h2>
    <p>Stripe, GitHub y Slack firman los payloads como HMAC-SHA256 del cuerpo en bruto con tu secreto de firma. Pega el cuerpo exacto en crudo (no JSON re-serializado) y compara el hex calculado con el valor de la cabecera.</p>
    <h2>Salidas hex frente a base64</h2>
    <p>Los mismos bytes, distinta codificación. Cada servicio elige: Stripe muestra comparaciones estilo hex, AWS SigV4 usa hex, OAuth1 usa base64. Esta herramienta da ambas y evita el paso de conversión.</p>
    <h2>Higiene de claves</h2>
    <p>Los secretos cortos debilitan HMAC. Usa 32+ bytes aleatorios. Rotar una clave filtrada invalida al instante las firmas antiguas — tras cualquier rotación, recalcula primero la firma esperada antes de depurar discordancias.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>HMAC gegenüber purem Hashing</h2>
    <p>Ein nackter SHA-256 erlaubt jedem, den Digest einer veränderten Nachricht neu zu berechnen. HMAC mischt einen geheimen Schlüssel in die Berechnung ein, wodurch Fälschung ohne den Schlüssel praktisch aussichtslos ist — deshalb nutzen Webhooks es.</p>
    <h2>Webhook-Signaturen prüfen</h2>
    <p>Stripe, GitHub und Slack signieren Payloads als HMAC-SHA256 des Raw-Bodys mit deinem Signing-Secret. Füge den exakten Raw-Body ein (nicht neu serialisiertes JSON) und vergleiche den berechneten Hex-Wert mit dem Header.</p>
    <h2>Hex- vs. Base64-Ausgabe</h2>
    <p>Dieselben Bytes, andere Kodierung. Die Dienste unterscheiden sich: Stripe zeigt Vergleiche im Hex-Stil, AWS SigV4 nutzt Hex, OAuth1 nutzt Base64. Dieses Werkzeug liefert beide und erspart den Konvertierungsschritt.</p>
    <h2>Schlüsselhygiene</h2>
    <p>Kurze Secrets untergraben HMAC. Nutze 32+ zufällige Bytes. Die Rotation eines geleakten Schlüssels invalidiert alte Signaturen sofort — berechne nach jeder Rotation zuerst die neue erwartete Signatur, bevor du Abweichungen untersuchst.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function HmacGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
