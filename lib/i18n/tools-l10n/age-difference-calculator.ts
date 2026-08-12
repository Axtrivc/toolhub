/**
 * age-difference-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = AgeDifferenceCalculatorClient = makeCalculatorClient,slug 已注入)
 */
import type { ToolL10n } from '../tool-l10n'

export const ageDifferenceCalculatorL10n: ToolL10n = {
  zh: {
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
