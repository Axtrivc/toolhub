/**
 * bpm-tap-counter 本地化 bundle —— zh / es / de(B13 电子与音频批)
 * 覆盖: ui + useCases + faqs。
 */
import type { ToolL10n } from '../tool-l10n'

export const BpmTapCounterL10n: ToolL10n = {

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
