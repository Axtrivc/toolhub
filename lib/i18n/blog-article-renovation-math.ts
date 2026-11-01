/**
 * 《The Contractor\u2019s Guide to Material Estimating: Calculating Tile, Flooring, and Paint Waste Factors》
 * Pillar 集群 #10(家居施工,2026-09-05)。
 * 内链:flooring-calculator / paint-calculator / area-converter / rectangle-calculator。
 */

import type { LocalizedArticle } from './blog-articles'

const CODE_MATERIALS = `// Material estimating with waste factor
materials = area * (1 + waste)
//
// Waste factors (pro defaults):
//   flooring, straight lay   10%   |  diagonal/herringbone  15-20%
//   tile, grid layout        10%   |  tile, diagonal         15-20%
//   paint (walls)            10%   |  textured surfaces      15%+
//
// Paint: 1 gallon ≈ 350-400 sq ft per coat
//   gallons = (wall area * coats * 1.1) / 350`

// ── 标题类字段英文原值(articleTitle 三语已回填;breadcrumbTitle 暂以 en 值占位)──
const EN_TITLE = 'The Contractor’s Guide to Material Estimating: Calculating Tile, Flooring, and Paint Waste Factors'
const EN_CRUMB_TITLE = 'Material Estimating Guide'

export const renovationMathArticle: LocalizedArticle = {
  en: {
    articleTitle: { en: EN_TITLE,  es: 'La guía del contratista para estimar materiales: calcular el factor de desperdicio de baldosas, suelos y pintura', de: 'Der Handwerker-Leitfaden zur Materialberechnung: Verschnitt-Faktoren für Fliesen, Bodenbeläge und Farbe' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE,  es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 9,
    lead: 'The difference between a DIY weekend and a third trip to the store is one number: the waste factor. Contractors price it into every estimate; homeowners discover it mid-project. Here is the measuring math and the waste factors the trade actually uses.',
    sections: [
      {
        heading: '1. Measure Like a Contractor: Net Area, Not Room Label',
        blocks: [
          'Every estimate starts with measured area — and rooms are never the rectangles on the floor plan. Measure wall to wall, then subtract what doesn\u2019t get the material (hearths, cabinets, stair openings) and add what does (closets, alcoves). For L-shaped rooms, split into rectangles and sum.',
          'Unit discipline is where estimates die quietly. US stores sell flooring by the square foot and paint by the gallon; many imported tiles are spec\u2019d in centimeters. Convert **once, at the start**: 1 m² = 10.764 ft², 1 ft² = 0.0929 m².',
          {
            card: {
              title: 'Rectangle Calculator',
              href: '/tools/rectangle-calculator/',
              desc: 'Length × width for each piece, then sum — the net-area arithmetic for L-shapes and alcoves.',
            },
          },
          {
            card: {
              title: 'Area Converter',
              href: '/tools/area-converter/',
              desc: 'ft² ↔ m² ↔ yd² with the exact factors — convert before you order, not at the register.',
            },
          },
        ],
      },
      {
        heading: '2. Flooring: The 10% Rule and When It\u2019s Not Enough',
        blocks: [
          'The straight-lay default is **10% waste**: cut-offs at walls, staggering the pattern, and the boards you will mis-cut. Diagonal layouts, herringbone, and chevron patterns push waste to **15–20%** because every perimeter piece is an angled cut.',
          { code: CODE_MATERIALS },
          'Two pro habits worth stealing. First, **buy all boxes from one dye lot / batch number** — the same SKU from different production runs can differ visibly in shade. Second, keep 1–2 spare boxes after install: five years from now, a damaged plank is only repairable if the same product still exists in your attic.',
          {
            card: {
              title: 'Flooring Calculator',
              href: '/tools/flooring-calculator/',
              desc: 'Room area to boxes-needed with adjustable waste factor — including the batch-math for pack sizes.',
            },
          },
        ],
      },
      {
        heading: '3. Tile: Layout Decides Waste Before You Cut Anything',
        blocks: [
          'Tile waste is set by geometry, not care. A grid layout with the room\u2019s dimensions nearly divisible by tile size wastes ~10%; rotate the same tile 45° and every wall edge becomes a diagonal cut — 15–20%. Large-format tile in small rooms is the extreme case: fewer pieces, each cut costing a third of a tile.',
          'Order grout and thinset with the same discipline: grout coverage scales with joint width and tile size (the bag\u2019s chart assumes 1/8" joints on 12" tile — wide joints on small tile can triple consumption), and thinset coverage assumes a flat substrate; self-leveling first is cheaper than learning why.',
        ],
      },
      {
        heading: '4. Paint: Coverage Math, Coats, and the Primer Question',
        blocks: [
          'Wall area is perimeter × height minus openings (a door ≈ 21 ft², a window ≈ 15 ft²). A gallon covers **350–400 ft² per coat** on smooth drywall — textured surfaces, raw masonry, and dark-to-light color changes all consume more. Most repaints need **two coats**; dramatic color changes need primer plus two.',
          'Do the gallon math with waste: (wall area × coats × 1.1) ÷ 350. A 12×15 ft room with 8 ft ceilings is ~400 ft² of wall after openings — two coats with waste lands at ~2.5 gallons, so buy 3 and keep the unopened one returnable.',
          {
            card: {
              title: 'Paint Calculator',
              href: '/tools/paint-calculator/',
              desc: 'Room dimensions to gallons with coats and waste built in — ceiling, walls, and trim separated.',
            },
          },
        ],
      },
      {
        heading: '5. The Budget Layer: Contingency Is Not Pessimism',
        blocks: [
          'Materials are the predictable half. The unpredictable half — subfloor damage, mold behind the vanity, the pipe that wasn\u2019t on any plan — is why contractors carry **10–20% contingency** on renovation budgets. Old houses and any project involving plumbing sit at the high end; cosmetic-only work at the low end.',
          'The final discipline is sequencing: measure twice, order once, and order **before** demo day. Material lead times have ended more weekend projects than any lack of skill.',
        ],
      },
      {
        heading: 'The Pre-Purchase Checklist',
        blocks: [
          { list: [
            'Measure **net area** per room; sketch splits for non-rectangles.',
            'Convert units **once** at the start; never mix ft² and m² mid-estimate.',
            'Apply the right **waste factor**: 10% straight, 15–20% diagonal/patterned.',
            'Match **batch/dye-lot numbers** across all boxes; keep 1–2 spares.',
            'Add **10–20% contingency** to the budget; order materials before you demo.',
          ] },
        ],
      },
    ],
  },

  es: {
    articleTitle: { en: EN_TITLE,  es: 'La guía del contratista para estimar materiales: calcular el factor de desperdicio de baldosas, suelos y pintura', de: 'Der Handwerker-Leitfaden zur Materialberechnung: Verschnitt-Faktoren für Fliesen, Bodenbeläge und Farbe' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE,  es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 9,
    lead: 'La diferencia entre un fin de semana de bricolaje y un tercer viaje a la tienda es un número: el factor de desperdicio. Los contratistas lo incluyen en cada presupuesto; el particular lo descubre a mitad de obra. Aquí va la matemática de medición y los factores que el oficio usa de verdad.',
    sections: [
      {
        heading: '1. Mide como un contratista: área neta, no la etiqueta del plano',
        blocks: [
          'Todo presupuesto empieza con el área medida — y las habitaciones nunca son los rectángulos del plano. Mide de pared a pared, resta lo que no lleva material (chimeneas, armarios, huecos de escalera) y suma lo que sí (armarios empotrados, rincones). Para habitaciones en L, divide en rectángulos y suma.',
          'La disciplina de unidades es donde los presupuestos mueren en silencio: las tiendas de EE. UU. venden suelos por pie cuadrado y pintura por galón; muchas baldosas importadas vienen en centímetros. Convierte **una vez, al principio**: 1 m² = 10,764 ft², 1 ft² = 0,0929 m².',
          {
            card: {
              title: 'Calculadora de rectángulo',
              href: '/tools/rectangle-calculator/',
              desc: 'Largo × ancho de cada pieza y suma — la aritmética de área neta para formas en L y rincones.',
            },
          },
          {
            card: {
              title: 'Conversor de área',
              href: '/tools/area-converter/',
              desc: 'ft² ↔ m² ↔ yd² con los factores exactos — convierte antes de pedir, no en la caja.',
            },
          },
        ],
      },
      {
        heading: '2. Suelos: la regla del 10 % y cuándo no basta',
        blocks: [
          'El defecto para instalación recta es **10 % de desperdicio**: cortes en paredes, el patrón escalonado y las tablas que vas a cortar mal. Los esquemas en diagonal, espiga y chevrón empujan el desperdicio al **15–20 %** — cada pieza perimetral es un corte en ángulo.',
          { code: CODE_MATERIALS },
          'Dos hábitos profesionales que conviene robar. Primero, **compra todas las cajas del mismo lote** — la misma referencia de distintas tiradas puede variar de tono a simple vista. Segundo, guarda 1–2 cajas de repuesto tras la instalación: dentro de cinco años, una tabla dañada solo se repara si el mismo producto sigue existiendo en tu desván.',
          {
            card: {
              title: 'Calculadora de suelos',
              href: '/tools/flooring-calculator/',
              desc: 'Del área de la habitación a las cajas necesarias con factor de desperdicio ajustable — incluida la matemática de empaquetado.',
            },
          },
        ],
      },
      {
        heading: '3. Baldosas: el patrón decide el desperdicio antes del primer corte',
        blocks: [
          'El desperdicio de baldosa lo fija la geometría, no el cuidado. Un patrón en rejilla con dimensiones casi divisibles por la baldosa desperdicia ~10 %; gira la misma baldosa 45° y cada borde se vuelve corte diagonal — 15–20 %. El formato grande en habitaciones pequeñas es el caso extremo: menos piezas, y cada corte cuesta un tercio de baldosa.',
          'Pide lechada y mortero con la misma disciplina: la lechada escala con el ancho de junta y el tamaño de pieza (la tabla del saco asume juntas de 1/8" sobre baldosa de 12" — juntas anchas en baldosa pequeña pueden triplicar el consumo), y la cobertura del mortero asume un soporte plano; autonivelar primero sale más barato que aprender por qué.',
        ],
      },
      {
        heading: '4. Pintura: matemática de cobertura, manos y la cuestión de la imprimación',
        blocks: [
          'El área de pared es perímetro × altura menos huecos (una puerta ≈ 21 ft², una ventana ≈ 15 ft²). Un galón cubre **350–400 ft² por mano** sobre yeso liso — texturas, mampostería en crudo y cambios de oscuro a claro consumen más. La mayoría de repintados necesitan **dos manos**; los cambios dramáticos de color, imprimación más dos.',
          'Calcula los galones con desperdicio: (área de pared × manos × 1,1) ÷ 350. Una habitación de 12×15 ft con techos de 8 ft da ~400 ft² de pared tras descontar huecos — dos manos con desperdicio son ~2,5 galones: compra 3 y guarda el bote sin abrir por si lo tienes que devolver.',
          {
            card: {
              title: 'Calculadora de pintura',
              href: '/tools/paint-calculator/',
              desc: 'De las dimensiones de la habitación a los galones, con manos y desperdicio incluidos — techo, paredes y molduras por separado.',
            },
          },
        ],
      },
      {
        heading: '5. La capa de presupuesto: la contingencia no es pesimismo',
        blocks: [
          'Los materiales son la mitad predecible. La impredecible — daños en el subsuelo, moho tras el mueble del baño, la tubería que no estaba en ningún plano — es por lo que los contratistas cargan **10–20 % de contingencia**. Casas viejas y cualquier proyecto con fontanería, en el extremo alto; obra solo cosmética, en el bajo.',
          'La disciplina final es el orden: mide dos veces, pide una, y pide **antes** del día de demolición. Los plazos de entrega han terminado más proyectos de fin de semana que cualquier falta de pericia.',
        ],
      },
      {
        heading: 'La lista antes de comprar',
        blocks: [
          { list: [
            'Mide el **área neta** por habitación; dibuja las divisiones de los no rectángulos.',
            'Convierte unidades **una vez** al principio; nunca mezcles ft² y m² a mitad de presupuesto.',
            'Aplica el **factor de desperdicio** correcto: 10 % recto, 15–20 % diagonal/patrón.',
            'Casa los **números de lote** entre todas las cajas; guarda 1–2 de repuesto.',
            'Añade **10–20 % de contingencia** al presupuesto; pide materiales antes de demoler.',
          ] },
        ],
      },
    ],
  },
  de: {
    articleTitle: { en: EN_TITLE,  es: 'La guía del contratista para estimar materiales: calcular el factor de desperdicio de baldosas, suelos y pintura', de: 'Der Handwerker-Leitfaden zur Materialberechnung: Verschnitt-Faktoren für Fliesen, Bodenbeläge und Farbe' },
    breadcrumbTitle: { en: EN_CRUMB_TITLE,  es: EN_CRUMB_TITLE, de: EN_CRUMB_TITLE },
    readMinutes: 9,
    lead: 'Der Unterschied zwischen einem DIY-Wochenende und der dritten Fahrt zum Baumarkt ist eine Zahl: der Verschnitt-Faktor. Handwerker kalkulieren ihn in jeden Kostenvoranschlag; Hausbesitzer lernen ihn mitten im Projekt kennen. Hier die Mess-Mathematik und die Verschnitt-Faktoren, die das Gewerbe wirklich nutzt.',
    sections: [
      {
        heading: '1. Messe wie ein Handwerker: Nettofläche, nicht Raumname',
        blocks: [
          'Jede Kalkulation beginnt mit gemessener Fläche — und Räume sind nie die Rechtecke des Grundrisses. Wand zu Wand messen, dann abziehen, was kein Material bekommt (Kaminvorsprünge, Schränke, Treppenöffnungen), und addieren, was welches bekommt (Einbauschränke, Nischen). L-förmige Räume in Rechtecke zerlegen und summieren.',
          'Einheitendisziplin ist, wo Kalkulationen leise sterben: US-Läden verkaufen Boden pro Quadratfuß und Farbe pro Gallone; viele importierte Fliesen sind in Zentimetern spezifiziert. **Einmal umrechnen, ganz am Anfang**: 1 m² = 10,764 ft², 1 ft² = 0,0929 m².',
          {
            card: {
              title: 'Rechteck-Rechner',
              href: '/tools/rectangle-calculator/',
              desc: 'Länge × Breite je Stück, dann summieren — die Nettoflächen-Arithmetik für L-Formen und Nischen.',
            },
          },
          {
            card: {
              title: 'Flächen-Umrechner',
              href: '/tools/area-converter/',
              desc: 'ft² ↔ m² ↔ yd² mit exakten Faktoren — vor der Bestellung umrechnen, nicht an der Kasse.',
            },
          },
        ],
      },
      {
        heading: '2. Bodenbelag: Die 10-%-Regel — und wann sie nicht reicht',
        blocks: [
          'Der Standard bei gerader Verlegung ist **10 % Verschnitt**: Zuschnitte an Wänden, versetztes Muster und die Dielen, die du falsch schneiden wirst. Diagonale, Fischgrät- und Chevron-Muster treiben den Verschnitt auf **15–20 %** — jedes Randstück wird ein Winkelschnitt.',
          { code: CODE_MATERIALS },
          'Zwei Profi-Gewohnheiten zum Klauen. Erstens: **Alle Pakete mit derselben Chargen-/Farbpartie-Nummer kaufen** — dieselbe SKU aus verschiedenen Produktionsläufen kann sichtbar im Farbton abweichen. Zweitens: 1–2 Pakete nach der Verlegung aufheben — in fünf Jahren ist eine beschädigte Diele nur reparierbar, wenn dasselbe Produkt noch auf deinem Dachboden liegt.',
          {
            card: {
              title: 'Bodenbelags-Rechner',
              href: '/tools/flooring-calculator/',
              desc: 'Raumfläche zu benötigten Paketen mit einstellbarem Verschnitt — inklusive der Paketgrößen-Rundungsmathematik.',
            },
          },
        ],
      },
      {
        heading: '3. Fliesen: Das Layout entscheidet den Verschnitt vor dem ersten Schnitt',
        blocks: [
          'Fliesenverschnitt wird durch Geometrie bestimmt, nicht durch Sorgfalt. Ein Rastermuster bei fast durch Fliesengröße teilbaren Raummaßen verschwendet ~10 %; dieselbe Fliese um 45° gedreht, und jede Wandkante wird zum Diagonalschnitt — 15–20 %. Großformat in kleinen Räumen ist der Extremfall: weniger Stücke, jeder Schnitt kostet ein Drittel Fliese.',
          'Fugenmörtel und Kleber mit derselben Disziplin bestellen: Fugenverbrauch skaliert mit Fugenbreite und Fliesengröße (die Sacktabelle nimmt 1/8"-Fugen auf 12"-Fliesen an — breite Fugen bei kleinen Fliesen können den Verbrauch verdreifachen), und die Kleber-Deckung setzt einen ebenen Untergrund voraus; erst selbstnivellieren ist billiger als hinterher zu lernen, warum.',
        ],
      },
      {
        heading: '4. Farbe: Deckungs-Mathematik, Anstriche und die Grundierungsfrage',
        blocks: [
          'Wandfläche ist Umfang × Höhe minus Öffnungen (Tür ≈ 21 ft², Fenster ≈ 15 ft²). Eine Gallone deckt **350–400 ft² pro Anstrich** auf glattem Trockenbau — Strukturputz, rohes Mauerwerk und Dunkel-auf-Hell-Wechsel verbrauchen mehr. Die meisten Neuanstriche brauchen **zwei Anstriche**; dramatische Farbwechsel Grundierung plus zwei.',
          'Rechne Gallonen mit Verschnitt: (Wandfläche × Anstriche × 1,1) ÷ 350. Ein 12×15-ft-Raum mit 8-ft-Decken ergibt nach Öffnungen ~400 ft² Wand — zwei Anstriche mit Verschnitt sind ~2,5 Gallonen, also 3 kaufen und die ungeöffnete noch zurückgeben können.',
          {
            card: {
              title: 'Farbverbrauchs-Rechner',
              href: '/tools/paint-calculator/',
              desc: 'Raummaße zu Gallonen mit Anstrichen und Verschnitt eingerechnet — Decke, Wände und Leisten getrennt.',
            },
          },
        ],
      },
      {
        heading: '5. Die Budget-Schicht: Rückstellung ist kein Pessimismus',
        blocks: [
          'Material ist die berechenbare Hälfte. Die unberechenbare — Schäden am Unterboden, Schimmel hinter dem Waschtisch, das Rohr, das auf keinem Plan stand — ist der Grund, warum Handwerker **10–20 % Rückstellung** auf Renovierungsbudgets rechnen. Altbauten und alles mit Sanitär am oberen Ende; rein kosmetische Arbeiten am unteren.',
          'Die letzte Disziplin ist die Reihenfolge: zweimal messen, einmal bestellen — und **vor** dem Rückbau-Tag bestellen. Materiallieferzeiten haben mehr Wochenendprojekte beendet als jeder Mangel an Können.',
        ],
      },
      {
        heading: 'Die Checkliste vor dem Kauf',
        blocks: [
          { list: [
            '**Nettofläche** pro Raum messen; Nicht-Rechtecke skizzieren.',
            'Einheiten **einmal** am Anfang umrechnen; nie ft² und m² mitten in der Kalkulation mischen.',
            'Den richtigen **Verschnitt-Faktor** anwenden: 10 % gerade, 15–20 % diagonal/gemustert.',
            '**Chargen-/Farbpartie-Nummern** aller Pakete abgleichen; 1–2 Pakete aufheben.',
            '**10–20 % Rückstellung** ins Budget; Material vor dem Abriss bestellen.',
          ] },
        ],
      },
    ],
  },
}
