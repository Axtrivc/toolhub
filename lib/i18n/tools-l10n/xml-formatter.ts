/**
 * xml-formatter 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const XmlFormatterL10n: ToolL10n = {
  zh: {
    ui: {
      'beautify': '美化',
      'indentLabel': '缩进',
      'inputLabel': '你的 XML',
      'loadSample': '加载示例',
      'minify': '压缩',
      'note': '📄 解析使用浏览器自带 XML 引擎——支持命名空间、符合规范。美化时元素间的纯空白文本会被丢弃。',
      'outputLabel': '结果',
    },
  },
  es: {
    ui: {
      'beautify': 'Embellecer',
      'indentLabel': 'Sangría',
      'inputLabel': 'Tu XML',
      'loadSample': 'Cargar ejemplo',
      'minify': 'Minificar',
      'note': '📄 El análisis usa el motor XML del navegador — consciente de espacios de nombres. El texto de solo espacios se descarta al embellecer.',
      'outputLabel': 'Resultado',
    },
  },
  de: {
    ui: {
      'beautify': 'Formatieren',
      'indentLabel': 'Einrückung',
      'inputLabel': 'Dein XML',
      'loadSample': 'Beispiel laden',
      'minify': 'Minimieren',
      'note': '📄 Das Parsen nutzt die XML-Engine des Browsers — namespace-fähig und spezifikationstreu. Rein_whitespace Text wird beim Formatieren verworfen.',
      'outputLabel': 'Ergebnis',
    },
  },
}
