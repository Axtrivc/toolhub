/**
 * age-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = AgeCalculatorClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const ageCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '核验年龄是否达到法定门槛',
      '算出你已经活了多少天',
      '按月追踪婴儿的发育进度',
      '查询某历史事件距今的时长',
    ],
    faqs: [
      { q: '我怎么算自己活了多少天？', a: '输入你的出生日期,把"计算日期"留作今天。计算器会显示你的总存活天数——大多数成年人的天数在 7000 到 30000 之间。' },
      { q: '怎么计算两个日期之间的时间？', a: '把"出生日期"字段当作开始日期,把"计算日期"字段当作结束日期。结果会以年、月、日、周、小时为单位精确显示两者之间的时长——适用于项目、合同或纪念日。' },
      { q: '计算结果准确吗？', a: '完全准确。计算器使用浏览器内置的日期处理,能正确处理闰年、不同月份长度和夏令时,没有任何近似。' },
    ],
  },
  es: {
    useCases: [
      'comprobar si se alcanza un umbral de edad legal',
      'calcular cuántos días has vivido',
      'seguir el desarrollo de un bebé en meses',
      'saber cuánto tiempo hace que ocurrió un evento histórico',
    ],
    faqs: [
      { q: '¿Cómo sé cuántos días tengo?', a: 'Introduce tu fecha de nacimiento y deja la "fecha de referencia" como hoy. La calculadora muestra tus días totales vividos: la mayoría de los adultos está entre 7000 y 30000 días.' },
      { q: '¿Cómo calculo el tiempo entre dos fechas?', a: 'Usa el campo "fecha de nacimiento" como fecha de inicio y el campo "fecha de referencia" como fecha de fin. El resultado muestra la duración precisa entre ambas en años, meses, días, semanas y horas — útil para proyectos, contratos o aniversarios.' },
      { q: '¿Es preciso el cálculo?', a: 'Totalmente. La calculadora usa el manejo de fechas integrado de tu navegador, que tiene en cuenta años bisiestos, longitudes variables de los meses y el horario de verano. No hay ninguna aproximación.' },
    ],
  },
  de: {
    useCases: [
      'prüfen, ob eine gesetzliche Altersgrenze erreicht ist',
      'berechnen, wie viele Tage du schon gelebt hast',
      'die Entwicklung eines Babys in Monaten verfolgen',
      'herausfinden, wie lange ein historisches Ereignis zurückliegt',
    ],
    faqs: [
      { q: 'Wie rechne ich aus, wie viele Tage ich alt bin?', a: 'Gib dein Geburtsdatum ein und lasse das „Alter am" auf heute stehen. Der Rechner zeigt deine insgesamt gelebten Tage — die meisten Erwachsenen liegen irgendwo zwischen 7000 und 30000 Tagen.' },
      { q: 'Wie berechne ich die Zeit zwischen zwei Daten?', a: 'Verwende das Feld „Geburtsdatum" als Startdatum und das Feld „Alter am" als Enddatum. Das Ergebnis zeigt die genaue Dauer dazwischen in Jahren, Monaten, Tagen, Wochen und Stunden — nützlich für Projekte, Verträge oder Jahrestage.' },
      { q: 'Wie genau ist die Berechnung?', a: 'Vollkommen genau. Der Rechner verwendet die integrierte Datumsverarbeitung deines Browsers, die Schaltjahre, unterschiedlich lange Monate und die Sommerzeit berücksichtigt. Es gibt keine Näherung.' },
    ],
  },
}
