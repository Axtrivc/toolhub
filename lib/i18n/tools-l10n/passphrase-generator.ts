/**
 * passphrase-generator 本地化 bundle —— zh / es / de(B14 生成器与趣味批次)
 * 覆盖: ui / faqs / useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const PassphraseGeneratorL10n: ToolL10n = {

  es: {
    useCases: ['crear frases-contraseña memorables de alta entropía', 'saber cuántas palabras necesitas según los bits', 'generar claves que la familia pueda teclear', 'elegir entre frase-contraseña y contraseña de caracteres'],
    faqs: [
      { q: '¿Cuántas palabras debo usar?', a: 'Con la lista de 256 palabras, seis dan 48 bits y diez dan 80, el nivel que recomiendan los equipos de seguridad para cuentas valiosas. Cuatro palabras (32 bits) solo alcanzan para inicios de sesión de bajo riesgo.' },
      { q: '¿Cómo se calcula la entropía?', a: 'Cada palabra se sortea uniformemente entre exactamente 256 opciones, así que aporta log2(256) = 8 bits; cada dígito final añade log2(10) ≈ 3,32 bits. Capitalizar añade como mucho 1 bit por palabra y se ignora.' },
      { q: '¿Frase-contraseña o contraseña aleatoria de caracteres?', a: 'Con la misma entropía, las frases-contraseña son mucho más fáciles de teclear y recordar. Si el sitio limita la longitud, usa el generador de contraseñas; para contraseñas maestras y teclados completos, prefiere frases.' },
      { q: '¿Es seguro generarla aquí?', a: 'La lista está integrada en la página y el sorteo usa la Web Crypto API del navegador en local: no se envía nada por la red y la lista no se descarga.' },
    ],
    ui: {
      'generatedLabel': 'Frase-contraseña generada',
      'clickGenerate': 'Pulsa generar',
      'regenerate': 'Regenerar',
      'copyPassphrase': 'Copiar frase',
      'wordCount': 'Palabras',
      'bits': 'bits',
      'entropyLabel': 'Entropía',
      'entropyHint': 'Cada palabra añade exactamente 8 bits (lista de 256); cada dígito ~3,3.',
      'verdictGreat': 'Excelente',
      'verdictStrong': 'Fuerte',
      'verdictFair': 'Aceptable',
      'verdictWeak': 'Débil',
      'separator': 'Separador',
      'digits': 'Dígitos finales',
      'none': 'Ninguno',
      'digitWord': 'dígito(s)',
      'capitalize': 'Capitalizar cada palabra',
      'sep.-': 'guion -',
      'sep..': 'punto .',
      'sep._': 'guión bajo _',
      'sep.+': 'más +',
      'sep.space': 'espacio',
      'note': '🔑 Las palabras salen de una lista integrada de 256 con azar de grado criptográfico: cuatro palabras dan 32 bits, seis 48 y diez 80. Memorable y tecleable — a diferencia de una sopa de 16 símbolos. Generación 100 % sin conexión.',
    },
  },
  de: {
    useCases: ['merkbare Passphrasen mit hoher Entropie erzeugen', 'die Wortanzahl über die Bit-Zahl planen', 'Passwörter erzeugen, die Familie eintippen kann', 'zwischen Passphrase und Zeichenpasswort entscheiden'],
    faqs: [
      { q: 'Wie viele Wörter soll ich nehmen?', a: 'Bei der 256-Wort-Liste liefern sechs Wörter 48 Bits und zehn 80 — das Niveau, das Sicherheitsteams für wertvolle Konten empfehlen. Vier Wörter (32 Bits) reichen nur für unkritische Logins.' },
      { q: 'Wie wird die Entropie berechnet?', a: 'Jedes Wort ist eine gleichmäßige Wahl aus genau 256 Optionen, trägt also log2(256) = 8 Bits bei; jede Endziffer addiert log2(10) ≈ 3,32 Bits. Großschreibung bringt höchstens 1 Bit pro Wort und wird ignoriert.' },
      { q: 'Passphrase oder zufälliges Zeichenpasswort?', a: 'Bei gleicher Entropie sind Passphrasen viel leichter zu tippen und zu merken. Begrenzt die Seite die Länge, nimm den Passwort-Generator; für Master-Passwörter und vollständige Tastaturen passt die Passphrase.' },
      { q: 'Ist die Erzeugung sicher?', a: 'Die Liste steckt in der Seite, und die Auslosung läuft lokal über die Web-Crypto-API des Browsers — nichts geht übers Netz, die Liste wird nicht heruntergeladen.' },
    ],
    ui: {
      'generatedLabel': 'Erzeugte Passphrase',
      'clickGenerate': 'Klicken zum Erzeugen',
      'regenerate': 'Neu erzeugen',
      'copyPassphrase': 'Passphrase kopieren',
      'wordCount': 'Wörter',
      'bits': 'Bits',
      'entropyLabel': 'Entropie',
      'entropyHint': 'Jedes Wort gibt exakt 8 Bits (256-Wort-Liste); jede Ziffer ~3,3.',
      'verdictGreat': 'Ausgezeichnet',
      'verdictStrong': 'Stark',
      'verdictFair': 'Ordentlich',
      'verdictWeak': 'Schwach',
      'separator': 'Trennzeichen',
      'digits': 'Angehängte Ziffern',
      'none': 'Keine',
      'digitWord': 'Ziffer(n)',
      'capitalize': 'Jedes Wort großschreiben',
      'sep.-': 'Bindestrich -',
      'sep..': 'Punkt .',
      'sep._': 'Unterstrich _',
      'sep.+': 'Plus +',
      'sep.space': 'Leerzeichen',
      'note': '🔑 Die Wörter stammen aus einer integrierten 256-Wort-Liste mit kryptografischem Zufall: vier Wörter 32 Bits, sechs 48, zehn volle 80. Merkbar und tippbar — anders als eine 16-Zeichen-Suppense. Erzeugung 100 % offline.',
    },
  },
}
