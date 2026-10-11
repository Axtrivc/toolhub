/**
 * context-window-checker 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(启发式估算,非精确公式)。
 */
import type { ToolL10n } from '../tool-l10n'

export const ContextWindowCheckerL10n: ToolL10n = {
  zh: {
    useCases: [
      '发送前检查:把整段系统提示 + 文档粘贴进来,确认没有顶爆目标模型的上下文窗口',
      'RAG 切块验收:估算每个检索片段的 token 占用,反推单次请求最多塞几个片段',
      '对比同一内容的中英文版本——中文按约 1.1 token/字计,往往比英文翻译贵 30% 以上',
      '为输出反推输入上限:128K 窗口要留 4K 给回复,输入就得控制在 124K 以内',
    ],
    faqs: [
      { q: '这个估算有多准?', a: '采用业界通行的启发式:拉丁文本按字符数 ÷ 4、CJK 按每字约 1.1 token 估算,与真实分词器的误差通常在 ±10% 以内。要做计费级精确统计,请用官方的 tiktoken 或各厂商 tokenizer——本工具的定位是发送前的快速体检。' },
      { q: '为什么中文比英文"贵"?', a: '主流 BPE 分词器的词表以英文为中心训练,一个英文单词常合并为 1 个 token,而一个汉字通常独占 1 个以上 token。同样语义的提示词,中文 token 消耗普遍高出三成,长文档场景务必实测。' },
      { q: '上下文窗口只算输入吗?', a: '不是。输入(系统提示 + 历史消息 + 文档)与模型输出共享同一个窗口。若窗口 128K 而你塞了 126K 输入,模型只剩 2K 可写——长文生成任务务必预留输出余量。' },
      { q: '超窗口会发生什么?', a: '多数 API 直接报 context_length_exceeded 错误;部分框架会静默截断最早的消息,导致模型"失忆"却不报错。与其事后排查,不如发送前在这里把文本量校准。' },
    ],
    ui: {
      'estimate': '≈ {n} tokens · {c} 字符',
      'exceeds': '超出 {}',
      'headroom': '剩余',
      'inputLabel': '粘贴你的提示词 / 文档',
      'note': '📏 token 数为近似估算(拉丁文本字符÷4,CJK 每字约 1.1)——5% 以内的波动视为噪声。输出与输入共享同一窗口,请为回复加系统提示预留空间。',
      'ofWindow': '占窗口',
      'placeholder': '粘贴你打算发送的文本…',
    },
  },
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
