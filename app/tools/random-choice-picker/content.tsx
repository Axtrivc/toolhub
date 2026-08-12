'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Random Choice Picker 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Can&apos;t decide where to eat, who goes first, or which ticket gets the prize? This{' '}
      <strong>random choice picker</strong> takes a list of options — one per line — and draws one or more winners
      with a quick spinning animation and a satisfying reveal. It uses your browser&apos;s{' '}
      <strong>cryptographically secure random generator</strong>, runs entirely offline, and keeps a history of
      past draws so raffles stay auditable.
    </p>

    <div>
      <h2>How the draw works</h2>
      <p>
        Winners are selected with <code>crypto.getRandomValues</code> — the same randomness source browsers use
        for security keys — combined with <strong>rejection sampling</strong>, which removes the subtle bias that
        a naive <code>random() % n</code> introduces. Every option therefore has an exactly equal chance. The
        spinning display is pure showmanship: the winners are already decided before the animation starts, so
        the outcome can&apos;t be influenced by when you look away.
      </p>
    </div>

    <div>
      <h2>Winners, repeats, and removal</h2>
      <p>
        Set <strong>number of winners</strong> to draw several at once (it&apos;s clamped to your option count).
        With <em>no repeat winners</em> on — the default — picks are sampled <strong>without replacement</strong>,
        like drawing names from a hat; turn it off to allow the same option to win multiple times, like spinning a
        wheel repeatedly. Enable <em>remove winner after picking</em> to strike winners from the list as you go —
        handy for eliminating rounds or dealing turns to a whole group.
      </p>
    </div>

    <div>
      <h2>Tips for fair use</h2>
      <p>
        Each line is one option; blank lines and surrounding spaces are ignored, and you need{' '}
        <strong>at least two options</strong> to draw. Duplicate lines are treated as separate entries — so
        entering a name twice genuinely doubles its odds, which is a feature if you&apos;re running a weighted
        giveaway. For high-stakes draws, read the <em>history</em> list aloud as you go; it records every result
        newest-first until you clear it.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      决定不了去哪儿吃、谁先来,或者哪张票中奖?这个<strong>随机选择器</strong>接收一个选项列表(每行一个),用快速的滚动动画和令人满意的揭晓效果抽出一个或多个获奖者。它使用你浏览器的<strong>加密安全随机数生成器</strong>,完全离线运行,并保留历史抽奖记录,让抽奖可审计。
    </p>

    <div>
      <h2>抽奖是如何进行的</h2>
      <p>
        获奖者通过 <code>crypto.getRandomValues</code> 选取 —— 这与浏览器用于安全密钥的随机源相同 —— 并结合<strong>拒绝采样</strong>,消除简单的 <code>random() % n</code> 会带来的细微偏差。因此每个选项的中奖机会完全相等。滚动展示纯属表演:获奖者在动画开始前就已决定,所以结果不会因你何时移开视线而受影响。
      </p>
    </div>

    <div>
      <h2>获奖者、重复与移除</h2>
      <p>
        设置<strong>获奖人数</strong>可以一次抽取多个(会按你的选项数量截断)。默认开启<em>不重复获奖</em>时,采用<strong>不放回抽样</strong>,就像从帽子里抽名字;关闭它则允许同一选项多次中奖,就像反复转动转盘。开启<em>抽取后移除获奖者</em>,可以在抽取过程中把获奖者从列表中划掉 —— 适合淘汰赛或给整个小组发牌。
      </p>
    </div>

    <div>
      <h2>公平使用的提示</h2>
      <p>
        每行是一个选项;空行和首尾空格会被忽略,你需要<strong>至少两个选项</strong>才能抽奖。重复的行被视为独立的条目 —— 因此把一个名字输入两次确实会让它的概率翻倍,如果你在办加权抽奖,这是个有用的特性。对于重要的抽奖,请边抽边把<em>历史</em>列表念出来;它会按最新在前的顺序记录每个结果,直到你清空。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      ¿No decides dónde comer, quién va primero o qué billete se lleva el premio? Este{' '}
      <strong>selector de elección aleatoria</strong> toma una lista de opciones — una por línea — y saca uno o más
      ganadores con una rápida animación de giro y un revelado satisfactorio. Usa el{' '}
      <strong>generador aleatorio criptográficamente seguro</strong> de tu navegador, funciona completamente sin
      conexión y guarda un historial de sorteos pasados para que las rifas sean auditables.
    </p>

    <div>
      <h2>Cómo funciona el sorteo</h2>
      <p>
        Los ganadores se seleccionan con <code>crypto.getRandomValues</code> — la misma fuente de aleatoriedad que
        los navegadores usan para las claves de seguridad — combinada con <strong>muestreo por rechazo</strong>, que
        elimina el sutil sesgo que un <code>random() % n</code> ingenuo introduce. Por tanto, cada opción tiene
        exactamente las mismas posibilidades. La pantalla giratoria es puro espectáculo: los ganadores ya están
        decididos antes de que empiece la animación, así que el resultado no puede influirse por cuándo apartas la
        mirada.
      </p>
    </div>

    <div>
      <h2>Ganadores, repeticiones y eliminación</h2>
      <p>
        Ajusta el <strong>número de ganadores</strong> para sacar varios a la vez (se limita a tu número de
        opciones). Con <em>sin ganadores repetidos</em> activado — el valor por defecto — los sorteos se hacen{' '}
        <strong>sin reemplazo</strong>, como sacar nombres de un sombrero; desactívalo para permitir que la misma
        opción gane varias veces, como girar una ruleta repetidamente. Activa <em>eliminar ganador tras
        elegirlo</em> para tachar ganadores de la lista sobre la marcha — útil para rondas eliminatorias o repartir
        turnos a todo un grupo.
      </p>
    </div>

    <div>
      <h2>Consejos para un uso justo</h2>
      <p>
        Cada línea es una opción; las líneas en blanco y los espacios alrededor se ignoran, y necesitas{' '}
        <strong>al menos dos opciones</strong> para sortear. Las líneas duplicadas se tratan como entradas separadas
        — así que escribir un nombre dos veces duplica de verdad sus posibilidades, lo cual es útil si organizas un
        sorteo ponderado. Para sorteos importantes, lee la lista de <em>historial</em> en voz alta sobre la marcha;
        registra cada resultado del más nuevo al más antiguo hasta que la borres.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Kannst du dich nicht entscheiden, wo es Essen hingehen soll, wer zuerst dran ist oder welches Los den Preis
      bekommt? Dieser <strong>Zufallsauswahl-Picker</strong> nimmt eine Liste von Optionen — eine pro Zeile — und
      zieht einen oder mehrere Gewinner mit einer schnellen Dreh-Animation und einer befriedigenden Enthüllung. Er
      verwendet den <strong>kryptografisch sicheren Zufallsgenerator</strong> deines Browsers, läuft komplett
      offline und führt eine Historie vergangener Ziehungen, damit Verlosungen prüfbar bleiben.
    </p>

    <div>
      <h2>Wie die Ziehung funktioniert</h2>
      <p>
        Gewinner werden mit <code>crypto.getRandomValues</code> ausgewählt — derselben Zufallsquelle, die Browser
        für Sicherheitsschlüssel nutzen — kombiniert mit <strong>Rejection Sampling</strong>, das den subtilen Bias
        entfernt, den ein naives <code>random() % n</code> einführt. Jede Option hat deshalb exakt die gleiche
        Chance. Die Dreh-Anzeige ist reine Show: Die Gewinner stehen schon fest, bevor die Animation startet, also
        kann das Ergebnis nicht dadurch beeinflusst werden, wann du wegschaust.
      </p>
    </div>

    <div>
      <h2>Gewinner, Wiederholungen und Entfernung</h2>
      <p>
        Stelle die <strong>Anzahl der Gewinner</strong> ein, um mehrere auf einmal zu ziehen (sie wird auf deine
        Optionsanzahl begrenzt). Mit <em>keine Gewinner wiederholen</em> an — dem Standard — wird{' '}
        <strong>ohne Zurücklegen</strong> gezogen, wie Namen aus einem Hut ziehen; schalte es aus, um dieselbe
        Option mehrfach gewinnen zu lassen, wie ein wiederholt gedrehtes Rad. Aktiviere <em>Gewinner nach dem
        Ziehen entfernen</em>, um Gewinner unterwegs von der Liste zu streichen — praktisch für
        Ausscheidungsrunden oder das Austeilen an eine ganze Gruppe.
      </p>
    </div>

    <div>
      <h2>Tipps für faire Nutzung</h2>
      <p>
        Jede Zeile ist eine Option; Leerzeilen und umgebende Leerzeichen werden ignoriert, und du brauchst{' '}
        <strong>mindestens zwei Optionen</strong> zum Ziehen. Doppelte Zeilen werden als separate Einträge
        behandelt — also verdoppelt die doppelte Eingabe eines Namens dessen Chancen wirklich, was ein Feature
        ist, wenn du eine gewichtete Verlosung durchführst. Bei wichtigen Ziehungen lies die{' '}
        <em>Historie</em>-Liste beim Ziehen laut vor; sie notiert jedes Ergebnis neuestens zuerst, bis du sie
        löschst.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function RandomChoicePickerContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
