/**
 * find-and-replace 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const findAndReplaceL10n: ToolL10n = {
  zh: {
    useCases: [
      '在长文档里批量替换某个术语',
      '把 [NAME] 等占位符替换成真实值',
      '统一不一致的拼写(color → colour)',
      '分享前抹掉敏感数据',
    ],
    faqs: [
      { q: '搜索区分大小写吗?', a: '区分——"Cat" 和 "cat" 是不同的。要做不区分大小写的替换,请先把整段文本统一成一种大小写,再替换。' },
      { q: '能用正则表达式吗?', a: '这个基础版本只做字面匹配。正则支持可能会在后续版本中加入。' },
    ],
  },
  es: {
    useCases: [
      'reemplazar un término a lo largo de un documento largo',
      'sustituir marcadores como [NAME] por el valor real',
      'unificar grafías inconsistentes (color → colour)',
      'censurar datos sensibles antes de compartir el texto',
    ],
    faqs: [
      { q: '¿La búsqueda distingue mayúsculas y minúsculas?', a: 'Sí — «Cat» y «cat» son distintas. Para un reemplazo sin distinción, pasa todo el texto a un mismo formato antes de reemplazar.' },
      { q: '¿Puedo usar expresiones regulares?', a: 'Esta versión básica solo coincide con texto literal. El soporte de regex podría llegar en una próxima actualización.' },
    ],
  },
  de: {
    useCases: [
      'einen Begriff in einem langen Dokument durchgängig ersetzen',
      'Platzhalter wie [NAME] durch echte Werte tauschen',
      'inkonsistente Schreibweisen vereinheitlichen (color → colour)',
      'sensible Daten vor dem Teilen schwärzen',
    ],
    faqs: [
      { q: 'Wird bei der Suche Groß-/Kleinschreibung unterschieden?', a: 'Ja — „Cat" und „cat" sind verschieden. Für ein case-insensitives Ersetzen wandle zuerst den gesamten Text in eine Schreibweise um und ersetze dann.' },
      { q: 'Kann ich reguläre Ausdrücke verwenden?', a: 'Diese Grundversion gleicht nur wörtlichen Text ab. Regex-Support könnte in einem späteren Update kommen.' },
    ],
  },
}
