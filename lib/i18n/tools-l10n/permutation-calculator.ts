/**
 * permutation-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = PermutationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const permutationCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'P(n, k) = n! / (n − k)!',
      explain: '从 n 个物品中选出 k 个的有序排列数。与组合不同,顺序有关,所以 P(n,k) ≥ C(n,k)。',
    },
    ui: {
      errRange: '需要 0 ≤ r ≤ n',
      errIntegers: '请为 n 和 r 输入整数',
      'in.n': '总数 (n)',
      'in.r': '排列 (r)',
      'out.result': '排列数 P(n,r)',
      'out.formula': '公式',
      note: '🎰 排列:从 n 个中排列 r 个,考虑顺序。密码可能性就用这个。',
    },
    useCases: [
      '密码:4 位 PIN = 10⁴ 种排列',
      '比赛名次:8 名选手的前 3 名(有序)',
      '座位安排:桌边谁坐哪里',
      'ID 与代码生成',
    ],
    faqs: [
      { q: 'P(n,r) 什么时候等于 n!?', a: '当 r = n 时——你在排列全部物品。排列 n 个不同物品的方式数就是 n!(n 的阶乘)。例如 5 本书放在书架上:5! = 120 种排法。' },
    ],
  },
  es: {
    formula: {
      formula: 'P(n, k) = n! / (n − k)!',
      explain: 'Número de ordenaciones de k elementos elegidos de n. A diferencia de las combinaciones, el orden importa, por eso P(n,k) ≥ C(n,k).',
    },
    ui: {
      errRange: 'Se necesita 0 ≤ r ≤ n',
      errIntegers: 'Introduce números enteros para n y r',
      'in.n': 'Total de elementos (n)',
      'in.r': 'Ordenar (r)',
      'out.result': 'Permutaciones P(n,r)',
      'out.formula': 'Fórmula',
      note: '🎰 Permutaciones: ordenar r elementos de n, el orden importa. Las posibilidades de contraseñas usan esto.',
    },
    useCases: [
      'contraseñas: un PIN de 4 dígitos = 10⁴ permutaciones',
      'resultados de carrera: los 3 primeros de 8 corredores (ordenados)',
      'arreglos de asientos: quién se sienta dónde en una mesa',
      'generación de IDs y códigos',
    ],
    faqs: [
      { q: '¿Cuándo es P(n,r) = n!?', a: 'Cuando r = n — estás ordenando TODOS los elementos. El número de formas de ordenar n elementos distintos es n! (n factorial). Para 5 libros en una estantería: 5! = 120 arreglos.' },
    ],
  },
  de: {
    formula: {
      formula: 'P(n, k) = n! / (n − k)!',
      explain: 'Anzahl geordneter Anordnungen von k aus n gewählten Elementen. Anders als bei Kombinationen zählt die Reihenfolge, daher P(n,k) ≥ C(n,k).',
    },
    ui: {
      errRange: 'Es gilt 0 ≤ r ≤ n',
      errIntegers: 'Gib ganze Zahlen für n und r ein',
      'in.n': 'Gesamtanzahl (n)',
      'in.r': 'Anordnen (r)',
      'out.result': 'Permutationen P(n,r)',
      'out.formula': 'Formel',
      note: '🎰 Permutationen: r Elemente aus n anordnen, die Reihenfolge zählt. Passwortmöglichkeiten nutzen das.',
    },
    useCases: [
      'Passwörter: eine 4-stellige PIN = 10⁴ Permutationen',
      'Rennergebnisse: die ersten 3 von 8 Läufern (geordnet)',
      'Sitzordnungen: wer am Tisch wo sitzt',
      'ID- und Codegenerierung',
    ],
    faqs: [
      { q: 'Wann ist P(n,r) = n!?', a: 'Wenn r = n — du ordnest ALLE Elemente an. Die Anzahl der Möglichkeiten, n verschiedene Elemente anzuordnen, ist n! (n Fakultät). Für 5 Bücher auf einem Regal: 5! = 120 Anordnungen.' },
    ],
  },
}
