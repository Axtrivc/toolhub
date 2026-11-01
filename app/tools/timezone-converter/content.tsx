'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Timezone Converter 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Scheduling across timezones is where good meetings go to die. This <strong>timezone converter</strong> turns a
      local date and time into the equivalent wall-clock time in up to six other zones at once — with UTC offsets,
      day-shift warnings, and a business-hours heat map so you can spot a humane meeting slot at a glance. It runs
      entirely in your browser on the built-in <code>Intl</code> API, so nothing you enter ever leaves your device.
    </p>

    <div>
      <h2>How the conversion works</h2>
      <p>
        The time you enter is interpreted as <strong>wall-clock time in the source zone</strong>, converted to an
        absolute instant, and then rendered in each target zone with the correct offset — including{' '}
        <strong>daylight saving time</strong>. Because DST is applied by the browser&apos;s own timezone database,
        a meeting in March and the same meeting in November can land on different UTC offsets for zones like New
        York or London. The <code>UTC offset</code> column shows the offset in effect at that exact moment, not a
        yearly average.
      </p>
    </div>

    <div>
      <h2>Reading the table</h2>
      <p>
        Rows tinted <strong>green</strong> fall inside local business hours (9:00–17:00) — aim for slots where
        every row is green. A <strong>day-shift badge</strong> (+1 day / -1 day) appears when the converted time
        lands on a different calendar date than the source; this is the classic source of &quot;wait, your
        Tuesday or my Tuesday?&quot; confusion with Asia-Pacific teammates. The hour bars below the table give a
        visual 0–23 hour strip per zone, with the selected hour marked in blue.
      </p>
    </div>

    <div>
      <h2>Tips and pitfalls</h2>
      <p>
        <em>&quot;My local zone&quot;</em> is detected from your device settings, so double-check it if you travel
        or use a VPN-adjusted system clock. Remember that the input is always read in the <em>source</em> zone —
        pressing <strong>Now</strong>{' '}
        fills in the current time as seen in that zone, which may differ from your
        own clock. Around DST switchover weekends, a given wall time can be ambiguous or nonexistent in the
        affected zone; the converter resolves it to the closest valid instant, but it&apos;s worth confirming
        critical events for those dates with participants directly.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Planificar entre zonas horarias es donde las buenas reuniones van a morir. Este <strong>conversor de zonas horarias</strong> convierte una
      fecha y hora local en la hora equivalente en hasta seis zonas distintas a la vez — con desfases UTC,
      avisos de cambio de día y un mapa de calor de horas laborables para que detectes de un vistazo una franja de reunión razonable. Se ejecuta
      completamente en tu navegador sobre la API <code>Intl</code> integrada, así que nada de lo que introduzcas abandona jamás tu dispositivo.
    </p>

    <div>
      <h2>Cómo funciona la conversión</h2>
      <p>
        La hora que introduces se interpreta como <strong>hora local en la zona de origen</strong>, se convierte a un
        instante absoluto y luego se muestra en cada zona de destino con el desfase correcto — incluido{' '}
        <strong>el horario de verano</strong>. Como el horario de verano lo aplica la propia base de datos de zonas horarias del navegador,
        una reunión en marzo y esa misma reunión en noviembre pueden caer en distintos desfases UTC para zonas como Nueva
        York o Londres. La columna <code>Desfase UTC</code> muestra el desfase vigente en ese instante exacto, no una
        media anual.
      </p>
    </div>

    <div>
      <h2>Cómo leer la tabla</h2>
      <p>
        Las filas teñidas de <strong>verde</strong> caen dentro del horario laboral local (9:00–17:00) — busca franjas en las que
        todas las filas estén verdes. Una <strong>insignia de cambio de día</strong> (+1 día / -1 día) aparece cuando la hora convertida
        cae en una fecha de calendario distinta a la de origen; esta es la fuente clásica de la confusión de «espera, ¿tu
        martes o mi martes?» con los compañeros de Asia-Pacífico. Las barras de hora bajo la tabla ofrecen una
        franja visual de 0–23 horas por zona, con la hora seleccionada marcada en azul.
      </p>
    </div>

    <div>
      <h2>Consejos y errores comunes</h2>
      <p>
        <em>«Mi zona local»</em> se detecta a partir de los ajustes de tu dispositivo, así que compruébala si viajas
        o usas un reloj de sistema ajustado por VPN. Recuerda que la entrada siempre se lee en la zona <em>de origen</em> —
        al pulsar <strong>Ahora</strong> se rellena la hora actual tal como se ve en esa zona, que puede diferir de tu
        propio reloj. En los fines de semana de cambio de horario de verano, una hora local dada puede ser ambigua o inexistente en la
        zona afectada; el conversor la resuelve en el instante válido más cercano, pero merece la pena confirmar
        los eventos críticos de esas fechas directamente con los participantes.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Terminabstimmung über Zeitzonen hinweg ist das Grab guter Meetings. Dieser <strong>Zeitzonenkonverter</strong> wandelt ein
      lokales Datum und eine Uhrzeit in die entsprechende Uhrzeit in bis zu sechs anderen Zonen zugleich um — mit UTC-Verschiebungen,
      Tageswechsel-Warnungen und einer Heatmap der Geschäftszeiten, damit du auf einen Blick ein humanes Meeting-Fenster findest. Er läuft
      vollständig in deinem Browser über die eingebaute <code>Intl</code>-API, sodass nichts, was du eingibst, jemals dein Gerät verlässt.
    </p>

    <div>
      <h2>Wie die Umrechnung funktioniert</h2>
      <p>
        Die eingegebene Zeit wird als <strong>Uhrzeit in der Quellzone</strong> interpretiert, in einen
        absoluten Zeitpunkt umgerechnet und dann in jeder Zielzone mit der korrekten Verschiebung dargestellt — einschließlich{' '}
        <strong>der Sommerzeit</strong>. Da die Sommerzeit von der eigenen Zeitzonendatenbank des Browsers angewendet wird,
        kann ein Meeting im März und dasselbe Meeting im November für Zonen wie New
        York oder London auf unterschiedliche UTC-Verschiebungen fallen. Die Spalte <code>UTC-Verschiebung</code> zeigt die Verschiebung, die in genau diesem Moment gilt, nicht einen
        Jahresdurchschnitt.
      </p>
    </div>

    <div>
      <h2>Die Tabelle lesen</h2>
      <p>
        Die <strong>grün</strong> eingefärbten Zeilen fallen in die lokalen Geschäftszeiten (9:00–17:00) — strebe Fenster an, in denen
        jede Zeile grün ist. Ein <strong>Tageswechsel-Abzeichen</strong> (+1 Tag / -1 Tag) erscheint, wenn die umgerechnete Zeit
        auf ein anderes Kalenderdatum als die Quelle fällt; das ist die klassische Quelle für die Verwirrung „warte, dein
        Dienstag oder mein Dienstag?“ mit Teamkollegen im Asia-Pazifik-Raum. Die Stundenbalken unter der Tabelle bieten einen
        visuellen 0–23-Stunden-Streifen pro Zone, mit der gewählten Stunde in Blau markiert.
      </p>
    </div>

    <div>
      <h2>Tipps und Fallstricke</h2>
      <p>
        <em>„Meine lokale Zone“</em> wird aus deinen Geräteeinstellungen erkannt, also prüfe sie nach, wenn du reist
        oder eine per VPN verstellte Systemuhr verwendest. Denk daran, dass die Eingabe immer in der <em>Quell-</em>zone gelesen wird —
        ein Klick auf <strong>Jetzt</strong> füllt die aktuelle Zeit, wie sie in dieser Zone gesehen wird, ein, was von deiner
        eigenen Uhr abweichen kann. An den Wochenenden der Sommerzeit-Umstellung kann eine bestimmte Uhrzeit in der
        betroffenen Zone mehrdeutig oder nichtexistent sein; der Konverter löst sie zum nächstgelegenen gültigen Zeitpunkt auf, aber es lohnt sich,
        kritische Termine für diese Daten direkt mit den Teilnehmern abzustimmen.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function TimezoneConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
