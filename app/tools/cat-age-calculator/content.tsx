'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CatAgeCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与站点既有渲染口径一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The 15/24/+4 curve, and where it comes from</h2>
    <p>Vets and groups like the AAFP describe cat maturation as front-loaded: the first year lands around 15 human years, the second adds 9 (24 total), and every year after adds about 4. A 5-year-old cat is roughly 36; a 15-year-old is 76. The curve is nearly breed-independent — a Maine Coon and a Siamese age at almost the same pace, which is the biggest difference from dogs.</p>
    <h2>Why ×7 fails embarrassingly</h2>
    <p>The multiply-by-seven rule makes a 1-year-old cat "7" — yet she is fully grown, sexually mature and behaviorally adult. It also undershoots senior care: at 11 (senior by veterinary standards), ×7 claims 77 while the real equivalent is about 60. The practical cost of the myth is missed senior bloodwork, since owners underestimate when annual checks should become twice-yearly.</p>
    <h2>Life stages that drive vet schedules</h2>
    <p>Kitten (under 1), young adult (1-6), mature adult (7-10), senior (11-14) and super senior (15+). Seniors move to twice-yearly exams with bloodwork and blood pressure — cats hide kidney disease and hyperthyroidism famously well, and early detection is the whole game. Indoor cats commonly reach 18-20, roughly 88-96 in human terms.</p>
    <h2>Adopted cat with unknown birthday?</h2>
    <p>Shelters estimate age from teeth: deciduous teeth place a kitten under 6 months, permanent canines by ~7 months, tartar and wear push the estimate upward. A "1-2 years" shelter label usually means the cat is young adult — enter 1.5 and watch the life-stage card, not the human number, for care decisions.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La curva 15/24/+4 y de dónde sale</h2>
    <p>Veterinarios y grupos como el AAFP describen la maduración felina como anticipada: el primer año equivale a unos 15 años humanos, el segundo suma 9 (24 en total) y cada año posterior añade unos 4. Un gato de 5 años ronda los 36; uno de 15, los 76. La curva casi no depende de la raza — un Maine Coon y un Siamés envejecen al mismo ritmo, la mayor diferencia con los perros.</p>
    <h2>Por qué la regla ×7 fracasa</h2>
    <p>Multiplicar por siete convierte a una gata de 1 año en «7», cuando ya está desarrollada, madura sexualmente y adulta en conducta. También subestima los cuidados: a los 11 años (senior en criterio veterinario), ×7 da 77 cuando el equivalente real ronda los 60. El coste práctico del mito son análisis tardíos: los dueños retrasan el paso de revisión anual a semestral.</p>
    <h2>Etapas que marcan el calendario veterinario</h2>
    <p>Gatito (menos de 1), adulto joven (1-6), adulto maduro (7-10), senior (11-14) y súper senior (15+). Los seniors pasan a revisiones semestrales con analíticas y tensión: los gatos esconden renal e hipertiroidismo como nadie, y detectarlos pronto lo es todo. Los de interior suelen llegar a 18-20 años, unos 88-96 humanos.</p>
    <h2>¿Gato adoptado sin cumpleaños conocido?</h2>
    <p>Las protectoras estiman la edad por los dientes: dientes de leche indican menos de 6 meses, colmillos definitivos hacia los 7, y el sarro y el desgaste empujan la estimación al alza. Una etiqueta de «1-2 años» suele significar adulto joven — introduce 1,5 y guíate por la tarjeta de etapa vital, no por el número humano.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die 15/24/+4-Kurve und ihre Herkunft</h2>
    <p>Tierärzte und Verbände wie die AAFP beschreiben die Katzenreifung als vorgelagert: Das erste Jahr entspricht etwa 15 Menschenjahren, das zweite addiert 9 (24 gesamt), danach je Jahr rund 4. Eine 5-jährige Katze ist ungefähr 36; eine 15-jährige etwa 76. Die Kurve ist nahezu rassenunabhängig — Maine Coon und Siam altern fast gleich schnell, der größte Unterschied zu Hunden.</p>
    <h2>Warum ×7 peinlich scheitert</h2>
    <p>Die Sieben-für-eins-Regel macht aus einer 1-jährigen Katze „7 Jahre“ — dabei ist sie ausgewachsen, geschlechtsreif und verhaltenstechnisch erwachsen. Sie unterschätzt auch die Seniorenbetreuung: Mit 11 (veterinär Senior) behauptet ×7 77, während das echte Äquivalent bei etwa 60 liegt. Der praktische Preis des Mythos sind verpasste Senior-Blutuntersuchungen, weil Halter den Wechsel von Jahres- zu Halbjahreschecks zu spät ansetzen.</p>
    <h2>Lebensphasen, die den Tierarztrhythmus bestimmen</h2>
    <p>Kitten (unter 1), junger Erwachsener (1-6), erwachsen (7-10), Senior (11-14) und Super-Senior (15+). Senioren wechseln zu halbjährlichen Untersuchungen mit Blutwerten und Blutdruck — Katzen verstecken Nierenerkrankungen und Hyperthyreose meisterhaft, Früherkennung ist alles. Wohnungskatzen erreichen häufig 18-20 Jahre, rund 88-96 in Menschenjahren.</p>
    <h2>Adoptierte Katze ohne bekanntem Geburtstag?</h2>
    <p>Heime schätzen das Alter über die Zähne: Milchzähne bedeuten unter 6 Monaten, bleibende Eckzähne sind mit ~7 Monaten da, Zahnstein und Abrieb schieben die Schätzung nach oben. Das Etikett „1-2 Jahre“ bedeutet meist jungen Erwachsenen — trage 1,5 ein und richte die Pflege nach der Lebensphasen-Karte, nicht nach der Menschenzahl.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CatAgeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
