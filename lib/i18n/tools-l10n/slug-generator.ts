/**
 * slug-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const slugGeneratorL10n: ToolL10n = {
  zh: {
    ui: {
      'asciiOnly': '仅 ASCII',
      'clear': '清空',
      'copy': '复制',
      'enterTitle': '输入你的标题或文本',
      'inputPlaceholder': '如:提升网站流量的 10 种已验证方法',
      'lowercase': '小写',
      'recent': '最近',
      'result': '结果',
      'save': '保存',
      'sepHyphen': '连字符 ( - )',
      'sepUnderscore': '下划线 ( _ )',
      'separator': '分隔符',
      'slugPlaceholder': '你的 slug 会显示在这里',
      'stripSymbols': '去除符号',
      'try': '试试:',
    },
    useCases: [
      '生成对 SEO 友好的 URL slug',
      '为博客文章创建简洁的网址路径',
      '把标题规范化用于前端路由',
      '为 CMS 或静态站点生成器准备 URL',
    ],
    faqs: [
      { q: '发布后还能改 slug 吗?', a: '一般不建议。修改 slug 会让原 URL 失效,所有指向它的外链也会断掉。如果必须改,请设置一条从旧 URL 到新 URL 的 301 重定向,这样访客和搜索引擎都能正确跳转,排名权重也不会丢失。' },
      { q: 'URL 里用连字符还是下划线?', a: '用连字符。Google 明确表示它把连字符当作词分隔符,而把下划线视为词的一部分。所以 `seo-friendly-slugs` 会被读成三个词,而 `seo_friendly_slugs` 会被读成一个整体。连字符是公认的最佳实践。' },
      { q: 'URL slug 多长合适?', a: '3 到 5 个词最理想——大约 30–50 个字符。越短的 slug 越易读、易分享,每个关键词的权重也越高。如果标题很长,把 slug 精简到核心,而不是把整条标题粘进去。' },
      { q: '这个工具免费吗?', a: '完全免费。无需注册,没有使用次数限制,也没有付费版。文本全部在你的浏览器本地处理,从不上传到任何服务器。' },
    ],
  },
  es: {
    ui: {
      'asciiOnly': 'Solo ASCII',
      'clear': 'Limpiar',
      'copy': 'Copiar',
      'enterTitle': 'Introduce tu título o texto',
      'inputPlaceholder': 'p. ej. 10 formas probadas de aumentar el tráfico web',
      'lowercase': 'Minúsculas',
      'recent': 'Recientes',
      'result': 'Resultado',
      'save': 'Guardar',
      'sepHyphen': 'Guion ( - )',
      'sepUnderscore': 'Guion bajo ( _ )',
      'separator': 'Separador',
      'slugPlaceholder': 'tu-slug-aparecerá-aquí',
      'stripSymbols': 'Quitar símbolos',
      'try': 'Prueba:',
    },
    useCases: [
      'generar slugs de URL aptos para SEO',
      'crear rutas de URL limpias para artículos de blog',
      'normalizar títulos para el enrutamiento frontend',
      'preparar URLs para un CMS o un generador de sitios estáticos',
    ],
    faqs: [
      { q: '¿Debo cambiar un slug después de publicar?', a: 'Por lo general, no. Cambiar un slug rompe la URL antigua y todos los enlaces entrantes que apuntan a ella. Si debes cambiarlo, configura una redirección 301 de la URL antigua a la nueva para que los visitantes y los motores de búsqueda sean reenviados correctamente y no se pierda la autoridad de posicionamiento.' },
      { q: '¿Guiones o guiones bajos en las URLs?', a: 'Usa guiones. Google ha declarado explícitamente que trata los guiones como separadores de palabras, mientras que los guiones bajos se consideran parte de la palabra. Así, `seo-friendly-slugs` se lee como tres palabras, pero `seo_friendly_slugs` se lee como un único token. Los guiones son la mejor práctica universal.' },
      { q: '¿Cuánto debe medir un slug de URL?', a: 'De tres a cinco palabras es el punto ideal — unos 30–50 caracteres. Los slugs más cortos son más fáciles de leer, de compartir y dan más peso a cada palabra clave. Si tu título es largo, recorta el slug a lo esencial en lugar de pegar todo el titular.' },
      { q: '¿Es gratuita esta herramienta?', a: 'Sí, completamente. No hay registro, sin límite de uso ni versión premium. Tu texto se procesa localmente en tu navegador y nunca se sube a ningún sitio.' },
    ],
  },
  de: {
    ui: {
      'asciiOnly': 'Nur ASCII',
      'clear': 'Leeren',
      'copy': 'Kopieren',
      'enterTitle': 'Titel oder Text eingeben',
      'inputPlaceholder': 'z. B. 10 bewährte Wege den Website-Traffic zu steigern',
      'lowercase': 'Kleinbuchstaben',
      'recent': 'Zuletzt',
      'result': 'Ergebnis',
      'save': 'Speichern',
      'sepHyphen': 'Bindestrich ( - )',
      'sepUnderscore': 'Unterstrich ( _ )',
      'separator': 'Trennzeichen',
      'slugPlaceholder': 'dein-slug-erscheint-hier',
      'stripSymbols': 'Symbole entfernen',
      'try': 'Probier:',
    },
    useCases: [
      'SEO-freundliche URL-Slugs erzeugen',
      'saubere URL-Pfade für Blogartikel erstellen',
      'Titel für das Frontend-Routing normalisieren',
      'URLs für ein CMS oder einen Static-Site-Generator vorbereiten',
    ],
    faqs: [
      { q: 'Sollte ich einen Slug nach der Veröffentlichung ändern?', a: 'Grundsätzlich nein. Ein geänderter Slug bricht die alte URL und alle eingehenden Links dorthin. Falls du ihn ändern musst, richtest du eine 301-Weiterleitung von der alten auf die neue URL ein, damit Besucher und Suchmaschinen korrekt weitergeleitet werden und kein Ranking-Wert verloren geht.' },
      { q: 'Bindestriche oder Unterstriche in URLs?', a: 'Verwende Bindestriche. Google hat ausdrücklich bestätigt, dass Bindestriche als Worttrenner gelten, während Unterstriche als Teil des Worts betrachtet werden. Also wird `seo-friendly-slugs` als drei Wörter gelesen, `seo_friendly_slugs` dagegen als ein einziger Token. Bindestriche sind die universelle Best Practice.' },
      { q: 'Wie lang sollte ein URL-Slug sein?', a: 'Drei bis fünf Wörter sind ideal — etwa 30–50 Zeichen. Kürzere Slugs lassen sich leichter lesen und teilen und geben jedem Keyword mehr Gewicht. Ist dein Titel lang, kürze den Slug auf das Wesentliche, statt die ganze Überschrift zu übernehmen.' },
      { q: 'Ist dieses Werkzeug kostenlos?', a: 'Ja, komplett. Keine Anmeldung, kein Nutzungslimit, keine Premium-Stufe. Dein Text wird lokal in deinem Browser verarbeitet und nie irgendwo hochgeladen.' },
    ],
  },
}
