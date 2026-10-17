/**
 * rot13-converter 本地化 bundle —— zh / es / de(2026-10 B12 批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const Rot13ConverterL10n: ToolL10n = {
  zh: {
    useCases: ['解谜题里的 ROT13 提示', '在论坛里遮住谜底/剧透', '学习凯撒密码的位移原理', '用 ROT-N 处理简单的字谜游戏'],
    faqs: [
      { q: 'ROT13 算加密吗?', a: '不算。总共只有 25 种位移,任何人一眼就能试穿——它是"防瞟见"不是保密。任何真要保护的东西都不该用它。' },
      { q: '怎么解码?', a: '把输出再贴回输入即可——ROT13 是自逆运算(13+13=26 正好一整圈)。其他位移 N 的解码位移是 26−N,比如 ROT7 用 ROT19 解。' },
      { q: '数字和标点会变吗?', a: '默认原样保留。开启 ROT5 后数字按 5 旋转(0↔5、1↔6),同样自逆;标点与空格永远不动。' },
      { q: '现在还有人在用什么?', a: '论坛遮谜底、解谜游戏提示、 Usenet 时代传下来的剧透礼仪——故意留一层"想看再解"的薄纱。' },
    ],
    ui: {
      'inputLabel': '输入文本',
      'outputLabel': '输出',
      'shiftLabel': '位移',
      'rot5Label': '数字同步旋转 5(ROT5)',
      'clear': '清空',
      'tooLarge': '输入过大——支持的上限是 200,000 字符。',
      'note': '🔁 ROT13 是自逆运算——把输出贴回输入即完成解码。其他 ROT-N 位移用 26 − N 解(ROT7 对 ROT19)。大小写保留;数字默认不动,开启 ROT5 后按 5 旋转,同样自逆。',
    },
  },
  es: {
    useCases: ['resolver pistas ROT13 de acertijos', 'ocultar soluciones o spoilers en foros', 'entender el desplazamiento del cifrado César', 'jugar con ROT-N en pasatiempos de letras'],
    faqs: [
      { q: '¿ROT13 es cifrado?', a: 'No. Solo existen 25 desplazamientos y cualquiera lo revierte a simple vista: es anti-mirada, no confidencialidad. Nada que importe de verdad debería protegerse así.' },
      { q: '¿Cómo se decodifica?', a: 'Pega la salida de vuelta en la entrada — ROT13 es su propia inversa (13 + 13 = 26, la vuelta completa). Otro desplazamiento N se deshace con 26 − N: ROT7 se decodifica con ROT19.' },
      { q: '¿Cambian los números y los signos?', a: 'Por defecto pasan intactos. Con ROT5 activado, los dígitos rotan en 5 (0↔5, 1↔6), también autoreversible; los signos y espacios nunca se tocan.' },
      { q: '¿Para qué se usa hoy?', a: 'Tapar soluciones en foros, pistas de juegos de ingenio y la etiqueta de spoilers heredada de Usenet: un velo fino que se corre solo cuando quieres.' },
    ],
    ui: {
      'inputLabel': 'Texto de entrada',
      'outputLabel': 'Salida',
      'shiftLabel': 'Desplazamiento',
      'rot5Label': 'Rotar también los dígitos en 5 (ROT5)',
      'clear': 'Limpiar',
      'tooLarge': 'Entrada demasiado grande — el máximo admitido es de 200 000 caracteres.',
      'note': '🔁 ROT13 es su propia inversa — pega la salida de vuelta para decodificar. Otro ROT-N se deshace con 26 − N (ROT7 ↔ ROT19). Se conserva el uso de mayúsculas; los dígitos pasan intactos salvo que actives ROT5, igualmente autoreversible.',
    },
  },
  de: {
    useCases: ['ROT13-Hinweise in Rätseln lösen', 'Lösungen und Spoiler in Foren verhüllen', 'die Verschiebung der Caesar-Verschlüsselung verstehen', 'mit ROT-N durch Buchstabenspiele spielen'],
    faqs: [
      { q: 'Ist ROT13 eine Verschlüsselung?', a: 'Nein. Es gibt nur 25 Verschiebungen, jeder knackt das auf einen Blick — es ist Blickschutz, keine Vertraulichkeit. Alles, was wirklich zählt, gehört nicht dahinter.' },
      { q: 'Wie dekodiert man?', a: 'Ausgabe zurück in die Eingabe einfügen — ROT13 ist selbstinvers (13 + 13 = 26, einmal komplett herum). Eine andere Verschiebung N löst man mit 26 − N: ROT7 dekodiert man mit ROT19.' },
      { q: 'Werden Zahlen und Satzzeichen verändert?', a: 'Standardmäßig bleiben sie unberührt. Mit ROT5 rotieren Ziffern um 5 (0↔5, 1↔6), ebenfalls selbstinvers; Satzzeichen und Leerzeichen bleiben immer stehen.' },
      { q: 'Wofür nutzt man es heute?', a: 'Lösungen in Foren zudecken, Hinweise in Denkspielen und die aus Usenet stammende Spoiler-Etikette: ein dünner Schleier, den man nur bei Lust wegzieht.' },
    ],
    ui: {
      'inputLabel': 'Eingabetext',
      'outputLabel': 'Ausgabe',
      'shiftLabel': 'Verschiebung',
      'rot5Label': 'Ziffern zusätzlich um 5 rotieren (ROT5)',
      'clear': 'Leeren',
      'tooLarge': 'Eingabe zu groß — unterstützt sind bis zu 200.000 Zeichen.',
      'note': '🔁 ROT13 ist selbstinvers — Ausgabe zurück in die Eingabe ergibt den Klartext. Jedes andere ROT-N löst man mit 26 − N (ROT7 ↔ ROT19). Groß-/Kleinschreibung bleibt; Ziffern bleiben unangetastet, außer ROT5 ist an — auch das selbstinvers.',
    },
  },
}
