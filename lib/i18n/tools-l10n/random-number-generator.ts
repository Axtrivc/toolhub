/**
 * random-number-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const randomNumberGeneratorL10n: ToolL10n = {
  zh: {
    ui: {
      'cantPickUniqueError': '⚠️ 无法从 {range} 个数的范围中选出 {limit} 个不重复的数',
      'countAtLeastOneError': '⚠️ 个数至少为 1',
      'countIntegerError': '⚠️ 个数必须是整数',
      'countMaxError': '⚠️ 个数上限为 1000',
      'clickGenerateHint': '点击「生成」开始掷随机数',
      'generate': '🎲 生成',
      'howMany': '生成个数',
      'invalidNumbersError': '⚠️ 请为最小值、最大值和个数输入有效数字',
      'max': '最大值',
      'min': '最小值',
      'minLteMaxError': '⚠️ 最小值必须 ≤ 最大值',
      'noRepeats': '不重复(唯一数字)',
    },
    useCases: [
      '公平抽取比赛或抽奖中奖者',
      '生成彩票号码组合',
      '随机选择学生或分组',
      '运行蒙特卡洛模拟',
    ],
    faqs: [
      { q: '可以用于正式彩票或博彩吗?', a: '日常休闲可以。但受监管的博彩或正式彩票需要经过认证的硬件随机数发生器。本工具适合办公室抽奖、课堂点名和模拟使用。' },
      { q: '「不重复」选项是什么意思?', a: '勾选后相当于不放回抽样:比如从 1–50 中抽 6 个不会出现重复,和彩票选号同一逻辑(大乐透前区即 35 选 5)。不勾选则每次抽取相互独立,可能出现重复,适合模拟掷骰。' },
      { q: '一次最多生成多少个?', a: '单次上限 1000 个,超出请分批。想验证分布是否均匀,可以生成 1000 个 1–6 的随机数,每个值应出现约 167 次。' },
      { q: '办公室抽奖怎么做才公平?', a: '投屏操作:给每位参与者编号,输入 1–N 范围,勾选「不重复」依次抽出中奖序号并当场记录。公平性来自公开可查的过程,而不是事后解释。' },
    ],
  },
  es: {
    ui: {
      'cantPickUniqueError': '⚠️ No se pueden elegir {limit} números únicos de un rango de {range}',
      'countAtLeastOneError': '⚠️ La cantidad debe ser al menos 1',
      'countIntegerError': '⚠️ La cantidad debe ser un número entero',
      'countMaxError': '⚠️ La cantidad está limitada a 1000',
      'clickGenerateHint': 'Pulsa «Generar» para lanzar números aleatorios',
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
      'ejecutar simulaciones de Montecarlo',
    ],
    faqs: [
      { q: '¿Se puede usar para una lotería o apuesta real?', a: 'Para uso informal, sí. Para juegos de azar regulados o loterías oficiales, necesitas generadores de hardware certificados. Esta herramienta sirve para rifas de oficina, selecciones en clase y simulaciones.' },
      { q: '¿Qué hace la opción «Sin repetir»?', a: 'Muestreo sin reemplazo: 6 números de 1 a 49 sin duplicados, el mismo formato de La Primitiva. Sin marcarla, cada número se extrae de forma independiente y puede repetirse, como al simular dados.' },
      { q: '¿Cuántos números puedo generar de una vez?', a: 'Hasta 1000 por tirada; para más, genera en tandas. Prueba rápida de uniformidad: 1000 números entre 1 y 6, cada valor debería aparecer unas 167 veces.' },
      { q: '¿Cómo hago una rifa de oficina defendible?', a: 'Proyéctalo en pantalla: asigna un número a cada participante, activa «Sin repetir» y extrae los ganadores en orden, anotando los resultados ante todos. La garantía está en el procedimiento público, no en explicaciones posteriores.' },
    ],
  },
  de: {
    ui: {
      'cantPickUniqueError': '⚠️ Können keine {limit} eindeutigen Zahlen aus einem Bereich von {range} wählen',
      'countAtLeastOneError': '⚠️ Anzahl muss mindestens 1 sein',
      'countIntegerError': '⚠️ Die Anzahl muss eine ganze Zahl sein',
      'countMaxError': '⚠️ Die Anzahl ist auf 1000 begrenzt',
      'clickGenerateHint': 'Klicke auf «Generieren», um Zahlen zu würfeln',
      'generate': '🎲 Generieren',
      'howMany': 'Wie viele',
      'invalidNumbersError': '⚠️ Bitte gültige Zahlen für Min, Max und Anzahl eingeben',
      'max': 'Max',
      'min': 'Min',
      'minLteMaxError': '⚠️ Min muss ≤ Max sein',
      'noRepeats': 'Keine Wiederholungen (eindeutige Zahlen)',
    },
    useCases: [
      'Gewinner für Wettbewerbe oder Verlosungen fair ziehen',
      'Lottokombinationen erzeugen',
      'Schüler oder Teams per Zufall auswählen',
      'Monte-Carlo-Simulationen ausführen',
    ],
    faqs: [
      { q: 'Kann das für echte Lotterien oder Glücksspiel genutzt werden?', a: 'Für den gelegentlichen Gebrauch ja. Für reguliertes Glücksspiel oder offizielle Lotterien brauchst du zertifizierte Hardware-RNGs. Dieses Werkzeug reicht für Büroverlosungen, Klassenauswahlen und Simulationen.' },
      { q: 'Was bewirkt „Keine Wiederholungen"?', a: 'Ziehen ohne Zurücklegen: 6 aus 49 ohne Duplikate — genau das Format des Lotto „6 aus 49". Ohne Haken wird jede Zahl unabhängig gezogen und kann sich wiederholen, wie beim Würfelsimulieren.' },
      { q: 'Wie viele Zahlen kann ich auf einmal erzeugen?', a: 'Bis zu 1000 pro Klick, danach in Schüben. Gleichmäßigkeitstest: 1000 Zahlen zwischen 1 und 6 erzeugen — jeder Wert sollte rund 167 Mal erscheinen.' },
      { q: 'Wie läuft eine faire Büroverlosung ab?', a: 'Beamer an: Teilnehmernummern 1 bis N eingeben, „Keine Wiederholungen" aktivieren und die Gewinner nacheinander vor allen ziehen und notieren. Die Fairness steckt im offenen Ablauf, nicht in nachträglichen Erklärungen.' },
    ],
  },
}
