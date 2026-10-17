/**
 * css-minifier 本地化 bundle —— zh / es / de(2026-10 B12 批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const CssMinifierL10n: ToolL10n = {
  zh: {
    useCases: ['上线前压缩手写的 CSS', '看清压缩前后字节与压缩率', '给内联到 HTML 的关键 CSS 瘦身', '教学演示哪些空白可以安全删、哪些不能'],
    faqs: [
      { q: 'CSS 能压小多少?', a: '注释加空白通常省 15-30%。要注意 gzip 对空白本来就压得极好,网络层收益有限——真正赚的是解析开销、bundle 卫生与缓存指纹的稳定。' },
      { q: '为什么 calc() 里的空格不删?', a: 'CSS 语法规定 calc() 内 + 和 - 两侧必须有空白,删掉整条声明就废了。这是天真压缩器毁样式表的头号事故点,本工具特意保留。' },
      { q: '会合并规则或缩短颜色吗?', a: '故意不做。合并重叠选择器会改变层叠顺序,风险大于收益;只做字节级的安全折叠:0px→0、0.5→.5、去掉末尾分号与空规则。' },
      { q: '/*! ... */ 注释能活下来吗?', a: '能——按惯例 /*! 开头的"重要注释"(通常是许可证文本)会被保留;普通 /* */ 注释则照常剥离。' },
    ],
    ui: {
      'inputLabel': '你的 CSS',
      'outputLabel': '压缩后 CSS',
      'loadSample': '加载示例',
      'statsIn': '原始字节',
      'statsOut': '压缩后字节',
      'statsSaved': '节省',
      'tooLarge': '输入过大——支持的上限是 300,000 字符。',
      'note': '🛡️ 刻意保守:字符串与 /*! 横幅先抽成占位符再做空白处理;calc() 保留其语法要求的空格;0% 永不折叠成 0(flex-basis 里两者不等价)。不做激进的规则合并,输出一次就能直接用。',
    },
  },
  es: {
    useCases: ['minificar CSS escrito a mano antes de subir a producción', 'ver bytes y porcentaje antes y después', 'aligerar el critical CSS que va inline en el HTML', 'mostrar qué espacios en blanco se pueden borrar y cuáles no'],
    faqs: [
      { q: '¿Cuánto se encoge el CSS?', a: 'Con comentarios y espacios, suele ser un 15-30 %. Ojo: gzip ya comprime muy bien el espacio en blanco, así que la ganancia en red es modesta — lo que de verdad cuentas es el coste de parseo, la higiene del bundle y la estabilidad del hash de caché.' },
      { q: '¿Por qué no se borran los espacios dentro de calc()?', a: 'La gramática de CSS exige espacios a ambos lados de + y - dentro de calc(); quitarlos invalida la declaración entera. Es el accidente número uno de los minificadores ingenuos, y aquí se conservan a propósito.' },
      { q: '¿Fusiona reglas o acorta colores?', a: 'A propósito, no. Fusionar selectores solapados altera el orden de cascada: más riesgo que beneficio. Solo pliegues seguros a nivel de byte: 0px→0, 0.5→.5, eliminar el último punto y coma y las reglas vacías.' },
      { q: '¿Sobreviven los comentarios /*! ... */ ?', a: 'Sí: por convención los «comentarios importantes» que empiezan por /*! (normalmente texto de licencia) se conservan; los /* */ normales se eliminan sin piedad.' },
    ],
    ui: {
      'inputLabel': 'Tu CSS',
      'outputLabel': 'CSS minificado',
      'loadSample': 'Cargar ejemplo',
      'statsIn': 'Bytes de entrada',
      'statsOut': 'Bytes de salida',
      'statsSaved': 'Ahorro',
      'tooLarge': 'Entrada demasiado grande — el máximo admitido es de 300 000 caracteres.',
      'note': '🛡️ Conservador a propósito: las cadenas y los banners /*! se aíslan como placeholders antes de tocar el espacio en blanco; calc() conserva los espacios que su gramática exige; 0% nunca se pliega a 0 (no son equivalentes en flex-basis). Sin fusiones agresivas: la salida es válida al primer intento.',
    },
  },
  de: {
    useCases: ['handgeschriebenes CSS vor dem Deployment minifizieren', 'Bytes und Ersparnis vor/nach dem Vergleich ansehen', 'Inline-Critical-CSS im HTML entschlacken', 'zeigen, welcher Weißraum sicher geht und welcher nicht'],
    faqs: [
      { q: 'Wie viel schrumpft CSS?', a: 'Mit Kommentaren und Leerraum typischerweise 15-30 %. Beachte: gzip packt Weißraum ohnehin hervorragend, der Netzgewinn ist begrenzt — die echte Ersparnis sind Parse-Kosten, Bundle-Hygiene und stabile Cache-Hashes.' },
      { q: 'Warum bleiben die Leerzeichen in calc() stehen?', a: 'Die CSS-Grammatik verlangt Whitespace um + und - innerhalb von calc(); ohne ihn ist die gesamte Deklaration tot. Das ist Kardinalfehler Nummer eins naiver Minifier — dieses Tool lässt sie bewusst stehen.' },
      { q: 'Werden Regeln gemerged oder Farben gekürzt?', a: 'Bewusst nein. Selektoren-Merging ändert die Kaskadenreihenfolge — mehr Risiko als Nutzen. Es laufen nur sichere Byte-Folds: 0px→0, 0.5→.5, letztes Semikolon und leere Regeln weg.' },
      { q: 'Überleben /*! ... */-Kommentare?', a: 'Ja — „wichtige Kommentare“ mit /*! (meist Lizenztext) bleiben per Konvention erhalten; normale /* */-Kommentare werden restlos entfernt.' },
    ],
    ui: {
      'inputLabel': 'Dein CSS',
      'outputLabel': 'Minifiziertes CSS',
      'loadSample': 'Beispiel laden',
      'statsIn': 'Bytes rein',
      'statsOut': 'Bytes raus',
      'statsSaved': 'Ersparnis',
      'tooLarge': 'Eingabe zu groß — unterstützt sind bis zu 300.000 Zeichen.',
      'note': '🛡️ Bewusst konservativ: Strings und /*!-Banner werden als Platzhalter isoliert, bevor irgendein Whitespace angefasst wird; calc() behält die grammatikalisch nötigen Leerzeichen; 0% wird nie zu 0 gefaltet (in flex-basis nicht äquivalent). Keine aggressiven Merges — die Ausgabe passt beim ersten Versuch.',
    },
  },
}
