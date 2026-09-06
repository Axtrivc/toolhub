/**
 * fire-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts)。
 *
 * 覆盖:faqs(可见)+ useCases(Common uses)+ formula(公式区)。b00 新建,无 ui 块。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'FIRE number = annual spending ÷ SWR · balance(t) = P(1+r)ᵗ + S × ((1+r)ᵗ − 1)/r'

export const fireCalculatorL10n: ToolL10n = {
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    useCases: [
      '算 FIRE 数字:年支出 40 万按 4% 提取率需 1000 万;改按 3.5% 变成约 1143 万,保守的代价立现',
      '测储蓄率杠杆:从 15% 提到 40%,达标时间常从 40 多年压到 20 年以内,比换任何回报假设都有效',
      '定目标退休年:现有 80 万、每年定存 12 万、实际回报 5%,直接读出跨线年份和剩余月数',
      '30 多岁退休场景:提取率从 4% 降到 3.25%,目标从 25 倍年支出抬到约 31 倍,给 40-50 年期留余量',
    ],
    faqs: [
      {
        q: '我的 FIRE 数字怎么算?',
        a: '年支出 ÷ 安全提取率(SWR)。经典 4% 即 25 倍年支出:年花 40 万需要 1000 万;精简 FIRE(年花 28 万)目标约 700 万;想过年花 100 万的生活则要 2500 万。',
      },
      {
        q: '提取率该用多少?',
        a: '4% 出自 Trinity 研究,按 30 年退休期设计。30-40 岁退休意味着 40-50 年的提取期,多数 FIRE 规划者改用 3.25%-3.5%(约 29-31 倍支出)来对冲收益序列风险。',
      },
      {
        q: '为什么储蓄率比收益率更重要?',
        a: '多存是一根两头使劲的杠杆:组合长得更快,同时所需的 FIRE 数字变小。储蓄率从 10% 提到 50%,大约把 50 年的路压到 15-17 年——任何收益率假设的调整都比不了这一根杠杆。',
      },
      {
        q: '通胀和养老金怎么处理?',
        a: '建议输入实际回报(名义回报减通胀),这样 FIRE 数字和年支出都是今天的购买力,例如名义 8%、通胀 3% 就按 5% 算。若退休后有大额稳定现金流(养老金、房租),可先从年支出里扣除,目标会成比例下降。',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: '安全提取率(经典 4%)取倒数即 25 倍年支出的目标。现有资产 P 按实际回报 r 复利、每年追加 S,工具求出余额跨过 FIRE 线的年份 t,并按储蓄率 +10 个百分点重算一次,展示压缩效应。',
    },
  },

  // ──────────────────────────── Español ────────────────────────────
  es: {
    useCases: [
      'calcular el número FIRE: 40.000 € de gasto anual al 4 % exigen un millón; al 3,5 % suben a unos 1.143.000 €',
      'medir la palanca del ahorro: subir del 15 % al 40 % de tasa suele comprimir 40+ años de viaje a menos de 20',
      'fijar el año objetivo: 80.000 € en cartera, 12.000 € anuales y 5 % real — leer el año en que cruzas la línea',
      'jubilarse con 35: bajar la SWR del 4 % al 3,25 % lleva el objetivo de 25× a unos 31× el gasto, margen para 40-50 años',
    ],
    faqs: [
      {
        q: '¿Cuál es mi número FIRE?',
        a: 'Gasto anual dividido entre tu tasa de retiro segura. Con la clásica del 4 % equivale a 25× el gasto: 40.000 € al año piden un millón de euros; un FIRE lean de 28.000 € apunta a ~700.000 €, y un estándar de vida de 100.000 € necesita 2,5 millones.',
      },
      {
        q: '¿Qué tasa de retiro debo usar?',
        a: 'El 4 % viene del estudio Trinity, diseñado para jubilaciones de 30 años. Jubilarse con 30-40 años implica horizontes de 40-50 años, así que muchos planificadores usan 3,25-3,5 % (unos 29-31× el gasto) para amortiguar el riesgo de secuencia de rendimientos.',
      },
      {
        q: '¿Por qué importa más la tasa de ahorro que la rentabilidad?',
        a: 'Ahorrar más ataca el problema por los dos lados: la cartera crece más rápido y el número FIRE necesario se encoge. Pasar del 10 % al 50 % de tasa de ahorro comprime un viaje de ~50 años a unos 15-17 — ningún ajuste de rentabilidad iguala esa palanca.',
      },
      {
        q: '¿Cómo entran la inflación y la pensión pública?',
        a: 'La calculadora trabaja con rentabilidad real (nominal menos inflación), así que el número queda en poder adquisitivo de hoy: 8 % nominal menos 3 % de inflación = 5 %. Si esperas pensión pública, réstala del gasto anual antes de dividir entre la SWR y el objetivo baja en la misma proporción.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'El inverso de la tasa de retiro segura (4 % clásica) da un objetivo de 25× el gasto anual. La cartera lo alcanza tras t años componiendo el saldo P a rentabilidad real r con aportaciones S; la herramienta resuelve el año de cruce y lo recalcula con +10 puntos de tasa de ahorro para mostrar el efecto compresor.',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    useCases: [
      'die FIRE-Zahl ermitteln: 40.000 € Jahresbedarf bei 4 % Entnahme erfordern eine Million; bei 3,5 % rund 1.143.000 €',
      'die Sparquote als Hebel testen: von 15 % auf 40 % staucht die Reise von 40+ Jahren meist auf unter 20',
      'das Zieljahr festlegen: 80.000 € Bestand, 12.000 € Jahresrate, 5 % Realrendite — das Übergangsjahr direkt ablesen',
      'Ruhestand mit 35: Entnahmesatz von 4 % auf 3,25 % senken, Ziel von 25× auf gut 30× Jahresbedarf — Puffer für 40-50 Jahre',
    ],
    faqs: [
      {
        q: 'Wie hoch ist meine FIRE-Zahl?',
        a: 'Jahresbedarf geteilt durch die Safe-Withdrawal-Rate. Beim klassischen 4 % sind das 25× der Ausgaben: 40.000 € pro Jahr brauchen eine Million; Lean FIRE (28.000 €/Jahr) zielt auf ~700.000 €, ein 100.000-€-Lebensstil auf 2,5 Millionen.',
      },
      {
        q: 'Welchen Entnahmesatz sollte ich nehmen?',
        a: '4 % stammt aus der Trinity-Studie und zielt auf 30 Jahre Ruhestand. Wer mit Anfang 30-40 aufhört zu arbeiten, hat 40-50 Jahre Horizont — viele FIRE-Planer rechnen daher mit 3,25-3,5 % (gut 29-31× Ausgaben) gegen das Sequenzrisiko.',
      },
      {
        q: 'Warum zählt die Sparquote mehr als die Rendite?',
        a: 'Mehr Sparen greift von zwei Seiten an: Das Portfolio wächst schneller und die nötige FIRE-Zahl schrumpft. Von 10 % auf 50 % Sparquote staucht eine ~50-Jahre-Reise auf etwa 15-17 Jahre — keine Renditeannahme kommt an diesen Hebel heran.',
      },
      {
        q: 'Wie gehen Inflation und gesetzliche Rente ein?',
        a: 'Der Rechner arbeitet mit Realrendite (nominal minus Inflation), die FIRE-Zahl bleibt in heutiger Kaufkraft: 8 % nominal minus 3 % Inflation = 5 %. Die gesetzliche Rente kannst du vom Jahresbedarf abziehen — bei 1.500 € monatlich sinkt der zu finanzierende Rest um 18.000 € pro Jahr, die Zielsumme entsprechend.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Der Kehrwert der Safe-Withdrawal-Rate (klassisch 4 %) ergibt das Ziel von 25× Jahresbedarf. Das Portfolio erreicht es nach t Jahren aus Bestand P, Realrendite r und Jahresrate S; das Tool löst das Überschreitungsjahr auf und rechnet mit +10 Punkten Sparquote erneut, um die Kompression zu zeigen.',
    },
  },
}
