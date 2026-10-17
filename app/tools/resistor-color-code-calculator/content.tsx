'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * ResistorColorCodeCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Find the gap before you read a single band</h2>
    <p>Hold the resistor so the gold or silver tolerance band sits on the right — that band is spaced visibly wider than the digit bands. Read from the far left: yellow-violet-red-gold is 4-7, times 100, ±5%, or 4.7 kΩ. Most misreadings are simply the resistor upside down.</p>
    <h2>Four, five, and six bands</h2>
    <p>Four bands carry two significant digits and suit ±5% and ±10% parts — the bread-and-butter of hobby electronics. Five bands add a third digit for ±1% and tighter precision. The rare sixth band is temperature coefficient in ppm/K, meaningful mostly in measurement circuits and precision references.</p>
    <h2>Gold and silver live in two roles</h2>
    <p>As multipliers, gold is ×0.1 and silver ×0.01, which is how sub-10 Ω values get encoded: brown-black-gold-gold reads 1.0 Ω ±5%. As the final band they mean ±5% and ±10% tolerance. A gold band can therefore be either the second-to-last or second band — the gap tells you which.</p>
    <h2>Trust the code, verify with the meter</h2>
    <p>The code states the nominal value and its legal range: a 470 Ω ±5% part may measure anywhere from 446.5 to 493.5 Ω. Measured outside that, you are probably reading it in-circuit, where parallel paths drag the value down — lift one leg for a true reading.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>先找间距,再读色环</h2>
    <p>把电阻拿正:金色或银色的容差环靠右——它与数字环之间的间距肉眼可见地更宽。然后从最左读起:黄紫红金 = 4-7、乘 100、±5%,即 4.7 kΩ。大多数"读错"只是把电阻拿倒了。</p>
    <h2>四环、五环与六环</h2>
    <p>四环是两位有效数字,配 ±5%/±10% 精度——业余电子的主力。五环多一位数字,服务 ±1% 及更精的电阻。罕见的第 6 环是以 ppm/K 计的温度系数,主要在测量电路与精密基准里有意义。</p>
    <h2>金银两色的双重身份</h2>
    <p>作倍率时金 ×0.1、银 ×0.01,10Ω 以下靠它编码:棕黑金金读作 1.0Ω ±5%。作末环时它们表示 ±5%/±10% 容差。所以金环既可能是倒数第二环也可能是第二环——靠间距区分。</p>
    <h2>信色环,也要用表验证</h2>
    <p>色环给出的是标称值与合法范围:470Ω ±5% 的电阻实测落在 446.5-493.5Ω 都算合格。若超出,多半是在路测量——并联支路会把读数拉低;翘起一条腿再量才是真值。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Localiza el hueco antes de leer banda por banda</h2>
    <p>Sujeta el resistor con la banda dorada o plateada de tolerancia a la derecha: esa banda está separada visiblemente más que las de dígitos. Lee desde la izquierda: amarillo-violeta-rojo-dorado es 4-7, por 100, ±5 %, o 4,7 kΩ. La mayoría de lecturas erróneas son simplemente el resistor del revés.</p>
    <h2>Cuatro, cinco y seis bandas</h2>
    <p>Cuatro bandas llevan dos cifras significativas y sirven para piezas ±5 % y ±10 % — el pan de cada día de la electrónica de aficionado. Cinco añaden una tercera cifra para ±1 % y mayor precisión. La rara sexta banda es el coeficiente térmico en ppm/K, relevante sobre todo en circuitos de medida y referencias de precisión.</p>
    <h2>Oro y plata juegan dos papeles</h2>
    <p>Como multiplicadores, el oro es ×0,1 y la plata ×0,01: así se codifican los valores bajo 10 Ω — marrón-negro-dorado-dorado se lee 1,0 Ω ±5 %. Como última banda marcan ±5 % y ±10 % de tolerancia. Una banda dorada puede ser la penúltima o la segunda: el hueco te dice cuál.</p>
    <h2>Confía en el código, verifica con el multímetro</h2>
    <p>El código da el valor nominal y su rango legal: una pieza de 470 Ω ±5 % puede medir entre 446,5 y 493,5 Ω. Fuera de eso, casi seguro mides en circuito, donde las ramas paralelas arrastran el valor — levanta una pata para leer el valor real.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Erst den Abstand finden, dann Ring für Ring lesen</h2>
    <p>Halte den Widerstand so, dass der goldene oder silberne Toleranzring rechts sitzt — dieser Ring hat einen sichtbar breiteren Abstand als die Ziffernringe. Dann von ganz links lesen: Gelb-Violett-Rot-Gold ist 4-7, mal 100, ±5 %, also 4,7 kΩ. Die meisten Fehllesungen sind schlicht der falsch herum gehaltene Widerstand.</p>
    <h2>Vier, fünf und sechs Ringe</h2>
    <p>Vier Ringe tragen zwei geltende Ziffern und passen zu ±5 %- und ±10 %-Teilen — das Alltagsgeschäft der Hobbyelektronik. Fünf Ringe ergänzen eine dritte Ziffer für ±1 % und enger. Der seltene sechste Ring ist der Temperaturkoeffizient in ppm/K, vor allem in Messtechnik und Präzisionsreferenzen relevant.</p>
    <h2>Gold und Silber in Doppelrolle</h2>
    <p>Als Multiplikatoren sind Gold ×0,1 und Silber ×0,01 — so werden Werte unter 10 Ω codiert: Braun-Schwarz-Gold-Gold liest sich als 1,0 Ω ±5 %. Als letzter Ring bedeuten sie ±5 % bzw. ±10 % Toleranz. Ein Goldring kann also vorletzter oder zweiter Ring sein — der Abstand verrät es.</p>
    <h2>Dem Code vertrauen, mit dem Messgerät prüfen</h2>
    <p>Der Code nennt Nennwert und legalen Bereich: Ein 470-Ω-Teil mit ±5 % darf zwischen 446,5 und 493,5 Ω liegen. Darüber hinaus misst du wahrscheinlich eingebaut, wo parallele Pfade den Wert runterziehen — ein Bein anheben für die wahre Messung.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function ResistorColorCodeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
