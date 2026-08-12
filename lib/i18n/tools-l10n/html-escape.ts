/**
 * html-escape 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const htmlEscapeL10n: ToolL10n = {
  zh: {
    useCases: [
      '转义用户输入以防 XSS 攻击',
      '在页面安全展示代码片段',
      '把 & < > " 编码为 HTML 实体',
      '清理从网页复制的内容',
    ],
    faqs: [
      { q: '这样就能防止所有 XSS 吗?', a: 'HTML 正文转义覆盖了最常见的情况,但 XSS 有多种变体(基于属性、脚本、URL)。对不受信任的 HTML,请使用 DOMPurify 等可靠库。' },
    ],
  },
  es: {
    useCases: [
      'escapar la entrada del usuario para prevenir XSS',
      'mostrar fragmentos de código de forma segura',
      'codificar & < > " como entidades HTML',
      'limpiar contenido copiado de páginas web',
    ],
    faqs: [
      { q: '¿Es suficiente para prevenir todo XSS?', a: 'El escapado del cuerpo HTML cubre el caso más común, pero el XSS tiene muchas variantes (por atributo, por script, por URL). Usa una librería de confianza como DOMPurify para HTML no confiable.' },
    ],
  },
  de: {
    useCases: [
      'Nutzereingaben escapen, um XSS zu verhindern',
      'Code-Schnipsel sicher anzeigen',
      '& < > " als HTML-Entities kodieren',
      'Inhalte bereinigen, die vom Web kopiert wurden',
    ],
    faqs: [
      { q: 'Reicht das, um alle XSS zu verhindern?', a: 'HTML-Body-Escaping deckt den häufigsten Fall ab, aber XSS hat viele Varianten (attribut-, skript- oder url-basiert). Nutze für nicht vertrauenswürdiges HTML eine seriöse Bibliothek wie DOMPurify.' },
    ],
  },
}
