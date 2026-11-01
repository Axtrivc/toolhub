'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * PoolVolumeCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>One cubic foot holds 7.48 gallons</h2>
    <p>Pool math is geometry times a constant: length × width × average depth in feet, multiplied by 7.48 (US gallons per cubic foot). A 32 × 16 ft rectangle at a 5 ft average depth works out to 19,150 gallons — which is why water trucks quote per 1,000 gallons and pool services ask for your gallonage before quoting anything.</p>
    <h2>Average depth done right</h2>
    <p>On a sloped floor, average depth ≈ (shallow end + deep end) ÷ 2 — 3 ft and 9 ft gives 6 ft. That approximation overstates pools with a small diving well and understates true-hopper bottoms, but it lands within about 10% for circulation sizing, which is the accuracy that matters here.</p>
    <h2>Round and kidney shapes</h2>
    <p>For round pools use the diameter: volume = π × (d ÷ 2)² × depth. A 24 ft round pool at 4.5 ft average holds about 15,300 gallons. Kidney pools use the classic surveyor's approximation 0.45 × (width A + width B) × length, measured at the two widest lobes — an estimate, but close enough for pumps and heat pumps.</p>
    <h2>Turnover, not chemistry</h2>
    <p>Residential guidance circulates the entire volume every 8-12 hours; commercial pools run faster. Divide your gallons by the pump's GPM to get one turnover, then check you get two or three per day. That flow sizing is all this tool does — dosing chemicals depends on tested free chlorine, pH, and stabilizer, never on volume alone.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Un pie cúbico son 7,48 galones</h2>
    <p>La matemática de piscinas es geometría por una constante: largo × ancho × profundidad media en pies, multiplicado por 7,48 (galones estadounidenses por pie cúbico). Un rectángulo de 32×16 pies con 5 pies medios da 19.150 galones — por eso los camiones cisterna cobran por mil galones y los servicios te preguntan los galones antes de presupuestar.</p>
    <h2>La profundidad media, bien tomada</h2>
    <p>Con fondo inclinado, media ≈ (zona somera + honda) ÷ 2: 3 y 9 pies dan 6. La aproximación sobrestima las piscinas con foso pequeño de saltos y subestima los fondos de tolva, pero queda dentro del ~10 % para dimensionar circulación, que es la precisión que aquí importa.</p>
    <h2>Formas redondas y riñón</h2>
    <p>En redondas usa el diámetro: volumen = π × (diámetro ÷ 2)² × profundidad; una de 24 pies con 4,5 medios contiene unos 15.300 galones. Las riñón usan la aproximación clásica de agrimensura 0,45 × (ancho A + ancho B) × largo, medida en los dos vientres más anchos — una estimación, pero suficiente para bombas y bombas de calor.</p>
    <h2>Turnover, no química</h2>
    <p>La guía residencial recircula todo el volumen cada 8-12 horas; las comerciales van más rápido. Divide los galones entre el caudal (GPM) para un turnover y comprueba que salgan dos o tres al día. Eso es todo lo que hace esta herramienta — la dosificación depende del cloro libre, el pH y el estabilizador medidos, nunca solo del volumen.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Ein Kubikfuß fasst 7,48 Gallonen</h2>
    <p>Pool-Mathematik ist Geometrie mal Konstante: Länge × Breite × mittlere Tiefe in Fuß, multipliziert mit 7,48 (US-Gallonen pro Kubikfuß). Ein 32×16-Fuß-Rechteck bei 5 ft mittlerer Tiefe ergibt 19.150 Gallonen — deshalb rechnen Tankwagen pro tausend Gallonen ab und Poolfirmen fragen zuerst nach der Wassermenge.</p>
    <h2>Die mittlere Tiefe richtig genommen</h2>
    <p>Bei Schrägboden gilt mittel ≈ (flaches + tiefes Ende) ÷ 2: 3 und 9 Fuß ergeben 6. Die Näherung überschätzt Becken mit kleinem Sprungtrog und unterschätzt echte Trichterböden, bleibt aber für die Zirkulationsauslegung in ~10 % Genauigkeit — und die zählt hier.</p>
    <h2>Runde und Nierenformen</h2>
    <p>Bei Rundbecken nimm den Durchmesser: Volumen = π × (d ÷ 2)² × Tiefe; ein 24-Fuß-Becken mit 4,5 ft fasst etwa 15.300 Gallonen. Nierenform nutzt die klassische Vermessungsformel 0,45 × (Breite A + Breite B) × Länge, gemessen an den zwei breitesten Bauchungen — eine Schätzung, aber gut genug für Pumpen und Wärmepumpen.</p>
    <h2>Durchlauf statt Chemie</h2>
    <p>Heimpools wälzen das Volumen alle 8-12 Stunden um; gewerbliche schneller. Teile Gallonen durch den GPM der Pumpe für einen Durchlauf und prüfe zwei bis drei pro Tag. Mehr macht dieses Werkzeug nicht — die Dosierung hängt von gemessenem Freichlor, pH und Stabilisator ab, nie allein vom Volumen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function PoolVolumeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
