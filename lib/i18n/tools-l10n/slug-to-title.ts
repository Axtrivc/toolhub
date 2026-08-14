/**
 * slug-to-title 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const slugToTitleL10n: ToolL10n = {
  zh: {
    ui: {
      inputLabel: 'URL slug',
      outputLabel: '标题',
      note: '🔤 把 URL slug 还原成可读标题。把连字符换成空格并大写单词。',
    },
    useCases: [
      '导入旧博客时从 URL 还原标题',
      '清理从 CMS 导出的数据',
      '把机器格式的字符串转成可读名称',
    ],
    faqs: [
      { q: '能还原原本的大小写吗?', a: '不能——slug 通常已被转为小写,原始大写信息已丢失。本工具套用「标题大写」规则,大多数场景都适用,但无法还原像「iPhone」「McDonald」这样的名称。' },
    ],
  },
  es: {
    ui: {
      inputLabel: 'Slug de URL',
      outputLabel: 'Título',
      note: '🔤 Convierte slugs de URL de vuelta a títulos legibles. Reemplaza guiones por espacios y capitaliza las palabras.',
    },
    useCases: [
      'recuperar títulos desde la URL al importar artículos antiguos',
      'limpiar datos exportados de un CMS',
      'convertir cadenas con formato máquina en nombres legibles',
    ],
    faqs: [
      { q: '¿Esto recupera la capitalización original?', a: 'No — los slugs suelen pasarse a minúsculas, así que las mayúsculas originales se pierden. Esta herramienta aplica Title Case, que funciona bien en la mayoría de los casos, pero no recupera nombres como «iPhone» o «McDonald».' },
    ],
  },
  de: {
    ui: {
      inputLabel: 'URL-Slug',
      outputLabel: 'Titel',
      note: '🔤 Wandelt URL-Slugs zurück in lesbare Titel. Ersetzt Bindestriche durch Leerzeichen und schreibt Wörter groß.',
    },
    useCases: [
      'beim Import alter Beiträge Titel aus der URL zurückgewinnen',
      'aus einem CMS exportierte Daten bereinigen',
      'maschinenformatierte Zeichenketten in lesbare Namen umwandeln',
    ],
    faqs: [
      { q: 'Stellt das die ursprüngliche Groß-/Kleinschreibung wieder her?', a: 'Nein — Slugs werden meist kleingeschrieben, sodass die ursprünglichen Großbuchstaben verloren sind. Dieses Werkzeug wendet Title Case an, was in den meisten Fällen gut funktioniert, aber keine Namen wie „iPhone" oder „McDonald" zurückholt.' },
    ],
  },
}
