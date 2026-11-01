/**
 * context-window-checker 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(启发式估算,非精确公式)。
 */
import type { ToolL10n } from '../tool-l10n'

export const ContextWindowCheckerL10n: ToolL10n = {

  es: {
    useCases: [
      'Chequeo antes de enviar: pega el system prompt completo + el documento y confirma que cabe en la ventana del modelo',
      'Validar chunks RAG: estima los tokens de cada fragmento y deduce cuántos caben por petición',
      'Comparar la versión china e inglesa del mismo contenido — el chino, a ~1,1 tokens por carácter, suele costar un 30 % más',
      'Reservar margen de salida: en una ventana de 128K con 4K para la respuesta, la entrada debe quedar bajo 124K',
    ],
    faqs: [
      { q: '¿Qué precisión tiene la estimación?', a: 'Usa la heurística estándar: en texto latino, caracteres ÷ 4; CJK ≈ 1,1 tokens por carácter; error típico de ±10 % frente al tokenizador real. Para cifras de facturación usa tiktoken o el tokenizador oficial — esta herramienta es una revisión rápida antes de enviar.' },
      { q: '¿Por qué el chino «cuesta» más que el inglés?', a: 'Los vocabularios BPE se entrenan centrados en inglés: una palabra inglesa suele fusionarse en 1 token, mientras que cada carácter chino ocupa 1 token o más. El mismo prompt en chino consume a menudo un 30 % más de tokens — mídelo en documentos largos.' },
      { q: '¿La ventana solo cuenta la entrada?', a: 'No. Entrada (system prompt + historial + documentos) y salida comparten la misma ventana. Si metes 126K en una ventana de 128K, al modelo le quedan 2K para responder — reserva siempre margen de salida en generaciones largas.' },
      { q: '¿Qué pasa si supero la ventana?', a: 'La mayoría de las APIs devuelven un error context_length_exceeded; algunos frameworks truncan en silencio los mensajes más antiguos y el modelo «olvida» sin avisar. Mejor calibrar el texto aquí antes de enviarlo que depurar después.' },
    ],
    ui: {
      'estimate': '≈ {n} tokens · {c} caracteres',
      'exceeds': 'excede por {}',
      'headroom': 'margen',
      'inputLabel': 'Pega tu prompt / documento',
      'note': '📏 Los tokens son estimaciones (caracteres÷4 en latín, ~1,1 por carácter CJK); las desviaciones de hasta un 5 % se consideran ruido. La salida comparte ventana: reserva margen para la respuesta y el system prompt.',
      'ofWindow': 'de la ventana',
      'placeholder': 'Pega el texto que enviarás…',
    },
  },
  de: {
    useCases: [
      'Check vor dem Absenden: kompletten System-Prompt + Dokument einfügen und prüfen, ob alles ins Fenster des Modells passt',
      'RAG-Chunks abnehmen: Token-Belegung je Fragment schätzen und ableiten, wie viele pro Anfrage passen',
      'Chinesische und englische Fassung vergleichen — Chinesisch kostet bei ~1,1 Tokens/Zeichen oft 30 % mehr',
      'Input-Limit aus dem Output-Bedarf ableiten: bei 128K Fenster und 4K Reserve fürs Antworten bleiben 124K für die Eingabe',
    ],
    faqs: [
      { q: 'Wie genau ist die Schätzung?', a: 'Sie folgt der gängigen Heuristik: lateinischer Text ≈ Zeichen ÷ 4, CJK ≈ 1,1 Tokens pro Zeichen; typische Abweichung zum echten Tokenizer innerhalb von ±10 %. Für abrechnungsgenaue Werte tiktoken oder den offiziellen Tokenizer nutzen — dieses Werkzeug ist der schnelle Check vor dem Senden.' },
      { q: 'Warum ist Chinesisch „teurer“ als Englisch?', a: 'BPE-Vokabulare werden englischzentriert trainiert: Ein englisches Wort verschmilzt oft zu 1 Token, ein chinesisches Zeichen belegt meist 1 Token oder mehr. Derselbe Prompt auf Chinesisch verbraucht häufig rund 30 % mehr Tokens — bei langen Dokumenten unbedingt messen.' },
      { q: 'Zählt das Fenster nur die Eingabe?', a: 'Nein. Eingabe (System-Prompt + Verlauf + Dokumente) und Ausgabe teilen sich dasselbe Fenster. Wer 126K in ein 128K-Fenster packt, lässt dem Modell nur 2K zum Schreiben — bei langen Generierungen immer Output-Reserve einplanen.' },
      { q: 'Was passiert bei Fenster-Überschreitung?', a: 'Die meisten APIs melden context_length_exceeded; manche Frameworks kürzen still die ältesten Nachrichten — das Modell „vergisst“, ohne dass ein Fehler erscheint. Textmenge lieber hier kalibrieren als hinterher debuggen.' },
    ],
    ui: {
      'estimate': '≈ {n} Tokens · {c} Zeichen',
      'exceeds': 'überschreitet um {}',
      'headroom': 'Spielraum',
      'inputLabel': 'Prompt / Dokument einfügen',
      'note': '📏 Token-Zahlen sind Schätzungen (Zeichen÷4 bei Latein, ~1,1 je CJK-Zeichen); Abweichungen bis 5 % gelten als Rauschen. Die Ausgabe teilt sich das Fenster — Spielraum für Antwort und System-Prompt einplanen.',
      'ofWindow': 'des Fensters',
      'placeholder': 'Füge den Text ein, den du senden willst…',
    },
  },
}
