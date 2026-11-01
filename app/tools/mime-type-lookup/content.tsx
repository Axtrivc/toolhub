'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What a MIME type controls</h2>
    <p>Servers declare Content-Type so browsers know how to render bytes. A wrong value breaks things quietly: stylesheets served as text/plain are refused under strict MIME checking, SVGs download instead of rendering, fonts fail CORS-adjacent validation.</p>
    <h2>The ones people get wrong</h2>
    <p>JavaScript is now officially <strong>text/javascript</strong> (application/javascript was deprecated). Fonts moved to font/* in 2017 (font/woff2). Web app manifests need application/manifest+json exactly.</p>
    <h2>Serving downloads correctly</h2>
    <p>application/octet-stream forces download rather than display. Use it for binaries users should save; never for PDFs or images you want shown inline.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Qué controla un tipo MIME</h2>
    <p>Los servidores declaran Content-Type para que el navegador sepa cómo interpretar los bytes. Un valor incorrecto rompe cosas en silencio: las hojas de estilo servidas como text/plain se rechazan con comprobación MIME estricta, los SVG se descargan en vez de renderizarse y las fuentes fallan en la validación relacionada con CORS.</p>
    <h2>Los que suelen equivocarse</h2>
    <p>El valor oficial de JavaScript es ahora <strong>text/javascript</strong> (application/javascript quedó obsoleto). Las fuentes pasaron a font/* en 2017 (font/woff2). Los manifiestos de web apps requieren exactamente application/manifest+json.</p>
    <h2>Servir descargas correctamente</h2>
    <p>application/octet-stream fuerza la descarga en lugar de la visualización. Úsalo para binarios que el usuario debe guardar; nunca para PDF ni imágenes que quieras mostrar en línea.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ein MIME-Typ bestimmt</h2>
    <p>Server deklarieren Content-Type, damit der Browser weiß, wie er die Bytes darstellen soll. Ein falscher Wert bricht Dinge leise: Stylesheets als text/plain werden bei strenger MIME-Prüfung abgelehnt, SVGs werden heruntergeladen statt gerendert, Fonts scheitern an der CORS-nahen Prüfung.</p>
    <h2>Was viele falsch machen</h2>
    <p>JavaScript heißt offiziell jetzt <strong>text/javascript</strong> (application/javascript ist veraltet). Fonts gehören seit 2017 zu font/* (font/woff2). Web-App-Manifeste brauchen exakt application/manifest+json.</p>
    <h2>Downloads korrekt ausliefern</h2>
    <p>application/octet-stream erzwingt den Download statt der Anzeige. Es ist für Binärdateien gedacht, die Nutzer speichern sollen; niemals für PDFs oder Bilder, die inline erscheinen sollen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function MimeTypeLookupContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
