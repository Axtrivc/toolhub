/**
 * ratio-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = RatioCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const ratioCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'a : b = (a/g) : (b/g),    g = GCD(a, b)',
      variables:
        'a, b = los dos términos de la razón\ng = GCD(a, b), el mayor número que divide a ambos términos',
      explain: 'Simplifica una razón dividiendo ambos términos entre su máximo común divisor. Escalar multiplica ambos términos por el mismo factor, conservando la proporción.',
      example:
        'Paso 1: simplifica 36 : 60.\nPaso 2: GCD(36, 60) = 12.\nPaso 3: 36 / 12 = 3 y 60 / 12 = 5.\nResultado: 36 : 60 = 3 : 5.',
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
      variables:
        'a, b = die beiden Terme des Verhältnisses\ng = GCD(a, b), die größte Zahl, die beide Terme teilt',
      explain: 'Ein Verhältnis wird vereinfacht, indem man beide Seiten durch ihren ggT teilt. Beim Skalieren werden beide Seiten mit demselben Faktor multipliziert, das Verhältnis bleibt erhalten.',
      example:
        'Schritt 1: Vereinfache 36 : 60.\nSchritt 2: GCD(36, 60) = 12.\nSchritt 3: 36 / 12 = 3 und 60 / 12 = 5.\nErgebnis: 36 : 60 = 3 : 5.',
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
