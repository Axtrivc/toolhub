/**
 * rectangle-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = RectangleCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const rectangleCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'in.w': '宽',
      'in.h': '高',
      'out.area': '面积',
      'out.perimeter': '周长',
      'out.diagonal': '对角线',
      note: '▭ 面积 = 宽 × 高。对角线用勾股定理计算。',
    },
    useCases: [
      '地板:买多少瓷砖或地毯',
      '油漆:估算墙面面积',
      '屏幕:电视和显示器尺寸(对角线)',
      '地产:地块和房屋尺寸',
    ],
    faqs: [
      { q: '地板应该多买多少?', a: '额外加 10 % 用于损耗和切割误差。需要拼花的材料则加 15 %–20 %。宁可多订一点——不同批次的染色会有差异。' },
    ],
  },
  es: {
    ui: {
      'in.w': 'Ancho',
      'in.h': 'Alto',
      'out.area': 'Área',
      'out.perimeter': 'Perímetro',
      'out.diagonal': 'Diagonal',
      note: '▭ Área = ancho × alto. La diagonal usa el teorema de Pitágoras.',
    },
    useCases: [
      'suelos: cuánto azulejo o moqueta comprar',
      'pintura: estimar el área de las paredes',
      'pantallas: tamaño de televisores y monitores (diagonal)',
      'inmobiliaria: dimensiones de parcelas y viviendas',
    ],
    faqs: [
      { q: '¿Cuánto suelo extra debo comprar?', a: 'Añade un 10 % para desperdicio y errores de corte. Para materiales con dibujo que requieren encuadre, añade un 15–20 %. Pide un poco más de lo que creas necesario — los lotes de tinte varían entre fabricaciones.' },
    ],
  },
  de: {
    ui: {
      'in.w': 'Breite',
      'in.h': 'Höhe',
      'out.area': 'Fläche',
      'out.perimeter': 'Umfang',
      'out.diagonal': 'Diagonale',
      note: '▭ Fläche = Breite × Höhe. Die Diagonale nutzt den Satz des Pythagoras.',
    },
    useCases: [
      'Bodenbelag: wie viel Fliese oder Teppich nötig ist',
      'Farbe: Wandfläche für den Anstrich schätzen',
      'Bildschirme: TV- und Monitorgröße (Diagonale)',
      'Immobilien: Grundstücks- und Hausmaße',
    ],
    faqs: [
      { q: 'Wie viel Bodenbelag sollte ich extra kaufen?', a: 'Schlage 10 % für Verschnitt und Schneidefehler auf. Bei gemusterten Materialien, die angepasst werden müssen, 15–20 %. Bestelle etwas mehr, als du zu brauchen glaubst — die Farbchargen unterscheiden sich zwischen den Partien.' },
    ],
  },
}
