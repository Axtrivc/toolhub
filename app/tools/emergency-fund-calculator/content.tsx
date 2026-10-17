'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * EmergencyFundCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How many months is enough</h2>
    <p>Three months covers stable dual-income households with replaceable jobs. Six is the standard advice for single earners and anyone in a volatile industry. Freelancers, commission sales, and seasonal workers should think nine to twelve — the fund has to bridge the slow season, not just one layoff.</p>
    <h2>Count essentials, not lifestyle</h2>
    <p>The target is built from must-pay obligations: rent or mortgage, groceries, utilities, insurance premiums, minimum debt payments, and the childcare that keeps you employable. Dining out and subscriptions are the first things a real emergency cuts — leave them out of the target.</p>
    <h2>Keep it boring and liquid</h2>
    <p>The fund belongs in a high-yield savings account or money market fund — same-day liquid, zero volatility. Investing it defeats the purpose: markets can drop 30% in exactly the quarter you lose your job, forcing you to sell at the bottom.</p>
    <h2>Do not overfund it</h2>
    <p>Cash beyond the target drags on returns. Once the fund is full, redirect the monthly saving in order: high-interest debt first (paying off a 20% card is a guaranteed 20% return), then the employer 401(k) match, then long-term investing.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>到底几个月才够</h2>
    <p>双职工、工作可替代性强,3 个月够用。单职工或行业波动大,6 个月是标准建议。自由职业、提成销售和季节性工作者应按 9-12 个月想——储备金要桥接的是整个淡季,而不只是失业的头一个月。</p>
    <h2>算必要支出,别算生活方式</h2>
    <p>目标由「必须支付」构成:房租或房贷、吃饭、水电燃气、保险费、债务最低还款,以及让你能继续上班的托育。外出就餐和订阅是真正紧急状况里最先砍掉的——别把它们算进目标。</p>
    <h2>让它无聊且流动</h2>
    <p>这笔钱属于高收益活期或货币基金:当日可取、零波动。拿去投资就失去意义——市场完全可能在你失业的那个季度跌 30%,逼你在底部割肉。</p>
    <h2>也别攒过头</h2>
    <p>超过目标的现金会拖累收益。攒满之后按顺序改道:先还高息债(还掉 20% 年利率的卡等于稳赚 20%),再吃满雇主 401(k) 匹配,然后才是长期投资。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Cuántos meses son suficientes?</h2>
    <p>Tres meses bastan para hogares de dos sueldos estables con empleos reemplazables. Seis es el consejo estándar para un solo ingreso o sectores volátiles. Autónomos, vendedores a comisión y trabajadores de temporada deberían pensar en nueve a doce: el colchón tiene que cruzar la temporada baja entera, no solo el primer mes de paro.</p>
    <h2>Cuenta lo esencial, no el estilo de vida</h2>
    <p>El objetivo se construye con las obligaciones de pago obligado: vivienda, comida, suministros, seguros, cuotas mínimas de deuda y el cuidado de hijos que te mantiene empleable. Restaurantes y suscripciones son lo primero que una emergencia real corta — déjalos fuera.</p>
    <h2>Mantenlo aburrido y líquido</h2>
    <p>El fondo pertenece a una cuenta remunerada o un fondo monetario: líquido el mismo día, cero volatilidad. Invertirlo arruina el propósito — el mercado puede caer un 30% justo el trimestre en que pierdes el trabajo y obligarte a vender en el suelo.</p>
    <h2>Tampoco te pases</h2>
    <p>El efectivo por encima del objetivo lastra la rentabilidad. Una vez lleno, redirige el ahorro mensual en orden: primero la deuda cara (amortizar una tarjeta al 20% es un 20% garantizado), luego el match del 401(k) y después la inversión a largo plazo.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wie viele Monate reichen</h2>
    <p>Drei Monate decken stabile Doppelverdiener mit leicht ersetzbaren Jobs. Sechs sind die Standardempfehlung für Alleinverdiener und volatile Branchen. Selbstständige, Provisionsverkäufer und Saisonarbeiter sollten an neun bis zwölf denken — der Puffer muss die ganze schwache Saison überbrücken, nicht nur den ersten Monat ohne Job.</p>
    <h2>Zähle Grundausgaben, nicht Lebensstil</h2>
    <p>Das Ziel besteht aus Muss-Zahlungen: Miete oder Kredit, Essen, Energie, Versicherungen, Mindestraten und die Kinderbetreuung, die dich erwerbsfähig hält. Restaurants und Abos streicht ein echter Notfall zuerst — lass sie weg.</p>
    <h2>Halte es langweilig und liquide</h2>
    <p>Das Geld gehört auf Tagesgeld oder in einen Geldmarktfonds: täglich verfügbar, null Volatilität. Angelegt zerstört es den Sinn — der Markt kann ausgerechnet in dem Quartal 30 % fallen, in dem du den Job verlierst, und dich am Boden verkaufen zwingen.</p>
    <h2>Aber nicht übertreiben</h2>
    <p>Bargeld über dem Ziel hinaus bremst die Rendite. Ist der Puffer voll, leite das Monatssparen der Reihe nach um: zuerst teure Schulden (eine 20-%-Karte tilgen bringt garantierte 20 %), dann den vollen 401(k)-Match, dann langfristige Anlagen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function EmergencyFundCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
