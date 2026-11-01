'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Base64 encodes binary data as ASCII text so it can travel through systems designed for text &mdash; email, JSON,
      HTML, URLs. This tool encodes any text to Base64, with proper UTF-8 support for non-English characters and
      emoji.
    </p>
    <div>
      <h2>What Base64 Is Used For</h2>
      <ul>
        <li><strong>Email attachments</strong> (MIME encoding)</li>
        <li><strong>Data URIs</strong> &mdash; embedding images directly in HTML/CSS</li>
        <li><strong>APIs</strong> &mdash; sending binary data in JSON</li>
        <li><strong>JWT tokens</strong> for authentication</li>
        <li><strong>Storing binary in text-based formats</strong></li>
      </ul>
    </div>
    <div>
      <h2>Base64 Is NOT Encryption</h2>
      <p>
        Base64 is an <em>encoding</em>, not encryption. Anyone can decode it instantly &mdash; it provides zero
        security. Never use Base64 to protect sensitive data. Use it only for transport compatibility, then apply
        real encryption (AES, etc.) separately.
      </p>
    </div>
    <div>
      <h2>The Size Cost</h2>
      <p>
        Base64 output is about <strong>33% larger</strong> than the input. Every 3 bytes becomes 4 characters. This is
        the trade-off for text-safe transport.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Base64 codifica datos binarios como texto ASCII para que puedan viajar por sistemas diseñados para texto —
      correo, JSON, HTML, URLs. Esta herramienta codifica cualquier texto a Base64, con soporte UTF-8 adecuado para
      caracteres no ingleses y emojis.
    </p>
    <div>
      <h2>Para qué se usa Base64</h2>
      <ul>
        <li><strong>Adjuntos de correo</strong> (codificación MIME)</li>
        <li><strong>Data URIs</strong> — incrustar imágenes directamente en HTML/CSS</li>
        <li><strong>APIs</strong> — enviar datos binarios en JSON</li>
        <li><strong>Tokens JWT</strong> para autenticación</li>
        <li><strong>Almacenar binario en formatos basados en texto</strong></li>
      </ul>
    </div>
    <div>
      <h2>Base64 NO es cifrado</h2>
      <p>
        Base64 es una <em>codificación</em>, no cifrado. Cualquiera puede descodificarlo al instante — no ofrece
        ninguna seguridad. Nunca uses Base64 para proteger datos sensibles. Úsalo solo para compatibilidad de
        transporte y aplica luego cifrado real (AES, etc.) por separado.
      </p>
    </div>
    <div>
      <h2>El coste de tamaño</h2>
      <p>
        La salida de Base64 es aproximadamente un <strong>33 % más grande</strong> que la entrada. Cada 3 bytes se
        convierte en 4 caracteres. Este es el equilibrio a cambio de un transporte seguro en texto.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Base64 kodiert Binärdaten als ASCII-Text, damit sie Systeme passieren können, die für Text gemacht sind —
      E-Mail, JSON, HTML, URLs. Dieses Werkzeug kodiert beliebigen Text zu Base64, mit korrekter UTF-8-Unterstützung
      für nicht-englische Zeichen und Emojis.
    </p>
    <div>
      <h2>Wofür Base64 verwendet wird</h2>
      <ul>
        <li><strong>E-Mail-Anhänge</strong> (MIME-Kodierung)</li>
        <li><strong>Data URIs</strong> — Bilder direkt in HTML/CSS einbetten</li>
        <li><strong>APIs</strong> — Binärdaten in JSON senden</li>
        <li><strong>JWT-Tokens</strong> zur Authentifizierung</li>
        <li><strong>Binärdaten in textbasierten Formaten speichern</strong></li>
      </ul>
    </div>
    <div>
      <h2>Base64 ist KEINE Verschlüsselung</h2>
      <p>
        Base64 ist eine <em>Kodierung</em>, keine Verschlüsselung. Jeder kann es sofort dekodieren — es bietet
        keinerlei Sicherheit. Verwende Base64 nie, um sensible Daten zu schützen. Nutze es nur für
        Transportkompatibilität und wende danach echte Verschlüsselung (AES usw.) separat an.
      </p>
    </div>
    <div>
      <h2>Der Größennachteil</h2>
      <p>
        Base64-Output ist etwa <strong>33 % größer</strong> als die Eingabe. Aus jeweils 3 Bytes werden 4 Zeichen.
        Das ist der Kompromiss für textsicheren Transport.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function Base64EncoderContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
