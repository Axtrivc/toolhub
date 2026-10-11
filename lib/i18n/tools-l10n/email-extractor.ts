/**
 * email-extractor 本地化 bundle —— zh / es / de
 * 覆盖:ui + faqs + useCases(2026-09 业务级增强:导出格式/公共邮箱过滤/域名归类/CSV)
 */
import type { ToolL10n } from '../tool-l10n'

export const emailExtractorL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: '欢迎通过 hello@example.com 或 support@test.org 联系我们。',
      'noEmailsFound': '未找到邮箱',
      'clear': '清空',
      'placeholder': '粘贴包含邮箱地址的文本…',
      'resultPlaceholder': '结果将显示在这里…',
      'inputLabel': '含邮箱的文本',
      'outputLabel': '提取出的邮箱',
      'formatLabel': '导出格式',
      'fmtNewline': '换行',
      'fmtComma': '逗号分隔(抄送用)',
      'filterPublic': '过滤公共邮箱(Gmail、QQ、Yahoo 等)',
      'foundN': '{n} 个唯一邮箱',
      'filteredN': '已滤除 {n} 个公共邮箱',
      'domainTitle': '按域名归类',
      'exportCsv': '导出 CSV',
      'note': '📧 从任意文本中提取所有邮箱地址,自动去重。逗号格式可直接粘贴进邮件抄送栏;域名过滤器剔除 Gmail、QQ、Yahoo 等公共邮箱,让企业专有域名一目了然。',
    },
    useCases: [
      '从文档中提取联系方式',
      '整理散落的联系人列表',
      '从已有资料构建邮件列表(请合规使用)',
      '核查旧文件里都有哪些邮箱',
    ],
    faqs: [
      { q: '这个工具会验证邮箱是否有效吗?', a: '它只检测格式是否匹配。真正的验证需要发送一封邮件——没有任何工具能在不发邮件的情况下确认地址存在。联系提取到的地址时,请务必遵守反垃圾邮件相关法律。' },
      { q: '重复的邮箱会被保留吗?', a: '不会——工具自动去重,同一个地址无论在文本里出现多少次,结果里只留一条。先在这里提取一遍,比在 Excel 里手动删重复行快得多。' },
      { q: '能识别带 + 号或子域名的地址吗?', a: '可以,user.name+tag@gmail.com 这类常见格式都能匹配。不过它按模式识别,不保证语法 100% 合规(比如本地部分带引号这类极罕见的写法);批量提取后建议先抽查几条再使用。' },
      { q: '用提取到的邮箱发营销邮件合法吗?', a: '分场景:欧盟按 GDPR 需要明确同意,德国还要求双重确认(Double Opt-in);中国《个人信息保护法》同样要求事先取得同意;美国 CAN-SPAM 允许冷邮件但必须提供退订。没有同意基础的名单,不要群发。' },
    ],
  },
  es: {
    ui: {
      defaultInput: 'Contáctanos en hola@example.com o soporte@test.org para ayuda.',
      'noEmailsFound': 'No se encontraron correos',
      'clear': 'Limpiar',
      'placeholder': 'Pega texto con direcciones de correo…',
      'resultPlaceholder': 'El resultado aparecerá aquí…',
      'inputLabel': 'Texto con correos',
      'outputLabel': 'Correos extraídos',
      'formatLabel': 'Formato de exportación',
      'fmtNewline': 'Saltos de línea',
      'fmtComma': 'Separado por comas (para CC)',
      'filterPublic': 'Filtrar correos públicos (Gmail, Yahoo…)',
      'foundN': '{n} únicos',
      'filteredN': '{n} públicos eliminados',
      'domainTitle': 'Agrupados por dominio',
      'exportCsv': 'Exportar a CSV',
      'note': '📧 Extrae todas las direcciones de correo de cualquier texto. Elimina duplicados automáticamente. El formato con comas va directo al campo CC; el filtro de dominios quita Gmail, Yahoo y similares para que destaquen los dominios corporativos.',
    },
    useCases: [
      'extraer información de contacto de documentos',
      'limpiar listas de contacto dispersas',
      'construir listas de correo a partir de materiales existentes (úsalas con responsabilidad)',
      'comprobar qué correos hay en archivos antiguos',
    ],
    faqs: [
      { q: '¿Esto valida los correos?', a: 'Detecta el patrón de formato. La validación real requiere enviar un correo — ninguna herramienta puede verificar que una dirección existe sin hacerlo. Respeta siempre las leyes antispam al contactar las direcciones extraídas.' },
      { q: '¿Se conservan los correos duplicados?', a: 'No: la herramienta elimina duplicados automáticamente; cada dirección aparece una sola vez aunque se repita mil veces en el texto. Hacer la extracción aquí es mucho más rápido que quitar repetidos a mano en Excel.' },
      { q: '¿Reconoce direcciones con + o subdominios?', a: 'Sí, el patrón cubre formatos habituales como usuario.nombre+etiqueta@gmail.com. Como detecta por patrón, no garantiza validez sintáctica al 100 % (por ejemplo, comillas poco comunes en la parte local); conviene revisar una muestra antes de usar la lista.' },
      { q: '¿Es legal enviar marketing a los correos extraídos?', a: 'Depende: en la UE el GDPR exige consentimiento explícito (en Alemania, doble opt-in); en México y varios países latinoamericanos rige el consentimiento y el deber de informar; en EE. UU. la ley CAN-SPAM permite el correo frío pero obliga a ofrecer la baja. Sin consentimiento, no envíes nada masivo.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'Kontaktiere uns unter hallo@example.com oder support@test.org für Hilfe.',
      'noEmailsFound': 'Keine E-Mails gefunden',
      'clear': 'Leeren',
      'placeholder': 'Text mit E-Mail-Adressen einfügen…',
      'resultPlaceholder': 'Ergebnis erscheint hier…',
      'inputLabel': 'Text mit E-Mails',
      'outputLabel': 'Extrahierte E-Mails',
      'formatLabel': 'Exportformat',
      'fmtNewline': 'Zeilenumbrüche',
      'fmtComma': 'Kommagetrennt (für CC)',
      'filterPublic': 'Öffentliche Postfächer ausfiltern (Gmail, Yahoo…)',
      'foundN': '{n} eindeutige',
      'filteredN': '{n} öffentliche entfernt',
      'domainTitle': 'Nach Domain gruppiert',
      'exportCsv': 'Als CSV exportieren',
      'note': '📧 Extrahiert alle E-Mail-Adressen aus beliebigem Text. Entfernt automatisch Duplikate. Das Kommaformat passt direkt ins CC-Feld; der Domainfilter entfernt Gmail, Yahoo & Co., damit Firmendomains hervorstechen.',
    },
    useCases: [
      'Kontaktinformationen aus Dokumenten extrahieren',
      'verstreute Kontaktlisten aufräumen',
      'aus vorhandenem Material Mailinglisten erstellen (verantwortungsvoll nutzen)',
      'prüfen, welche E-Mail-Adressen in alten Dateien stecken',
    ],
    faqs: [
      { q: 'Validiert dieses Werkzeug E-Mail-Adressen?', a: 'Es erkennt das Formatmuster. Eine echte Validierung erfordert das Senden einer E-Mail — kein Werkzeug kann ohne diesen Schritt bestätigen, dass eine Adresse existiert. Halte dich beim Kontaktieren extrahierter Adressen immer an die Anti-Spam-Gesetze.' },
      { q: 'Bleiben Dubletten in der Liste?', a: 'Nein — das Werkzeug entfernt Duplikate automatisch; jede Adresse erscheint nur einmal, egal wie oft sie im Text auftaucht. Das ist deutlich schneller als manuelles Deduplizieren in Excel.' },
      { q: 'Werden Adressen mit + oder Subdomains erkannt?', a: 'Ja, das Muster deckt gängige Formate wie vor.nachname+tag@gmail.com ab. Da es per Muster erkennt, garantiert es keine 100 % syntaktisch gültigen Treffer (etwa seltene Anführungszeichen im Localpart) — prüfe die Liste vor der Nutzung stichprobenartig.' },
      { q: 'Darf ich an die extrahierten Adressen Werbung schicken?', a: 'In der EU verlangt die DSGVO eine ausdrückliche Einwilligung, in Deutschland zusätzlich Double-Opt-in; die USA erlauben mit CAN-SPAM Kaltakquise, verlangen aber eine Abmeldemöglichkeit. Ohne Rechtsgrundlage — Einwilligung oder bestehende Kundenbeziehung — ist der Massenversand verboten.' },
    ],
  },
}
