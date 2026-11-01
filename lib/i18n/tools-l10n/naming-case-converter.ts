/**
 * naming-case-converter 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const namingCaseConverterL10n: ToolL10n = {

  es: {
    ui: {
      'bulkInputLabel': 'Una frase por línea',
      'bulkMode': 'Modo por lotes',
      'bulkPlaceholder': 'user profile settings\ngetHTTPResponse\nAPI_BASE_URL',
      'copy': 'Copiar',
      'hint': 'Maneja espacios, guiones bajos, guiones, puntos, barras y límites camelCase/PascalCase.',
      'inputLabel': 'Frase a convertir',
      'note': '🔒 100% en el cliente — todo se convierte en tu navegador, nada sale de la página.',
      'placeholder': 'user profile settings',
    },
    useCases: [
      'convertir camelCase a snake_case',
      'PascalCase a kebab-case',
      'convertir convenciones de nombres de variables',
      'generador de CONSTANT_CASE online',
    ],
    faqs: [
      {
        q: '¿Cuál es la diferencia entre camelCase y PascalCase?',
        a: 'camelCase empieza en minúscula y capitaliza cada palabra siguiente (parseHtml), mientras que PascalCase (UpperCamelCase) también capitaliza la primera (ParseHtml). camelCase es la convención para variables y funciones; PascalCase se usa para clases y componentes React.',
      },
      {
        q: '¿Cómo detecta los límites de palabra en un nombre?',
        a: 'El convertidor separa por guiones, guiones bajos, espacios y cambios de mayúsculas, así que HTMLParser, html_parser y html-parser pasan a la misma lista de palabras antes de reformatear. Eso permite convertir entre todos los estilos en ambos sentidos.',
      },
      {
        q: '¿El modo por lotes mantiene un nombre convertido por línea?',
        a: 'Sí. Pega una lista completa (un identificador por línea) y cada línea se convierte de forma independiente, conservando el orden. Las líneas en blanco se omiten.',
      },
      {
        q: '¿Cuándo se usa CONSTANT_CASE?',
        a: 'Mayúsculas con guiones bajos, reservado a constantes: MAX_RETRY_COUNT = 5. Las convenciones complementarias: PEP 8 de Python (clases en PascalCase, módulos en snake_case) y constantes UPPER_SNAKE en Java — elige según el lenguaje del equipo.',
      },
      {
        q: '¿Qué pasa con nombres como iOS o XMLHttp?',
        a: 'Las secuencias de mayúsculas consecutivas cuentan como una sola palabra: HTMLParser se separa en HTML y Parser, igual que html_parser, y las conversiones de ida y vuelta coinciden. En nombres no convencionales como iOS el desglose puede ser ambiguo; revisa la salida antes de reemplazar en masa.',
      },
    ],
  },
  de: {
    ui: {
      'bulkInputLabel': 'Ein Ausdruck pro Zeile',
      'bulkMode': 'Stapelmodus',
      'bulkPlaceholder': 'user profile settings\ngetHTTPResponse\nAPI_BASE_URL',
      'copy': 'Kopieren',
      'hint': 'Verarbeitet Leerzeichen, Unterstriche, Bindestriche, Punkte, Schrägstriche und Wortgrenzen in camelCase/PascalCase.',
      'inputLabel': 'Zu konvertierender Ausdruck',
      'note': '🔒 100% clientseitig — alles wird in deinem Browser konvertiert, nichts verlässt die Seite.',
      'placeholder': 'user profile settings',
    },
    useCases: [
      'camelCase in snake_case umwandeln',
      'PascalCase in kebab-case',
      'Variablen-Benennungskonventionen umwandeln',
      'Online-Generator für CONSTANT_CASE',
    ],
    faqs: [
      {
        q: 'Was ist der Unterschied zwischen camelCase und PascalCase?',
        a: 'camelCase beginnt klein und schreibt jedes folgende Wort groß (parseHtml), PascalCase (UpperCamelCase) auch das erste Wort (ParseHtml). camelCase ist die Konvention für Variablen und Funktionen; PascalCase für Klassen und React-Komponenten.',
      },
      {
        q: 'Wie werden Wortgrenzen in einem Namen erkannt?',
        a: 'Der Umwandler trennt an Binde-, Unterstrichen, Leerzeichen und Groß-/Kleinschreibungswechseln, sodass HTMLParser, html_parser und html-parser dieselbe Wortliste ergeben, bevor neu formatiert wird. So konvertierst du zwischen allen Stilen in beide Richtungen.',
      },
      {
        q: 'Behält der Stapelmodus einen konvertierten Namen pro Zeile?',
        a: 'Ja. Füge eine ganze Liste ein (ein Bezeichner pro Zeile) und jede Zeile wird unabhängig umgewandelt, die Reihenfolge bleibt erhalten. Leerzeilen werden übersprungen.',
      },
      {
        q: 'Wann verwendet man CONSTANT_CASE?',
        a: 'Durchgehend Großbuchstaben mit Unterstrichen, reserviert für Konstanten: MAX_RETRY_COUNT = 5. Passende Konventionen dazu: PEP 8 (Klassen in PascalCase, Module in snake_case) in Python und UPPER_SNAKE-Konstanten in Java — je nach Sprachstil des Teams wählen.',
      },
      {
        q: 'Was passiert mit Namen wie iOS oder XMLHttp?',
        a: 'Folgen von Großbuchstaben gelten als ein Wort: HTMLParser zerfällt in HTML und Parser, ebenso wie html_parser, und die Konvertierung in beide Richtungen liefert dasselbe Ergebnis. Bei unkonventionellen Namen wie iOS kann die Zerlegung mehrdeutig sein — vor dem Massenersatz die Ausgabe kurz prüfen.',
      },
    ],
  },
}
