/**
 * net-worth-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const netWorthCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'Net worth = total assets − total liabilities',
      explain: '资产是你拥有的(现金、投资、房产、车),负债是你欠的(房贷、贷款、卡账)。净资产为正意味着资产超过债务。',
    },
    useCases: ['算出资产减去负债后的净资产', '追踪净资产随时间的变化', '看自己处于哪个财富区间', '区分「可投资资产」与含自住的净资产'],
    faqs: [
      { q: '自住房算不算资产?', a: '算,但要减去房贷。剩下的净值是真实资产。有些计算器会剔除自住房,只看「可投资」净资产——两种做法都成立,只要逐年比较时口径一致即可。' },
      { q: '净资产是负数怎么办?', a: '对背着助学贷款、积蓄不多的年轻人来说很常见。负数不是道德失败——它是一个起点。目标是稳步改善:每 6-12 个月记一次,先专注还高息债、建立应急基金。' },
      { q: '多久重新算一次?', a: '大多数人每 6 到 12 个月算一次就够了。更频繁只会增加噪音(市场波动)而不增加洞察。多年的趋势比任何单次快照更重要——净资产每年增长 8-12% 就算很强了。' },
    ],
    ui: {
      noDebt: '无负债',
      'in.assets': '总资产(现金、房产、投资)', 'in.liabilities': '总负债(房贷、贷款、债务)',
      'out.networth': '你的净资产', 'out.ratio': '资产负债比',
      note: '💎 净资产 = 你拥有的减去你欠的。美国净资产中位数约 $192,000;净资产达到 $1M 以上,大致可让一个家庭跻身前 10-15%。',
      chartTitle: '资产 vs 负债', chartCenter: '总计', 'slice.assetsOut': '资产(你拥有的)', 'slice.liabilitiesOut': '负债(你欠的)',
    },
  },
  es: {
    formula: {
      formula: 'Net worth = total assets − total liabilities',
      explain: 'Los activos son lo que posees (caja, inversiones, casa, coche); los pasivos lo que debes (hipoteca, préstamos, tarjetas). Un patrimonio positivo significa que los activos superan a las deudas.',
    },
    useCases: ['calcular el patrimonio neto (activos menos pasivos)', 'hacer seguimiento del patrimonio neto en el tiempo', 'ver en qué tramo de riqueza estás', 'distinguir patrimonio «invertible» del que incluye la vivienda'],
    faqs: [
      { q: '¿Debo incluir mi vivienda habitual?', a: 'Sí, pero restando la hipoteca. El capital restante es un activo real. Algunas calculadoras excluyen la vivienda habitual para centrarse en el patrimonio neto «invertible»; ambos enfoques son válidos, siempre que seas constante al comparar año a año.' },
      { q: '¿Es malo tener un patrimonio neto negativo?', a: 'Es común en adultos jóvenes con préstamos estudiantiles y pocos ahorros. Un número negativo no es un fracaso moral: es un punto de partida. La meta es mejorar poco a poco: revísalo cada 6-12 meses y concéntrate primero en pagar las deudas de alto interés y crear un fondo de emergencia.' },
      { q: '¿Con qué frecuencia debo recalcularlo?', a: 'Cada 6 a 12 meses basta para la mayoría. Revisiones más frecuentes solo añaden ruido (vaivenes del mercado) sin aportar información. La tendencia a lo largo de los años importa más que cualquier foto fija; un patrimonio que crece 8-12 % anual es un progreso sólido.' },
    ],
    ui: {
      noDebt: 'Sin deudas',
      'in.assets': 'Activos totales (efectivo, vivienda, inversiones)', 'in.liabilities': 'Pasivos totales (hipoteca, préstamos, deudas)',
      'out.networth': 'Tu patrimonio neto', 'out.ratio': 'Ratio activos/deuda',
      note: '💎 Patrimonio neto = lo que tienes menos lo que debes. La mediana en EE. UU. es ~$192,000; alcanzar $1M+ sitúa a un hogar aproximadamente en el 10-15 % superior.',
      chartTitle: 'Activos vs Pasivos', chartCenter: 'Total', 'slice.assetsOut': 'Activos (lo que tienes)', 'slice.liabilitiesOut': 'Pasivos (lo que debes)',
    },
  },
  de: {
    formula: {
      formula: 'Net worth = total assets − total liabilities',
      explain: 'Vermögenswerte sind das, was du hast (Bar, Anlagen, Haus, Auto); Verbindlichkeiten das, was du schuldest (Hypothek, Kredite, Karten). Positives Reinvermögen heißt, Aktiva übersteigen Schulden.',
    },
    useCases: ['das Reinvermögen berechnen (Aktiva minus Verbindlichkeiten)', 'die Entwicklung des Reinvermögens über Zeit verfolgen', 'sehen, in welcher Vermögensstufe du liegst', 'zwischen „anlagefähigem" und Wohnimmobilie-inkludiertem Vermögen unterscheiden'],
    faqs: [
      { q: 'Zählt meine selbstgenutzte Immobilie?', a: 'Ja, aber ziehe die Hypothek ab. Das verbleibende Eigenkapital ist ein echter Vermögenswert. Manche Rechner lassen die selbstgenutzte Immobilie weg, um sich auf „anlagefähiges" Reinvermögen zu konzentrieren — beide Ansätze sind gültig, solange du beim Jahresvergleich konsistent bleibst.' },
      { q: 'Ist ein negatives Reinvermögen schlimm?', a: 'Bei jungen Erwachsenen mit Studienkrediten und wenig Ersparnissen ist es häufig. Eine negative Zahl ist kein moralischer Fehlschlag — sie ist ein Startpunkt. Ziel ist stetiger Fortschritt: Überprüfe alle 6-12 Monate und konzentriere dich zuerst auf den Abbau hochverzinslicher Schulden und den Aufbau eines Notgroschens.' },
      { q: 'Wie oft sollte ich neu rechnen?', a: 'Alle 6 bis 12 Monate reicht für die meisten. Häufigeres Prüfen bringt nur Rauschen (Marktchwankungen) ohne Erkenntnis. Der Trend über Jahre zählt mehr als jede Momentaufnahme — ein Reinvermögen, das 8-12 % pro Jahr steigt, ist ein starker Fortschritt.' },
    ],
    ui: {
      noDebt: 'Keine Schulden',
      'in.assets': 'Gesamtaktiva (Bargeld, Haus, Investitionen)', 'in.liabilities': 'Gesamtverbindlichkeiten (Hypothek, Kredite, Schulden)',
      'out.networth': 'Dein Reinvermögen', 'out.ratio': 'Aktiva-zu-Schulden-Verhältnis',
      note: '💎 Reinvermögen = was du hast minus was du schuldest. Der US-Median liegt bei ~$192,000; ein Reinvermögen von $1M+ bringt einen Haushalt ungefähr in die obersten 10-15 %.',
      chartTitle: 'Aktiva vs. Verbindlichkeiten', chartCenter: 'Gesamt', 'slice.assetsOut': 'Aktiva (was du hast)', 'slice.liabilitiesOut': 'Verbindlichkeiten (was du schuldest)',
    },
  },
}
