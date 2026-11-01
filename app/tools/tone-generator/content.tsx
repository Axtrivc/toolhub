'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ToneGenerator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Your hearing is logarithmic, your slider should be too</h2>
    <p>Frequency perception runs in octaves — each doubling sounds like one equal step. That is why this generator's slider is logarithmic: 20-200 Hz, 200 Hz-2 kHz, and 2-20 kHz each get a third of the travel, matching how your ears actually parse pitch.</p>
    <h2>Equal loudness is not equal SPL</h2>
    <p>The Fletcher-Munson curves show ears are most sensitive around 2-4 kHz and roll off hard at the extremes. A 100 Hz tone at 60 dB sounds far quieter than 1 kHz at 60 dB — expect to nudge bass and treble tests up in level to match the perceived volume of a midrange tone.</p>
    <h2>Waveforms are harmonic recipes</h2>
    <p>A sine is pure tone, nothing else. A square wave stacks odd harmonics (1×, 3×, 5×...) with equal amplitude — brash and synthy. A sawtooth contains every harmonic rolling off gently, the classic analog string and brass building block. A triangle has odd harmonics that fall off faster, softer than a square.</p>
    <h2>From frequency to musical pitch</h2>
    <p>Concert pitch puts A4 at 440 Hz, and each semitone multiplies frequency by the twelfth root of two. The readout names the nearest note and the cents off — at 445 Hz you are A4 +20 cents, noticeably sharp to trained ears. Handy for tuning practice and for finding what note that refrigerator hum actually is.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Tu oído es logarítmico; tu control, también debería serlo</h2>
    <p>La percepción de frecuencia va por octavas — cada duplicación suena como un paso igual. Por eso el control de este generador es logarítmico: 20-200 Hz, 200 Hz-2 kHz y 2-20 kHz ocupan un tercio del recorrido cada uno, igual que tus oídos analizan la altura.</p>
    <h2>Igual sonoría no es igual SPL</h2>
    <p>Las curvas de Fletcher-Munson muestran máxima sensibilidad en 2-4 kHz y caída fuerte en los extremos. Un tono de 100 Hz a 60 dB suena mucho más bajo que uno de 1 kHz a 60 dB — espera tener que subir el nivel en las pruebas de graves y agudos para igualar el volumen percibido de un tono medio.</p>
    <h2>Las formas de onda son recetas de armónicos</h2>
    <p>La senoidal es tono puro, nada más. La cuadrada apila armónicos impares (1×, 3×, 5×...) a igual amplitud — áspera y sintética. La diente de sierra contiene todos los armónicos con caída suave, la base clásica de cuerdas y metales analógicos. La triangular tiene impares que caen más rápido, más suave que la cuadrada.</p>
    <h2>De la frecuencia al nombre de la nota</h2>
    <p>El La de concierto fija A4 en 440 Hz, y cada semitono multiplica la frecuencia por la raíz duodécima de dos. La lectura nombra la nota más cercana y los centésimos de desvío: a 445 Hz estás en A4 +20 cents, notablemente alto para oídos entrenados. Útil para practicar afinación y para averiguar qué nota es realmente ese zumbido del frigorífico.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Dein Gehör ist logarithmisch — dein Regler auch</h2>
    <p>Frequenzwahrnehmung läuft in Oktaven — jede Verdopplung klingt wie ein gleich großer Schritt. Deshalb ist der Regler dieses Generators logarithmisch: 20-200 Hz, 200 Hz-2 kHz und 2-20 kHz bekommen je ein Drittel des Wegs, so wie dein Gehör Tonhöhe verarbeitet.</p>
    <h2>Gleiche Lautheit ist nicht gleicher Schalldruck</h2>
    <p>Die Fletcher-Munson-Kurven zeigen: Das Gehör ist um 2-4 kHz am empfindlichsten und fällt zu den Rändern steil ab. Ein 100-Hz-Ton bei 60 dB klingt viel leiser als 1 kHz bei 60 dB — rechne damit, Bass- und Höhentests im Pegel hochziehen zu müssen, um die empfundene Lautheit eines Mittentons zu treffen.</p>
    <h2>Wellenformen sind Obertonrezepte</h2>
    <p>Sinus ist reiner Ton, sonst nichts. Rechteck stapelt ungerade Obertöne (1×, 3×, 5× ...) in gleicher Amplitude — herb und synthetisch. Sägezahn enthält alle Obertöne mit sanftem Abfall, der klassische Analog-Baustein für Streicher und Blech. Dreieck hat ungerade Obertöne mit schnellerem Abfall, weicher als Rechteck.</p>
    <h2>Von der Frequenz zum Tonnamen</h2>
    <p>Der Kammerton legt A4 auf 440 Hz, jeder Halbton multipliziert mit der zwölften Wurzel aus zwei. Die Anzeige nennt den nächstliegenden Ton und die Cent-Abweichung — bei 445 Hz bist du A4 +20 Cent, für geübte Ohren deutlich zu hoch. Praktisch zum Stimm-Üben und um herauszufinden, welcher Ton das Kühlschrank-Brummen eigentlich ist.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function ToneGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
