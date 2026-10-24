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
    formula: {
      formula: 'A = π·r²    C = 2π·r',
      variables: 'A = 面积(平方单位)\nC = 周长(单位)\nr = 半径(单位)\nπ ≈ 3.14159',
      explain: '圆的面积 A 与周长 C,其中 r 为半径。',
      example: '第 1 步:r = 5 cm。\n第 2 步:A = π × 5² = 3.14159 × 25 ≈ 78.54 cm²。\n第 3 步:C = 2πr = 2 × 3.14159 × 5 ≈ 31.42 cm。\n结果:面积 ≈ 78.54 cm²,周长 ≈ 31.42 cm。',
    },
    useCases: [
      '建筑:计算圆柱的混凝土用量',
      '披萨:对比 12 寸和 16 寸大小',
      '工程:管道流量、轮子转动、齿轮',
      '农业:中心轴灌溉覆盖范围',
    ],
    faqs: [
      { q: '为什么 16 寸披萨比 12 寸的大一倍多?', a: '面积与半径的平方成正比。16 寸披萨的面积是 π(8)² = 201 平方英寸;12 寸的是 π(6)² = 113 平方英寸。所以 16 寸大了 78 %,而不是 33 %。' },
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
    formula: {
      formula: 'A = π·r²    C = 2π·r',
      variables: 'A = Área (unidades cuadradas)\nC = Circunferencia (unidades)\nr = Radio (unidades)\nπ ≈ 3.14159',
      explain: 'El área A y la circunferencia C del círculo, donde r es el radio.',
      example: 'Paso 1: r = 5 cm.\nPaso 2: A = π × 5² = 3.14159 × 25 ≈ 78.54 cm².\nPaso 3: C = 2πr = 2 × 3.14159 × 5 ≈ 31.42 cm.\nResultado: área ≈ 78.54 cm² y circunferencia ≈ 31.42 cm.',
    },
    useCases: [
      'construcción: calcular el hormigón para columnas circulares',
      'pizza: comparar tamaños de 12 y 16 pulgadas',
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
    formula: {
      formula: 'A = π·r²    C = 2π·r',
      variables: 'A = Fläche (Quadrateinheiten)\nC = Umfang (Einheiten)\nr = Radius (Einheiten)\nπ ≈ 3.14159',
      explain: 'Kreisfläche A und Umfang C, wobei r der Radius ist.',
      example: 'Schritt 1: r = 5 cm.\nSchritt 2: A = π × 5² = 3.14159 × 25 ≈ 78.54 cm².\nSchritt 3: C = 2πr = 2 × 3.14159 × 5 ≈ 31.42 cm.\nErgebnis: Fläche ≈ 78.54 cm² und Umfang ≈ 31.42 cm.',
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
