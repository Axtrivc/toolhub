/**
 * dog-age-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const DogAgeCalculatorL10n: ToolL10n = {
  zh: {
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
