'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * HmacGenerator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function HmacGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
