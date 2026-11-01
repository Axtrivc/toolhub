'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * BpmTapCounter 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>One tap tells you nothing</h2>
    <p>A single press has no tempo in it — tempo lives in the intervals between presses. This counter averages your last eight intervals, so each new tap shifts the reading slightly and early wild taps fade from the window. Keep tapping until the number stops moving; that convergence is more trustworthy than any single readout.</p>
    <h2>Tap the pulse you nod to</h2>
    <p>The classic failure is tapping at the wrong subdivision: you feel the eighths in a half-time track and get double the BPM. Tap the beat you would nod your head to — the quarter note. If the result still looks twice or half of what the song feels like, adjust deliberately: genre conventions like half-time drops genuinely halve the felt tempo.</p>
    <h2>What the consistency meter means</h2>
    <p>The meter reports the coefficient of variation of your intervals — the spread relative to the average. Under 2% is machine-steady; under 5% is a reliable read. High spread on a steady song usually means your finger, not the music — retap a fresh set. On rubato material the number will honestly wobble; take it as an average, not a law.</p>
    <h2>What to do with the number</h2>
    <p>Set your delay pedal from it (the delay-time calculator turns BPM into milliseconds), tag your DJ library so harmonic mixes also stay tempo-compatible, or log rehearsal tempos to see how the band drifts week to week. A tap counter is the tempo source when the track never says its own BPM.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Un toque no dice nada</h2>
    <p>Una sola pulsación no contiene tempo: el tempo vive en los intervalos entre pulsaciones. Este contador promedia tus últimos ocho intervalos, así que cada toque desplaza un poco la lectura y los primeros toques locos salen de la ventana. Sigue tocando hasta que el número deje de moverse; esa convergencia vale más que cualquier lectura aislada.</p>
    <h2>Marca el pulso al que asientes</h2>
    <p>El fallo clásico es tocar la subdivisión equivocada: en un tema half-time sientes las corcheas y obtienes el doble de BPM. Marca el pulso al que moverías la cabeza — la negra. Si aun así sale el doble o la mitad de lo que sientes, ajusta a propósito: recursos como los drops half-time reducen de verdad el tempo percibido.</p>
    <h2>Qué significa el medidor de consistencia</h2>
    <p>Informa del coeficiente de variación de tus intervalos — la dispersión relativa a la media. Bajo el 2 % es precisión de máquina; bajo el 5 %, lectura fiable. Mucha dispersión en una canción estable suele acusar al dedo, no a la música: vuelve a tocar una tanda fresca. En material rubato el número oscilará con honestidad; tómalo como media, no como ley.</p>
    <h2>Qué hacer con el número</h2>
    <p>Ajusta el pedal de delay (la calculadora de tiempos convierte BPM en milisegundos), etiqueta tu biblioteca de DJ para que las mezclas armónicas también cuadren en tempo, o registra los tempos de ensayo para ver cómo derivan semana a semana. El contador es tu fuente de tempo cuando el tema no dice el suyo.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Ein Tap sagt gar nichts</h2>
    <p>Ein einzelner Druck enthält kein Tempo — Tempo steckt in den Abständen zwischen den Taps. Dieser Zähler mittelt die letzten acht Intervalle, jeder neue Tap verschiebt die Anzeige etwas, und wilde Anfangstaps rutschen aus dem Fenster. Tippe weiter, bis sich die Zahl nicht mehr bewegt; diese Konvergenz ist glaubwürdiger als jede Einzelmessung.</p>
    <h2>Tippe den Puls, zu dem du nickst</h2>
    <p>Der Klassikerfehler ist die falsche Unterteilung: Im Half-Time-Track fühlst du die Achtel und bekommst das doppelte BPM. Tippe den Puls, zu dem du mit dem Kopf nicken würdest — die Viertelnote. Bleibt das Ergebnis doppelt oder halb so groß wie das Gefühl, korrigiere bewusst: Half-Time-Drops halbieren das gefühlte Tempo wirklich.</p>
    <h2>Was die Konsistenzanzeige bedeutet</h2>
    <p>Sie zeigt den Variationskoeffizienten deiner Intervalle — die Streuung relativ zum Mittel. Unter 2 % ist maschinenstabil, unter 5 % eine verlässliche Messung. Hohe Streuung bei stabilem Song deutet meist auf den Finger, nicht auf die Musik — tippe einen frischen Satz. Bei Rubazo-Material pendelt die Zahl ehrlich; nimm sie als Durchschnitt, nicht als Gesetz.</p>
    <h2>Was du mit der Zahl machst</h2>
    <p>Delay-Pedal darauf einstellen (der Delay-Rechner macht aus BPM Millisekunden), die DJ-Bibliothek taggen, damit harmonische Mixes auch tempo-mäßig passen, oder Proben-Tempos loggen und die Woche-für-Woche-Drift der Band sehen. Der Tap-Zähler ist die Tempo-Quelle, wenn der Track seins nicht verrät.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function BpmTapCounterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
