/**
 * password-strength-checker 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = PasswordStrengthCheckerClient = 自定义 devtool client,无需 slug)
 */
import type { ToolL10n } from '../tool-l10n'

export const passwordStrengthCheckerL10n: ToolL10n = {

  es: {
    ui: {
      'atLeast12Chars': 'Al menos 12 caracteres',
      'bits': 'bits',
      'checklist': 'Lista de comprobación',
      'commonPasswordWarning': 'Esta es una de las contraseñas más utilizadas: puede descifrarse casi al instante.',
      'enterPasswordLabel': 'Introduce una contraseña para probar',
      'entropy': 'Entropía',
      'length': 'Longitud',
      'localPrivacyNote': '🔒 Comprobado localmente en tu navegador. Tu contraseña nunca se envía a ningún sitio.',
      'lowercaseLetters': 'Minúsculas',
      'numbers': 'Números',
      'passwordPlaceholder': 'Escribe tu contraseña…',
      'sequenceWarning': 'Los caracteres repetidos o secuenciales (como aaa o abc123) son fáciles de adivinar.',
      'strength': 'Fuerza',
      'strengthEmpty': 'Vacía',
      'strengthStrong': 'Fuerte',
      'strengthVeryStrong': 'Muy fuerte',
      'strengthVeryWeak': 'Muy débil',
      'strengthWeak': 'Débil',
      'symbols': 'Símbolos',
      'uppercaseLetters': 'Mayúsculas',
    },
    useCases: [
      'qué tan fuerte es mi contraseña',
      'comprobador de entropía y fuerza de contraseña',
      'lista de comprobación de seguridad de contraseñas',
      'estimador de tiempo para descifrar contraseñas',
    ],
    faqs: [
      { q: '¿Es seguro escribir aquí mi contraseña real?', a: 'Sí. Esta herramienta procesa todo localmente en tu navegador. No hay ninguna petición de red: tu contraseña nunca sale de tu dispositivo. También puedes probar variaciones.' },
      { q: '¿Qué pasa si mi contraseña está en una filtración de datos?', a: 'La fuerza solo mide la adivinabilidad, no si ha sido filtrada. Consulta Have I Been Pwned para ver si tu contraseña ha aparecido en filtraciones conocidas.' },
      { q: '¿Cuántos bits de entropía hacen falta?', a: 'Regla aproximada: por debajo de 40 bits se rompe en horas offline; 60 bits aguantan décadas; con 75+ la fuerza bruta offline es inviable. La longitud vence a la variedad: 12 minúsculas aleatorias (~56 bits) superan 8 caracteres de todo tipo (~52 bits).' },
      { q: 'No consigo recordar tantas contraseñas, ¿qué hago?', a: 'Memoriza solo una frase de paso: 4 palabras al azar (20+ caracteres), fuerte y fácil de recordar. El resto, déjalo en manos del gestor de contraseñas (16 caracteres aleatorios); y activa la verificación en dos pasos en las cuentas críticas.' },
    ],
  },
  de: {
    ui: {
      'atLeast12Chars': 'Mindestens 12 Zeichen',
      'bits': 'Bits',
      'checklist': 'Checkliste',
      'commonPasswordWarning': 'Dies ist eines der häufigsten Passwörter – es kann fast sofort geknackt werden.',
      'enterPasswordLabel': 'Passwort zum Testen eingeben',
      'entropy': 'Entropie',
      'length': 'Länge',
      'localPrivacyNote': '🔒 Lokal in deinem Browser getestet. Dein Passwort wird nirgendwohin gesendet.',
      'lowercaseLetters': 'Kleinbuchstaben',
      'numbers': 'Zahlen',
      'passwordPlaceholder': 'Passwort eingeben…',
      'sequenceWarning': 'Wiederholte oder fortlaufende Zeichen (wie aaa oder abc123) sind leicht zu erraten.',
      'strength': 'Stärke',
      'strengthEmpty': 'Leer',
      'strengthStrong': 'Stark',
      'strengthVeryStrong': 'Sehr stark',
      'strengthVeryWeak': 'Sehr schwach',
      'strengthWeak': 'Schwach',
      'symbols': 'Symbole',
      'uppercaseLetters': 'Großbuchstaben',
    },
    useCases: [
      'wie stark ist mein Passwort',
      'Prüfer für Entropie und Passwortstärke',
      'Sicherheits-Checkliste für Passwörter',
      'Schätzung der Knackzeit für Passwörter',
    ],
    faqs: [
      { q: 'Ist es sicher, hier mein echtes Passwort einzugeben?', a: 'Ja. Dieses Werkzeug verarbeitet alles lokal in deinem Browser. Es gibt keine Netzwerkanfrage – dein Passwort verlässt nie dein Gerät. Du kannst auch Variationen testen.' },
      { q: 'Was, wenn mein Passwort in einem Datenleck auftaucht?', a: 'Die Stärke misst nur die Erratbarkeit, nicht ob es geleakt wurde. Prüfe auf Have I Been Pwned, ob dein Passwort in bekannten Lecks aufgetaucht ist.' },
      { q: 'Wie viele Bits Entropie sind genug?', a: 'Faustregel: Unter 40 Bits ist offline in Stunden knackbar, 60 Bits halten Jahrzehnte, ab 75 Bits ist Brute Force praktisch erledigt. Länge schlägt Vielfalt: 12 zufällige Kleinbuchstaben (~56 Bits) schlagen 8 gemischte Zeichen (~52 Bits).' },
      { q: 'Ich kann mir so viele Passwörter nicht merken — was tun?', a: 'Merke dir nur eine Passphrase: vier Zufallswörter (20+ Zeichen) sind stark und leicht zu behalten. Alle anderen erzeugt der Passwort-Manager mit 16 Zufallszeichen; für kritische Konten zusätzlich 2FA aktivieren.' },
    ],
  },
}
