'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Days Countdown Calculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Whether you&apos;re counting down to a launch, a wedding, or the next public holiday, this{' '}
      <strong>days countdown calculator</strong> answers two everyday questions: <em>how long until a date</em>,
      and <em>how far apart two dates are</em>. Everything is computed locally in your browser — your dates are
      never sent anywhere.
    </p>

    <div>
      <h2>Countdown tab</h2>
      <p>
        Pick a target date (and an optional time) and the display ticks live, showing{' '}
        <strong>days, hours, minutes, and seconds</strong> remaining. If the moment has already passed, the same
        cards flip to elapsed time — &quot;X days ago&quot;. Breakdown cards add the <strong>total days</strong>{' '}
        (including the partial day), the gap expressed as <strong>weeks + days</strong>, and the number of{' '}
        <strong>business days</strong> with Saturdays and Sundays skipped. The preset buttons jump to New Year,
        Christmas, or 30/90 days from right now.
      </p>
    </div>

    <div>
      <h2>Days-between tab</h2>
      <p>
        Enter any two dates to get the <strong>total calendar days</strong> between them, the same span as{' '}
        <strong>weeks + leftover days</strong>, an <strong>approximate month count</strong> (using the average
        30.44-day month), plus a split into <strong>business days</strong> and <strong>weekend days</strong>. The
        start date counts as day zero, so today-to-tomorrow reports 1 day. The result is signed: an earlier end
        date yields a negative span, but the cards show absolute magnitudes.
      </p>
    </div>

    <div>
      <h2>Things worth knowing</h2>
      <p>
        All arithmetic uses <strong>your device&apos;s local timezone</strong>, so a countdown to &quot;midnight
        New Year&quot; means midnight where you are. Day counts are whole calendar days — the partial hours of the
        current day only show up in the ticking clock and the decimal &quot;total days&quot; figure. The{' '}
        <em>business days</em> figure ignores public holidays (those differ by country and company), so treat it
        as a working-day estimate rather than an official schedule.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      无论你是在为产品发布、婚礼,还是下一个公共假期倒计时,这个<strong>天数倒计时计算器</strong>都能回答两个日常问题:<em>距离某天还有多久</em>,以及<em>两个日期相差多远</em>。所有计算都在你的浏览器中本地完成 —— 你的日期不会被发送到任何地方。
    </p>

    <div>
      <h2>倒计时标签页</h2>
      <p>
        选择一个目标日期(及可选的时间),显示会实时跳动,展示剩余的<strong>天、小时、分钟和秒</strong>。如果时刻已经过去,同样的卡片会切换为已过去时间 ——「X 天前」。明细卡片还会补充<strong>总天数</strong>(包含不足一天的零头)、以<strong>周 + 天</strong>表示的间隔,以及跳过周六、周日的<strong>工作日</strong>数量。预设按钮可一键跳到新年、圣诞节,或当前时间的 30/90 天后。
      </p>
    </div>

    <div>
      <h2>天数间隔标签页</h2>
      <p>
        输入任意两个日期,即可得到它们之间的<strong>总日历天数</strong>、以<strong>周 + 余下天数</strong>表示的同一间隔、<strong>近似月数</strong>(按平均 30.44 天/月计算),以及<strong>工作日</strong>与<strong>周末日</strong>的拆分。起始日期记为第 0 天,因此「今天到明天」会显示为 1 天。结果带正负号:结束日期更早会得到负的间隔,但卡片展示的是绝对值。
      </p>
    </div>

    <div>
      <h2>值得了解的几点</h2>
      <p>
        所有运算都使用<strong>你设备的本地时区</strong>,因此倒计时到「新年午夜」指的是你所在地的午夜。天数统计是完整的日历天 —— 当天剩余的零头小时只会出现在跳动的时钟和小数形式的「总天数」数字里。<em>工作日</em>这个数字会忽略公共假期(各国和各公司各不相同),所以请把它当作工作日的估算值,而非官方日程。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Ya estés contando los días para un lanzamiento, una boda o el próximo festivo, esta{' '}
      <strong>calculadora de cuenta atrás en días</strong> responde a dos preguntas cotidianas:{' '}
      <em>cuánto falta para una fecha</em> y <em>cuántos días hay entre dos fechas</em>. Todo se calcula
      localmente en tu navegador — tus fechas nunca se envían a ningún sitio.
    </p>

    <div>
      <h2>Pestaña de cuenta atrás</h2>
      <p>
        Elige una fecha objetivo (y una hora opcional) y la pantalla se actualiza en directo, mostrando{' '}
        <strong>días, horas, minutos y segundos</strong> restantes. Si el momento ya ha pasado, las mismas tarjetas
        cambian a tiempo transcurrido — «hace X días». Las tarjetas de desglose añaden los <strong>días totales</strong>{' '}
        (incluyendo el día parcial), el intervalo expresado como <strong>semanas + días</strong> y el número de{' '}
        <strong>días laborables</strong> sin contar sábados y domingos. Los botones predefinidos saltan a Año Nuevo,
        Navidad o 30/90 días a partir de ahora.
      </p>
    </div>

    <div>
      <h2>Pestaña de días entre fechas</h2>
      <p>
        Introduce dos fechas cualesquiera para obtener los <strong>días naturales totales</strong> entre ellas, el
        mismo intervalo como <strong>semanas + días sobrantes</strong>, un <strong>recuento aproximado de meses</strong>{' '}
        (usando el mes promedio de 30,44 días), más un desglose en <strong>días laborables</strong> y{' '}
        <strong>días de fin de semana</strong>. La fecha de inicio cuenta como día cero, así que de hoy a mañana se
        informa 1 día. El resultado tiene signo: una fecha de finalización anterior produce un intervalo negativo,
        pero las tarjetas muestran magnitudes absolutas.
      </p>
    </div>

    <div>
      <h2>Cosas que vale la pena saber</h2>
      <p>
        Toda la aritmética usa <strong>la zona horaria local de tu dispositivo</strong>, así que una cuenta atrás
        hasta «medianoche de Año Nuevo» significa la medianoche donde tú estés. Los recuentos de días son días
        naturales completos — las horas parciales del día actual solo aparecen en el reloj que hace tictac y en la
        cifra decimal de «días totales». La cifra de <em>días laborables</em> ignora los festivos (estos cambian
        según el país y la empresa), así que trátala como una estimación de días laborables y no como un calendario
        oficial.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Egal, ob du zu einem Launch, einer Hochzeit oder dem nächsten Feiertag herunterzählst — dieser{' '}
      <strong>Tage-Countdown-Rechner</strong> beantwortet zwei alltägliche Fragen:{' '}
      <em>wie lange es noch bis zu einem Datum ist</em> und <em>wie weit zwei Daten auseinanderliegen</em>. Alles
      wird lokal in deinem Browser berechnet — deine Daten werden nirgendwo hingeschickt.
    </p>

    <div>
      <h2>Countdown-Tab</h2>
      <p>
        Wähle ein Zieldatum (und optional eine Uhrzeit) und die Anzeige tickt live und zeigt die verbleibenden{' '}
        <strong>Tage, Stunden, Minuten und Sekunden</strong>. Ist der Zeitpunkt bereits vergangen, wechseln dieselben
        Karten zu verstrichener Zeit — „vor X Tagen". Die Aufschlüsselungskarten ergänzen die <strong>Gesamttage</strong>{' '}
        (inklusive des anteiligen Tages), die Spanne als <strong>Wochen + Tage</strong> sowie die Anzahl an{' '}
        <strong>Werktagen</strong> ohne Samstag und Sonntag. Die Vorlagen springen zu Neujahr, Weihnachten oder 30/90
        Tage ab jetzt.
      </p>
    </div>

    <div>
      <h2>Tage-dazwischen-Tab</h2>
      <p>
        Gib zwei beliebige Daten ein, um die <strong>Gesamt-Kalendertage</strong> zwischen ihnen zu erhalten, dieselbe
        Spanne als <strong>Wochen + restliche Tage</strong>, eine <strong>ungefähre Monatsanzahl</strong> (basierend
        auf dem Durchschnittsmonat von 30,44 Tagen) sowie eine Aufteilung in <strong>Werktage</strong> und{' '}
        <strong>Wochenendtage</strong>. Das Startdatum zählt als Tag null, daher ergibt heute-bis-morgen 1 Tag. Das
        Ergebnis ist vorzeichenbehaftet: ein früheres Enddatum ergibt eine negative Spanne, aber die Karten zeigen
        absolute Beträge.
      </p>
    </div>

    <div>
      <h2>Wissenswertes</h2>
      <p>
        Die gesamte Arithmetik verwendet <strong>die lokale Zeitzone deines Geräts</strong>, deshalb bedeutet ein
        Countdown bis „Mitternacht Neujahr" die Mitternacht dort, wo du bist. Tageszählungen sind ganze Kalendertage
        — die anteiligen Stunden des aktuellen Tages erscheinen nur in der tickenden Uhr und der Dezimalzahl der
        „Gesamttage". Die Zahl der <em>Werktage</em> ignoriert gesetzliche Feiertage (diese unterscheiden sich je
        nach Land und Unternehmen), betrachte sie also als eine Schätzung der Arbeitstage und nicht als einen
        offiziellen Zeitplan.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DaysCountdownCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
