'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Common Speed Units</h2>
    <p>
      Speed is measured differently depending on context and country. <strong>km/h</strong> and{' '}
      <strong>mph</strong> dominate everyday driving, <strong>m/s</strong> is standard in physics
      and engineering, <strong>knots</strong> are used in aviation and maritime, and{' '}
      <strong>ft/s</strong> appears in some US engineering contexts.
    </p>

    <h2>Conversion Factors</h2>
    <ul>
      <li><strong>1 km/h</strong> = 0.621371 mph = 0.277778 m/s</li>
      <li><strong>1 mph</strong> = 1.60934 km/h = 0.44704 m/s</li>
      <li><strong>1 m/s</strong> = 3.6 km/h = 2.23694 mph</li>
      <li><strong>1 knot</strong> = 1.15078 mph = 1.852 km/h</li>
      <li><strong>1 ft/s</strong> = 0.681818 mph = 0.3048 m/s</li>
    </ul>

    <h2>When You&apos;ll Need Speed Conversion</h2>
    <ul>
      <li><strong>Driving abroad:</strong> Speed limits in km/h (most countries) vs. mph (US, UK)</li>
      <li><strong>Running &amp; cycling:</strong> Pace often in min/km or min/mile</li>
      <li><strong>Aviation:</strong> Airspeed measured in knots</li>
      <li><strong>Weather:</strong> Wind speed in m/s, km/h, mph, or knots depending on country</li>
      <li><strong>Physics problems:</strong> Almost always in m/s</li>
    </ul>

    <h2>Quick Mental Conversions</h2>
    <ul>
      <li><strong>km/h to mph:</strong> multiply by 0.6, or take 60% (100 km/h ≈ 62 mph)</li>
      <li><strong>mph to km/h:</strong> multiply by 1.6 (60 mph ≈ 97 km/h)</li>
      <li><strong>m/s to km/h:</strong> multiply by 3.6 (10 m/s = 36 km/h)</li>
      <li><strong>knots to mph:</strong> add 15% (100 knots ≈ 115 mph)</li>
    </ul>

    <h2>Reference Speeds</h2>
    <ul>
      <li><strong>Walking:</strong> ~5 km/h (3 mph)</li>
      <li><strong>Marathon runner (elite):</strong> ~20 km/h (12.4 mph)</li>
      <li><strong>Highway speed limit:</strong> 100-130 km/h (60-80 mph)</li>
      <li><strong>Commercial airliner (cruise):</strong> ~900 km/h (560 mph, ~486 knots)</li>
      <li><strong>Speed of sound:</strong> ~1225 km/h (761 mph, Mach 1)</li>
      <li><strong>Speed of light:</strong> ~1.08 billion km/h</li>
    </ul>

    <h2>What Is a Knot?</h2>
    <p>
      A <strong>knot</strong> is one nautical mile per hour, where a nautical mile is based on the
      Earth&apos;s circumference (one minute of latitude). Because nautical miles relate directly
      to navigation, knots remain the standard in aviation and maritime use worldwide, even in
      countries that use metric for everything else.
    </p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>常用速度单位</h2>
    <p>
      速度的计量因场景和国家而异。<strong>km/h</strong> 和 <strong>mph</strong> 在日常驾驶中占主导,<strong>m/s</strong> 是物理和工程领域的标准,<strong>knots</strong> 用于航空和航海,<strong>ft/s</strong> 出现在一些美国的工程场景中。
    </p>

    <h2>换算系数</h2>
    <ul>
      <li><strong>1 km/h</strong> = 0.621371 mph = 0.277778 m/s</li>
      <li><strong>1 mph</strong> = 1.60934 km/h = 0.44704 m/s</li>
      <li><strong>1 m/s</strong> = 3.6 km/h = 2.23694 mph</li>
      <li><strong>1 knot</strong> = 1.15078 mph = 1.852 km/h</li>
      <li><strong>1 ft/s</strong> = 0.681818 mph = 0.3048 m/s</li>
    </ul>

    <h2>何时需要速度换算</h2>
    <ul>
      <li><strong>在境外驾车:</strong> 限速多用 km/h(大多数国家)或 mph(美国、英国)</li>
      <li><strong>跑步和骑行:</strong> 配速常用 min/km 或 min/mile</li>
      <li><strong>航空:</strong> 空速以 knots 为单位</li>
      <li><strong>天气:</strong> 风速视国家而定为 m/s、km/h、mph 或 knots</li>
      <li><strong>物理题:</strong> 几乎总是用 m/s</li>
    </ul>

    <h2>快速心算换算</h2>
    <ul>
      <li><strong>km/h 转 mph:</strong> 乘以 0.6,或取 60%(100 km/h ≈ 62 mph)</li>
      <li><strong>mph 转 km/h:</strong> 乘以 1.6(60 mph ≈ 97 km/h)</li>
      <li><strong>m/s 转 km/h:</strong> 乘以 3.6(10 m/s = 36 km/h)</li>
      <li><strong>knots 转 mph:</strong> 加 15%(100 knots ≈ 115 mph)</li>
    </ul>

    <h2>参考速度</h2>
    <ul>
      <li><strong>步行:</strong> ~5 km/h(3 mph)</li>
      <li><strong>马拉松选手(精英):</strong> ~20 km/h(12.4 mph)</li>
      <li><strong>高速公路限速:</strong> 100-130 km/h(60-80 mph)</li>
      <li><strong>商用客机(巡航):</strong> ~900 km/h(560 mph,~486 knots)</li>
      <li><strong>声速:</strong> ~1225 km/h(761 mph,Mach 1)</li>
      <li><strong>光速:</strong> ~10.8 亿 km/h</li>
    </ul>

    <h2>什么是 knot(节)?</h2>
    <p>
      一个 <strong>knot</strong> 等于每小时一海里,而海里基于地球周长(一纬度分)。由于海里与导航直接相关,即使其他国家在所有方面都使用公制,knots 在全球航空和航海中仍是标准。
    </p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Unidades de velocidad comunes</h2>
    <p>
      La velocidad se mide de forma distinta según el contexto y el país. <strong>km/h</strong> y{' '}
      <strong>mph</strong> dominan la conducción cotidiana, <strong>m/s</strong> es el estándar en
      física e ingeniería, <strong>knots</strong> se usan en aviación y marítima, y{' '}
      <strong>ft/s</strong> aparece en algunos contextos de ingeniería estadounidense.
    </p>

    <h2>Factores de conversión</h2>
    <ul>
      <li><strong>1 km/h</strong> = 0,621371 mph = 0,277778 m/s</li>
      <li><strong>1 mph</strong> = 1,60934 km/h = 0,44704 m/s</li>
      <li><strong>1 m/s</strong> = 3,6 km/h = 2,23694 mph</li>
      <li><strong>1 knot</strong> = 1,15078 mph = 1,852 km/h</li>
      <li><strong>1 ft/s</strong> = 0,681818 mph = 0,3048 m/s</li>
    </ul>

    <h2>Cuándo necesitarás conversión de velocidad</h2>
    <ul>
      <li><strong>Conducir en el extranjero:</strong> Límites de velocidad en km/h (la mayoría de los países) frente a mph (EE. UU., Reino Unido)</li>
      <li><strong>Correr y ciclismo:</strong> El ritmo a menudo en min/km o min/milla</li>
      <li><strong>Aviación:</strong> Velocidad del aire medida en knots</li>
      <li><strong>Clima:</strong> Velocidad del viento en m/s, km/h, mph o knots según el país</li>
      <li><strong>Problemas de física:</strong> Casi siempre en m/s</li>
    </ul>

    <h2>Conversiones mentales rápidas</h2>
    <ul>
      <li><strong>De km/h a mph:</strong> multiplica por 0,6, o toma el 60 % (100 km/h ≈ 62 mph)</li>
      <li><strong>De mph a km/h:</strong> multiplica por 1,6 (60 mph ≈ 97 km/h)</li>
      <li><strong>De m/s a km/h:</strong> multiplica por 3,6 (10 m/s = 36 km/h)</li>
      <li><strong>De knots a mph:</strong> suma el 15 % (100 knots ≈ 115 mph)</li>
    </ul>

    <h2>Velocidades de referencia</h2>
    <ul>
      <li><strong>Caminar:</strong> ~5 km/h (3 mph)</li>
      <li><strong>Corredor de maratón (élite):</strong> ~20 km/h (12,4 mph)</li>
      <li><strong>Límite de velocidad en autopista:</strong> 100-130 km/h (60-80 mph)</li>
      <li><strong>Avión comercial (crucero):</strong> ~900 km/h (560 mph, ~486 knots)</li>
      <li><strong>Velocidad del sonido:</strong> ~1225 km/h (761 mph, Mach 1)</li>
      <li><strong>Velocidad de la luz:</strong> ~1.080 millones de km/h</li>
    </ul>

    <h2>¿Qué es un knot?</h2>
    <p>
      Un <strong>knot</strong> es una milla náutica por hora, donde una milla náutica se basa en la
      circunferencia de la Tierra (un minuto de latitud). Como las millas náuticas se relacionan
      directamente con la navegación, los knots siguen siendo el estándar en el uso aeronáutico y
      marítimo en todo el mundo, incluso en países que usan el sistema métrico para todo lo demás.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Häufige Geschwindigkeitseinheiten</h2>
    <p>
      Geschwindigkeit wird je nach Kontext und Land unterschiedlich gemessen. <strong>km/h</strong>{' '}
      und <strong>mph</strong> dominieren das alltägliche Fahren, <strong>m/s</strong> ist der
      Standard in Physik und Ingenieurwesen, <strong>knots</strong> werden in der Luft- und
      Schifffahrt verwendet, und <strong>ft/s</strong> taucht in einigen US-amerikanischen
      Ingenieurkontexten auf.
    </p>

    <h2>Umrechnungsfaktoren</h2>
    <ul>
      <li><strong>1 km/h</strong> = 0,621371 mph = 0,277778 m/s</li>
      <li><strong>1 mph</strong> = 1,60934 km/h = 0,44704 m/s</li>
      <li><strong>1 m/s</strong> = 3,6 km/h = 2,23694 mph</li>
      <li><strong>1 knot</strong> = 1,15078 mph = 1,852 km/h</li>
      <li><strong>1 ft/s</strong> = 0,681818 mph = 0,3048 m/s</li>
    </ul>

    <h2>Wann du Geschwindigkeitsumrechnung brauchst</h2>
    <ul>
      <li><strong>Im Ausland fahren:</strong> Tempolimits in km/h (die meisten Länder) vs. mph (USA, UK)</li>
      <li><strong>Laufen &amp; Radfahren:</strong> Tempo oft in min/km oder min/mile</li>
      <li><strong>Luftfahrt:</strong> Fluggeschwindigkeit in knots</li>
      <li><strong>Wetter:</strong> Windgeschwindigkeit in m/s, km/h, mph oder knots je nach Land</li>
      <li><strong>Physikaufgaben:</strong> Fast immer in m/s</li>
    </ul>

    <h2>Schnelle Kopfrechnung</h2>
    <ul>
      <li><strong>km/h nach mph:</strong> mit 0,6 multiplizieren oder 60 % nehmen (100 km/h ≈ 62 mph)</li>
      <li><strong>mph nach km/h:</strong> mit 1,6 multiplizieren (60 mph ≈ 97 km/h)</li>
      <li><strong>m/s nach km/h:</strong> mit 3,6 multiplizieren (10 m/s = 36 km/h)</li>
      <li><strong>knots nach mph:</strong> 15 % addieren (100 knots ≈ 115 mph)</li>
    </ul>

    <h2>Referenzgeschwindigkeiten</h2>
    <ul>
      <li><strong>Gehen:</strong> ~5 km/h (3 mph)</li>
      <li><strong>Marathonläufer (Elite):</strong> ~20 km/h (12,4 mph)</li>
      <li><strong>Tempolimit auf der Autobahn:</strong> 100-130 km/h (60-80 mph)</li>
      <li><strong>Verkehrsflugzeug (Reiseflug):</strong> ~900 km/h (560 mph, ~486 knots)</li>
      <li><strong>Schallgeschwindigkeit:</strong> ~1225 km/h (761 mph, Mach 1)</li>
      <li><strong>Lichtgeschwindigkeit:</strong> ~1,08 Milliarden km/h</li>
    </ul>

    <h2>Was ist ein knot?</h2>
    <p>
      Ein <strong>knot</strong> ist eine Seemeile pro Stunde, wobei eine Seemeile auf dem Erdumfang
      basiert (eine Bogenminute des Breitengrads). Da Seemeilen direkt mit der Navigation
      zusammenhängen, bleiben knots weltweit der Standard in der Luft- und Schifffahrt, selbst in
      Ländern, die sonst für alles das metrische System verwenden.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function SpeedConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
