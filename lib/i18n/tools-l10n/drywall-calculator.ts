/**
 * drywall-calculator 本地化 bundle —— zh / es / de(B8 建材与施工批次)
 * 覆盖: ui + faqs + useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const DrywallCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['contar placas para una habitación o garaje', 'comparar el número de placas 4×8 y 4×12', 'comprar tornillos y masilla en un solo viaje', 'revisar la lista de materiales de un contratista'],
    faqs: [
      { q: '¿Placas de 4×8 o de 4×12?', a: 'Las de 12 pies dejan menos juntas (un cuarto menos de cinta en paredes de 8 pies), pero exigen dos personas y espacio para maniobrar. Un principiante solo suele elegir 4×8; las cuadrillas con elevador montan 4×12 en horizontal.' },
      { q: '¿Por qué un 10% de merma?', a: 'Los cortes en huecos, esquinas golpeadas y ángulos raros consumen placa. El 10% es el margen estándar; súbalo al 15% en habitaciones con muchos entrantes. Las placas se venden enteras, así que siempre se redondea hacia arriba.' },
      { q: '¿Cómo se estima la masilla?', a: 'A razón de un galón por cada 100 ft² para cinta más dos manos de acabado — una habitación típica sale con una cubeta de 4,5 galones. Los acabados texturados añaden un 25-50%.' },
      { q: '¿Y los tornillos?', a: 'Unos uno por pie cuadrado (cada 12″ en techo, 16″ en pared) equivale a una libra por 250 ft². Los tornillos son baratos: mejor una caja extra que ensanchar la separación.' },
    ],
    ui: {
      'in.perimeter': 'Perímetro de paredes',
      'in.height': 'Altura de pared',
      'in.ceilL': 'Largo del techo (0 = sin techo)',
      'in.ceilW': 'Ancho del techo (0 = sin techo)',
      'in.panel': 'Tamaño de placa',
      'opt.panel.4x8': '4 × 8 ft (32 ft²)',
      'opt.panel.4x12': '4 × 12 ft (48 ft²)',
      'out.sheets': 'Placas de yeso',
      'out.totalArea': 'Superficie a revestir',
      'out.screws': 'Tornillos',
      'out.mud': 'Masilla de juntas',
      'outSub.sheets': '10% de merma incluido',
      'outSub.screws': '≈300 tornillos por lb',
      'chartTitle': 'Placas según tamaño',
      'cmp.0': 'Placas 4×8',
      'cmp.1': 'Placas 4×12',
      'cmpseg.0': 'Placas',
      'errDims': 'Introduce un perímetro y altura válidos',
      'preset.0': 'Dormitorio 12×10',
      'preset.1': 'Garaje 24×24',
      'preset.2': 'Sótano 30×14',
      'note': '🔨 En paredes de 8 pies, montar placas de 12 pies en horizontal recorta un cuarto de la longitud total de juntas. Tornillos: cada 12″ en techo y 16″ en pared. Compra todas las placas de una vez — los lotes de acabado se distinguen a la vista.',
    },
  },
  de: {
    useCases: ['Platten für Raum- oder Garagenausbau zählen', 'Plattenzahlen 4×8 vs 4×12 vergleichen', 'Schrauben und Spachtelmasse in einem Gang einkaufen', 'Materialliste eines Handwerkers prüfen'],
    faqs: [
      { q: '4×8- oder 4×12-Platten?', a: '12-Fuß-Platten bedeuten weniger Stöße (ein Viertel weniger Bandage auf 8-Fuß-Wänden), brauchen aber zwei Personen und Platz zum Handling. Einzelne Einsteiger nehmen 4×8; Trupps mit Hebebühne hängen 4×12 quer.' },
      { q: 'Warum 10% Verschnitt?', a: 'Ausschnittschnitte, beschädigte Ecken und schräge Winkel fressen Platten. 10% sind der Standardzuschlag, 15% bei vielen Nischen. Platten gibt es nur ganz — es wird immer aufgerundet.' },
      { q: 'Wie wird die Spachtelmasse geschätzt?', a: 'Etwa ein Gallone je 100 ft² für Bandage plus zwei Finishgänge — ein typischer Raum passt in einen 4,5-Gallonen-Eimer. Strukturputz kommt mit 25-50% obendrauf.' },
      { q: 'Und die Schrauben?', a: 'Ungefähr eine Schraube je Quadratfuß (12″ an Decken, 16″ an Wänden) ergibt ein Pfund je 250 ft². Schrauben sind billig — lieber eine Box mehr als weitere Abstände.' },
    ],
    ui: {
      'in.perimeter': 'Wandumfang',
      'in.height': 'Wandhöhe',
      'in.ceilL': 'Deckenlänge (0 = keine)',
      'in.ceilW': 'Deckenbreite (0 = keine)',
      'in.panel': 'Plattengröße',
      'opt.panel.4x8': '4 × 8 ft (32 ft²)',
      'opt.panel.4x12': '4 × 12 ft (48 ft²)',
      'out.sheets': 'Gipskartonplatten',
      'out.totalArea': 'Beplankte Fläche',
      'out.screws': 'Schrauben',
      'out.mud': 'Spachtelmasse',
      'outSub.sheets': '10% Verschnitt enthalten',
      'outSub.screws': '≈300 Schrauben je lb',
      'chartTitle': 'Plattenzahl nach Größe',
      'cmp.0': '4×8-Platten',
      'cmp.1': '4×12-Platten',
      'cmpseg.0': 'Platten',
      'errDims': 'Gültigen Umfang und Höhe eingeben',
      'preset.0': 'Schlafzimmer 12×10',
      'preset.1': 'Garage 24×24',
      'preset.2': 'Keller 30×14',
      'note': '🔨 Auf 8-Fuß-Wänden sparen quer gehängte 12-Fuß-Platten ein Viertel der Stoßlänge. Schraubenabstand: 12″ an Decken, 16″ an Wänden. Alle Platten in einem Kauf — Finish-Chargen unterscheiden sich sichtbar.',
    },
  },
}
