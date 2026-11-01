'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Tip Calculator 长文正文 —— 三语 dispatcher
 *
 * 原文件即为独立 <section>(非 ToolContent),沿用其自有 h2 结构。en 分支与原文
 * 渲染输出一致。<code> 内容、$ 金额保持不变;es/de 采用十进制逗号、百分号前加空格。
 */

// ──────────────────────────── en(与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>How Much Should You Tip?</h2>
    <p>
      Tipping customs vary by country, but in the United States and Canada, tipping is expected
      for most sit-down service. The standard range is <strong>15-20%</strong> of the pre-tax
      bill for restaurant service, with 18% being the most common default for satisfactory service.
      This calculator handles the math instantly and splits the result evenly across any number of
      people.
    </p>

    <h2>Standard Tip Rates</h2>
    <ul>
      <li><strong>15%</strong> &mdash; Adequate service</li>
      <li><strong>18%</strong> &mdash; Good service (the most common default)</li>
      <li><strong>20%</strong> &mdash; Excellent service</li>
      <li><strong>25%+</strong> &mdash; Exceptional service or fine dining</li>
    </ul>

    <h2>Tipping Etiquette by Situation</h2>
    <ul>
      <li><strong>Restaurants (sit-down):</strong> 15-20% of the pre-tax bill</li>
      <li><strong>Bars:</strong> $1-2 per drink, or 15-20% of the tab</li>
      <li><strong>Food delivery:</strong> 15-20%, minimum $3-5</li>
      <li><strong>Taxis / rideshare:</strong> 10-20%</li>
      <li><strong>Hairdressers:</strong> 15-20%</li>
      <li><strong>Hotel housekeeping:</strong> $2-5 per night</li>
    </ul>

    <h2>How to Calculate a Tip</h2>
    <p>
      To calculate a tip manually, move the decimal point one place left on your bill to get 10%,
      then double it for 20% or halve it for 5%. For example, on a $45 bill: 10% is $4.50, so 20%
      is $9.00 and 15% is roughly $6.75 (halfway between). Or just use this calculator to avoid
      the mental math.
    </p>

    <h2>Tipping Around the World</h2>
    <p>
      Tipping norms differ dramatically by country. In Japan, tipping can actually be considered
      rude. In much of Europe, a service charge is already included in the bill, and rounding up
      is appreciated. Always check local customs when traveling &mdash; the &quot;right&quot; tip in one
      country may be insulting in another.
    </p>

    <h2>Should You Tip on Tax?</h2>
    <p>
      Convention is to tip on the <strong>pre-tax amount</strong>, since tax is not service.
      However, many people tip on the total for simplicity, and the difference is usually small.
      Either is acceptable; this calculator uses the bill amount you enter.
    </p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Cuánto deberías dejar de propina?</h2>
    <p>
      Las costumbres de propina varían según el país, pero en Estados Unidos y Canadá se espera
      dejar propina en la mayoría de los servicios de mesa. Las horquillas habituales son del{' '}
      <strong>15-20 %</strong> de la cuenta sin impuestos para el servicio de restaurante, siendo el
      18 % lo más habitual para un servicio satisfactorio. Esta calculadora hace los
      cálculos al instante y reparte el resultado a partes iguales entre cualquier número de personas.
    </p>

    <h2>Tipos de propina habituales</h2>
    <ul>
      <li><strong>15 %</strong> — Servicio adecuado</li>
      <li><strong>18 %</strong> — Buen servicio (el más habitual)</li>
      <li><strong>20 %</strong> — Servicio excelente</li>
      <li><strong>25 %+</strong> — Servicio excepcional o restaurante de lujo</li>
    </ul>

    <h2>Etiqueta de la propina según la situación</h2>
    <ul>
      <li><strong>Restaurantes (con servicio de mesa):</strong> 15-20 % de la cuenta sin impuestos</li>
      <li><strong>Bares:</strong> $1-2 por bebida, o el 15-20 % de la cuenta</li>
      <li><strong>Reparto de comida:</strong> 15-20 %, mínimo $3-5</li>
      <li><strong>Taxis / VTC:</strong> 10-20 %</li>
      <li><strong>Peluqueros:</strong> 15-20 %</li>
      <li><strong>Limpieza de hotel:</strong> $2-5 por noche</li>
    </ul>

    <h2>Cómo calcular una propina</h2>
    <p>
      Para calcular una propina a mano, mueve el punto decimal un lugar a la izquierda en tu cuenta
      para obtener el 10 %, luego duplícalo para el 20 % o divídelo entre dos para el 5 %. Por
      ejemplo, en una cuenta de $45: el 10 % son $4,50, así que el 20 % son $9,00 y el 15 % es
      aproximadamente $6,75 (el punto medio). O simplemente usa esta calculadora para evitar la
      aritmética mental.
    </p>

    <h2>La propina por el mundo</h2>
    <p>
      Las normas de propina difieren drásticamente según el país. En Japón, dejar propina puede
      considerarse de mala educación. En gran parte de Europa, el servicio ya va incluido en la
      cuenta, y redondear hacia arriba se agradece. Consulta siempre las costumbres locales cuando
      viajes — la propina «correcta» en un país puede resultar insultante en otro.
    </p>

    <h2>¿Deberías dejar propina sobre el impuesto?</h2>
    <p>
      La convención es dejar propina sobre el <strong>importe sin impuestos</strong>, ya que el
      impuesto no es servicio. Sin embargo, mucha gente deja propina sobre el total por simplicidad,
      y la diferencia suele ser pequeña. Ambas opciones son aceptables; esta calculadora usa el
      importe de la cuenta que introduzcas.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Wie viel Trinkgeld solltest du geben?</h2>
    <p>
      Die Trinkgeldbräuche unterscheiden sich von Land zu Land, doch in den USA und Kanada wird bei
      den meisten Servicemahlzeiten ein Trinkgeld erwartet. Der übliche Rahmen liegt bei{' '}
      <strong>15-20 %</strong> der Rechnung ohne Steuer für den Restaurantservice, wobei 18 % der
      häufigste Standard für zufriedenstellenden Service ist. Dieser Rechner erledigt die
      Berechnung sofort und teilt das Ergebnis gleichmäßig auf beliebig viele Personen auf.
    </p>

    <h2>Übliche Trinkgeldsätze</h2>
    <ul>
      <li><strong>15 %</strong> — Ordentlicher Service</li>
      <li><strong>18 %</strong> — Guter Service (der häufigste Standard)</li>
      <li><strong>20 %</strong> — Ausgezeichneter Service</li>
      <li><strong>25 %+</strong> — Herausragender Service oder Fine Dining</li>
    </ul>

    <h2>Trinkgeld-Etikette nach Situation</h2>
    <ul>
      <li><strong>Restaurants (mit Bedienung):</strong> 15-20 % der Rechnung ohne Steuer</li>
      <li><strong>Bars:</strong> $1-2 pro Getränk oder 15-20 % der Rechnung</li>
      <li><strong>Lieferdienste:</strong> 15-20 %, mindestens $3-5</li>
      <li><strong>Taxis / Ride-Sharing:</strong> 10-20 %</li>
      <li><strong>Friseure:</strong> 15-20 %</li>
      <li><strong>Hotelreinigung:</strong> $2-5 pro Nacht</li>
    </ul>

    <h2>Wie man ein Trinkgeld berechnet</h2>
    <p>
      Um ein Trinkgeld von Hand zu berechnen, verschiebe das Komma in deiner Rechnung um eine Stelle
      nach links für 10 %, verdopple den Betrag dann für 20 % oder halbiere ihn für 5 %. Beispiel: bei einer
      Rechnung von $45 sind 10 % $4,50, also sind 20 % $9,00 und 15 % rund $6,75 (genau dazwischen).
      Oder nutze einfach diesen Rechner, um das Kopfrechnen zu sparen.
    </p>

    <h2>Trinkgeld weltweit</h2>
    <p>
      Die Trinkgeldnormen unterscheiden sich je nach Land drastisch. In Japan kann ein Trinkgeld
      sogar als unhöflich empfunden werden. In weiten Teilen Europas ist eine Servicegebühr schon in
      der Rechnung enthalten, und das Aufrunden wird geschätzt. Informiere dich beim Reisen immer
      über die lokalen Bräuche — das „richtige“ Trinkgeld in einem Land kann in einem anderen
      beleidigend sein.
    </p>

    <h2>Solltest du auf die Steuer Trinkgeld geben?</h2>
    <p>
      Es ist üblich, das Trinkgeld auf den <strong>Betrag ohne Steuer</strong> zu berechnen, da die
      Steuer keine Dienstleistung ist. Viele geben der Einfachheit halber jedoch auf den Gesamtbetrag
      Trinkgeld, und der Unterschied ist meist gering. Beides ist akzeptabel; dieser Rechner verwendet
      den Rechnungsbetrag, den du eingibst.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function TipCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
