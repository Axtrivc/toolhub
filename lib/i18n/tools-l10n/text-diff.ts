/**
 * text-diff 本地化 bundle —— zh / es / de
 * 覆盖:ui + faqs + useCases(交互客户端为 batch 文本工具)
 */
import type { ToolL10n } from '../tool-l10n'

export const textDiffL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: 'el rápido zorro marrón ||| el lento zorro marrón',
      tooLongNote: '⚠️ Estos textos son demasiado largos para compararlos aquí — mantén cada lado por debajo de unas 3.000 palabras (o 20.000 caracteres).',
      inputLabel: 'Formato: texto1 ||| texto2',
      outputLabel: 'Comparación',
      note: '🔍 Compara dos textos palabra por palabra. Separa con " ||| ". Las líneas con - son originales, las con + son cambios.',
    },
    useCases: [
      'comparar dos versiones de un documento',
      'revisar los cambios en una corrección',
      'verificar ediciones de texto',
      'rastrear qué cambió entre borradores',
    ],
    faqs: [
      { q: '¿Es un diff por caracteres o por palabras?', a: 'Por palabras — divide por espacios y compara palabra a palabra. Suele ser lo que se quiere para prosa. Los diffs por caracteres son mejores para código.' },
      { q: '¿El texto se sube a algún servidor?', a: 'No. La comparación ocurre en tu navegador y ninguno de los dos textos sale de tu dispositivo. Por eso puedes comparar con tranquilidad borradores de contratos o documentación interna.' },
      { q: '¿Cómo leo los + y - del resultado?', a: 'Las líneas con - son palabras exclusivas del primer texto; las que llevan + son las añadidas o cambiadas en el segundo. Lo no marcado coincide en ambos. Leyéndolo de arriba abajo reconstruyes el camino del texto 1 al texto 2.' },
      { q: '¿Sirve para código o documentos largos?', a: 'Se rechaza cada lado por encima de unas 3.000 palabras (20.000 caracteres) para que el navegador vaya fluido. Al ser un diff por palabras, va perfecto para prosa, contratos y artículos; para código línea a línea usa git diff o un comparador de líneas.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'der schnelle braune fuchs ||| der langsame braune fuchs',
      tooLongNote: '⚠️ Diese Texte sind zu lang, um sie hier zu vergleichen — halte jede Seite unter etwa 3.000 Wörtern (oder 20.000 Zeichen).',
      inputLabel: 'Format: Text1 ||| Text2',
      outputLabel: 'Vergleich',
      note: '🔍 Vergleicht zwei Texte Wort für Wort. Trenne mit " ||| ". Zeilen mit - sind Original, mit + sind Änderungen.',
    },
    useCases: [
      'zwei Versionen eines Dokuments vergleichen',
      'Änderungen beim Korrekturlesen prüfen',
      'Textbearbeitungen nachvollziehen',
      'feststellen, was sich zwischen Entwürfen geändert hat',
    ],
    faqs: [
      { q: 'Ist das ein Diff auf Zeichen- oder auf Wortebene?', a: 'Auf Wortebene — wird an Leerzeichen getrennt und Wort für Wort verglichen. Für Prosatext ist das meist das Gewünschte. Zeichenbasierte Diffs sind für Code besser.' },
      { q: 'Wird der Text an einen Server geschickt?', a: 'Nein. Der Vergleich läuft im Browser; keiner der beiden Texte verlässt dein Gerät. Deshalb lassen sich auch Vertragsentwürfe oder interne Dokumente bedenkenlos vergleichen.' },
      { q: 'Wie lese ich die + und - im Ergebnis?', a: 'Zeilen mit - sind Wörter nur im ersten Text, + markiert, was im zweiten hinzugefügt oder geändert wurde. Unmarkiertes stimmt in beiden überein. Von oben nach unten gelesen, ergibt sich der Weg von Text 1 zu Text 2.' },
      { q: 'Eignet es sich für Code oder lange Dokumente?', a: 'Pro Seite werden etwa 3.000 Wörter (20.000 Zeichen) akzeptiert, damit der Browser flüssig bleibt. Als Wort-Diff ist es ideal für Prosa, Verträge und Artikel; für zeilenweise Code-Unterschiede nimm git diff oder einen Zeilen-Diff.' },
    ],
  },
}
