'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * TreasuryBillCalculator 长文正文 —— 三语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why bills are quoted as a discount</h2>
    <p>Treasury bills pay no coupons. You hand over less than face value today — $988.63 for a 13-week bill at a 4.5% discount rate — and receive $1,000 at maturity; the difference is your entire return. The price follows mechanically: price = face × (1 − rate × days/360), the same formula the auction uses.</p>
    <h2>Bank discount yield versus investment yield</h2>
    <p>The quoted discount rate understates what you earn twice over: it annualizes on a 360-day year and divides by face value instead of what you actually paid. Recompute on a 365-day year over the purchase price and you get the investment yield — the number honestly comparable to CDs, money market funds, and coupon bonds. For the same bill it is always a bit higher (4.615% versus 4.5% here).</p>
    <h2>Buying at auction or in the market</h2>
    <p>TreasuryDirect and most brokers sell new issues in $100 increments with no fee; at auction you get whatever rate the crowd sets (non-competitive), while competitive bidders name their price and risk getting nothing. In the secondary market you can buy any maturity on any day, but the discount rate you lock in moves daily with Fed expectations.</p>
    <h2>The tax angle people actually care about</h2>
    <p>T-bill interest is exempt from state and local income tax — a genuine edge in high-tax states — but fully taxable federally as ordinary income, reported on a 1099-INT as the discount at maturity. That state exemption is why bills often beat nominally higher-yielding alternatives for residents of California or New York.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué las letras se cotizan con descuento</h2>
    <p>Las letras del Tesoro no pagan cupones: entregas hoy menos del nominal — 988,63 $ por una letra de 13 semanas al 4,5 % de descuento — y cobras 1.000 $ al vencimiento; la diferencia es toda tu rentabilidad. El precio sale solo: precio = nominal × (1 − tasa × días/360), la misma fórmula de la subasta.</p>
    <h2>Rendimiento bancario de descuento frente a rendimiento de inversión</h2>
    <p>La tasa de descuento publicada subestima lo que ganas por partida doble: anualiza con año de 360 días y divide entre el nominal, no entre lo que pagaste. Recalculado con 365 días sobre el precio de compra obtienes el rendimiento de inversión — el único comparable sin trampas con depósitos, fondos monetarios y bonos con cupón. Para la misma letra siempre queda algo más alto (4,615 % frente a 4,5 % aquí).</p>
    <h2>Comprar en subasta o en mercado</h2>
    <p>TreasuryDirect y la mayoría de brókers venden nuevas emisiones en múltiplos de 100 $ sin comisión; en subasta no competitiva aceptas la tasa que fije el mercado, mientras que el licitador competitivo pone precio y arriesga quedarse sin nada. En el mercado secundario puedes comprar cualquier plazo cualquier día, pero la tasa que bloqueas se mueve a diario con las expectativas de la Fed.</p>
    <h2>El detalle fiscal que de verdad importa</h2>
    <p>El interés de las letras está exento de impuestos estatales y locales —ventaja real en estados con alta presión— pero tributa íntegro en el federal como renta ordinaria, y se declara en el 1099-INT como el descuento al vencimiento. Esa exención estatal explica que las letras superen a alternativas de nominal más alto para residentes de California o Nueva York.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum Bills als Disagio notiert werden</h2>
    <p>Treasury-Bills zahlen keine Kupons: Du zahlst heute weniger als den Nennwert — 988,63 $ für eine 13-Wochen-Bill mit 4,5 % Diskontsatz — und erhältst bei Fälligkeit 1.000 $; die Differenz ist die gesamte Rendite. Der Preis folgt mechanisch: Preis = Nennwert × (1 − Satz × Tage/360), dieselbe Formel wie bei der Auktion.</p>
    <h2>Bank-Diskontrendite gegen Anlagerendite</h2>
    <p>Der notierte Diskontsatz unterschätzt deine Rendite doppelt: Er annualisiert auf 360 Tage und teilt durch den Nennwert statt durch den tatsächlich gezahlten Preis. Mit 365 Tagen über den Kaufpreis gerechnet ergibt sich die Anlagerendite — die einzige ehrlich vergleichbare Zahl mit Festgeld, Geldmarktfonds und Kuponanleihen. Für dieselbe Bill liegt sie stets etwas höher (hier 4,615 % gegenüber 4,5 %).</p>
    <h2>Kauf in der Auktion oder über die Börse</h2>
    <p>TreasuryDirect und die meisten Broker verkaufen Neuemissionen in 100-$-Schritten ohne Gebühr; bei nicht-kompetitiven Geboten übernimmst du den Marktsatz, kompetitive Bieter nennen ihren Preis und gehen leer aus, wenn sie zu knapp kalkulieren. Am Sekundärmarkt gibt es jede Laufzeit an jedem Tag — aber der gesicherte Diskontsatz schwankt täglich mit den Fed-Erwartungen.</p>
    <h2>Der Steueraspekt, der wirklich zählt</h2>
    <p>Bill-Zinsen sind von Landes- und Kommunalsteuer befreit — ein echter Vorteil in Hochsteuerstaaten —, aber voll bundessteuerpflichtig als Ordentlicheinkommen, ausgewiesen auf der 1099-INT als Disagio bei Fälligkeit. Genau diese Befreiung lässt Bills für Kalifornier oder New Yorker oft nominell höhere Alternativen schlagen.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function TreasuryBillCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
