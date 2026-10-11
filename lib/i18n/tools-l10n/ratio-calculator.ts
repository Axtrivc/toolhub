/**
 * ratio-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = RatioCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const ratioCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'a : b = (a/g) : (b/g),    g = GCD(a, b)',
      explain: '用两项的最大公约数去除以化简比。缩放时两项乘以同一系数,比例保持不变。',
    },
    ui: {
      'chartTitle': 'A : B 与 C : D',
      'cmp.0': 'A : B',
      'cmp.1': 'C : D',
      'cmpseg.0': 'A',
      'cmpseg.1': 'B',
      'cmpseg.2': 'C',
      'cmpseg.3': 'D',
      errAB: 'A 和 B 不能为 0',
      'in.a': 'A',
      'in.b': 'B',
      'in.c': 'C(留空则求解)',
      'in.d': 'D(解出的)',
      'out.ratio': 'A : B = C : D',
      'out.d': 'D = ',
      note: '⚖️ 求解比例。示例:3/4 = 9/D → D = 12。适用于食谱、缩放和地图。',
    },
    useCases: [
      '食谱:从 4 人份放大到 6 人份',
      '地图:1 英寸 = 50 英里换算',
      '商业:人均营收、利润率',
      '摄影与建筑比例换算',
    ],
    faqs: [
      { q: '如果我的比例里有小数怎么办?', a: '这个计算器完全支持小数。若想用整数运算,先把两边同时乘以 10 或 100 去掉小数即可。' },
      { q: '两个比相等怎么验证?', a: '交叉相乘:A/B = C/D 等价于 A×D = B×C。例如 3/4 = 9/12,因为 3×12 = 36 = 4×9。工具解缺失项用的正是这个关系。' },
      { q: '齿轮比、传动比怎么算?', a: '主动轮齿数 : 从动轮齿数。自行车齿盘 50 : 12 ≈ 4.17,踏板一圈车轮转 4.17 圈。已知任意三项填入,第四项自动解出。' },
      { q: '黄金比例 1.618 怎么用?', a: '填 1 : 1.618。海报宽 50 cm,高就是 50 × 1.618 ≈ 81 cm;摄影三分法是它的粗略简化。把 1 和 1.618 填进 A、B,C 填实际边长即可反求另一边。' },
    ],
  },
  es: {
    formula: {
      formula: 'a : b = (a/g) : (b/g),    g = GCD(a, b)',
      explain: 'Simplifica una razón dividiendo ambos términos entre su máximo común divisor. Escalar multiplica ambos términos por el mismo factor, conservando la proporción.',
    },
    ui: {
      'chartTitle': 'A : B vs C : D',
      'cmp.0': 'A : B',
      'cmp.1': 'C : D',
      'cmpseg.0': 'A',
      'cmpseg.1': 'B',
      'cmpseg.2': 'C',
      'cmpseg.3': 'D',
      errAB: 'A y B no pueden ser 0',
      'in.a': 'A',
      'in.b': 'B',
      'in.c': 'C (o déjalo en blanco para resolver)',
      'in.d': 'D (resuelto)',
      'out.ratio': 'A : B = C : D',
      'out.d': 'D = ',
      note: '⚖️ Resuelve proporciones. Ejemplo: 3/4 = 9/D → D = 12. Útil para recetas, escalas y mapas.',
    },
    useCases: [
      'recetas: escalar de 4 a 6 raciones',
      'mapas: 1 pulgada = 50 millas, ¿cuánto es 3,5 pulgadas?',
      'negocios: ingresos por empleado, márgenes de beneficio',
      'fotografía y construcción: razones como 3:2 o 16:9',
    ],
    faqs: [
      { q: '¿Qué pasa si mi razón tiene decimales?', a: 'Esta calculadora maneja decimales sin problema. Para trabajar con números enteros, multiplica ambos lados por 10 o 100 para eliminar los decimales primero.' },
      { q: '¿Cómo compruebo que dos razones son iguales?', a: 'Multiplicando en cruz: A/B = C/D equivale a A×D = B×C. Por ejemplo, 3/4 = 9/12 porque 3×12 = 36 = 4×9. Es la misma relación que usa la calculadora para despejar el valor que falta.' },
      { q: '¿Cómo escalo una receta de 4 a 8 comensales?', a: 'A y B con la cantidad original, C con el nuevo número: 200 g : 4 = D : 8 → D = 400 g. Los ingredientes escalan linealmente, aunque el tiempo de cocción no siempre.' },
      { q: '¿Qué es la razón de transmisión?', a: 'Dientes del plato frente al piñón: una bicicleta con 50 : 12 ≈ 4,17 vueltas de rueda por pedalada. Introduce los tres valores conocidos y la calculadora despeja el cuarto.' },
    ],
  },
  de: {
    formula: {
      formula: 'a : b = (a/g) : (b/g),    g = GCD(a, b)',
      explain: 'Ein Verhältnis wird vereinfacht, indem man beide Seiten durch ihren ggT teilt. Beim Skalieren werden beide Seiten mit demselben Faktor multipliziert, das Verhältnis bleibt erhalten.',
    },
    ui: {
      'chartTitle': 'A : B vs. C : D',
      'cmp.0': 'A : B',
      'cmp.1': 'C : D',
      'cmpseg.0': 'A',
      'cmpseg.1': 'B',
      'cmpseg.2': 'C',
      'cmpseg.3': 'D',
      errAB: 'A und B dürfen nicht 0 sein',
      'in.a': 'A',
      'in.b': 'B',
      'in.c': 'C (oder leer lassen zum Lösen)',
      'in.d': 'D (gelöst)',
      'out.ratio': 'A : B = C : D',
      'out.d': 'D = ',
      note: '⚖️ Löst Proportionen. Beispiel: 3/4 = 9/D → D = 12. Nützlich für Rezepte, Skalierung und Karten.',
    },
    useCases: [
      'Rezepte: von 4 auf 6 Portionen skalieren',
      'Landkarten: 1 Zoll = 50 Meilen umrechnen',
      'Geschäft: Umsatz pro Mitarbeiter, Gewinnmargen',
      'Fotografie und Bauwesen: Verhältnisse wie 3:2 oder 16:9',
    ],
    faqs: [
      { q: 'Was, wenn mein Verhältnis Dezimalzahlen hat?', a: 'Dieser Rechner kommt gut mit Dezimalzahlen zurecht. Um mit ganzen Zahlen zu rechnen, multipliziere zuerst beide Seiten mit 10 oder 100, um die Dezimalstellen zu entfernen.' },
      { q: 'Wie prüfe ich, ob zwei Verhältnisse gleich sind?', a: 'Per Kreuzmultiplikation: A/B = C/D ist äquivalent zu A×D = B×C. Beispiel: 3/4 = 9/12, denn 3×12 = 36 = 4×9. Denselben Zusammenhang nutzt der Rechner beim Auflösen der fehlenden Größe.' },
      { q: 'Wie skaliere ich ein Rezept von 4 auf 6 Portionen?', a: 'A und B auf die Originalmenge setzen, C auf die neue Anzahl: 200 g Mehl : 4 = D : 6 → D = 300 g. Zutaten skalieren linear, Backzeit und Gargrad dagegen nicht.' },
      { q: 'Was bedeutet ein Kartenmaßstab wie 1 : 50.000?', a: '1 cm auf der Karte = 50.000 cm = 500 m in der Natur; 3,5 cm Karte sind also 1.750 m. Solche Dreisätze löst der Rechner: bekannte Werte eintragen, das fehlende Feld wird berechnet.' },
    ],
  },
}
