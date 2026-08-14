/**
 * list-diff 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 texttools 自定义 ListDiffClient,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const listDiffL10n: ToolL10n = {
  zh: {
    ui: {
      'caseSensitive': '区分大小写',
      'copy': '复制',
      'inBoth': '在两者中(交集)',
      'listA': '列表 A',
      'listB': '列表 B',
      'noItems': '无项目。',
      'onlyInA': '仅在 A',
      'onlyInB': '仅在 B',
      'placeholder': '每行一项…',
      'privacyNote': '🔒 100% 在客户端——列表在本地比较。默认会折叠每个列表内的重复项。',
      'trimWhitespace': '修剪空白',
      'union': '并集(全部唯一)',
    },
    useCases: [
      '对比两份电子邮件或联系人列表',
      '找出只存在于某个文件夹或某份报表中的条目',
      '合并列表并去除重复项',
      '检查两个版本之间新增或删除了哪些内容',
    ],
    faqs: [
      { q: '「只在 A 中」「只在 B 中」「两者都有」分别是什么意思?', a: '「只在 A 中」列出第一份列表有但第二份没有的条目;「只在 B 中」正好相反;「两者都有」是交集(两份都包含的条目)。并集则把两份列表中所有不重复的条目合并在一起。这四个集合合起来就能完整描述两份列表的差异。' },
      { q: '重复项和空白怎么处理?', a: '默认会去掉每行首尾的空白,并把每个条目当作集合元素处理——所以同一份列表里的重复项会被合并。关掉「区分大小写」即可进行不区分大小写的比较,这在两份列表大小写不一致时很有用。' },
      { q: '每个结果集能单独复制吗?', a: '可以。四个结果区各有自己的「复制」按钮,只复制该集合(每行一个条目),方便你把「只在 A 中」直接粘贴到电子表格或其他工具里,无需手动清理。' },
    ],
  },
  es: {
    ui: {
      'caseSensitive': 'Distingue mayúsculas',
      'copy': 'Copiar',
      'inBoth': 'En ambas (intersección)',
      'listA': 'Lista A',
      'listB': 'Lista B',
      'noItems': 'Sin elementos.',
      'onlyInA': 'Solo en A',
      'onlyInB': 'Solo en B',
      'placeholder': 'Un elemento por línea…',
      'privacyNote': '🔒 100% en el cliente — las listas se comparan localmente. Los duplicados dentro de cada lista se colapsan por defecto.',
      'trimWhitespace': 'Recortar espacios',
      'union': 'Unión (todos únicos)',
    },
    useCases: [
      'comparar dos listas de correos o contactos',
      'encontrar elementos que solo están en una carpeta o informe',
      'combinar listas y eliminar duplicados',
      'comprobar qué se añadió o eliminó entre dos versiones',
    ],
    faqs: [
      { q: '¿Qué significan «solo en A», «solo en B» y «ambos»?', a: '«Solo en A» muestra los elementos presentes en la primera lista pero no en la segunda; «solo en B» es lo contrario; «ambos» es la intersección (elementos en ambas). La unión combina todos los elementos únicos de cualquiera de las listas. Juntos, estos cuatro conjuntos describen por completo en qué se diferencian las dos listas.' },
      { q: '¿Cómo se manejan los duplicados y los espacios?', a: 'Por defecto, se recortan los espacios al inicio y al final de cada línea, y cada elemento se trata como miembro de un conjunto, por lo que los duplicados dentro de una sola lista se colapsan. Desactiva «sensible a mayúsculas» para comparar sin distinguir mayúsculas y minúsculas, útil cuando el uso de mayúsculas es distinto entre las dos listas.' },
      { q: '¿Puedo copiar cada conjunto de resultados por separado?', a: 'Sí. Cada una de las cuatro secciones de resultados tiene su propio botón Copiar que copia solo ese conjunto (un elemento por línea), de modo que puedes pegar «solo en A» directamente en una hoja de cálculo u otra herramienta sin limpiar manualmente.' },
    ],
  },
  de: {
    ui: {
      'caseSensitive': 'Groß-/Kleinschreibung',
      'copy': 'Kopieren',
      'inBoth': 'In beiden (Schnittmenge)',
      'listA': 'Liste A',
      'listB': 'Liste B',
      'noItems': 'Keine Einträge.',
      'onlyInA': 'Nur in A',
      'onlyInB': 'Nur in B',
      'placeholder': 'Ein Eintrag pro Zeile…',
      'privacyNote': '🔒 100% clientseitig — Listen werden lokal verglichen. Duplikate innerhalb jeder Liste werden standardmäßig zusammengefasst.',
      'trimWhitespace': 'Leerzeichen trimmen',
      'union': 'Vereinigung (alle eindeutig)',
    },
    useCases: [
      'zwei E-Mail- oder Kontaktlisten vergleichen',
      'Einträge finden, die nur in einem Ordner oder Bericht stehen',
      'Listen zusammenführen und Duplikate entfernen',
      'prüfen, was zwischen zwei Versionen hinzukam oder verschwand',
    ],
    faqs: [
      { q: 'Was bedeuten „nur in A", „nur in B" und „beide"?', a: '„Nur in A" listet Einträge aus der ersten Liste, die nicht in der zweiten stehen; „nur in B" ist umgekehrt; „beide" ist die Schnittmenge (Einträge in beiden Listen). Die Vereinigungsmenge kombiniert alle eindeutigen Einträge beider Listen. Zusammen beschreiben diese vier Mengen vollständig, wie sich die Listen unterscheiden.' },
      { q: 'Wie werden Duplikate und Leerzeichen behandelt?', a: 'Standardmäßig wird jede Zeile von umgebenden Leerzeichen befreit und jeder Eintrag als Mengenelement behandelt — Duplikate innerhalb einer Liste werden also zusammengefasst. Schalte „Groß-/Kleinschreibung beachten" aus, um ohne Unterscheidung von Groß-/Kleinschreibung zu vergleichen; das hilft, wenn die Schreibweise in den beiden Listen inkonsistent ist.' },
      { q: 'Kann ich jede Ergebnismenge einzeln kopieren?', a: 'Ja. Jeder der vier Ergebnisbereiche hat einen eigenen Kopieren-Button, der nur diese Menge kopiert (ein Eintrag pro Zeile). So kannst du „nur in A" direkt in eine Tabelle oder ein anderes Werkzeug einfügen, ohne manuell aufzuräumen.' },
    ],
  },
}
