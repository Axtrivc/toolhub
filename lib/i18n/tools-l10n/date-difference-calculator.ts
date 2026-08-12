/**
 * date-difference-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = DateDifferenceClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const dateDifferenceCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '统计到截止日期还有多少工作日',
      '计算合同或租约的持续时长',
      '按周追踪孕期进展',
      '推算纪念日距今多久',
    ],
    faqs: [
      { q: '它会算入开始日或结束日吗？', a: '本计算器统计两个日期之间的整天数(结束日期减开始日期),即不包含开始日本身。如果你需要"含端点"计数(两端都算),在结果上加 1 天即可。' },
      { q: '闰年和时区怎么处理？', a: '使用浏览器内置的日期运算,能正确处理闰年、不同月份长度和夏令时。做跨时区规划时,建议只输入日期而非精确时间,以免出现差一天的结果。' },
      { q: '一年有多少天？', a: '平年 365 天,闰年 366 天。按 400 年的格里高利周期平均,一年为 365.2425 天。粗略估算用 365 即可;跨越数十年的日期运算由工具自动处理闰年。' },
    ],
  },
  es: {
    useCases: [
      'contar cuántos días laborables faltan para una fecha límite',
      'calcular la duración de un contrato o alquiler',
      'seguir el avance del embarazo por semanas',
      'saber cuánto tiempo ha pasado desde un aniversario',
    ],
    faqs: [
      { q: '¿Cuenta el día de inicio o el de fin?', a: 'Esta calculadora cuenta los días completos entre las dos fechas (fecha final menos fecha inicial), lo que excluye el propio día de inicio. Si necesitas un recuento "inclusivo" (contando ambos extremos), suma 1 día al resultado.' },
      { q: '¿Cómo gestiona los años bisiestos y las zonas horarias?', a: 'Usa la aritmética de fechas integrada del navegador, que tiene en cuenta correctamente los años bisiestos, las longitudes variables de los meses y el horario de verano. Para planificación entre zonas horarias, introduce fechas en lugar de horas exactas para evitar resultados desfasados por un día.' },
      { q: '¿Cuántos días tiene un año?', a: 'Un año común tiene 365 días; uno bisiesto, 366. Promediado en el ciclo gregoriano de 400 años, un año equivale a 365,2425 días. Para estimaciones rápidas usa 365; para cálculos de varias décadas, la herramienta gestiona los años bisiestos automáticamente.' },
    ],
  },
  de: {
    useCases: [
      'zählen, wie viele Werktage bis zu einer Frist bleiben',
      'die Laufzeit eines Vertrags oder Mietverhältnisses berechnen',
      'den Schwangerschaftsverlauf in Wochen verfolgen',
      'herausfinden, wie lange ein Jahrestag zurückliegt',
    ],
    faqs: [
      { q: 'Werden der Start- oder der Endtag mitgezählt?', a: 'Dieser Rechner zählt die vollen Tage zwischen den beiden Daten (Enddatum minus Startdatum), wobei der Starttag selbst nicht enthalten ist. Wenn du „inklusive" zählen möchtest (beide Endpunkte), addiere 1 Tag zum Ergebnis.' },
      { q: 'Wie werden Schaltjahre und Zeitzonen behandelt?', a: 'Er verwendet die integrierte Datumsmathematik des Browsers, die Schaltjahre, unterschiedlich lange Monate und die Sommerzeit korrekt berücksichtigt. Gib bei zeitzonenübergreifender Planung lieber nur Daten als genaue Zeiten ein, um Off-by-one-Ergebnisse zu vermeiden.' },
      { q: 'Wie viele Tage hat ein Jahr?', a: 'Ein Gemeinjahr hat 365 Tage, ein Schaltjahr 366. Über den 400-jährigen gregorianischen Zyklus gemittelt entspricht ein Jahr 365,2425 Tagen. Für schnelle Schätzwerte nimm 365; bei Datumsberechnungen über Jahrzehnte verwaltet das Werkzeug die Schaltjahre automatisch.' },
    ],
  },
}
