/**
 * cron-expression-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const CronExpressionGeneratorL10n: ToolL10n = {
  zh: {
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
