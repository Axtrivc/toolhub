/**
 * reverse-text 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const reverseTextL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: 'Hello World 你好',
      inputLabel: '你的文本',
      outputLabel: '反转结果',
      note: '🔁 反转所有字符。ZWJ 组合 emoji(家庭、旗帜)与组合变音符可能被拆开。适合谜题和密码。',
    },
    useCases: [
      '解谜和文字游戏(破译倒序信息)',
      '制作回文或对称设计',
      '测试处理字符串的代码',
      '反转邮箱地址以防基础爬虫抓取',
    ],
    faqs: [
      { q: '为什么 emoji 有时会出错?', a: '部分 emoji(家庭、旗帜)由多个码位组合而成。本工具使用字形簇感知的分割方式,大多数 emoji 能正确反转,但复杂的组合 emoji 仍可能被拆开。' },
    ],
  },
  es: {
    ui: {
      defaultInput: 'hola mundo',
      inputLabel: 'Tu texto',
      outputLabel: 'Invertido',
      note: '🔁 Invierte todos los caracteres. Los emojis combinados (ZWJ, banderas) y los diacríticos combinantes pueden separarse. Útil para acertijos y cifrados.',
    },
    useCases: [
      'acertijos y juegos de palabras (descifrar mensajes invertidos)',
      'crear ambigramas o diseños simétricos',
      'probar código que procesa cadenas de texto',
      'invertir correos para despistar a raspadores básicos',
    ],
    faqs: [
      { q: '¿Por qué a veces se rompen los emojis?', a: 'Algunos emojis (familias, banderas) se componen de varios puntos de código. Esta herramienta usa una división consciente de grafemas, de modo que la mayoría de los emojis se invierten correctamente, aunque los emojis compuestos complejos pueden separarse.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'hallo welt',
      inputLabel: 'Dein Text',
      outputLabel: 'Umgekehrt',
      note: '🔁 Kehrt alle Zeichen um. Kombinierte Emojis (ZWJ, Flaggen) und kombinierende diakritische Zeichen können auseinanderfallen. Lustig für Rätsel und Chiffren.',
    },
    useCases: [
      'Rätsel und Wortspiele (umgekehrte Nachrichten entschlüsseln)',
      'Ambigramme oder symmetrische Designs erstellen',
      'Code testen, der Zeichenketten verarbeitet',
      'E-Mail-Adressen umkehren, um einfache Scraper zu verwirren',
    ],
    faqs: [
      { q: 'Warum gehen Emojis manchmal kaputt?', a: 'Einige Emojis (Familien, Flaggen) bestehen aus mehreren Codepunkten. Dieses Werkzeug nutzt graphembewusste Aufteilung, sodass sich die meisten Emojis korrekt umkehren lassen, komplex zusammengesetzte Emojis können jedoch auseinanderfallen.' },
    ],
  },
}
