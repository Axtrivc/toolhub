/**
 * average-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases + formula(client = AverageCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'mean = ( Σ xᵢ ) / n'

export const averageCalculatorL10n: ToolL10n = {

  es: {
    ui: {
      'chartTitle': 'Tus números',
      'line.value': 'Valor',
      'line.mean': 'Media',
      'in.numbers': 'Números (sepáralos con comas, espacios o saltos de línea)',
      'out.count': 'Cantidad',
      'out.sum': 'Suma',
      'out.mean': 'Promedio (media)',
      'out.median': 'Mediana',
      'out.min': 'Mínimo',
      'out.max': 'Máximo',
      'out.range': 'Rango',
      'out.mode': 'Moda',
      'out.stdSample': 'Desviación típica (muestra)',
      'out.stdPop': 'Desviación típica (población)',
      'out.ignored': 'Entradas no numéricas',
      'outSub.stdSample': 'denominador n − 1',
      'outSub.stdPop': 'denominador n',
      'noMode': 'Ninguna (todos los valores son únicos)',
      'ignoredN': 'Se ignoraron {n} valores no numéricos',
      note: '📊 Introduce cualquier lista de números. Admite comas, espacios o saltos de línea como separadores.',
    },
    useCases: [
      'calcular la media, la mediana y el rango de un conjunto de datos',
      'trabajar con datos atípicos (usa la mediana)',
      'promediar notas, ventas o valoraciones',
      'comparar media y mediana para detectar sesgo',
    ],
    formula: {
      formula: FORMULA,
      explain: 'Media aritmética. xᵢ son los datos y n es la cantidad.',
    },
    faqs: [
      { q: '¿Cuál es la diferencia entre media, mediana y moda?', a: 'La media es la suma dividida por la cantidad (lo que la mayoría llama «el promedio»). La mediana es el valor central al ordenar los datos, menos sensible a los valores atípicos. La moda es el valor más frecuente. Esta calculadora se centra en la media; usa la mediana cuando tus datos tengan máximos o mínimos extremos.' },
      { q: '¿Debo excluir los valores atípicos antes de promediar?', a: 'Depende de tu objetivo. Para reflejar un desempeño típico (p. ej. el salario medio), un valor atípico como un CEO sesga la media; la mediana es más representativa. Para totales que deben contar todos los valores (p. ej. ingresos totales), mantén todos los datos. Indica siempre si eliminaste valores atípicos.' },
      { q: '¿En qué se diferencia una media ponderada?', a: 'Una media ponderada multiplica cada valor por su importancia (peso) antes de sumar, y luego divide entre el peso total. Tu promedio de notas es una media ponderada donde los créditos son los pesos. Una media simple trata todos los valores por igual, lo cual es incorrecto cuando algunos importan más.' },
    ],
  },
  de: {
    ui: {
      'chartTitle': 'Deine Zahlen',
      'line.value': 'Wert',
      'line.mean': 'Mittelwert',
      'in.numbers': 'Zahlen (trenne mit Kommas, Leerzeichen oder Zeilenumbrüchen)',
      'out.count': 'Anzahl',
      'out.sum': 'Summe',
      'out.mean': 'Durchschnitt (Mittelwert)',
      'out.median': 'Median',
      'out.min': 'Minimum',
      'out.max': 'Maximum',
      'out.range': 'Spannweite',
      'out.mode': 'Modus',
      'out.stdSample': 'Standardabweichung (Stichprobe)',
      'out.stdPop': 'Standardabweichung (Gesamtheit)',
      'out.ignored': 'Nicht-numerische Einträge',
      'outSub.stdSample': 'Nenner n − 1',
      'outSub.stdPop': 'Nenner n',
      'noMode': 'Keiner (alle Werte einmalig)',
      'ignoredN': '{n} nicht-numerische Werte ignoriert',
      note: '📊 Gib beliebige Zahlen ein. Kommas, Leerzeichen oder Zeilenumbrüche als Trenner werden unterstützt.',
    },
    useCases: [
      'Mittelwert, Median und Spannweite eines Datensatzes berechnen',
      'mit Ausreißern umgehen (verwende den Median)',
      'Noten, Verkäufe oder Bewertungen mitteln',
      'Mittelwert und Median vergleichen, um Schiefe zu erkennen',
    ],
    formula: {
      formula: FORMULA,
      explain: 'Arithmetisches Mittel. xᵢ sind die Datenpunkte, n ist die Anzahl.',
    },
    faqs: [
      { q: 'Was ist der Unterschied zwischen Mittelwert, Median und Modus?', a: 'Der Mittelwert ist die Summe geteilt durch die Anzahl (was die meisten „den Durchschnitt“ nennen). Der Median ist der mittlere Wert bei sortierten Daten und wird von Ausreißern weniger beeinflusst. Der Modus ist der häufigste Wert. Dieser Rechner konzentriert sich auf den Mittelwert; verwende den Median bei extrem hohen oder niedrigen Werten.' },
      { q: 'Sollte ich Ausreißer vor dem Mitteln entfernen?', a: 'Das hängt von deinem Ziel ab. Für typische Leistung (z. B. Durchschnittsgehalt) verzerren Ausreißer wie ein CEO den Mittelwert — der Median ist repräsentativer. Für Summen, die jeden Wert erfassen müssen (z. B. Gesamtumsatz), behalte alle Daten. Gib immer an, falls du Ausreißer entfernt hast.' },
      { q: 'Worin unterscheidet sich ein gewichteter Durchschnitt?', a: 'Ein gewichteter Durchschnitt multipliziert jeden Wert mit seiner Wichtigkeit (Gewicht), bevor aufsummiert wird, und teilt dann durch das Gesamtgewicht. Dein Notendurchschnitt ist ein gewichteter Durchschnitt, bei dem die Credits die Gewichte sind. Ein einfacher Mittelwert behandelt alle Werte gleich, was falsch ist, wenn einige mehr zählen.' },
    ],
  },
}
