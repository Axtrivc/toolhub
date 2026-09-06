/**
 * scientific-notation-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = ScientificNotationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const scientificNotationConverterL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'N = a × 10^n    (1 ≤ |a| < 10)',
      explain: '科学记数法把一个数写成尾数 a 乘以 10 的幂。指数 n 表示数量级;转换只是移动小数点。',
    },
    ui: {
      errInvalid: '请输入有效数字(如 123000 或 3.4e-11)',
      'in.number': '数字',
      'out.sci': '科学计数法',
      'out.e': 'E 记数法',
      'out.engineering': '工程计数法',
      note: '🔬 科学计数法用于简洁地表示极大或极小的数。6.022 × 10²³ 是阿伏伽德罗常数。',
    },
    useCases: [
      '物理与化学作业',
      '编程中处理极大或极小的数字',
      '阅读和理解科学论文',
      '工程与电子学计算',
    ],
    faqs: [
      { q: '为什么要用工程计数法?', a: '指数总是 3 的倍数,因此能干净地对应国际单位制词头(千 = 10³、兆 = 10⁶、吉 = 10⁹)。工程师更喜欢写 12.3 × 10⁶ 而不是 1.23 × 10⁷。' },
      { q: 'E 记数法和科学计数法是同一回事吗?', a: '是,只是写法不同:123000 = 1.23 × 10⁵ = 1.23e5 = 1.23E5。E 记数法是计算器和编程语言用的紧凑写法,数值含义完全一致。' },
      { q: '能输入 3.4e-11 这类格式吗?', a: '可以。工具接受普通数字(123000)、科学计数法(1.23e5)和负指数(3.4e-11),并一次性给出三种表示,可直接复制回代码或文档。' },
      { q: '什么时候必须用科学计数法?', a: '数值跨越多个数量级时:阿伏伽德罗常数 6.022 × 10²³、电子质量 9.109 × 10⁻³¹ kg。它免去了数零的痛苦,让数量级一眼可见,乘除法也只需处理尾数和指数。' },
    ],
  },
  es: {
    formula: {
      formula: 'N = a × 10^n    (1 ≤ |a| < 10)',
      explain: 'La notación científica escribe un número como mantisa a por una potencia de diez. El exponente n indica el orden de magnitud; convertir solo mueve el decimal.',
    },
    ui: {
      errInvalid: 'Introduce un número válido (p. ej., 123000 o 3.4e-11)',
      'in.number': 'Número',
      'out.sci': 'Notación científica',
      'out.e': 'Notación E',
      'out.engineering': 'Notación de ingeniería',
      note: '🔬 La notación científica expresa números muy grandes o pequeños de forma compacta. 6,022 × 10²³ es el número de Avogadro.',
    },
    useCases: [
      'tareas de física y química',
      'programar con números muy grandes o pequeños',
      'leer y entender artículos científicos',
      'cálculos de ingeniería y electrónica',
    ],
    faqs: [
      { q: '¿Por qué usar la notación de ingeniería?', a: 'El exponente siempre es múltiplo de 3, así que se corresponde directamente con los prefijos del SI (kilo = 10³, mega = 10⁶, giga = 10⁹). Los ingenieros prefieren 12,3 × 10⁶ sobre 1,23 × 10⁷.' },
      { q: '¿La notación E es lo mismo que la científica?', a: 'Sí, solo cambia la escritura: 123000 = 1,23 × 10⁵ = 1,23e5 = 1,23E5. La notación E es la forma compacta que usan calculadoras y lenguajes de programación; el valor es idéntico.' },
      { q: '¿Puedo introducir formatos como 3.4e-11?', a: 'Sí. La herramienta acepta números normales (123000), notación científica (1,23e5) y exponentes negativos (3,4e-11), y devuelve las tres representaciones de una vez, listas para copiar a tu código o documento.' },
      { q: '¿Cuándo es imprescindible la notación científica?', a: 'Cuando los valores abarcan varios órdenes de magnitud: el número de Avogadro (6,022 × 10²³) o la masa del electrón (9,109 × 10⁻³¹ kg). Evita contar ceros, muestra el orden de magnitud de un vistazo y simplifica multiplicaciones y divisiones.' },
    ],
  },
  de: {
    formula: {
      formula: 'N = a × 10^n    (1 ≤ |a| < 10)',
      explain: 'Die wissenschaftliche Notation schreibt eine Zahl als Mantisse a mal einer Zehnerpotenz. Der Exponent n zeigt die Größenordnung; Umrechnen verschiebt nur das Komma.',
    },
    ui: {
      errInvalid: 'Gib eine gültige Zahl ein (z. B. 123000 oder 3.4e-11)',
      'in.number': 'Zahl',
      'out.sci': 'Wissenschaftliche Schreibweise',
      'out.e': 'E-Schreibweise',
      'out.engineering': 'Technische Schreibweise',
      note: '🔬 Die wissenschaftliche Schreibweise drückt sehr große/kleine Zahlen kompakt aus. 6,022 × 10²³ ist die Avogadro-Zahl.',
    },
    useCases: [
      'Physik- und Chemiehausaufgaben',
      'Programmieren mit sehr großen oder kleinen Zahlen',
      'Wissenschaftliche Arbeiten lesen und verstehen',
      'Ingenieur- und Elektronikberechnungen',
    ],
    faqs: [
      { q: 'Wofür die technische Schreibweise?', a: 'Der Exponent ist immer ein Vielfaches von 3, sodass er sauber auf SI-Präfixe passt (Kilo = 10³, Mega = 10⁶, Giga = 10⁹). Ingenieure bevorzugen 12,3 × 10⁶ gegenüber 1,23 × 10⁷.' },
      { q: 'Ist die E-Schreibweise dasselbe wie die wissenschaftliche?', a: 'Ja, nur anders notiert: 123000 = 1,23 × 10⁵ = 1,23e5 = 1,23E5. Die E-Schreibweise ist die kompakte Form von Taschenrechnern und Programmiersprachen; der Wert ist identisch.' },
      { q: 'Kann ich Formate wie 3.4e-11 eingeben?', a: 'Ja. Das Werkzeug akzeptiert normale Zahlen (123000), wissenschaftliche Notation (1,23e5) und negative Exponenten (3,4e-11) und liefert alle drei Darstellungen auf einmal — fertig zum Kopieren in Code oder Dokument.' },
      { q: 'Wann ist wissenschaftliche Notation ein Muss?', a: 'Wenn Werte viele Größenordnungen spannen: die Avogadro-Zahl (6,022 × 10²³) oder die Elektronenmasse (9,109 × 10⁻³¹ kg). Sie erspart das Zählen von Nullen, zeigt die Größenordnung auf einen Blick und vereinfacht Multiplikation und Division.' },
    ],
  },
}
