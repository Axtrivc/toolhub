/**
 * weight-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = WeightConverterClient = makeUnitConverter,slug 已存在)
 */
import type { ToolL10n } from '../tool-l10n'

export const weightConverterL10n: ToolL10n = {

  es: {
    ui: {
      'note': '⚖️ Cubre peso cotidiano (kg, lb, oz, stones) y unidades de masa precisas (quilates para gemas, granos para munición/medicina). Masa y peso comparten este conversor.',
      'unit.carat': 'Quilates (ct)',
      'unit.cg': 'Centigramos (cg)',
      'unit.dag': 'Decagramos (dag)',
      'unit.g': 'Gramos (g)',
      'unit.grain': 'Granos (gr)',
      'unit.kg': 'Kilogramos (kg)',
      'unit.lb': 'Libras (lb)',
      'unit.mg': 'Miligramos (mg)',
      'unit.oz': 'Onzas (oz)',
      'unit.st': 'Stones (st)',
      'unit.t': 'Toneladas métricas (t)',
    },
    useCases: [
      'convertir el peso corporal entre kilogramos y libras',
      'pasar onzas y libras de recetas estadounidenses a gramos',
      'convertir unidades de peso en envíos internacionales',
    ],
    faqs: [
      { q: '¿Cuántas libras hay en un kilogramo?', a: '1 kilogramo = 2,20462 libras. Para convertir kg a lb, multiplica por 2,205. Para convertir lb a kg, multiplica por 0,4536 (o divide entre 2,205). Así, 70 kg ≈ 154 lb y 180 lb ≈ 81,6 kg.' },
      { q: '¿Cuál es la diferencia entre masa y peso?', a: 'La masa (kg) es la cantidad de materia de un objeto y permanece constante en cualquier lugar. El peso (newtons, o la fuerza que ejerce la gravedad) cambia con la gravedad — pesas menos en la Luna. En el uso cotidiano, el «peso» en libras o kg los trata como intercambiables, lo cual funciona bien en la Tierra.' },
      { q: '¿Cuántas onzas hay en una libra?', a: '1 libra (lb) = 16 onzas (oz). Así, 8 oz = 0,5 lb y 24 oz = 1,5 lb. Ten en cuenta que esto es peso avoirdupois (artículos cotidianos); los metales preciosos usan peso de Troy, donde 1 libra Troy = 12 onzas Troy.' },
      { q: '¿Cómo funciona la stone británica?', a: '1 stone = 14 libras ≈ 6,35 kg; en Reino Unido e Irlanda el peso corporal se da así («11 st 4 lb» = 158 lb ≈ 71,7 kg). En España y Latinoamérica se usa el kg, así que la stone solo aparece con recetas o textos británicos.' },
    ],
  },
  de: {
    ui: {
      'note': '⚖️ Deckt alltägliches Gewicht (kg, lb, oz, Stone) und genaue Masseeinheiten (Karat für Edelsteine, Gran für Munition/Medizin). Masse und Gewicht teilen sich diesen Umrechner.',
      'unit.carat': 'Karat (ct)',
      'unit.cg': 'Zentigramm (cg)',
      'unit.dag': 'Dekagramm (dag)',
      'unit.g': 'Gramm (g)',
      'unit.grain': 'Gran (gr)',
      'unit.kg': 'Kilogramm (kg)',
      'unit.lb': 'Pfund (lb)',
      'unit.mg': 'Milligramm (mg)',
      'unit.oz': 'Unzen (oz)',
      'unit.st': 'Stone (st)',
      'unit.t': 'Metrische Tonnen (t)',
    },
    useCases: [
      'Körpergewicht zwischen Kilogramm und Pfund umrechnen',
      'Unzen und Pfund aus US-Rezepten in Gramm umrechnen',
      'Gewichtseinheiten für den internationalen Versand umrechnen',
    ],
    faqs: [
      { q: 'Wie viele Pfund sind ein Kilogramm?', a: '1 Kilogramm = 2,20462 Pfund. Um kg in lb umzurechnen, multipliziere mit 2,205. Um lb in kg umzurechnen, multipliziere mit 0,4536 (oder teile durch 2,205). Also: 70 kg ≈ 154 lb und 180 lb ≈ 81,6 kg.' },
      { q: 'Was ist der Unterschied zwischen Masse und Gewicht?', a: 'Masse (kg) ist die Materiemenge eines Objekts und bleibt überall gleich. Gewicht (Newton, also die Kraft der Schwerkraft) ändert sich mit der Gravitation — auf dem Mond wiegst du weniger. Im Alltag werden „Gewicht“ in Pfund oder kg als austauschbar behandelt, was auf der Erde problemlos funktioniert.' },
      { q: 'Wie viele Unzen sind in einem Pfund?', a: '1 Pfund (lb) = 16 Unzen (oz). Also: 8 oz = 0,5 lb und 24 oz = 1,5 lb. Dies ist das Avoirdupois-Gewicht (Alltagsgegenstände); Edelmetalle verwenden Troy-Gewicht, wo 1 Troy-Pfund = 12 Troy-Unzen.' },
      { q: 'Was ist ein Stone und wie passt das deutsche Pfund dazu?', a: '1 Stone = 14 lb ≈ 6,35 kg — im UK üblich fürs Körpergewicht („11 st 4 lb“ = 158 lb ≈ 71,7 kg). Das deutsche Pfund ist genau 500 g, das US-Pfund (lb) 453,6 g; der metrische Zentner entspricht 50 kg, der Doppelzentner 100 kg.' },
    ],
  },
}
