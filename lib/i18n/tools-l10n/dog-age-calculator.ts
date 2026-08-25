/**
 * dog-age-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const DogAgeCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['把狗的年龄换算成人类年龄', '按体型修正大型犬的衰老速度', '判断狗狗处于哪个生命阶段', '破除"乘 7"的狗龄迷思'],
    faqs: [
      { q: '为什么不直接乘以 7?', a: '"×7"在两端都不成立:一岁的狗已经性成熟、行为上相当于青少年(约 15 人岁),而且狗在前两年老得最快。本工具用 AVMA 共识曲线——第一年 15 人岁、第二年 24,之后按体型每狗年加 4-6.5 人岁。' },
      { q: '体型怎么影响计算?', a: '两岁之后,小型犬(小于 9 kg)每狗年约加 4 人岁,中型 5,大型 6.5。所以 13 岁的吉娃娃相当于精力尚可的约 77 岁,而 13 岁的大丹犬已约 104 岁——大型犬成熟速度相同,之后老得更快。' },
      { q: '狗几岁算老年?', a: '大致相当于人类年龄过 55-60 岁——大型犬约 8-9 岁、小型犬 10-12 岁,生命阶段输出会直接标出。即使看起来健康,兽医也建议从这些年龄开始做老年筛查。' },
    ],
    ui: {
      'in.dogAge': '狗狗年龄',
      'in.humanAge': '近似人类等效年龄',
      'in.lifeStage': '生命阶段',
      'in.mythNote': '关于"×7"迷思',
      'in.size': '犬型大小',
      'inSuffix.dogAge': '年',
      'note': '🐶 狗一岁就达到青少年成熟度(约人类 15 岁),两岁即为成年——×7 规则解释不了。此后大型犬衰老更快,比玩具犬早数年进入老年。',
      'opt.size.large': '大型(> 23 kg)',
      'opt.size.medium': '中型(9-23 kg)',
      'opt.size.small': '小型(< 9 kg)',
      'out.dogAge': '狗狗年龄',
      'out.humanAge': '近似人类等效年龄',
      'out.lifeStage': '生命阶段',
      'out.mythNote': '关于"×7"迷思',
      'out.size': '犬型大小',
    },
  },
  es: {
    useCases: ['convertir la edad de tu perro a años humanos', 'ajustar el envejecimiento por tamaño de raza', 'saber en qué etapa vital está tu perro', 'deshacer el mito del «por siete»'],
    faqs: [
      { q: '¿Por qué no multiplicar simplemente por 7?', a: 'La regla del ×7 falla en ambos extremos: un perro de un año ya es maduro y adolescente (≈15 años humanos), y los perros corren en sus dos primeros años. Esta herramienta usa la curva de consenso de la AVMA: 15 al primer año, 24 al segundo y luego 4-6,5 años humanos por año canino según el tamaño.' },
      { q: '¿Cómo cambia el cálculo según el tamaño?', a: 'Tras el segundo año, los perros pequeños (<9 kg) suman unos 4 años humanos por año canino, los medianos 5 y los grandes 6,5. Por eso un chihuahua de 13 años equivale a un vital ~77, mientras un gran danés de 13 va por un ~104: las razas grandes maduran igual pero envejecen más rápido después.' },
      { q: '¿Cuándo es un perro senior?', a: 'Aproximadamente cuando la edad humana equivalente supera los 55-60: unos 8-9 años calendario en razas grandes y 10-12 en pequeñas, como refleja la etapa vital que muestra la herramienta. Los veterinarios recomiendan chequeos de senior desde esas edades aunque el perro parezca sano.' },
    ],
    ui: {
      'in.dogAge': 'Edad del perro',
      'in.humanAge': 'Edad humana aproximada',
      'in.lifeStage': 'Etapa vital',
      'in.mythNote': 'Sobre la regla ×7',
      'in.size': 'Tamaño de raza',
      'inSuffix.dogAge': 'años',
      'note': '🐶 Los perros alcanzan la madurez adolescente (~15 años humanos) al año y son adultos a los dos — imposible con ×7. Después las razas grandes envejecen antes.',
      'opt.size.large': 'Grande (> 23 kg)',
      'opt.size.medium': 'Mediano (9-23 kg)',
      'opt.size.small': 'Pequeño (< 9 kg)',
      'out.dogAge': 'Edad del perro',
      'out.humanAge': 'Edad humana aproximada',
      'out.lifeStage': 'Etapa vital',
      'out.mythNote': 'Sobre la regla ×7',
      'out.size': 'Tamaño de raza',
    },
  },
  de: {
    useCases: ['das Hundealter in Menschenjahre umrechnen', 'die Alterung großer Rassen korrigieren', 'erkennen, in welcher Lebensphase dein Hund ist', 'mit dem ×7-Mythos aufräumen'],
    faqs: [
      { q: 'Warum nicht einfach mit 7 multiplizieren?', a: 'Die ×7-Regel scheitert an beiden Enden: Ein einjähriger Hund ist schon geschlechtsreif und im Teenager-Alter (≈15 Menschenjahre), und Hunde rasen durch die ersten zwei Jahre. Dieses Tool nutzt die AVMA-Konsenskurve: 15 im ersten Jahr, 24 im zweiten, danach 4-6,5 Menschenjahre pro Hundejahr je nach Größe.' },
      { q: 'Wie ändert die Größe die Rechnung?', a: 'Nach Jahr zwei addieren kleine Hunde (<9 kg) etwa 4 Menschenjahre pro Hundejahr, mittlere 5, große 6,5. Deshalb entspricht ein 13-jähriger Chihuahua einem rüstigen ~77-Jährigen, eine 13-jährige Deutsche Dogge einem ~104-Jährigen — große Rassen reifen gleich schnell, altern danach aber schneller.' },
      { q: 'Ab wann ist ein Hund Senior?', a: 'Etwa wenn das Menschenäquivalent die Mitte 50 übersteigt — bei großen Rassen um die Kalenderjahre 8-9, bei kleinen 10-12, was die Lebensphasen-Ausgabe widerspiegelt. Tierärzte empfehlen ab diesem Alter Senior-Screenings, auch wenn der Hund gesund wirkt.' },
    ],
    ui: {
      'in.dogAge': 'Alter des Hundes',
      'in.humanAge': 'Ungefähres Menschenalter',
      'in.lifeStage': 'Lebensphase',
      'in.mythNote': 'Zur ×7-Regel',
      'in.size': 'Rassegröße',
      'inSuffix.dogAge': 'Jahre',
      'note': '🐶 Hunde erreichen im ersten Jahr Jugendreife (~15 Menschenjahre) und sind mit zwei erwachsen — mit ×7 unmöglich. Danach altern große Rassen schneller.',
      'opt.size.large': 'Groß (> 23 kg)',
      'opt.size.medium': 'Mittel (9-23 kg)',
      'opt.size.small': 'Klein (< 9 kg)',
      'out.dogAge': 'Alter des Hundes',
      'out.humanAge': 'Ungefähres Menschenalter',
      'out.lifeStage': 'Lebensphase',
      'out.mythNote': 'Zur ×7-Regel',
      'out.size': 'Rassegröße',
    },
  },
}
