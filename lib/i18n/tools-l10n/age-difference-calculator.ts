/**
 * age-difference-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + formula(client = AgeDifferenceCalculatorClient = makeCalculatorClient,slug 已注入)
 */
import type { ToolL10n } from '../tool-l10n'

export const ageDifferenceCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'gap = |birthdate₁ − birthdate₂|\nyears = años calendario completos entre las dos fechas de nacimiento\nmonths, days = resto del calendario tras los años completos',
      variables:
        'gap = Diferencia de edad (años, meses, días)\nbirthdate₁, birthdate₂ = Las dos fechas de nacimiento (día, mes, año)\nyears = Años completos en la diferencia (años)\nmonths, days = Resto tras los años completos (meses, días)',
      explain:
        'La diferencia de edad es el tiempo transcurrido entre las dos fechas de nacimiento, expresado igual que una edad: años completos más los meses y días sobrantes. Las barras de valor absoluto significan que el resultado es el mismo sin importar qué fecha de nacimiento se introduzca primero.',
      example:
        'Paso 1: Persona A nacida el 15 de junio de 1990; Persona B nacida el 20 de octubre de 1994.\nPaso 2: Del 15 de junio de 1990 al 15 de junio de 1994 hay exactamente 4 años completos; el 20 de octubre cae después del 15 de junio, así que el conteo de años completos es 4.\nPaso 3: Resto: del 15 de junio al 15 de octubre hay 4 meses; 15 de octubre + 5 días = 20 de octubre, es decir, 4 meses y 5 días.\nResultado: la diferencia de edad es de 4 años, 4 meses y 5 días.',
    },
    ui: {
      errInvalidDate: 'Fecha no válida (usa AAAA-MM-DD)',
      ymdFormat: '{y} años, {m} meses, {d} días',
      daysN: '{n} días',
      'in.birth1': 'Fecha de nacimiento (persona 1, AAAA-MM-DD)',
      'in.birth2': 'Fecha de nacimiento (persona 2, AAAA-MM-DD)',
      'out.days': 'Diferencia en días',
      'out.diff': 'Diferencia de edad',
      note: '🎂 Calcula la diferencia de edad entre dos personas. Útil para relaciones e historia familiar.',
    },
    useCases: [
      'calcular la diferencia de edad entre dos personas',
      'obtener la brecha de edad a partir de los años de nacimiento',
      'comparar dos fechas de nacimiento en años',
      'aplicarlo a relaciones o historia familiar',
    ],
    faqs: [
      { q: '¿Qué es la regla de «la mitad de tu edad más siete»?', a: 'Una pauta social común para la edad mínima aceptable en una relación: la mitad de tu edad más 7. Para alguien de 30 años: 22. Es solo una heurística cultural, no una regla.' },
    ],
  },
  de: {
    formula: {
      formula: 'gap = |birthdate₁ − birthdate₂|\nyears = ganze Kalenderjahre zwischen den beiden Geburtsdaten\nmonths, days = Kalenderrest nach den ganzen Jahren',
      variables:
        'gap = Altersunterschied (Jahre, Monate, Tage)\nbirthdate₁, birthdate₂ = Die beiden Geburtsdaten (Tag, Monat, Jahr)\nyears = Vollendete Jahre im Abstand (Jahre)\nmonths, days = Rest nach den vollen Jahren (Monate, Tage)',
      explain:
        'Der Altersunterschied ist die verstrichene Zeit zwischen den beiden Geburtsdaten, ausgedrückt genau wie ein Alter: ganze Jahre plus die übrig bleibenden Monate und Tage. Die Betragsstriche bedeuten, dass das Ergebnis unabhängig davon gleich ist, wessen Geburtsdatum zuerst eingegeben wird.',
      example:
        'Schritt 1: Person A geboren am 15. Juni 1990; Person B geboren am 20. Oktober 1994.\nSchritt 2: Vom 15. Juni 1990 bis zum 15. Juni 1994 sind es genau 4 vollendete Jahre; der 20. Oktober liegt nach dem 15. Juni, daher beträgt die Zahl der ganzen Jahre 4.\nSchritt 3: Rest: 15. Juni → 15. Oktober sind 4 Monate; 15. Oktober + 5 Tage = 20. Oktober, also 4 Monate und 5 Tage.\nErgebnis: Der Altersunterschied beträgt 4 Jahre, 4 Monate und 5 Tage.',
    },
    ui: {
      errInvalidDate: 'Ungültiges Datum (verwende JJJJ-MM-TT)',
      ymdFormat: '{y} Jahre, {m} Monate, {d} Tage',
      daysN: '{n} Tage',
      'in.birth1': 'Geburtsdatum (Person 1, JJJJ-MM-TT)',
      'in.birth2': 'Geburtsdatum (Person 2, JJJJ-MM-TT)',
      'out.days': 'Differenz in Tagen',
      'out.diff': 'Altersunterschied',
      note: '🎂 Berechnet den Altersunterschied zwischen zwei Personen. Nützlich für Beziehungen und Familienforschung.',
    },
    useCases: [
      'den Altersunterschied zwischen zwei Personen berechnen',
      'die Alterslücke aus den Geburtsjahren ermitteln',
      'zwei Geburtsdaten im Jahresvergleich gegenüberstellen',
      'für Beziehungen oder Familienforschung nutzen',
    ],
    faqs: [
      { q: 'Was ist die Regel «die Hälfte deines Alters plus sieben»?', a: 'Eine verbreitete gesellschaftliche Faustregel für das minimal akzeptable Beziehungsalter: die Hälfte deines Alters plus 7. Für einen 30-Jährigen: 22. Es ist nur eine kulturelle Faustregel, keine feste Regel.' },
    ],
  },
}
