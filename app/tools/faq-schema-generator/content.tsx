'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * FaqSchemaGenerator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Google actually requires</h2>
    <p>FAQPage markup is a promise: every question and answer in the script tag must also be visible to visitors on that page. Schema that describes invisible content is considered misleading and can cost you the rich result or trigger a manual action — so generate the markup from the FAQ you already show, not the one you wish you had.</p>
    <h2>Why JSON-LD beats microdata</h2>
    <p>Google explicitly prefers JSON-LD. It lives in one self-contained script tag, survives CMS and theme updates that would silently break inline microdata attributes, and can be injected server-side or by a tag manager without touching your visible HTML at all.</p>
    <h2>Placement and validation</h2>
    <p>The script can sit in the head or at the end of the body — crawlers read the whole rendered document. Validate with Google's Rich Results Test before shipping; the two classic failures are a trailing comma breaking the JSON and Q&A text that differs from what the page displays.</p>
    <h2>What to expect since August 2023</h2>
    <p>Google now shows FAQ rich results almost exclusively for authoritative government and health websites, so the accordion snippet is no longer guaranteed. The markup still pays its way: other engines and AI answer engines read it, it clarifies page structure, and it costs nothing to keep valid.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Lo que Google exige de verdad</h2>
    <p>El marcado FAQPage es una promesa: cada pregunta y respuesta del script debe ser también visible para los visitantes de esa página. El schema que describe contenido invisible se considera engañoso y puede costarte el resultado enriquecido o una acción manual — genera el marcado del FAQ que ya muestras, no del que te gustaría tener.</p>
    <h2>Por qué JSON-LD gana a microdata</h2>
    <p>Google prefiere expresamente JSON-LD: vive en una única etiqueta script, sobrevive a cambios de tema que romperían en silencio los atributos microdata inline, y puede inyectarse en el servidor o desde el gestor de etiquetas sin tocar el HTML visible.</p>
    <h2>Dónde colocarlo y cómo validarlo</h2>
    <p>El script puede ir en el head o al final del body: los rastreadores leen el documento renderizado completo. Valida con el Rich Results Test antes de publicar; los dos fallos clásicos son una coma final que rompe el JSON y un texto que difiere del que muestra la página.</p>
    <h2>Qué esperar desde agosto de 2023</h2>
    <p>Google reserva los resultados enriquecidos de FAQ casi en exclusiva a sitios gubernamentales y de salud autorizados, así que el acordeón ya no está garantizado. Aun así el marcado se paga solo: otros buscadores y motores de IA lo leen, aclara la estructura y mantenerlo válido no cuesta nada.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was Google wirklich verlangt</h2>
    <p>FAQPage-Markup ist ein Versprechen: Jede Frage und Antwort im Script-Tag muss für Besucher derselben Seite sichtbar sein. Markup über unsichtbare Inhalte gilt als irreführend und kann den Rich Result kosten oder eine manuelle Maßnahme auslösen — erzeuge das Markup aus dem FAQ, das du zeigst, nicht aus einem erfundenen.</p>
    <h2>Warum JSON-LD besser ist als Microdata</h2>
    <p>Google bevorzugt ausdrücklich JSON-LD: Es steckt in einem einzigen Script-Tag, übersteht Theme-Updates, die Inline-Microdata still brechen würden, und lässt sich serverseitig oder über den Tag-Manager einfügen, ohne das sichtbare HTML anzufassen.</p>
    <h2>Platzierung und Prüfung</h2>
    <p>Das Script darf im Head oder am Ende des Body stehen — Crawler lesen das gesamte gerenderte Dokument. Prüfe vor dem Launch mit dem Rich Results Test; die zwei Klassiker sind ein Komma zu viel, das das JSON bricht, und Text, der von der Seitendarstellung abweicht.</p>
    <h2>Was seit August 2023 zu erwarten ist</h2>
    <p>Google zeigt FAQ-Rich-Results fast nur noch autoritativen Behörden- und Gesundheitssites, das Akkordeon-Snippet ist also nicht mehr sicher. Das Markup lohnt sich trotzdem: Andere Suchmaschinen und KI-Antwortmaschinen lesen es, es klärt die Seitenstruktur — und valide zu bleiben kostet nichts.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function FaqSchemaGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
