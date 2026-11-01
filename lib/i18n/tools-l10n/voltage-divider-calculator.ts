/**
 * voltage-divider-calculator 本地化 bundle —— zh / es / de(B13 电子与音频批)
 * 覆盖: ui + useCases + faqs + formula。
 */
import type { ToolL10n } from '../tool-l10n'

export const VoltageDividerCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['reducir la tensión de la batería al rango de un ADC', 'generar referencias y bias para comparadores y opamps', 'obtener una señal lógica de 3,3 V desde 12 V o 24 V', 'comprobar corriente de la cadena y potencia de cada resistor'],
    faqs: [
      { q: '¿Qué carga admite un divisor?', a: 'La carga actúa como una resistencia en paralelo con R2. Como regla, mantén la corriente del divisor al menos diez veces la de la carga, o la salida cae por debajo del valor calculado.' },
      { q: '¿Cómo consigo exactamente 3,3 V?', a: 'Cambia al modo de resolución inversa, introduce Vin y R1 y fija el objetivo en 3,3 V: la calculadora devuelve la R2 exacta (para 12 V y 10 kΩ son 3,79 kΩ; elige el E12 más cercano, 3,9 kΩ).' },
      { q: '¿Puede un divisor alimentar un chip de 3,3 V?', a: 'No. El divisor solo divide tensión: no regula corriente ni tensión, y una carga de miliamperios arrastra el nodo por todas partes. Para potencia usa un regulador lineal o un buck; el divisor es para señales y bias.' },
      { q: '¿Por qué mi Vout medido sale bajo?', a: 'La impedancia de entrada del multímetro (normalmente 10 MΩ) queda en paralelo con R2, además de la propia carga. Los divisores de valores altos son los que más se desplazan — la curva Vout frente a R2 muestra cómo el nodo se satura.' },
    ],
    formula: {
      formula: 'Vout = Vin × R2 ÷ (R1 + R2)\nI = Vin ÷ (R1 + R2)\nP1 = I² × R1; P2 = I² × R2\nInversa: R2 = R1 × Vobjetivo ÷ (Vin − Vobjetivo)',
      variables: 'Vin = Tensión de entrada (V)\nR1 = Resistencia superior, en serie (Ω)\nR2 = Resistencia inferior, a masa (Ω)\nVout = Tensión en el nudo R1-R2 (V)\nI = Corriente por la cadena (A)\nP1, P2 = Potencia disipada en cada resistencia (W)',
      explain: 'La corriente de la cadena la fija la resistencia total, y Vout es simplemente esa corriente por R2. Resolver al revés para R2 reordena la misma ecuación alrededor de la tensión objetivo.',
      example: 'Paso 1: 12 V sobre R1 = 10 kΩ y R2 = 4,7 kΩ.\nPaso 2: Vout = 12 × 4.700 ÷ (10.000 + 4.700) = 12 × 0,31973 = 3,84 V.\nPaso 3: I = 12 ÷ 14.700 = 0,816 mA.\nPaso 4: P1 = (0,000816)² × 10.000 = 6,66 mW; P2 = 3,13 mW.\nEjemplo inverso: para 3,3 V exactos desde 12 V con R1 = 10 kΩ → R2 = 10.000 × 3,3 ÷ 8,7 = 3.793 Ω (el E12 más cercano es 3,9 kΩ).\nResultado: 3,84 V en directo; hacen falta 3,79 kΩ para el objetivo de 3,3 V.',
    },
    ui: {
      'in.mode': 'Modo de cálculo',
      'in.vin': 'Tensión de entrada (Vin)',
      'in.r1': 'Resistencia R1',
      'in.r2': 'Resistencia R2',
      'in.targetVout': 'Vout objetivo',
      'opt.mode.forward': 'Directo — hallar Vout',
      'opt.mode.solve': 'Inverso — R2 para un Vout objetivo',
      'out.vout': 'Tensión de salida (Vout)',
      'out.current': 'Corriente del divisor',
      'out.p1': 'Potencia en R1',
      'out.p2': 'Potencia en R2',
      'out.r2Solved': 'R2 necesaria',
      'errVout': 'El Vout objetivo debe ser menor que Vin',
      'errPositive': 'Tensiones y resistencias deben ser positivas',
      'chartTitle': 'Vout según R2',
      'line.vout': 'Vout',
      'preset.0': '12 V → 3,3 V (inverso)',
      'preset.1': '5 V → 3,3 V lógica',
      'preset.2': 'Monitor de batería 100k/10k',
      'preset.3': 'Punto medio 9 V',
      'note': '⚖️ Un divisor solo vale con carga de alta impedancia: cualquier carga en paralelo con R2 hunde el Vout. Mantén la corriente del divisor ≥ 10× la de la carga; cadenas de valores altos (100k+10k) bajan la corriente en reposo a ~0,1 mA.',
    },
  },
  de: {
    useCases: ['Batteriespannung auf den ADC-Messbereich herunterteilen', 'Referenz- und Bias-Spannungen für Komparatoren und Ops erzeugen', 'aus 12 V/24 V ein 3,3-V-Logiksignal machen', 'Teilerstrom und Verlustleistung beider Widerstände prüfen'],
    faqs: [
      { q: 'Welche Last verträgt ein Spannungsteiler?', a: 'Die Last wirkt wie ein Widerstand parallel zu R2. Als Faustregel: Teilerstrom mindestens zehnmal so groß wie der Laststrom, sonst sackt die Ausgangsspannung deutlich unter den Rechenwert.' },
      { q: 'Wie bekomme ich exakt 3,3 V?', a: 'In den Rückrechnungsmodus wechseln, Vin und R1 eingeben, Ziel auf 3,3 V setzen — der Rechner liefert das exakte R2 (bei 12 V und 10 kΩ sind das 3,79 kΩ; nimm den nächsten E12-Wert, 3,9 kΩ).' },
      { q: 'Kann ein Teiler einen 3,3-V-Chip versorgen?', a: 'Nein. Ein Teiler teilt nur Spannung — er regelt weder Strom noch Spannung, und eine Milliampere-Last zieht den Knoten überall hin. Für Leistung nimmt man LDO oder Buck; Teiler sind für Signale und Bias.' },
      { q: 'Warum misst mein Vout zu niedrig?', a: 'Der 10-MΩ-Eingang des Messgeräts liegt parallel zu R2, dazu die Last selbst. Hochohmige Teiler verschieben sich am stärksten — die Vout-gegen-R2-Kurve zeigt, wie der Knoten mit wachsendem R2 „weich" wird.' },
    ],
    formula: {
      formula: 'Vout = Vin × R2 ÷ (R1 + R2)\nI = Vin ÷ (R1 + R2)\nP1 = I² × R1; P2 = I² × R2\nRückwärts: R2 = R1 × Vziel ÷ (Vin − Vziel)',
      variables: 'Vin = Eingangsspannung (V)\nR1 = Oberer (Reihen-)Widerstand (Ω)\nR2 = Unterer (nach Masse) Widerstand (Ω)\nVout = Spannung am R1-R2-Knoten (V)\nI = Strom durch die Kette (A)\nP1, P2 = Verlustleistung je Widerstand (W)',
      explain: 'Der Kettenstrom steht über den Gesamtwiderstand fest; Vout ist schlicht dieser Strom mal R2. Die Rückwärtsrechnung für R2 stellt dieselbe Gleichung nur nach der Zielspannung um.',
      example: 'Schritt 1: 12 V an R1 = 10 kΩ und R2 = 4,7 kΩ.\nSchritt 2: Vout = 12 × 4.700 ÷ (10.000 + 4.700) = 12 × 0,31973 = 3,84 V.\nSchritt 3: I = 12 ÷ 14.700 = 0,816 mA.\nSchritt 4: P1 = (0,000816)² × 10.000 = 6,66 mW; P2 = 3,13 mW.\nRückrechnung: für genau 3,3 V aus 12 V mit R1 = 10 kΩ → R2 = 10.000 × 3,3 ÷ 8,7 = 3.793 Ω (nächster E12-Wert: 3,9 kΩ).\nErgebnis: vorwärts 3,84 V; für das 3,3-V-Ziel braucht es 3,79 kΩ.',
    },
    ui: {
      'in.mode': 'Rechenmodus',
      'in.vin': 'Eingangsspannung (Vin)',
      'in.r1': 'Widerstand R1',
      'in.r2': 'Widerstand R2',
      'in.targetVout': 'Ziel-Vout',
      'opt.mode.forward': 'Vorwärts — Vout berechnen',
      'opt.mode.solve': 'Rückwärts — R2 für Ziel-Vout',
      'out.vout': 'Ausgangsspannung (Vout)',
      'out.current': 'Teilerstrom',
      'out.p1': 'Leistung in R1',
      'out.p2': 'Leistung in R2',
      'out.r2Solved': 'Benötigtes R2',
      'errVout': 'Das Ziel-Vout muss kleiner als Vin sein',
      'errPositive': 'Spannungen und Widerstände müssen positiv sein',
      'chartTitle': 'Vout über R2',
      'line.vout': 'Vout',
      'preset.0': '12 V → 3,3 V (rückwärts)',
      'preset.1': '5 V → 3,3 V Pegel',
      'preset.2': 'Batteriemonitor 100k/10k',
      'preset.3': 'Mittelabgriff 9 V',
      'note': '⚖️ Ein Teiler funktioniert nur an hochohmigen Lasten: Alles parallel zu R2 zieht Vout herunter. Teilerstrom ≥ 10× Laststrom halten; hochohmige Ketten (100k+10k) drücken den Ruhestrom auf ~0,1 mA.',
    },
  },
}
