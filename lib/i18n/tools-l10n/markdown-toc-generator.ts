/**
 * markdown-toc-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const MarkdownTocGeneratorL10n: ToolL10n = {

  es: {
    useCases: ['generar índices para README largos', 'añadir anclas clicables a un documento', 'recortar el índice por nivel de profundidad', 'crear enlaces ancla idénticos a los de GitHub'],
    faqs: [
      { q: '¿Por qué el índice empieza en H2?', a: 'Un documento tiene un solo H1 —el título de la página—, así que el índice de secciones arranca en H2. El selector de profundidad (H2-H6) controla cuánto anida la lista; los títulos por debajo del nivel elegido se omiten.' },
      { q: '¿Las anclas coinciden con GitHub?', a: 'Sí: los slugs siguen el algoritmo de GitHub —minúsculas, espacios a guiones, puntuación eliminada y títulos duplicados con sufijo -1, -2—. Los enlaces así construidos aterrizan en el título correcto en GitHub y en la mayoría de generadores que copian su comportamiento.' },
      { q: '¿Se ignoran los títulos dentro de bloques de código?', a: 'Sí: los «títulos» dentro de vallas de tres comillas invertidas se omiten, porque al renderizar son muestras de código, no secciones reales. El extractor sigue línea a línea el estado de las vallas en todo el documento.' },
      { q: '¿Y los títulos con enlaces o negritas?', a: 'Antes de generar el slug se elimina el Markdown en línea: [texto](url) aporta solo su texto y los marcadores de negrita/cursiva se quitan. El índice muestra el texto plano del título, igual que aparece el ancla renderizada.' },
    ],
    ui: {
      'depthLabel': 'Nivel máximo de título',
      'inputLabel': 'Tu Markdown',
      'loadSample': 'Cargar ejemplo',
      'noHeadings': 'No hay títulos H2-H6 por encima del nivel elegido.',
      'note': '📑 Los slugs siguen el algoritmo de GitHub: minúsculas, espacios a guiones, sin puntuación y sufijos -1/-2 para duplicados — los enlaces internos aterrizan en el título correcto.',
      'outputLabel': 'Índice',
    },
  },
  de: {
    useCases: ['Inhaltsverzeichnisse für lange READMEs erzeugen', 'anklickbare Anker in Dokumente einfügen', 'das Verzeichnis nach Tiefe stutzen', 'GitHub-kompatible Anker-Links erstellen'],
    faqs: [
      { q: 'Warum beginnt das Verzeichnis bei H2?', a: 'Ein Dokument hat genau ein H1 — den Seitentitel —, deshalb startet das Abschnittsverzeichnis bei H2. Der Tiefenwähler (H2-H6) steuert, wie tief die Liste schachtelt; Überschriften unterhalb der gewählten Ebene werden übersprungen.' },
      { q: 'Stimmen die Anker exakt mit GitHub überein?', a: 'Ja — die Slugs folgen GitHubs Algorithmus: Kleinbuchstaben, Leerzeichen zu Bindestrichen, Satzzeichen entfernt, doppelte Überschriften mit -1/-2-Suffix. So gebaute Links springen auf GitHub und in den meisten Static-Site-Generatoren, die das Verhalten kopieren, zur richtigen Überschrift.' },
      { q: 'Werden Überschriften in Code-Blöcken ignoriert?', a: 'Ja — „Überschriften“ in Codeblöcken mit dreifachen Backticks werden übersprungen, denn gerendert sind sie Codebeispiele, keine echten Abschnitte. Der Extraktor verfolgt den Zustand dieser Zäune Zeile für Zeile im ganzen Dokument.' },
      { q: 'Was ist mit Überschriften voller Links oder Fettdruck?', a: 'Vor dem Slugging wird Inline-Markdown entfernt: [text](url) trägt nur seinen Text bei, Fett- und Kursiv-Marker werden entfernt. Das Verzeichnis zeigt daher den Klartext der Überschrift — so, wie der gerenderte Anker erscheint.' },
    ],
    ui: {
      'depthLabel': 'Maximale Überschriftenebene',
      'inputLabel': 'Dein Markdown',
      'loadSample': 'Beispiel laden',
      'noHeadings': 'Keine H2-H6-Überschriften oberhalb der gewählten Ebene.',
      'note': '📑 Slugs folgen dem GitHub-Algorithmus: Kleinschreibung, Leerzeichen zu Bindestrichen, Satzzeichen entfernt, Duplikate erhalten -1/-2 — Anker landen auf der richtigen Überschrift.',
      'outputLabel': 'Inhaltsverzeichnis',
    },
  },
}
