/**
 * trapezoid-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = TrapezoidCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const trapezoidCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'in.a': '上底 (a)',
      'in.b': '下底 (b)',
      'in.h': '高 (h)',
      'out.area': '面积',
      note: '📐 梯形面积 = 平行边平均值 × 高。',
    },
    useCases: [
      '计算房产中不规则地块的面积',
      '求梯形窗户或建筑构件的面积',
      '估算沟渠、堤坝的土方截面面积',
    ],
    faqs: [
      { q: '如果我的两条边不平行怎么办?', a: '那就不是梯形——而是一个不规则四边形。你需要更多测量数据或不同的公式(比如分割成三角形)。' },
    ],
  },
  es: {
    ui: {
      'in.a': 'Lado superior (a)',
      'in.b': 'Lado inferior (b)',
      'in.h': 'Altura (h)',
      'out.area': 'Área',
      note: '📐 El área del trapecio = promedio de los lados paralelos × altura.',
    },
    useCases: [
      'calcular el área de parcelas irregulares en bienes raíces',
      'hallar el área de ventanas o elementos arquitectónicos trapezoidales',
      'estimar la sección transversal de zanjas y terraplenes',
    ],
    faqs: [
      { q: '¿Qué pasa si mis lados no son paralelos?', a: 'Entonces no es un trapecio — es un cuadrilátero irregular. Necesitarás más medidas o fórmulas distintas (como dividirlo en triángulos).' },
    ],
  },
  de: {
    ui: {
      'in.a': 'Obere Seite (a)',
      'in.b': 'Untere Seite (b)',
      'in.h': 'Höhe (h)',
      'out.area': 'Fläche',
      note: '📐 Trapezfläche = Durchschnitt der parallelen Seiten × Höhe.',
    },
    useCases: [
      'Fläche unregelmäßiger Grundstücke berechnen',
      'Fläche von trapezförmigen Fenstern oder Architekturelementen bestimmen',
      'Querschnittsfläche von Gräben und Dämmen abschätzen',
    ],
    faqs: [
      { q: 'Was, wenn meine Seiten nicht parallel sind?', a: 'Dann ist es kein Trapez — sondern ein unregelmäßiges Viereck. Du brauchst mehr Messwerte oder andere Formeln (z. B. Aufteilung in Dreiecke).' },
    ],
  },
}
