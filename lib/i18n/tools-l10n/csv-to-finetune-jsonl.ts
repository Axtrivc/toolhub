/**
 * csv-to-finetune-jsonl 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const CsvToFinetuneJsonlL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '输出即 OpenAI 微调 API 所需的 chat-messages JSONL。assistant 为空的行会被标记(而非丢弃)以便修正源数据。单元格内引号与逗号按 RFC 4180 处理。',
      'assistantColLabel': 'assistant 列',
      'copyJsonl': '复制 JSONL',
      'csvLabel': 'CSV(含表头行)',
      'errAssistantCol': '表头中未找到 assistant 列',
      'errSysCol': '表头中未找到 system 列',
      'errUserCol': '表头中未找到 user 列',
      'examples': '个样本',
      'loadSample': '加载示例',
      'rowNoAssistant': '第 {n} 行:assistant 内容为空',
      'sysColLabel': 'system 列(可选)',
      'userColLabel': 'user 列',
      'inputTooLarge': '输入超过 {n} 字符——为保证输入流畅已跳过转换。请精简或拆分 CSV 后再试。',
    },
  },
  es: {
    ui: {
      'note': 'La salida es el JSONL de mensajes que espera la API de fine-tuning de OpenAI. Las filas con assistant vacío se marcan (no se descartan). Comillas internas según RFC 4180.',
      'assistantColLabel': 'Columna assistant',
      'copyJsonl': 'Copiar JSONL',
      'csvLabel': 'CSV (con fila de encabezado)',
      'errAssistantCol': 'Columna assistant no encontrada',
      'errSysCol': 'Columna system no encontrada',
      'errUserCol': 'Columna user no encontrada',
      'examples': 'ejemplos',
      'loadSample': 'Cargar ejemplo',
      'rowNoAssistant': 'Fila {n}: contenido assistant vacío',
      'sysColLabel': 'Columna system (opcional)',
      'userColLabel': 'Columna user',
      'inputTooLarge': 'La entrada supera los {n} caracteres — la conversión se omite para mantener la escritura fluida. Recorta o divide el CSV.',
    },
  },
  de: {
    ui: {
      'note': 'Die Ausgabe ist das Chat-Messages-JSONL der OpenAI-Fine-Tuning-API. Zeilen mit leerem Assistant werden markiert, nicht verworfen. Anführungszeichen folgen RFC 4180.',
      'assistantColLabel': 'Assistant-Spalte',
      'copyJsonl': 'JSONL kopieren',
      'csvLabel': 'CSV (mit Kopfzeile)',
      'errAssistantCol': 'Assistant-Spalte nicht gefunden',
      'errSysCol': 'System-Spalte nicht gefunden',
      'errUserCol': 'User-Spalte nicht gefunden',
      'examples': 'Beispiele',
      'loadSample': 'Beispiel laden',
      'rowNoAssistant': 'Zeile {n}: leerer Assistant-Inhalt',
      'sysColLabel': 'System-Spalte (optional)',
      'userColLabel': 'User-Spalte',
      'inputTooLarge': 'Die Eingabe überschreitet {n} Zeichen — die Konvertierung wird übersprungen, damit die Eingabe reaktionsfähig bleibt. CSV kürzen oder teilen.',
    },
  },
}
