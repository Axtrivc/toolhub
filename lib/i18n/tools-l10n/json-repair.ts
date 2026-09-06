/**
 * json-repair 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const JsonRepairL10n: ToolL10n = {
  zh: {
    useCases: [
      '修复 LLM 输出在对象中途被 max tokens 截断的 JSON',
      '剥掉模型回复外层的 Markdown 代码围栏再喂给解析器',
      '清理带尾逗号、单引号或无引号键的自动生成配置',
      '排查智能引号、NaN 字面量导致的解析失败',
    ],
    faqs: [
      { q: '它能修哪几类坏 JSON?', a: 'LLM 的经典翻车模式:输出截断(未闭合的对象/数组/字符串)、尾逗号、单引号或无引号键、包裹正文的 Markdown 代码围栏、智能引号、NaN/Infinity 字面量以及裸控制字符。每处修复都会记录下来,方便审计。' },
      { q: '修复会产出错误的数据吗?', a: '有可能——修复是尽力推断,不是魔法。截断的字符串可能在猜测的边界被闭合,无引号键按字面处理。务必查看修复日志,并在喂给生产代码前做语义校验。' },
      { q: 'LLM 为什么会输出非法 JSON?', a: '采样机制使然:模型逐 token 生成文本,可能在对象中途撞上 max tokens 停下,或偏离 JSON 指令。根治靠供应商的结构化输出/JSON 模式,再配一层修复作为兜底。' },
      { q: '有大小限制或隐私顾虑吗?', a: '修复完全在浏览器本地运行,内容不上传,机密数据不出机器。实际限制是浏览器内存:几十 MB 量级的负载处理起来没问题。' },
    ],
    ui: {
      'appliedAnyway': '失败前尝试过的修复：',
      'copyJson': '复制 JSON',
      'inputLabel': '损坏的 JSON',
      'loadSample': '加载示例',
      'note': '覆盖 LLM 经典翻车模式：markdown 围栏、尾逗号、单引号、裸键、智能引号、token 上限导致的截断。深度畸形输入会带解析器位置大声报错，而不是瞎猜。',
      'repairsApplied': '已应用的修复',
      'stillBroken': '修复后仍无法解析——下方错误指出位置：',
      'validJson': '有效的 JSON',
      'inputTooLarge': '输入超过 {n} 字符——为保证输入流畅已跳过修复。请精简或拆分后再试。',
    },
  },
  es: {
    useCases: [
      'rescatar JSON truncado cuando la respuesta del LLM corta a mitad de objeto',
      'quitar la valla de código markdown que envuelve la salida del modelo',
      'corregir comas finales y claves sin comillas en configuraciones generadas',
      'depurar por qué el parser rechaza la salida de un agente de IA',
    ],
    faqs: [
      { q: '¿Qué tipo de JSON roto puede arreglar?', a: 'Los fallos clásicos de los LLM: salidas truncadas (objetos, arrays o cadenas sin cerrar), comas finales, claves entre comillas simples o sin comillas, vallas markdown alrededor del payload, comillas tipográficas, literales NaN/Infinity y caracteres de control. Registra cada arreglo para que puedas auditarlo.' },
      { q: '¿Puede la reparación producir datos erróneos?', a: 'Posiblemente: la reparación es inferencia de mejor esfuerzo, no magia. Una cadena truncada se cierra en un límite adivinado y una clave sin comillas se toma literalmente. Revisa siempre el registro de reparaciones y valida semánticamente antes de llevar la salida a producción.' },
      { q: '¿Por qué los LLM emiten JSON inválido?', a: 'Muestreo: el modelo genera texto token a token y puede detenerse al llegar a max tokens a mitad de objeto, o desviarse de la instrucción JSON sin modo de salida estructurada. La solución duradera es el modo estructurado/JSON del proveedor más una pasada de reparación como red de seguridad.' },
      { q: '¿Hay límite de tamaño o problema de privacidad?', a: 'La reparación corre localmente en tu navegador: nada se sube, así que los payloads confidenciales se quedan en tu máquina. El límite práctico es la memoria del navegador; cargas de decenas de MB se procesan sin problema.' },
    ],
    ui: {
      'appliedAnyway': 'Reparaciones intentadas antes de fallar:',
      'copyJson': 'Copiar JSON',
      'inputLabel': 'JSON roto',
      'loadSample': 'Cargar ejemplo',
      'note': 'Cubre los fallos típicos de los LLM: vallas markdown, comas finales, comillas simples, claves sin comillas y salidas truncadas. Lo muy roto falla con posición, sin adivinar.',
      'repairsApplied': 'Reparaciones aplicadas',
      'stillBroken': 'Sigue sin poder analizarse; el error indica dónde:',
      'validJson': 'JSON válido',
      'inputTooLarge': 'La entrada supera los {n} caracteres — la reparación se omite para mantener la escritura fluida. Recorta o divide la entrada.',
    },
  },
  de: {
    useCases: [
      'abgeschnittenes JSON retten, wenn die LLM-Antwort mitten im Objekt abbricht',
      'Markdown-Codezäune um die Modellantwort entfernen, bevor der Parser läuft',
      'Endkommas und nackte Keys in generierten Konfigurationen korrigieren',
      'nachvollziehen, warum ein Parser die Ausgabe eines KI-Agenten ablehnt',
    ],
    faqs: [
      { q: 'Welche Art von kaputtem JSON kann es reparieren?', a: 'Die klassischen LLM-Fehler: abgeschnittene Ausgaben (unterminierte Objekte/Arrays/Strings), Endkommas, Keys in einfachen Anführungszeichen oder ohne, Markdown-Zäune um den Payload, typografische Anführungszeichen, NaN/Infinity-Literale und rohe Steuerzeichen. Jede Reparatur wird protokolliert, damit du sie prüfen kannst.' },
      { q: 'Kann die Reparatur falsche Daten erzeugen?', a: 'Möglich — Reparatur ist best-effort-Inferenz, keine Magie. Ein abgeschnittener String wird an einer geratenen Grenze geschlossen, ein nackter Key wörtlich übernommen. Prüfe immer das Reparaturprotokoll und validiere semantisch, bevor die Ausgabe in Produktionscode landet.' },
      { q: 'Warum liefern LLMs überhaupt ungültiges JSON?', a: 'Sampling: Modelle generieren Token für Token und stoppen bei max tokens mitten im Objekt oder weichen ohne strukturierten Ausgabemodus von der JSON-Anweisung ab. Die dauerhafte Lösung ist Structured Output / JSON-Mode des Anbieters plus genau diese Reparaturpass als Sicherheitsnetz.' },
      { q: 'Gibt es Größenlimits oder Datenschutzbedenken?', a: 'Die Reparatur läuft lokal im Browser — nichts wird hochgeladen, vertrauliche Payloads bleiben auf deinem Rechner. Praktische Grenze ist der Browserspeicher: Payloads im niedrigen zweistelligen MB-Bereich funktionieren problemlos.' },
    ],
    ui: {
      'appliedAnyway': 'Vor dem Scheitern versuchte Reparaturen:',
      'copyJson': 'JSON kopieren',
      'inputLabel': 'Kaputtes JSON',
      'loadSample': 'Beispiel laden',
      'note': 'Deckt typische LLM-Fehler ab: Markdown-Zäune, Endkommas, einfache Anführungszeichen, nackte Keys und abgeschnittene Ausgaben. Tief kaputte Eingaben scheitern laut mit Position.',
      'repairsApplied': 'Angewandte Reparaturen',
      'stillBroken': 'Auch nach Reparaturen unlesbar — der Fehler zeigt die Stelle:',
      'validJson': 'Gültiges JSON',
      'inputTooLarge': 'Die Eingabe überschreitet {n} Zeichen — die Reparatur wird übersprungen, damit die Eingabe reaktionsfähig bleibt. Eingabe kürzen oder teilen.',
    },
  },
}
