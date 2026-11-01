/**
 * curl-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const curlConverterL10n: ToolL10n = {

  es: {
    ui: {
      'clear': 'Limpiar',
      'copy': 'Copiar',
      'hasBody': 'tiene cuerpo',
      'headers': 'cabecera(s)',
      'ignoredFlags': 'opciones no admitidas ignoradas',
      'invalidCurl': 'Comando curl inválido',
      'noUrl': '(sin URL)',
      'note': '🔒 100% en el cliente — el análisis se ejecuta en tu navegador. No se ejecuta ningún comando; solo se convierte texto.',
      'pasteCurl': 'Pega tu comando curl',
    },
    useCases: ['convertir un comando curl copiado del navegador a código JavaScript/Python', 'generar peticiones ejecutables a partir del curl de un README o la documentación de un colega', 'elegir entre Fetch, Axios y Python requests', 'parsear curl (con cabeceras y cuerpo) localmente, sin conexión'],
    faqs: [
      { q: '¿Qué funciones de curl se admiten?', a: 'Parsea la URL, el método -X / --request, las cabeceras -H / --header (incluidos Content-Type y Authorization), los cuerpos -d / --data / --data-raw y -k / --insecure. Gestiona el entrecomillado del shell (comillas simples y dobles) y la sintaxis ANSI-C $\'...\'. Las opciones no admitidas se ignoran.' },
      { q: '¿Cómo se codifica el cuerpo de la petición?', a: 'Los cuerpos en bruto (-d "..." o --data-raw) se pasan tal cual. Para JavaScript Fetch pasa a ser body: "..."; para Python requests pasa a ser data="..." (o json= para Content-Type JSON cuando sea posible). Las subidas multipart (-F) no se convierten a código multipart — usa un cliente dedicado para eso.' },
      { q: '¿Mi comando curl se envía a un servidor?', a: 'No. El análisis y la generación de código se ejecutan totalmente en tu navegador con un analizador léxico escrito a mano. Tu comando, tokens o cabeceras nunca se suben, lo que también importa si tu curl contiene tokens o secretos — aunque aun así conviene evitar pegar credenciales reales en cualquier sitio.' },
    ],
  },
  de: {
    ui: {
      'clear': 'Leeren',
      'copy': 'Kopieren',
      'hasBody': 'hat Body',
      'headers': 'Header',
      'ignoredFlags': 'nicht unterstützte Optionen ignoriert',
      'invalidCurl': 'Ungültiger curl-Befehl',
      'noUrl': '(keine URL)',
      'note': '🔒 100% clientseitig — das Parsing läuft in deinem Browser. Es wird kein Befehl ausgeführt; nur Text wird umgewandelt.',
      'pasteCurl': 'Füge deinen curl-Befehl ein',
    },
    useCases: ['einen aus dem Browser kopierten curl-Befehl in JavaScript/Python-Code umwandeln', 'aus curl in einem README oder Doc eines Kollegen ausführbare Requests erzeugen', 'zwischen Fetch, Axios und Python requests wählen', 'curl (mit Headern, Body) lokal parsen, ohne Netz'],
    faqs: [
      { q: 'Welche curl-Funktionen werden unterstützt?', a: 'Parst die URL, die Methode (-X / --request), die Header (-H / --header, inklusive Content-Type und Authorization), die Bodies (-d / --data / --data-raw) sowie -k / --insecure. Shell-Quoting (einfache und doppelte Anführungszeichen) und die ANSI-C-Syntax $\'...\' werden behandelt. Nicht unterstützte Optionen werden ignoriert.' },
      { q: 'Wie wird der Request-Body codiert?', a: 'Raw-Bodies (-d "..." oder --data-raw) werden unverändert durchgereicht. Für JavaScript Fetch wird daraus body: "..."; für Python requests wird es data="..." (bzw. json= bei JSON-Content-Type, wenn möglich). Multipart-Uploads (-F) werden nicht in Multipart-Code umgewandelt — nutze dafür einen dedizierten Client.' },
      { q: 'Wird mein curl-Befehl an einen Server gesendet?', a: 'Nein. Parsing und Codegenerierung laufen vollständig in deinem Browser mit einem handgeschriebenen Tokenizer. Dein Befehl, Tokens oder Header werden nie hochgeladen — was auch zählt, wenn dein curl Tokens oder Secrets enthält. Trotzdem solltest du echte Credentials nirgendwo einfügen.' },
    ],
  },
}
