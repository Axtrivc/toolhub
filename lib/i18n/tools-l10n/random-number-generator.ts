/**
 * random-number-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const randomNumberGeneratorL10n: ToolL10n = {
  zh: {
    useCases: [
      '公平抽取比赛或抽奖中奖者',
      '生成彩票号码组合',
      '随机选择学生或分组',
      '运行蒙特卡洛模拟',
    ],
    faqs: [
      { q: '可以用于正式彩票或博彩吗?', a: '日常休闲可以。但受监管的博彩或正式彩票需要经过认证的硬件随机数发生器。本工具适合办公室抽奖、课堂点名和模拟使用。' },
    ],
  },
  es: {
    useCases: [
      'elegir ganadores de concursos o rifas de forma justa',
      'generar combinaciones de lotería',
      'seleccionar estudiantes o equipos al azar',
      'ejecutar simulaciones de Montecarlo',
    ],
    faqs: [
      { q: '¿Se puede usar para una lotería o apuesta real?', a: 'Para uso informal, sí. Para juegos de azar regulados o loterías oficiales, necesitas generadores de hardware certificados. Esta herramienta sirve para rifas de oficina, selecciones en clase y simulaciones.' },
    ],
  },
  de: {
    useCases: [
      'Gewinner für Wettbewerbe oder Verlosungen fair ziehen',
      'Lottokombinationen erzeugen',
      'Schüler oder Teams per Zufall auswählen',
      'Monte-Carlo-Simulationen ausführen',
    ],
    faqs: [
      { q: 'Kann das für echte Lotterien oder Glücksspiel genutzt werden?', a: 'Für den gelegentlichen Gebrauch ja. Für reguliertes Glücksspiel oder offizielle Lotterien brauchst du zertifizierte Hardware-RNGs. Dieses Werkzeug reicht für Büroverlosungen, Klassenauswahlen und Simulationen.' },
    ],
  },
}
