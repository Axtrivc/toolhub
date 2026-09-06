/**
 * markdown-fence-extractor 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(文本提取工具)。
 */
import type { ToolL10n } from '../tool-l10n'

export const MarkdownFenceExtractorL10n: ToolL10n = {
  zh: {
    useCases: [
      '从 ChatGPT / Claude 的长回答里一键抽出全部代码块,不再逐段手选复制',
      '处理 README 或技术文档:按语言芯片过滤,只留 shell 命令或 Python 示例',
      '批量收集教程中的命令片段,拼成可执行的安装脚本',
      'AI 生成的多文件代码,逐块复制到 IDE 里验证能否跑通',
    ],
    faqs: [
      { q: '支持哪些代码块格式?', a: '标准三反引号围栏(```lang ... ```),这是 GitHub Flavored Markdown 的代码块语法。缩进 4 空格的老式代码块被刻意忽略——它们常与列表缩进混淆,误报代价高于漏报。' },
      { q: '语言过滤是怎么匹配的?', a: '按围栏标注的语言标签做前缀匹配:输入 "py" 能命中 python 和 py3,"ts" 命中 typescript。未标注语言的裸围栏会归入"无语言"组,不参与过滤。' },
      { q: '能处理 AI 的回答吗?', a: '这正是主要场景:ChatGPT、Claude、Copilot 的回答都是 Markdown,代码以三反引号围栏给出。整段回答粘贴进来,全部代码块自动按出现顺序拆出并标注行数。' },
      { q: '文本会被上传吗?', a: '不会。提取在浏览器本地用正则完成,零网络请求——含内部代码或未公开文档的回答可以放心粘贴。' },
    ],
    ui: {
      'copyAll': '复制全部',
      'filterBy': '按语言过滤',
      'inputLabel': 'Markdown / AI 回答',
      'lines': '行',
      'noBlocks': '未找到围栏代码块。',
      'note': '🧾 适用于任何含三反引号围栏的 Markdown——ChatGPT/Claude 回答、README、文档皆可。语言芯片可过滤(如 "py" 匹配 python);刻意忽略缩进 4 空格的代码块。',
    },
  },
  es: {
    useCases: [
      'Extraer de un clic todos los bloques de código de una respuesta larga de ChatGPT / Claude, sin seleccionar a mano',
      'Procesar un README o documentación: filtra por chips de lenguaje y quédate solo con los comandos shell o los ejemplos Python',
      'Recolectar en lote los fragmentos de comandos de un tutorial y montar un script de instalación ejecutable',
      'Copiar bloque a bloque el código multi-archivo generado por IA al IDE para verificar que funciona',
    ],
    faqs: [
      { q: '¿Qué formatos de bloque admite?', a: 'Las vallas estándar de tres tildes (```lang ... ```), la sintaxis de GitHub Flavored Markdown. Los bloques antiguos indentados con 4 espacios se ignoran a propósito: se confunden con sangrías de lista y el coste de un falso positivo supera al de una omisión.' },
      { q: '¿Cómo funciona el filtro por lenguaje?', a: 'Por prefijo sobre la etiqueta de la valla: «py» coincide con python y py3; «ts» con typescript. Las vallas sin etiqueta entran en el grupo «sin lenguaje» y no pasan por el filtro.' },
      { q: '¿Sirve con respuestas de IA?', a: 'Es el caso principal: ChatGPT, Claude y Copilot responden en Markdown con código en vallas de tres tildes. Pega la respuesta entera y cada bloque aparece en orden con su número de líneas.' },
      { q: '¿Se sube el texto a algún servidor?', a: 'No. La extracción se hace localmente en el navegador con expresiones regulares, sin una sola petición de red — puedes pegar respuestas con código interno o documentos privados.' },
    ],
    ui: {
      'copyAll': 'Copiar todo',
      'filterBy': 'Filtrar idioma',
      'inputLabel': 'Markdown / respuesta de IA',
      'lines': 'líneas',
      'noBlocks': 'No se encontraron bloques de código.',
      'note': '🧾 Funciona con cualquier Markdown con vallas de tres tildes: respuestas de ChatGPT/Claude, README o documentación. Los chips de lenguaje filtran (p. ej., «py» coincide con python); los bloques indentados con 4 espacios se ignoran a propósito.',
    },
  },
  de: {
    useCases: [
      'Alle Code-Blöcke aus einer langen ChatGPT-/Claude-Antwort mit einem Klick extrahieren, statt jeden einzeln zu markieren',
      'READMEs oder Doks verarbeiten: per Sprach-Chip filtern und nur Shell-Befehle oder Python-Beispiele behalten',
      'Kommando-Snippets aus Tutorials gesammelt zu einem ausführbaren Installations-Skript zusammensetzen',
      'Von der KI generierten Multi-Datei-Code Block für Block in die IDE kopieren und testen',
    ],
    faqs: [
      { q: 'Welche Blockformate werden unterstützt?', a: 'Standard-Zäune aus drei Backticks (```lang ... ```) — die Codeblock-Syntax von GitHub Flavored Markdown. Altmodische Blöcke mit 4-Leerzeichen-Einzug werden bewusst ignoriert: Sie verwechseln sich zu leicht mit Listen-Einzügen, und Fehlalarme kosten mehr als Auslassungen.' },
      { q: 'Wie greift der Sprachfilter?', a: 'Als Präfix-Match auf das Zaun-Label: „py" trifft python und py3, „ts" trifft typescript. Zäune ohne Label landen in der Gruppe „keine Sprache" und bleiben vom Filter unberührt.' },
      { q: 'Funktioniert es mit KI-Antworten?', a: 'Genau dafür ist es gedacht: ChatGPT, Claude und Copilot antworten in Markdown mit Dreifach-Backtick-Code. Die ganze Antwort einfügen — jeder Block erscheint in Reihenfolge mit Zeilenzahl.' },
      { q: 'Wird der Text irgendwo hochgeladen?', a: 'Nein. Die Extraktion läuft lokal im Browser per Regex, ohne eine einzige Netzwerkanfrage — auch Antworten mit internem Code oder vertraulichen Doks sind sicher.' },
    ],
    ui: {
      'copyAll': 'Alle kopieren',
      'filterBy': 'Sprache filtern',
      'inputLabel': 'Markdown / KI-Antwort',
      'lines': 'Zeilen',
      'noBlocks': 'Keine Code-Blöcke gefunden.',
      'note': '🧾 Funktioniert mit jedem Markdown mit Dreifach-Backticks — ChatGPT-/Claude-Antworten, READMEs, Dokus. Die Sprach-Chips filtern (z. B. „py" trifft python); eingerückte Codeblöcke (4 Leerzeichen) werden bewusst ignoriert.',
    },
  },
}
