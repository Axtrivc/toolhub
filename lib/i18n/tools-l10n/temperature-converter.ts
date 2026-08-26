/**
 * temperature-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = TemperatureConverterClient,自定义组件,UI 保持英文)
 */
import type { ToolL10n } from '../tool-l10n'

export const temperatureConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'chartTitle': '温度标尺(°C)',
      'ptFreezing': '冰点',
      'ptBody': '体温',
      'ptBoiling': '沸点',
      'summaryTitle': '温度换算',
      'sInput': '输入: ',
      'sResult': '结果: ',
      'copySummary': '复制摘要',
      'belowAbsZero': '⚠️ 温度低于绝对零度(−273.15°C / 0K)——物理上不可能。',
      'convertedValue': '换算结果',
      'formula': '公式',
      'from': '从',
      'noteText': '🌡️ 关键参考点:0°C = 32°F(冰点),100°C = 212°F(沸点),37°C = 98.6°F(体温)。',
      'optCelsius': '摄氏度 (°C)',
      'optFahrenheit': '华氏度 (°F)',
      'optKelvin': '开尔文 (K)',
      'to': '到',
      'value': '数值',
    },
    useCases: [
      '在摄氏度、华氏度和开尔文之间换算',
      '把美国食谱的烤箱温度转换成摄氏度',
      '换算科学实验中的绝对温度(开尔文)',
    ],
    faqs: [
      { q: '怎样在脑子里把摄氏度换算成华氏度?', a: '把摄氏度数值翻倍,减去 10%,再加 32。比如 20°C:翻倍得 40,减 10% 得 36,加 32 = 68°F。精确公式是 °F = °C × 9/5 + 32。这个速算对日常温度误差在 1 度以内。' },
      { q: '为什么开尔文不说「度」?', a: '开尔文是从绝对零度开始的绝对温标,按惯例我们说「开尔文」而不是「度开尔文」。0 K = −273.15°C。开尔文与摄氏度刻度间隔相同,换算只需加减 273.15。' },
      { q: '摄氏度和华氏度在什么温度下相等?', a: '−40。这是两个温标唯一的交点:−40°C = −40°F。这是一个方便的参考值,可用于验证换算公式是否正确。' },
    ],
  },
  es: {
    ui: {
      'chartTitle': 'Escala de temperatura (°C)',
      'ptFreezing': 'Congelación',
      'ptBody': 'Cuerpo',
      'ptBoiling': 'Ebullición',
      'summaryTitle': 'Conversión de temperatura',
      'sInput': 'Entrada: ',
      'sResult': 'Resultado: ',
      'copySummary': 'Copiar resumen',
      'belowAbsZero': '⚠️ La temperatura está por debajo del cero absoluto (−273,15°C / 0K): físicamente imposible.',
      'convertedValue': 'Valor convertido',
      'formula': 'Fórmula',
      'from': 'De',
      'noteText': '🌡️ Puntos de referencia: 0°C = 32°F (congelación), 100°C = 212°F (ebullición), 37°C = 98.6°F (corporal).',
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
      'noteText': '🌡️ Referenzpunkte: 0°C = 32°F (Gefrierpunkt), 100°C = 212°F (Siedepunkt), 37°C = 98.6°F (Körper).',
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
      { q: 'Warum sagt man bei Kelvin nicht „Grad"?', a: 'Kelvin ist eine absolute Temperaturskala ab dem absoluten Nullpunkt, und der Konvention nach sagt man „Kelvin" nicht „Grad Kelvin". 0 K = −273,15 °C. Kelvin verwendet dieselbe Schrittweite wie Celsius, die Umrechnung ist also nur Addition oder Subtraktion von 273,15.' },
      { q: 'Bei welcher Temperatur sind Celsius und Fahrenheit gleich?', a: 'Bei −40. Das ist der einzige Punkt, an dem sich die beiden Skalen kreuzen: −40 °C = −40 °F. Eine praktische Referenz, um zu prüfen, ob eine Umrechnungsformel stimmt.' },
    ],
  },
}
