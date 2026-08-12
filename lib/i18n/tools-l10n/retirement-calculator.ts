/**
 * retirement-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const retirementCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['按当前储蓄和供款预测退休金', '看自己是否走在退休目标的正轨上', '比较不同回报率下的退休积累', '算还要存多少年才能退休'],
    faqs: [
      { q: '我需要多少钱才能退休?', a: '一个常见法则是年支出的 25 倍(4% 法则的倒数)。年支出 $40,000 的话,目标约 $1 百万。鉴于寿命延长,许多理财顾问现在建议 30 倍更稳妥。' },
    ],
    ui: {
      'in.current': '当前储蓄', 'in.monthly': '每月供款', 'in.rate': '年回报率', 'in.years': '距退休年数',
      'out.total': '退休储蓄总额', 'out.contributed': '你的累计投入', 'out.growth': '投资增长',
      note: '👵 把当前储蓄的复利增长与定期供款结合。尽早开始——时间比金额更重要。',
    },
  },
  es: {
    useCases: ['proyectar el ahorro para la jubilación con el capital y las aportaciones actuales', 'ver si vas camino de tu meta de jubilación', 'comparar la acumulación con distintas rentabilidades', 'calcular cuántos años más debes ahorrar'],
    faqs: [
      { q: '¿Cuánto necesito para jubilarme?', a: 'Una regla común es 25× tus gastos anuales (el inverso de la regla del 4 %). Con $40,000 de gastos anuales, apunta a $1 millón. Muchos asesores sugieren ahora 30× para ir sobre seguro dada la mayor esperanza de vida.' },
    ],
    ui: {
      'in.current': 'Ahorros actuales', 'in.monthly': 'Aportación mensual', 'in.rate': 'Retorno anual', 'in.years': 'Años hasta la jubilación',
      'out.total': 'Ahorro para la jubilación', 'out.contributed': 'Tus aportaciones', 'out.growth': 'Crecimiento de la inversión',
      note: '👩‍🦳 Combina el crecimiento compuesto de los ahorros actuales con aportaciones regulares. Empieza pronto — el tiempo importa más que la cantidad.',
    },
  },
  de: {
    useCases: ['das Rentenkapital mit aktuellem Sparstand und Beiträgen hochrechnen', 'sehen, ob du auf Kurs für dein Rentenziel bist', 'die Ansparung bei verschiedenen Renditen vergleichen', 'berechnen, wie viele Jahre du noch sparen musst'],
    faqs: [
      { q: 'Wie viel brauche ich für die Rente?', a: 'Eine gängige Regel ist das 25-Fache deiner Jahresausgaben (der Kehrwert der 4 %-Regel). Bei $40,000 Jahresausgaben peile $1 Million an. Viele Berater empfehlen inzwischen das 30-Fache, um wegen längerer Lebenserwartung auf der sicheren Seite zu sein.' },
    ],
    ui: {
      'in.current': 'Aktuelle Ersparnisse', 'in.monthly': 'Monatlicher Beitrag', 'in.rate': 'Jahresrendite', 'in.years': 'Jahre bis zur Rente',
      'out.total': 'Rentenersparnisse', 'out.contributed': 'Deine Einzahlungen', 'out.growth': 'Investment-Wachstum',
      note: '👵 Kombiniert Zinseszins auf aktuelle Ersparnisse mit regelmäßigen Beiträgen. Fang früh an — Zeit zählt mehr als Betrag.',
    },
  },
}
