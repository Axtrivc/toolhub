/**
 * random-number-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const randomNumberGeneratorL10n: ToolL10n = {

  es: {
    ui: {
      'cantPickUniqueError': '⚠️ No se pueden elegir {limit} números únicos de un rango de {range}',
      'countAtLeastOneError': '⚠️ La cantidad debe ser al menos 1',
      'countIntegerError': '⚠️ La cantidad debe ser un número entero',
      'countMaxError': '⚠️ La cantidad está limitada a 1000',
      'clickGenerateHint': 'Pulsa «Generar» para obtener números aleatorios',
      'generate': '🎲 Generar',
      'howMany': 'Cuántos',
      'invalidNumbersError': '⚠️ Introduce números válidos para Mín, Máx y Cantidad',
      'max': 'Máx',
      'min': 'Mín',
      'minLteMaxError': '⚠️ Mín debe ser ≤ Máx',
      'noRepeats': 'Sin repetir (números únicos)',
    },
    useCases: [
      'elegir ganadores de concursos o rifas de forma justa',
      'generar combinaciones de lotería',
      'seleccionar estudiantes o equipos al azar',
      'ejecutar simulaciones de Monte Carlo',
    ],
    faqs: [
      { q: '¿Se puede usar para una lotería o apuesta real?', a: 'Para uso informal, sí. Para juegos de azar regulados o loterías oficiales, necesitas generadores de hardware certificados. Esta herramienta sirve para rifas de oficina, selecciones en clase y simulaciones.' },
      { q: '¿Qué hace la opción «Sin repetir»?', a: 'Muestreo sin reemplazo: 6 números de 1 a 49 sin duplicados, el mismo formato que La Primitiva. Sin marcarla, cada número se extrae de forma independiente y puede repetirse, como al simular dados.' },
      { q: '¿Cuántos números puedo generar de una vez?', a: 'Hasta 1000 por tirada; para más, genera en tandas. Prueba rápida de uniformidad: 1000 números entre 1 y 6, cada valor debería aparecer unas 167 veces.' },
      { q: '¿Cómo hago una rifa de oficina defendible?', a: 'Proyéctalo en pantalla: asigna un número a cada participante, activa «Sin repetir» y extrae los ganadores en orden, anotando los resultados ante todos. La garantía está en el procedimiento público, no en explicaciones posteriores.' },
    ],
  },
  de: {
    ui: {
      'cantPickUniqueError': '⚠️ Aus einem Bereich von {range} können keine {limit} eindeutigen Zahlen gewählt werden',
      'countAtLeastOneError': '⚠️ Anzahl muss mindestens 1 sein',
      'countIntegerError': '⚠️ Die Anzahl muss eine ganze Zahl sein',
      'countMaxError': '⚠️ Die Anzahl ist auf 1000 begrenzt',
      'clickGenerateHint': 'Klicke auf „Generieren“, um Zahlen zu würfeln',
      'generate': '🎲 Generieren',
      'howMany': 'Wie viele',
      'invalidNumbersError': '⚠️ Bitte gültige Zahlen für Min, Max und Anzahl eingeben',
      'max': 'Max',
      'min': 'Min',
      'minLteMaxError': '⚠️ Min muss ≤ Max sein',
      'noRepeats': 'Keine Wiederholungen (eindeutige Zahlen)',
    },
    useCases: [
      'Gewinner von Wettbewerben oder Verlosungen fair auslosen',
      'Lottokombinationen erzeugen',
      'Schüler oder Teams per Zufall auswählen',
      'Monte-Carlo-Simulationen ausführen',
    ],
    faqs: [
      { q: 'Kann das für echte Lotterien oder Glücksspiel genutzt werden?', a: 'Für den gelegentlichen Gebrauch ja. Für reguliertes Glücksspiel oder offizielle Lotterien brauchst du zertifizierte Hardware-RNGs. Dieses Werkzeug reicht für Büroverlosungen, Klassenauswahlen und Simulationen.' },
      { q: 'Was bewirkt „Keine Wiederholungen“?', a: 'Ziehen ohne Zurücklegen: 6 aus 49 ohne Duplikate — genau das Format des Lotto „6 aus 49“. Ohne Haken wird jede Zahl unabhängig gezogen und kann sich wiederholen, wie beim Würfelsimulieren.' },
      { q: 'Wie viele Zahlen kann ich auf einmal erzeugen?', a: 'Bis zu 1000 pro Klick, danach in Schüben. Gleichmäßigkeitstest: 1000 Zahlen zwischen 1 und 6 erzeugen — jeder Wert sollte rund 167 Mal erscheinen.' },
      { q: 'Wie läuft eine faire Büroverlosung ab?', a: 'Beamer an: Teilnehmernummern 1 bis N eingeben, „Keine Wiederholungen“ aktivieren und die Gewinner nacheinander vor allen ziehen und notieren. Die Fairness steckt im offenen Ablauf, nicht in nachträglichen Erklärungen.' },
    ],
  },
}
