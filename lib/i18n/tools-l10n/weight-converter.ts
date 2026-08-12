/**
 * weight-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = WeightConverterClient = makeUnitConverter,slug 已存在)
 */
import type { ToolL10n } from '../tool-l10n'

export const weightConverterL10n: ToolL10n = {
  zh: {
    useCases: [
      '在公斤和磅之间换算体重',
      '把美国食谱的盎司/磅换算成克',
      '换算国际物流的重量单位',
    ],
    faqs: [
      { q: '一公斤等于多少磅?', a: '1 公斤 = 2.20462 磅。公斤换磅乘以 2.205;磅换公斤乘以 0.4536(或除以 2.205)。所以 70 kg ≈ 154 lb,180 lb ≈ 81.6 kg。' },
      { q: '质量和重量有什么区别?', a: '质量(千克)是物体所含物质的多少,在任何地方都不变。重量(牛顿,即重力施加的力)会随引力变化——在月球上你的重量更小。日常生活中用磅或千克表示「体重」时把两者等同,这在地球上完全没问题。' },
      { q: '一磅等于多少盎司?', a: '1 磅(lb)= 16 盎司(oz)。所以 8 oz = 0.5 lb,24 oz = 1.5 lb。注意这是常衡(日常物品);贵金属用金衡,1 金衡磅 = 12 金衡盎司。' },
    ],
  },
  es: {
    useCases: [
      'convertir el peso corporal entre kilogramos y libras',
      'pasar onzas y libras de recetas estadounidenses a gramos',
      'convertir unidades de peso en envíos internacionales',
    ],
    faqs: [
      { q: '¿Cuántas libras hay en un kilogramo?', a: '1 kilogramo = 2,20462 libras. Para convertir kg a lb, multiplica por 2,205. Para convertir lb a kg, multiplica por 0,4536 (o divide entre 2,205). Así, 70 kg ≈ 154 lb y 180 lb ≈ 81,6 kg.' },
      { q: '¿Cuál es la diferencia entre masa y peso?', a: 'La masa (kg) es la cantidad de materia de un objeto y permanece constante en cualquier lugar. El peso (newtons, o la fuerza que ejerce la gravedad) cambia con la gravedad — pesas menos en la Luna. En el uso cotidiano, el «peso» en libras o kg los trata como intercambiables, lo cual funciona bien en la Tierra.' },
      { q: '¿Cuántas onzas hay en una libra?', a: '1 libra (lb) = 16 onzas (oz). Así, 8 oz = 0,5 lb y 24 oz = 1,5 lb. Ten en cuenta que esto es peso avoirdupois (artículos cotidianos); los metales preciosos usan peso de Troy, donde 1 libra Troy = 12 onzas Troy.' },
    ],
  },
  de: {
    useCases: [
      'Körpergewicht zwischen Kilogramm und Pfund umrechnen',
      'Unzen und Pfund aus US-Rezepten in Gramm umrechnen',
      'Gewichtseinheiten für internationale Versand umrechnen',
    ],
    faqs: [
      { q: 'Wie viele Pfund sind ein Kilogramm?', a: '1 Kilogramm = 2,20462 Pfund. Um kg in lb umzurechnen, multipliziere mit 2,205. Um lb in kg umzurechnen, multipliziere mit 0,4536 (oder teile durch 2,205). Also: 70 kg ≈ 154 lb und 180 lb ≈ 81,6 kg.' },
      { q: 'Was ist der Unterschied zwischen Masse und Gewicht?', a: 'Masse (kg) ist die Materiemenge eines Objekts und bleibt überall gleich. Gewicht (Newton, also die Kraft der Schwerkraft) ändert sich mit der Gravitation — auf dem Mond wiegst du weniger. Im Alltag werden „Gewicht" in Pfund oder kg als austauschbar behandelt, was auf der Erde problemlos funktioniert.' },
      { q: 'Wie viele Unzen sind in einem Pfund?', a: '1 Pfund (lb) = 16 Unzen (oz). Also: 8 oz = 0,5 lb und 24 oz = 1,5 lb. Dies ist das Avoirdupois-Gewicht (Alltagsgegenstände); Edelmetalle verwenden Troy-Gewicht, wo 1 Troy-Pfund = 12 Troy-Unzen.' },
    ],
  },
}
