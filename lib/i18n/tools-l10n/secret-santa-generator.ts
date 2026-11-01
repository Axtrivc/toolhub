/**
 * secret-santa-generator 本地化 bundle —— zh / es / de(B14 生成器与趣味批次)
 * 覆盖: ui / faqs / useCases / formula.example。其余 formula 字段缺失自动回退英文。
 *
 * formula.example 为修正版计数:互斥一对是双向禁止(A 送 B、B 送 A 都排除),
 * n=4 的 9 个错排中该规则排除 5 个、仅存活 4 个(原英文注册表误写为 8)。
 */
import type { ToolL10n } from '../tool-l10n'

/** 与 lib/tool-formulas.ts 英文原值一致的公式行(数学记号,三语通用) */
const SS_FORMULA = 'assign: bijection [0..n−1] → [0..n−1] with\nassign(i) ≠ i  and  assign(i) ∉ banned(i)\n!n = n! × Σ(k=0..n) (−1)^k / k!   (valid draws without exclusions)'

export const SecretSantaGeneratorL10n: ToolL10n = {

  es: {
    useCases: ['sortear el amigo invisible de familia u oficina', 'evitar que parejas o compañeros se emparejen', 'pasar el dispositivo y revelar de uno en uno', 'copiar el mensaje de cada persona como recordatorio'],
    formula: {
      formula: SS_FORMULA,
      example: 'Paso 1: n = 4, sin exclusiones: permutaciones totales 4! = 24.\nPaso 2: Desarreglos !4 = 24 × (1 − 1 + 1/2 − 1/6 + 1/24) = 9 circuitos válidos.\nPaso 3: Alice→Bob→Carla→Dev→Alice es uno de ellos: nadie se corresponde a sí mismo, circuito cerrado.\nPaso 4: Vetar el par mutuo Alice-Bob: caen todos los circuitos con Alice→Bob o Bob→Alice — son 3 + 3 − 1 = 5 de los 9, así que sobreviven 4.\nResultado: el generador devuelve al azar uno de los circuitos válidos restantes.',
    },
    faqs: [
      { q: '¿Cómo funcionan los pares de exclusión?', a: 'Escribe una pareja por línea, como «Alice - Bob»: esas dos personas nunca se sacarán mutuamente (parejas, compañeros, rivales). Cada quien sigue dando y recibiendo exactamente un regalo.' },
      { q: '¿Alguien puede sacarse a sí mismo?', a: 'No — el sorteo es una permutación sin puntos fijos: un circuito cerrado donde cada dador corresponde a un receptor distinto, verificado antes de mostrar nada.' },
      { q: '¿Y si las reglas son imposibles?', a: 'La herramienta te lo dice en vez de doblarlas en silencio — p. ej. tres personas con todas las parejas vetadas. Suelta una exclusión y vuelve a sortear.' },
      { q: '¿Cómo comparto los resultados sin revelar nada?', a: 'Pasa el dispositivo: cada persona elige su nombre y ve solo a su destinatario, luego copia el mensaje a sus notas. El organizador nunca necesita ver ninguna pareja.' },
    ],
    ui: {
      'namesLabel': 'Participantes — uno por línea (mín. 3)',
      'nNames': '{n} participantes',
      'nExcl': '{n} pares de exclusión',
      'exclLabel': 'Pares de exclusión — uno por línea (opcional)',
      'exclHint': 'Quienes no deben emparejarse, p. ej. Alice - Bob. Separadores: ->, &, coma, o un guion con espacios a ambos lados; los nombres con guion (Mary-Jane) funcionan.',
      'drawBtn': 'Sortear',
      'redraw': 'Sortear de nuevo',
      'revealTitle': 'Revela de uno en uno — pasa el dispositivo',
      'whoLabel': '¿Quién eres?',
      'givesTo': 'Tu destinatario es',
      'copyMsg': 'Copiar mensaje',
      'msgTemplate': '🎁 Amigo invisible\n{from}, tu destinatario es: {to}\n¡Guárdalo en secreto!',
      'errMin': 'Introduce al menos 3 participantes.',
      'errBadPair': 'No se pudo leer la pareja: {line}',
      'errUnknown': 'La pareja «{line}» usa un nombre que no está en la lista.',
      'errImpossible': 'No existe ningún sorteo válido con estas exclusiones — todas las parejas están bloqueadas. Suelta una regla y vuelve a sortear.',
      'note': '🎅 Sorteo en circuito cerrado: todos dan una vez y reciben una vez, nadie se saca a sí mismo y los pares excluidos (parejas, compañeros) jamás caen juntos. El emparejamiento se resuelve con barajado criptográfico y backtracking — devuelve un sorteo válido o te avisa de que las reglas son imposibles. Los resultados nunca salen de esta página.',
    },
  },
  de: {
    useCases: ['das Wichteln für Familie oder Büro auslosen', 'Paare und Teamkollegen auseinanderhalten', 'das Gerät herumgeben und einzeln aufdecken', 'die Nachricht pro Person als Erinnerung kopieren'],
    formula: {
      formula: SS_FORMULA,
      example: 'Schritt 1: n = 4, ohne Ausschlüsse: Permutationen insgesamt 4! = 24.\nSchritt 2: Derangements !4 = 24 × (1 − 1 + 1/2 − 1/6 + 1/24) = 9 gültige Kreise.\nSchritt 3: Alice→Bob→Carla→Dev→Alice ist einer davon: niemand bildet auf sich selbst ab, Kreis geschlossen.\nSchritt 4: Das Paar Alice-Bob gegenseitig verbieten: alle Kreise mit Alice→Bob oder Bob→Alice fallen weg — das sind 3 + 3 − 1 = 5 von 9, also überleben 4.\nErgebnis: Der Generator liefert zufällig einen der verbleibenden gültigen Kreise.',
    },
    faqs: [
      { q: 'Wie funktionieren Ausschluss-Paare?', a: 'Schreibe ein Paar pro Zeile, etwa „Alice - Bob“ — die beiden ziehen nie einander (Paare, Teamkollegen, Rivalen). Jeder schenkt und bekommt trotzdem genau einmal.' },
      { q: 'Kann jemand sich selbst ziehen?', a: 'Nein — die Auslosung ist eine fixpunktfreie Permutation: ein geschlossener Kreis, in dem jeder Schenker auf einen anderen Beschenkten zeigt, vor der Anzeige geprüft.' },
      { q: 'Was, wenn die Regeln unmöglich sind?', a: 'Das Werkzeug sagt es dir, statt heimlich eine Regel zu biegen — etwa drei Personen, bei denen jedes Paar verboten ist. Lockere eine Ausschlussregel und lose neu.' },
      { q: 'Wie teile ich die Ergebnisse mit, ohne zu verraten?', a: 'Gib das Gerät herum: Jede Person wählt ihren Namen und sieht nur ihren Beschenkten, dann kopiert sie die Nachricht in ihre Notizen. Der Organisator muss nie eine Paarung sehen.' },
    ],
    ui: {
      'namesLabel': 'Teilnehmende — eine:r pro Zeile (mind. 3)',
      'nNames': '{n} Teilnehmende',
      'nExcl': '{n} Ausschluss-Paare',
      'exclLabel': 'Ausschluss-Paare — eines pro Zeile (optional)',
      'exclHint': 'Wer sich nicht gegenseitig ziehen darf, z. B. Alice - Bob. Trenner: ->, &, Komma oder ein von Leerzeichen umgebenes Minus; Namen mit Bindestrich (Mary-Jane) funktionieren.',
      'drawBtn': 'Auslosen',
      'redraw': 'Neu auslosen',
      'revealTitle': 'Nacheinander aufdecken — gib das Gerät herum',
      'whoLabel': 'Wer bist du?',
      'givesTo': 'Du beschenkst',
      'copyMsg': 'Nachricht kopieren',
      'msgTemplate': '🎁 Wichteln\n{from}, du beschenkst: {to}\nVerrate es nicht!',
      'errMin': 'Trage mindestens 3 Teilnehmende ein.',
      'errBadPair': 'Paar nicht lesbar: {line}',
      'errUnknown': 'Das Paar „{line}“ benutzt einen Namen, der nicht in der Liste steht.',
      'errImpossible': 'Mit diesen Ausschlüssen gibt es keine gültige Auslosung — jede Paarung blockiert jemanden. Lockere eine Regel und lose neu.',
      'note': '🎅 Auslosung im geschlossenen Kreis: alle schenken einmal und bekommen einmal, niemand zieht sich selbst, und Ausschluss-Paare (Paare, Teams) landen nie zusammen. Die Paarung entsteht per Krypto-Mischung mit Backtracking — sie liefert entweder eine gültige Auslosung oder meldet, dass die Regeln unmöglich sind. Ergebnisse verlassen diese Seite nie.',
    },
  },
}
