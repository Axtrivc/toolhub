/**
 * htaccess-redirect-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const HtaccessRedirectGeneratorL10n: ToolL10n = {
  zh: {
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
