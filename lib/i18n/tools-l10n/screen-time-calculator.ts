/**
 * screen-time-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const ScreenTimeCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['算每天刷屏一年占多少天', '看屏幕时间占清醒时间的比例', '量化一辈子的屏幕时间', '看每天少刷 1 小时能换回几年'],
    faqs: [
      { q: '"完整天数"怎么算的?', a: '小时 × 365 ÷ 24——每天 4 小时约合一年 61 个完整的 24 小时天。清醒时间占比则除以假定的 16 小时清醒时长,这才是表示每日占比更诚实的分母。' },
      { q: '终身数字基于什么假设?', a: '从你当前年龄推算到 80 岁,并按清醒时间口径累计屏幕时间:从 30 岁起每天 4 小时约为 12.5 个清醒年。这个数字意在发人深省而非精确——预期寿命因人而异。' },
      { q: '"夺回 1 小时"怎么来的?', a: '把同样的推算套在 1 小时上:从 30 岁到 80 岁每天省出 1 小时,约换回 3 个清醒年——够读几百本书。数值线性增长,每天 2 小时翻倍。' },
      { q: '屏幕时间多少算正常?', a: '美国成年人仅手机就日均 4.5-5 小时,加上电视后总屏幕时间超过 7 小时。娱乐性屏幕时间控制在 2 小时以内是常见的健康基线;计算器可以显示任何数值意味着什么。' },
    ],
    ui: {
      'ageLabel': '你的年龄',
      'copySummary': '复制摘要',
      'dailyShare': '占清醒时间比例',
      'fullDays': '个整天',
      'hoursLabel': '每日屏幕小时数',
      'invalid': '请输入有效的小时 (0-24) 与年龄',
      'note': '📱 平均值按每日 16 小时清醒时间。美国成人仅手机就日均 4.5-5 小时;加上电视总屏幕时间超过 7 小时。',
      'perYear': '折合每年…',
      'reclaim': '{n} 年内每天只找回 1 小时',
      'restOfLife': '未来 {n} 年内',
      'yearsAwake': '年清醒时间',
      'yearsBack': '年可支配时间',
    },
  },
  es: {
    useCases: ['ver cuántos días al año te lleva la pantalla', 'conocer el porcentaje de horas de vigilia', 'cuantificar el tiempo de pantalla de toda la vida', 'ver cuántos años recuperas quitando 1 h al día'],
    faqs: [
      { q: '¿Cómo se calculan los «días completos»?', a: 'Horas × 365 ÷ 24: cuatro horas diarias son unos 61 días completos de 24 horas al año. La proporción sobre horas de vigilia divide entre 16 horas despierto asumidas, el denominador más honesto para un porcentaje diario.' },
      { q: '¿Qué asume la cifra de por vida?', a: 'Proyecta desde tu edad actual hasta los 80 y acumula el tiempo de pantalla en horas de vigilia: 4 horas diarias desde los 30 son unos 12,5 años despierto. La cifra busca ser reveladora, no precisa — la esperanza de vida varía.' },
      { q: '¿De dónde sale «recuperar 1 hora»?', a: 'La misma proyección aplicada a una sola hora: recuperar 1 h diaria entre los 30 y los 80 devuelve unos 3 años despierto — tiempo para cientos de libros. Escala linealmente: 2 horas lo duplican.' },
      { q: '¿Cuánto tiempo de pantalla es normal?', a: 'Los adultos de EE. UU. promedian 4,5-5 h solo en el móvil, y sumando la TV se superan las 7 h totales. Menos de 2 h de pantalla recreativa es una base saludable habitual; la calculadora muestra lo que significa tu cifra en cualquier nivel.' },
    ],
    ui: {
      'ageLabel': 'Tu edad',
      'copySummary': 'Copiar resumen',
      'dailyShare': 'Proporción de horas despierto',
      'fullDays': 'días completos',
      'hoursLabel': 'Horas de pantalla al día',
      'invalid': 'Introduce horas válidas (0-24) y edad',
      'note': '📱 Los promedios asumen 16 horas despierto al día. Los adultos de EE. UU. pasan 4,5-5 h solo en el móvil; con TV se pasa de 7 h.',
      'perYear': 'Por año eso es…',
      'reclaim': 'Recuperando 1 h/día durante {n} años',
      'restOfLife': 'En los próximos {n} años',
      'yearsAwake': 'años de tiempo despierto',
      'yearsBack': 'años recuperados',
    },
  },
  de: {
    useCases: ['ausrechnen, wie viele Tage im Jahr die Bildschirmzeit frisst', 'den Anteil an den Wachstunden sehen', 'die Lebens-Bildschirmzeit beziffern', 'sehen, wie viele Jahre 1 h weniger täglich zurückbringt'],
    faqs: [
      { q: 'Wie werden die „vollen Tage“ berechnet?', a: 'Stunden × 365 ÷ 24 — vier Stunden täglich sind etwa 61 volle 24-Stunden-Tage pro Jahr. Der Wachstunden-Anteil teilt stattdessen durch angenommene 16 Wachstunden, den ehrlicheren Nenner für eine Tagesquote.' },
      { q: 'Was nimmt die Lebenszeit-Rechnung an?', a: 'Sie projiziert vom aktuellen Alter bis 80 und zählt Bildschirmzeit in Wachstunden: 4 Stunden täglich ab 30 sind rund 12,5 wache Jahre. Die Zahl soll ernüchtern, nicht präzise sein — Lebenserwartung variiert.' },
      { q: 'Woher kommt „1 Stunde zurückgewinnen“?', a: 'Dieselbe Projektion auf eine einzige Stunde angewandt: 1 h täglich von 30 bis 80 gibt etwa 3 wache Jahre zurück — Zeit für hunderte Bücher. Es skaliert linear, 2 Stunden verdoppeln es.' },
      { q: 'Wie viel Bildschirmzeit ist normal?', a: 'US-Erwachsene schaffen im Schnitt 4,5-5 h allein am Handy, mit TV steigt die Gesamtzeit über 7 h. Unter 2 h Freizeit-Bildschirm gilt als übliche gesunde Basis; der Rechner zeigt, was deine Zahl auf jedem Niveau bedeutet.' },
    ],
    ui: {
      'ageLabel': 'Dein Alter',
      'copySummary': 'Zusammenfassung kopieren',
      'dailyShare': 'Anteil der Wachzeit',
      'fullDays': 'volle Tage',
      'hoursLabel': 'Bildschirmstunden pro Tag',
      'invalid': 'Gültige Stunden (0-24) und Alter eingeben',
      'note': '📱 Durchschnitte nehmen 16 Wachstunden an. US-Erwachsene: 4,5-5 h nur am Handy; mit TV über 7 Stunden.',
      'perYear': 'Pro Jahr sind das…',
      'reclaim': 'Nur 1 h/Tag zurückgewinnen über {n} Jahre',
      'restOfLife': 'In den nächsten {n} Jahren',
      'yearsAwake': 'Jahre Wachzeit',
      'yearsBack': 'Jahre zurück',
    },
  },
}
