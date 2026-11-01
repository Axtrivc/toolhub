/**
 * email-extractor 本地化 bundle —— zh / es / de
 * 覆盖:ui + faqs + useCases(2026-09 业务级增强:导出格式/公共邮箱过滤/域名归类/CSV)
 */
import type { ToolL10n } from '../tool-l10n'

export const emailExtractorL10n: ToolL10n = {

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
