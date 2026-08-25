/**
 * markdown-toc-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const MarkdownTocGeneratorL10n: ToolL10n = {
  zh: {
    useCases: ['为长文 README 生成目录', '给 Markdown 文档加可点击锚点', '按层级深度裁剪目录', '生成与 GitHub 一致的锚点链接'],
    faqs: [
      { q: '目录为什么从 H2 开始?', a: '一个文档只有一个 H1——即页面标题——所以章节目录从 H2 起步。深度选择器(H2-H6)控制列表嵌套多深;超出所选层级的标题会被跳过。' },
      { q: '锚点和 GitHub 完全一致吗?', a: '一致——slug 遵循 GitHub 算法:转小写、空格变连字符、删除标点,重复标题加 -1、-2 后缀。这样生成的链接在 GitHub 以及多数照搬该行为的静态站生成器上都能跳到正确标题。' },
      { q: '代码块里的标题会被忽略吗?', a: '会——三反引号围栏内的"标题"会被跳过,因为渲染后它们是代码示例而非真实标题。提取器会逐行跟踪整个文档的围栏开关状态。' },
      { q: '标题里有链接或加粗怎么办?', a: '生成 slug 前会先剥掉行内 Markdown:[text](url) 只取其文字,加粗/斜体标记会被移除。因此目录显示的是纯标题文本,与渲染后的锚点外观一致。' },
    ],
    ui: {
      'depthLabel': '最大标题层级',
      'inputLabel': '你的 Markdown',
      'loadSample': '加载示例',
      'noHeadings': '未找到所选层级以内的 H2-H6 标题。',
      'note': '📑 锚点遵循 GitHub 算法:小写、空格转连字符、去标点,重复标题加 -1/-2 后缀——内链能真正落到正确标题。',
      'outputLabel': '目录',
    },
  },
  es: {
    useCases: ['generar índices para README largos', 'añadir anclas clicables a un documento', 'recortar el índice por nivel de profundidad', 'crear enlaces ancla idénticos a los de GitHub'],
    faqs: [
      { q: '¿Por qué el índice empieza en H2?', a: 'Un documento tiene un solo H1 —el título de la página—, así que el índice de secciones arranca en H2. El selector de profundidad (H2-H6) controla cuánto anida la lista; los títulos por debajo del nivel elegido se omiten.' },
      { q: '¿Las anclas coinciden con GitHub?', a: 'Sí: los slugs siguen el algoritmo de GitHub —minúsculas, espacios a guiones, signos eliminados y títulos duplicados con sufijo -1, -2—. Los enlaces así construidos aterrizan en el título correcto en GitHub y en la mayoría de generadores que copian su comportamiento.' },
      { q: '¿Se ignoran los títulos dentro de bloques de código?', a: 'Sí: los «títulos» dentro de vallas de triple acento se saltan, porque al renderizar son muestras de código, no secciones reales. El extractor sigue línea a línea el estado de las vallas en todo el documento.' },
      { q: '¿Y los títulos con enlaces o negritas?', a: 'Antes de generar el slug se elimina el Markdown en línea: [texto](url) aporta solo su texto y los marcadores de negrita/cursiva se quitan. El índice muestra el texto plano del título, igual que aparece el ancla renderizada.' },
    ],
    ui: {
      'depthLabel': 'Nivel máximo de título',
      'inputLabel': 'Tu Markdown',
      'loadSample': 'Cargar ejemplo',
      'noHeadings': 'No hay títulos H2-H6 por encima del nivel elegido.',
      'note': '📑 Los slugs siguen el algoritmo de GitHub: minúsculas, espacios a guiones, sin puntuación y sufijos -1/-2 para duplicados.',
      'outputLabel': 'Índice',
    },
  },
  de: {
    useCases: ['Inhaltsverzeichnisse für lange READMEs erzeugen', 'anklickbare Anker in Dokumente einfügen', 'das Verzeichnis nach Tiefe stutzen', 'Anker-Links baugleich mit GitHub erstellen'],
    faqs: [
      { q: 'Warum beginnt das Verzeichnis bei H2?', a: 'Ein Dokument hat genau ein H1 — den Seitentitel —, deshalb startet das Abschnittsverzeichnis bei H2. Der Tiefenwähler (H2-H6) steuert, wie tief die Liste schachtelt; Überschriften unterhalb der gewählten Ebene werden übersprungen.' },
      { q: 'Stimmen die Anker exakt mit GitHub überein?', a: 'Ja — die Slugs folgen GitHubs Algorithmus: Kleinbuchstaben, Leerzeichen zu Bindestrichen, Satzzeichen entfernt, doppelte Überschriften mit -1/-2-Suffix. So gebaute Links landen auf GitHub und den meisten Static-Site-Generatoren, die das Verhalten kopieren, auf der richtigen Überschrift.' },
      { q: 'Werden Überschriften in Code-Blöcken ignoriert?', a: 'Ja — „Überschriften“ in Triple-Backtick-Zäunen werden übersprungen, denn gerendert sind sie Codebeispiele, keine echten Abschnitte. Der Extraktor verfolgt den Zaun-Zustand Zeile für Zeile im ganzen Dokument.' },
      { q: 'Was ist mit Überschriften voller Links oder Fettdruck?', a: 'Vor dem Slugging wird Inline-Markdown entfernt: [text](url) trägt nur seinen Text bei, Fett/Kursiv-Marker fliegen raus. Das Verzeichnis zeigt daher den Klartext der Überschrift — so, wie der gerenderte Anker erscheint.' },
    ],
    ui: {
      'depthLabel': 'Maximale Überschriftenebene',
      'inputLabel': 'Dein Markdown',
      'loadSample': 'Beispiel laden',
      'noHeadings': 'Keine H2-H6-Überschriften oberhalb der gewählten Ebene.',
      'note': '📑 Slugs folgen dem GitHub-Algorithmus: Kleinschreibung, Leerzeichen zu Strichen, Duplikate erhalten -1/-2 — Anker landen richtig.',
      'outputLabel': 'Inhaltsverzeichnis',
    },
  },
}
