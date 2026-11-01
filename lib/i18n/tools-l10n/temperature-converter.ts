/**
 * temperature-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = TemperatureConverterClient,自定义组件;
 * 键为组件内 L() 调用口径,summaryTitle/sInput/sResult 供 Copy 摘要用)
 */
import type { ToolL10n } from '../tool-l10n'

export const temperatureConverterL10n: ToolL10n = {

  es: {
    ui: {
      'chartTitle': 'Escala de temperatura (°C)',
      'ptFreezing': 'Congelación',
      'ptBody': 'Corporal',
      'ptBoiling': 'Ebullición',
      'summaryTitle': 'Conversión de temperatura',
      'sInput': 'Entrada: ',
      'sResult': 'Resultado: ',
      'copySummary': 'Copiar resumen',
      'belowAbsZero': '⚠️ La temperatura está por debajo del cero absoluto (−273,15°C / 0K): físicamente imposible.',
      'convertedValue': 'Valor convertido',
      'formula': 'Fórmula',
      'from': 'De',
      'swapUnits': 'Intercambiar origen y destino',
      'swap': 'Intercambiar',
      'noteText': '🌡️ Puntos de referencia: 0°C = 32°F (congelación), 100°C = 212°F (ebullición), 37°C = 98,6°F (corporal).',
      'optCelsius': 'Celsius (°C)',
      'optFahrenheit': 'Fahrenheit (°F)',
      'optKelvin': 'Kelvin (K)',
      'to': 'A',
      'value': 'Valor',
    },
    useCases: [
      'convertir entre Celsius, Fahrenheit y Kelvin',
      'pasar temperaturas de horno de recetas estadounidenses a Celsius',
      'convertir temperaturas absolutas (Kelvin) para experimentos científicos',
    ],
    faqs: [
      { q: '¿Cómo convierto Celsius a Fahrenheit mentalmente?', a: 'Duplica el valor Celsius, réstale el 10 % y súmale 32. Para 20 °C: duplica a 40, quita el 10 % → 36, suma 32 = 68 °F. La fórmula exacta es °F = °C × 9/5 + 32. Este atajo es preciso dentro de un grado para temperaturas cotidianas.' },
      { q: '¿Por qué Kelvin no lleva «grados»?', a: 'Kelvin es una escala absoluta que parte del cero absoluto y, por convención, se dice «kelvin» y no «grados Kelvin». 0 K = −273,15 °C. Kelvin usa el mismo incremento que Celsius, así que convertir es solo sumar o restar 273,15.' },
      { q: '¿A qué temperatura son iguales Celsius y Fahrenheit?', a: 'A −40. Es el único punto donde las dos escalas se cruzan: −40 °C = −40 °F. Es una referencia útil para comprobar si una fórmula de conversión es correcta.' },
    ],
  },
  de: {
    ui: {
      'chartTitle': 'Temperaturskala (°C)',
      'ptFreezing': 'Gefrierpunkt',
      'ptBody': 'Körpertemp.',
      'ptBoiling': 'Siedepunkt',
      'summaryTitle': 'Temperaturumrechnung',
      'sInput': 'Eingabe: ',
      'sResult': 'Ergebnis: ',
      'copySummary': 'Zusammenfassung kopieren',
      'belowAbsZero': '⚠️ Temperatur unter dem absoluten Nullpunkt (−273,15 °C / 0 K) — physikalisch unmöglich.',
      'convertedValue': 'Umgerechneter Wert',
      'formula': 'Formel',
      'from': 'Von',
      'swapUnits': '„Von“ und „Nach“ tauschen',
      'swap': 'Tauschen',
      'noteText': '🌡️ Referenzpunkte: 0°C = 32°F (Gefrierpunkt), 100°C = 212°F (Siedepunkt), 37°C = 98,6°F (Körpertemp.).',
      'optCelsius': 'Celsius (°C)',
      'optFahrenheit': 'Fahrenheit (°F)',
      'optKelvin': 'Kelvin (K)',
      'to': 'Nach',
      'value': 'Wert',
    },
    useCases: [
      'zwischen Celsius, Fahrenheit und Kelvin umrechnen',
      'Ofentemperaturen aus US-Rezepten in Celsius umrechnen',
      'absolute Temperaturen (Kelvin) für wissenschaftliche Experimente umrechnen',
    ],
    faqs: [
      { q: 'Wie rechne ich Celsius im Kopf in Fahrenheit um?', a: 'Verdopple den Celsius-Wert, ziehe 10 % ab und addiere 32. Für 20 °C: verdoppeln zu 40, 10 % abziehen → 36, plus 32 = 68 °F. Die genaue Formel ist °F = °C × 9/5 + 32. Diese Faustregel ist bei Alltagstemperaturen auf einen Grad genau.' },
      { q: 'Warum sagt man bei Kelvin nicht „Grad“?', a: 'Kelvin ist eine absolute Temperaturskala ab dem absoluten Nullpunkt, und der Konvention nach sagt man „Kelvin“ nicht „Grad Kelvin“. 0 K = −273,15 °C. Kelvin verwendet dieselbe Schrittweite wie Celsius, die Umrechnung ist also nur Addition oder Subtraktion von 273,15.' },
      { q: 'Bei welcher Temperatur sind Celsius und Fahrenheit gleich?', a: 'Bei −40. Das ist der einzige Punkt, an dem sich die beiden Skalen kreuzen: −40 °C = −40 °F. Eine praktische Referenz, um zu prüfen, ob eine Umrechnungsformel stimmt.' },
    ],
  },
}
