'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>GitHub anchor rules</h2>
    <p>GitHub lowercases headings, strips punctuation, converts spaces to dashes, and appends -1/-2 for duplicates. Links generated elsewhere frequently miss the duplicate rule — these do not.</p>
    <h2>Choosing depth</h2>
    <p>Depth H2-H3 produces a scannable outline for typical articles; pulling in H4+ helps long technical docs but clutters README files. The selector above regenerates instantly.</p>
    <h2>Where to paste it</h2>
    <p>Drop the list right after your intro paragraph. On GitHub, readers can jump via the built-in outline icon too — but rendered TOCs work everywhere Markdown renders, including blogs and docs sites.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Reglas de anclas de GitHub</h2>
    <p>GitHub pone los títulos en minúsculas, quita la puntuación, convierte espacios en guiones y añade -1/-2 a los duplicados. Los enlaces generados en otras herramientas suelen ignorar la regla de duplicados — estos no.</p>
    <h2>Elegir la profundidad</h2>
    <p>La profundidad H2-H3 da un esquema legible para artículos típicos; incluir H4+ ayuda en documentación técnica larga, pero satura los README. El selector de arriba regenera al instante.</p>
    <h2>Dónde pegarlo</h2>
    <p>Coloca la lista justo después del párrafo de introducción. En GitHub también se puede saltar con el icono de esquema integrado — pero un TOC renderizado funciona dondequiera que se renderice Markdown, incluidos blogs y sitios de documentación.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>GitHub-Anker-Regeln</h2>
    <p>GitHub kleinschreibt Überschriften, entfernt Satzzeichen, wandelt Leerzeichen in Bindestriche und hängt bei Duplikaten -1/-2 an. Anderswo erzeugte Links missachten oft die Duplikat-Regel — diese hier nicht.</p>
    <h2>Tiefe wählen</h2>
    <p>Die Tiefe H2-H3 ergibt eine übersichtliche Gliederung für typische Artikel; H4+ hilft bei langen technischen Doks, wirkt in READMEs aber überladen. Der Selektor oben generiert sofort neu.</p>
    <h2>Wo einfügen?</h2>
    <p>Setze die Liste direkt nach dem Einleitungsabsatz ein. Auf GitHub springt man auch über das eingebaute Gliederungssymbol — aber ein gerenderter TOC funktioniert überall, wo Markdown gerendert wird, auch in Blogs und auf Dokumentationsseiten.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function MarkdownTocGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
