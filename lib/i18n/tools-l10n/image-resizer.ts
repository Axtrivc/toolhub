/**
 * image-resizer 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = ImageResizerClient = 自定义 webtool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const imageResizerL10n: ToolL10n = {
  zh: {
    useCases: [
      '在线按精确像素缩放图片',
      '锁定宽高比的图片缩放器',
      '压缩图片到目标大小',
      '免上传缩放照片',
    ],
  },
  es: {
    useCases: [
      'redimensionar imagen a píxeles exactos online',
      'redimensionador de imagen con bloqueo de relación de aspecto',
      'comprimir imagen a un tamaño objetivo',
      'redimensionar foto sin subir',
    ],
  },
  de: {
    useCases: [
      'Bild online auf exakte Pixel skalieren',
      'Bildskalierer mit festem Seitenverhältnis',
      'Bild auf Zielgröße komprimieren',
      'Foto ohne Upload skalieren',
    ],
  },
}
