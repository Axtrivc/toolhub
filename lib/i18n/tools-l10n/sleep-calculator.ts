/**
 * sleep-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const SleepCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'bedTime': '就寝时间',
      'cyclesN': '个睡眠周期',
      'fallAsleepBy': '入睡时间',
      'invalidTime': '请输入有效时间,如 07:00',
      'modeSleep': '我现在/将在……入睡',
      'modeWake': '我想在……起床',
      'nextDay': '(次日)',
      'note': '😴 一个睡眠周期约 90 分钟。在周期边界醒来远比深睡中被叫醒轻松。估算假定约 15 分钟入睡——按你实际入睡快慢调整。',
      'recommended': '推荐',
      'wakeTime': '起床时间',
      'wakeUpAt': '起床时间',
    },
  },
  es: {
    ui: {
      'bedTime': 'Hora de acostarse',
      'cyclesN': 'ciclos',
      'fallAsleepBy': 'Duérmete a las',
      'invalidTime': 'Introduce una hora válida como 07:00',
      'modeSleep': 'Me acuesto ahora/a las…',
      'modeWake': 'Quiero despertarme a las…',
      'nextDay': '(día siguiente)',
      'note': '😴 Un ciclo de sueño dura unos 90 minutos. Despertar en los límites del ciclo se siente mucho más fácil. Se asumen ~15 minutos para dormirte.',
      'recommended': 'recomendado',
      'wakeTime': 'Hora de despertar',
      'wakeUpAt': 'Despierta a las',
    },
  },
  de: {
    ui: {
      'bedTime': 'Schlafenszeit',
      'cyclesN': 'Zyklen',
      'fallAsleepBy': 'Einschlafen um',
      'invalidTime': 'Gib eine gültige Zeit ein, z. B. 07:00',
      'modeSleep': 'Ich gehe jetzt/um… ins Bett',
      'modeWake': 'Ich will aufstehen um…',
      'nextDay': '(Folgetag)',
      'note': '😴 Ein Schlafzyklus dauert ca. 90 Minuten. Aufwachen an Zyklusgrenzen fällt deutlich leichter. Angenommen werden ~15 Minuten Einschlafzeit.',
      'recommended': 'empfohlen',
      'wakeTime': 'Aufwachzeit',
      'wakeUpAt': 'Aufwachen um',
    },
  },
}
