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
    ui: {
      'in.length': '房间长度 (L)',
      'in.width': '房间宽度 (W)',
      'in.unit': '测量单位',
      'opt.unit.ft': '英尺 (ft)',
      'opt.unit.m': '米 (m)',
      'in.type': '地板 / 瓷砖类型',
      'opt.type.tile': '瓷砖 (Ceramic tile)',
      'opt.type.hardwood': '实木 / 强化复合地板',
      'opt.type.vinyl': '石塑 / 乙烯天地板 (LVP)',
      'opt.type.marble': '大理石 / 天然石材',
      'in.waste': '损耗预留比例',
      'in.boxPrice': '每箱包装单价',
      'out.boxes': '所需包装箱数',
      'out.area': '房间净面积',
      'out.withWaste': '计入损耗后的总面积',
      'out.coverage': '每箱覆盖面积',
      'out.cost': '预计材料总花费',
      'preset.0': '客厅 15×12 ft 实木地板',
      'preset.1': '卫生间 8×6 ft 瓷砖',
      'preset.2': '通铺 6×4 m 乙烯地板',
      'errInvalid': '请输入正的房间尺寸、0–50% 损耗率及非负单价',
      'boxWord': '箱',
      'boxesWord': '箱',
      'chartTitle': '房间平面布局示意',
      'note': '💡 常见损耗率：标准顺铺铺设约 5–10%；人字拼、对角菱形铺贴、大尺寸瓷砖或不规则房型建议预留 10–15%。购买箱数向上取整——多备一箱未拆封材料可作为日后维修的完美色号保障。',
    },
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
    ui: {
      'in.length': 'Largo de la estancia (L)',
      'in.width': 'Ancho de la estancia (W)',
      'in.unit': 'Unidad de medida',
      'opt.unit.ft': 'Pies (ft)',
      'opt.unit.m': 'Metros (m)',
      'in.type': 'Tipo de suelo',
      'opt.type.tile': 'Baldosa cerámica',
      'opt.type.hardwood': 'Madera multicapa / parquet',
      'opt.type.vinyl': 'Vinilo / LVT',
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
      'note': '💡 Desperdicio habitual: 5–10% para colocación recta; 10–15% para colocación en espiga, diagonal o estancias irregulares. Las cajas siempre se redondean al alza.',
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
      'note': '💡 Üblicher Verschnitt: 5–10% bei gerader Verlegung; 10–15% bei Fischgrät, diagonaler Verlegung oder verwinkelten Räumen. Kartons werden stets aufgerundet.',
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
        a: 'Sockelleisten laufen über Laufmeter (Raumumfang minus Türen), nicht über m². Bei 4×5 m sind das rund 17 m; kaufe 5-10 % mehr für Schnitte. Achtung: Bodenpakete haben unterschiedliche Mengen (1,8-3,0 m²) — das Etikett entscheidet.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Die Raumfläche (L × B, Fuß oder Meter) wächst um den Verschnittfaktor, geteilt durch die Paketabdeckung und immer aufgerundet — halbe Pakete gibt es nicht, und abgesetzte Färbungen machen »später nachkaufen« zum Glücksspiel. Kosten = Pakete × Paketpreis.',
    },
  },
}
