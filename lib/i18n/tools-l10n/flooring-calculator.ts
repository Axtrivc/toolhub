/**
 * flooring-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts)。
 *
 * 覆盖:faqs(可见)+ useCases(Common uses)+ formula(公式区)。b00 新建,无 ui 块。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'boxes = ⌈L × W × (1 + waste%) ÷ box coverage⌉ · cost = boxes × box price'

export const flooringCalculatorL10n: ToolL10n = {



  // ──────────────────────────── Español ────────────────────────────
  es: {
    ui: {
      'in.length': 'Largo de la estancia (L)',
      'in.width': 'Ancho de la estancia (W)',
      'in.unit': 'Unidad de medida',
      'opt.unit.ft': 'Pies (ft)',
      'opt.unit.m': 'Metros (m)',
      'in.type': 'Tipo de suelo',
      'opt.type.tile': 'Baldosa cerámica',
      'opt.type.hardwood': 'Madera multicapa / parquet',
      'opt.type.vinyl': 'Vinilo (LVP)',
      'opt.type.marble': 'Mármol / piedra natural',
      'in.waste': 'Margen de desperdicio',
      'in.boxPrice': 'Precio por caja',
      'out.boxes': 'Cajas necesarias',
      'out.area': 'Superficie de la estancia',
      'out.withWaste': 'Superficie con desperdicio',
      'out.coverage': 'Rendimiento por caja',
      'out.cost': 'Coste estimado de material',
      'preset.0': 'Salón 15×12 pies (madera)',
      'preset.1': 'Baño 8×6 pies (cerámica)',
      'preset.2': 'Espacio diáfano 6×4 m (vinilo)',
      'errInvalid': 'Introduce dimensiones positivas, desperdicio 0–50% y precio válido',
      'boxWord': 'caja',
      'boxesWord': 'cajas',
      'chartTitle': 'Plano de la estancia',
      'note': '💡 Desperdicio habitual: 5–10% para colocación recta; 10–15% para colocación en espiga, diagonal, gran formato o estancias irregulares. Las cajas siempre se redondean al alza.',
    },
    useCases: [
      'suelo laminado en un salón de 5,5×3,7 m: unos 20,4 m², con 10 % de desperdicio y cajas de 2,3 m² salen 10 cajas',
      'espiga francesa: la misma estancia pide 10-15 % de desperdicio frente al 5 % de colocación recta — 2-3 cajas de diferencia',
      'comparar materiales: cerámica a 1,44 m² por caja frente a vinílico a 2,6 m² — convierte a coste por m² con desperdicio incluido',
      'guardar caja de repuesto: los lotes de tinta se descatalogan; una caja extra cubre reparaciones futuras por casi nada',
    ],
    faqs: [
      {
        q: '¿Cuánto desperdicio debo añadir?',
        a: '5-10 % para tablas en colocación recta y baldosa estándar en estancias simples; 10-15 % para diagonal o espiga, gran formato o espacios con muchos quiebros y armarios. El desperdicio cubre cortes, juntas escalonadas y la última fila aserrada — no es opcional.',
      },
      {
        q: '¿Cómo calculo cuántas cajas necesito?',
        a: 'Largo × ancho, aplica el factor de desperdicio, divide entre la cobertura impresa en la caja y redondea hacia arriba: cajas = ⌈área × (1 + desperdicio) ÷ cobertura⌉. La herramienta lo hace automático para cerámica, madera, vinílico y mármol, en ft² o m².',
      },
      {
        q: '¿Cuántos m² trae una caja?',
        a: 'Suelen ser 1,4-2,8 m²: cerámica ~1,44 m², mármol ~1,5 m², madera ingenierada ~2,2 m², vinílico ~2,6 m². Varía por fabricante — verifica la etiqueta y guarda una caja de repuesto para reparaciones, porque los lotes de tinta se descatalogan.',
      },
      {
        q: '¿Y el rodapié?',
        a: 'Se calcula por metros lineales (perímetro de la estancia, restando puertas), no por m². Una sala de 4×5 m son unos 17 m de perímetro; compra un 5-10 % extra de molduras para cortes y esquinas.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'El área de la estancia (largo × ancho, pies o metros) se multiplica por (1 + desperdicio), se divide entre la cobertura por caja y siempre se redondea hacia arriba — no hay fracciones de caja y los lotes de tinta vuelven arriesgado «comprar más tarde». Coste = cajas × precio por caja.',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    ui: {
      'in.length': 'Raumlänge (L)',
      'in.width': 'Raumbreite (W)',
      'in.unit': 'Maßeinheit',
      'opt.unit.ft': 'Fuß (ft)',
      'opt.unit.m': 'Meter (m)',
      'in.type': 'Bodenbelagsart',
      'opt.type.tile': 'Keramikfliesen',
      'opt.type.hardwood': 'Parkett / Hartholz',
      'opt.type.vinyl': 'Vinyl / Designboden (LVP)',
      'opt.type.marble': 'Marmor / Naturstein',
      'in.waste': 'Verschnitt-Zuschlag',
      'in.boxPrice': 'Preis pro Karton',
      'out.boxes': 'Benötigte Kartons',
      'out.area': 'Raumfläche',
      'out.withWaste': 'Fläche inkl. Verschnitt',
      'out.coverage': 'Fläche pro Karton',
      'out.cost': 'Geschätzte Materialkosten',
      'preset.0': 'Wohnzimmer 15×12 ft (Parkett)',
      'preset.1': 'Badezimmer 8×6 ft (Fliesen)',
      'preset.2': 'Offener Wohnbereich 6×4 m (Vinyl)',
      'errInvalid': 'Positive Raummaße, Verschnitt 0–50% und gültigen Preis eingeben',
      'boxWord': 'Karton',
      'boxesWord': 'Kartons',
      'chartTitle': 'Raumgrundriss',
      'note': '💡 Üblicher Verschnitt: 5–10% bei gerader Verlegung; 10–15% bei Fischgrät, diagonaler Verlegung, Großformat oder verwinkelten Räumen. Kartons werden stets aufgerundet.',
    },
    useCases: [
      'Laminat im 5,5×3,7-m-Wohnzimmer: rund 20,4 m², mit 10 % Verschnitt und 2,3-m²-Paketen ergeben sich 10 Pakete',
      'Fischgrät statt gerade verlegt: 10-15 % Verschnitt statt 5 % — je nach Raum 2-3 Pakete mehr einplanen',
      'Materialangebote vergleichen: Fliese mit 1,44 m²/Paket gegen Vinyl mit 2,6 m² — auf Kosten je m² inklusive Verschnitt umrechnen',
      'ein Paket Reserve einplanen: Färbungen werden abgesetzt; ein Paket Extra deckt spätere Reparaturen fast gratis ab',
    ],
    faqs: [
      {
        q: 'Wie viel Verschnitt einplanen?',
        a: '5-10 % für gerade verlegte Dielen und Standardfliesen in einfachen Räumen; 10-15 % bei diagonalem oder Fischgrät-Verband, Großformat oder vielen Ecken und Nischen. Der Verschnitt deckt Schnitte, versetzte Fugen und die zugeschnittene letzte Reihe — er ist nicht verhandelbar.',
      },
      {
        q: 'Wie berechne ich die Paketanzahl?',
        a: 'Länge × Breite, Verschnittfaktor anwenden, durch die auf dem Paket angegebene Abdeckung teilen und aufrunden: Pakete = ⌈Fläche × (1 + Verschnitt) ÷ Paketabdeckung⌉. Das Tool erledigt das für Fliese, Parkett, Vinyl und Marmor automatisch, in ft² oder m².',
      },
      {
        q: 'Wie viel m² sind in einem Paket?',
        a: 'Üblich sind 1,4-2,8 m²: Fliese ~1,44 m², Marmor ~1,5 m², Fertigparkett ~2,2 m², Vinyl ~2,6 m². Die Formate variieren je Hersteller — Etikett prüfen und ein Paket Reserve behalten, denn Färbungen werden abgesetzt und passen später nicht mehr.',
      },
      {
        q: 'Und die Sockelleisten?',
        a: 'Sockelleisten laufen über Laufmeter (Raumumfang minus Türen), nicht über m². Bei 4×5 m sind das rund 17 m; kaufe 5-10 % mehr für Schnitte. Achtung: Bodenpakete haben unterschiedliche Mengen (1,4-2,8 m²) — das Etikett entscheidet.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Die Raumfläche (L × B, Fuß oder Meter) wächst um den Verschnittfaktor, geteilt durch die Paketabdeckung und immer aufgerundet — halbe Pakete gibt es nicht, und abgesetzte Färbungen machen »später nachkaufen« zum Glücksspiel. Kosten = Pakete × Paketpreis.',
    },
  },
}
