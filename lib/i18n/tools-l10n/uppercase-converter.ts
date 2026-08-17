/**
 * uppercase-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const uppercaseConverterL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: 'hello world 你好世界',
      inputLabel: '你的文本',
      outputLabel: '大写',
      placeholder: '输入或粘贴文本…',
      note: '🔤 把每个字母转为大写。适合标题、表头和强调。',
    },
    useCases: [
      '为标题或设计强调使用大写',
      '书写首字母缩略词(如 NASA、HTML)',
      '制作需要高辨识度的警示标签',
      '格式化产品编号或序列号',
    ],
    faqs: [
      { q: '非英文文本也能用吗?', a: '能。本工具使用 Unicode 感知的转换,所以像 café → CAFÉ 这样带音标的字母,以及希腊字母、西里尔字母等都能正确转换。' },
    ],
  },
  es: {
    ui: {
      defaultInput: 'hola mundo',
      inputLabel: 'Tu texto',
      outputLabel: 'MAYÚSCULAS',
      placeholder: 'Escribe o pega texto…',
      note: '🔤 Convierte cada letra a mayúsculas. Útil para títulos, encabezados y énfasis.',
    },
    useCases: [
      'usar mayúsculas para títulos o diseño',
      'escribir acrónimos (NASA, HTML)',
      'crear etiquetas de aviso de alta visibilidad',
      'formatear códigos de producto o números de serie',
    ],
    faqs: [
      { q: '¿Funciona con texto que no es inglés?', a: 'Sí. La herramienta usa una conversión con conocimiento de Unicode, de modo que letras acentuadas como café → CAFÉ y letras griegas o cirílicas también se convierten correctamente.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'hallo welt',
      inputLabel: 'Dein Text',
      outputLabel: 'GROSSBUCHSTABEN',
      placeholder: 'Text eingeben oder einfügen…',
      note: '🔤 Wandelt jeden Buchstaben in Großbuchstaben um. Nützlich für Titel, Überschriften und Hervorhebungen.',
    },
    useCases: [
      'Großbuchstaben für Titel oder Design einsetzen',
      'Akronyme schreiben (NASA, HTML)',
      'hocheintscheidbare Warnschilder erstellen',
      'Produktcodes oder Seriennummern formatieren',
    ],
    faqs: [
      { q: 'Funktioniert das mit nicht-englischem Text?', a: 'Ja. Das Werkzeug nutzt Unicode-bewusste Umwandlung, sodass akzentuierte Buchstaben wie café → CAFÉ sowie griechische und kyrillische Buchstaben korrekt umgewandelt werden.' },
    ],
  },
}
