'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * HeartRateZoneCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why resting heart rate matters</h2>
    <p>Zones from raw max-heart-rate percentages treat a trained athlete and a couch-bound beginner identically. The Karvonen method uses heart-rate reserve (max − resting), which widens zones proportionally to fitness.</p>
    <h2>Measuring resting HR properly</h2>
    <p>Measure for a full minute immediately after waking, before coffee or getting up, over several days. Well-trained endurance athletes commonly sit at 40-50 bpm; average adults 60-80.</p>
    <h2>The 220-minus-age caveat</h2>
    <p>Max-HR formulas carry ±10-12 bpm individual error. If you have done a hard race or lab test and seen a higher number, use that as your true max instead.</p>
    <h2>Training in Zone 2</h2>
    <p>Zone 2 (about 60-70% of reserve) builds mitochondrial density and fat oxidation. Most recreational runners run too hard on easy days — nasal-breathing pace usually lands in Z2.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué importa la frecuencia en reposo</h2>
    <p>Las zonas basadas en porcentajes del máximo tratan igual a un atleta entrenado y a un principiante sedentario. El método Karvonen usa la reserva de frecuencia cardíaca (máx − reposo), que ensancha las zonas en proporción a la forma física.</p>
    <h2>Cómo medir bien el pulso en reposo</h2>
    <p>Mide un minuto completo justo al despertar, antes del café o de levantarte, durante varios días. Los deportistas de resistencia bien entrenados suelen estar en 40-50 lpm; los adultos medios, en 60-80.</p>
    <h2>La letra pequeña del 220 menos la edad</h2>
    <p>Las fórmulas de FC máxima conllevan un error individual de ±10-12 lpm. Si en una carrera dura o una prueba de laboratorio has visto un número mayor, usa ese como tu máximo real.</p>
    <h2>Entrenar en Zona 2</h2>
    <p>La Zona 2 (en torno al 60-70 % de la reserva) construye densidad mitocondrial y oxidación de grasas. La mayoría de corredores aficionados corren demasiado fuerte los días suaves — el ritmo de respiración nasal suele caer en Z2.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum der Ruhepuls zählt</h2>
    <p>Zonen, die nur auf Prozenten des Maximalpulses beruhen, behandeln einen trainierten Athleten und einen unsportlichen Anfänger identisch. Die Karvonen-Methode nutzt die Herzfrequenzreserve (Max − Ruhe), die die Zonen proportional zur Fitness spreizt.</p>
    <h2>Ruhepuls richtig messen</h2>
    <p>Miss direkt nach dem Aufwachen eine volle Minute, vor Kaffee und Aufstehen, über mehrere Tage. Gut trainierte Ausdauersportler liegen häufig bei 40-50 bpm, Durchschnittserwachsene bei 60-80.</p>
    <h2>Der Haken an 220 minus Alter</h2>
    <p>Maximalpuls-Formeln haben einen individuellen Fehler von etwa ±10-12 bpm. Wenn du in einem harten Rennen oder Labortest einen höheren Wert gesehen hast, nimm den als deine echte Obergrenze.</p>
    <h2>Training in Zone 2</h2>
    <p>Zone 2 (etwa 60-70 % der Reserve) baut Mitochondriendichte und Fettoxidation auf. Die meisten Hobbyläufer laufen an leichten Tagen zu hart — das Nasenatmungstempo landet meist in Z2.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function HeartRateZoneCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
