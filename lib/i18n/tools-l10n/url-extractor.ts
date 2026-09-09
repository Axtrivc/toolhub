/**
 * url-extractor 本地化 bundle —— zh / es / de
 * 覆盖:ui + faqs + useCases(2026-09 业务级增强:静态资源过滤/唯一主域名聚合)
 */
import type { ToolL10n } from '../tool-l10n'

export const urlExtractorL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: '访问 https://example.com 或 http://test.org/page?q=1 了解更多！',
      'noUrlsFound': '未找到 URL',
      'clear': '清空',
      'placeholder': '粘贴包含网址的文本…',
      'resultPlaceholder': '结果将显示在这里…',
      'inputLabel': '含网址的文本',
      'outputLabel': '提取出的网址',
      'viewLabel': '展示模式',
      'viewUrls': '完整 URL',
      'viewDomains': '唯一主域名',
      'filterAssets': '过滤静态资源(图片/CSS/JS/字体)',
      'foundN': '{n} 个唯一',
      'domainsN': '{n} 个唯一域名',
      'assetsN': '已隐藏 {n} 个静态资源',
      'note': '🔗 从任意文本中提取所有网址。自动去重、剥离句尾标点;可隐藏图片/CSS/JS/字体等静态资源,也可按唯一主域名聚合展示。',
    },
    useCases: [
      '从文章或邮件中抓取全部链接',
      '基于内容建立链接清单',
      '清理凌乱的复制粘贴 URL',
      '审计文本中的外链',
    ],
    faqs: [
      { q: '为什么抓不到没有 http 的「example.com」?', a: '本工具只抓取以 http:// 或 https:// 开头的 URL。没有协议的裸域名可能被误判成文件名或其他文本。如果想找裸域名,需要更激进的匹配规则。' },
      { q: '带中文或空格的网址能抓全吗?', a: '若 URL 已百分号编码(如 %E4%BD%A0%E5%A5%BD),会完整抓出;未编码的裸中文或空格不符合 URL 语法,匹配会在那里截断。分享链接前先确认已正确编码。' },
      { q: '一次能处理多少文本?', a: '正则提取在浏览器里处理 10 万字符级的文本没问题;几 MB 的文本建议分段粘贴,避免界面卡顿。结果自动去重并按出现顺序排列。' },
      { q: '提取后能批量验证链接有效性吗?', a: '本工具只做提取,不访问网络。验证需要逐个发请求(链接检查器或爬虫);把去重后的清单直接复制过去即可。' },
    ],
  },
  es: {
    ui: {
      defaultInput: 'Visita https://example.com o http://test.org/page?q=1 hoy!',
      'noUrlsFound': 'No se encontraron URLs',
      'clear': 'Limpiar',
      'placeholder': 'Pega texto con URLs…',
      'resultPlaceholder': 'El resultado aparecerá aquí…',
      'inputLabel': 'Texto con URLs',
      'outputLabel': 'URLs extraídas',
      'viewLabel': 'Modo de vista',
      'viewUrls': 'URLs completas',
      'viewDomains': 'Dominios únicos',
      'filterAssets': 'Filtrar recursos estáticos (imágenes/CSS/JS/fuentes)',
      'foundN': '{n} únicas',
      'domainsN': '{n} dominios únicos',
      'assetsN': '{n} recursos ocultos',
      'note': '🔗 Extrae todas las URLs de cualquier texto. Deduplica, limpia la puntuación final, puede ocultar recursos estáticos (imágenes/CSS/JS/fuentes) y agrupar los resultados por dominio único.',
    },
    useCases: [
      'extraer todos los enlaces de un artículo o correo',
      'crear un inventario de enlaces a partir de contenido',
      'limpiar URLs copiadas y pegadas de forma desordenada',
      'auditar los enlaces salientes de un texto',
    ],
    faqs: [
      { q: '¿Por qué no captura «example.com» sin http?', a: 'Esta herramienta solo captura URLs que empiezan por http:// o https://. Los dominios sin protocolo podrían confundirse con nombres de archivo u otro texto. Si necesitas encontrar dominios sin protocolo, hace falta un patrón más agresivo.' },
      { q: '¿Captura URLs con eñes o acentos?', a: 'Si la URL está codificada en porcentaje (p. ej. %C3%B1), se extrae completa; los caracteres sin codificar no cumplen la sintaxis de URL y cortan la coincidencia. Codifica el enlace antes de compartirlo.' },
      { q: '¿Cuánto texto procesa de una vez?', a: 'La extracción por patrón va fluida hasta ~100.000 caracteres; los textos de varios MB conviene pegarlos por partes. El resultado sale deduplicado y en orden de aparición.' },
      { q: '¿Comprueba si los enlaces funcionan?', a: 'No: solo extrae, sin acceso a la red. Para validarlos, pega la lista en un comprobador de enlaces que haga peticiones; aquí obtienes la lista limpia y sin duplicados.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'Besuche https://example.com oder http://test.org/page?q=1 heute!',
      'noUrlsFound': 'Keine URLs gefunden',
      'clear': 'Leeren',
      'placeholder': 'Text mit URLs einfügen…',
      'resultPlaceholder': 'Ergebnis erscheint hier…',
      'inputLabel': 'Text mit URLs',
      'outputLabel': 'Extrahierte URLs',
      'viewLabel': 'Ansicht',
      'viewUrls': 'Vollständige URLs',
      'viewDomains': 'Eindeutige Domains',
      'filterAssets': 'Statische Ressourcen ausblenden (Bilder/CSS/JS/Schriften)',
      'foundN': '{n} eindeutige',
      'domainsN': '{n} eindeutige Domains',
      'assetsN': '{n} Ressourcen ausgeblendet',
      'note': '🔗 Extrahiert alle URLs aus beliebigem Text. Dedupliziert, entfernt anhängende Satzzeichen, kann statische Ressourcen (Bilder/CSS/JS/Schriften) ausblenden und Treffer nach eindeutiger Hauptdomain gruppieren.',
    },
    useCases: [
      'alle Links aus einem Artikel oder einer E-Mail ziehen',
      'aus Inhalten ein Link-Inventar erstellen',
      'chaotisch kopierte URLs aufräumen',
      'ausgehende Links in einem Text prüfen',
    ],
    faqs: [
      { q: 'Warum wird „example.com" ohne http nicht erkannt?', a: 'Dieses Werkzeug erfasst nur URLs, die mit http:// oder https:// beginnen. Domains ohne Protokoll könnten mit Dateinamen oder anderem Text verwechselt werden. Wenn du reine Domains finden möchtest, ist ein aggressiveres Muster nötig.' },
      { q: 'Werden URLs mit Umlauten erfasst?', a: 'Ist die URL prozentkodiert (z. B. %C3%A4), wird sie vollständig erkannt; uncodierte Umlaute verletzen die URL-Syntax und beenden den Treffer. Links vor dem Teilen kodieren.' },
      { q: 'Wie viel Text schafft das Tool auf einmal?', a: 'Bis etwa 100.000 Zeichen läuft die Mustersuche flüssig; mehrere MB lieber abschnittsweise einfügen. Die Treffer erscheinen dedupliziert in Reihenfolge des Auftretens.' },
      { q: 'Prüft es, ob die Links erreichbar sind?', a: 'Nein — es extrahiert nur und greift nicht aufs Netz. Für die Validierung die Liste in einen Link-Checker stecken, der Anfragen stellt; hier bekommst du die saubere, duplikatfreie Liste.' },
    ],
  },
}
