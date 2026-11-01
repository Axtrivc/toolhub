/**
 * led-resistor-calculator 本地化 bundle —— zh / es / de(B13 电子与音频批)
 * 覆盖: ui + useCases + faqs + formula。
 */
import type { ToolL10n } from '../tool-l10n'

export const LedResistorCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular la resistencia limitadora para encender un LED', 'ajustar el valor al E12 que realmente se vende', 'elegir entre resistencia de 1/8 W o 1/4 W según disipación', 'dimensionar LEDs indicadores a batería'],
    faqs: [
      { q: '¿Por qué redondear hacia arriba en E12?', a: 'Más resistencia significa menos corriente, y menos corriente siempre es seguro para el LED. Redondear arriba cuesta unos puntos de brillo; redondear abajo puede superar la corriente nominal.' },
      { q: '¿Puedo omitir la resistencia con una pila de botón de 3 V?', a: 'A menudo sí: la resistencia interna de la pila (decenas de ohmios) limita la corriente por sí sola, por eso los LED funcionan directos sobre litio de 3 V. Cualquier fuente más dura necesita la resistencia.' },
      { q: '¿Qué potencia debe tener la resistencia?', a: 'Al menos el doble de la disipación indicada, y el cuádruple en montajes cerrados o calientes. Una pieza de 1/4 W a 200 mW va bien en la mesa, pero se tuesta dentro de una caja sellada.' },
      { q: '¿LED en serie o en paralelo?', a: 'En serie siempre que la fuente lo permita: una resistencia sirve a toda la cadena y las corrientes quedan igualadas. En paralelo los LED reparten mal por la dispersión de Vf — pon una resistencia por rama.' },
    ],
    formula: {
      formula: 'R = (Vfuente − Vdirecta) ÷ I(LED)\nR_E12 = menor valor E12 ≥ R\nIreal = (Vfuente − Vdirecta) ÷ R_E12\nP_R = Ireal² × R_E12',
      variables: 'Vfuente = Tensión de alimentación (V)\nVdirecta = Caída directa del LED a la corriente objetivo (V)\nI(LED) = Corriente deseada (A; 20 mA = 0,02)\nR_E12 = Valor normalizado de la serie 10/12/15/18/22/27/33/39/47/56/68/82 (Ω)\nP_R = Potencia disipada en la resistencia (W)',
      explain: 'La resistencia se queda con la tensión que el LED no consume y fija la corriente elegida. Redondear hacia arriba al siguiente E12 garantiza que el LED nunca supere la corriente objetivo.',
      example: 'Paso 1: 12 V de fuente, LED blanco Vf 3,2 V, objetivo 20 mA → R = (12 − 3,2) ÷ 0,02 = 8,8 ÷ 0,02 = 440 Ω.\nPaso 2: 440 no es E12 → sube a 470 Ω.\nPaso 3: Ireal = 8,8 ÷ 470 = 0,018723 A ≈ 18,72 mA.\nPaso 4: P_R = 0,018723² × 470 = 0,1648 W ≈ 165 mW → usa 1/2 W (≈3× margen).\nResultado: con 470 Ω circulan 18,72 mA — 94 % de brillo con corriente segura.',
    },
    ui: {
      'in.supply': 'Tensión de alimentación',
      'in.vf': 'Caída directa del LED',
      'in.current': 'Corriente del LED',
      'out.resistor': 'Resistencia ideal',
      'out.e12': 'Valor E12 más cercano',
      'out.actualCurrent': 'Corriente real del LED',
      'out.resistorPower': 'Potencia en la resistencia',
      'out.ledPower': 'Potencia en el LED',
      'errSupply': 'La tensión de alimentación debe superar la caída directa del LED',
      'errPositive': 'Los tres valores deben ser positivos',
      'chartTitle': 'Reparto de la potencia',
      'chartCenter': 'Total',
      'slice.resistorPower': 'Resistencia',
      'slice.ledPower': 'LED',
      'preset.0': 'LED rojo @ 5 V',
      'preset.1': 'LED blanco @ 5 V',
      'preset.2': 'LED azul @ 3,3 V',
      'preset.3': 'Indicador @ 12 V',
      'note': '💡 Caídas típicas: rojo/ámbar 1,8-2,2 V; verde 2,0-2,4 V; azul/blanco 3,0-3,4 V. 20 mA es la corriente clásica de indicador; los LED modernos de alta eficiencia brillan de sobra con 2-5 mA. En serie, suma las Vf y comprueba que queden por debajo de la fuente.',
    },
  },
  de: {
    useCases: ['den Vorwiderstand für eine LED berechnen', 'den Wert auf ein käufliches E12-Maß runden', 'zwischen 1/8-W- und 1/4-W-Widerstand nach Verlustleistung entscheiden', 'Batterie-Betrieb von Anzeige-LEDs auslegen'],
    faqs: [
      { q: 'Warum beim E12 nach oben runden?', a: 'Mehr Widerstand heißt weniger Strom, und weniger Strom ist für die LED immer sicher. Aufrunden kostet ein paar Prozent Helligkeit; abrunden kann den Nennstrom überschreiten.' },
      { q: 'Kann ich den Widerstand an einer 3-V-Knopfzelle weglassen?', a: 'Oft ja — der Innenwiderstand der Knopfzelle (zig Ohm) begrenzt den Strom von selbst, darum leuchten LEDs an 3-V-Lithium direkt. Jede steifere Quelle (USB, Netzteil) braucht den Widerstand.' },
      { q: 'Welche Belastbarkeit braucht der Widerstand?', a: 'Mindestens das Doppelte der angezeigten Verlustleistung, in geschlossenen oder heißen Aufbauten das Vierfache. Ein 1/4-W-Typ bei 200 mW ist auf dem Tisch okay, backt aber im geschlossenen Gehäuse.' },
      { q: 'LEDs in Reihe oder parallel schalten?', a: 'In Reihe, wann immer die Spannung reicht: ein Widerstand bedient die ganze Kette, die Ströme bleiben gleich. Parallel teilen sich LEDs wegen der Flussspannungs-Streuung ungleich — jeder Zweig braucht seinen eigenen Widerstand.' },
    ],
    formula: {
      formula: 'R = (VQuelle − VFluss) ÷ I(LED)\nR_E12 = kleinster E12-Wert ≥ R\nI_real = (VQuelle − VFluss) ÷ R_E12\nP_R = I_real² × R_E12',
      variables: 'VQuelle = Versorgungs-/Batteriespannung (V)\nVFluss = Flussspannung der LED bei Zielstrom (V)\nI(LED) = Gewünschter LED-Strom (A; 20 mA = 0,02)\nR_E12 = Normwert aus der Reihe 10/12/15/18/22/27/33/39/47/56/68/82 (Ω)\nP_R = Am Widerstand umgesetzte Leistung (W)',
      explain: 'Der Widerstand übernimmt die Spannung, die die LED nicht braucht, und klemmt den Strom auf den gewählten Wert. Das Aufrunden auf den nächsten E12-Wert garantiert, dass die LED niemals über dem Zielstrom liegt.',
      example: 'Schritt 1: 12-V-Quelle, weiße LED Vf 3,2 V, Ziel 20 mA → R = (12 − 3,2) ÷ 0,02 = 8,8 ÷ 0,02 = 440 Ω.\nSchritt 2: 440 ist kein E12-Wert → aufrunden auf 470 Ω.\nSchritt 3: I_real = 8,8 ÷ 470 = 0,018723 A ≈ 18,72 mA.\nSchritt 4: P_R = 0,018723² × 470 = 0,1648 W ≈ 165 mW → 1/2-W-Widerstand (≈3× Reserve).\nErgebnis: Bei 470 Ω fließen 18,72 mA — rund 94 % Helligkeit bei sicherem Strom.',
    },
    ui: {
      'in.supply': 'Versorgungsspannung',
      'in.vf': 'LED-Flussspannung',
      'in.current': 'LED-Strom',
      'out.resistor': 'Idealer Widerstand',
      'out.e12': 'Nächster E12-Wert',
      'out.actualCurrent': 'Tatsächlicher LED-Strom',
      'out.resistorPower': 'Verlust im Widerstand',
      'out.ledPower': 'Leistung in der LED',
      'errSupply': 'Die Versorgungsspannung muss über der LED-Flussspannung liegen',
      'errPositive': 'Alle drei Eingaben müssen positiv sein',
      'chartTitle': 'Wohin die Leistung geht',
      'chartCenter': 'Gesamt',
      'slice.resistorPower': 'Widerstand',
      'slice.ledPower': 'LED',
      'preset.0': 'Rote LED @ 5 V',
      'preset.1': 'Weiße LED @ 5 V',
      'preset.2': 'Blaue LED @ 3,3 V',
      'preset.3': '12-V-Anzeige',
      'note': '💡 Typische Flussspannungen: Rot/Gelb 1,8-2,2 V; Grün 2,0-2,4 V; Blau/Weiß 3,0-3,4 V. 20 mA ist der klassische Anzeigestrom; moderne High-Efficiency-LEDs leuchten mit 2-5 mA genug. In Reihe geschaltet: Vf-Werte addieren — und unter der Versorgung halten.',
    },
  },
}
