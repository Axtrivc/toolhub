'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * HttpStatusCodeLookup 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The five classes are a decision tree</h2>
    <p>1xx means "hold on, I'm not done". 2xx means "done, and it worked". 3xx means "what you want is elsewhere". 4xx means "you (the client) must change something". 5xx means "the server broke, retrying identically rarely helps". That last split is the one that saves debugging time: for 4xx inspect your request, for 5xx inspect the server logs — never the other way around.</p>
    <h2>The pairs people mix up</h2>
    <p>401 is authentication ("who are you?") while 403 is authorization ("I know you — no"). 301 and 302 are the historic redirects that browsers may turn into GETs; 307 and 308 guarantee the method and body survive. 502 means the upstream answered with garbage, 504 means it never answered at all — different blame, different fixes. And 402 has been "reserved for future use" since 1997; the future turned out to be SaaS billing APIs.</p>
    <h2>Codes that carry SEO consequences</h2>
    <p>Search engines read status codes as instructions: 404 says "not here", 410 says "gone on purpose, stop asking" — delisting faster than 404. 503 with a Retry-After header signals maintenance rather than death, keeping a temporarily dark site in the index. Redirect chains matter too: each 301 hop dilutes a little speed and clarity, so collapse A→B→C into A→C.</p>
    <h2>What this table does not contain</h2>
    <p>All 62 IANA-registered codes are here; the vendor extensions are deliberately not. Cloudflare's 52x family, nginx's 499 (client closed the connection), and various APIs' homegrown 599 all behave per-vendor and can mean different things in different stacks. When you meet one, the vendor's own docs — not the HTTP standard — are the authority.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>五大类是一棵决策树</h2>
    <p>1xx 是"稍等,还没完"。2xx 是"完成且成功"。3xx 是"你要的东西在别处"。4xx 是"你(客户端)得改点什么"。5xx 是"服务器坏了,原样重试基本没用"。最后这条分界最省调试时间:4xx 查你的请求,5xx 查服务器日志——别反过来。</p>
    <h2>最常混淆的几对</h2>
    <p>401 是认证("你是谁?"),403 是授权("认识你——不行")。301/302 是历史遗留的重定向,浏览器可能把 POST 改成 GET;307/308 保证方法与请求体原样到达。502 是上游回了垃圾,504 是上游压根没回——责任不同,修法不同。至于 402,从 1997 年起就"保留待用",后来的用途是 SaaS 计费 API。</p>
    <h2>有 SEO 后果的状态码</h2>
    <p>搜索引擎把状态码当指令读:404 是"不在这",410 是"故意下线,别再来了"——比 404 更快出索引。503 配 Retry-After 表示维护而非死亡,临时停机的站点能保住收录。重定向链也有讲究:每跳一次 301 都损耗一点速度与清晰度,把 A→B→C 折叠成 A→C。</p>
    <h2>这张表里没有的东西</h2>
    <p>IANA 注册的全部 62 个码都在这里;厂商扩展是刻意排除的。Cloudflare 的 52x 家族、nginx 的 499(客户端主动断开)、各家 API 自造的 599,行为全凭厂商定义,同一数字在不同栈里含义可能不同。撞见它们时,权威是厂商自己的文档,不是 HTTP 标准。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Las cinco clases son un árbol de decisión</h2>
    <p>1xx: «espera, no he terminado». 2xx: «listo, y funcionó». 3xx: «lo que buscas está en otro sitio». 4xx: «tú (el cliente) tienes que cambiar algo». 5xx: «el servidor se rompió; reintentar tal cual casi nunca ayuda». Esa última frontera es la que ahorra tiempo de depuración: ante un 4xx inspecciona tu petición; ante un 5xx, los logs del servidor — nunca al revés.</p>
    <h2>Los pares que la gente confunde</h2>
    <p>401 es autenticación («¿quién eres?»); 403 es autorización («te conozco — no»). 301 y 302 son las redirecciones históricas que los navegadores pueden convertir en GET; 307 y 308 garantizan que método y cuerpo sobreviven. 502 significa que el upstream contestó basura; 504, que no contestó en absoluto — culpable distinto, remedio distinto. Y el 402 lleva «reservado para uso futuro» desde 1997; el futuro resultaron ser las APIs de facturación SaaS.</p>
    <h2>Códigos con consecuencias SEO</h2>
    <p>Los buscadores leen los códigos como instrucciones: 404 dice «no está»; 410 dice «lo quité a propósito, deja de preguntar» — y saca de índice más rápido que el 404. Un 503 con cabecera Retry-After señala mantenimiento y no muerte, conservando en índice un sitio apagado temporalmente. Las cadenas de redirección también cuentan: cada salto 301 cuesta algo de velocidad y claridad; pliega A→B→C en A→C.</p>
    <h2>Lo que esta tabla no contiene</h2>
    <p>Están los 62 códigos registrados en IANA; las extensiones de fabricante quedan fuera a propósito. La familia 52x de Cloudflare, el 499 de nginx (el cliente cerró la conexión) y los 599 caseros de varias APIs se comportan según cada proveedor y el mismo número cambia de significado entre stacks. Cuando te cruces con uno, la autoridad es la documentación del fabricante, no el estándar HTTP.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die fünf Klassen sind ein Entscheidungsbaum</h2>
    <p>1xx heißt „warte, ich bin noch nicht fertig“. 2xx: „fertig, und es hat geklappt“. 3xx: „was du willst, liegt woanders“. 4xx: „du (der Client) musst etwas ändern“. 5xx: „der Server ist kaputt, identisch wiederholen hilft selten“. Genau diese letzte Trennung spart Debugging-Zeit: Bei 4xx den eigenen Request prüfen, bei 5xx die Serverlogs — nie umgekehrt.</p>
    <h2>Die häufig verwechselten Paare</h2>
    <p>401 ist Authentifizierung („Wer bist du?“), 403 Autorisierung („Ich kenne dich — nein“). 301 und 302 sind die historischen Redirects, die Browser gern zu GETs machen; 307 und 308 garantieren, dass Methode und Body überleben. 502 heißt, der Upstream antwortete mit Müll, 504, dass er nie antwortete — andere Schuld, andere Reparatur. Und 402 steht seit 1997 „für zukünftige Verwendung“ reserviert; die Zukunft erwies sich als SaaS-Abrechnungs-APIs.</p>
    <h2>Statuscodes mit SEO-Folgen</h2>
    <p>Suchmaschinen lesen Statuscodes als Anweisungen: 404 sagt „nicht hier“, 410 sagt „absichtlich weg, hör auf zu fragen“ — und räumt schneller aus dem Index als 404. Ein 503 mit Retry-After-Header signalisiert Wartung statt Tod und hält eine vorübergehend dunkle Seite im Index. Auch Redirect-Ketten zählen: Jeder 301-Hop kostet etwas Geschwindigkeit und Klarheit — kollabiere A→B→C zu A→C.</p>
    <h2>Was diese Tabelle nicht enthält</h2>
    <p>Alle 62 IANA-registrierten Codes sind drin; Anbieter-Erweiterungen bewusst nicht. Cloudflares 52x-Familie, nginxs 499 (Client schloss die Verbindung) und mancher APIs hausgemachte 599 verhalten sich anbieterabhängig — dieselbe Zahl kann in verschiedenen Stacks Verschiedenes bedeuten. Triffst du auf eine, ist der Hersteller die Autorität, nicht der HTTP-Standard.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function HttpStatusCodeLookupContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
