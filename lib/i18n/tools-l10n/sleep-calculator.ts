/**
 * sleep-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const SleepCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['按起床时间倒推最佳入睡点', '规划 90 分钟睡眠周期', '让闹钟落在浅睡期醒来不犯困', '算现在入睡的合理起床时间'],
    faqs: [
      { q: '什么是 90 分钟法则?', a: '一个完整睡眠周期——浅睡、深睡加 REM——平均约 90 分钟。在周期边界醒来远比从深睡中被拽出来舒服,所以工具把入睡和起床时间都对齐到周期边界。' },
      { q: '为什么减去 15 分钟?', a: '这是预设的入睡潜伏期——健康人平均 10-20 分钟才能睡着,15 分钟是常用的中点。所有建议时间都已把它扣掉;如果你入睡明显更快或更慢,按差额微调即可。' },
      { q: '应该睡几个周期?', a: '多数成年人适合 5-6 个周期(7.5-9 小时),这些选项会被标记为推荐。偶尔只睡 4 个周期可以撑,但长期不足 7 小时的健康代价,不是巧妙的时间点能抵消的。' },
      { q: '必须 6 点起,几点睡?', a: '切到「我要在…起床」模式,输入 06:00,就能得到按 90 分钟回推的入睡阶梯:22:45 对应 5 个周期,21:15 对应 6 个。选一个你能长期坚持的。' },
    ],
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
    useCases: ['deducir la hora de dormir según la de despertar', 'planificar ciclos de sueño de 90 minutos', 'hacer que el despertador suene en sueño ligero', 'calcular a qué hora despertar si te duermes ya'],
    faqs: [
      { q: '¿Qué es la regla de los 90 minutos?', a: 'Un ciclo completo de sueño —ligero, profundo y REM— dura de media unos 90 minutos. Despertar entre ciclos se siente mucho más fácil que ser arrancado del sueño profundo, así que la herramienta alinea horarios con los límites de ciclo.' },
      { q: '¿Por qué resta 15 minutos?', a: 'Es la latencia de sueño asumida: una persona sana tarda de media 10-20 minutos en dormirse y 15 es el punto medio habitual. Todas las horas sugeridas ya la incluyen; si te duermes mucho más rápido o más lento, ajusta en esa medida.' },
      { q: '¿Cuántos ciclos debo dormir?', a: 'Cinco o seis ciclos (7,5-9 horas) sirven a la mayoría de adultos, y esas opciones aparecen marcadas como recomendadas. Cuatro ciclos se aguanta de vez en cuando, pero dormir menos de 7 horas con regularidad tiene un coste para la salud que ningún timing ingenioso borra.' },
      { q: 'Debo levantarme a las 6, ¿cuándo me acuesto?', a: 'Cambia al modo «quiero despertar a las…», pon 06:00 y obtendrás una escalera de horas de dormir hacia atrás en pasos de 90 minutos: 22:45 para cinco ciclos, 21:15 para seis. Elige la que puedas mantener de verdad.' },
    ],
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
    useCases: ['vom Aufwachzeitpunkt die ideale Einschlafzeit zurückrechnen', '90-Minuten-Schlafzyklen planen', 'den Wecker ins leichte Schlafstadium legen', 'ausrechnen, wann du aufstehen solltest, wenn du jetzt schläfst'],
    faqs: [
      { q: 'Was ist die 90-Minuten-Regel?', a: 'Ein vollständiger Schlafzyklus — Leichtschlaf, Tiefschlaf und REM — dauert im Schnitt etwa 90 Minuten. Zwischen Zyklen aufzuwachen fühlt sich deutlich leichter an, als aus dem Tiefschlaf gerissen zu werden; deshalb legt das Tool alle Zeiten auf Zyklusgrenzen.' },
      { q: 'Warum werden 15 Minuten abgezogen?', a: 'Das ist die angenommene Einschlafzeit — gesunde Menschen brauchen im Mittel 10-20 Minuten, 15 ist der übliche Mittelwert. Jede angegebene Zeit rechnet sie bereits ein; wenn du deutlich schneller oder langsamer einschläfst, passe entsprechend an.' },
      { q: 'Wie viele Zyklen sollte ich schlafen?', a: 'Fünf bis sechs Zyklen (7,5-9 Stunden) passen für die meisten Erwachsenen — diese Optionen sind als empfohlen markiert. Vier Zyklen gehen gelegentlich, aber dauerhaft unter 7 Stunden kostet Gesundheit, die kein cleveres Timing ausgleicht.' },
      { q: 'Ich muss um 6 aufstehen — wann ins Bett?', a: 'Wechsle in den Aufwach-Modus, gib 06:00 ein und du erhältst eine Leiter rückwärts in 90-Minuten-Schritten: 22:45 für fünf Zyklen, 21:15 für sechs. Nimm die, die du wirklich durchhältst.' },
    ],
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
