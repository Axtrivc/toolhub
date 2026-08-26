/**
 * htaccess-redirect-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const HtaccessRedirectGeneratorL10n: ToolL10n = {
  zh: {
    useCases: ['为改版后的 URL 生成 301 重定向', '整域迁移时保留原路径跳转', '给 Apache 站点写 .htaccess 规则', '修复失效链接的 SEO 跳转'],
    faqs: [
      { q: '.htaccess 文件放在哪里?', a: '放在网站文档根目录——与首页同一层。规则对该目录及其所有子目录生效。需要 Apache 开启 mod_rewrite(共享主机几乎都支持);Vercel、Netlify 这类托管平台根本不用 .htaccess。' },
      { q: '测试期用 301 还是 302?', a: '测试用 302。浏览器和搜索引擎会对 301 激进缓存且缓存很久,一条错误的永久重定向会一直缠着你。生成器默认输出 301——测试期把 R=301 改成 R=302,确认无误再改回来。' },
      { q: '怎么整站换域名?', a: '填入旧域名和新域名,生成器会输出基于 host 的 RewriteRule,把每条路径一一对应地转发(old.com/page → new.com/page)。建议至少保留一年,让搜索索引和历史书签完成迁移。' },
      { q: '特殊字符会被转义吗?', a: '会——源路径自动做正则转义,点和问号按字面匹配,且模式同时接受 /old-url 和 /old-url/ 两种形式。目标地址不做转义,因此需要时可以带查询字符串。' },
    ],
    ui: {
      'addPair': '添加重定向',
      'fromLabel': '源路径',
      'httpsToggle': '强制 HTTPS',
      'newDomainLabel': '新域名(可选)',
      'note': '🔧 需要 Apache 启用 mod_rewrite(共享主机基本都有)。规则要放在冲突块之前;先用 R=302 测试,验证后再改 R=301,避免浏览器缓存错误跳转。',
      'oldDomainLabel': '旧域名(可选)',
      'pairsLabel': '单页重定向',
      'toLabel': '目标路径',
      'wwwAdd': '总是 www',
      'wwwLabel': '规范域名',
      'wwwNone': '保持原样',
      'wwwRemove': '永不 www',
    },
  },
  es: {
    useCases: ['generar redirecciones 301 tras un rediseño', 'migrar de dominio conservando las rutas', 'escribir reglas .htaccess para Apache', 'recuperar enlaces rotos para SEO'],
    faqs: [
      { q: '¿Dónde va el archivo .htaccess?', a: 'En la raíz de documentos — la misma carpeta que tu portada. Las reglas se aplican a ese directorio y todo lo que cuelga de él. Hace falta Apache con mod_rewrite (casi universal en hosting compartido); plataformas gestionadas como Vercel o Netlify no usan .htaccess.' },
      { q: '¿301 o 302 mientras pruebo?', a: 'Prueba con 302. Navegadores y buscadores cachean los 301 de forma agresiva y durante muchísimo tiempo, así que una redirección permanente equivocada te persigue. El generador emite 301 — cambia R=301 a R=302 para probar y revierte al verificar.' },
      { q: '¿Cómo muevo todo el dominio?', a: 'Rellena dominio antiguo y nuevo y el generador emite una RewriteRule por host que reenvía cada ruta una a una (old.com/page → new.com/page). Mantenla al menos un año para que índices y marcadores migren del todo.' },
      { q: '¿Se escapan los caracteres especiales?', a: 'Sí — las rutas de origen se escapan como regex automáticamente, así que puntos e interrogantes casan literal, y el patrón acepta tanto /old-url como /old-url/. Los destinos no se escapan, para poder incluir query strings cuando hagan falta.' },
    ],
    ui: {
      'addPair': 'Añadir redirección',
      'fromLabel': 'Ruta de origen',
      'httpsToggle': 'Forzar HTTPS',
      'newDomainLabel': 'Dominio nuevo (opcional)',
      'note': '🔧 Requiere Apache con mod_rewrite (casi universal en hosting compartido). Pon las reglas antes de bloques conflictivos; prueba con R=302 y pasa a R=301 al verificar.',
      'oldDomainLabel': 'Dominio antiguo (opcional)',
      'pairsLabel': 'Redirecciones de páginas',
      'toLabel': 'Ruta destino',
      'wwwAdd': 'Siempre www',
      'wwwLabel': 'Host canónico',
      'wwwNone': 'Dejar como está',
      'wwwRemove': 'Nunca www',
    },
  },
  de: {
    useCases: ['301-Weiterleitungen nach einem Relaunch erzeugen', 'Domain-Umzug mit erhaltenen Pfaden', '.htaccess-Regeln für Apache schreiben', 'tote Links für die SEO wiederbeleben'],
    faqs: [
      { q: 'Wo gehört die .htaccess hin?', a: 'In die Document Root — denselben Ordner wie die Startseite. Die Regeln gelten für dieses Verzeichnis und alles darunter. Nötig ist Apache mit mod_rewrite (bei Shared Hosting fast überall); verwaltete Plattformen wie Vercel oder Netlify nutzen gar keine .htaccess.' },
      { q: 'Beim Testen 301 oder 302?', a: 'Mit 302 testen. Browser und Suchmaschinen cachen 301 aggressiv und sehr lange — eine falsche permanente Weiterleitung verfolgt dich. Der Generator gibt 301 aus; beim Testen R=301 zu R=302 ändern und danach zurückdrehen.' },
      { q: 'Wie ziehe ich mit der ganzen Domain um?', a: 'Alte und neue Domain eintragen, dann erzeugt der Generator eine host-basierte RewriteRule, die jeden Pfad eins zu eins weiterleitet (old.com/page → new.com/page). Mindestens ein Jahr live lassen, damit Index und Lesezeichen vollständig migrieren.' },
      { q: 'Werden Sonderzeichen maskiert?', a: 'Ja — Quellpfade werden automatisch regex-maskiert, Punkte und Fragezeichen treffen wörtlich, und das Muster akzeptiert sowohl /old-url als auch /old-url/. Ziele werden nicht maskiert, sodass Query-Strings bei Bedarf Platz haben.' },
    ],
    ui: {
      'addPair': 'Weiterleitung hinzufügen',
      'fromLabel': 'Quellpfad',
      'httpsToggle': 'HTTPS erzwingen',
      'newDomainLabel': 'Neue Domain (optional)',
      'note': '🔧 Benötigt Apache mit mod_rewrite (bei Shared Hosting fast immer). Regeln vor Konfliktblöcke; erst mit R=302 testen, dann auf R=301.',
      'oldDomainLabel': 'Alte Domain (optional)',
      'pairsLabel': 'Einzelne Seiten-Weiterleitungen',
      'toLabel': 'Zielpfad',
      'wwwAdd': 'Immer www',
      'wwwLabel': 'Kanonischer Host',
      'wwwNone': 'So belassen',
      'wwwRemove': 'Nie www',
    },
  },
}
