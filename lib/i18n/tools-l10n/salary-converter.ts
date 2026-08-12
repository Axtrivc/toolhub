/**
 * salary-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const salaryConverterL10n: ToolL10n = {
  zh: {
    useCases: ['比较以不同方式报价(年薪/月薪/时薪)的工作机会', '把兼职或合同工时薪换算成年收入', '搞清双周薪和半月薪的区别', '做预算时在年薪、月薪、时薪之间换算'],
    faqs: [
      { q: '全职一年有多少工时?', a: '美国标准全职一年为 2,080 工时(每周 40 小时 × 52 周)。本工具显示的时薪即以此为基础,再按你输入的每周工时折算。' },
      { q: '结果包含税费和福利吗?', a: '不包含。这些都是税前总额(gross)换算。你的实际到手收入取决于联邦和州所得税、社保、医保、退休缴款及福利扣款。' },
    ],
    ui: {
      'in.unit': '我的工资按', 'in.amount': '金额', 'inSuffix.amount': '$', 'in.hours': '每周工时',
      'opt.unit.annual': '年薪', 'opt.unit.monthly': '月薪', 'opt.unit.biweekly': '双周薪', 'opt.unit.hourly': '时薪',
      'out.annual': '年薪', 'out.monthly': '月薪', 'out.biweekly': '双周薪', 'out.hourly': '时薪',
      note: '💵 假设每年 12 个月薪、26 个双周薪周期、52 个带薪周。加班和奖金不计入。',
    },
  },
  es: {
    useCases: ['comparar ofertas que cotizan el sueldo de forma distinta (anual/mensual/hora)', 'convertir una tarifa por hora a sueldo anual para trabajos a tiempo parcial o por contrato', 'entender la diferencia entre pago quincenal y semestral', 'pasar entre sueldo anual, mensual y por hora al hacer presupuesto'],
    faqs: [
      { q: '¿Cuántas horas tiene un año laboral a tiempo completo?', a: 'El año estándar a tiempo completo en EE. UU. son 2.080 horas (40 horas × 52 semanas). La tarifa por hora que muestra esta herramienta usa esa cifra, escalada por las horas semanales que ingreses.' },
      { q: '¿Esto incluye impuestos y prestaciones?', a: 'No. Son conversiones brutas (antes de impuestos). Tu sueldo neto real depende del impuesto federal y estatal, Seguridad Social, Medicare, aportaciones a jubilación y deducciones de prestaciones.' },
    ],
    ui: {
      'in.unit': 'Cobro por', 'in.amount': 'Importe', 'inSuffix.amount': '$', 'in.hours': 'Horas por semana',
      'opt.unit.annual': 'Anual', 'opt.unit.monthly': 'Mensual', 'opt.unit.biweekly': 'Quincenal', 'opt.unit.hourly': 'Por hora',
      'out.annual': 'Sueldo anual', 'out.monthly': 'Mensual', 'out.biweekly': 'Quincenal', 'out.hourly': 'Por hora',
      note: '💵 Asume 12 pagas mensuales, 26 pagas quincenales y 52 semanas pagadas/año. No incluye horas extra ni bonos.',
    },
  },
  de: {
    useCases: ['Jobangebote vergleichen, die das Gehalt unterschiedlich angeben (jährlich/monatlich/stündlich)', 'einen Stundenlohn in Jahresgehalt umrechnen für Teilzeit- oder Vertragsarbeit', 'den Unterschied zwischen 14-tägigem und halbmonatlichem Gehalt verstehen', 'zwischen Jahres-, Monats- und Stundenlohn für die Budgetplanung umrechnen'],
    faqs: [
      { q: 'Wie viele Stunden hat ein Vollzeitjahr?', a: 'Ein Standard-Vollzeitjahr in den USA umfasst 2.080 Stunden (40 Stunden × 52 Wochen). Der Stundenlohn, den dieses Tool anzeigt, basiert auf dieser Zahl, skaliert mit den von dir eingegebenen Wochenstunden.' },
      { q: 'Sind Steuern und Leistungen enthalten?', a: 'Nein. Dies sind Brutto-Umrechnungen (vor Steuern). Dein tatsächliches Nettoeinkommen hängt von Bundes- und Landessteuer, Sozialversicherung, Medicare, Rentenbeiträgen und Leistungseinbehalten ab.' },
    ],
    ui: {
      'in.unit': 'Ich werde bezahlt', 'in.amount': 'Betrag', 'inSuffix.amount': '$', 'in.hours': 'Stunden pro Woche',
      'opt.unit.annual': 'Jährlich', 'opt.unit.monthly': 'Monatlich', 'opt.unit.biweekly': '14-tägig', 'opt.unit.hourly': 'Stündlich',
      'out.annual': 'Jahresgehalt', 'out.monthly': 'Monatlich', 'out.biweekly': '14-tägig', 'out.hourly': 'Stündlich',
      note: '💵 Geht von 12 Monatsgehältern, 26 14-tägigen Zahlungen und 52 bezahlten Wochen/Jahr aus. Überstunden und Boni sind nicht enthalten.',
    },
  },
}
