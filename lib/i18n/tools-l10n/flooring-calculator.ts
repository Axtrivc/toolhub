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
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    useCases: [
      '5.5×3.7 米客厅铺强化地板:约 20.4 平米,加 10% 损耗,按每箱 2.3 平米算出 10 箱',
      '人字拼加损耗:同房间直铺 5% 够用,人字拼要 10-15%,预算差 2-3 箱,下单前先看清',
      '比材料报价:瓷砖每箱约 1.44 平米、石塑每箱约 2.6 平米,换算成含损耗的每平米成本再比总价',
      '留备用板:染缸批次停产后补不到同色,多买一箱作日后维修备件,几乎不亏',
    ],
    faqs: [
      {
        q: '损耗率该加多少?',
        a: '直铺板材和常规瓷砖、简单房型加 5-10%;斜铺、人字拼、大规格砖或异形多的空间加 10-15%。损耗覆盖切割、错缝和最后一条裁窄的边——不是可选项。',
      },
      {
        q: '怎么算要买几箱?',
        a: '长 × 宽得面积,乘损耗系数,除以箱面标称覆盖量再向上取整:箱数 = ⌈面积 × (1 + 损耗) ÷ 每箱覆盖⌉。本工具对瓷砖、实木复合、石塑和大理石自动完成,英尺或米都行。',
      },
      {
        q: '一箱能铺多少平米?',
        a: '常见 1.4-2.8 平米:瓷砖约 1.44 平米、大理石约 1.5 平米、实木复合约 2.2 平米、石塑地板约 2.6 平米。各家包装不同——以标签为准,并多留一整箱备用,因为同批次停产就补不到货。',
      },
      {
        q: '平方英尺怎么换算?',
        a: '1 平方英尺 ≈ 0.093 平米。国内地板按平米计价、按包装(每箱约 1.2-2.3 平米)出售;损耗建议相同:直铺 5%-10%,斜铺或鱼骨拼 10%-15%。箱数务必向上取整——散装是买不到的。',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: '房间面积(长 × 宽,英尺或米)先乘 (1 + 损耗率),再除以所选材料每箱覆盖面积并向上取整——箱子不能拆买,停产批次也让「以后再补」变成赌博。总价 = 箱数 × 每箱单价。',
    },
  },

  // ──────────────────────────── Español ────────────────────────────
  es: {
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
        a: 'Sockelleisten laufen über Laufmeter (Raumumfang minus Türen), nicht über m². Bei 4×5 m sind das rund 17 m; kaufe 5-10 % mehr für Schnitte. Achtung: Bodenpakete haben unterschiedliche Mengen (1,8-3,0 m²) — das Etikett entscheidet.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Die Raumfläche (L × B, Fuß oder Meter) wächst um den Verschnittfaktor, geteilt durch die Paketabdeckung und immer aufgerundet — halbe Pakete gibt es nicht, und abgesetzte Färbungen machen »später nachkaufen« zum Glücksspiel. Kosten = Pakete × Paketpreis.',
    },
  },
}
