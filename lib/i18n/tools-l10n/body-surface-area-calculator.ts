/**
 * body-surface-area-calculator 本地化 bundle —— zh / es / de(2026-10 B6 健身批)
 * 覆盖: ui / faqs / useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const BodySurfaceAreaCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['consultar la superficie corporal para dosis en mg/m²', 'calcular el índice cardíaco (gasto ÷ BSA)', 'base para líquidos pediátricos y valoración de quemaduras', 'comparar Mosteller con DuBois'],
    faqs: [
      { q: '¿Por qué hay dos fórmulas?', a: 'DuBois (1916) se ajustó con moldes de cera de solo 9 sujetos; Mosteller (1987) lo redujo a √(talla × peso / 3600). En la mayoría de adultos difieren un ~2 %, y por eso Mosteller es el estándar a pie de cama; en tamaños corporales extremos queda algo por debajo de DuBois.' },
      { q: '¿Para qué se usa el BSA?', a: 'Dosificación de quimioterapia en mg/m², índice cardíaco (gasto cardíaco ÷ BSA, normal 2,5-4,0 L/min/m²), líquidos pediátricos, porcentaje de superficie quemada y algunos ajustes renales.' },
      { q: '¿Es fiable en obesidad?', a: 'Ambas fórmulas subestiman en obesidad severa. En oncología es habitual truncar el BSA (unos 2,2-2,5 m²) para no sobredosificar; manda siempre el protocolo del centro que trata.' },
      { q: '¿Puedo usar libras y pulgadas?', a: 'Las constantes están calibradas en cm y kg: convierte primero (1 pulgada = 2,54 cm; 1 libra ≈ 0,4536 kg). Con unidades imperiales existe el Mosteller equivalente √(libras × pulgadas / 3131).' },
    ],
    ui: {
      'in.height': 'Talla',
      'in.weight': 'Peso',
      'out.mosteller': 'BSA (Mosteller)',
      'outSub.mosteller': '√(talla × peso ÷ 3600)',
      'out.dubois': 'BSA (DuBois)',
      'outSub.dubois': '0,007184 × talla^0,725 × peso^0,425',
      'out.diff': 'Diferencia entre ambos',
      'out.cardiac': 'Índice cardíaco con 5 L/min',
      'outSub.cardiac': 'Gasto cardíaco ÷ BSA',
      'errInvalid': 'La talla y el peso deben ser positivos',
      'chartTitle': 'Mosteller frente a DuBois',
      'cmp.0': 'Mosteller',
      'cmp.1': 'DuBois',
      // cmpseg.0 移除(见 zh 段注释):段标签按行走 Mosteller/DuBois
      'preset.0': 'Adulto medio',
      'preset.1': 'Alto y corpulento',
      'preset.2': 'Complexión pequeña',
      'note': '⚕️ Mosteller (1987) es el estándar clínico: una sola línea que queda a menos del 2 % de DuBois en la mayoría de adultos. El BSA normaliza dosis de quimio (mg/m²), el índice cardíaco (gasto ÷ BSA, normal 2,5-4,0) y la función renal; la media adulta ronda 1,7-1,9 m².',
    },
  },
  de: {
    useCases: ['Körperoberfläche für Dosierungen in mg/m² nachschlagen', 'Herzindex berechnen (Herzminutenvolumen ÷ BSA)', 'Grundlage für Pädiatrie-Flüssigkeiten und Brandwunden', 'Mosteller mit DuBois vergleichen'],
    faqs: [
      { q: 'Warum zwei Formeln?', a: 'DuBois (1916) wurde an Wachsabgüssen von nur 9 Personen gefittet; Mosteller (1987) kürzte das auf √(Größe × Gewicht / 3600). Bei den meisten Erwachsenen liegen beide rund 2 % auseinander — deshalb ist Mosteller der bedside-Standard; bei extremen Körpermaßen liegt er etwas unter DuBois.' },
      { q: 'Wofür braucht man die BSA?', a: 'Chemotherapie-Dosierung in mg/m², Herzindex (Herzminutenvolumen ÷ BSA, normal 2,5-4,0 L/min/m²), Pädiatrie-Flüssigkeitsmengen, verbrannte Körperfläche (%TBSA) und manche Nierenfunktionsumrechnungen.' },
      { q: 'Stimmt das bei Adipositas?', a: 'Beide Formeln unterschätzen bei schwerer Adipositas. In der Onkologie wird die BSA deshalb oft gedeckelt (etwa 2,2-2,5 m²), um nicht zu überdosieren — maßgeblich ist immer das Protokoll des Behandlungszentrums.' },
      { q: 'Kann ich Pfund und Zoll eingeben?', a: 'Die Konstanten sind auf cm und kg geeicht: erst umrechnen (1 Zoll = 2,54 cm; 1 Pfund ≈ 0,4536 kg). Für Imperial-Einheiten existiert die Mosteller-Variante √(Pfund × Zoll / 3131).' },
    ],
    ui: {
      'in.height': 'Körpergröße',
      'in.weight': 'Gewicht',
      'out.mosteller': 'BSA (Mosteller)',
      'outSub.mosteller': '√(Größe × Gewicht ÷ 3600)',
      'out.dubois': 'BSA (DuBois)',
      'outSub.dubois': '0,007184 × Größe^0,725 × Gewicht^0,425',
      'out.diff': 'Differenz der beiden',
      'out.cardiac': 'Herzindex bei 5 L/min',
      'outSub.cardiac': 'Herzminutenvolumen ÷ BSA',
      'errInvalid': 'Größe und Gewicht müssen positiv sein',
      'chartTitle': 'Mosteller gegen DuBois',
      'cmp.0': 'Mosteller',
      'cmp.1': 'DuBois',
      // cmpseg.0 移除(见 zh 段注释):段标签按行走 Mosteller/DuBois
      'preset.0': 'Erwachsener, Durchschnitt',
      'preset.1': 'Groß & schwer',
      'preset.2': 'Zierliche Statur',
      'note': '⚕️ Mosteller (1987) ist der klinische Standard — eine Zeile, die bei den meisten Erwachsenen unter 2 % von DuBois bleibt. BSA normalisiert Chemo-Dosen (mg/m²), den Herzindex (HMV ÷ BSA, normal 2,5-4,0) und die Nierenfunktion; Erwachsenendurchschnitt ≈ 1,7-1,9 m².',
    },
  },
}
