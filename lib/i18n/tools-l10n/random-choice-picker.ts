/**
 * random-choice-picker 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const randomChoicePickerL10n: ToolL10n = {
  zh: {
    ui: {
      'clear': '清空',
      'copyWinners': '复制中奖者',
      'history': '历史',
      'noRepeatWinners': '不重复中奖',
      'noteIntro': '🎲 中奖者用 ',
      'noteMid': ' 和拒绝采样(无取模偏差)抽取,每个选项的机会完全相等。开启「',
      'noteNoRepeat': '不重复中奖',
      'noteOutro': '」时为不放回采样;关闭则允许同一选项在一次抽取中多次中奖。',
      'numberOfWinners': '中奖者数量',
      'optionPlural': '个选项',
      'optionSingular': '个选项',
      'optionsLabel': '选项 — 每行一个',
      'pick': '抽取',
      'picking': '抽取中…',
      'pressPickToChoose': '按「抽取」来选择',
      'removeWinnerAfterPicking': '抽中后移除该选项',
      'stateOff': '(关)',
      'stateOn': '(开)',
      'tooFewError': '⚠️ 至少添加 2 个选项(每行一个)以供抽取。',
      'winnerPlural': '名中奖者',
      'winnerSingular': '名中奖者',
    },
    useCases: [
      '在线从列表随机抽取',
      '转盘决策器',
      '从名单中随机抽奖',
      '带动画的随机选择生成器',
    ],
    faqs: [
      {
        q: '抽取是真随机吗?',
        a: '它用的是浏览器内置的随机数生成器,对于公平抽取、抽奖和做决定足够了。要达到密码学安全级别需要专门的 CSPRNG,但在选项之间做选择时它无偏且足够不可预测。',
      },
      {
        q: '能抽取多个不重复的中奖者吗?',
        a: '能。你可以连抽若干名不重复的中奖者——每个选项每次抽取最多中一次——非常适合在名单上公平地分配奖品或任务。',
      },
      {
        q: '会保留历史抽取记录吗?',
        a: '会,最近的结果会保留在历史列表里,方便你回顾多轮抽取中都抽到了什么。这在跑好几轮、需要确认没人被漏掉或重复抽取时很有帮助。',
      },
    ],
  },
  es: {
    ui: {
      'clear': 'Limpiar',
      'copyWinners': 'Copiar ganadores',
      'history': 'Historial',
      'noRepeatWinners': 'Sin repetir ganadores',
      'noteIntro': '🎲 Los ganadores se extraen con ',
      'noteMid': ' y muestreo de rechazo (sin sesgo de módulo), de modo que cada opción tiene exactamente las mismas probabilidades. Con ',
      'noteNoRepeat': 'sin repetir ganadores',
      'noteOutro': ' activado, las extracciones son sin reemplazo; desactívalo para permitir que la misma opción gane varias veces en una tirada.',
      'numberOfWinners': 'Número de ganadores',
      'optionPlural': 'opciones',
      'optionSingular': 'opción',
      'optionsLabel': 'Opciones — una por línea',
      'pick': 'Elegir',
      'picking': 'Eligiendo…',
      'pressPickToChoose': 'Pulsa Elegir para seleccionar',
      'removeWinnerAfterPicking': 'Quitar ganador tras elegir',
      'stateOff': '(desactivado)',
      'stateOn': '(activado)',
      'tooFewError': '⚠️ Añade al menos 2 opciones (una por línea) para elegir.',
      'winnerPlural': 'ganadores',
      'winnerSingular': 'ganador',
    },
    useCases: [
      'selector aleatorio de lista online',
      'ruleta decisionadora',
      'elegir ganador aleatorio de una lista',
      'generador de elección aleatoria con animación',
    ],
    faqs: [
      {
        q: '¿La selección es realmente aleatoria?',
        a: 'Usa el generador de números aleatorios integrado del navegador, suficiente para selecciones justas, sorteos y decisiones. Para seguridad criptográfica querrías un CSPRNG dedicado, pero para elegir entre opciones es imparcial e impredecible bastante.',
      },
      {
        q: '¿Puede elegir varios ganadores únicos?',
        a: 'Sí. Puedes extraer varios ganadores sin repetición — cada opción se elige como mucho una vez por extracción — ideal para sorteos y repartir premios o tareas de forma justa en una lista.',
      },
      {
        q: '¿Mantiene un historial de selecciones pasadas?',
        a: 'Sí, los resultados recientes se guardan en un historial para que revises lo elegido en varias extracciones. Útil al hacer varias rondas y necesitar confirmar que nadie se saltó ni se eligió dos veces.',
      },
    ],
  },
  de: {
    ui: {
      'clear': 'Leeren',
      'copyWinners': 'Gewinner kopieren',
      'history': 'Verlauf',
      'noRepeatWinners': 'Keine wiederholten Gewinner',
      'noteIntro': '🎲 Gewinner werden per ',
      'noteMid': ' und Rejection-Sampling (kein Modulo-Bias) gezogen, sodass jede Option exakt gleiche Chancen hat. Mit ',
      'noteNoRepeat': 'keine wiederholten Gewinner',
      'noteOutro': ' an ist die Ziehung ohne Zurücklegen; schalte es aus, um mehrfaches Gewinnen derselben Option in einer Ziehung zuzulassen.',
      'numberOfWinners': 'Anzahl Gewinner',
      'optionPlural': 'Optionen',
      'optionSingular': 'Option',
      'optionsLabel': 'Optionen — eine pro Zeile',
      'pick': 'Auswählen',
      'picking': 'Auswählen…',
      'pressPickToChoose': 'Auf Auswählen klicken zum Ziehen',
      'removeWinnerAfterPicking': 'Gewinner nach dem Ziehen entfernen',
      'stateOff': '(aus)',
      'stateOn': '(an)',
      'tooFewError': '⚠️ Mindestens 2 Optionen (eine pro Zeile) zum Auswählen hinzufügen.',
      'winnerPlural': 'Gewinner',
      'winnerSingular': 'Gewinner',
    },
    useCases: [
      'Zufallsauswahl aus Liste online',
      'Entscheidungsrad-Spinner',
      'zufälligen Gewinner aus Liste ziehen',
      'Zufallsauswahl-Generator mit Animation',
    ],
    faqs: [
      {
        q: 'Ist die Auswahl wirklich zufällig?',
        a: 'Sie nutzt den eingebauten Zufallszahlengenerator des Browsers, was für faire Auswahlen, Verlosungen und Entscheidungen ausreicht. Für kryptografische Sicherheit bräuchte es einen dedizierten CSPRNG, für die Auswahl zwischen Optionen ist er unverfälscht und unvorhersehbar genug.',
      },
      {
        q: 'Können mehrere eindeutige Gewinner gezogen werden?',
        a: 'Ja. Du kannst mehrere Gewinner ohne Wiederholung ziehen — jede Option wird pro Ziehung höchstens einmal gewählt — ideal für Verlosungen und die faire Verteilung von Preisen oder Aufgaben auf eine Liste.',
      },
      {
        q: 'Wird ein Verlauf vergangener Ziehungen behalten?',
        a: 'Ja, letzte Ergebnisse bleiben in einer Verlaufsliste, sodass du überprüfen kannst, was über mehrere Ziehungen hinweg gewählt wurde. Hilfreich, wenn du mehrere Runden durchführst und sicherstellen willst, dass niemand übersprungen oder doppelt gezogen wurde.',
      },
    ],
  },
}
