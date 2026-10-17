/**
 * http-status-code-lookup 本地化 bundle —— zh / es / de(2026-10 B12 批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const HttpStatusCodeLookupL10n: ToolL10n = {
  zh: {
    useCases: ['看日志时快速查某个状态码的含义', '调试 API 返回的 4xx/5xx', '区分 401/403、302/307 这类易混码', '给团队写事故报告时引用准确的排查建议'],
    faqs: [
      { q: '这里收录了全部状态码吗?', a: '覆盖 IANA 官方注册表的全部 62 个码(1xx-5xx)。云端厂商的私有扩展(如 Cloudflare 的 52x、某些 API 的 599)不在其中——它们不是标准,行为因厂商而异。' },
      { q: '401 和 403 到底差在哪?', a: '401 是"你是谁?"——没有凭证或凭证无效,重新登录/刷新 token 通常能解决;403 是"认识你,但不行"——是授权问题,改凭证没用,得改权限。' },
      { q: '301/302/307/308 怎么选?', a: '两个维度:是否永久、是否保留请求方法。301/302 是老码,浏览器历史上会把 POST 改成 GET;307/308 保证方法与请求体原样传递——临时重定向 POST 用 307,永久用 308。' },
      { q: '哪些码对 SEO 重要?', a: '200 正常、301/308 永久迁移、302 临时、404 不存在、410 有意下线(比 404 更强的信号)、503 维护(配合 Retry-After 告诉爬虫稍后再来,别把临时下线当成永久删除)。' },
    ],
    ui: {
      'searchPlaceholder': '按码(404)或关键词(timeout、redirect)搜索…',
      'coverageNote': '全部 62 个 IANA 注册状态码',
      'thCode': '码',
      'thName': '名称',
      'thClass': '类别',
      'thCause': '典型原因',
      'thTip': '排查建议',
      'noMatch': '没有匹配的状态码',
      'note': '🧭 经典易混点:401 是"你是谁",403 是"认识你——不行";307/308 保留请求方法而 301/302 可能不保留;502 是上游返回了垃圾,504 是上游根本没应答。表外的码(如 Cloudflare 52x、599)是厂商扩展,不是 IANA 注册标准。',
    },
  },
  es: {
    useCases: ['consultar rápido un código mientras lees logs', 'depurar un 4xx/5xx devuelto por tu API', 'distinguir pares confusos como 401/403 o 302/307', 'citar el consejo correcto en un informe de incidencias'],
    faqs: [
      { q: '¿Están todos los códigos?', a: 'Cubiertos los 62 del registro oficial de IANA (1xx-5xx). Las extensiones propietarias de proveedores en la nube (los 52x de Cloudflare, el 599 de algunas APIs) no están: no son estándar y su comportamiento varía por proveedor.' },
      { q: '¿En qué se diferencian 401 y 403?', a: '401 es «¿quién eres?»: falta credencial o es inválida — volver a iniciar sesión o refrescar el token suele arreglarlo. 403 es «te conozco, y no»: es un problema de autorización; cambiar credenciales no sirve, hay que cambiar permisos.' },
      { q: '¿Cómo elegir entre 301/302/307/308?', a: 'Dos ejes: permanencia y preservación del método. 301/302 son los históricos, y los navegadores solen reescribir POST como GET; 307/308 garantizan que método y cuerpo llegan intactos — POST temporal con 307, permanente con 308.' },
      { q: '¿Qué códigos importan para SEO?', a: '200 normal, 301/308 mudanza permanente, 302 temporal, 404 no existe, 410 retirado a propósito (señal más fuerte que 404) y 503 por mantenimiento, con Retry-After para que el rastreador vuelva sin tratar la caída como eliminación.' },
    ],
    ui: {
      'searchPlaceholder': 'Busca por código (404) o palabra clave (timeout, redirect)…',
      'coverageNote': 'Los 62 códigos de estado registrados en IANA',
      'thCode': 'Código',
      'thName': 'Nombre',
      'thClass': 'Clase',
      'thCause': 'Causa típica',
      'thTip': 'Diagnóstico',
      'noMatch': 'Ningún código coincide',
      'note': '🧭 Las confusiones clásicas: 401 es «¿quién eres?» y 403 «te conozco — no»; 307/308 conservan el método mientras 301/302 pueden no hacerlo; 502 significa que el upstream devolvió basura, 504 que no contestó nada. Los códigos fuera de la tabla (52x de Cloudflare, 599) son extensiones del proveedor, no estándar IANA.',
    },
  },
  de: {
    useCases: ['einen Statuscode schnell nachschlagen, während man Logs liest', 'eine 4xx/5xx-Antwort der API debuggen', 'Verwechslungspaare wie 401/403 oder 302/307 auseinanderhalten', 'in Störungsberichten den korrekten Diagnosetipp zitieren'],
    faqs: [
      { q: 'Sind alle Codes enthalten?', a: 'Alle 62 aus dem offiziellen IANA-Register (1xx-5xx). Proprietäre Cloud-Erweiterungen (Cloudflares 52x, mancher APIs 599) fehlen bewusst — sie sind kein Standard und verhalten sich je nach Anbieter unterschiedlich.' },
      { q: 'Worin unterscheiden sich 401 und 403?', a: '401 heißt „Wer bist du?“ — Credential fehlt oder ist ungültig; neu anmelden oder Token refreshen löst es meist. 403 heißt „Ich kenne dich — nein“: ein Autorisierungsproblem; andere Credentials ändern nichts, nur andere Rechte.' },
      { q: 'Wie wählt man 301/302/307/308?', a: 'Zwei Achsen: Dauerhaftigkeit und Erhalt der Methode. 301/302 sind die historischen; Browser haben POST dabei gern zu GET umgeschrieben. 307/308 garantieren Methode und Body unverändert — temporärer POST-Redirect mit 307, dauerhafter mit 308.' },
      { q: 'Welche Codes zählen für SEO?', a: '200 normal, 301/308 dauerhaft umgezogen, 302 temporär, 404 nicht vorhanden, 410 absichtlich entfernt (stärkeres Signal als 404) und 503 bei Wartung — mit Retry-After, damit der Crawler wiederkommt, statt die Downtime als Löschung zu werten.' },
    ],
    ui: {
      'searchPlaceholder': 'Nach Code (404) oder Stichwort (Timeout, Redirect) suchen…',
      'coverageNote': 'Alle 62 bei der IANA registrierten Statuscodes',
      'thCode': 'Code',
      'thName': 'Name',
      'thClass': 'Klasse',
      'thCause': 'Typische Ursache',
      'thTip': 'Diagnose',
      'noMatch': 'Keine passenden Statuscodes',
      'note': '🧭 Die klassischen Verwechslungen: 401 ist „Wer bist du?“, 403 „Ich kenne dich — nein“; 307/308 erhalten die Methode, 301/302 evtl. nicht; 502 heißt, der Upstream lieferte Müll, 504, er antwortete gar nicht. Codes außerhalb der Tabelle (Cloudflare-52x, 599) sind Anbietererweiterungen, kein IANA-Standard.',
    },
  },
}
