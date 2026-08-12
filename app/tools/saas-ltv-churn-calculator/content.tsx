'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * SaaS LTV & Churn Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      This <strong>SaaS metrics calculator</strong> turns a handful of inputs — ARPU, gross margin, churn, CAC,
      growth, and customer count — into the numbers founders and investors actually watch: customer lifetime, LTV,
      LTV:CAC ratio, CAC payback, churned MRR, and a simplified net revenue retention hint. It runs entirely in
      your browser; nothing is sent anywhere.
    </p>

    <div>
      <h2>How LTV and lifetime are derived</h2>
      <p>
        With a constant monthly churn rate, a customer survives <code>1 / churn</code> months on average — 5%
        churn means a 20-month expected lifetime. Multiplying by monthly gross profit per customer gives{' '}
        <code>LTV = ARPU × gross margin ÷ churn</code>. Using <em>gross margin</em> (not raw revenue) matters:
        at 80% margin, only $0.80 of every revenue dollar is available to repay acquisition costs. At 0% churn
        the lifetime is mathematically unbounded, which the tool shows as ∞.
      </p>
    </div>

    <div>
      <h2>Reading the health signals</h2>
      <p>
        The <strong>LTV:CAC ratio</strong> is the classic unit-economics test: below 1 you lose money on every
        customer, 1–3 is workable, and above 3 is considered healthy growth. <strong>CAC payback</strong> tells
        you how many months of gross profit are needed to recover acquisition spend — under 12 months is a
        common benchmark. The churned-customers and lost-MRR cards translate an abstract percentage into the
        actual number of accounts and revenue walking out the door each month.
      </p>
    </div>

    <div>
      <h2>Caveats and pitfalls</h2>
      <p>
        These formulas assume churn and ARPU stay constant over the lifetime — real cohorts decay non-linearly,
        and early churn is usually higher than steady-state. The <strong>NRR hint</strong> (
        <code>1 + growth − churn</code>) is a simplification: true net revenue retention also counts expansion,
        downgrades, and reactivations within the existing base. Use these numbers for quick sanity checks and
        pitch-deck math, not as a substitute for cohort analysis on real billing data.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      这款<strong>SaaS 指标计算器</strong>只需几项输入 —— ARPU、毛利率、流失率、CAC、增长率与客户数 ——
      就能算出创始人和投资人真正关注的数字：客户生命周期、LTV、LTV:CAC 比率、CAC 回收期、流失 MRR，以及一个简化的净收入留存提示。它完全在你的浏览器中运行，不会向任何地方发送数据。
    </p>

    <div>
      <h2>LTV 与生命周期是如何推导的</h2>
      <p>
        在固定的月流失率下，客户平均存活 <code>1 / churn</code> 个月 —— 5% 的流失率意味着 20 个月的预期生命周期。乘以每位客户的月毛利，得到{' '}
        <code>LTV = ARPU × gross margin ÷ churn</code>。使用<em>毛利率</em>（而非原始收入）很关键：在 80% 毛利率下，每 1 美元收入中只有 $0.80 可用于偿还获客成本。当流失率为 0% 时，生命周期在数学上无限大，工具会将其显示为 ∞。
      </p>
    </div>

    <div>
      <h2>如何解读健康度信号</h2>
      <p>
        <strong>LTV:CAC 比率</strong>是经典的单位经济性检验：低于 1 表示每位客户都在亏钱，1–3 属于可行区间，高于 3 则被视为健康增长。<strong>CAC 回收期</strong>告诉你需要多少个月的毛利才能收回获客支出 —— 12 个月以内是常见的基准。流失客户和流失 MRR 卡片把抽象的百分比换算成每月实际流失的账户数和收入。
      </p>
    </div>

    <div>
      <h2>注意事项与陷阱</h2>
      <p>
        这些公式假设流失率和 ARPU 在整个生命周期保持不变 —— 真实的同期群呈非线性衰减，且早期流失通常高于稳态。<strong>NRR 提示</strong>（
        <code>1 + growth − churn</code>）是一种简化：真正的净收入留存还要计入现有客户群中的 expansion、降级和重新激活。请把这些数字用于快速合理性检查和融资演示文稿的计算，而不能替代基于真实账单数据的同期群分析。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Esta <strong>calculadora de métricas SaaS</strong> convierte un puñado de entradas — ARPU, margen bruto, churn, CAC,
      crecimiento y número de clientes — en los números que de verdad vigilan fundadores e inversores: vida del cliente, LTV,
      ratio LTV:CAC, payback de CAC, MRR perdido y una pista simplificada de retención neta de ingresos. Funciona por completo en
      tu navegador; no se envía nada a ninguna parte.
    </p>

    <div>
      <h2>Cómo se derivan el LTV y la vida del cliente</h2>
      <p>
        Con una tasa de churn mensual constante, un cliente sobrevive de media <code>1 / churn</code> meses — un churn del 5 %
        significa una vida esperada de 20 meses. Multiplicando por el beneficio bruto mensual por cliente se obtiene{' '}
        <code>LTV = ARPU × gross margin ÷ churn</code>. Usar el <em>margen bruto</em> (y no los ingresos brutos) importa:
        con un margen del 80 %, solo $0.80 de cada dólar de ingreso queda disponible para pagar los costes de adquisición. Con un churn del 0 %
        la vida es matemáticamente no acotada, lo cual la herramienta muestra como ∞.
      </p>
    </div>

    <div>
      <h2>Cómo leer las señales de salud</h2>
      <p>
        El <strong>ratio LTV:CAC</strong> es la prueba clásica de unit economics: por debajo de 1 pierdes dinero en cada
        cliente, de 1 a 3 es viable, y por encima de 3 se considera un crecimiento sano. El <strong>payback de CAC</strong> te
        dice cuántos meses de beneficio bruto se necesitan para recuperar el gasto de adquisición — menos de 12 meses es un
        punto de referencia habitual. Las tarjetas de clientes perdidos y de MRR perdido traducen un porcentaje abstracto en el
        número real de cuentas y de ingresos que se van por la puerta cada mes.
      </p>
    </div>

    <div>
      <h2>Advertencias y trampas</h2>
      <p>
        Estas fórmulas asumen que el churn y el ARPU se mantienen constantes a lo largo de la vida — las cohortes reales decaen de forma no lineal,
        y el churn inicial suele ser mayor que el del régimen estacionario. La pista de <strong>NRR</strong> (
        <code>1 + growth − churn</code>) es una simplificación: la retención neta de ingresos real también cuenta la expansión,
        las bajadas y las reactivaciones dentro de la base existente. Usa estos números para comprobaciones rápidas y
        para las cuentas de una presentación a inversores, no como sustituto del análisis de cohortes sobre datos de facturación reales.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Dieser <strong>SaaS-Metriken-Rechner</strong> verwandelt eine Handvoll Eingaben — ARPU, Rohertrag, Churn, CAC,
      Wachstum und Kundenzahl — in die Zahlen, die Gründer und Investoren wirklich im Blick behalten: Kundenlebensdauer, LTV,
      LTV:CAC-Verhältnis, CAC-Payback, verloren gegangener MRR und einen vereinfachten Hinweis auf die Netto-Umsatzbindung. Er läuft vollständig in
      deinem Browser; es wird nichts irgendwohin gesendet.
    </p>

    <div>
      <h2>Wie LTV und Lebensdauer abgeleitet werden</h2>
      <p>
        Bei einer konstanten monatlichen Churn-Rate überlebt ein Kunde im Durchschnitt <code>1 / churn</code> Monate — 5 %
        Churn bedeuten eine erwartete Lebensdauer von 20 Monaten. Die Multiplikation mit dem monatlichen Rohertrag pro Kunde ergibt{' '}
        <code>LTV = ARPU × gross margin ÷ churn</code>. Den <em>Rohertrag</em> (und nicht den reinen Umsatz) zu verwenden, ist wichtig:
        bei 80 % Marge stehen von jedem Umsatzdollar nur $0.80 für die Deckung der Akquisekosten zur Verfügung. Bei 0 % Churn
        ist die Lebensdauer mathematisch unbegrenzt, was das Werkzeug als ∞ anzeigt.
      </p>
    </div>

    <div>
      <h2>Die Gesundheitssignale lesen</h2>
      <p>
        Das <strong>LTV:CAC-Verhältnis</strong> ist der klassische Test der Unit Economics: unter 1 verlierst du mit jedem
        Kunden Geld, 1–3 ist tragbar, und über 3 gilt als gesundes Wachstum. Das <strong>CAC-Payback</strong> sagt
        dir, wie viele Monate Rohertrag nötig sind, um die Akquisekosten wieder einzuspielen — unter 12 Monate ist ein
        gängiger Richtwert. Die Karten für verlorene Kunden und verlorenen MRR übersetzen einen abstrakten Prozentsatz in die
        tatsächliche Anzahl von Konten und Umsatz, die jeden Monat aus der Tür gehen.
      </p>
    </div>

    <div>
      <h2>Vorbehalte und Fallstricke</h2>
      <p>
        Diese Formeln gehen davon aus, dass Churn und ARPU über die gesamte Lebensdauer konstant bleiben — reale Kohorten zerfallen nicht-linear,
        und die frühe Churn ist meist höher als im stationären Zustand. Der <strong>NRR-Hinweis</strong> (
        <code>1 + growth − churn</code>) ist eine Vereinfachung: die echte Netto-Umsatzbindung zählt auch Expansion,
        Downgrades und Reaktivierungen innerhalb der bestehenden Basis. Nutze diese Zahlen für schnelle Plausibilitätsprüfungen und
        Pitch-Deck-Rechnungen, nicht als Ersatz für eine Kohortenanalyse echter Abrechnungsdaten.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SaasLtvChurnCalculatorClientContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
