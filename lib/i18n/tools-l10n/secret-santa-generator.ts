/**
 * secret-santa-generator 本地化 bundle —— zh / es / de(B14 生成器与趣味批次)
 * 覆盖: ui / faqs / useCases / formula.example。其余 formula 字段缺失自动回退英文。
 *
 * formula.example 为修正版计数:互斥一对是双向禁止(A 送 B、B 送 A 都排除),
 * n=4 的 9 个错排中该规则排除 5 个、仅存活 4 个(原英文注册表误写为 8)。
 */
import type { ToolL10n } from '../tool-l10n'

/** 与 lib/tool-formulas.ts 英文原值一致的公式行(数学记号,四语通用) */
const SS_FORMULA = 'assign: bijection [0..n−1] → [0..n−1] with\nassign(i) ≠ i  and  assign(i) ∉ banned(i)\n!n = n! × Σ(k=0..n) (−1)^k / k!   (valid draws without exclusions)'

export const SecretSantaGeneratorL10n: ToolL10n = {
  zh: {
    useCases: ['家庭/公司圣诞互抽一次成局', '保证夫妻/队友不会互相抽到', '传递设备逐人查看,谁也不剧透', '复制文案发给每个人做提醒'],
    formula: {
      formula: SS_FORMULA,
      example: 'Step 1:n = 4、无互斥:排列总数 4! = 24。\nStep 2:错排 !4 = 24 × (1 − 1 + 1/2 − 1/6 + 1/24) = 9 个有效闭环。\nStep 3:Alice→Bob→Carla→Dev→Alice 是其中之一:没有人映射到自己,闭环成立。\nStep 4:互斥 Alice-Bob 一对是双向禁止:凡 Alice→Bob 或 Bob→Alice 的闭环都被排除,共 3 + 3 − 1 = 5 个,9 个里仅存活 4 个。\nResult:生成器从剩下的有效闭环中随机返回一个。',
    },
    faqs: [
      { q: '互斥对怎么用?', a: '每行写一对,如 “Alice - Bob”——这两个人永远不会互相抽到(夫妻、队友、对头)。每个人仍然恰好送出并收到一份礼物。' },
      { q: '有人会抽到自己吗?', a: '不会——抽取结果是一个错排:每个送礼人映射到不同接收者的闭环,展示结果前已校验通过。' },
      { q: '规则无解怎么办?', a: '工具会明说,而不是悄悄放宽规则——比如三个人把每一对都互斥了。放宽一条互斥再抽即可。' },
      { q: '怎么公布结果不剧透?', a: '把设备传一圈:每人从下拉里选自己的名字,只看到自己的送礼对象,再复制文案存到自己的备忘录。组织者全程无需看到任何配对。' },
    ],
    ui: {
      'namesLabel': '参与者——每行一个(至少 3 人)',
      'nNames': '{n} 位参与者',
      'nExcl': '{n} 组互斥对',
      'exclLabel': '互斥对——每行一组(可选)',
      'exclHint': '不能互抽的人,如夫妻或队友,写法 Alice - Bob;分隔符支持 -> 、&、逗号,或两侧留空的连字符——名字自带的连字符(如 Mary-Jane)不受影响。',
      'drawBtn': '开始抽取',
      'redraw': '重新抽取',
      'revealTitle': '逐人查看——把设备传一圈',
      'whoLabel': '你是谁?',
      'givesTo': '你要送礼的对象是',
      'copyMsg': '复制文案',
      'msgTemplate': '🎁 秘密圣诞\n{from},你要送礼的对象是:{to}\n保密!',
      'errMin': '至少输入 3 位参与者。',
      'errBadPair': '无法解析这对:{line}',
      'errUnknown': '“{line}”用到了名单里不存在的名字。',
      'errImpossible': '这些互斥规则下不存在有效抽取——每个人都被挡住了。放宽一条规则再抽。',
      'note': '🎅 闭环抽取:每人送出一次、收到一次,没人抽到自己,互斥对(夫妻、队友)永不互抽。配对用 crypto 洗牌 + 回溯求得——要么给出有效结果,要么告诉你规则无解。结果不离开本页。',
    },
  },
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
