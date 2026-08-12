/**
 * cron-parser 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = CronParserClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const cronParserL10n: ToolL10n = {
  zh: {
    useCases: [
      '解读 cron 表达式的含义',
      '部署前验证定时任务计划',
      '预览接下来五次触发时间',
      '排查 GitHub Actions 的 cron 配置',
    ],
    faqs: [
      { q: 'cron 表达式的 5 个字段分别代表什么？', a: '从左到右依次是:分钟(0-59)、小时(0-23)、日期(1-31)、月份(1-12)、星期(0-6,其中 0 或 7 是星期日)。所以 "0 9 * * 1-5" 表示工作日 09:00。每个字段支持 *、具体值、逗号列表、连字符范围和 /步长。' },
      { q: '日期和星期字段是怎么组合的？', a: '按 OR 规则(Vixie cron 标准)。当两个字段都被限定(都不是 *)时,只要任一匹配任务就会触发。例如 "0 0 1 * 1" 会在每月 1 号的午夜或任意一个星期一执行。如果其中一个字段是 *,则只考虑另一个字段。' },
      { q: '支持 @daily、@hourly 等宏吗？', a: '本解析器专注于标准的 5 字段语法。常用的简写宏(@yearly、@monthly、@weekly、@daily、@hourly、@reboot)虽广泛使用,但不属于核心 cron 规范,因此请在你的具体平台(Linux crontab、GitHub Actions、Kubernetes、AWS EventBridge 各有差异)上验证其行为。' },
    ],
  },
  es: {
    useCases: [
      'descifrar el significado de una expresión cron',
      'verificar un plan de tarea programada antes de desplegarlo',
      'previsualizar las próximas cinco ejecuciones',
      'depurar la configuración cron de GitHub Actions',
    ],
    faqs: [
      { q: '¿Qué significan los 5 campos de una expresión cron?', a: 'De izquierda a derecha: minuto (0-59), hora (0-23), día del mes (1-31), mes (1-12) y día de la semana (0-6, donde 0 o 7 es domingo). Así, "0 9 * * 1-5" significa 09:00 en días laborables. Cada campo admite *, valores concretos, listas con comas, rangos con guion y /pasos.' },
      { q: '¿Cómo se combinan el día del mes y el día de la semana?', a: 'Mediante una regla OR (el estándar Vixie cron). Cuando ambos campos están restringidos (ninguno es *), la tarea se ejecuta si coincide CUALQUIERA. Por ejemplo, "0 0 1 * 1" se ejecuta a medianoche del día 1 del mes O cualquier lunes. Si uno de ellos es *, solo se considera el otro.' },
      { q: '¿Se admiten las macros @daily, @hourly y similares?', a: 'Este analizador se centra en la sintaxis estándar de 5 campos. Las macros abreviadas comunes (@yearly, @monthly, @weekly, @daily, @hourly, @reboot) son muy usadas pero no forman parte de la especificación central de cron, así que verifica el comportamiento en tu plataforma concreta (Linux crontab, GitHub Actions, Kubernetes, AWS EventBridge tienen sus peculiaridades).' },
    ],
  },
  de: {
    useCases: [
      'die Bedeutung eines Cron-Ausdrucks entschlüsseln',
      'einen Zeitplan vor dem Deploy verifizieren',
      'die nächsten fünf Ausführungszeiten vorschauen',
      'die Cron-Konfiguration von GitHub Actions fehlerbeheben',
    ],
    faqs: [
      { q: 'Was bedeuten die 5 Felder in einem Cron-Ausdruck?', a: 'Von links nach rechts: Minute (0-59), Stunde (0-23), Tag des Monats (1-31), Monat (1-12) und Wochentag (0-6, wobei 0 oder 7 Sonntag ist). "0 9 * * 1-5" bedeutet also 09:00 Uhr an Wochentagen. Jedes Feld unterstützt *, konkrete Werte, Kommalisten, Bindestrich-Bereiche und /Schritte.' },
      { q: 'Wie werden Tag-des-Monats und Wochentag kombiniert?', a: 'Durch eine ODER-Regel (der Vixie-Cron-Standard). Wenn beide Felder eingeschränkt sind (keines ist *), wird der Job ausgelöst, wenn ENTWEDER das eine ODER das andere zutrifft. Zum Beispiel läuft "0 0 1 * 1" um Mitternacht am 1. des Monats ODER an jedem Montag. Ist eines der Felder *, wird nur das andere berücksichtigt.' },
      { q: 'Werden Makros wie @daily, @hourly und ähnliche unterstützt?', a: 'Dieser Parser konzentriert sich auf die Standard-5-Feld-Syntax. Die gängigen Kurz-Makros (@yearly, @monthly, @weekly, @daily, @hourly, @reboot) sind weit verbreitet, gehören aber nicht zur Kern-Cron-Spezifikation, daher solltest du das Verhalten auf deiner spezifischen Plattform (Linux crontab, GitHub Actions, Kubernetes, AWS EventBridge haben jeweils Eigenheiten) verifizieren.' },
    ],
  },
}
