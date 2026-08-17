/**
 * percentage-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + formula(client = PercentageCalculatorClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'part = ( percent / 100 ) × whole'

export const percentageCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'change': '变化',
      'crossesZero': '无定义——变化跨越了零点',
      'decrease': '减少',
      'fromOriginal': '从(原值)',
      'increase': '增加',
      'mode1Title': 'X 的 Y% 是多少?',
      'mode2Title': 'X 是 Y 的百分之几?',
      'mode3Title': '从 X 到 Y 的百分比变化',
      'mode4Title': '加或减 X%',
      'noChange': '无变化',
      'ofValue': '占数值',
      'part': '部分',
      'percentage': '百分比 (%)',
      'percentageToAdd': '要加的百分比',
      'result': '结果',
      'tipNote': '💡 提示:留空某个字段会把它当作 0。本计算器完全在你的浏览器中运行。',
      'toNew': '到(新值)',
      'value': '数值',
      'whole': '整体',
    },
    useCases: [
      '计算折扣、税费和小费',
      '换算考试成绩的百分比',
      '衡量增长率、通胀率和利润率',
      '在原价上加减一个百分比',
    ],
    formula: {
      formula: FORMULA,
      explain: '求「某数的百分之几」:把百分数化为小数再乘以整体。反向:百分数 = 部分 / 整体 × 100。',
    },
    faqs: [
      { q: '怎么算折扣?', a: '用模式 1 求出折扣金额(X % × 原价),再从原价中减去。或用模式 4 输入负百分比,直接得到折后价。' },
      { q: '怎么算小费?', a: '在模式 1 中,把账单金额作为 Y、小费百分比作为 X。账单 $45、小费 18 %:18 % × 45 = $8.10。' },
      { q: '怎么算考试得分百分比?', a: '用模式 2。把你的得分作为「部分」、满分作为「整体」。50 题答对 42 题:42 是 50 的百分之几 = 84 %。' },
    ],
  },
  es: {
    ui: {
      'change': 'Cambio',
      'crossesZero': 'Indefinido: el cambio cruza el cero',
      'decrease': 'Disminución',
      'fromOriginal': 'De (original)',
      'increase': 'Aumento',
      'mode1Title': '¿X% de Y es cuánto?',
      'mode2Title': '¿X es qué porcentaje de Y?',
      'mode3Title': 'Cambio porcentual de X a Y',
      'mode4Title': 'Sumar o restar X%',
      'noChange': 'Sin cambio',
      'ofValue': 'De valor',
      'part': 'Parte',
      'percentage': 'Porcentaje (%)',
      'percentageToAdd': 'Porcentaje a sumar',
      'result': 'Resultado',
      'tipNote': '💡 Consejo: deja un campo vacío para tratarlo como 0. Esta calculadora funciona totalmente en tu navegador.',
      'toNew': 'A (nuevo)',
      'value': 'Valor',
      'whole': 'Total',
    },
    useCases: [
      'calcular descuentos, impuestos y propinas',
      'convertir notas de examen a porcentaje',
      'medir crecimiento, inflación y márgenes',
      'sumar o restar un porcentaje a un precio',
    ],
    formula: {
      formula: FORMULA,
      explain: 'Hallar «un porcentaje de un número»: convierte el porcentaje en decimal y multiplica por el total. Inverso: porcentaje = parte / total × 100.',
    },
    faqs: [
      { q: '¿Cómo calculo un descuento?', a: 'Usa el modo 1 para hallar el importe del descuento (X % del precio original) y réstalo del original. O usa el modo 4 con un porcentaje negativo para obtener directamente el precio final.' },
      { q: '¿Cómo calculo la propina?', a: 'En el modo 1, introduce el importe de la cuenta como Y y el porcentaje de propina como X. Para una propina del 18 % sobre una cuenta de $45: 18 % de 45 = $8,10.' },
      { q: '¿Cómo calculo el porcentaje de mi examen?', a: 'Usa el modo 2. Introduce tus puntos como la parte y el total posible como el entero. De 42 sobre 50: 42 es qué porcentaje de 50 = 84 %.' },
    ],
  },
  de: {
    ui: {
      'change': 'Änderung',
      'crossesZero': 'Undefiniert – die Änderung überschreitet die Null',
      'decrease': 'Senkung',
      'fromOriginal': 'Von (ursprünglich)',
      'increase': 'Steigerung',
      'mode1Title': 'Was sind X% von Y?',
      'mode2Title': 'X ist wie viel Prozent von Y?',
      'mode3Title': 'Prozentuale Änderung von X zu Y',
      'mode4Title': 'X% addieren oder subtrahieren',
      'noChange': 'Keine Änderung',
      'ofValue': 'Von Wert',
      'part': 'Teil',
      'percentage': 'Prozent (%)',
      'percentageToAdd': 'Zu addierender Prozentsatz',
      'result': 'Ergebnis',
      'tipNote': '💡 Tipp: Ein leeres Feld wird als 0 behandelt. Dieser Rechner läuft vollständig in deinem Browser.',
      'toNew': 'Nach (neu)',
      'value': 'Wert',
      'whole': 'Ganzes',
    },
    useCases: [
      'Rabatte, Steuern und Trinkgelder berechnen',
      'Prüfungsergebnisse in Prozent umrechnen',
      'Wachstum, Inflation und Margen messen',
      'einen Prozentbetrag auf einen Preis addieren oder abziehen',
    ],
    formula: {
      formula: FORMULA,
      explain: '«Ein Prozentsatz einer Zahl» finden: Wandle den Prozentsatz in eine Dezimalzahl und multipliziere mit dem Ganzen. Umgekehrt: Prozent = Teil / Ganzes × 100.',
    },
    faqs: [
      { q: 'Wie berechne ich einen Rabatt?', a: 'Nutze Modus 1, um den Rabattbetrag (X % vom Originalpreis) zu ermitteln, und ziehe ihn vom Original ab. Oder verwende Modus 4 mit einem negativen Prozentsatz, um direkt den Endpreis zu erhalten.' },
      { q: 'Wie berechne ich das Trinkgeld?', a: 'Im Modus 1 gib den Rechnungsbetrag als Y und den Trinkgeld-Prozentsatz als X ein. Für 18 % Trinkgeld auf $45: 18 % von 45 = $8,10.' },
      { q: 'Wie berechne ich meine Prüfungsnote in Prozent?', a: 'Nutze Modus 2. Gib deine Punkte als Teil und die maximal erreichbaren Punkte als Ganzes ein. Bei 42 von 50: 42 ist wie viel Prozent von 50 = 84 %.' },
    ],
  },
}
