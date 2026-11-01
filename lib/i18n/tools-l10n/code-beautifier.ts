/**
 * code-beautifier 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const codeBeautifierL10n: ToolL10n = {

  es: {
    ui: {
      'beautifiedOutput': 'Salida embellecida',
      'code': 'código',
      'copy': 'Copiar',
      'fourSpaces': '4 espacios',
      'indent': 'Sangría',
      'note': '🔒 100% en el cliente — tu código se formatea solo en tu navegador y nunca se envía a ningún servidor.',
      'pasteYour': 'Pega tu',
      'pasteYourCode': 'Pega tu código {lang}',
      'twoSpaces': '2 espacios',
      'unableToFormat': 'No se pudo formatear la entrada',
      'tooLong': '⚠️ La entrada supera el tamaño admitido (100.000 caracteres). Redúcela para poder formatearla.',
    },
    useCases: [
      'embellecer JavaScript minificado online',
      'formatear HTML con sangría',
      'desminificar CSS online gratis',
      'hacer pretty print de JSON',
    ],
    faqs: [
      {
        q: '¿Qué lenguajes formatea?',
        a: 'HTML, CSS, JavaScript y JSON. Cada uno se analiza con un formateador adaptado al lenguaje, que vuelve a sangrar y normaliza los espacios; así el código minificado o desordenado se vuelve legible sin cambiar su significado.',
      },
      {
        q: '¿Embellecer cambia cómo se ejecuta mi código?',
        a: 'No. El formateo solo ajusta espacios en blanco, saltos de línea y sangría; no altera tokens, lógica ni valores. La salida embellecida es funcionalmente idéntica a la entrada, solo más fácil de leer.',
      },
      {
        q: '¿Debo usar 2 o 4 espacios?',
        a: 'Sigue el estilo existente de tu proyecto. Dos espacios es común en HTML, CSS y JSON; cuatro se usa a menudo en JavaScript. La coherencia dentro del código importa más que el número concreto, así que elige lo que coincida con la convención de tu equipo.',
      },
      {
        q: '¿Mi código se sube a algún servidor?',
        a: 'No. El formateo ocurre por completo en tu navegador y la entrada nunca sale de tu dispositivo, así que puedes pegar código privado o configuración interna sin riesgo. Las entradas de más de 100.000 caracteres se rechazan para mantener la página fluida.',
      },
    ],
  },
  de: {
    ui: {
      'beautifiedOutput': 'Verschönerte Ausgabe',
      'code': 'Code ein',
      'copy': 'Kopieren',
      'fourSpaces': '4 Leerzeichen',
      'indent': 'Einrückung',
      'note': '🔒 100% clientseitig — dein Code wird nur in deinem Browser formatiert und nie an einen Server gesendet.',
      'pasteYour': 'Füge deinen',
      'pasteYourCode': 'Füge deinen {lang}-Code ein',
      'twoSpaces': '2 Leerzeichen',
      'unableToFormat': 'Eingabe konnte nicht formatiert werden',
      'tooLong': '⚠️ Die Eingabe überschreitet die unterstützte Größe (100.000 Zeichen). Kürze die Eingabe, um sie zu formatieren.',
    },
    useCases: [
      'minifiziertes JavaScript online verschönern',
      'HTML mit Einrückung formatieren',
      'CSS kostenlos online de-minifizieren',
      'JSON mit Pretty-Print formatieren',
    ],
    faqs: [
      {
        q: 'Welche Sprachen formatiert es?',
        a: 'HTML, CSS, JavaScript und JSON. Jede wird mit einem sprachspezifischen Formatierer neu eingerückt und in den Abständen normalisiert, sodass minifizierter oder unordentlicher Code lesbar wird, ohne die Bedeutung zu ändern.',
      },
      {
        q: 'Verändert das Verschönern, wie mein Code läuft?',
        a: 'Nein. Formatieren passt nur Leerzeichen, Zeilenumbrüche und Einrückung an — es ändert keine Tokens, Logik oder Werte. Die verschönerte Ausgabe ist funktionell identisch mit der Eingabe, nur besser lesbar.',
      },
      {
        q: 'Soll ich 2 oder 4 Leerzeichen nehmen?',
        a: 'Halte dich an den bestehenden Stil deines Projekts. Zwei Leerzeichen sind bei HTML, CSS und JSON üblich; vier oft bei JavaScript. Konsistenz innerhalb der Codebase ist wichtiger als die konkrete Zahl, also wähle die Option, die zur Teamkonvention passt.',
      },
      {
        q: 'Wird mein Code zu einem Server hochgeladen?',
        a: 'Nein. Das Formatieren läuft vollständig in deinem Browser, die Eingabe verlässt dein Gerät nie — privater Code und interne Konfigurationen sind also unkritisch. Eingaben über 100.000 Zeichen werden abgelehnt, damit die Seite flüssig bleibt.',
      },
    ],
  },
}
