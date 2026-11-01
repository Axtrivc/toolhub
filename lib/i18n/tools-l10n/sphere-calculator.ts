/**
 * sphere-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = SphereCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const sphereCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'V = 4/3 × π × r³\nSA = 4 × π × r²',
      explain: 'Volumen V y área superficial SA de una esfera, donde r es el radio.',
    },
    ui: {
      'chartTitle': 'Vista previa',
      'in.r': 'Radio',
      'out.volume': 'Volumen',
      'out.surface': 'Área de superficie',
      errNonNegative: 'El radio no puede ser negativo',
      note: '🔵 Volumen de la esfera = ⁴⁄₃ π r³. Área de superficie = 4 π r².',
    },
    useCases: [
      'calcular volumen y superficie de una esfera a partir del radio',
      'determinar las dimensiones de balones de baloncesto, fútbol o tenis',
      'calcular el volumen de depósitos o recipientes esféricos',
    ],
    faqs: [
      { q: '¿Por qué los planetas y las estrellas son esféricos?', a: 'La gravedad tira por igual en todas las direcciones, así que el material se asienta en la forma con la energía potencial más baja — una esfera. Las lunas y planetas grandes son redondos; los asteroides pequeños no, porque su gravedad es demasiado débil para vencer la resistencia del material.' },
      { q: '¿Qué cifras tiene un balón de baloncesto?', a: 'Con un radio de unos 12 cm: volumen ≈ 7.238 cm³ (7,2 litros) y superficie ≈ 1.810 cm². Introduce el radio y los dos resultados aparecen juntos.' },
      { q: '¿Qué crece más rápido, el volumen o la superficie?', a: 'El volumen, porque va con r³ mientras la superficie va con r²: al duplicar el radio, la superficie ×4 y el volumen ×8. Por eso los tanques esféricos rinden: más litros por metro cuadrado de material.' },
      { q: '¿Y con la Tierra?', a: 'Toma r = 6.371 km: volumen ≈ 1,08 × 10¹² km³ y superficie ≈ 5,1 × 10⁸ km², un 71 % cubierto de océano. Escríbelo en notación científica y lo reproducirás.' },
    ],
  },
  de: {
    formula: {
      formula: 'V = 4/3 × π × r³\nSA = 4 × π × r²',
      explain: 'Kugelvolumen V und Oberfläche SA, wobei r der Radius ist.',
    },
    ui: {
      'chartTitle': 'Formvorschau',
      'in.r': 'Radius',
      'out.volume': 'Volumen',
      'out.surface': 'Oberfläche',
      errNonNegative: 'Der Radius darf nicht negativ sein',
      note: '🔵 Kugelvolumen = ⁴⁄₃ π r³. Oberfläche = 4 π r².',
    },
    useCases: [
      'Volumen und Oberfläche einer Kugel aus dem Radius berechnen',
      'Abmessungen von Basketbällen, Fußbällen oder Tennisbällen bestimmen',
      'Volumen von kugelförmigen Tanks oder Behältern berechnen',
    ],
    faqs: [
      { q: 'Warum sind Planeten und Sterne kugelförmig?', a: 'Die Schwerkraft zieht in alle Richtungen gleichmäßig, sodass sich Material in der Form mit der geringsten potentiellen Energie anordnet — einer Kugel. Große Monde und Planeten sind rund; kleine Asteroiden nicht, weil ihre Schwerkraft zu schwach ist, um die Materialfestigkeit zu überwinden.' },
      { q: 'Welche Zahlen hat ein Basketball?', a: 'Bei rund 12 cm Radius: Volumen ≈ 7.238 cm³ (7,2 Liter) und Oberfläche ≈ 1.810 cm². Radius eingeben, beide Werte erscheinen sofort.' },
      { q: 'Was wächst schneller: Volumen oder Oberfläche?', a: 'Das Volumen — es läuft mit r³, die Oberfläche mit r²: doppelter Radius bedeutet ×4 Fläche, aber ×8 Volumen. Deshalb lohnen sich kugelförmige Tanks: mehr Liter pro Quadratmeter Material.' },
      { q: 'Und mit der Erde?', a: 'Nimm r = 6.371 km: Volumen ≈ 1,08 × 10¹² km³, Oberfläche ≈ 5,1 × 10⁸ km², davon 71 % Ozean. In wissenschaftlicher Notation eingeben und nachprüfen.' },
    ],
  },
}
