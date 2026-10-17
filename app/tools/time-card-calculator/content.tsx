'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * TimeCardCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与既有工具页渲染口径一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Clock times vs. decimal hours</h2>
    <p>Time clocks record hours and minutes, but payroll systems multiply your rate by decimal hours: 7 h 45 m must reach payroll as 7.75, never 745 or 7.45. The conversion is minutes ÷ 60 — 15 minutes is 0.25, 30 is 0.50, 45 is 0.75. This tool shows both figures so you can transcribe the right one.</p>
    <h2>Overnight shifts and breaks</h2>
    <p>When the clock-out is earlier than the clock-in, the shift crossed midnight and 24 hours are added automatically: 22:00 to 06:00 is an 8-hour span before breaks. Unpaid meal periods come off the total; paid breaks stay in. If your employer rounds to the quarter hour (a 07:56 punch becomes 08:00), apply the same rounding before entering times so the totals reconcile.</p>
    <h2>Where the 40-hour line comes from</h2>
    <p>The default threshold follows the US Fair Labor Standards Act: overtime accrues past 40 hours in a workweek, not per day. California and a few other states add daily overtime after 8 hours; union contracts and Colorado add thresholds of their own — the threshold field accepts any of them. This tool counts the hours; for the money, the overtime pay calculator multiplies them by your rate.</p>
    <h2>Keep your own copy</h2>
    <p>Paper cards get lost and badge systems get "corrected." Employees who reconcile their own card weekly — five minutes every Friday — catch missing punches while the memory is fresh and before the pay period closes. Screenshot or photograph the card each week; in a dispute, contemporaneous records beat reconstructions.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>打卡时刻与十进制小时</h2>
    <p>考勤机记的是时分,工资系统乘的是十进制小时:7 小时 45 分进工资表必须是 7.75,而不是 745 或 7.45。换算就是分钟 ÷ 60——15 分钟是 0.25、30 是 0.50、45 是 0.75。本工具两个口径同时给出,照着抄不会错。</p>
    <h2>跨夜班与休息扣除</h2>
    <p>下班时刻早于上班时刻,说明班次跨过了午夜,工具自动加 24 小时:22:00 到 06:00 先算 8 小时,再扣休息。无薪午休要从总数里减掉,带薪休息则保留。如果公司按一刻钟取整(07:56 打卡记作 08:00),录入时先做同样的取整,合计才能对上账。</p>
    <h2>40 小时这条线从哪来</h2>
    <p>默认阈值沿用美国 FLSA:加班按"工作周超过 40 小时"累计,而不是按天。加州等少数州另有每日 8 小时加班,工会合同、科罗拉多州也有自己的门槛——阈值栏随便填。本工具管数小时;算钱的部分交给加班费计算器乘时薪。</p>
    <h2>留一份自己的底</h2>
    <p>纸卡会丢,考勤系统会被"更正"。每周五花五分钟自己核一次卡的人,总能在记忆还新鲜、工资期还没关账时发现漏打卡。每周给工时卡截个图或拍张照——真起争议时,同期记录永远比事后回忆有说服力。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Horas de reloj frente a horas decimales</h2>
    <p>El fichador registra horas y minutos, pero nómina multiplica tu tarifa por horas decimales: 7 h 45 m debe llegar como 7,75, nunca 745 ni 7,45. La conversión es minutos ÷ 60 — 15 minutos son 0,25; 30, 0,50; 45, 0,75. La herramienta muestra ambas cifras para que copies la correcta.</p>
    <h2>Turnos nocturnos y pausas</h2>
    <p>Si la salida es anterior a la entrada, el turno cruzó medianoche y se suman 24 h automáticamente: de 22:00 a 06:00 hay 8 horas antes de restar pausas. La comida sin pago se descuenta; las pausas pagadas se quedan. Si tu empresa redondea al cuarto de hora (07:56 pasa a 08:00), aplica esa misma regla al introducir los datos para que los totales cuadren.</p>
    <h2>De dónde sale la línea de las 40 horas</h2>
    <p>El umbral por defecto sigue la FLSA estadounidense: las horas extra se acumulan pasadas las 40 semanales, no por día. California y otros estados añaden overtime diario tras 8 horas; convenios y políticas internas tienen los suyos — el campo de umbral acepta cualquiera. Esta herramienta cuenta las horas; el importe lo calcula la calculadora de horas extra.</p>
    <h2>Guarda tu propia copia</h2>
    <p>Los tiques se pierden y los sistemas se «corrigen». Quien concilia su fichaje cada viernes — cinco minutos — detecta los picados que faltan mientras la memoria está fresca y el periodo abierto. Hazle una foto semanal a tu registro: en una disputa, un registro contemporáneo vale más que cualquier reconstrucción.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Stempelzeiten gegen Dezimalstunden</h2>
    <p>Die Stechuhr zählt Stunden und Minuten, die Lohnbuchhaltung multipliziert aber mit Dezimalstunden: 7 h 45 min müssen als 7,75 ankommen, nie als 745 oder 7,45. Die Umrechnung ist Minuten ÷ 60 — 15 Minuten sind 0,25, 30 sind 0,50, 45 sind 0,75. Der Rechner zeigt beide Werte, damit du den richtigen überträgst.</p>
    <h2>Nachtschichten und Pausen</h2>
    <p>Ist die Ausstempelzeit früher als die Einstempelzeit, lief die Schicht über Mitternacht und zählt automatisch 24 h dazu: 22:00 bis 06:00 sind 8 Stunden vor Pausenabzug. Unbezahlte Mittagspausen fliegen raus, bezahlte bleiben drin. Rundet der Arbeitgeber auf Viertelstunden (07:56 wird 08:00), übernimm dieselbe Rundung bei der Eingabe — sonst stimmen die Summen nicht.</p>
    <h2>Woher die 40-Stunden-Linie kommt</h2>
    <p>Die Standardschwelle folgt dem US-FLSA-Muster: Überstunden entstehen erst jenseits von 40 Stunden pro Woche, nicht pro Tag. Kalifornien und einige andere Staaten zählen täglich ab 8 Stunden dazu; Tarifverträge haben eigene Schwellen — das Feld nimmt alle. Dieser Rechner zählt die Stunden; fürs Geld multipliziert der Überstundenrechner.</p>
    <h2>Führe selbst Buch</h2>
    <p>Papierscheine verschwinden und Systeme werden „korrigiert“. Wer freitags fünf Minuten den eigenen Zettel abgleicht, findet fehlende Stempellungen, solange die Erinnerung frisch und der Abrechnungszeitraum noch offen ist. Fotografieren Sie den Stundenzettel wöchentlich — im Streit schlägt die zeitnahe Aufzeichnung jede Rekonstruktion.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function TimeCardCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
