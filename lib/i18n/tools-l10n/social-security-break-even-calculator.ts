/**
 * social-security-break-even-calculator 本地化 bundle —— zh / es / de(B4 家庭与人生大事批)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const SocialSecurityBreakEvenCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['比较 62 岁、完全退休年龄与 70 岁三档申领的月额', '找出延迟申领的累计回补年龄', '看 80/85 岁时三种策略的累计总额', '用真实 PIA 而非估算值做申领决策'],
    faqs: [
      { q: '62 岁申领会打折多少?', a: '取决于你的完全退休年龄(FRA):1960 年及以后出生者 FRA 为 67 岁,62 岁申领打 7 折;FRA 为 66 岁的人则打 7.5 折。规则是提前 36 个月每月扣 5/9 个百分点,再往前的每个月扣 5/12 个百分点。' },
      { q: '延迟到 70 岁奖励多少?', a: '1943 年及以后出生者每延迟一个月加 2/3 个百分点,即每年 8%。FRA 67 岁的人到 70 岁可拿 PIA 的 124%;FRA 66 岁的人最高 132%。70 岁之后没有进一步的延迟奖励。' },
      { q: '回补年龄(break-even)是什么意思?', a: '早申领每月钱少但先拿;晚申领每月钱多但晚拿。回补年龄是晚申领者的累计总额追上早申领者的时点——活得比它久,延迟就"值";活不到,早领就更划算。本工具按月精确求解两两回补点。' },
      { q: '这个计算有哪些简化?', a: '名义美元口径,不含 COLA 生活费调整、税、投资早领款项的收益,也不考虑配偶/遗属福利——这些都会移动真实的回补点。它回答的是最核心的问题:按给定的月额,累计曲线在哪里交叉。' },
    ],
    ui: {
      'chartTitle': '累计领取总额(62-90 岁)',
      'line.at62': '62 岁开始领',
      'line.atFRA': 'FRA 开始领',
      'line.at70': '70 岁开始领',
      'in.birthYear': '出生年份',
      'in.pia': '完全退休年龄的月额 (PIA)',
      'out.fra': '你的完全退休年龄 (FRA)',
      'out.benefit62': '62 岁申领月额',
      'out.benefitFRA': 'FRA 申领月额',
      'out.benefit70': '70 岁申领月额',
      'out.breakEven1': 'FRA 追平 62 岁的年龄',
      'out.breakEven2': '70 岁追平 FRA 的年龄',
      'outSub.benefit62': '提前申领折扣后',
      'outSub.benefit70': '含延迟奖励',
      'note': '🎂 名义口径、不含 COLA 与税。提前申领折扣:36 个月内每月 5/9%,超出部分每月 5/12%;延迟奖励(1943 后出生)每月 2/3%。健康预期寿命明显超过回补年龄时,延迟申领通常占优;反之早领更稳。',
      'errInvalid': '请输入 1943-2010 之间的出生年份与正的 PIA',
    },
  },
  es: {
    useCases: ['comparar la prestación mensual al reclamar a los 62, la FRA o los 70', 'hallar la edad de equilibrio del retraso', 'ver los totales acumulados a los 80 y 85 años', 'decidir con tu PIA real en vez de estimaciones'],
    faqs: [
      { q: '¿Cuánto se pierde reclamando a los 62?', a: 'Depende de tu edad plena de jubilación (FRA): nacidos en 1960 o después tienen FRA a los 67 y un 70% al reclamar a los 62; con FRA de 66 es un 75%. La regla: 5/9 de punto por mes durante los primeros 36 meses y 5/12 por cada mes adicional.' },
      { q: '¿Cuánto premia esperar hasta los 70?', a: 'Nacidos en 1943 o después suman 2/3 de punto por mes de retraso, un 8% anual. Con FRA a los 67 llegas al 124% del PIA a los 70; con FRA de 66, hasta el 132%. Pasados los 70 no hay premio adicional.' },
      { q: '¿Qué significa la edad de equilibrio (break-even)?', a: 'Reclamar pronto paga menos pero antes; retrasar paga más pero después. La edad de equilibrio es cuando el total acumulado del que retrasa alcanza al que reclamó pronto — vive más que esa edad y retrasar «valió la pena»; muere antes, y reclamar temprano fue mejor. La herramienta resuelve el cruce mes a mes.' },
      { q: '¿Qué simplificaciones hace?', a: 'Cifras nominales: sin ajuste por COLA, sin impuestos, sin invertir lo cobrado pronto, y sin prestaciones de cónyuge o supervivencia — todo eso mueve el punto real. Responde a lo esencial: con estas cuotas mensuales, ¿dónde se cruzan las curvas acumuladas?' },
    ],
    ui: {
      'chartTitle': 'Total acumulado (62-90 años)',
      'line.at62': 'Cobrando desde los 62',
      'line.atFRA': 'Cobrando desde la FRA',
      'line.at70': 'Cobrando desde los 70',
      'in.birthYear': 'Año de nacimiento',
      'in.pia': 'Prestación mensual en la FRA (PIA)',
      'out.fra': 'Tu edad plena de jubilación (FRA)',
      'out.benefit62': 'Mensual si reclamas a los 62',
      'out.benefitFRA': 'Mensual en la FRA',
      'out.benefit70': 'Mensual si reclamas a los 70',
      'out.breakEven1': 'La FRA alcanza al 62 a los',
      'out.breakEven2': 'Los 70 alcanzan a la FRA a los',
      'outSub.benefit62': 'con descuento por adelanto',
      'outSub.benefit70': 'con créditos por retraso',
      'note': '🎂 Cifras nominales, sin COLA ni impuestos. Descuento por adelanto: 5/9% mensual los primeros 36 meses, 5/12% después; crédito por retraso (nacidos desde 1943): 2/3% mensual. Si tu esperanza de vida supera claramente la edad de equilibrio, retrasar suele ganar; si no, reclamar pronto es más seguro.',
      'errInvalid': 'Introduce un año de nacimiento entre 1943 y 2010 y un PIA positivo',
    },
  },
  de: {
    useCases: ['Monatsrente bei Beantragung mit 62, zur FRA oder mit 70 vergleichen', 'das Einhol-Alter des verzögerten Beginns finden', 'die kumulierten Summen mit 80 und 85 sehen', 'mit der echten PIA statt Schätzwerten entscheiden'],
    faqs: [
      { q: 'Wie viel kostet der Beginn mit 62?', a: 'Es hängt von deinem Full Retirement Age (FRA) ab: Ab 1960 Geborene haben FRA 67 und erhalten mit 62 nur 70%; bei FRA 66 sind es 75%. Regel: 5/9 Prozentpunkt pro Monat der ersten 36 Monate, danach 5/12 pro Monat.' },
      { q: 'Wie viel bringt Warten bis 70?', a: 'Ab Geburtsjahr 1943 gibt es 2/3 Prozentpunkt pro verzögertem Monat — 8% pro Jahr. Bei FRA 67 erreichst du mit 70 die 124% der PIA; bei FRA 66 bis zu 132%. Nach 70 gibt es keinen weiteren Zuschlag.' },
      { q: 'Was bedeutet das Break-even-Alter?', a: 'Früher Beginn zahlt weniger, aber länger; später zahlt mehr, aber später. Das Break-even-Alter ist der Punkt, an dem die kumulierte Summe des Späteren den Frühen einholt — wer darüber hinaus lebt, für den lohnte das Warten; wer davor stirbt, für den war der frühe Beginn besser. Der Rechner löst die Kreuzung monatsgenau.' },
      { q: 'Welche Vereinfachungen gelten?', a: 'Nominale Beträge: ohne COLA, ohne Steuern, ohne Anlage der früher bezogenen Gelder und ohne Partner-/Hinterbliebenenrenten — all das verschiebt den echten Punkt. Beantwortet wird das Kernproblem: Bei diesen Monatsbeträgen, wo schneiden sich die Kumulativkurven?' },
    ],
    ui: {
      'chartTitle': 'Kumulierte Bezüge (62-90 Jahre)',
      'line.at62': 'Bezug ab 62',
      'line.atFRA': 'Bezug ab FRA',
      'line.at70': 'Bezug ab 70',
      'in.birthYear': 'Geburtsjahr',
      'in.pia': 'Monatsbetrag bei FRA (PIA)',
      'out.fra': 'Dein Full Retirement Age (FRA)',
      'out.benefit62': 'Monatlich ab 62',
      'out.benefitFRA': 'Monatlich bei FRA',
      'out.benefit70': 'Monatlich ab 70',
      'out.breakEven1': 'FRA holt 62 ein mit',
      'out.breakEven2': '70 holt FRA ein mit',
      'outSub.benefit62': 'nach Frühbezugabschlag',
      'outSub.benefit70': 'mit Zuschlägen',
      'note': '🎂 Nominale Werte, ohne COLA und Steuern. Frühabschlag: 5/9% pro Monat der ersten 36 Monate, danach 5/12%; Aufschub-Zuschlag (ab 1943): 2/3% pro Monat. Liegt die Lebenserwartung klar über dem Break-even, gewinnt meist der spätere Beginn — sonst ist früher sicherer.',
      'errInvalid': 'Gib ein Geburtsjahr zwischen 1943 und 2010 und eine positive PIA ein',
    },
  },
}
