'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CoinFlip 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>When coin flips are appropriate</h2>
    <p>Any two-way decision where both options are acceptable: who serves first, which restaurant tonight, settling "I do not care, you pick" standoffs. Behavioral research shows people usually already prefer one side — notice your reaction when it lands.</p>
    <h2>Best-of-three still fair?</h2>
    <p>Yes. Independent fair flips stay fair in sequence; best-of-three only changes which subset decides. The tally tracks your whole session so drift becomes visible — over hundreds of flips expect convergence to ~50%.</p>
    <h2>Not for security</h2>
    <p>A fair flip settles games, not keys or passwords. Cryptographic decisions need cryptographic randomness used properly, not a single visible bit.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>什么时候适合抛硬币</h2>
    <p>任何"两个选项都能接受"的双选场景都适合:谁先发球、今晚吃哪家、化解"随便,你定"的僵持。行为研究表明,人们心里往往早已偏向其中一边——硬币落地那一刻,留意一下自己的反应就知道了。</p>
    <h2>三局两胜还公平吗?</h2>
    <p>公平。相互独立的公平抛掷连着抛依然公平;三局两胜只是改变了由其中哪个子集来定胜负。累计统计记录的是你的整个会话,偏差一眼可见——抛到几百次后,正反面比例会如期收敛到 ~50%。</p>
    <h2>不适用于安全场景</h2>
    <p>公平硬币了结的是游戏胜负,不是密钥或密码。密码学层面的决策需要正确使用密码学随机数,而不是单个可见的比特位。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Cuándo conviene lanzar una moneda</h2>
    <p>Cualquier decisión entre dos opciones donde ambas sean aceptables: quién saca primero, a qué restaurante vamos hoy, deshacer un empate de «me da igual, elige tú». La investigación en conducta muestra que casi siempre ya se prefiere un lado — fíjate en tu reacción cuando la moneda cae.</p>
    <h2>¿El mejor de tres sigue siendo justo?</h2>
    <p>Sí. Los lanzamientos justos e independientes siguen siendo justos en secuencia; el mejor de tres solo cambia qué subconjunto decide. El recuento cubre toda tu sesión, así que la deriva se hace visible — tras cientos de lanzamientos, espera convergencia al ~50 %.</p>
    <h2>No es para seguridad</h2>
    <p>Una moneda justa resuelve partidas, no claves ni contraseñas. Las decisiones criptográficas necesitan aleatoriedad criptográfica bien utilizada, no un solo bit visible.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wann der Münzwurf passt</h2>
    <p>Jede Zwei-Wege-Entscheidung, bei der beide Optionen akzeptabel sind: wer zuerst aufschlägt, welches Restaurant heute Abend, die Pattsituation „Mir egal, du entscheidest" auflösen. Die Verhaltensforschung zeigt: Innerlich favorisiert man meistens schon eine Seite — achte auf deine Reaktion, wenn die Münze landet.</p>
    <h2>Bleibt Best-of-three fair?</h2>
    <p>Ja. Unabhängige faire Würfe bleiben in Folge fair; Best-of-three ändert nur, welcher Teilausschnitt entscheidet. Die laufende Statistik erfasst deine ganze Sitzung, sodass Abweichungen sichtbar werden — über hunderte Würfe hinweg ist Konvergenz gegen ~50 % zu erwarten.</p>
    <h2>Nicht für die Sicherheit</h2>
    <p>Ein fairer Münzwurf entscheidet Spiele, keine Schlüssel oder Passwörter. Kryptografische Entscheidungen brauchen kryptografische Zufälligkeit, richtig eingesetzt — nicht ein einzelnes sichtbares Bit.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CoinFlipContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
