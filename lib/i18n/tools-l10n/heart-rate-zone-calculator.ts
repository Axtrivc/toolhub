/**
 * heart-rate-zone-calculator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const HeartRateZoneCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'in.age': '年龄',
      'in.max': '估计最大心率',
      'in.resting': '静息心率',
      'in.z1': '区间 1 · 恢复',
      'in.z2': '区间 2 · 有氧基础',
      'in.z3': '区间 3 · 节奏',
      'in.z4': '区间 4 · 乳酸阈',
      'in.z5': '区间 5 · 最大摄氧',
      'note': '❤️ Karvonen 区间使用心率储备(最大−静息),比单纯最大心率百分比更个性化。静息心率应在晨起即测。区间 2 打有氧基础——大部分训练时间应在此。',
      'out.age': '年龄',
      'out.max': '估计最大心率',
      'out.resting': '静息心率',
      'out.z1': '区间 1 · 恢复',
      'out.z2': '区间 2 · 有氧基础',
      'out.z3': '区间 3 · 节奏',
      'out.z4': '区间 4 · 乳酸阈',
      'out.z5': '区间 5 · 最大摄氧',
    },
  },
  es: {
    ui: {
      'in.age': 'Edad',
      'in.max': 'FC máxima estimada',
      'in.resting': 'Frecuencia cardíaca en reposo',
      'in.z1': 'Zona 1 · Recuperación',
      'in.z2': 'Zona 2 · Base aeróbica',
      'in.z3': 'Zona 3 · Tempo',
      'in.z4': 'Zona 4 · Umbral',
      'in.z5': 'Zona 5 · VO2 máx',
      'note': '❤️ Las zonas Karvonen usan la reserva de frecuencia (máx − reposo), mucho más personalizadas que el % bruto de la máxima. Mide el pulso al despertar. La Zona 2 construye la base aeróbica.',
      'out.age': 'Edad',
      'out.max': 'FC máxima estimada',
      'out.resting': 'Frecuencia cardíaca en reposo',
      'out.z1': 'Zona 1 · Recuperación',
      'out.z2': 'Zona 2 · Base aeróbica',
      'out.z3': 'Zona 3 · Tempo',
      'out.z4': 'Zona 4 · Umbral',
      'out.z5': 'Zona 5 · VO2 máx',
    },
  },
  de: {
    ui: {
      'in.age': 'Alter',
      'in.max': 'Geschätzte Maximalpuls',
      'in.resting': 'Ruhepuls',
      'in.z1': 'Zone 1 · Erholung',
      'in.z2': 'Zone 2 · Aerobe Basis',
      'in.z3': 'Zone 3 · Tempo',
      'in.z4': 'Zone 4 · Schwelle',
      'in.z5': 'Zone 5 · VO2-Max',
      'note': '❤️ Karvonen-Zonen nutzen die Herzfrequenzreserve (Max − Ruhe), persönlicher als rote Max-Prozente. Miss den Ruhepuls direkt nach dem Aufwachen. Zone 2 baut die aerobe Basis auf.',
      'out.age': 'Alter',
      'out.max': 'Geschätzte Maximalpuls',
      'out.resting': 'Ruhepuls',
      'out.z1': 'Zone 1 · Erholung',
      'out.z2': 'Zone 2 · Aerobe Basis',
      'out.z3': 'Zone 3 · Tempo',
      'out.z4': 'Zone 4 · Schwelle',
      'out.z5': 'Zone 5 · VO2-Max',
    },
  },
}
