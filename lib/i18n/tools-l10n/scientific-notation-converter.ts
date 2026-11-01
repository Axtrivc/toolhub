/**
 * scientific-notation-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = ScientificNotationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const scientificNotationConverterL10n: ToolL10n = {

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
      { q: '¿La notación E es lo mismo que la científica?', a: 'Sí, solo cambia la escritura: 123000 = 1,23 × 10⁵ = 1.23e5 = 1.23E5. La notación E es la forma compacta que usan calculadoras y lenguajes de programación; el valor es idéntico.' },
      { q: '¿Puedo introducir formatos como 3.4e-11?', a: 'Sí. La herramienta acepta números normales (123000), notación científica (1.23e5) y exponentes negativos (3.4e-11), y devuelve las tres representaciones de una vez, listas para copiar en tu código o documento.' },
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
      'out.sci': 'Wissenschaftliche Notation',
      'out.e': 'E-Notation',
      'out.engineering': 'Ingenieurnotation',
      note: '🔬 Die wissenschaftliche Notation drückt sehr große/kleine Zahlen kompakt aus. 6,022 × 10²³ ist die Avogadro-Zahl.',
    },
    useCases: [
      'Physik- und Chemiehausaufgaben',
      'Programmieren mit sehr großen oder kleinen Zahlen',
      'Wissenschaftliche Arbeiten lesen und verstehen',
      'Ingenieur- und Elektronikberechnungen',
    ],
    faqs: [
      { q: 'Warum die Ingenieurnotation?', a: 'Der Exponent ist immer ein Vielfaches von 3, sodass er sauber auf SI-Präfixe passt (Kilo = 10³, Mega = 10⁶, Giga = 10⁹). Ingenieure bevorzugen 12,3 × 10⁶ gegenüber 1,23 × 10⁷.' },
      { q: 'Ist die E-Notation dasselbe wie die wissenschaftliche Notation?', a: 'Ja, nur anders notiert: 123000 = 1,23 × 10⁵ = 1.23e5 = 1.23E5. Die E-Notation ist die kompakte Form von Taschenrechnern und Programmiersprachen; der Wert ist identisch.' },
      { q: 'Kann ich Formate wie 3.4e-11 eingeben?', a: 'Ja. Das Werkzeug akzeptiert normale Zahlen (123000), wissenschaftliche Notation (1.23e5) und negative Exponenten (3.4e-11) und liefert alle drei Darstellungen auf einmal — fertig zum Kopieren in Code oder Dokument.' },
      { q: 'Wann ist wissenschaftliche Notation ein Muss?', a: 'Wenn Werte viele Größenordnungen umfassen: die Avogadro-Zahl (6,022 × 10²³) oder die Elektronenmasse (9,109 × 10⁻³¹ kg). Sie erspart das Zählen von Nullen, zeigt die Größenordnung auf einen Blick und vereinfacht Multiplikation und Division.' },
    ],
  },
}
