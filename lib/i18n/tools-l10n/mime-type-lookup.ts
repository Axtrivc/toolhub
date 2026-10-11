/**
 * mime-type-lookup 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const MimeTypeLookupL10n: ToolL10n = {
  zh: {
    useCases: ['查文件扩展名对应的 MIME 类型', '给响应头填正确的 Content-Type', '排查下载变成打开的问题', '查字体/新媒体格式的现行类型'],
    faqs: [
      { q: 'MIME 类型有什么用?', a: '浏览器和服务器靠它决定如何处理文件:text/html 会渲染,application/json 会解析,application/octet-stream 会强制下载。类型设错会破坏渲染或触发下载——这张表就是帮你填对的速查表。' },
      { q: '.js 是 application/javascript 吗?', a: '不再是——现行标准定为 text/javascript,浏览器把两者视为等价。旧的 application/ 前缀只在遗留配置里存在;两者都能用,但现代代码应发送 text/javascript。' },
      { q: '怎么快速找到类型?', a: '输入扩展名(.svg)或 MIME 的一部分(image/),表格即时过滤,每行都有复制按钮。搜"zip"会立刻看到 .zip → application/zip;由于 MIME 同样参与匹配,.gz(application/gzip)和 .epub(application/epub+zip)也会一并出现。' },
      { q: '字体和新格式呢?', a: '字体文件 2017 年起归入顶级 font/ 类型——是 font/woff2 而非 application/font-woff;WebP 是 image/webp。老服务器默认值仍在发废弃写法,这是本表帮你抓出的最常见错误配置之一。' },
    ],
    ui: {
      'noMatch': '没有匹配的类型',
      'note': '🌐 常见坑:.js 现为 text/javascript(而非 application/javascript);字体自 2017 年起是 font/*;.webp 是 image/webp——一些老服务器的默认配置至今仍是错的。',
      'searchPlaceholder': '搜索扩展名或 MIME 类型',
      'thExt': '扩展名',
      'thMime': 'MIME 类型',
    },
  },
  es: {
    useCases: ['buscar el tipo MIME de una extensión', 'configurar bien la cabecera Content-Type', 'diagnosticar descargas que se abren en el navegador', 'consultar tipos vigentes de fuentes y formatos nuevos'],
    faqs: [
      { q: '¿Para qué sirve un tipo MIME?', a: 'Navegadores y servidores lo usan para decidir cómo tratar un archivo: text/html se renderiza, application/json se parsea, application/octet-stream fuerza la descarga. Servir el tipo equivocado rompe la renderización o dispara descargas; esta tabla es la referencia rápida para acertar.' },
      { q: '¿.js es application/javascript?', a: 'Ya no: el estándar vigente dice text/javascript, y los navegadores tratan ambos como equivalentes. El prefijo application/ antiguo sobrevive en configuraciones heredadas; cualquiera funciona, pero el código moderno debería enviar text/javascript.' },
      { q: '¿Cómo encuentro un tipo rápido?', a: 'Escribe la extensión (.svg) o parte del MIME (image/) y la tabla filtra en vivo, con botón de copiar en cada fila. Buscar «zip» muestra al instante .zip → application/zip; como también se busca en el MIME, aparecen .gz (application/gzip) y .epub (application/epub+zip).' },
      { q: '¿Y las fuentes y formatos modernos?', a: 'Los archivos de fuente pasaron al tipo de primer nivel font/ en 2017 —font/woff2 en vez de application/font-woff— y WebP es image/webp. Los valores predeterminados de servidores antiguos aún sirven las formas obsoletas, una de las malconfiguraciones más comunes que esta tabla ayuda a detectar.' },
    ],
    ui: {
      'noMatch': 'Sin tipos coincidentes',
      'note': '🌐 Errores típicos: .js es oficialmente text/javascript; las fuentes son font/* desde 2017; .webp es image/webp — los valores predeterminados de algunos servidores viejos siguen configurándolo mal.',
      'searchPlaceholder': 'Buscar extensión o tipo MIME',
      'thExt': 'Extensión',
      'thMime': 'Tipo MIME',
    },
  },
  de: {
    useCases: ['den MIME-Type einer Dateiendung nachschlagen', 'den Content-Type-Header korrekt setzen', 'diagnostizieren, warum Downloads im Browser öffnen', 'aktuelle Typen für Fonts und neue Formate prüfen'],
    faqs: [
      { q: 'Wozu dient ein MIME-Type?', a: 'Browser und Server entscheiden daran, wie sie eine Datei behandeln: text/html wird gerendert, application/json geparst, application/octet-stream erzwingt den Download. Der falsche Typ bricht die Darstellung oder löst Downloads aus — diese Tabelle ist die Kurzreferenz, um es richtig zu machen.' },
      { q: 'Ist .js application/javascript?', a: 'Nicht mehr — der aktuelle Standard sagt text/javascript, und Browser behandeln beide als gleichwertig. Das alte application/-Präfix findet sich nur noch in Alt-Konfigurationen; beides funktioniert, aber moderner Code sollte text/javascript senden.' },
      { q: 'Wie finde ich einen Typ schnell?', a: 'Tippe die Endung (.svg) oder einen Teil des MIME-Strings (image/) — die Tabelle filtert live, jede Zeile hat einen Kopieren-Button. Die Suche „zip“ zeigt sofort .zip → application/zip; da auch der MIME-String durchsucht wird, tauchen .gz (application/gzip) und .epub (application/epub+zip) auf.' },
      { q: 'Was ist mit Fonts und modernen Formaten?', a: 'Schriftdateien wanderten 2017 in den Top-Level-Typ font/ — font/woff2 statt application/font-woff —, und WebP ist image/webp. Alte Server-Defaults liefern noch die veralteten Formen — eine der häufigsten Fehlkonfigurationen, die diese Tabelle aufdeckt.' },
    ],
    ui: {
      'noMatch': 'Keine passenden Typen',
      'note': '🌐 Typische Fallen: .js ist offiziell text/javascript; Fonts sind seit 2017 font/*; .webp ist image/webp — manche alten Server-Defaults sind bis heute falsch konfiguriert.',
      'searchPlaceholder': 'Erweiterung oder MIME-Typ suchen',
      'thExt': 'Erweiterung',
      'thMime': 'MIME-Typ',
    },
  },
}
