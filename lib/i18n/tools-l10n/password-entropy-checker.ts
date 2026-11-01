/**
 * password-entropy-checker 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(熵公式已并入 faqs 说明)。
 */
import type { ToolL10n } from '../tool-l10n'

export const PasswordEntropyCheckerL10n: ToolL10n = {

  es: {
    useCases: [
      'Medir la fuerza antes de cambiar una contraseña: superar los 75 bits antes de guardarla en el gestor',
      'Comparar estrategias cara a cara: «P@ssw0rd!» (corta y compleja) frente a «correct horse battery staple» (frase larga)',
      'Auditar las contraseñas compartidas del equipo contra el umbral de 75 bits que recomienda seguridad',
      'Demo didáctica: mostrar cómo palabras de diccionario y secuencias de teclado desploman 60 bits teóricos a 30',
    ],
    faqs: [
      { q: '¿Cómo se calcula la entropía?', a: 'Fórmula base: entropía (bits) = longitud × log2(tamaño del conjunto). Minúsculas ≈ 4,7 bits por carácter, con dígitos ≈ 5,2, y con mayúsculas y símbolos (95 caracteres imprimibles) ≈ 6,6. Encima se aplican penalizaciones que imitan a los crackers reales — palabras de diccionario, secuencias de teclado y repeticiones restan mucho, porque se prueban mucho antes que la fuerza bruta.' },
      { q: '¿Qué significa el umbral de 75 bits?', a: 'Es la recomendación habitual para cuentas de alto valor (correo principal, banca, contraseña maestra del gestor): a 100 000 millones de intentos por segundo en ataque offline, 75 bits tardan miles de años en agotarse. Para cuentas normales bastan 60+ bits; por debajo de 40 es como no tener contraseña.' },
      { q: '¿Es realista la estimación de crackeo?', a: 'Asume 100 000 millones (10¹¹) de intentos/s: el escenario offline, con el atacante poseyendo los hashes y un clúster de GPUs corriendo hashcat. El credential stuffing online es órdenes de magnitud más lento por red y captchas — pero la filtración offline es el escenario que importa, y por eso se estima el peor caso.' },
      { q: '¿Mi contraseña sale de esta página?', a: 'No. El análisis es 100 % local en el navegador, sin una sola petición — verificable en la pestaña de red de DevTools. Precisamente por eso es seguro probar contraseñas reales; desconfía de cualquier medidor de fuerza que requiera conexión.' },
    ],
    ui: {
      'analyzeIt': 'Analizar arriba ↑',
      'crackAssume': 'a 100 mil millones de intentos/s',
      'crackEstimate': 'Estimación de crackeo offline',
      'days': 'días',
      'entropyBits': 'Entropía',
      'genStrong': 'Generar ahora una contraseña fuerte de 128 bits',
      'genStrongHint': '{n} caracteres · aleatorio criptográfico · ≥128 bits de entropía',
      'heatDeath': 'más allá de escalas cósmicas',
      'instant': 'al instante',
      'millionYears': 'millones de años',
      'minutes': '< 1 hora',
      'note': '🔐 Base = longitud × log2(conjunto): «correct horse battery staple» gana a «P@ssw0rd!» porque la longitud manda. Las penalizaciones imitan crackers reales. Análisis 100 % offline.',
      'penRepeat': 'muchos caracteres repetidos',
      'penDictStart': 'empieza por "password"',
      'penKeyboardSeq': 'secuencia de teclado',
      'penRepeatRun': 'un único carácter repetido',
      'penalties': 'Penalizaciones: {list}',
      'pwLabel': 'Contraseña a analizar (nunca sale de esta página)',
      'regenStrong': '↻ Regenerar',
      'strongVerdict': 'Fuerte: supera el umbral de 75 bits que recomiendan los equipos de seguridad para cuentas valiosas.',
      'years': 'años',
    },
  },
  de: {
    useCases: [
      'Vor dem Passwortwechsel die Stärke beziffern: erst bei 75+ Bits im Passwort-Manager speichern',
      'Zwei Strategien direkt vergleichen: „P@ssw0rd!“ (kurz und komplex) gegen „correct horse battery staple“ (lange Phrase)',
      'Geteilte Team-Passwörter gegen die 75-Bit-Empfehlung der Security-Teams auditieren',
      'Lehr-Demo: Wie Wörterbuchwörter und Tastaturfolgen 60 theoretische Bits auf 30 einbrechen lassen',
    ],
    faqs: [
      { q: 'Wie wird die Entropie berechnet?', a: 'Grundformel: Entropie (Bits) = Länge × log2(Zeichenvorrat). Kleinbuchstaben ≈ 4,7 Bits pro Zeichen, mit Ziffern ≈ 5,2, und mit Großbuchstaben und Sonderzeichen (95 druckbare Zeichen) ≈ 6,6. Darauf kommen Abzüge, die echte Cracker nachahmen — Wörterbuchwörter, Tastaturfolgen und Wiederholungen kosten viel, weil sie lange vor Brute-Force getestet werden.' },
      { q: 'Was bedeutet die 75-Bit-Schwelle?', a: 'Die gängige Empfehlung für hochwertige Konten (Haupt-Mail, Banking, Master-Passwort des Managers): Bei 100 Mrd. Versuchen pro Sekunde im Offline-Angriff dauern 75 Bits Jahrtausende. Für normale Konten reichen 60+ Bits; unter 40 ist praktisch schutzlos.' },
      { q: 'Ist die Knack-Zeit realistisch?', a: 'Angesetzt sind 100 Mrd. (10¹¹) Versuche/s — das Offline-Szenario: Der Angreifer hat die Hashes und lässt hashcat auf einem GPU-Cluster laufen. Online-Credential-Stuffing ist um Größenordnungen langsamer (Netzwerk, Captchas), aber der Offline-Leak ist der relevante Fall — darum wird der Worst Case gerechnet.' },
      { q: 'Verlässt mein Passwort diese Seite?', a: 'Nein. Die Analyse läuft zu 100 % lokal im Browser, null Anfragen — im Netzwerk-Tab der DevTools nachprüfbar. Genau darum darf man hier echte Passwörter testen; jedem Stärke-Messer, der online geht, sollte man misstrauen.' },
    ],
    ui: {
      'analyzeIt': 'Oben analysieren ↑',
      'crackAssume': 'bei 100 Mrd. Versuchen/s',
      'crackEstimate': 'Offline-Knack-Schätzung',
      'days': 'Tage',
      'entropyBits': 'Entropie',
      'genStrong': 'Jetzt 128-Bit-Starkpasswort erzeugen',
      'genStrongHint': '{n} Zeichen · kryptografischer Zufall · ≥128 Bit Entropie',
      'heatDeath': 'jenseits kosmischer Zeiträume',
      'instant': 'sofort',
      'millionYears': 'Millionen Jahre',
      'minutes': '< 1 Stunde',
      'note': '🔐 Basis = Länge × log2(Zeichenvorrat): „correct horse battery staple“ schlägt „P@ssw0rd!“, denn Länge dominiert. Abzüge ahmen echte Cracker nach. Analyse 100 % offline.',
      'penRepeat': 'viele wiederholte Zeichen',
      'penDictStart': 'beginnt mit „password“',
      'penKeyboardSeq': 'Tastatursequenz',
      'penRepeatRun': 'einzelnes wiederholtes Zeichen',
      'penalties': 'Abzüge angewandt: {list}',
      'pwLabel': 'Zu analysierendes Passwort (verlässt diese Seite nie)',
      'regenStrong': '↻ Neu generieren',
      'strongVerdict': 'Stark: über der 75-Bit-Schwelle, die Sicherheitsteams für wertvolle Konten empfehlen.',
      'years': 'Jahre',
    },
  },
}
