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
      'noteMid': ' 和拒绝采样(无取模偏差)抽取,每个选项的机会完全相等。开启',
      'noteNoRepeat': '不重复中奖',
      'noteOutro': '时为不放回采样;关闭则允许同一选项在一次抽取中多次中奖。',
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
      '在线从列表中随机抽取选项',
      '像转盘一样当场转出决定',
      '从名单中随机抽出中奖者',
      '生成带动画效果的随机选择',
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
      {
        q: '「不重复中奖」和「抽中后移除」有什么区别?',
        a: '不重复中奖限制单次抽取:同一轮里每个选项最多中一次(不放回采样);抽中后移除则把该选项从列表里删掉,影响之后所有轮次。一次发完若干奖品用前者,逐步划掉名单上的人用后者。',
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
      'pressPickToChoose': 'Pulsa «Elegir» para lanzar el sorteo',
      'removeWinnerAfterPicking': 'Quitar ganador tras elegir',
      'stateOff': '(desactivado)',
      'stateOn': '(activado)',
      'tooFewError': '⚠️ Añade al menos 2 opciones (una por línea) para elegir.',
      'winnerPlural': 'ganadores',
      'winnerSingular': 'ganador',
    },
    useCases: [
      'elegir al azar una opción de una lista',
      'tomar decisiones al azar con una ruleta',
      'extraer un ganador al azar de una lista',
      'hacer una elección aleatoria con animación',
    ],
    faqs: [
      {
        q: '¿La selección es realmente aleatoria?',
        a: 'Usa el generador de números aleatorios integrado del navegador, suficiente para selecciones justas, sorteos y decisiones. Para seguridad criptográfica necesitarías un CSPRNG dedicado, pero para elegir entre opciones es bastante imparcial e impredecible.',
      },
      {
        q: '¿Puede elegir varios ganadores únicos?',
        a: 'Sí. Puedes extraer varios ganadores sin repetición — cada opción se elige como mucho una vez por extracción — ideal para sorteos y para asignar premios o tareas de forma justa en una lista.',
      },
      {
        q: '¿Conserva un historial de selecciones anteriores?',
        a: 'Sí, los resultados recientes se guardan en un historial para que puedas revisar lo elegido a lo largo de varias extracciones. Útil cuando haces varias rondas y quieres confirmar que nadie se quedó fuera ni fue elegido dos veces.',
      },
      {
        q: '¿En qué se diferencian «sin repetir ganadores» y «quitar ganador tras elegir»?',
        a: 'La primera limita una sola extracción: dentro de la misma ronda cada opción gana como mucho una vez (muestreo sin reemplazo). La segunda elimina la opción de la lista y afecta a todas las rondas siguientes. Para repartir varios premios de una vez usa la primera; para tachar nombres ronda a ronda, la segunda.',
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
      'pressPickToChoose': 'Klicke auf „Auswählen“, um zu ziehen',
      'removeWinnerAfterPicking': 'Gewinner nach dem Ziehen entfernen',
      'stateOff': '(aus)',
      'stateOn': '(an)',
      'tooFewError': '⚠️ Füge mindestens 2 Optionen hinzu (eine pro Zeile), um daraus zu ziehen.',
      'winnerPlural': 'Gewinner',
      'winnerSingular': 'Gewinner',
    },
    useCases: [
      'eine Option per Zufallsprinzip aus einer Liste auswählen',
      'eine Entscheidung per Glücksrad treffen',
      'einen zufälligen Gewinner aus einer Liste ziehen',
      'eine Zufallsauswahl mit Animation vornehmen',
    ],
    faqs: [
      {
        q: 'Ist die Auswahl wirklich zufällig?',
        a: 'Sie nutzt den eingebauten Zufallszahlengenerator des Browsers, was für faire Auswahlen, Verlosungen und Entscheidungen ausreicht. Für kryptografische Sicherheit bräuchte es einen dedizierten CSPRNG, für die Auswahl zwischen Optionen ist er unverfälscht und unvorhersehbar genug.',
      },
      {
        q: 'Kann man mehrere verschiedene Gewinner ziehen?',
        a: 'Ja. Du kannst mehrere Gewinner ohne Wiederholung ziehen — jede Option wird pro Ziehung höchstens einmal gewählt — ideal für Verlosungen und die faire Verteilung von Preisen oder Aufgaben auf eine Liste.',
      },
      {
        q: 'Werden frühere Ziehungen im Verlauf gespeichert?',
        a: 'Ja, letzte Ergebnisse bleiben in einer Verlaufsliste, sodass du überprüfen kannst, was über mehrere Ziehungen hinweg gewählt wurde. Hilfreich, wenn du mehrere Runden durchführst und sicherstellen willst, dass niemand übersprungen oder doppelt gezogen wurde.',
      },
      {
        q: 'Worin unterscheiden sich „keine wiederholten Gewinner“ und „Gewinner nach dem Ziehen entfernen“?',
        a: 'Ersteres begrenzt eine einzige Ziehung: innerhalb derselben Runde gewinnt jede Option höchstens einmal (Ziehen ohne Zurücklegen). Letzteres streicht die Option dauerhaft aus der Liste und wirkt auf alle künftigen Runden. Wenn du mehrere Preise auf einmal verteilst, nimm Ersteres; um Namen Runde für Runde abzuhaken, Letzteres.',
      },
    ],
  },
}
