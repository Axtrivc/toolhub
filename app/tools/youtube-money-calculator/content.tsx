'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * YouTubeMoneyCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>RPM is what actually lands in your account</h2>
    <p>RPM — revenue per 1,000 views — is your cut after YouTube keeps 45% of ad money. CPM is what advertisers pay per 1,000 ad impressions; RPM is always lower and always the honest number for forecasting. Work in RPM ranges, not a single value, because seasonality swings it 30-40% between January and the Q4 ad peak.</p>
    <h2>Niche decides the order of magnitude</h2>
    <p>Long-form finance and business content clears $8-15 RPM; tech reviews $4-10; general vlogs $2-5; gaming $1.5-3. Shorts monetize at $0.05-0.15 RPM — a tenth of long-form at best. A million Shorts views can earn less than fifty thousand finance views.</p>
    <h2>Not every view is a paid view</h2>
    <p>Only monetized playbacks earn: repeat views, ad-blocker sessions, and restricted-mode or redemonetized content pay nothing. Real checks usually land 10-20% under naive view-times-RPM math, which is exactly the gap between the conservative and typical sliders here.</p>
    <h2>Ads are the floor, not the business</h2>
    <p>Once a channel passes roughly 100k monthly views, sponsorships, affiliate links, memberships, and products usually out-earn AdSense — a $500 integrated sponsorship is worth about 125,000 finance views. Treat the calculator's output as your negotiating floor for everything else.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El RPM es lo que de verdad llega a tu cuenta</h2>
    <p>El RPM — ingresos por 1.000 visualizaciones — es tu parte después de que YouTube se quede el 45% de la publicidad. El CPM es lo que pagan los anunciantes por 1.000 impresiones; el RPM es siempre menor y siempre la cifra honesta para proyectar. Trabaja con rangos: entre enero y el pico publicitario del Q4 el RPM oscila un 30-40%.</p>
    <h2>El nicho decide el orden de magnitud</h2>
    <p>El contenido largo de finanzas supera los 8-15 $ de RPM; las reseñas tecnológicas 4-10 $; los vlogs genéricos 2-5 $; el gaming 1,5-3 $. Los Shorts monetizan a 0,05-0,15 $ — una décima parte como mucho. Un millón de vistas de Shorts puede ganar menos que cincuenta mil de un vídeo de finanzas.</p>
    <h2>No todas las vistas se pagan</h2>
    <p>Solo generan ingresos las reproducciones monetizadas: repeticiones, sesiones con bloqueadores y contenido restringido o desmonetizado pagan cero. El pago real suele quedar un 10-20% por debajo de la cuenta naïf de vistas × RPM — justo la brecha entre los controles conservador y típico de aquí.</p>
    <h2>La publicidad es el suelo, no el negocio</h2>
    <p>Superadas unas 100k vistas mensuales, patrocinios, afiliación, membresías y productos propios suelen superar a AdSense: un patrocinio integrado de 500 $ equivale a unas 125.000 vistas de finanzas. Toma el resultado de esta calculadora como tu suelo de negociación para todo lo demás.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>RPM ist, was wirklich ankommt</h2>
    <p>RPM — Revenue pro 1.000 Aufrufe — ist dein Anteil, nachdem YouTube 45 % der Werbegelder behält. CPM ist, was Werbetreibende pro 1.000 Ad-Impressionen zahlen; RPM ist immer niedriger und immer die ehrliche Prognosegröße. Rechne mit Spannen: Zwischen Januar und dem Q4-Werbepeak schwankt der RPM um 30-40 %.</p>
    <h2>Die Nische bestimmt die Größenordnung</h2>
    <p>Langvideos zu Finanzen schaffen 8-15 $ RPM; Tech-Reviews 4-10 $; gewöhnliche Vlogs 2-5 $; Gaming 1,5-3 $. Shorts monetarisieren bei 0,05-0,15 $ — bestenfalls ein Zehntel. Eine Million Shorts-Aufrufe kann weniger einbringen als fünfzigtausend Finanz-Video-Aufrufe.</p>
    <h2>Nicht jeder Aufruf wird bezahlt</h2>
    <p>Nur monetarisierte Wiedergaben verdienen: Wiederholungen, Ad-Blocker-Sessions und eingeschränkte oder demonetarisierte Inhalte zahlen nichts. Die echte Auszahlung landet meist 10-20 % unter der naiven Aufruf-mal-RPM-Rechnung — exakt die Lücke zwischen den Reglern konservativ und typisch hier.</p>
    <h2>Ads sind das Fundament, nicht das Geschäft</h2>
    <p>Sobald ein Kanal rund 100k monatliche Aufrufe überschreitet, bringen Sponsoren, Affiliate, Mitgliedschaften und eigene Produkte meist mehr als AdSense — ein 500-$-Sponsoring entspricht etwa 125.000 Finanz-Video-Aufrufen. Nimm das Ergebnis hier als Verhandlungsboden für alles andere.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function YouTubeMoneyCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
