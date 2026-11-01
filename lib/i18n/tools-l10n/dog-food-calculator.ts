/**
 * dog-food-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts)。
 *
 * 覆盖:faqs(可见)+ useCases(Common uses)+ formula(公式区)。b00 新建,无 ui 块。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'RER = 70 × kg^0.75 · MER = RER × factor · cups = MER ÷ kcal/cup'

export const dogFoodCalculatorL10n: ToolL10n = {



  // ──────────────────────────── Español ────────────────────────────
  es: {
    ui: {
      'in.weight': 'Peso del perro',
      'in.activity': 'Etapa de vida y actividad (factor MER)',
      'opt.activity.1.2': 'Pérdida de peso / senior (×1,2)',
      'opt.activity.1.6': 'Adulto esterilizado (×1,6)',
      'opt.activity.1.8': 'Adulto sin esterilizar (×1,8)',
      'opt.activity.2': 'Cachorro 4–12 meses (×2)',
      'opt.activity.2.5': 'Activo / perro de trabajo (×2,5)',
      'opt.activity.3': 'Cachorro menor de 4 meses (×3)',
      'in.basis': 'Unidad de energía del envase',
      'opt.basis.cup': 'kcal por taza (cup)',
      'opt.basis.100g': 'kcal por 100 g',
      'in.density': 'Densidad calórica de la etiqueta',
      'in.gramsPerCup': 'Gramos por taza',
      'out.mer': 'Requerimiento energético diario (MER)',
      'out.rer': 'Energía en reposo (RER)',
      'out.activityExtra': 'Porción por actividad (MER − RER)',
      'out.cups': 'Cantidad diaria de comida',
      'outSub.cups': 'Taza medidora estándar de 8 oz',
      'out.grams': 'Cantidad diaria en gramos',
      'preset.0': 'Perro mediano esterilizado',
      'preset.1': 'Cachorro de raza grande',
      'preset.2': 'Perro senior pequeño a dieta',
      'errInvalid': 'Introduce un peso positivo de hasta 120 kg y valores calóricos válidos',
      'cupsWord': 'tazas/día',
      'chartTitle': 'Origen de las calorías diarias',
      'slice.rer': 'Necesidad en reposo (RER)',
      'slice.activityExtra': 'Multiplicador de actividad',
      'note': '💡 Divide la ración diaria en 2 tomas (3 para cachorros). Pesar la comida con báscula es más preciso: las tazas medidoras varían hasta un ±20 %. Cambia de pienso progresivamente en 7-10 días; para planes de adelgazamiento, consulta a tu veterinario.',
    },
    useCases: [
      'perro adulto esterilizado de 18 kg: RER ≈ 612 kcal, ×1,6 ≈ 980 kcal/día; con 375 kcal/taza salen unas 2,6 tazas',
      'pauta de adelgazamiento con factor 1,2: el mismo perro se queda en unas 735 kcal/día; pesa cada semana y busca 1-2 % de bajada',
      'cachorros: factor 3,0 antes de los 4 meses — casi el doble que un adulto esterilizado, repartido en 3-4 tomas',
      'pesar en gramos: etiqueta 375 kcal/taza y 105 g/taza → unos 275 g al día; el vaso medidor se desvía hasta ±20 %',
    ],
    faqs: [
      {
        q: '¿Cómo se calcula la necesidad diaria de calorías?',
        a: 'Dos pasos: RER (energía en reposo) = 70 × peso en kg^0,75; después MER = RER × factor de etapa vital — 1,2 pérdida de peso/mayores, 1,6 adultos esterilizados, 1,8 enteros, 2-3 cachorros y perros de trabajo (guías AAHA).',
      },
      {
        q: '¿Qué factor MER elijo?',
        a: 'Hoy la mayoría de perros son adultos esterilizados → ×1,6. Usa ×1,2 para adelgazar o seniors con tendencia a engordar, ×1,8 enteros, ×2 cachorros de 4-12 meses, ×3 menores de 4 meses y ×2,5+ para perros de trabajo o deporte.',
      },
      {
        q: '¿Cómo paso de kcal por taza a gramos?',
        a: 'Busca en la bolsa kcal por taza y gramos por taza: gramos/día = kcal diarias ÷ kcal/taza × g/taza. La calculadora admite ambos formatos (kcal/taza o kcal/100 g) y da tazas y gramos — los gramos ganan: la taza medidora varía hasta ±20 %.',
      },
      {
        q: '¿Y si mi etiqueta indica kcal/kg?',
        a: 'Gramos/día = kcal diarias ÷ (kcal/kg ÷ 1.000). Con 980 kcal y 3.600 kcal/kg salen unos 272 g. Olvídate del vaso y usa una báscula de cocina: es la forma más fiable de alimentar.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Matemática energética veterinaria (AAHA): la energía en reposo escala con el peso metabólico (kg^0,75) y el factor de etapa vital — 1,2 pérdida de peso a 3,0 cachorro — la convierte en necesidades diarias; la densidad de la etiqueta (kcal/taza o kcal/100 g) traduce calorías a tazas y gramos.',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    ui: {
      'in.weight': 'Gewicht des Hundes',
      'in.activity': 'Lebensphase & Aktivität (MER-Faktor)',
      'opt.activity.1.2': 'Gewichtsreduktion / Senior (×1,2)',
      'opt.activity.1.6': 'Kastrierter erwachsener Hund (×1,6)',
      'opt.activity.1.8': 'Intakter erwachsener Hund (×1,8)',
      'opt.activity.2': 'Welpe 4–12 Monate (×2)',
      'opt.activity.2.5': 'Sehr aktiv / Arbeitshund (×2,5)',
      'opt.activity.3': 'Welpe unter 4 Monaten (×3)',
      'in.basis': 'Angabe auf der Futterpackung',
      'opt.basis.cup': 'kcal pro Messbecher (Cup)',
      'opt.basis.100g': 'kcal pro 100 g',
      'in.density': 'Kaloriendichte laut Etikett',
      'in.gramsPerCup': 'Gramm pro Messbecher',
      'out.mer': 'Täglicher Energiebedarf (MER)',
      'out.rer': 'Ruheenergiebedarf (RER)',
      'out.activityExtra': 'Aktivitätszuschlag (MER − RER)',
      'out.cups': 'Futtermenge pro Tag (Becher)',
      'outSub.cups': 'Standard-Messbecher (8 oz)',
      'out.grams': 'Futtermenge pro Tag in Gramm',
      'preset.0': 'Mittelgroßer kastrierter Hund',
      'preset.1': 'Großrassiger Welpe',
      'preset.2': 'Kleiner Senior auf Diät',
      'errInvalid': 'Positives Gewicht (bis 120 kg) und gültige Nährwertangaben eingeben',
      'cupsWord': 'Becher/Tag',
      'chartTitle': 'Zusammensetzung des täglichen Kalorienbedarfs',
      'slice.rer': 'Ruhebedarf (RER)',
      'slice.activityExtra': 'Aktivitätsfaktor',
      'note': '💡 Teile die Tagesration auf 2 Mahlzeiten auf (3 bei Welpen). Das Abwiegen in Gramm ist genauer — Messbecher streuen um bis zu ±20 %. Futterwechsel über 7–10 Tage einschleichen; bei Abnehmplänen den Tierarzt einbeziehen.',
    },
    useCases: [
      'kastrierter Erwachsener mit 18 kg: RER ≈ 612 kcal, ×1,6 ≈ 980 kcal/Tag; bei 375 kcal/Cup rund 2,6 Cups',
      'Abnehmplan mit Faktor 1,2: derselbe Hund bleibt bei rund 735 kcal/Tag; wöchentlich wiegen, Ziel 1-2 % Gewichtsverlust',
      'Welpen: Faktor 3,0 unter 4 Monaten — fast doppelter Bedarf eines kastrierten Erwachsenen, auf 3-4 Mahlzeiten verteilt',
      'in Gramm füttern: Etikett 375 kcal/Cup und 105 g/Cup → rund 275 g täglich; der Messbecher streut um bis zu ±20 %',
    ],
    faqs: [
      {
        q: 'Wie wird der tägliche Kalorienbedarf berechnet?',
        a: 'Zwei Schritte: RER (Ruheenergiebedarf) = 70 × Gewicht in kg^0,75, dann MER = RER × Lebensphasenfaktor — 1,2 Abnahme/Senior, 1,6 kastrierte Erwachsene, 1,8 unkastrierte, 2-3 Welpen und Arbeitshunde (AAHA-Richtlinien).',
      },
      {
        q: 'Welchen MER-Faktor wählen?',
        a: 'Die meisten Familienhunde sind kastrierte Erwachsene → ×1,6. ×1,2 für Abnahme oder übergewichtsanfällige Senioren, ×1,8 unkastriert, ×2 für Welpen von 4-12 Monaten, ×3 unter 4 Monaten, ×2,5+ für aktive Arbeitssport-Hunde.',
      },
      {
        q: 'Wie rechne ich kcal pro Cup in Gramm um?',
        a: 'Auf dem Sack stehen kcal pro Cup und Gramm pro Cup: Tagesgramm = Tages-kcal ÷ kcal/Cup × g/Cup. Der Rechner kann beide Etiketten (kcal/Cup oder kcal/100 g) und liefert Cups plus Gramm — Gramm ist genauer, der Messbecher streut um bis zu ±20 %.',
      },
      {
        q: 'Mein Etikett gibt kcal/kg an?',
        a: 'Deutsche Etiketten geben ME in kcal/kg an: Tagesmenge (g) = Tages-kcal ÷ (kcal/kg ÷ 1.000). Bei 980 kcal und 3.600 kcal/kg sind das rund 272 g täglich. Küchenwaage statt Messbecher — das ist die zuverlässigste Fütterung.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Veterinär-Energieformel (AAHA): Der Ruhebedarf skaliert mit dem Stoffwechselgewicht (kg^0,75), der Lebensphasenfaktor — 1,2 Gewichtsabnahme bis 3,0 Welpe — macht daraus den Tagesbedarf; die Energiedichte des Etiketts (kcal/Cup oder kcal/100 g) übersetzt Kalorien in Cups und Gramm.',
    },
  },
}
