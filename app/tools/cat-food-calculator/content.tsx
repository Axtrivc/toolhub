'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CatFoodCalculator 长文正文 —— 三语 dispatcher
 *
 * en 分支与站点既有渲染口径一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>RER first, then the fudge factor</h2>
    <p>Allometric scaling gives resting energy as RER = 70 × weight(kg)^0.75 — a 4 kg cat needs about 198 kcal/day just to idle. The life-stage factor then does the real work: 1.2 for a neutered indoor adult (the overwhelming majority of pet cats), 1.4 intact, 1.6 for active outdoor cats, 0.8 for weight loss, and 2.5 for a growing kitten. Neutering permanently lowers energy needs by roughly 20-30% while increasing appetite — the classic chonk setup.</p>
    <h2>Reading pet food labels without getting fooled</h2>
    <p>Wet food states kcal per can or per 100 g (most pates run close to 1 kcal per gram, so a 5.5 oz can is roughly 150 kcal); dry food states kcal/kg or kcal/cup, typically 3,500-4,500 kcal/kg. Feeding charts on the bag are calibrated to intact adult cats — if your neutered indoor cat eats the bag's portion, do the math on the 1.2 factor and you will usually find the chart overfeeds by 15-20%.</p>
    <h2>Grams beat scoops</h2>
    <p>A "cup" of dry food varies by up to 20% depending on how it is scooped and the kibble shape; a $10 kitchen scale removes that error entirely. For the canned result: two to three small cans beat one giant sitting — cats are designed for multiple small meals, and splitting the daily amount also slows fast eaters and reduces begging-behavior loops.</p>
    <h2>Weight loss has a cat-specific danger</h2>
    <p>Unlike dogs, cats that stop eating or diet too hard can develop hepatic lipidosis — fat flooding the liver — which is life-threatening within days. Safe feline weight loss is 0.5-1% of body weight per week, and an overweight cat's plan should always go through your vet. Use the ×0.8 factor here as a conversation starter, not a prescription.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Primero el RER, luego el factor</h2>
    <p>El escalado alométrico da la energía en reposo: RER = 70 × peso(kg)^0,75 — un gato de 4 kg necesita unas 198 kcal/día solo para existir. El factor de etapa hace el trabajo real: ×1,2 para un adulto interior esterilizado (la inmensa mayoría), ×1,4 entero, ×1,6 activo con exterior, ×0,8 en pérdida de peso y ×2,5 para un gatito en crecimiento. La esterilización baja de forma permanente las necesidades un 20-30 % mientras sube el apetito: la receta clásica del gatete relleno.</p>
    <h2>Leer etiquetas sin caer en la trampa</h2>
    <p>El húmedo indica kcal por lata o por 100 g (la mayoría de los patés ronda 1 kcal/g, así que una lata de 156 g son ~150 kcal); el pienso indica kcal/kg o kcal/taza, típicamente 3.500-4.500 kcal/kg. Las tablas del envase están calibradas para adultos enteros: si tu interior esterilizado come la ración del paquete, haz la cuenta con el factor 1,2 y verás que la tabla sobrealimenta un 15-20 %.</p>
    <h2>Gramos mejor que tazas</h2>
    <p>Una «taza» de pienso varía hasta un 20 % según cómo se llene y la forma de la croqueta; una báscula de cocina barata elimina ese error. Con latas pasa igual: 2-3 latas pequeñas al día ganan a un atracón — el gato está diseñado para comidas pequeñas y repetidas, y repartir también frena a los tragones y corta el bucle de mendigar.</p>
    <h2>Adelgazar tiene un peligro específico felino</h2>
    <p>A diferencia del perro, un gato que deja de comer o hace dieta demasiado dura puede desarrollar lipidosis hepática — grasa invadiendo el hígado — mortal en pocos días. La pérdida segura es un 0,5-1 % del peso por semana, y el plan de un gato con sobrepeso debe pasar siempre por tu veterinario. Usa aquí el factor ×0,8 como inicio de conversación, no como receta.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Zuerst der RER, dann der Faktor</h2>
    <p>Die allometrische Skalierung liefert die Ruheenergie: RER = 70 × Gewicht(kg)^0,75 — eine 4-kg-Katze braucht allein zum Dasein etwa 198 kcal/Tag. Der Lebensphasenfaktor erledigt die eigentliche Arbeit: ×1,2 für die kastrierte Wohnungskatze (die große Mehrheit), ×1,4 unkastriert, ×1,6 aktiv mit Freigang, ×0,8 zur Abnahme und ×2,5 für ein wachsendes Kitten. Die Kastration senkt den Bedarf dauerhaft um etwa 20-30 % und steigert den Appetit — das klassische Rezept für die Rundkatze.</p>
    <h2>Etiketten lesen, ohne reinzufallen</h2>
    <p>Nassfutter nennt kcal pro Dose oder pro 100 g (die meisten Pasten liegen nahe 1 kcal/g, eine 156-g-Dose hat also ~150 kcal); Trockenfutter nennt kcal/kg oder kcal/becher, typisch 3.500-4.500 kcal/kg. Die Fütterungstabellen auf dem Sack sind für intakte Adultkatzen kalibriert — rechnest du für die kastrierte Wohnungskatze mit ×1,2 nach, überfüttert die Tabelle meist um 15-20 %.</p>
    <h2>Gramm schlägt Messbecher</h2>
    <p>Ein „Becher“ Trockenfutter schwankt je nach Füllart und Krokettenform um bis zu 20 %; eine günstige Küchenwaage eliminiert diesen Fehler komplett. Bei Dosen gilt dasselbe: 2-3 kleine Dosen schlagen eine Großmahlzeit — Katzen sind auf mehrere kleine Mahlzeiten ausgelegt, und das Aufteilen bremst Schlinger und durchbricht den Bettel-Kreislauf.</p>
    <h2>Abnehmen birgt eine katzenspezifische Gefahr</h2>
    <p>Anders als Hunde können Katzen, die fressen stoppen oder zu streng diäten, eine hepatische Lipidose entwickeln — Futter flutet die Leber — die innerhalb von Tagen lebensbedrohlich wird. Sicheres Katzen-Abnehmen heißt 0,5-1 % des Körpergewichts pro Woche, und der Plan einer übergewichtigen Katze gehört immer in die Tierarztpraxis. Nutze den ×0,8-Faktor hier als Gesprächseinstieg, nicht als Rezept.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function CatFoodCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
