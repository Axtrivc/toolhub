/**
 * pace-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const PaceCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'in.distance': '距离',
      'in.pace': '配速',
      'in.races': '等效赛事成绩预测',
      'in.speed': '速度',
      'in.time': '完赛时间',
      'in.unit': '配速单位',
      'note': '🏃 赛事预测假定你保持相同配速——大多数跑者在更长距离上会略为掉速,因此长距离预测应视为乐观目标。',
      'opt.unit.km': '每公里',
      'opt.unit.mile': '每英里',
      'out.distance': '距离',
      'out.pace': '配速',
      'out.races': '等效赛事成绩预测',
      'out.speed': '速度',
      'out.time': '完赛时间',
      'out.unit': '配速单位',
    },
  },
  es: {
    ui: {
      'in.distance': 'Distancia',
      'in.pace': 'Ritmo',
      'in.races': 'Predicciones de carrera',
      'in.speed': 'Velocidad',
      'in.time': 'Tiempo de meta',
      'in.unit': 'Unidad de ritmo',
      'note': '🏃 Las predicciones asumen que mantienes el ritmo: la mayoría de corredores se frena algo en distancias largas, así que tómalas como objetivos optimistas.',
      'opt.unit.km': 'Por kilómetro',
      'opt.unit.mile': 'Por milla',
      'out.distance': 'Distancia',
      'out.pace': 'Ritmo',
      'out.races': 'Predicciones de carrera',
      'out.speed': 'Velocidad',
      'out.time': 'Tiempo de meta',
      'out.unit': 'Unidad de ritmo',
    },
  },
  de: {
    ui: {
      'in.distance': 'Entfernung',
      'in.pace': 'Tempo',
      'in.races': 'Äquivalente Wettkampfprognosen',
      'in.speed': 'Geschwindigkeit',
      'in.time': 'Zielzeit',
      'in.unit': 'Tempo-Einheit',
      'note': '🏃 Die Prognosen nehmen gleichbleibendes Tempo an — die meisten Läufer werden auf langen Distanzen langsamer, betrachte sie als optimistische Ziele.',
      'opt.unit.km': 'Pro Kilometer',
      'opt.unit.mile': 'Pro Meile',
      'out.distance': 'Entfernung',
      'out.pace': 'Tempo',
      'out.races': 'Äquivalente Wettkampfprognosen',
      'out.speed': 'Geschwindigkeit',
      'out.time': 'Zielzeit',
      'out.unit': 'Tempo-Einheit',
    },
  },
}
