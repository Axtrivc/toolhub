/**
 * remove-duplicate-lines 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为 batch 文本工具,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const removeDuplicateLinesL10n: ToolL10n = {
  zh: {
    useCases: [
      '清理邮箱订阅列表(去除重复订阅者)',
      'SEO 关键词去重后再做分析',
      '整理库存与 SKU 产品清单',
      '清理日志文件中重复的错误行',
    ],
    faqs: [
      { q: '会对列表排序吗?', a: '不会——顺序保持不变。如果你还想要按字母排序,请使用「排序行」工具。' },
      { q: '有大小限制吗?', a: '没有硬性限制,但非常大的输入(数百万行)可能拖慢浏览器。本工具在本地运行。' },
    ],
  },
  es: {
    useCases: [
      'limpiar listas de suscriptores de correo (quitar duplicados)',
      'depurar palabras clave SEO antes de analizarlas',
      'ordenar listas de inventario y SKU',
      'limpiar líneas de error repetidas en archivos de registro',
    ],
    faqs: [
      { q: '¿Esto ordena mi lista?', a: 'No — se conserva el orden. Usa la herramienta Ordenar líneas si también quieres un orden alfabético.' },
      { q: '¿Hay un límite de tamaño?', a: 'No hay un límite estricto, pero entradas muy grandes (millones de líneas) pueden ralentizar tu navegador. La herramienta se ejecuta localmente.' },
    ],
  },
  de: {
    useCases: [
      'Newsletter-Abonnentenlisten bereinigen (Duplikate entfernen)',
      'SEO-Schlüsselwörter vor der Analyse entdoppeln',
      'Bestands- und SKU-Listen aufräumen',
      'wiederholte Fehlerzeilen in Logdateien bereinigen',
    ],
    faqs: [
      { q: 'Wird meine Liste sortiert?', a: 'Nein — die Reihenfolge bleibt erhalten. Verwende das Werkzeug Zeilen sortieren, wenn du zusätzlich alphabetische Sortierung möchtest.' },
      { q: 'Gibt es eine Größenbeschränkung?', a: 'Keine harte Grenze, aber sehr große Eingaben (Millionen Zeilen) können deinen Browser verlangsamen. Das Werkzeug läuft lokal.' },
    ],
  },
}
