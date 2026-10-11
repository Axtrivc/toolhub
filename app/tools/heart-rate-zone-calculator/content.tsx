'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * HeartRateZoneCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why resting heart rate matters</h2>
    <p>Zones from raw max-heart-rate percentages treat a trained athlete and a couch-bound beginner identically. The Karvonen method uses heart-rate reserve (max − resting), which widens zones proportionally to fitness.</p>
    <h2>Measuring resting HR properly</h2>
    <p>Measure for a full minute immediately after waking, before coffee or getting up, over several days. Well-trained endurance athletes commonly sit at 40-50 bpm; average adults 60-80.</p>
    <h2>The 220-minus-age caveat</h2>
    <p>Max-HR formulas carry ±10-12 bpm individual error. If you have done a hard race or lab test and seen a higher number, use that as your true max instead.</p>
    <h2>Training in Zone 2</h2>
    <p>Zone 2 (about 60-70% of reserve) builds mitochondrial density and fat oxidation. Most recreational runners run too hard on easy days — nasal-breathing pace usually lands in Z2.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>为什么静息心率很重要</h2>
    <p>直接按最大心率百分比划区间,会把训练有素的运动员和久坐新手一视同仁。Karvonen 法使用心率储备(最大 − 静息),区间随健康水平按比例拉开。</p>
    <h2>如何正确测量静息心率</h2>
    <p>醒来后立即测满一分钟,要在喝咖啡、下床之前,连续测几天取平均。训练良好的耐力运动员普遍在 40-50 bpm,普通成人在 60-80。</p>
    <h2>"220 减年龄"的局限</h2>
    <p>最大心率公式自带约 ±10-12 bpm 的个体误差。如果你在一场高强度比赛或实验室测试中见过更高的数值,就用那个当你的真实最大心率。</p>
    <h2>在 Zone 2 里训练</h2>
    <p>Zone 2(约储备的 60-70%)提升线粒体密度与脂肪氧化。多数业余跑者轻松日跑得太猛——用鼻子呼吸的配速通常正好落在 Z2。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué importa la frecuencia en reposo</h2>
    <p>Las zonas basadas en porcentajes del máximo tratan igual a un atleta entrenado y a un principiante sedentario. El método Karvonen usa la reserva de frecuencia cardíaca (máx − reposo), que ensancha las zonas en proporción a la forma física.</p>
    <h2>Cómo medir bien el pulso en reposo</h2>
    <p>Mide un minuto completo justo al despertar, antes del café o de levantarte, durante varios días. Los deportistas de resistencia bien entrenados suelen estar en 40-50 lpm; los adultos medios, en 60-80.</p>
    <h2>La letra pequeña del 220 menos la edad</h2>
    <p>Las fórmulas de FC máxima conllevan un error individual de ±10-12 lpm. Si en una carrera dura o una prueba de laboratorio has visto un número mayor, usa ese como tu máximo real.</p>
    <h2>Entrenar en Zona 2</h2>
    <p>La Zona 2 (en torno al 60-70 % de la reserva) construye densidad mitocondrial y oxidación de grasas. La mayoría de corredores aficionados corren demasiado fuerte los días suaves — el ritmo de respiración nasal suele caer en Z2.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum der Ruhepuls zählt</h2>
    <p>Zonen, die nur auf Prozenten des Maximalpulses beruhen, behandeln einen trainierten Athleten und einen unsportlichen Anfänger identisch. Die Karvonen-Methode nutzt die Herzfrequenzreserve (Max − Ruhe), die die Zonen proportional zur Fitness spreizt.</p>
    <h2>Ruhepuls richtig messen</h2>
    <p>Miss direkt nach dem Aufwachen eine volle Minute, vor Kaffee und Aufstehen, über mehrere Tage. Gut trainierte Ausdauersportler liegen häufig bei 40-50 bpm, Durchschnittserwachsene bei 60-80.</p>
    <h2>Der Haken an 220 minus Alter</h2>
    <p>Maximalpuls-Formeln haben einen individuellen Fehler von etwa ±10-12 bpm. Wenn du in einem harten Rennen oder Labortest einen höheren Wert gesehen hast, nimm den als deine echte Obergrenze.</p>
    <h2>Training in Zone 2</h2>
    <p>Zone 2 (etwa 60-70 % der Reserve) baut Mitochondriendichte und Fettoxidation auf. Die meisten Hobbyläufer laufen an leichten Tagen zu hart — das Nasenatmungstempo landet meist in Z2.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function HeartRateZoneCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
