'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CaffeineCalculator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>The five-hour half-life</h2>
    <p>Caffeine clears exponentially: 200 mg at 3 PM leaves ~100 mg at 8 PM, ~50 mg by 1 AM. That bedtime residue is enough to delay deep sleep even if you fall asleep fine.</p>
    <h2>Individual variation is huge</h2>
    <p>The CYP1A2 gene splits people into fast and slow metabolizers. Oral contraceptives roughly double half-life; smoking halves it. Adjust expectations after noticing how late coffee hits you.</p>
    <h2>Common drink doses</h2>
    <p>Brewed coffee ≈95 mg per cup, espresso ≈63 mg per shot, black tea ≈47 mg, cola ≈34 mg, energy drinks range 80-300 mg, dark chocolate ≈24 mg per 40 g.</p>
    <h2>Safe cutoffs</h2>
    <p>Sleep researchers suggest stopping 8-10 hours before bed. For a 10:30 PM sleeper, that means no caffeine after lunch — earlier than most people assume.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>五小时半衰期</h2>
    <p>咖啡因按指数规律清除:下午 3 点摄入 200 mg,晚上 8 点还剩约 100 mg,凌晨 1 点约 50 mg。哪怕你能正常入睡,这点睡前残留也足以推迟深睡。</p>
    <h2>个体差异巨大</h2>
    <p>CYP1A2 基因把人分成快代谢与慢代谢两型。口服避孕药大约让半衰期翻倍,吸烟则大致减半。根据咖啡因对你起效的迟早来调整预期。</p>
    <h2>常见饮品剂量</h2>
    <p>现煮咖啡 ≈95 mg/杯,浓缩咖啡 ≈63 mg/份,红茶 ≈47 mg,可乐 ≈34 mg,能量饮料 80-300 mg,黑巧克力每 40 g ≈24 mg。</p>
    <h2>安全截止时间</h2>
    <p>睡眠研究者建议睡前 8-10 小时停止摄入。对 10:30 入睡的人,这意味着午饭后就不该再碰咖啡因——比多数人以为的更早。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>La semivida de cinco horas</h2>
    <p>La cafeína se elimina de forma exponencial: 200 mg a las 15:00 dejan ~100 mg a las 20:00 y ~50 mg hacia la 1:00. Ese residuo a la hora de dormir basta para retrasar el sueño profundo aunque te duermas sin problema.</p>
    <h2>La variación individual es enorme</h2>
    <p>El gen CYP1A2 divide a las personas en metabolizadores rápidos y lentos. Los anticonceptivos orales duplican aproximadamente la semivida; fumar la reduce a la mitad. Ajusta tus expectativas según lo tarde que te afecte el café.</p>
    <h2>Dosis de bebidas habituales</h2>
    <p>Café filtrado ≈95 mg por taza, espresso ≈63 mg por dosis, té negro ≈47 mg, refresco de cola ≈34 mg, bebidas energéticas entre 80 y 300 mg, chocolate negro ≈24 mg por 40 g.</p>
    <h2>Cortes seguros</h2>
    <p>Los investigadores del sueño sugieren dejar la cafeína 8-10 horas antes de acostarse. Para quien se duerme a las 22:30, eso significa nada de cafeína después de la comida — más pronto de lo que la mayoría imagina.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Die Fünf-Stunden-Halbwertszeit</h2>
    <p>Koffein wird exponentiell abgebaut: 200 mg um 15 Uhr hinterlassen um 20 Uhr noch ~100 mg, um 1 Uhr ~50 mg. Dieses Restniveau zur Bettzeit reicht aus, den Tiefschlaf zu verschieben, selbst wenn du problemlos einschläfst.</p>
    <h2>Die individuelle Streuung ist riesig</h2>
    <p>Das Gen CYP1A2 teilt Menschen in schnelle und langsame Verstoffwechsler. Die Antibabypille verdoppelt die Halbwertszeit ungefähr, Rauchen halbiert sie. Passe deine Erwartungen daran an, wie spät Kaffee dich trifft.</p>
    <h2>Übliche Getränkedosen</h2>
    <p>Filterkaffee ≈95 mg pro Tasse, Espresso ≈63 mg pro Shot, Schwarztee ≈47 mg, Cola ≈34 mg, Energydrinks 80-300 mg, dunkle Schokolade ≈24 mg pro 40 g.</p>
    <h2>Sichere Grenzen</h2>
    <p>Schlafforscher raten, 8-10 Stunden vor dem Schlafengehen aufzuhören. Wer um 22:30 ins Bett geht, sollte nach dem Mittagessen kein Koffein mehr zu sich nehmen — früher, als die meisten denken.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CaffeineCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
