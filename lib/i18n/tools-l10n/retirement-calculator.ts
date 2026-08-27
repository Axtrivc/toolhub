/**
 * retirement-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const retirementCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'Balance = P(1+i)^n + PMT × [ ((1+i)^n − 1) / i ]   (i = annual rate ÷ 12, n = years × 12)\nSafe withdrawal ≈ Balance × 4%',
      explain: '复利储蓄(起始 P 加每月供款 PMT,i = 年收益率 ÷ 12,n 为月数)构成养老金;一个常用经验法则是每年提取约 4%。',
    },
    useCases: ['按当前储蓄和供款预测退休金', '看自己是否走在退休目标的正轨上', '比较不同回报率下的退休积累', '算还要存多少年才能退休'],
    faqs: [
      { q: '我需要多少钱才能退休?', a: '一个常见法则是年支出的 25 倍(4% 法则的倒数)。年支出 $40,000 的话,目标约 $1 百万。鉴于寿命延长,许多理财顾问现在建议 30 倍更稳妥。' },
    ],
    ui: {
      'in.current': '当前储蓄', 'in.monthly': '每月供款', 'in.rate': '年回报率', 'in.years': '距退休年数',
      'out.total': '退休储蓄总额', 'out.monthlyIncome': '月收入(4% 法则)', 'out.contributed': '你的累计投入', 'out.growth': '投资增长',
      chartTitle: '通往退休之路', 'line.contributed': '你投入的', 'line.balance': '退休储蓄', 'band.contributed-balance': '投资增长',
      'preset.0': '保守 4%', 'preset.1': '均衡 6%', 'preset.2': '进取 8%',
      note: '👵 复利增长 + 定期供款。尽早开始——时间比金额更重要。4% 法则:每年提取储蓄总额的 4%,按历史数据约可支撑 30 年退休生活。',
          'errNonNegative': "数值不能为负",
},
  },
  es: {
    formula: {
      formula: 'Balance = P(1+r)^n + PMT × [ ((1+r)^n − 1) / r ]\nSafe withdrawal ≈ Balance × 4%',
      explain: 'Ahorro capitalizado (saldo inicial P más aportaciones mensuales PMT, i = rentabilidad anual ÷ 12, n en meses) forma el fondo; una regla común es retirar ~4 % anual.',
    },
    useCases: ['proyectar el ahorro para la jubilación con el capital y las aportaciones actuales', 'ver si vas camino de tu meta de jubilación', 'comparar la acumulación con distintas rentabilidades', 'calcular cuántos años más debes ahorrar'],
    faqs: [
      { q: '¿Cuánto necesito para jubilarme?', a: 'Una regla común es 25× tus gastos anuales (el inverso de la regla del 4 %). Con $40,000 de gastos anuales, apunta a $1 millón. Muchos asesores sugieren ahora 30× para ir sobre seguro dada la mayor esperanza de vida.' },
    ],
    ui: {
      'in.current': 'Ahorros actuales', 'in.monthly': 'Aportación mensual', 'in.rate': 'Retorno anual', 'in.years': 'Años hasta la jubilación',
      'out.total': 'Ahorro para la jubilación', 'out.monthlyIncome': 'Ingreso mensual (regla del 4%)', 'out.contributed': 'Tus aportaciones', 'out.growth': 'Crecimiento de la inversión',
      chartTitle: 'Camino a la jubilación', 'line.contributed': 'Tu aportación', 'line.balance': 'Fondo de jubilación', 'band.contributed-balance': 'Crecimiento',
      'preset.0': 'Conservador 4%', 'preset.1': 'Equilibrado 6%', 'preset.2': 'Agresivo 8%',
      note: '👩‍🦳 Crecimiento compuesto más aportaciones regulares. Empieza pronto: el tiempo importa más que la cantidad. Regla del 4%: retirar el 4% anual suele sostener ~30 años de jubilación.',
          'errNonNegative': "Los valores no pueden ser negativos",
},
  },
  de: {
    formula: {
      formula: 'Balance = P(1+r)^n + PMT × [ ((1+r)^n − 1) / r ]\nSafe withdrawal ≈ Balance × 4%',
      explain: 'Verzinstes Sparen (Startguthaben P plus monatliche Beiträge PMT, i = Jahresrendite ÷ 12, n in Monaten) bildet das Altersvermögen; eine Daumenregel ist, etwa 4 % pro Jahr zu entnehmen.',
    },
    useCases: ['das Rentenkapital mit aktuellem Sparstand und Beiträgen hochrechnen', 'sehen, ob du auf Kurs für dein Rentenziel bist', 'die Ansparung bei verschiedenen Renditen vergleichen', 'berechnen, wie viele Jahre du noch sparen musst'],
    faqs: [
      { q: 'Wie viel brauche ich für die Rente?', a: 'Eine gängige Regel ist das 25-Fache deiner Jahresausgaben (der Kehrwert der 4 %-Regel). Bei $40,000 Jahresausgaben peile $1 Million an. Viele Berater empfehlen inzwischen das 30-Fache, um wegen längerer Lebenserwartung auf der sicheren Seite zu sein.' },
    ],
    ui: {
      'in.current': 'Aktuelle Ersparnisse', 'in.monthly': 'Monatlicher Beitrag', 'in.rate': 'Jahresrendite', 'in.years': 'Jahre bis zur Rente',
      'out.total': 'Rentenersparnisse', 'out.monthlyIncome': 'Monatseinkommen (4%-Regel)', 'out.contributed': 'Deine Einzahlungen', 'out.growth': 'Investment-Wachstum',
      chartTitle: 'Weg in die Rente', 'line.contributed': 'Eigene Einzahlung', 'line.balance': 'Renten Topf', 'band.contributed-balance': 'Wachstum',
      'preset.0': 'Konservativ 4%', 'preset.1': 'Ausgewogen 6%', 'preset.2': 'Aggressiv 8%',
      note: '👵 Zinseszins plus regelmäßige Einzahlungen. Früh anfangen — Zeit zählt mehr als die Summe. 4%-Regel: 4% jährliche Entnahme tragen historisch ~30 Rentenjahre.',
          'errNonNegative': "Werte dürfen nicht negativ sein",
},
  },
}
