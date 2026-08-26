/**
 * circle-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = CircleCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const circleCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'chartTitle': '图形预览',
      'in.r': '半径',
      'out.area': '面积',
      'out.circumference': '周长',
      'out.diameter': '直径',
      note: '⭕ 面积 = π r²。周长 = 2 π r。直径 = 2 r。',
    },
    useCases: [
      '建筑:计算圆柱的混凝土用量',
      '比萨:对比 12 寸和 16 寸大小',
      '工程:管道流量、轮子转动、齿轮',
      '农业:中心轴灌溉覆盖范围',
    ],
    faqs: [
      { q: '为什么 16 寸比萨比 12 寸的大一倍多?', a: '面积与半径的平方成正比。16 寸比萨的面积是 π(8)² = 201 平方英寸;12 寸的是 π(6)² = 113 平方英寸。所以 16 寸大了 78 %,而不是 33 %。' },
    ],
  },
  es: {
    ui: {
      'chartTitle': 'Vista previa',
      'in.r': 'Radio',
      'out.area': 'Área',
      'out.circumference': 'Circunferencia',
      'out.diameter': 'Diámetro',
      note: '⭕ Área = π r². Circunferencia = 2 π r. Diámetro = 2 r.',
    },
    useCases: [
      'construcción: calcular el hormigón para columnas circulares',
      'pizzas: comparar tamaños de 12 y 16 pulgadas',
      'ingeniería: flujo de tuberías, rotación de ruedas, engranajes',
      'agricultura: alcance del riego de pivote central',
    ],
    faqs: [
      { q: '¿Por qué una pizza de 16 pulgadas es más del doble que una de 12?', a: 'El área escala con el radio al cuadrado. Una pizza de 16 pulgadas tiene un área de π(8)² = 201 pulg²; una de 12 tiene π(6)² = 113 pulg². Así que la de 16 es un 78 % más grande, no un 33 %.' },
    ],
  },
  de: {
    ui: {
      'chartTitle': 'Formvorschau',
      'in.r': 'Radius',
      'out.area': 'Fläche',
      'out.circumference': 'Umfang',
      'out.diameter': 'Durchmesser',
      note: '⭕ Fläche = π r². Umfang = 2 π r. Durchmesser = 2 r.',
    },
    useCases: [
      'Bauwesen: Betonbedarf für runde Säulen berechnen',
      'Pizza: Größen von 12 und 16 Zoll vergleichen',
      'Ingenieurwesen: Rohrströmung, Radrotation, Zahnräder',
      'Landwirtschaft: Reichweite der Kreisbewässerung',
    ],
    faqs: [
      { q: 'Warum ist eine 16-Zoll-Pizza mehr als doppelt so groß wie eine 12-Zoll?', a: 'Die Fläche skaliert mit dem Radius zum Quadrat. Eine 16-Zoll-Pizza hat eine Fläche von π(8)² = 201 Quadratzoll; eine 12-Zoll hat π(6)² = 113 Quadratzoll. Die 16-Zoll ist also 78 % größer, nicht 33 %.' },
    ],
  },
}
