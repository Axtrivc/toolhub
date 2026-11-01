/**
 * fraction-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = FractionCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const fractionCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'a/b ± c/d = (a·d ± b·c) / (b·d)\na/b × c/d = (a·c)/(b·d)',
      explain: 'Suma/resta con denominador común, multiplica numeradores y denominadores. Los resultados se reducen dividiendo entre el máximo común divisor.',
    },
    ui: {
      'chartTitle': 'Tamaño de fracciones',
      'cmp.0': 'Fracción 1',
      'cmp.1': 'Fracción 2',
      'cmp.2': 'Resultado',
      'cmpseg.0': 'Valor',
      errDenominator: 'El denominador no puede ser 0', errDivideByZero: 'No se puede dividir entre 0', errOverflow: 'Los números son demasiado grandes — prueba con valores más pequeños',
      'in.num1': 'Numerador 1',
      'in.den1': 'Denominador 1',
      'in.op': 'Operación',
      'opt.op.add': '+ (Sumar)',
      'opt.op.sub': '− (Restar)',
      'opt.op.mul': '× (Multiplicar)',
      'opt.op.div': '÷ (Dividir)',
      'in.num2': 'Numerador 2',
      'in.den2': 'Denominador 2',
      'out.result': 'Resultado (fracción)',
      'out.decimal': 'Como decimal',
      note: '➗ Simplifica los resultados a su mínima expresión. Usa aritmética exacta de fracciones, no decimales.',
    },
    useCases: [
      'mediciones precisas en carpintería y construcción',
      'conversiones de fracciones en recetas de cocina',
      'cálculos exactos en ingeniería y mecánica',
      'compases e intervalos en teoría musical',
    ],
    faqs: [
      { q: '¿Puede manejar números mixtos como 2 1/2?', a: 'Introduce 5/2 (la forma impropia). El resultado se mostrará como «2 1/2» si es mayor que 1.' },
      { q: '¿Cómo se simplifica el resultado?', a: 'Tras cada operación, numerador y denominador se dividen por su máximo común divisor: 3/12 → 1/4, y además se muestra el valor decimal para comprobar. Todo se calcula con aritmética exacta de enteros, sin los errores de coma flotante tipo 0,1 + 0,2.' },
      { q: '¿Puede ser negativo el denominador?', a: 'Sí; el signo se mueve al numerador: 1/-2 se trata como -1/2 y el resultado se simplifica igual. Un denominador 0 da error directamente: dividir entre cero no está definido.' },
      { q: '¿Cómo hago operaciones en cadena?', a: 'La herramienta calcula un paso por vez: primero 1/2 + 1/3 y el resultado 5/6 entra en el siguiente paso. En cálculos largos, conserva la forma de fracción en cada paso; pasar a decimal a mitad de camino introduce errores de redondeo.' },
    ],
  },
  de: {
    formula: {
      formula: 'a/b ± c/d = (a·d ± b·c) / (b·d)\na/b × c/d = (a·c)/(b·d)',
      explain: 'Addition/Subtraktion mit gemeinsamem Nenner, Multiplikation von Zählern und Nennern. Ergebnisse werden durch den ggT gekürzt.',
    },
    ui: {
      'chartTitle': 'Bruchgrößen',
      'cmp.0': 'Bruch 1',
      'cmp.1': 'Bruch 2',
      'cmp.2': 'Ergebnis',
      'cmpseg.0': 'Wert',
      errDenominator: 'Der Nenner darf nicht 0 sein', errDivideByZero: 'Division durch 0 ist nicht möglich', errOverflow: 'Zahlen zu groß — versuche kleinere Werte',
      'in.num1': 'Zähler 1',
      'in.den1': 'Nenner 1',
      'in.op': 'Operation',
      'opt.op.add': '+ (Addieren)',
      'opt.op.sub': '− (Subtrahieren)',
      'opt.op.mul': '× (Multiplizieren)',
      'opt.op.div': '÷ (Dividieren)',
      'in.num2': 'Zähler 2',
      'in.den2': 'Nenner 2',
      'out.result': 'Ergebnis (Bruch)',
      'out.decimal': 'Als Dezimalzahl',
      note: '➗ Kürzt Ergebnisse vollständig. Verwendet exakte Bruchrechnung, keine Dezimalzahlen.',
    },
    useCases: [
      'präzise Messungen in Tischlerei und Bauwesen',
      'Bruchumrechnungen in Kochrezepten',
      'exakte Berechnungen in Ingenieurwesen und Mechanik',
      'Taktarten und Intervalle in der Musiktheorie',
    ],
    faqs: [
      { q: 'Kann es gemischte Zahlen wie 2 1/2 verarbeiten?', a: 'Gib 5/2 (die unechte Form) ein. Das Ergebnis wird als „2 1/2“ angezeigt, wenn es größer als 1 ist.' },
      { q: 'Wie wird das Ergebnis gekürzt?', a: 'Nach jeder Operation werden Zähler und Nenner durch den größten gemeinsamen Teiler geteilt: 3/12 → 1/4; zusätzlich erscheint der Dezimalwert zum Abgleich. Gerechnet wird durchweg mit exakter Ganzzahlarithmetik — keine Rundungsfehler wie bei 0,1 + 0,2.' },
      { q: 'Darf der Nenner negativ sein?', a: 'Ja, das Vorzeichen wandert in den Zähler: 1/-2 wird als -1/2 behandelt und genauso gekürzt. Ein Nenner von 0 liefert direkt eine Fehlermeldung — Division durch null ist undefiniert.' },
      { q: 'Wie rechne ich in mehreren Schritten?', a: 'Das Tool rechnet einen Schritt pro Eingabe: erst 1/2 + 1/3, dann geht das Ergebnis 5/6 in den nächsten Schritt ein. Bei langen Ketten das Zwischenergebnis als Bruch weiterverwenden — eine Dezimalumwandlung zwischendrin schleppt Rundungsfehler ein.' },
    ],
  },
}
