'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Timezone Converter 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
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
        pressing <strong>Now</strong> fills in the current time as seen in that zone, which may differ from your
        own clock. Around DST switchover weekends, a given wall time can be ambiguous or nonexistent in the
        affected zone; the converter resolves it to the closest valid instant, but it&apos;s worth confirming
        critical events for those dates with participants directly.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具？</h2>
    <p>
      跨时区安排会议，常常是好会议的坟墓。这款<strong>时区转换器</strong>把一个本地日期和时间一次性换算成最多六个其他时区的对应当地时间 —— 附带 UTC 偏移、
      跨日提醒和一张营业时段热力图，让你一眼就能挑出一个人性化的会议时段。它完全
      在你的浏览器中基于内置的 <code>Intl</code> API 运行，因此你输入的任何内容都不会离开你的设备。
    </p>

    <div>
      <h2>转换是如何进行的</h2>
      <p>
        你输入的时间会被当作<strong>源时区的本地钟面时间</strong>来解读，先转换成一个
        绝对时刻，再以正确的偏移渲染到每一个目标时区 —— 包括{' '}
        <strong>夏令时</strong>。由于 DST 由浏览器自带的时区数据库来应用，
        对于纽约或伦敦这样的时区，三月的同一场会议和十一月的同一场会议可能落在不同的 UTC 偏移上。<code>UTC offset</code> 这一列显示的是该时刻实际生效的偏移，而非
        全年平均值。
      </p>
    </div>

    <div>
      <h2>如何阅读这张表</h2>
      <p>
        被标为<strong>绿色</strong>的行落在当地营业时段（9:00–17:00）内 —— 尽量挑选
        每一行都变绿的时段。当换算后的时间落在与源时区不同的日历日期时，会出现一个<strong>跨日徽标</strong>（+1 day / -1 day）；这正是与亚太地区队友协作时「等等，是你那里的
        周二还是我这边的周二？」这种困惑的经典来源。表格下方的时分条会为每个时区展示一条
        可视化的 0–23 小时条带，所选小时以蓝色标出。
      </p>
    </div>

    <div>
      <h2>提示与陷阱</h2>
      <p>
        <em>「我的本地时区」</em>是根据你的设备设置检测出来的，所以如果你出差
        或使用了被 VPN 调整过的系统时钟，请务必再次确认。请记住，输入始终是按<em>源</em>时区来读取的 ——
        按下 <strong>Now</strong> 会填入该时区当前所见的时间，这可能与你自己时钟上的时间不同。在 DST 切换的那个周末前后，某个钟面时间在
        受影响的时区里可能是歧义的或根本不存在；转换器会把它解析为最接近的合法时刻，但对于
        这些日期的关键活动，最好还是直接与参与人再次确认。
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
      fecha y hora local en la hora equivalente en hasta seis zonas distintas a la vez — con desplazamientos UTC,
      avisos de cambio de día y un mapa de calor de horas laborables para que detectes de un vistazo una franja de reunión razonable. Se ejecuta
      completamente en tu navegador sobre la API <code>Intl</code> integrada, así que nada de lo que introduzcas abandona jamás tu dispositivo.
    </p>

    <div>
      <h2>Cómo funciona la conversión</h2>
      <p>
        La hora que introduces se interpreta como <strong>hora local en la zona de origen</strong>, se convierte a un
        instante absoluto y luego se muestra en cada zona de destino con el desplazamiento correcto — incluido{' '}
        <strong>el horario de verano</strong>. Como el horario de verano lo aplica la propia base de datos de zonas horarias del navegador,
        una reunión en marzo y esa misma reunión en noviembre pueden caer en distintos desplazamientos UTC para zonas como Nueva
        York o Londres. La columna <code>UTC offset</code> muestra el desplazamiento vigente en ese instante exacto, no una
        media anual.
      </p>
    </div>

    <div>
      <h2>Cómo leer la tabla</h2>
      <p>
        Las filas teñidas de <strong>verde</strong> caen dentro del horario laboral local (9:00–17:00) — busca franjas en las que
        todas las filas estén verdes. Una <strong>insignia de cambio de día</strong> (+1 day / -1 day) aparece cuando la hora convertida
        cae en una fecha de calendario distinta a la de origen; esta es la fuente clásica de la confusión de «espera, ¿tu
        martes o mi martes?» con los compañeros de Asia-Pacífico. Las barras de hora bajo la tabla ofrecen una
        franja visual de 0–23 horas por zona, con la hora seleccionada marcada en azul.
      </p>
    </div>

    <div>
      <h2>Consejos y trampas</h2>
      <p>
        <em>«Mi zona local»</em> se detecta a partir de los ajustes de tu dispositivo, así que compruébala si viajas
        o usas un reloj de sistema ajustado por VPN. Recuerda que la entrada siempre se lee en la zona <em>de origen</em> —
        al pulsar <strong>Now</strong> se rellena la hora actual tal como se ve en esa zona, que puede diferir de tu
        propio reloj. En los fines de semana de cambio de horario de verano, una hora local dada puede ser ambigua o inexistente en la
        zona afectada; el conversor la resuelve al instante válido más cercano, pero merece la pena confirmar
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
        York oder London auf unterschiedliche UTC-Verschiebungen fallen. Die Spalte <code>UTC offset</code> zeigt die Verschiebung, die in genau diesem Moment gilt, nicht einen
        Jahresdurchschnitt.
      </p>
    </div>

    <div>
      <h2>Die Tabelle lesen</h2>
      <p>
        Die <strong>grün</strong> eingefärbten Zeilen fallen in die lokalen Geschäftszeiten (9:00–17:00) — strebe Fenster an, in denen
        jede Zeile grün ist. Ein <strong>Tageswechsel-Abzeichen</strong> (+1 day / -1 day) erscheint, wenn die umgerechnete Zeit
        auf ein anderes Kalenderdatum als die Quelle fällt; das ist die klassische Quelle für die Verwirrung „warte, dein
        Dienstag oder mein Dienstag?" mit Teamkollegen im Asia-Pazifik-Raum. Die Stundenbalken unter der Tabelle bieten einen
        visuellen 0–23-Stunden-Streifen pro Zone, mit der gewählten Stunde in Blau markiert.
      </p>
    </div>

    <div>
      <h2>Tipps und Fallstricke</h2>
      <p>
        <em>„Meine lokale Zone"</em> wird aus deinen Geräteeinstellungen erkannt, also prüfe sie nach, wenn du reist
        oder eine per VPN verstellte Systemuhr verwendest. Denk daran, dass die Eingabe immer in der <em>Quell-</em>zone gelesen wird —
        ein Druck auf <strong>Now</strong> füllt die aktuelle Zeit, wie sie in dieser Zone gesehen wird, ein, was von deiner
        eigenen Uhr abweichen kann. An den Wochenenden der Sommerzeit-Umstellung kann eine bestimmte Uhrzeit in der
        betroffenen Zone mehrdeutig oder nichtexistent sein; der Konverter löst sie zum nächstgelegenen gültigen Zeitpunkt auf, aber es lohnt sich,
        kritische Termine an diesen Daten direkt mit den Teilnehmern abzustimmen.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function TimezoneConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
