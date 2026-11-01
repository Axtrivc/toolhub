/**
 * net-worth-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const netWorthCalculatorL10n: ToolL10n = {

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
    useCases: ['das Reinvermögen berechnen (Aktiva minus Verbindlichkeiten)', 'die Entwicklung des Reinvermögens über Zeit verfolgen', 'sehen, in welcher Vermögensstufe du liegst', 'zwischen „anlagefähigem“ Vermögen und Vermögen inklusive selbstgenutzter Immobilie unterscheiden'],
    faqs: [
      { q: 'Zählt meine selbstgenutzte Immobilie?', a: 'Ja, aber ziehe die Hypothek ab. Das verbleibende Eigenkapital ist ein echter Vermögenswert. Manche Rechner lassen die selbstgenutzte Immobilie weg, um sich auf „anlagefähiges“ Reinvermögen zu konzentrieren — beide Ansätze sind gültig, solange du beim Jahresvergleich konsistent bleibst.' },
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
