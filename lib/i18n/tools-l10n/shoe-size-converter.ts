/**
 * shoe-size-converter 本地化 bundle —— zh / es / de(2026-10 B7 转换器批次)
 * 覆盖: ui + faqs + useCases + formula(公式区 variables/explain/example 可见文案;
 * formula 数学记法恒为 en,与 cooking-converter 先例一致)。缺失自动回退英文。
 * client = ShoeSizeConverterClient(自定义组件)
 */
import type { ToolL10n } from '../tool-l10n'

// 与 lib/tool-formulas.ts 的 en 公式逐字一致(仅满足类型必填,合并后无视觉变化)
const FORMULA = 'US men: foot length cm = 18 + US size;  UK = US − 0.5;  US women = US men + 1.5\nEU = 1.5 × (foot length cm + 1.5), rounded to the nearest 0.5 (Paris points on the last)\nKids: 8C = 14.5 cm, +0.4235 cm per half size (1Y ≈ 20.0 cm, 7Y ≈ 25.1 cm)'

export const ShoeSizeConverterL10n: ToolL10n = {

  es: {
    useCases: ['convertir tallas US a EU o centímetros antes de comprar online', 'confirmar la talla UK de un zapato americano', 'medir el pie del niño y convertirla a talla infantil', 'entender la diferencia hombre/mujer (mujer ≈ hombre +1,5)'],
    formula: {
      formula: FORMULA,
      variables: 'Talla US = número de talla US de hombre/mujer/niño\nTalla UK = talla británica (unos 0,5 números por debajo de la US para la misma longitud)\nTalla EU = talla europea en puntos de París, medida sobre la horma con holgura\nLargo del pie (cm) = medición del talón al dedo más largo del pie mayor',
      explain: 'Las tallas US y UK cuentan barleycorns (1/3 de pulgada) desde ceros distintos; la EU cuenta puntos de París de 2/3 cm sobre la horma, no sobre el pie. Por eso la conversión es una tabla y no una fórmula única — y las marcas siguen variando cerca de un número.',
      example: 'Paso 1: US hombre 9 → largo del pie = 18 + 9 = 27.0 cm.\nPaso 2: UK = 9 − 0.5 = 8.5; EU = 1.5 × (27 + 1.5) = 1.5 × 28.5 = 42.75 → redondea a 43.\nPaso 3: US mujer 8 = hombre 6.5 → 24.5 cm, UK 6, EU = 1.5 × 26 = 39.\nPaso 4: niños 1Y = 20.0 cm → UK 13.5 (la UK infantil vuelve a empezar tras 13.5), EU = 1.5 × 21.5 = 32.25 → 32.5.\nResultado: US hombre 9 ≈ UK 8.5 / EU 43 / 27.0 cm; US mujer 8 ≈ UK 6 / EU 39 / 24.5 cm.',
    },
    faqs: [
      { q: '¿Existe una fórmula única entre tallas US, UK y EU?', a: 'No — esa es la trampa. US y UK difieren unos 0,5-1 números, el US de mujer va 1,5 por encima del de hombre, y la EU usa la escala de «puntos de París», distinta por completo. Las tablas son el único método honesto, y aun así las marcas varían ±1 número.' },
      { q: '¿Cómo mido mi pie en casa?', a: 'De pie sobre papel, calca ambos pies y mide del talón al dedo más largo en cm al final del día (el pie se hincha); usa el pie mayor. Ese número en centímetros se convierte a cualquier sistema.' },
      { q: '¿Por qué difieren las tallas de hombre y mujer?', a: 'Para la misma longitud, la talla US de mujer va 1,5 números por encima de la de hombre — un 8,5 de mujer cabe como un 7 de hombre. Las UK no hacen esto, por eso de US mujer a UK se restan unos 2 números.' },
      { q: '¿Qué talla debo comprar?', a: 'Fíate primero de la tabla del fabricante: Nike, Adidas y ASICS publican equivalencias EU distintas para el mismo US. Entre dos tallas, sube medio número en zapatillas de correr (el pie se hincha ~1 número durante la carrera).' },
    ],
    ui: {
      'tab.men': 'Hombre',
      'tab.women': 'Mujer',
      'tab.kids': 'Niños',
      'in.system': 'Convertir desde',
      'opt.system.us': 'Talla US',
      'opt.system.uk': 'Talla UK',
      'opt.system.eu': 'Talla EU',
      'opt.system.cm': 'cm (largo del pie)',
      'in.value': 'Talla a convertir',
      'in.valueCm': 'Largo del pie (cm)',
      'out.us': 'Talla US',
      'out.usWomen': 'US mujer',
      'out.uk': 'Talla UK',
      'out.eu': 'Talla EU',
      'out.cm': 'Largo del pie (cm)',
      'tableTitle': 'Referencia rápida',
      'nearestNote': 'Se toma el número o medio número más cercano al largo del pie',
      'summaryTitle': 'Conversión de tallas',
      'copySummary': 'Copiar resumen',
      'errInvalid': 'Introduce una talla válida',
      'errRange': 'Fuera del rango de la tabla ({min}–{max} {unit}) - introduce una talla cubierta',
      'note': '📏 La conversión es por tabla, no por fórmula: US y UK difieren ~0,5 números, el US de mujer va +1,5 sobre el de hombre, y la EU usa puntos de París (2/3 cm). Cada marca varía ±1 número; ante la duda, guía oficial del fabricante.',
    },
  },
  de: {
    useCases: ['US-Größen vor dem Onlinekauf in EU oder cm umrechnen', 'die UK-Größe zu einem US-Schuh prüfen', 'Kinderfüße messen und in Kindergrößen umrechnen', 'den Unterschied Damen/Herren verstehen (Damen ≈ Herren +1,5)'],
    formula: {
      formula: FORMULA,
      variables: 'US-Größe = US-Herren-/Damen-/Kindergröße\nUK-Größe = britische Größe (bei gleicher Länge rund 0,5 unter US)\nEU-Größe = europäische Größe in Pariser Punkten, auf dem Leisten mit Zugabe gemessen\nFußlänge (cm) = Hacken-bis-längste-Zeh-Messung des größeren Fußes',
      explain: 'US und UK zählen Gerstenkörner (1/3 Zoll) von unterschiedlichen Nullpunkten; die EU zählt 2/3-cm-Pariser Punkte auf dem Leisten, nicht am Fuß. Deshalb ist die Umrechnung eine Tabelle und keine einzelne Formel — und Marken variieren weiterhin um rund eine Nummer.',
      example: 'Schritt 1: US Herren 9 → Fußlänge = 18 + 9 = 27.0 cm.\nSchritt 2: UK = 9 − 0.5 = 8.5; EU = 1.5 × (27 + 1.5) = 1.5 × 28.5 = 42.75 → gerundet 43.\nSchritt 3: US Damen 8 = Herren 6.5 → 24.5 cm, UK 6, EU = 1.5 × 26 = 39.\nSchritt 4: Kinder 1Y = 20.0 cm → UK 13.5 (Kinder-UK beginnt nach 13.5 neu), EU = 1.5 × 21.5 = 32.25 → 32.5.\nErgebnis: US Herren 9 ≈ UK 8.5 / EU 43 / 27.0 cm; US Damen 8 ≈ UK 6 / EU 39 / 24.5 cm.',
    },
    faqs: [
      { q: 'Gibt es eine Formel zwischen US-, UK- und EU-Größen?', a: 'Nein — genau das ist die Falle. US und UK unterscheiden sich um etwa 0,5-1 Nummern, US-Damengrößen liegen 1,5 über den Herrengrößen, und die EU nutzt die völlig andere „Pariser Punkt“-Skala. Tabellen sind die einzige ehrliche Methode, und selbst da variieren Marken um ±1 Nummer.' },
      { q: 'Wie messe ich meinen Fuß zu Hause?', a: 'Auf Papier stellen, beide Füße umranden und am Tagesende (Füße schwellen an) vom Hacken zur längsten Zehe in cm messen; den größeren Fuß nehmen. Diese Zentimeterangabe lässt sich in jedes System umrechnen.' },
      { q: 'Warum unterscheiden sich Damen- und Herrengrößen?', a: 'Bei gleicher Fußlänge liegt die US-Damengröße 1,5 Nummern über der Herrengröße — Damengröße 8,5 passt wie Herrengröße 7. UK macht das nicht, deshalb gehen bei US-Dame nach UK etwa 2 Nummern ab.' },
      { q: 'Welche Größe soll ich kaufen?', a: 'Vertraue zuerst der Tabelle des Herstellers: Nike, Adidas und ASICS veröffentlichen zur selben US-Größe unterschiedliche EU-Werte. Zwischen zwei Größen bei Laufschuhen halbe Nummer größer wählen (der Fuß schwillt beim Laufen um ~1 Nummer).' },
    ],
    ui: {
      'tab.men': 'Herren',
      'tab.women': 'Damen',
      'tab.kids': 'Kinder',
      'in.system': 'Umrechnen von',
      'opt.system.us': 'US-Größe',
      'opt.system.uk': 'UK-Größe',
      'opt.system.eu': 'EU-Größe',
      'opt.system.cm': 'cm (Fußlänge)',
      'in.value': 'Zu umrechnende Größe',
      'in.valueCm': 'Fußlänge (cm)',
      'out.us': 'US-Größe',
      'out.usWomen': 'US Damen',
      'out.uk': 'UK-Größe',
      'out.eu': 'EU-Größe',
      'out.cm': 'Fußlänge (cm)',
      'tableTitle': 'Schnellreferenz',
      'nearestNote': 'Es wird die nächstgelegene ganze oder halbe Größe zur Fußlänge gewählt',
      'summaryTitle': 'Größenumrechnung',
      'copySummary': 'Zusammenfassung kopieren',
      'errInvalid': 'Gültige Größe eingeben',
      'errRange': 'Außerhalb des Tabellenbereichs ({min}–{max} {unit}) - Größe innerhalb der Tabelle eingeben',
      'note': '📏 Die Umrechnung erfolgt per Tabelle, nicht per Formel: US und UK differieren um ~0,5 Nummern, US-Damen liegen +1,5 über Herren, die EU nutzt Pariser Punkte (2/3 cm). Jede Marke variiert um ±1 Nummer — im Zweifel gilt die Herstellertabelle.',
    },
  },
}
