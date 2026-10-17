/**
 * bpm-tap-counter 本地化 bundle —— zh / es / de(B13 电子与音频批)
 * 覆盖: ui + useCases + faqs。
 */
import type { ToolL10n } from '../tool-l10n'

export const BpmTapCounterL10n: ToolL10n = {
  zh: {
    useCases: ['跟着任意歌曲点按读出 BPM', 'DJ 对拍前确认两首歌的速度', '给效果器/采样器设置同步用的速度值', '整理歌单时给曲目打速度标签'],
    faqs: [
      { q: '要点多少下才能得到准确 BPM?', a: '4 到 8 下是甜点区。本工具对最近 8 次间隔取均值,最初的冲动拍会逐渐淡出,读数趋于稳定——一直点到一致性指示进入"稳"或"锁定"。' },
      { q: '为什么读数大约是我感觉的两倍?', a: '你多半在点八分音符,或者曲目是 half-time。按你会点头的那拍(四分音符)来点,有意地去减半或加倍,而不是无意识地切换。' },
      { q: '录音和现场音乐都能用吗?', a: '都能。跟着任何声源点——手机外放、乐队排练、视频网站。人的点按天然在拍点两侧偏几毫秒,这正是滑窗均值要抹平的东西。' },
      { q: '一致性指示是什么意思?', a: '它是你点按间隔的离散度:低于 2% 变化显示"锁定",低于 5% 显示"稳"。读数"散"通常说明节奏本身是 rubato(弹性速度),而不是手指不行。' },
    ],
    ui: {
      'tapPrompt': '跟着节拍点',
      'tapHint': '点这里,或按键盘 T 键',
      'reset': '重置',
      'bpm': '速度 (BPM)',
      'taps': '点按次数',
      'avgInterval': '平均间隔',
      'stability': '一致性',
      'waiting': '至少点两下',
      'stLocked': '锁定',
      'stSteady': '稳',
      'stLoose': '略散',
      'stUneven': '散',
      'note': '🥁 持续点满 8 拍左右——计数器取最近 8 次间隔的均值,开头的乱拍会自动淡出。若读数约为预期两倍,说明曲子是 half-time,改点半拍即可。间隔超过 3 秒会自动重新开始计数。',
    },
  },
  es: {
    useCases: ['sacar el BPM de cualquier canción a golpes de dedo', 'confirmar el tempo antes de mezclar dos temas', 'fijar la velocidad para sincronizar pedales y samplers', 'etiquetar por tempo tu biblioteca musical'],
    faqs: [
      { q: '¿Cuántos toques hacen falta para un BPM fiable?', a: 'Entre cuatro y ocho es el punto dulce. El contador promedia tus últimos ocho intervalos, así que los primeros toques impulsivos se diluyen y la lectura se asienta — sigue tocando hasta que la consistencia marque «estable» o «fijado».' },
      { q: '¿Por qué sale el doble de lo que siento?', a: 'Probablemente tocas corcheas, o el tema va en half-time. Marca el pulso al que asientes con la cabeza —la negra— y duplica o divide a propósito, no por accidente.' },
      { q: '¿Sirve con música grabada y en directo?', a: 'Con ambas. Toca sobre cualquier fuente: el altavoz del móvil, un ensayo de banda, un vídeo. Los toques humanos caen unos milisegundos a cada lado del beat, y eso es justo lo que suaviza la media móvil.' },
      { q: '¿Qué me dice el medidor de consistencia?', a: 'Es la dispersión de tus intervalos: menos del 2 % de variación es «fijado», menos del 5 % «estable». Una lectura «desigual» suele significar que el tempo es rubato, no que fallen tus dedos.' },
    ],
    ui: {
      'tapPrompt': 'TOCA',
      'tapHint': 'Toca aquí o pulsa la tecla T',
      'reset': 'Reiniciar',
      'bpm': 'Tempo (BPM)',
      'taps': 'Toques',
      'avgInterval': 'Intervalo medio',
      'stability': 'Consistencia',
      'waiting': 'Toca al menos dos veces',
      'stLocked': 'fijado',
      'stSteady': 'estable',
      'stLoose': 'flojo',
      'stUneven': 'desigual',
      'note': '🥁 Sigue tocando ocho pulsos o más: el contador promedia los últimos ocho intervalos y los toques locos del principio se desvanecen solos. Si la lectura dobla lo esperado, el tema va en half-time — toca la mitad. Más de 3 s de silencio reinicia la cuenta.',
    },
  },
  de: {
    useCases: ['BPM eines Songs durch Mittippen ermitteln', 'das Tempo prüfen, bevor du zwei Tracks mischst', 'Sync-Tempos für Pedale und Sampler setzen', 'die Musikbibliothek mit Tempo-Tags versehen'],
    faqs: [
      { q: 'Wie viele Taps brauche ich für ein genaues BPM?', a: 'Vier bis acht sind der Sweet Spot. Der Zähler mittelt die letzten acht Intervalle, deshalb verblassen die ersten impulsiven Taps und die Anzeige beruhigt sich — tippe weiter, bis die Konsistenz „stabil“ oder „fixiert“ zeigt.' },
      { q: 'Warum zeigt er doppelt so viel an, wie sich anfühlt?', a: 'Du tippst vermutlich Achtel, oder der Track ist im Half-Time-Feel. Tippe den Puls, zu dem du mit dem Kopf nicken würdest — die Viertelnote — und halbiere oder verdopple absichtlich, nicht aus Versehen.' },
      { q: 'Funktioniert das mit Studio- und Livemusik?', a: 'Mit beidem. Tippe auf jede Quelle mit — Handy-Lautsprecher, Bandprobe, Video. Menschliche Taps landen ein paar Millisekunden neben der Beat, und genau das glättet das gleitende Fenster.' },
      { q: 'Was sagt mir die Konsistenzanzeige?', a: 'Sie ist die Streuung deiner Tap-Intervalle: unter 2 % Schwankung heißt „fixiert“, unter 5 % „stabil“. Eine „ungleichmäßige“ Anzeige bedeutet meist Rubato-Tempo, nicht versagende Finger.' },
    ],
    ui: {
      'tapPrompt': 'TIPPEN',
      'tapHint': 'Hier tippen oder Taste T drücken',
      'reset': 'Zurücksetzen',
      'bpm': 'Tempo (BPM)',
      'taps': 'Taps',
      'avgInterval': 'Mittleres Intervall',
      'stability': 'Konsistenz',
      'waiting': 'Mindestens zweimal tippen',
      'stLocked': 'fixiert',
      'stSteady': 'stabil',
      'stLoose': 'locker',
      'stUneven': 'ungleichmäßig',
      'note': '🥁 Tippe rund acht Schläge durch — der Zähler mittelt die letzten acht Intervalle, wilde Anfangstaps verblassen von selbst. Zeigt die Anzeige etwa das Doppelte, läuft der Track im Half-Time: halbe Frequenz tippen. Über 3 s Pause startet die Zählung neu.',
    },
  },
}
