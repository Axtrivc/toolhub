/**
 * age-difference-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases + formula(client = AgeDifferenceCalculatorClient = makeCalculatorClient,slug 已注入)
 */
import type { ToolL10n } from '../tool-l10n'

export const ageDifferenceCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'gap = |birthdate₁ − birthdate₂|\nyears = 两个出生日期之间的完整日历年数\nmonths, days = 整年之后的日历余数(月、天)',
      variables:
        'gap = 年龄差(年、月、天)\nbirthdate₁, birthdate₂ = 两个出生日期(日、月、年)\nyears = 年龄差中的整年数(年)\nmonths, days = 整年之后的余数(月、天)',
      explain:
        '年龄差是两个出生日期之间经过的时间,表示方式与年龄完全一致:整年加上余下的月和天。绝对值符号表示无论先输入谁的出生日期,结果都相同。',
      example:
        '第 1 步:人物 A 生于 1990 年 6 月 15 日;人物 B 生于 1994 年 10 月 20 日。\n第 2 步:从 1990 年 6 月 15 日到 1994 年 6 月 15 日恰好是完整的 4 年;10 月 20 日在 6 月 15 日之后,因此整年数为 4。\n第 3 步:余数:6 月 15 日 → 10 月 15 日为 4 个月;10 月 15 日 + 5 天 = 10 月 20 日,即 4 个月零 5 天。\n结果:年龄差为 4 年 4 个月零 5 天。',
    },
    ui: {
      errInvalidDate: '日期无效(请用 YYYY-MM-DD)',
      ymdFormat: '{y} 年 {m} 个月 {d} 天',
      daysN: '{n} 天',
      'in.birth1': '人物 1 出生日期(YYYY-MM-DD)',
      'in.birth2': '人物 2 出生日期(YYYY-MM-DD)',
      'out.days': '相差天数',
      'out.diff': '年龄差',
      note: '🎂 计算两个人之间的年龄差距。适用于恋爱关系和家族史研究。',
    },
    useCases: [
      '计算两个人之间的年龄差',
      '根据出生年份推算年龄差距',
      '按年比较两个出生日期',
      '用于恋爱关系或家族史研究',
    ],
    faqs: [
      { q: '什么是「你年龄的一半加七」规则？', a: '这是一条常见的社交经验法则,用于估算可接受的最低恋爱年龄:你年龄的一半加 7。对 30 岁的人而言就是 22。它只是一种文化上的粗略参考,并非硬性规则。' },
    ],
  },
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
