/**
 * lowercase-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const lowercaseConverterL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: 'HELLO WORLD 你好世界',
      inputLabel: '你的文本',
      outputLabel: '小写',
      placeholder: '输入或粘贴文本…',
      note: '🔡 把每个字母转为小写。适合邮箱、网址和代码。',
    },
    useCases: [
      '规范邮箱地址、URL 与 slug 用小写',
      '编写程序变量(camelCase、snake_case)',
      '整理标签(hashtag),阅读更清爽',
      '日常聊天、非正式输入用小写',
    ],
    faqs: [
      { q: '转小写会影响我的数据吗?', a: '不会——数字、符号和标点都不受影响,只有字母会改变。对于有大小写之分的字母,这种转换是无损的。' },
    ],
  },
  es: {
    ui: {
      defaultInput: 'HOLA MUNDO',
      inputLabel: 'Tu texto',
      outputLabel: 'minúsculas',
      placeholder: 'Escribe o pega texto…',
      note: '🔡 Convierte cada letra a minúsculas. Útil para correos, URLs y código.',
    },
    useCases: [
      'normalizar direcciones de correo, URL y slugs en minúsculas',
      'escribir variables de programa (camelCase, snake_case)',
      'ordenar hashtags para una lectura más limpia',
      'escribir mensajes informales en minúsculas',
    ],
    faqs: [
      { q: '¿Pasar a minúsculas afecta a mis datos?', a: 'No — los números, los símbolos y los signos de puntuación no se ven afectados. Solo cambian las letras. La conversión es sin pérdidas para las letras que tienen mayúscula y minúscula.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'HALLO WELT',
      inputLabel: 'Dein Text',
      outputLabel: 'kleinbuchstaben',
      placeholder: 'Text eingeben oder einfügen…',
      note: '🔡 Wandelt jeden Buchstaben in Kleinbuchstaben um. Nützlich für E-Mails, URLs und Code.',
    },
    useCases: [
      'E-Mail-Adressen, URLs und Slugs kleinschreiben',
      'Programmvariablen schreiben (camelCase, snake_case)',
      'Hashtags aufräumen für sauberere Lesbarkeit',
      'informelle Nachrichten in Kleinbuchstaben verfassen',
    ],
    faqs: [
      { q: 'Beeinträchtigt die Kleinschreibung meine Daten?', a: 'Nein — Zahlen, Symbole und Satzzeichen bleiben unberührt. Nur Buchstaben ändern sich. Die Umwandlung ist verlustfrei für alle Buchstaben, die Groß-/Kleinschreibung kennen.' },
    ],
  },
}
