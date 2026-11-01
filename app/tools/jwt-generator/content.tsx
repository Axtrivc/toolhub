'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * JwtGenerator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>When to use this</h2>
    <p>Perfect for debugging auth flows: mint a token with known claims, hand it to your API in a test request, and inspect what your middleware extracts. Pair with our JWT Decoder to see exactly what a server will read back.</p>
    <h2>Algorithm notes</h2>
    <p>HS256/384/512 are symmetric — the same secret signs and verifies. That is why this tool works fully client-side: the secret stays in your browser via WebCrypto. RS256/ES256 need a private key and belong in server-side code.</p>
    <h2>Claims worth setting</h2>
    <p>Always set exp (expiry) on real tokens; add iss (issuer) and aud (audience) when multiple services share tokens. The iat timestamp is pre-filled to now for you.</p>
    <h2>Never ship secrets client-side</h2>
    <p>A signing key embedded in front-end JavaScript is public the moment you deploy. Use this generator with throwaway test secrets only.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cuándo usarlo</h2>
    <p>Perfecto para depurar flujos de autenticación: genera un token con claims conocidos, pásalo a tu API en una petición de prueba e inspecciona lo que extrae tu middleware. Combínalo con nuestro JWT Decoder para ver exactamente lo que un servidor leerá de vuelta.</p>
    <h2>Notas sobre los algoritmos</h2>
    <p>HS256/384/512 son simétricos — el mismo secreto firma y verifica. Por eso esta herramienta funciona por completo en el cliente: el secreto se queda en tu navegador vía WebCrypto. RS256/ES256 exigen una clave privada y pertenecen al código del servidor.</p>
    <h2>Claims que conviene fijar</h2>
    <p>Pon siempre exp (caducidad) en los tokens reales; añade iss (emisor) y aud (audiencia) cuando varios servicios comparten tokens. La marca temporal iat viene prerrellenada con la hora actual.</p>
    <h2>Nunca envíes secretos al cliente</h2>
    <p>Una clave de firma embebida en el JavaScript del frontend es pública desde el momento del deploy. Usa este generador solo con secretos de prueba desechables.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wann du das nutzt</h2>
    <p>Ideal zum Debuggen von Auth-Flows: Erzeuge einen Token mit bekannten Claims, gib ihn in einer Testanfrage an deine API und prüfe, was deine Middleware daraus extrahiert. Kombiniere es mit unserem JWT-Decoder, um genau zu sehen, was ein Server zurückliest.</p>
    <h2>Hinweise zu den Algorithmen</h2>
    <p>HS256/384/512 sind symmetrisch — dasselbe Secret signiert und verifiziert. Genau deshalb läuft dieses Tool komplett clientseitig: Das Secret bleibt über WebCrypto in deinem Browser. RS256/ES256 brauchen einen privaten Schlüssel und gehören in Servercode.</p>
    <h2>Claims, die sich lohnen</h2>
    <p>Setze bei echten Tokens immer exp (Ablauf); ergänze iss (Aussteller) und aud (Zielgruppe), wenn mehrere Dienste Tokens teilen. Der iat-Zeitstempel ist bereits mit der aktuellen Zeit vorbelegt.</p>
    <h2>Nie Secrets ins Frontend shippen</h2>
    <p>Ein Signaturschlüssel im Frontend-JavaScript ist mit dem Deployment öffentlich. Nutze diesen Generator ausschließlich mit Wegwerf-Test-Secrets.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function JwtGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
