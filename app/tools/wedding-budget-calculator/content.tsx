'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * WeddingBudgetCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The standard allocation</h2>
    <p>Catering and bar absorb about 30% of a typical budget, venue and rentals 25%, photography and video 15%. Those three dominate; everything else negotiates around them.</p>
    <h2>Guest count is the master lever</h2>
    <p>Cost-per-guest drives catering, rentals, invitations, favors, and even venue size requirements. Cutting 10 guests frees more budget than downgrading flowers.</p>
    <h2>Off-peak saves real money</h2>
    <p>Saturday evenings in June-September carry peak pricing. Friday evenings, Sundays, and November-April dates routinely save 20-30% on venue and vendors alike.</p>
    <h2>Build in the buffer</h2>
    <p>Set aside part of the miscellaneous slice as contingency. Average weddings overshoot their initial budget by roughly 10-15%, usually in catering counts and last-minute rentals.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>标准分配比例</h2>
    <p>典型预算中,餐饮酒水约占 30%,场地与租赁 25%,摄影摄像 15%。这三项占大头,其余项目都围绕它们腾挪。</p>
    <h2>宾客人数是总杠杆</h2>
    <p>人均成本牵动餐饮、租赁、请柬、伴手礼,甚至场地的大小要求。少请 10 位宾客省下的预算,往往比降级花艺更多。</p>
    <h2>淡季才是真省钱</h2>
    <p>6-9 月的周六晚是峰值定价。周五晚、周日以及 11 月至次年 4 月的日期,场地和供应商的报价通常能省 20-30%。</p>
    <h2>预留备用金</h2>
    <p>从"杂项"那一份里留出一部分当应急金。婚礼平均会超出初始预算约 10-15%,超支多半出在餐饮人数和临时租赁上。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>El reparto estándar</h2>
    <p>El catering y la barra absorben cerca del 30 % de un presupuesto típico, recinto y alquileres el 25 %, fotografía y vídeo el 15 %. Esas tres partidas dominan; todo lo demás se negocia a su alrededor.</p>
    <h2>El número de invitados es la palanca maestra</h2>
    <p>El coste por invitado arrastra catering, alquileres, invitaciones, detalles y hasta el tamaño del recinto. Quitar 10 invitados libera más presupuesto que bajar el nivel de las flores.</p>
    <h2>La temporada baja ahorra de verdad</h2>
    <p>Los sábados por la noche de junio a septiembre pagan precios pico. Los viernes por la noche, los domingos y las fechas de noviembre-abril suelen ahorrar un 20-30 % en recinto y proveedores por igual.</p>
    <h2>Construye el colchón</h2>
    <p>Aparta parte del porcentaje de imprevistos como contingencia. Las bodas medias se pasan del presupuesto inicial en torno a un 10-15 %, casi siempre en comensales de última hora y alquileres extra.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Standardaufteilung</h2>
    <p>Catering und Bar schlucken etwa 30 % eines typischen Budgets, Location und Ausstattung 25 %, Foto und Video 15 %. Diese drei dominieren; alles andere verhandelt sich um sie herum.</p>
    <h2>Die Gästezahl ist der Haupt-Hebel</h2>
    <p>Die Kosten pro Gast treiben Catering, Ausstattung, Einladungen, Gastgeschenke und sogar die nötige Größe der Location. Zehn Gäste weniger freien mehr Budget als jedes Blumen-Downgrade.</p>
    <h2>Nebensaison spart echtes Geld</h2>
    <p>Samstagsabende von Juni bis September kosten Höchstpreise. Freitagsabende, Sonntage und Termine von November bis April sparen bei Location und Dienstleistern regelmäßig 20-30 %.</p>
    <h2>Baut den Puffer ein</h2>
    <p>Legt einen Teil des Sonstige-Postens als Rücklage zurück. Hochzeiten überschreiten ihr Anfangsbudget im Schnitt um rund 10-15 % — meist über Last-Minute-Gästezahlen und Extra-Mieten.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function WeddingBudgetCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
