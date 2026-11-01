/**
 * permutation-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = PermutationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const permutationCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'P(n, k) = n! / (n − k)!',
      explain: 'Número de ordenaciones de k elementos elegidos de n. A diferencia de las combinaciones, el orden importa, por eso P(n,k) ≥ C(n,k).',
    },
    ui: {
      errRange: 'Se necesita 0 ≤ r ≤ n',
      errIntegers: 'Introduce números enteros para n y r',
      errTooBig: 'n no puede superar 10 000 (resultado demasiado grande para mostrar)',
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
      errTooBig: 'n darf 10.000 nicht überschreiten (Ergebnis zu groß zur Anzeige)',
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
      { q: 'Wann ist P(n,r) = n!?', a: 'Wenn r = n — du ordnest ALLE Elemente an. Die Anzahl der Möglichkeiten, n verschiedene Elemente anzuordnen, ist n! (n Fakultät). Für 5 Bücher im Regal: 5! = 120 Anordnungen.' },
    ],
  },
}
