/**
 * find-and-replace 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const findAndReplaceL10n: ToolL10n = {
  zh: {
    ui: {
      inputLabel: '你的文本',
      outputLabel: '结果',
      placeholder: '输入或粘贴文本...',
      resultPlaceholder: '结果将显示在这里...',
      findLabel: '查找',
      replaceLabel: '替换为',
      caseSensitive: '区分大小写',
      regexLabel: '正则表达式',
      invalidRegex: '⚠️ 正则表达式无效——请检查模式语法',
      clear: '清空',
      note: '🔍 替换所有匹配。勾选「正则表达式」可用模式匹配(如 \\d+),替换串支持 $1 反向引用。默认不区分大小写,勾选「区分大小写」后区分。',
    },
    useCases: [
      '在长文档里批量替换某个术语',
      '把 [NAME] 等占位符替换成真实值',
      '统一不一致的拼写(color → colour)',
      '分享前抹掉敏感数据',
    ],
    faqs: [
      { q: '搜索区分大小写吗?', a: '默认不区分——"Cat" 会匹配 "cat"。勾选「区分大小写」后,只有大小写完全一致才算匹配。' },
      { q: '能用正则表达式吗?', a: '能。勾选「正则表达式」后,查找框按正则模式匹配(如 \\d+、[a-z]+),替换串可用 $1、$& 等反向引用;模式非法时会显示友好提示而不是报错。' },
    ],
  },
  es: {
    ui: {
      inputLabel: 'Tu texto',
      outputLabel: 'Resultado',
      placeholder: 'Escribe o pega texto...',
      resultPlaceholder: 'El resultado aparecerá aquí...',
      findLabel: 'Buscar',
      replaceLabel: 'Reemplazar con',
      caseSensitive: 'Distinguir mayúsculas',
      regexLabel: 'Expresión regular',
      invalidRegex: '⚠️ Expresión regular no válida — revisa la sintaxis del patrón',
      clear: 'Limpiar',
      note: '🔍 Reemplaza todas las coincidencias. Activa «Expresión regular» para usar patrones (p. ej. \\d+); $1 funciona en el reemplazo. Por defecto no distingue mayúsculas; marca «Distinguir mayúsculas» para distinguirlas.',
    },
    useCases: [
      'reemplazar un término a lo largo de un documento largo',
      'sustituir marcadores como [NAME] por el valor real',
      'unificar grafías inconsistentes (color → colour)',
      'censurar datos sensibles antes de compartir el texto',
    ],
    faqs: [
      { q: '¿La búsqueda distingue mayúsculas y minúsculas?', a: 'Por defecto no — «Cat» coincide con «cat». Activa «Distinguir mayúsculas» para que solo coincidan las coincidencias exactas.' },
      { q: '¿Puedo usar expresiones regulares?', a: 'Sí. Con «Expresión regular» activado, el campo de búsqueda coincide por patrón (p. ej. \\d+, [a-z]+) y el reemplazo admite referencias como $1 o $&; un patrón no válido muestra un aviso amable en lugar de un error.' },
    ],
  },
  de: {
    ui: {
      inputLabel: 'Dein Text',
      outputLabel: 'Ergebnis',
      placeholder: 'Text eingeben oder einfügen...',
      resultPlaceholder: 'Ergebnis erscheint hier...',
      findLabel: 'Suchen',
      replaceLabel: 'Ersetzen mit',
      caseSensitive: 'Groß-/Kleinschreibung beachten',
      regexLabel: 'Regulärer Ausdruck',
      invalidRegex: '⚠️ Ungültiger regulärer Ausdruck — prüfe die Mustersyntax',
      clear: 'Leeren',
      note: '🔍 Ersetzt jedes Vorkommen. Aktiviere „Regulärer Ausdruck“ für Muster (z. B. \\d+); $1-Rückverweise funktionieren in der Ersetzung. Standardmäßig wird die Groß-/Kleinschreibung ignoriert; aktiviere die Option, um sie zu beachten.',
    },
    useCases: [
      'einen Begriff in einem langen Dokument durchgängig ersetzen',
      'Platzhalter wie [NAME] durch echte Werte tauschen',
      'inkonsistente Schreibweisen vereinheitlichen (color → colour)',
      'sensible Daten vor dem Teilen schwärzen',
    ],
    faqs: [
      { q: 'Wird bei der Suche Groß-/Kleinschreibung unterschieden?', a: 'Standardmäßig nein — „Cat" matcht „cat". Aktiviere „Groß-/Kleinschreibung beachten", damit nur exakte Schreibweisen treffen.' },
      { q: 'Kann ich reguläre Ausdrücke verwenden?', a: 'Ja. Mit aktiviertem „Regulärer Ausdruck" matcht das Suchfeld nach Muster (z. B. \\d+, [a-z]+), und die Ersetzung unterstützt Rückverweise wie $1 oder $&; ein ungültiges Muster zeigt einen freundlichen Hinweis statt eines Fehlers.' },
    ],
  },
}
