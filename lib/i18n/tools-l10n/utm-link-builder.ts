/**
 * utm-link-builder 本地化 bundle —— zh / es / de(2026-10 B12 批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const UtmLinkBuilderL10n: ToolL10n = {
  zh: {
    useCases: ['给邮件/广告链接拼 UTM 跟踪参数', '保证 GA4 报告里不再出现 direct/none', '统一团队的大小写与命名规范', '快速复制投放用的完整跟踪链接'],
    faqs: [
      { q: '五个 UTM 参数各管什么?', a: 'utm_source 说明流量来自哪里(newsletter、google),utm_medium 是渠道(email、cpc),utm_campaign 是具体活动,utm_term 是关键词,utm_content 区分素材变体。GA4 靠它们把会话归因到 source/medium,没有它们流量就会掉进"(direct)"。' },
      { q: '哪些参数是必填的?', a: '至少 source 和 medium——缺任何一个,GA4 都无法归因,会话会被记成 direct/none。campaign 强烈建议填:任何按活动切分的报表都靠它。' },
      { q: 'UTM 参数会影响 SEO 或被收录吗?', a: 'Google 排名会忽略这些参数,但带参数的 URL 仍可能被抓取并出现在结果里——用 canonical 标签或 Search Console 的参数处理,保证干净版本被收录。' },
      { q: '为什么报表里 Email 和 email 变成了两行?', a: '参数值区分大小写,空格与编码也是。选好「小写加连字符」的写法并保持一致——命名漂移是 UTM 报表的头号问题。' },
    ],
    ui: {
      'urlLabel': '基础 URL',
      'outputLabel': '跟踪链接',
      'loadSample': '加载示例',
      'errEmpty': '请先填写基础 URL。',
      'errUrl': '这串字符无法解析为 URL。示例:https://example.com/pricing',
      'errProto': '仅支持 http:// 与 https:// 基础 URL——当前是',
      'hintRequired': 'utm_source 与 utm_medium 必填——缺任何一个,GA4 都会把会话归入 "direct / none"。',
      'hintCase': '参数值区分大小写:"Email" 与 "email" 在报表里是两行。小写是通行惯例。',
      'note': '🔗 基础 URL 上已有的查询参数会保留;utm_* 值按规则编码,空格在查询串里统一序列化为 +。维护一张活动命名表——命名一致是报表可用的九成功力。',
    },
  },
  es: {
    useCases: ['montar enlaces con parámetros UTM para email y anuncios', 'evitar que GA4 reporte tus campañas como direct/none', 'unificar el criterio de mayúsculas del equipo', 'copiar rápido el enlace completo de una campaña'],
    faqs: [
      { q: '¿Para qué sirve cada parámetro UTM?', a: 'utm_source indica de dónde viene el tráfico (newsletter, google); utm_medium, el canal (email, cpc); utm_campaign, la campaña concreta; utm_term, la palabra clave, y utm_content distingue variantes del creativo. GA4 los usa para atribuir la sesión a un source/medium; sin ellos, el tráfico cae en «(direct)».' },
      { q: '¿Qué parámetros son obligatorios?', a: 'Como mínimo source y medium: sin ambos GA4 no atribuye y la sesión se registra como direct/none. campaign es muy recomendable: cualquier informe segmentado por campaña depende de él.' },
      { q: '¿Los parámetros UTM afectan al SEO o se indexan?', a: 'Google los ignora para posicionar, pero la URL con parámetros puede rastrearse y aparecer en resultados: usa etiquetas canónicas o el manejo de parámetros de Search Console para que se indexe la versión limpia.' },
      { q: '¿Por qué mi informe separa Email y email en dos filas?', a: 'Los valores distinguen mayúsculas, y también los espacios y la codificación. Elige una vez el formato «minúsculas-con-guiones» y mantenlo: la deriva de nombres es el problema número uno de los informes UTM.' },
    ],
    ui: {
      'urlLabel': 'URL base',
      'outputLabel': 'Enlace con seguimiento',
      'loadSample': 'Cargar ejemplo',
      'errEmpty': 'Introduce primero una URL base.',
      'errUrl': 'Eso no se puede interpretar como URL. Ejemplo: https://example.com/pricing',
      'errProto': 'Solo se admiten URL base http:// y https:// — se recibió',
      'hintRequired': 'utm_source y utm_medium son obligatorios: sin ambos, GA4 arrastra la sesión a «direct / none».',
      'hintCase': 'Los valores distinguen mayúsculas: «Email» y «email» son dos filas distintas en los informes. La convención es minúsculas.',
      'note': '🔗 Los parámetros de consulta existentes en la URL base se conservan; los valores utm_* se codifican (los espacios se serializan como + en la cadena de consulta). Mantén una hoja con los nombres de campaña: la consistencia es el 90 % de unos informes utilizables.',
    },
  },
  de: {
    useCases: ['E-Mail- und Anzeigenlinks mit UTM-Parametern versehen', 'verhindern, dass GA4 Kampagnen als direct/none verbucht', 'die Schreibweisen-Konvention im Team vereinheitlichen', 'fertige Tracking-Links schnell kopieren'],
    faqs: [
      { q: 'Wofür stehen die fünf UTM-Parameter?', a: 'utm_source sagt, woher der Traffic kommt (newsletter, google); utm_medium ist der Kanal (email, cpc); utm_campaign die konkrete Kampagne; utm_term das Keyword; utm_content unterscheidet Kreativ-Varianten. GA4 attribuiert damit die Session auf Source/Medium — ohne sie landet der Traffic in „(direct)“.' },
      { q: 'Welche Parameter sind Pflicht?', a: 'Mindestens source und medium — fehlt einer davon, attribuiert GA4 nicht und die Session erscheint als direct/none. campaign ist dringend empfohlen: Jeder nach Kampagne geschnittene Bericht hängt daran.' },
      { q: 'Schaden UTM-Parameter dem SEO oder werden sie indexiert?', a: 'Google ignoriert sie beim Ranking, aber die URL mit Parametern kann gecrawlt und in Ergebnissen auftauchen — Canonical-Tags oder die Parameterbehandlung in der Search Console halten die saubere Version im Index.' },
      { q: 'Warum stehen „Email“ und „email“ als zwei Zeilen im Bericht?', a: 'Werte sind case-sensitive, ebenso Leerzeichen und Kodierung. Einmal „klein-mit-Bindestrichen“ festlegen und durchhalten — Namensdrift ist Problem Nummer eins bei UTM-Reports.' },
    ],
    ui: {
      'urlLabel': 'Basis-URL',
      'outputLabel': 'Tracking-Link',
      'loadSample': 'Beispiel laden',
      'errEmpty': 'Zuerst eine Basis-URL eingeben.',
      'errUrl': 'Das lässt sich nicht als URL parsen. Beispiel: https://example.com/pricing',
      'errProto': 'Nur http://- und https://-Basis-URLs werden unterstützt — erhalten wurde',
      'hintRequired': 'utm_source und utm_medium sind Pflicht — ohne beide schiebt GA4 die Session in „direct / none“.',
      'hintCase': 'Werte sind case-sensitive: „Email“ und „email“ werden zu zwei Berichtszeilen. Kleinbuchstaben sind die Konvention.',
      'note': '🔗 Vorhandene Query-Parameter der Basis-URL bleiben erhalten; utm_*-Werte werden kodiert (Leerzeichen serialisieren sich in der Query-Zeichenkette als +). Führe eine Tabelle mit Kampagnennamen — konsistentes Naming ist 90 % brauchbarer Reports.',
    },
  },
}
