/**
 * html-unescape 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const htmlUnescapeL10n: ToolL10n = {
  zh: {
    useCases: [
      '清理从网页抓取的内容',
      '读取数据库或 API 里的转义文本',
      '解码 CMS 导出的内容',
      '修复双重转义文本(常见 bug)',
    ],
    faqs: [
      { q: '反转义安全吗?', a: '本工具使用一个独立的 textarea 元素,解码实体时不会执行任何 HTML。输出是纯文本,因此不会触发脚本。' },
    ],
  },
  es: {
    useCases: [
      'limpiar contenido extraído de sitios web',
      'leer texto escapado de bases de datos o APIs',
      'decodificar contenido exportado desde un CMS',
      'arreglar texto con doble escapado (un bug común)',
    ],
    faqs: [
      { q: '¿Es seguro desescapar?', a: 'Esta herramienta usa un elemento textarea separado, que decodifica entidades sin ejecutar ningún HTML. La salida es texto plano, por lo que no puede activar scripts.' },
    ],
  },
  de: {
    useCases: [
      'vom Web kopierte Inhalte bereinigen',
      'escapten Text aus Datenbanken oder APIs lesen',
      'Inhalte aus CMS-Exporten dekodieren',
      'doppelt escapten Text reparieren (häufiger Bug)',
    ],
    faqs: [
      { q: 'Ist das Unescapen sicher?', a: 'Dieses Werkzeug nutzt ein separates Textarea-Element, das Entities dekodiert, ohne HTML auszuführen. Die Ausgabe ist Klartext und kann daher keine Skripte auslösen.' },
    ],
  },
}
