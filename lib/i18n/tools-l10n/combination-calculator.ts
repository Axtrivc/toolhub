/**
 * combination-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = CombinationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const combinationCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'C(n, k) = n! / [ k! × (n − k)! ]',
      explain: 'Número de formas de elegir k elementos de n sin importar el orden. Se lee «n sobre k»; central en la probabilidad binomial y el triángulo de Pascal.',
    },
    ui: {
      errRange: 'Se necesita 0 ≤ r ≤ n',
      errIntegers: 'Introduce números enteros para n y r',
      errTooBig: 'n no puede superar 10 000 (resultado demasiado grande para mostrar)',
      'in.n': 'Total de elementos (n)',
      'in.r': 'Elegir (r)',
      'out.result': 'Combinaciones C(n,r)',
      'out.formula': 'Fórmula',
      'out.odds': 'Probabilidad',
      'outSub.odds': 'Acertar una elección concreta al azar',
      oddsOneIn: '1 entre {c}',
      note: '🃏 Combinaciones: elegir r elementos de n, el orden no importa. Las probabilidades de lotería usan esto.',
    },
    useCases: [
      'probabilidad de lotería: elegir 6 de 49',
      'juegos de cartas: combinaciones de 5 cartas',
      'formación de equipos: elegir un comité de 3 entre 10',
      'control de calidad y muestreo de inventario',
    ],
    faqs: [
      { q: '¿Combinación o permutación?', a: 'En las combinaciones, el orden no importa (una ensalada de {lechuga, tomate} equivale a {tomate, lechuga}). En las permutaciones, el orden importa (la contraseña «abc» se diferencia de «cba»). Usa la calculadora de permutaciones para los arreglos ordenados.' },
    ],
  },
  de: {
    formula: {
      formula: 'C(n, k) = n! / [ k! × (n − k)! ]',
      explain: 'Anzahl, k aus n ohne Beachtung der Reihenfolge zu wählen. Gelesen als „n über k“; zentral für Binomialwahrscheinlichkeit und das Pascalsche Dreieck.',
    },
    ui: {
      errRange: 'Es gilt 0 ≤ r ≤ n',
      errIntegers: 'Gib ganze Zahlen für n und r ein',
      errTooBig: 'n darf 10.000 nicht überschreiten (Ergebnis zu groß zur Anzeige)',
      'in.n': 'Gesamtanzahl (n)',
      'in.r': 'Auswählen (r)',
      'out.result': 'Kombinationen C(n,r)',
      'out.formula': 'Formel',
      'out.odds': 'Chance',
      'outSub.odds': 'Eine bestimmte Auswahl zufällig treffen',
      oddsOneIn: '1 zu {c}',
      note: '🃏 Kombinationen: r Elemente aus n wählen, die Reihenfolge spielt keine Rolle. Lottochancen nutzen das.',
    },
    useCases: [
      'Lottochancen: 6 aus 49 wählen',
      'Kartenspiele: Kombinationen von 5 Karten',
      'Teambildung: einen 3-Personen-Ausschuss aus 10 wählen',
      'Qualitätskontrolle und Stichproben',
    ],
    faqs: [
      { q: 'Kombination oder Permutation?', a: 'Bei Kombinationen spielt die Reihenfolge keine Rolle (ein Salat aus {Kopfsalat, Tomate} ist gleich {Tomate, Kopfsalat}). Bei Permutationen ist die Reihenfolge wichtig (das Passwort „abc“ unterscheidet sich von „cba“). Für geordnete Anordnungen nutze den Permutationsrechner.' },
    ],
  },
}
