/**
 * yaml-to-json 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const yamlToJsonL10n: ToolL10n = {
  zh: {
    ui: {
      'clear': '清空',
      'copy': '复制',
      'inputLabel': '粘贴你的 YAML',
      'invalidYaml': '无效 YAML',
      'note': '🔒 100% 在客户端——手写的 YAML 子集解析器。支持映射、序列、内联流、引号、注释和块标量(| 与 >)。',
      'outputLabel': 'JSON 输出',
    },
    useCases: [
      '把 Docker Compose / Kubernetes 配置转成 JSON',
      '把 CI 配置喂给只接受 JSON 的工具',
      '排查 YAML 缩进问题',
      '转换 GitHub Actions 等工作流文件',
    ],
    faqs: [
      { q: '支持哪些 YAML 特性?', a: '解析器支持映射、序列(列表)、嵌套结构、内联流语法([a,b] 和 {k: v})、单双引号字符串、纯标量、数字、布尔值、null、块标量(| 和 >)以及 # 注释。多文档流(---)不会被拆分,只转换第一个文档。' },
      { q: '为什么我的 YAML 解析失败?', a: 'YAML 对缩进很敏感——Tab 和空格混用、缩进深度不一致是最常见的原因。只用空格并保持一致的缩进步长(通常为 2 个空格)。另外注意未加引号的特殊值(yes/no/on/off 会被解析成布尔值),如果想让它们是字符串,请加引号。' },
      { q: '重复键如何处理?', a: '某些 YAML 库会悄悄覆盖重复键,而本解析器会在同一映射里出现重复键时报错,因为这通常意味着真正的错误并会造成数据丢失。修正源 YAML 中的重复键后再重新转换。' },
    ],
  },
  es: {
    ui: {
      'clear': 'Limpiar',
      'copy': 'Copiar',
      'inputLabel': 'Pega tu YAML',
      'invalidYaml': 'YAML inválido',
      'note': '🔒 100% en el cliente — un parser de un subconjunto YAML hecho a mano. Admite mapeos, secuencias, flujo en línea, comillas, comentarios y escalares de bloque (| y >).',
      'outputLabel': 'Salida JSON',
    },
    useCases: [
      'convertir configuraciones de Docker Compose / Kubernetes a JSON',
      'pasar configuración de CI a herramientas que solo aceptan JSON',
      'depurar problemas de indentación de YAML',
      'transformar flujos de trabajo como los de GitHub Actions',
    ],
    faqs: [
      { q: '¿Qué características de YAML admite?', a: 'El analizador maneja mapeos, secuencias (listas), estructuras anidadas, sintaxis de flujo en línea ([a,b] y {k: v}), cadenas con comillas simples y dobles, escalares planos, números, booleanos, null, escalares de bloque (| y >) y comentarios #. Los flujos multidocumento (---) no se dividen; solo se convierte el primero.' },
      { q: '¿Por qué falló el análisis de mi YAML?', a: 'YAML es sensible a la indentación — mezclar tabuladores con espacios o una profundidad de indentación inconsistente es la causa más habitual. Usa solo espacios y mantén un paso de indentación uniforme (lo habitual son 2 espacios). Revisa también valores sin comillas que parecen tokens especiales (yes/no/on/off se vuelven booleanos): ponlos entre comillas si los necesitas como texto.' },
      { q: '¿Cómo se gestionan las claves duplicadas?', a: 'A diferencia de algunas librerías de YAML que sobrescriben los duplicados en silencio, este analizador reporta un error ante claves duplicadas en el mismo mapeo, porque casi siempre señala un error real y produce pérdida de datos. Corrige el duplicado en el YAML original y vuelve a convertir.' },
    ],
  },
  de: {
    ui: {
      'clear': 'Leeren',
      'copy': 'Kopieren',
      'inputLabel': 'Füge dein YAML ein',
      'invalidYaml': 'Ungültiges YAML',
      'note': '🔒 100% clientseitig — ein handgeschriebener Parser für eine YAML-Teilmenge. Unterstützt Mappings, Sequenzen, Inline-Flow, Anführungszeichen, Kommentare und Block-Skalare (| und >).',
      'outputLabel': 'JSON-Ausgabe',
    },
    useCases: [
      'Docker-Compose-/Kubernetes-Konfigurationen in JSON umwandeln',
      'CI-Konfiguration an Werkzeuge übergeben, die nur JSON akzeptieren',
      'YAML-Einrückungsprobleme debuggen',
      'Workflow-Dateien wie GitHub Actions umwandeln',
    ],
    faqs: [
      { q: 'Welche YAML-Funktionen werden unterstützt?', a: 'Der Parser verarbeitet Mappings, Sequenzen (Listen), verschachtelte Strukturen, Inline-Flow-Syntax ([a,b] und {k: v}), einfache und doppelte Anführungszeichen, Plain Scalars, Zahlen, Booleans, null, Block-Scalars (| und >) sowie #-Kommentare. Streams mit mehreren Dokumenten (---) werden nicht aufgeteilt; nur das erste wird konvertiert.' },
      { q: 'Warum schlug das Parsen meines YAML fehl?', a: 'YAML ist einrückungsempfindlich — Tabulatoren gemischt mit Leerzeichen oder inkonsistente Einrückungstiefe sind die häufigste Ursache. Verwende nur Leerzeichen und halte die Einrückungsschritte einheitlich (üblich sind 2 Leerzeichen). Achte außerdem auf Werte ohne Anführungszeichen, die wie spezielle Tokens wirken (yes/no/on/off werden zu Booleans) — setze sie in Anführungszeichen, wenn du Strings brauchst.' },
      { q: 'Wie werden doppelte Schlüssel behandelt?', a: 'Anders als manche YAML-Bibliotheken, die Duplikate stillschweigend überschreiben, meldet dieser Parser einen Fehler bei doppelten Schlüsseln im selben Mapping, weil das fast immer auf einen echten Fehler und Datenverlust hinweist. Korrigiere das Duplikat im Quell-YAML und wandle erneut um.' },
    ],
  },
}
