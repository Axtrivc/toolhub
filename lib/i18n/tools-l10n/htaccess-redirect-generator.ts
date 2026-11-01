/**
 * htaccess-redirect-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const HtaccessRedirectGeneratorL10n: ToolL10n = {

  es: {
    useCases: ['generar redirecciones 301 tras un rediseño', 'migrar de dominio conservando las rutas', 'escribir reglas .htaccess para Apache', 'recuperar enlaces rotos para SEO'],
    faqs: [
      { q: '¿Dónde va el archivo .htaccess?', a: 'En la raíz de documentos — la misma carpeta que tu portada. Las reglas se aplican a ese directorio y todo lo que cuelga de él. Hace falta Apache con mod_rewrite (casi universal en hosting compartido); plataformas gestionadas como Vercel o Netlify no usan .htaccess.' },
      { q: '¿301 o 302 mientras pruebo?', a: 'Prueba con 302. Navegadores y buscadores cachean los 301 de forma agresiva y durante muchísimo tiempo, así que una redirección permanente equivocada te persigue. El generador emite 301 — cambia R=301 a R=302 para probar y revierte al verificar.' },
      { q: '¿Cómo muevo todo el dominio?', a: 'Rellena dominio antiguo y nuevo y el generador emite una RewriteRule por host que reenvía cada ruta una a una (old.com/page → new.com/page). Mantenla al menos un año para que índices y marcadores migren del todo.' },
      { q: '¿Se escapan los caracteres especiales?', a: 'Sí — las rutas de origen se escapan como regex automáticamente, así que los puntos y los signos de interrogación coinciden literalmente, y el patrón acepta tanto /old-url como /old-url/. Los destinos no se escapan, para poder incluir query strings cuando hagan falta.' },
    ],
    ui: {
      'addPair': 'Añadir redirección',
      'fromLabel': 'Ruta de origen',
      'httpsToggle': 'Forzar HTTPS',
      'newDomainLabel': 'Dominio nuevo (opcional)',
      'note': '🔧 Requiere Apache con mod_rewrite (casi universal en hosting compartido). Pon las reglas antes de bloques conflictivos; prueba con R=302 y pasa a R=301 al verificar, para que el navegador no cache una redirección permanente equivocada.',
      'oldDomainLabel': 'Dominio antiguo (opcional)',
      'pairsLabel': 'Redirecciones de páginas',
      'removeRedirect': 'Quitar esta redirección',
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
      { q: 'Werden Sonderzeichen maskiert?', a: 'Ja — Quellpfade werden automatisch regex-maskiert, Punkte und Fragezeichen werden also wörtlich behandelt, und das Muster akzeptiert sowohl /old-url als auch /old-url/. Ziele werden nicht maskiert, sodass sich Query-Strings bei Bedarf anhängen lassen.' },
    ],
    ui: {
      'addPair': 'Weiterleitung hinzufügen',
      'fromLabel': 'Quellpfad',
      'httpsToggle': 'HTTPS erzwingen',
      'newDomainLabel': 'Neue Domain (optional)',
      'note': '🔧 Benötigt Apache mit aktiviertem mod_rewrite (bei Shared Hosting fast immer). Regeln vor Konfliktblöcken platzieren; erst mit R=302 testen und nach der Prüfung auf R=301 umstellen, damit der Browser keine falsche permanente Weiterleitung cached.',
      'oldDomainLabel': 'Alte Domain (optional)',
      'pairsLabel': 'Einzelne Seiten-Weiterleitungen',
      'removeRedirect': 'Diese Weiterleitung entfernen',
      'toLabel': 'Zielpfad',
      'wwwAdd': 'Immer www',
      'wwwLabel': 'Kanonischer Host',
      'wwwNone': 'So belassen',
      'wwwRemove': 'Nie www',
    },
  },
}
