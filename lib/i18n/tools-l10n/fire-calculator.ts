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



  // ──────────────────────────── Español ────────────────────────────
  es: {
    ui: {
      'in.annualSpending': 'Gasto anual en la jubilación',
      'in.currentSavings': 'Patrimonio / ahorro actual',
      'in.annualSavings': 'Ahorro anual añadido',
      'in.realReturn': 'Rendimiento real (tras inflación)',
      'in.swr': 'Tasa segura de retirada (SWR)',
      'out.fireNumber': 'Tu cifra FIRE objetivo',
      'outSub.fireNumber': 'Gasto anual ÷ SWR',
      'out.years': 'Años para la independencia financiera',
      'out.retireYear': 'Año estimado de jubilación',
      'out.savingsRate': 'Tasa de ahorro actual',
      'outSub.savingsRate': 'Ahorro ÷ (ahorro + gasto)',
      'out.boost10': 'Subir un 10% el ahorro adelanta el retiro en',
      'preset.0': 'Lean FIRE (28k $/año)',
      'preset.1': 'FIRE estándar (50k $/año)',
      'preset.2': 'Plan agresivo (tasa 60%)',
      'errInvalid': 'Introduce gastos positivos y una tasa de retirada superior al 0%',
      'errUnreachable': 'Inalcanzable en 80 años: ahorra más o gasta menos',
      'yearsWord': 'años',
      'chartTitle': 'Crecimiento patrimonial vs Objetivo FIRE',
      'line.portfolio': 'Valor de la cartera',
      'line.target': 'Objetivo FIRE',
      'note': '💡 La regla del 4% fija la meta FIRE en 25 veces el gasto anual. Los rendimientos son reales (descontando la inflación), así que todas las cifras están en dinero de hoy: no hay que ajustar por inflación.',
    },
    useCases: [
      'calcular el número FIRE: 40.000 $ de gasto anual al 4 % exigen un millón; al 3,5 % sube a unos 1.143.000 $',
      'medir la palanca del ahorro: subir del 15 % al 40 % de tasa suele comprimir 40+ años de viaje a menos de 20',
      'fijar el año objetivo: 80.000 $ en cartera, 12.000 $ anuales y 5 % real — leer el año en que cruzas la línea',
      'jubilarse con 35: bajar la SWR del 4 % al 3,25 % lleva el objetivo de 25× a unos 31× el gasto, margen para 40-50 años',
    ],
    faqs: [
      {
        q: '¿Cuál es mi número FIRE?',
        a: 'Gasto anual dividido entre tu tasa de retiro segura. Con la clásica del 4 % equivale a 25× el gasto: 40.000 $ al año piden un millón de dólares; un FIRE lean de 28.000 $ apunta a ~700.000 $, y un estilo de vida de 100.000 $ necesita 2,5 millones.',
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
    ui: {
      'in.annualSpending': 'Jährliche Ausgaben im Ruhestand',
      'in.currentSavings': 'Aktuelles Vermögen (Ersparnisse)',
      'in.annualSavings': 'Jährliche Sparrate',
      'in.realReturn': 'Reale Rendite (nach Inflation)',
      'in.swr': 'Sichere Entnahmerate (SWR)',
      'out.fireNumber': 'Deine FIRE-Zielsumme',
      'outSub.fireNumber': 'Jährliche Ausgaben ÷ SWR',
      'out.years': 'Jahre bis zur finanziellen Freiheit',
      'out.retireYear': 'Voraussichtliches Ruhestandsjahr',
      'out.savingsRate': 'Aktuelle Sparquote',
      'outSub.savingsRate': 'Ersparnis ÷ (Ersparnis + Ausgaben)',
      'out.boost10': '+10% Sparquote verkürzt die Zeit um',
      'preset.0': 'Lean FIRE (28.000 $/Jahr)',
      'preset.1': 'Klassisches FIRE (50.000 $/Jahr)',
      'preset.2': 'Offensiv (60% Sparquote)',
      'errInvalid': 'Positive Ausgaben und Entnahmerate über 0% eingeben',
      'errUnreachable': 'Innerhalb von 80 Jahren nicht erreichbar — spare mehr oder gib weniger aus',
      'yearsWord': 'Jahre',
      'chartTitle': 'Vermögenswachstum vs. FIRE-Ziel',
      'line.portfolio': 'Portfolio-Wert',
      'line.target': 'FIRE-Ziel',
      'note': '💡 Die klassische 4%-Regel impliziert eine FIRE-Zielsumme von 25 Jahresausgaben. Die Renditen sind inflationsbereinigt, alle Beträge in heutiger Kaufkraft — keine zusätzliche Inflationsanpassung nötig.',
    },
    useCases: [
      'die FIRE-Zahl ermitteln: 40.000 $ Jahresbedarf bei 4 % Entnahme erfordern eine Million; bei 3,5 % rund 1.143.000 $',
      'die Sparquote als Hebel testen: von 15 % auf 40 % staucht die Reise von 40+ Jahren meist auf unter 20',
      'das Zieljahr festlegen: 80.000 $ Bestand, 12.000 $ Jahresrate, 5 % Realrendite — das Übergangsjahr direkt ablesen',
      'Ruhestand mit 35: Entnahmesatz von 4 % auf 3,25 % senken, Ziel von 25× auf gut 30× Jahresbedarf — Puffer für 40-50 Jahre',
    ],
    faqs: [
      {
        q: 'Wie hoch ist meine FIRE-Zahl?',
        a: 'Jahresbedarf geteilt durch die Safe-Withdrawal-Rate. Beim klassischen 4 % sind das 25× der Ausgaben: 40.000 $ pro Jahr brauchen eine Million; Lean FIRE (28.000 $/Jahr) zielt auf ~700.000 $, ein 100.000-$-Lebensstil auf 2,5 Millionen.',
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
        a: 'Der Rechner arbeitet mit Realrendite (nominal minus Inflation), die FIRE-Zahl bleibt in heutiger Kaufkraft: 8 % nominal minus 3 % Inflation = 5 %. Die gesetzliche Rente kannst du vom Jahresbedarf abziehen — bei 1.500 $ monatlich sinkt der zu finanzierende Rest um 18.000 $ pro Jahr, die Zielsumme entsprechend.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Der Kehrwert der Safe-Withdrawal-Rate (klassisch 4 %) ergibt das Ziel von 25× Jahresbedarf. Das Portfolio erreicht es nach t Jahren aus Bestand P, Realrendite r und Jahresrate S; das Tool löst das Überschreitungsjahr auf und rechnet mit +10 Punkten Sparquote erneut, um die Kompression zu zeigen.',
    },
  },
}
