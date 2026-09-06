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
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    useCases: [
      '18 公斤绝育成犬:RER ≈ 610 千卡,乘 1.6 约 980 千卡/天;标签 375 千卡/杯折约 2.6 杯,分两餐喂',
      '减肥计划用 1.2 系数:同样 18 kg 只给约 735 千卡/天,每周称重确认降幅在 1%-2% 之间',
      '幼犬喂量:4 个月以下系数 3.0,需求接近成年绝育犬的两倍,拆成 3-4 餐喂',
      '按克喂不用量杯:标签 375 千卡/杯、105 克/杯,980 千卡折约 275 克/天——量杯误差可达 ±20%',
    ],
    faqs: [
      {
        q: '狗每天需要多少热量?',
        a: '两步:先算静息能量需求 RER = 70 × 体重(kg)^0.75,再乘生命阶段系数得每日需求 MER——减重/老年 1.2,绝育成犬 1.6,未绝育 1.8,幼犬和工作犬 2-3(AAHA 指南)。',
      },
      {
        q: '系数怎么选?',
        a: '如今多数宠物狗是绝育成犬 → ×1.6。减重或易胖老年犬 ×1.2;未绝育 ×1.8;4-12 月龄幼犬 ×2;4 个月以下 ×3;活跃工作犬/运动犬 ×2.5 起步。',
      },
      {
        q: '千卡/杯怎么换算成克?',
        a: '在袋子标签找「千卡/杯」和「克/杯」两个数:每日克数 = 每日千卡 ÷ 千卡/杯 × 克/杯。本工具两种标签(kcal/杯 或 kcal/100 克)都支持,同时输出杯数和克数——克更准,量杯误差可达 ±20%。',
      },
      {
        q: '标签只写 kcal/kg 怎么办?',
        a: '国产狗粮常标每公斤代谢能(ME):日喂克数 = 每日千卡 ÷ (kcal/kg ÷ 1000)。例:980 千卡、3600 kcal/kg → 约 272 克/天。把「杯数」忘掉、直接上厨房秤,是最稳的喂法。',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: '兽医能量算法(AAHA):静息能量随代谢体重(kg 的 0.75 次方)缩放,生命阶段系数(减重 1.2 到幼犬 3.0)折算成日需求;再用标签的千卡/杯(或千卡/100 克)密度换算成杯数与克数。',
    },
  },

  // ──────────────────────────── Español ────────────────────────────
  es: {
    useCases: [
      'perro adulto esterilizado de 18 kg: RER ≈ 615 kcal, ×1,6 ≈ 984 kcal/día; con 375 kcal/taza salen unas 2,6 tazas',
      'pauta de adelgazamiento con factor 1,2: el mismo perro se queda en unas 740 kcal/día; pesa cada semana y busca 1-2 % de bajada',
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
        a: 'Gramos/día = kcal diarias ÷ (kcal/kg ÷ 1.000). Con 984 kcal y 3.600 kcal/kg salen unos 273 g. Olvídate del vaso y usa una báscula de cocina: es la forma más fiable de alimentar.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Matemática energética veterinaria (AAHA): la energía en reposo escala con el peso metabólico (kg^0,75) y el factor de etapa vital — 1,2 pérdida de peso a 3,0 cachorro — la convierte en necesidades diarias; la densidad de la etiqueta (kcal/taza o kcal/100 g) traduce calorías a tazas y gramos.',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    useCases: [
      'kastrierter Erwachsener mit 18 kg: RER ≈ 615 kcal, ×1,6 ≈ 984 kcal/Tag; bei 375 kcal/Cup rund 2,6 Cups',
      'Abnehmplan mit Faktor 1,2: derselbe Hund bleibt bei rund 740 kcal/Tag; wöchentlich wiegen, Ziel 1-2 % Gewichtsverlust',
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
        a: 'Deutsche Etiketten geben ME in kcal/kg an: Tagesmenge (g) = Tages-kcal ÷ (kcal/kg ÷ 1.000). Bei 984 kcal und 3.600 kcal/kg sind das rund 273 g täglich. Küchenwaage statt Messbecher — das ist die zuverlässigste Fütterung.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Veterinär-Energieformel (AAHA): Der Ruhebedarf skaliert mit dem Stoffwechselgewicht (kg^0,75), der Lebensphasenfaktor — 1,2 Gewichtsabnahme bis 3,0 Welpe — macht daraus den Tagesbedarf; die Energiedichte des Etiketts (kcal/Cup oder kcal/100 g) übersetzt Kalorien in Cups und Gramm.',
    },
  },
}
