/**
 * password-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = PasswordGeneratorClient = 自定义 client,无需 slug)
 */
import type { ToolL10n } from '../tool-l10n'

export const passwordGeneratorL10n: ToolL10n = {
  zh: {
    ui: {
      'bits': '比特',
      'clickGenerate': '点击生成',
      'copyPassword': '复制密码',
      'excludeAmbiguous': '排除易混淆字符 (0/O, 1/l/I)',
      'generatedPassword': '生成的密码',
      'length': '长度',
      'lowercase': '小写字母 (a-z)',
      'numbers': '数字 (0-9)',
      'privacyNote': '🔒 隐私说明:密码在你的浏览器中用 Web Crypto API 本地生成,绝不通过网络发送。',
      'regenerate': '重新生成',
      'strengthEmpty': '空',
      'strengthStrong': '强',
      'strengthVeryStrong': '非常强',
      'strengthVeryWeak': '非常弱',
      'strengthWeak': '弱',
      'symbols': '符号 (!@#$)',
      'uppercase': '大写字母 (A-Z)',
    },
    useCases: [
      '高强度随机密码生成器',
      '带符号的安全密码',
      '16 位密码生成',
      '创建无法猜测的密码',
    ],
    faqs: [
      { q: '使用在线生成的密码安全吗?', a: '取决于你用的工具。本生成器完全在你的浏览器中运行,密码绝不会接触服务器。请避免使用那些把你的密码通过网络发送或存入数据库的生成器。如有疑虑,你可以查看本页源代码,确认一切都在客户端完成。' },
      { q: '我应该多久换一次密码?', a: '美国标准机构 NIST 的最新指引指出:你不再需要定期更换密码——只有在有理由相信密码已泄露时才需要换。更重要的是为每个账户使用一个强且唯一的密码,并开启双重认证。' },
      { q: '密码的理想长度是多少?', a: '对于有频率限制保护的在线账户,12–16 位足够。对于加密硬盘、密码库主密码等离线目标,应更长——20 位以上,因为拿到文件的攻击者可以无频率限制地暴力破解。' },
    ],
  },
  es: {
    ui: {
      'bits': 'bits',
      'clickGenerate': 'Pulsa generar',
      'copyPassword': 'Copiar contraseña',
      'excludeAmbiguous': 'Excluir ambiguos (0/O, 1/l/I)',
      'generatedPassword': 'Contraseña generada',
      'length': 'Longitud',
      'lowercase': 'Minúsculas (a-z)',
      'numbers': 'Números (0-9)',
      'privacyNote': '🔒 Nota de privacidad: las contraseñas se generan localmente en tu navegador con la Web Crypto API y nunca se envían por la red.',
      'regenerate': 'Regenerar',
      'strengthEmpty': 'Vacía',
      'strengthStrong': 'Fuerte',
      'strengthVeryStrong': 'Muy fuerte',
      'strengthVeryWeak': 'Muy débil',
      'strengthWeak': 'Débil',
      'symbols': 'Símbolos (!@#$)',
      'uppercase': 'Mayúsculas (A-Z)',
    },
    useCases: [
      'generador de contraseñas aleatorias y fuertes',
      'contraseña segura con símbolos',
      'generador de contraseñas de 16 caracteres',
      'crear una contraseña inadivinable',
    ],
    faqs: [
      { q: '¿Es seguro usar contraseñas generadas online?', a: 'Depende de la herramienta. Este generador funciona completamente en tu navegador, así que la contraseña nunca llega a un servidor. Evita generadores que envíen tu contraseña por internet o la guarden en una base de datos. Si tienes dudas, puedes ver el código fuente de esta página y confirmar que todo ocurre del lado del cliente.' },
      { q: '¿Con qué frecuencia debo cambiar mis contraseñas?', a: 'La guía moderna del NIST (el organismo de estándares de EE. UU.) indica que ya no necesitas cambiar las contraseñas en un calendario fijo, solo cuando haya motivos para creer que han sido comprometidas. Lo que importa mucho más es usar una contraseña fuerte y única para cada cuenta y activar la autenticación en dos pasos.' },
      { q: '¿Cuál es la longitud ideal de una contraseña?', a: 'Para cuentas online protegidas con límites de intentos, 12–16 caracteres son suficientes. Para objetivos sin conexión como discos cifrados o la contraseña maestra del gestor de contraseñas, ve más largo: 20 o más caracteres, ya que un atacante con el archivo puede probar sin límites.' },
    ],
  },
  de: {
    ui: {
      'bits': 'Bits',
      'clickGenerate': 'Auf Generieren klicken',
      'copyPassword': 'Passwort kopieren',
      'excludeAmbiguous': 'Mehrdeutige ausschließen (0/O, 1/l/I)',
      'generatedPassword': 'Generiertes Passwort',
      'length': 'Länge',
      'lowercase': 'Kleinbuchstaben (a-z)',
      'numbers': 'Zahlen (0-9)',
      'privacyNote': '🔒 Hinweis zum Datenschutz: Passwörter werden lokal in deinem Browser mit der Web Crypto API erzeugt und nie über das Netzwerk gesendet.',
      'regenerate': 'Neu generieren',
      'strengthEmpty': 'Leer',
      'strengthStrong': 'Stark',
      'strengthVeryStrong': 'Sehr stark',
      'strengthVeryWeak': 'Sehr schwach',
      'strengthWeak': 'Schwach',
      'symbols': 'Symbole (!@#$)',
      'uppercase': 'Großbuchstaben (A-Z)',
    },
    useCases: [
      'Generator für starke Zufallspasswörter',
      'sicheres Passwort mit Sonderzeichen',
      'Passwortgenerator mit 16 Zeichen',
      'ein unerratbares Passwort erstellen',
    ],
    faqs: [
      { q: 'Ist es sicher, online generierte Passwörter zu verwenden?', a: 'Es hängt vom Werkzeug ab. Dieser Generator läuft vollständig in deinem Browser, sodass das Passwort nie einen Server berührt. Vermeide Generatoren, die dein Passwort über das Internet senden oder in einer Datenbank speichern. Im Zweifel kannst du dir den Quellcode dieser Seite ansehen und bestätigen, dass alles clientseitig passiert.' },
      { q: 'Wie oft sollte ich meine Passwörter ändern?', a: 'Die aktuelle Empfehlung des NIST (der US-Normungsbehörde) besagt, dass du Passwörter nicht mehr nach festem Zeitplan ändern musst – nur wenn es einen Grund gibt anzunehmen, dass sie kompromittiert wurden. Viel wichtiger ist ein starkes, einzigartiges Passwort für jedes Konto plus Zwei-Faktor-Authentifizierung.' },
      { q: 'Was ist die ideale Passwortlänge?', a: 'Für Online-Konten mit Ratenbegrenzung sind 12–16 Zeichen ausreichend. Für Offline-Ziele wie verschlüsselte Laufwerke oder das Master-Passwort deines Passwortmanagers gehe länger – 20+ Zeichen, da ein Angreifer mit der Datei ohne Ratenbegrenzung bruteforcen kann.' },
    ],
  },
}
