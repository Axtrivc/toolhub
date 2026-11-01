/**
 * password-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = PasswordGeneratorClient = 自定义 client,无需 slug)
 */
import type { ToolL10n } from '../tool-l10n'

export const passwordGeneratorL10n: ToolL10n = {

  es: {
    ui: {
      'bits': 'bits',
      'clickGenerate': 'Pulsa generar',
      'copyPassword': 'Copiar contraseña',
      'excludeAmbiguous': 'Excluir caracteres ambiguos (0/O, 1/l/I)',
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
      { q: '¿Con qué frecuencia debo cambiar mis contraseñas?', a: 'La guía moderna del NIST (el organismo de estándares de EE. UU.) indica que ya no necesitas cambiar las contraseñas en un calendario fijo, solo cuando haya motivos para creer que han sido comprometidas. Lo que importa mucho más es usar una contraseña fuerte y única para cada cuenta y activar la autenticación de dos factores.' },
      { q: '¿Cuál es la longitud ideal de una contraseña?', a: 'Para cuentas online protegidas con límites de intentos, 12–16 caracteres son suficientes. Para objetivos sin conexión como discos cifrados o la contraseña maestra del gestor de contraseñas, ve más largo: 20 o más caracteres, ya que un atacante con el archivo puede probar sin límites.' },
      { q: '¿Qué significan los bits del medidor de fuerza?', a: 'Cada carácter aleatorio aporta log₂ del tamaño del conjunto: unos 4,7 bits con solo minúsculas y unos 6,6 con los 94 caracteres imprimibles. Dieciséis caracteres con el conjunto completo rondan los 105 bits — la fuerza bruta deja de ser viable a escala cósmica. El indicador de bits es justo esa medida de entropía.' },
    ],
  },
  de: {
    ui: {
      'bits': 'Bits',
      'clickGenerate': 'Auf Generieren klicken',
      'copyPassword': 'Passwort kopieren',
      'excludeAmbiguous': 'Mehrdeutige Zeichen ausschließen (0/O, 1/l/I)',
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
      'ein unmöglich zu erratendes Passwort erstellen',
    ],
    faqs: [
      { q: 'Ist es sicher, online generierte Passwörter zu verwenden?', a: 'Es hängt vom Werkzeug ab. Dieser Generator läuft vollständig in deinem Browser, sodass das Passwort niemals einen Server erreicht. Vermeide Generatoren, die dein Passwort über das Internet senden oder in einer Datenbank speichern. Im Zweifel kannst du dir den Quellcode dieser Seite ansehen und bestätigen, dass alles clientseitig passiert.' },
      { q: 'Wie oft sollte ich meine Passwörter ändern?', a: 'Die aktuelle Empfehlung des NIST (der US-Standardisierungsbehörde) besagt, dass du Passwörter nicht mehr nach festem Zeitplan ändern musst – nur wenn es einen Grund gibt anzunehmen, dass sie kompromittiert wurden. Viel wichtiger ist ein starkes, einzigartiges Passwort für jedes Konto plus Zwei-Faktor-Authentifizierung.' },
      { q: 'Was ist die ideale Passwortlänge?', a: 'Für Online-Konten mit Ratenbegrenzung sind 12–16 Zeichen ausreichend. Für Offline-Ziele wie verschlüsselte Laufwerke oder das Master-Passwort deines Passwortmanagers gehe länger – 20+ Zeichen, da ein Angreifer mit der Datei ohne Ratenbegrenzung bruteforcen kann.' },
      { q: 'Was bedeuten die Bits bei der Stärke?', a: 'Jedes Zufallszeichen liefert log₂ der Zeichensatzgröße: rund 4,7 Bits bei nur Kleinbuchstaben, etwa 6,6 bei allen 94 druckbaren Zeichen. Sechzehn Zeichen mit vollem Zeichensatz ergeben rund 105 Bits — Brute Force scheidet selbst in kosmischen Zeiträumen aus. Der Bits-Wert ist genau diese Entropie-Angabe.' },
    ],
  },
}
