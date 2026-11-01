/**
 * http-status-code-lookup 本地化 bundle —— zh / es / de(2026-10 B12 批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const HttpStatusCodeLookupL10n: ToolL10n = {

  es: {
    useCases: ['consultar rápido un código mientras lees logs', 'depurar un 4xx/5xx devuelto por tu API', 'distinguir pares confusos como 401/403 o 302/307', 'citar el consejo correcto en un informe de incidencias'],
    faqs: [
      { q: '¿Están todos los códigos?', a: 'Cubiertos los 62 del registro oficial de IANA (1xx-5xx, incluidos 207/208/226). Las extensiones propietarias de proveedores en la nube (los 52x de Cloudflare, el 599 de algunas APIs) no están: no son estándar y su comportamiento varía por proveedor.' },
      { q: '¿En qué se diferencian 401 y 403?', a: '401 es «¿quién eres?»: falta credencial o es inválida — volver a iniciar sesión o refrescar el token suele arreglarlo. 403 es «te conozco, y no»: es un problema de autorización; cambiar credenciales no sirve, hay que cambiar permisos.' },
      { q: '¿Cómo elegir entre 301/302/307/308?', a: 'Dos ejes: permanencia y preservación del método. 301/302 son los históricos, y los navegadores solen reescribir POST como GET; 307/308 garantizan que método y cuerpo llegan intactos — POST temporal con 307, permanente con 308.' },
      { q: '¿Qué códigos importan para SEO?', a: '200 normal, 301/308 mudanza permanente, 302 temporal, 404 no existe, 410 retirado a propósito (señal más fuerte que 404) y 503 por mantenimiento, con Retry-After para que el rastreador vuelva sin tratar la caída como eliminación.' },
    ],
    ui: {
      'searchPlaceholder': 'Busca por código (404) o palabra clave (timeout, redirect)…',
      'coverageNote': 'Los {n} códigos de estado registrados en IANA',
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
      { q: 'Sind alle Codes enthalten?', a: 'Alle 62 aus dem offiziellen IANA-Register (1xx-5xx, inklusive 207/208/226). Proprietäre Cloud-Erweiterungen (Cloudflares 52x, mancher APIs 599) fehlen bewusst — sie sind kein Standard und verhalten sich je nach Anbieter unterschiedlich.' },
      { q: 'Worin unterscheiden sich 401 und 403?', a: '401 heißt „Wer bist du?“ — Credential fehlt oder ist ungültig; neu anmelden oder Token refreshen löst es meist. 403 heißt „Ich kenne dich — nein“: ein Autorisierungsproblem; andere Credentials ändern nichts, nur andere Rechte.' },
      { q: 'Wie wählt man 301/302/307/308?', a: 'Zwei Achsen: Dauerhaftigkeit und Erhalt der Methode. 301/302 sind die historischen; Browser haben POST dabei gern zu GET umgeschrieben. 307/308 garantieren Methode und Body unverändert — temporärer POST-Redirect mit 307, dauerhafter mit 308.' },
      { q: 'Welche Codes zählen für SEO?', a: '200 normal, 301/308 dauerhaft umgezogen, 302 temporär, 404 nicht vorhanden, 410 absichtlich entfernt (stärkeres Signal als 404) und 503 bei Wartung — mit Retry-After, damit der Crawler wiederkommt, statt die Downtime als Löschung zu werten.' },
    ],
    ui: {
      'searchPlaceholder': 'Nach Code (404) oder Stichwort (Timeout, Redirect) suchen…',
      'coverageNote': 'Alle {n} bei der IANA registrierten Statuscodes',
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
