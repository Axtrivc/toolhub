/**
 * freelance-rate-calculator 本地化 bundle —— zh / es / de
 */

import type { ToolL10n } from '../tool-l10n'

export const freelanceRateCalculatorL10n: ToolL10n = {

  es: {
    ui: {
      'in.targetIncome': 'Salario neto anual deseado',
      'in.billableHours': 'Horas facturables por semana',
      'in.weeksPerYear': 'Semanas de trabajo por año',
      'in.businessExpenses': 'Gastos anuales del negocio (software/hardware)',
      'in.taxRate': 'Tipo impositivo estimado (IRPF + autónomos)',
      'in.profitMargin': 'Margen de beneficio y colchón de riesgo',
      'inSuffix.targetIncome': '$',
      'inSuffix.businessExpenses': '$',
      'inSuffix.taxRate': '%',
      'inSuffix.profitMargin': '%',
      'inSuffix.billableHours': 'horas',
      'inSuffix.weeksPerYear': 'semanas',
      'out.hourlyRate': 'Tarifa por hora recomendada',
      'outSub.hourlyRate': 'Cubre impuestos, gastos y margen',
      'out.dayRate': 'Tarifa diaria (base 8 horas)',
      'out.annualGross': 'Objetivo de facturación anual',
      'outSub.annualGross': 'Total de facturas emitidas',
      'out.minRate': 'Tarifa por hora de punto de equilibrio',
      'outSub.minRate': 'Sin colchón de beneficios',
      'out.annualHours': 'Horas anuales facturables',
      'outSub.annualHours': 'Semanas × horas facturables',
      'slice.takeHomeSlice': 'Ingreso neto limpio',
      'slice.taxSlice': 'Impuestos y cuotas',
      'slice.expenseSlice': 'Gastos operativos',
      'slice.profitSlice': 'Margen de beneficio empresarial',
      'preset.0': 'Consultor (objetivo $120k)',
      'preset.1': 'Diseñador (objetivo $75k)',
      'preset.2': 'Redactor (objetivo $50k)',
      'errInvalid': 'Introduce unos ingresos válidos, horas y semanas positivas, e impuestos inferiores al 70%',
      'hrsWord': 'horas',
      'chartTitle': 'Desglose de facturación bruta anual',
      'chartCenter': 'Facturación',
      'note': '💡 Un empleado a tiempo completo registra ~2.080 horas, pero un freelance solo suele facturar ~1.000–1.200 horas/año. El resto se destina a tareas administrativas y ventas no remuneradas.',
    },
    useCases: [
      'Transición de asalariado a autónomo: para ganar 40.000 € netos necesitas facturar unos 55 €/hora en lugar de los 20 €/hora aparentes',
      'Fijar tarifas por jornada: presupuesta proyectos de varias semanas a 450 €/día con base en tu objetivo anual',
      'Planificar vacaciones reales: reservar 6 semanas de descanso anual sin perder poder adquisitivo',
      'Incluir cuotas de autónomo y software en el coste por hora',
    ],
    faqs: [
      {
        q: '¿Por qué no dividir mi sueldo anterior entre 2.080 horas?',
        a: 'Porque un empleado cobra por 40 horas semanales independientemente de su productividad. Un autónomo solo factura entre 20 y 25 horas semanales debido al tiempo invertido en captación de clientes y gestión contable.',
      },
      {
        q: '¿Qué gastos debe incluir un profesional independiente?',
        a: 'Cuota de autónomos, software profesional, amortización de ordenador, seguro médico, gestoría y teléfono.',
      },
      {
        q: '¿Por qué añadir un margen de beneficio comercial?',
        a: 'Actúa como colchón ante retrasos en los pagos de clientes y periodos sin proyectos.',
      },
      {
        q: '¿Es mejor cobrar por hora o por día?',
        a: 'Para trabajos cortos el precio por hora funciona bien. En consultoría de mayor duración, la tarifa diaria evita discusiones sobre minutos individuales.',
      },
    ],
    formula: {
      formula: 'Ingresos Brutos Necesarios = (Sueldo Neto ÷ (1 − Impuestos) + Gastos) ÷ (1 − Margen)',
      explain: 'Cálculo inverso desde el sueldo neto deseado, sumando gastos fijos y margen sobre las horas reales facturables.',
    },
  },
  de: {
    ui: {
      'in.targetIncome': 'Gewünschtes jährliches Nettoeinkommen',
      'in.billableHours': 'Abrechenbare Stunden pro Woche',
      'in.weeksPerYear': 'Arbeitswochen pro Jahr (abzgl. Urlaub)',
      'in.businessExpenses': 'Jährliche Betriebsausgaben (Software/Hardware)',
      'in.taxRate': 'Geschätzter Steuersatz (Einkommen + SV)',
      'in.profitMargin': 'Gewinnmarge & Risikopuffer',
      'inSuffix.targetIncome': '$',
      'inSuffix.businessExpenses': '$',
      'inSuffix.taxRate': '%',
      'inSuffix.profitMargin': '%',
      'inSuffix.billableHours': 'Std.',
      'inSuffix.weeksPerYear': 'Wochen',
      'out.hourlyRate': 'Empfohlener Stundensatz',
      'outSub.hourlyRate': 'Deckt Steuern, Ausgaben & Puffer ab',
      'out.dayRate': 'Tagessatz (Basis 8 Stunden)',
      'out.annualGross': 'Jährliches Brutto-Umsatzziel',
      'outSub.annualGross': 'Gesamtes Rechnungsvolumen',
      'out.minRate': 'Mindest-Stundensatz (Breakeven)',
      'outSub.minRate': 'Ohne Sicherheits- und Gewinnpuffer',
      'out.annualHours': 'Jährlich abrechenbare Stunden',
      'outSub.annualHours': 'Wochen × Wochenstunden',
      'slice.takeHomeSlice': 'Netto-Verdienst',
      'slice.taxSlice': 'Steuern & Abgaben',
      'slice.expenseSlice': 'Betriebsausgaben',
      'slice.profitSlice': 'Gewinnpuffer',
      'preset.0': 'Berater (Ziel $120k)',
      'preset.1': 'Designer (Ziel $75k)',
      'preset.2': 'Texter (Ziel $50k)',
      'errInvalid': 'Bitte gültiges Zieleinkommen, positive Stunden/Wochen und einen Steuersatz unter 70 % eingeben',
      'hrsWord': 'Std.',
      'chartTitle': 'Aufschlüsselung des Brutto-Jahresumsatzes',
      'chartCenter': 'Umsatz',
      'note': '💡 Festangestellte arbeiten ca. 2.080 Std., Freelancer können meist nur 1.000–1.200 Std. im Jahr fakturieren. Akquise, Angebote und Verwaltung sind unbezahlte Arbeitszeit.',
    },
    useCases: [
      'Vom Angestellten zum Freelancer: 60.000 € Wunschnetto erfordern bei 25 abrechenbaren Stunden rund 85 €/Std. statt 30 €/Std.',
      'Tagessätze für IT-Projekte: Aus 100 €/Std. einen marktgerechten Tagessatz von 800 € kalkulieren',
      'Urlaubs- und Ausfalltage einplanen: 6 Wochen unbezahlter Urlaub realistisch im Stundensatz auffangen',
      'Betriebskosten für MacBook, Cloud und Steuerberater auf jede Arbeitsstunde umlegen',
    ],
    faqs: [
      {
        q: 'Warum nicht einfach das frühere Gehalt durch 2.080 Stunden teilen?',
        a: 'Ein Angestellter wird für 40 Stunden inklusive Urlaub und Krankheit bezahlt. Als Freelancer sind 30-50% der Arbeitszeit unbezahlte Akquise und Bürokratie. Abrechenbar sind meist nur 20-25 Stunden pro Woche.',
      },
      {
        q: 'Welche Ausgaben müssen Freiberufler einrechnen?',
        a: 'Krankenversicherung, Rentenvorsorge, Software-Lizenzen, Hardware, Steuerberater und Rücklagen.',
      },
      {
        q: 'Warum sollte ein Gewinnpuffer aufgeschlagen werden?',
        a: 'Er sichert Zahlungsverzögerungen von Kunden und projektfreie Zeiten zwischen Aufträgen ab.',
      },
      {
        q: 'Stundensatz oder Tagessatz anbieten?',
        a: 'Für kurze Aufgaben eignet sich der Stundensatz; bei längeren Beratungsprojekten schützt der Tagessatz vor Mikromanagement.',
      },
    ],
    formula: {
      formula: 'Bruttoumsatz = (Nettogehalt ÷ (1 − Steuersatz) + Ausgaben) ÷ (1 − Marge)',
      explain: 'Rückwärtsrechnung vom gewünschten Nettogehalt zuzüglich Steuern, Ausgaben und Puffer geteilt durch die echten abrechenbaren Jahresstunden.',
    },
  },
}
