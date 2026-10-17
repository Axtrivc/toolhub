'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Match401kCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与 SSR 渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Reading a match formula without getting fooled</h2>
    <p>&quot;50% up to 6%&quot; means the employer adds 50 cents per dollar you contribute, but only on the first 6% of your salary. A $75,000 salary fully captured earns $2,250 a year; contributing just 4% silently drops that to $1,500. Same words, very different money.</p>
    <h2>The order of operations for every paycheck</h2>
    <p>Contribute at least to the match cap before paying extra on debt or opening a taxable account — no legal investment reliably returns an instant 50-100% on day one. After the cap, prioritize high-interest debt and an emergency fund; the match is the one guaranteed multiplier.</p>
    <h2>Contribution limits and what they do not cover</h2>
    <p>The 2025 employee deferral limit is $23,500, with additional catch-up room at 50+. Employer matching is paid on top and does not consume your personal limit, though combined employee-plus-employer contributions face a separate percentage-of-pay ceiling — high earners near $300k should check that total.</p>
    <h2>Vesting: the fine print that claws money back</h2>
    <p>Matched dollars usually vest on a schedule — commonly 20% per year over five years, or all-at-once after three. Leave before the cliff and unvested match disappears from your balance. Your own contributions are always yours from day one; the calculator shows what the employer puts in, vesting and all.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>读懂匹配公式,别被话术绕进去</h2>
    <p>"50% up to 6%"的意思是:你每缴 1 美元雇主跟 50 美分,但只对工资的前 6% 生效。年薪 $75,000 拿满匹配一年是 $2,250;只缴 4% 就悄悄缩水到 $1,500。同样一句话,钱差得很远。</p>
    <h2>每份工资的处理顺序</h2>
    <p>先把自缴比例提到匹配上限,再去加速还债或开应税账户——没有哪种合法投资能第一天就稳定回报 50-100%。拿满匹配之后,再优先高息债务和应急金;匹配是唯一"保证"的乘数。</p>
    <h2>缴存上限,以及它管不到的部分</h2>
    <p>2025 年员工税前缴存上限是 $23,500,50 岁以上另有追加额度。雇主匹配是额外给的,不占你的个人上限,但"员工+雇主"合计受另一个工资百分比封顶——年薪接近 $300k 的高收入者要核对总额。</p>
    <h2>归属进度:能把钱收回来的小字条款</h2>
    <p>匹配款通常按进度归属——常见五年每年 20%,或三年悬崖式一次归属。悬崖前离职,未归属的匹配会从余额里消失。你自己的缴存从第一天起就永远是你的;本计算器显示的是雇主"放进来"的金额,归属与否另算。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Leer una fórmula de matching sin caer en la trampa</h2>
    <p>«50% up to 6%» significa que el empleador añade 50 centavos por cada dólar que aportas, pero solo sobre el primer 6% del salario. Un sueldo de 75 000 $ bien capturado gana 2 250 $ al año; aportar solo el 4% lo baja en silencio a 1 500 $. Mismas palabras, dinero muy distinto.</p>
    <h2>El orden correcto para cada nómina</h2>
    <p>Aporta al menos hasta el tope del matching antes de acelerar deudas o abrir una cuenta taxable — ninguna inversión legal devuelve un 50-100% instantáneo el primer día. Superado el tope, prioriza deuda cara y fondo de emergencia; el matching es el único multiplicador garantizado.</p>
    <h2>Límites de aporte y lo que no cubren</h2>
    <p>El límite de aplazamiento de 2025 es de 23 500 $, con recargo adicional desde los 50. El matching se paga aparte y no consume tu límite personal, aunque la suma empleado+empleador tiene otro techo como porcentaje del salario — quienes rondan los 300 000 $ deben revisar ese total.</p>
    <h2>Vesting: la letra pequeña que recupera el dinero</h2>
    <p>Los dólares del matching suelen vestir según un calendario — típicamente 20% anual en cinco años, o todo de golpe a los tres. Si te vas antes del cliff, el matching no adquirido desaparece del saldo. Tus propios aportes son tuyos desde el primer día; la calculadora muestra lo que el empleador deposita, vesting aparte.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Eine Match-Formel lesen, ohne sich täuschen zu lassen</h2>
    <p>„50 % up to 6 %“ heißt: Der Arbeitgeber legt zu jedem Dollar 50 Cent dazu — aber nur auf die ersten 6% des Gehalts. Ein 75.000-$-Gehalt mit voll ausgeschöpftem Match bringt 2.250 $ im Jahr; bei nur 4% Eigenanteil schrumpft das lautlos auf 1.500 $. Dieselben Worte, sehr anderes Geld.</p>
    <h2>Die richtige Reihenfolge für jedes Gehalt</h2>
    <p>Zahle mindestens bis zur Match-Grenze ein, bevor du Schulden schneller tilgst oder ein Steuerdepot eröffnest — keine legale Anlage liefert am ersten Tag verlässlich 50-100%. Danach folgen teure Schulden und Notgroschen; der Match ist der einzige garantierte Multiplikator.</p>
    <h2>Einzahlungsgrenzen und was sie nicht abdecken</h2>
    <p>Das Elective-Deferral-Limit 2025 liegt bei 23.500 $, ab 50 gibt es Zusatzbeiträge. Der Match wird obendrauf gezahlt und zählt nicht gegen dein persönliches Limit — die Summe aus Arbeitnehmer- und Arbeitgeberanteilen unterliegt aber einer eigenen Prozentsatz-Obergrenze; ab rund 300.000 $ Gehalt lohnt der Blick darauf.</p>
    <h2>Vesting: das Kleingedruckte, das Geld zurückholt</h2>
    <p>Match-Gelder vesting üblicherweise nach Zeitplan — oft 20% pro Jahr über fünf Jahre oder alles auf einmal nach drei. Wer vor dem Cliff geht, verliert das nicht übertragene Match aus dem Guthaben. Eigene Einzahlungen gehören dir ab Tag eins; der Rechner zeigt, was der Arbeitgeber einzahlt, Vesting ausgenommen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function Match401kCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
