/**
 * srt-subtitle-shift 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = SrtSubtitleShiftClient = 自定义 texttool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const srtSubtitleShiftL10n: ToolL10n = {
  zh: {
    useCases: [
      '在线按秒偏移 SRT 字幕',
      '修复不同步的字幕',
      '免费字幕偏移调节器',
      '移除 SRT 文件的 HTML 标签',
    ],
  },
  es: {
    useCases: [
      'desplazar subtítulos SRT por segundos online',
      'arreglar subtítulos desincronizados',
      'ajustador de offset de subtítulos gratis',
      'eliminar etiquetas HTML de archivos SRT',
    ],
  },
  de: {
    useCases: [
      'SRT-Untertitel online um Sekunden verschieben',
      'nicht synchronisierte Untertitel reparieren',
      'kostenloser Untertitel-Offset-Anpasser',
      'HTML-Tags aus SRT-Datei entfernen',
    ],
  },
}
