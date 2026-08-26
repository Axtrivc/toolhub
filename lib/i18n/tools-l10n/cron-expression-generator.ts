/**
 * cron-expression-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const CronExpressionGeneratorL10n: ToolL10n = {
  zh: {
    useCases: ['生成定时任务的 cron 表达式', '配 GitHub Actions 的 schedule', '生成 Kubernetes CronJob 计划', '读懂每条 cron 的自然语言含义'],
    faqs: [
      { q: '生成的是什么语法?', a: '标准五字段 Vixie cron:分、时、日、月、星期。覆盖 crontab、GitHub Actions 的 schedule、Kubernetes CronJob 和多数云调度器。Quartz 用户需要在前面补一个秒字段。' },
      { q: '*/15 * * * * 是什么意思?', a: '每 15 分钟——*/n 步进语法在一小时内按 n 分钟间隔触发(00:00、00:15、00:30……)。注意小时上的步进从午夜重新开始:*/6 在 0、6、12、18 点执行。' },
      { q: '工作日 9 点怎么写?', a: '选"工作日"预设并设为 9:00——生成 0 9 * * 1-5。星期字段取值 0-7,其中 0 和 7 都是星期日,所以 1-5 就是周一到周五。' },
      { q: '会把表达式解释成人话吗?', a: '会——每条生成的表达式都会由本站 cron 解析器同一套引擎渲染成自然语言,部署前就能确认计划读起来与你的意图一致。' },
    ],
    ui: {
      'copySummary': '复制摘要',
      'dayLabel': '星期几',
      'everyNLabel': '每 N 分钟运行',
      'expression': 'Cron 表达式',
      'hourLabel': '小时 (0-23)',
      'minuteLabel': '分钟 (0-59)',
      'note': '⏰ 标准 5 字段 Vixie cron 语法——适用于 crontab、GitHub Actions(分钟粒度)、Kubernetes CronJob 与多数调度器。Quartz 用户需在最前加秒字段。',
      'pDaily': '每天定时',
      'pEveryN': '每 N 分钟',
      'pHourly': '每小时',
      'pWeekdays': '工作日定时',
      'pWeekly': '每周某天',
      'readable': '人类可读描述',
    },
  },
  es: {
    useCases: ['generar expresiones cron para tareas programadas', 'configurar el schedule de GitHub Actions', 'crear planes para Kubernetes CronJob', 'entender cada cron en lenguaje natural'],
    faqs: [
      { q: '¿Qué sintaxis genera?', a: 'Cron Vixie estándar de cinco campos: minuto, hora, día del mes, mes, día de la semana. Cubre crontab, los schedule de GitHub Actions, Kubernetes CronJobs y la mayoría de planificadores en la nube. Los usuarios de Quartz deben anteponer un campo de segundos.' },
      { q: '¿Qué significa */15 * * * *?', a: 'Cada 15 minutos: la sintaxis de paso */n dispara en intervalos de n minutos dentro de cada hora (00:00, 00:15, 00:30…). Ojo: los pasos sobre horas reinician a medianoche, así que */6 corre a las 0, 6, 12 y 18.' },
      { q: '¿Cómo ejecuto algo entre semana a las 9?', a: 'Elige el preset «entre semana» y pon 9:00 — emite 0 9 * * 1-5. El día de la semana va de 0 a 7, donde 0 y 7 son domingo; 1-5 es de lunes a viernes.' },
      { q: '¿Explica la expresión?', a: 'Sí — cada expresión generada se traduce a lenguaje natural por el mismo motor del parser de cron de este sitio, para que confirmes que el plan dice lo que pretendías antes de desplegarlo.' },
    ],
    ui: {
      'copySummary': 'Copiar resumen',
      'dayLabel': 'Día de la semana',
      'everyNLabel': 'Ejecutar cada N minutos',
      'expression': 'Expresión cron',
      'hourLabel': 'Hora (0-23)',
      'minuteLabel': 'Minuto (0-59)',
      'note': '⏰ Sintaxis cron Vixie estándar de 5 campos — vale para crontab, GitHub Actions, CronJobs de Kubernetes y la mayoría. Quartz: antepón un campo de segundos.',
      'pDaily': 'Diario a una hora',
      'pEveryN': 'Cada N minutos',
      'pHourly': 'Cada hora',
      'pWeekdays': 'Laborables a una hora',
      'pWeekly': 'Semanal un día',
      'readable': 'Descripción legible',
    },
  },
  de: {
    useCases: ['Cron-Ausdrücke für geplante Jobs erzeugen', 'den Schedule für GitHub Actions konfigurieren', 'Pläne für Kubernetes CronJobs anlegen', 'jeden Cron in Klartext verstehen'],
    faqs: [
      { q: 'Welche Syntax wird erzeugt?', a: 'Standard-Vixie-Cron mit fünf Feldern: Minute, Stunde, Tag des Monats, Monat, Wochentag. Das deckt crontab, GitHub-Actions-Schedules, Kubernetes CronJobs und die meisten Cloud-Scheduler ab. Quartz-Nutzer müssen ein Sekundenfeld voranstellen.' },
      { q: 'Was bedeutet */15 * * * *?', a: 'Alle 15 Minuten — die Schritt-Syntax */n feuert im Stundentakt in n-Minuten-Intervallen (00:00, 00:15, 00:30…). Achtung: Schritte auf Stunden starten um Mitternacht neu, */6 läuft also um 0, 6, 12 und 18 Uhr.' },
      { q: 'Wie lasse ich etwas werktags um 9 laufen?', a: 'Wähle das Werktage-Preset und stelle 9:00 — es erzeugt 0 9 * * 1-5. Der Wochentag läuft von 0 bis 7, wobei 0 und 7 Sonntag bedeuten; 1-5 ist Montag bis Freitag.' },
      { q: 'Erklärt es den Ausdruck?', a: 'Ja — jeder erzeugte Ausdruck wird vom selben Engine wie der Cron-Parser dieser Seite in Klartext übersetzt, sodass du vor dem Deploy bestätigen kannst, dass der Plan genau das tut, was du willst.' },
    ],
    ui: {
      'copySummary': 'Zusammenfassung kopieren',
      'dayLabel': 'Wochentag',
      'everyNLabel': 'Alle N Minuten ausführen',
      'expression': 'Cron-Ausdruck',
      'hourLabel': 'Stunde (0-23)',
      'minuteLabel': 'Minute (0-59)',
      'note': '⏰ Standard-Vixie-Cron mit 5 Feldern — passt für crontab, GitHub Actions, Kubernetes-CronJobs. Quartz-Nutzer: Sekundenfeld voranstellen.',
      'pDaily': 'Täglich um',
      'pEveryN': 'Alle N Minuten',
      'pHourly': 'Stündlich',
      'pWeekdays': 'Werktags um',
      'pWeekly': 'Wöchentlich an Tag',
      'readable': 'Lesbare Beschreibung',
    },
  },
}
