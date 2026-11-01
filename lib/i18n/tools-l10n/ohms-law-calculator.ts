/**
 * ohms-law-calculator 本地化 bundle —— zh / es / de(B13 电子与音频批)
 * 覆盖: ui + useCases + faqs + formula。
 */
import type { ToolL10n } from '../tool-l10n'

export const OhmsLawCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular la corriente de un circuito desde voltaje y resistencia', 'estimar la resistencia necesaria para una pila y una corriente', 'comprobar la disipación para elegir la potencia del resistor', 'verificar corrientes de fuente, fusibles y cableado'],
    faqs: [
      { q: '¿Por qué exactamente dos valores?', a: 'V = I × R y P = V × I atan las cuatro magnitudes con dos grados de libertad: cualquier par fija las otras dos. Con más el sistema queda sobredeterminado; con menos, sin solución.' },
      { q: '¿Cuáles son las doce fórmulas de la ley de Ohm?', a: 'Combinando V = IR con P = VI salen doce ecuaciones: V a partir de I y R, o P e I, o P y R; I a partir de V y R, o P y V, o P y R; y así sucesivamente. La calculadora aplica el par que des.' },
      { q: '¿Sirve para circuitos de CA?', a: 'Sí, con valores RMS: usa el voltaje y la corriente eficaces y las fórmulas valen para cargas resistivas. Con bobinas o condensadores hacen falta impedancia y factor de potencia, que es otro cálculo.' },
      { q: '¿Por qué mi pila de 9 V no da 9 V con carga?', a: 'Toda fuente real tiene resistencia interna que hunde el voltaje en bornes al subir la corriente. Una pila pequeña de 9 V cae visiblemente por encima de unos 100 mA: mide bajo carga, no en vacío.' },
    ],
    formula: {
      formula: 'V = I × R\nP = V × I = I² × R = V² ÷ R',
      variables: 'V = Voltaje (voltios)\nI = Corriente (amperios)\nR = Resistencia (ohmios)\nP = Potencia (vatios)',
      explain: 'La ley de Ohm liga voltaje, corriente y resistencia; la ley de Watt añade la potencia. Cualquier dos de las cuatro magnitudes determinan las otras dos, y por eso la calculadora pide exactamente dos.',
      example: 'Paso 1: pila de 9 V sobre un resistor de 470 Ω.\nPaso 2: I = V ÷ R = 9 ÷ 470 = 0,019149 A ≈ 19,15 mA.\nPaso 3: P = V × I = 9 × 0,019149 = 0,1723 W ≈ 172,3 mW.\nPaso 4 (comprobación): P = V² ÷ R = 81 ÷ 470 = 0,1723 W ✓\nResultado: circulan 19,15 mA y el resistor disipa 172,3 mW — una pieza de 1/4 W se calienta; 1/2 W va holgada.',
    },
    ui: {
      'in.voltage': 'Voltaje',
      'in.current': 'Corriente',
      'in.resistance': 'Resistencia',
      'in.power': 'Potencia',
      'out.voltage': 'Voltaje',
      'out.current': 'Corriente',
      'out.resistance': 'Resistencia',
      'out.power': 'Potencia',
      'errEnterTwo': 'Introduce exactamente dos valores y deja los otros dos vacíos',
      'errDivZero': 'División entre cero — revisa el par introducido',
      'preset.0': 'Pila de 9 V + 470 Ω',
      'preset.1': 'USB 5 V + 220 Ω',
      'preset.2': 'Bombilla 120 V 60 W',
      'preset.3': 'Limpiar todo',
      'chartTitle': 'Corriente vs resistencia a este voltaje',
      'line.current': 'Corriente (mA)',
      'note': '⚡ La ley de Ohm es exacta solo para cargas resistivas: los LED y la arranque de motores no lo son. Los resistores tienen ±5 % de tolerancia y las pilas caen bajo carga; verifica los diseños justos con valores peores.',
    },
  },
  de: {
    useCases: ['Strom aus Spannung und Widerstand berechnen', 'den nötigen Widerstand für Batterie und Strom abschätzen', 'die Verlustleistung für die Watt-Bemessung prüfen', 'Ströme für Netzteil, Sicherung und Leitungsquerschnitt verifizieren'],
    faqs: [
      { q: 'Warum genau zwei Werte?', a: 'V = I × R und P = V × I verknüpfen die vier Größen mit zwei Freiheitsgraden: irgend zwei legen die anderen zwei fest. Mehr macht das System überbestimmt, weniger unlösbar.' },
      { q: 'Was sind die zwölf Formeln des Ohmschen Gesetzes?', a: 'V = IR mit P = VI kombiniert ergibt zwölf Gleichungen: V aus I und R, aus P und I oder aus P und R; I aus V und R, aus P und V oder aus P und R; und so weiter. Der Rechner wendet automatisch das passende Paar an.' },
      { q: 'Funktioniert das bei Wechselstrom?', a: 'Ja, mit Effektivwerten: RMS-Spannung und -Strom erfüllen die Formeln für ohmsche Lasten. Bei Spulen und Kondensatoren gehören Impedanz und Leistungsfaktor dazu — eine andere Rechnung.' },
      { q: 'Warum liefert meine 9-V-Batterie unter Last keine 9 V?', a: 'Jede reale Quelle hat einen Innenwiderstand, der die Klemmenspannung mit steigendem Strom fallen lässt. Kleine 9-V-Blöcken sacken über rund 100 mA deutlich ab — miss unter Last, nicht im Leerlauf.' },
    ],
    formula: {
      formula: 'V = I × R\nP = V × I = I² × R = V² ÷ R',
      variables: 'V = Spannung (Volt)\nI = Strom (Ampere)\nR = Widerstand (Ohm)\nP = Leistung (Watt)',
      explain: 'Das Ohmsche Gesetz verbindet Spannung, Strom und Widerstand; das Wattgesetz ergänzt die Leistung. Je zwei der vier Größen bestimmen die anderen zwei — deshalb fragt der Rechner nach genau zweien.',
      example: 'Schritt 1: 9-V-Batterie an 470 Ω.\nSchritt 2: I = V ÷ R = 9 ÷ 470 = 0,019149 A ≈ 19,15 mA.\nSchritt 3: P = V × I = 9 × 0,019149 = 0,1723 W ≈ 172,3 mW.\nSchritt 4 (Gegenprobe): P = V² ÷ R = 81 ÷ 470 = 0,1723 W ✓\nErgebnis: 19,15 mA fließen, der Widerstand verheizt 172,3 mW — 1/4-W-Typen werden warm; 1/2 W ist bequem.',
    },
    ui: {
      'in.voltage': 'Spannung',
      'in.current': 'Strom',
      'in.resistance': 'Widerstand',
      'in.power': 'Leistung',
      'out.voltage': 'Spannung',
      'out.current': 'Strom',
      'out.resistance': 'Widerstand',
      'out.power': 'Leistung',
      'errEnterTwo': 'Genau zwei Werte eingeben, die anderen zwei leer lassen',
      'errDivZero': 'Division durch Null — eingegebenes Paar prüfen',
      'preset.0': '9-V-Batterie + 470 Ω',
      'preset.1': 'USB 5 V + 220 Ω',
      'preset.2': 'Glühbirne 120 V 60 W',
      'preset.3': 'Alles leeren',
      'chartTitle': 'Strom gegen Widerstand bei dieser Spannung',
      'line.current': 'Strom (mA)',
      'note': '⚡ Das Ohmsche Gesetz gilt streng nur für ohmsche Lasten: LEDs und Motoranlaufströme sind nichtlinear. Widerstände haben ±5 % Toleranz, Batterien sacken unter Last ab — knappe Auslegungen mit Worst-Case-Werten prüfen.',
    },
  },
}
