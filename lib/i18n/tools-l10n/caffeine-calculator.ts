/**
 * caffeine-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const CaffeineCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'in.advice': '对睡眠的影响',
      'in.atBed': '就寝时',
      'in.bedtimeIn': '距就寝小时数',
      'in.halfLifeLeft': '已过半衰期数',
      'in.hoursAgo': '饮用后过了几小时',
      'in.mg': '摄入的咖啡因',
      'in.now': '当前体内残留',
      'note': '☕ 半衰期平均约 5 小时,范围 3-7(吸烟者代谢更快,口服避孕药更慢)。咖啡 ≈95 mg/杯、茶 ≈47、可乐 ≈34、能量饮料 ≈80-300。敏感度因基因(CYP1A2)差异很大。',
      'out.advice': '对睡眠的影响',
      'out.atBed': '就寝时',
      'out.bedtimeIn': '距就寝小时数',
      'out.halfLifeLeft': '已过半衰期数',
      'out.hoursAgo': '饮用后过了几小时',
      'out.mg': '摄入的咖啡因',
      'out.now': '当前体内残留',
    },
  },
  es: {
    ui: {
      'in.advice': 'Impacto en el sueño',
      'in.atBed': 'Al acostarte',
      'in.bedtimeIn': 'Horas hasta dormir',
      'in.halfLifeLeft': 'Semividas transcurridas',
      'in.hoursAgo': 'Horas desde que lo bebiste',
      'in.mg': 'Cafeína consumida',
      'in.now': 'En tu sistema ahora',
      'note': '☕ La semivida media es de ~5 horas, con rango 3-7 (fumadores más rápido, anticonceptivos más lento). Café ≈95 mg/taza, té ≈47, cola ≈34, energéticas ≈80-300. La sensibilidad varía por genética (CYP1A2).',
      'out.advice': 'Impacto en el sueño',
      'out.atBed': 'Al acostarte',
      'out.bedtimeIn': 'Horas hasta dormir',
      'out.halfLifeLeft': 'Semividas transcurridas',
      'out.hoursAgo': 'Horas desde que lo bebiste',
      'out.mg': 'Cafeína consumida',
      'out.now': 'En tu sistema ahora',
    },
  },
  de: {
    ui: {
      'in.advice': 'Auswirkung auf den Schlaf',
      'in.atBed': 'Zum Schlafengehen',
      'in.bedtimeIn': 'Stunden bis zum Schlaf',
      'in.halfLifeLeft': 'Verstrichene Halbwertszeiten',
      'in.hoursAgo': 'Stunden seit dem Trinken',
      'in.mg': 'Konsumiertes Koffein',
      'in.now': 'Jetzt in deinem Körper',
      'note': '☕ Die Halbwertszeit liegt bei ~5 Stunden (3-7; Raucher schneller, Antibabypille langsamer). Kaffee ≈95 mg/Tasse, Tee ≈47, Cola ≈34, Energydrinks ≈80-300. Empfindlichkeit variiert genetisch (CYP1A2).',
      'out.advice': 'Auswirkung auf den Schlaf',
      'out.atBed': 'Zum Schlafengehen',
      'out.bedtimeIn': 'Stunden bis zum Schlaf',
      'out.halfLifeLeft': 'Verstrichene Halbwertszeiten',
      'out.hoursAgo': 'Stunden seit dem Trinken',
      'out.mg': 'Konsumiertes Koffein',
      'out.now': 'Jetzt in deinem Körper',
    },
  },
}
