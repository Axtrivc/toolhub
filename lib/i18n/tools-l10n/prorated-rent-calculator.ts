/**
 * prorated-rent-calculator 本地化 bundle —— zh / es / de(B1 房贷与房产金融批次)
 */
import type { ToolL10n } from '../tool-l10n'

export const ProratedRentCalculatorL10n: ToolL10n = {

  es: {
    useCases: [
      'calcular la renta prorrateada del primer mes al entrar a mitad de mes',
      'prorratear el último mes cuando te vas antes de fin de mes',
      'comparar la cláusula «días del mes» con la de «año de 365 días»',
      'revisar que el casero no haya errado la cifra del primer mes',
    ],
    faqs: [
      { q: '¿Cómo se calcula la renta prorrateada?', a: 'Divide la renta mensual entre los días del mes y multiplica por los días ocupados: 1.800 $ con entrada el 10 de noviembre son 21 días × 60,00 $ = 1.260 $. Algunos contratos usan mejor la renta anual ÷ 365 — aquí 59,18 $/día — así que revisa la cláusula.' },
      { q: '¿Qué conviene más, prorratear por mes o por 365 días?', a: 'Para el inquilino, la base de 365 días sale algo más barata al repartir la renta en un año uniforme; en febrero la base mensual es la más cara (1.800 ÷ 28 = 64,29 $/día). La diferencia suele ser menor de 20 $ — decide la cláusula del contrato, no la preferencia.' },
      { q: '¿Se cobra el día de la mudanza?', a: 'Normalmente sí: tienes las llaves, pagas el día. Entrar el 10 de noviembre debe los días 10 al 30, 21 en total. Algunos contratos cuentan desde la fecha de inicio del contrato; confirma cuál usáis antes de firmar.' },
      { q: '¿Cómo se prorratea la renta del último mes?', a: 'La misma matemática con menos días: salir el 8 de junio debe 8 días × la tarifa diaria (480 $ con 1.800 $ en base mensual). El casero suele prorratear el mes final y devolver el saldo del depósito del último mes cobrado por adelantado.' },
    ],
    ui: {
      'in.rent': 'Renta mensual',
      'in.date': 'Fecha de entrada / salida',
      'in.period': 'Prorrateo de',
      'in.basis': 'Base de la tarifa diaria',
      'inSuffix.rent': '$',
      'opt.period.first': 'Primer mes',
      'opt.period.last': 'Último mes',
      'opt.basis.month': 'Días del mes',
      'opt.basis.year': '365 días',
      'out.prorated': 'Renta prorrateada',
      'out.daysCharged': 'Días cobrados',
      'out.dailyRate': 'Tarifa diaria',
      'out.altAmount': 'Otra convención',
      'daysWord': 'días',
      'errInvalid': 'Renta positiva y fecha en formato AAAA-MM-DD',
      'chartTitle': 'Base mensual vs base de 365 días',
      'cmp.0': 'Por días del mes',
      'cmp.1': 'Por año de 365 días',
      'cmpseg.0': 'Renta prorrateada',
      'note': '📅 Entrar el día 10 de un mes de 30 días con 1.800 $ de renta: debes 21 días. La base mensual (60,00 $/día) es la más común en los contratos de EE. UU.; la base de 365 días (59,18 $/día) reparte la renta en un año uniforme. Manda el contrato — revísalo antes de negociar, y recuerda que febrero encarece la base mensual.',
    },
  },
  de: {
    useCases: [
      'die pro-rata-Miete für den Einzug mitten im Monat berechnen',
      'den letzten Monat bei früherem Auszug anteilig abrechnen',
      'die Klauseln „Tage des Monats" und „365-Tage-Jahr" vergleichen',
      'die Pro-rata-Rechnung des Vermieters nachprüfen',
    ],
    faqs: [
      { q: 'Wie wird Miete pro rata berechnet?', a: 'Monatsmiete durch die Tage des Monats teilen, mal den belegten Tagen: 1.800 $ mit Einzug am 10. November ergeben 21 Tage × 60,00 $ = 1.260 $. Manche Verträge nutzen Jahresmiete ÷ 365 als Tagessatz — hier 59,18 $ — also zuerst die Klausel lesen.' },
      { q: 'Was ist besser, Monats- oder 365-Tage-Basis?', a: 'Für Mieter ist die 365-Tage-Basis etwas günstiger, weil sie die Miete auf ein gleichmäßiges Jahr verteilt; im Februar ist die Monatsbasis am teuersten (1.800 ÷ 28 = 64,29 $/Tag). Der Unterschied liegt meist unter 20 $ — entscheidend ist die Vertragsklausel, nicht die Präferenz.' },
      { q: 'Zählt der Einzugstag selbst?', a: 'In der Regel ja — du hast den Schlüssel, du zahlst den Tag. Einzug am 10. November bedeutet den 10. bis 30., also 21 Tage. Manche Verträge rechnen ab Mietbeginn statt Einzugsdatum; kläre vor der Unterschrift, welche Konvention gilt.' },
      { q: 'Wie wird die letzte Monatsmiete abgerechnet?', a: 'Dieselbe Mathematik mit weniger Tagen: Auszug am 8. Juni bedeutet 8 Tage × Tagessatz (480 $ bei 1.800 $ Monatsbasis). Vermieter machen meist den letzten Monat pro rata und erstatten den Rest einer vorausgezahlten Letztmonatsmiete.' },
    ],
    ui: {
      'in.rent': 'Monatsmiete',
      'in.date': 'Einzugs- / Auszugsdatum',
      'in.period': 'Abrechnung von',
      'in.basis': 'Basis des Tagessatzes',
      'inSuffix.rent': '$',
      'opt.period.first': 'Erster Monat',
      'opt.period.last': 'Letzter Monat',
      'opt.basis.month': 'Monatstage',
      'opt.basis.year': '365-Tage-Jahr',
      'out.prorated': 'Pro-rata-Miete',
      'out.daysCharged': 'Berechnete Tage',
      'out.dailyRate': 'Tagessatz',
      'out.altAmount': 'Andere Konvention',
      'daysWord': 'Tage',
      'errInvalid': 'Positive Miete und Datum im Format JJJJ-MM-TT',
      'chartTitle': 'Monatsbasis vs 365-Tage-Basis',
      'cmp.0': 'Nach Tagen des Monats',
      'cmp.1': 'Nach 365-Tage-Jahr',
      'cmpseg.0': 'Pro-rata-Miete',
      'note': '📅 Einzug am 10. eines 30-Tage-Monats bei 1.800 $ Miete: 21 Tage fällig. Die Monatsbasis (60,00 $/Tag) ist in US-Mietverträgen am häufigsten; die 365-Tage-Basis (59,18 $/Tag) verteilt dieselbe Miete gleichmäßig. Der Vertrag zählt — prüfe die Klausel vor der Verhandlung, und denk daran: Im Februar ist die Monatsbasis am teuersten.',
    },
  },
}
