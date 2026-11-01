/**
 * utm-link-builder 本地化 bundle —— zh / es / de(2026-10 B12 批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const UtmLinkBuilderL10n: ToolL10n = {

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
