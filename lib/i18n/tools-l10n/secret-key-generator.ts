/**
 * secret-key-generator 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const secretKeyGeneratorL10n: ToolL10n = {

  es: {
    ui: {
      'entropyGauge': 'Fuerza de entropía',
      'strengthExcellent': 'Excelente',
      'bits': 'bits',
      'bytes': 'bytes',
      'chars': 'caracteres',
      'copy': 'Copiar',
      'copyAll': 'Copiar todo',
      'entropy': 'Entropía:',
      'fmtAlnum': 'Alfanumérico (A–Z a–z 0–9)',
      'fmtApiKey': 'Estilo API key (prefijo + aleatorio)',
      'fmtBase64': 'Base64',
      'fmtBase64Url': 'Base64URL',
      'fmtHex': 'Hex',
      'fmtUuid': 'UUID v4',
      'format': 'Formato',
      'generate': 'Generar',
      'length': 'Longitud:',
      'noteIntro': '🔒 Generado con ',
      'noteMid1': ' — el CSPRNG de tu navegador — totalmente en este dispositivo; nada se sube. La salida alfanumérica usa ',
      'noteOutro': ', por lo que cada carácter está distribuido uniformemente (sin sesgo de módulo). Guarda los secretos en un gestor de contraseñas o en el almacén de secretos de tu plataforma, y rota cualquier clave que aparezca en logs, tickets o capturas.',
      'noteRejectionSampling': 'muestreo por rechazo',
      'prefix': 'Prefijo',
      'randomChars': 'caracteres aleatorios',
      'randomPart': 'Parte aleatoria:',
      'regenerateAll': 'Regenerar todo',
      'strengthGood': 'Aceptable',
      'strengthStrong': 'Fuerte',
      'strengthWeak': 'Débil',
    },
    useCases: [
      'generador de claves API aleatorias online',
      'generar clave secreta para JWT',
      'generador de tokens criptográficamente seguro',
      'generador de claves hexadecimales',
    ],
    faqs: [
      {
        q: '¿Estas claves son criptográficamente seguras?',
        a: 'Sí. Usan la fuente aleatoria segura del navegador (crypto.getRandomValues), el mismo CSPRNG que para claves TLS, así que la salida sirve para secretos de API, tokens de sesión y otros valores sensibles — no Math.random().',
      },
      {
        q: '¿Qué longitud debe tener una clave API?',
        a: '32 caracteres hexadecimales (128 bits) es un mínimo razonable y 64 hex (256 bits) da un buen margen. La longitud importa mucho más que el alfabeto para resistir fuerza bruta, así que prefiere más longitud a caracteres más exóticos.',
      },
      {
        q: '¿Cuál es la diferencia entre salida hexadecimal y Base64?',
        a: 'Para la misma cantidad de aleatoriedad, hex usa solo 0-9 y a-f (cadena más larga), mientras que Base64 usa un alfabeto mayor (cadena más corta). Ambos son igual de seguros a igual longitud de bits; elige el que espere tu sistema consumidor.',
      },
      {
        q: '¿Sirve un UUID v4 como secreto?',
        a: 'Con matices: un UUID v4 lleva 122 bits aleatorios, menos que 128 bits en hex, y los guiones lo alargan. Como identificador (request ID, clave primaria) es perfecto; para secretos de API prefiere 256 bits en hex o Base64.',
      },
    ],
  },
  de: {
    ui: {
      'entropyGauge': 'Entropie-Stärke',
      'strengthExcellent': 'Ausgezeichnet',
      'bits': 'Bits',
      'bytes': 'Bytes',
      'chars': 'Zeichen',
      'copy': 'Kopieren',
      'copyAll': 'Alle kopieren',
      'entropy': 'Entropie:',
      'fmtAlnum': 'Alphanumerisch (A–Z a–z 0–9)',
      'fmtApiKey': 'API-Key-Stil (Präfix + Zufall)',
      'fmtBase64': 'Base64',
      'fmtBase64Url': 'Base64URL',
      'fmtHex': 'Hex',
      'fmtUuid': 'UUID v4',
      'format': 'Format',
      'generate': 'Generieren',
      'length': 'Länge:',
      'noteIntro': '🔒 Erzeugt mit ',
      'noteMid1': ' — dem CSPRNG deines Browsers — vollständig auf diesem Gerät; nichts wird hochgeladen. Die alphanumerische Ausgabe nutzt ',
      'noteOutro': ', sodass jedes Zeichen gleichverteilt ist (kein Modulo-Bias). Speichere Secrets in einem Passwort-Manager oder dem Secrets-Speicher deiner Plattform und rotiere jeden Key, der jemals in Logs, Tickets oder Screenshots auftaucht.',
      'noteRejectionSampling': 'Rejection-Sampling',
      'prefix': 'Präfix',
      'randomChars': 'Zufallszeichen',
      'randomPart': 'Zufallsteil:',
      'regenerateAll': 'Alle neu generieren',
      'strengthGood': 'Gut',
      'strengthStrong': 'Stark',
      'strengthWeak': 'Schwach',
    },
    useCases: [
      'Zufalls-API-Key-Generator online',
      'Geheimschlüssel für JWT erzeugen',
      'kryptografisch sicherer Token-Generator',
      'Hex-Secret-Key-Generator',
    ],
    faqs: [
      {
        q: 'Sind diese Schlüssel kryptografisch sicher?',
        a: 'Ja. Sie nutzen die sichere Zufallsquelle des Browsers (crypto.getRandomValues), denselben CSPRNG wie für TLS-Schlüssel, sodass die Ausgabe für API-Secrets, Session-Tokens und andere sicherheitsrelevante Werte taugt — nicht Math.random().',
      },
      {
        q: 'Wie lang sollte ein API-Key sein?',
        a: '32 Hex-Zeichen (128 Bit) sind ein sinnvolles Minimum, 64 Hex-Zeichen (256 Bit) bieten einen guten Puffer. Gegen Brute Force zählt die Länge weit mehr als das Alphabet — lieber mehr Länge als exotischere Zeichen.',
      },
      {
        q: 'Was ist der Unterschied zwischen Hex- und Base64-Ausgabe?',
        a: 'Bei gleicher Zufälligkeit verwendet Hex nur 0-9 und a-f (längerer String), Base64 ein größeres Alphabet (kürzerer String). Beide sind bei gleicher Bitlänge gleich sicher — wähle, was dein verarbeitendes System erwartet.',
      },
      {
        q: 'Taugt ein UUID v4 als Secret?',
        a: 'Mit Einschränkung: Ein UUID v4 enthält nur 122 Zufallsbits, weniger als 128 Bit in Hex, und die Bindestriche verlängern den String. Als ID (Request-ID, Primärschlüssel) ideal; für API-Secrets besser 256 Bit als Hex oder Base64.',
      },
    ],
  },
}
