/**
 * generator-wattage-calculator 本地化 bundle —— zh / es / de(B9 家居与厨房批次)
 * 覆盖: ui / useCases / faqs / formula(explain・variables・example 译文;
 * formula 代码块是数学/代码示例,按站规保持英文原值)。
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA =
  'Running load = Σ(Running watts × Qty)\nSurge = Running load + max[(Surge watts − Running watts) × Qty]\nRecommended = smallest standard size ≥ Surge\nStandard sizes = 2,000 / 3,000 / 4,000 / 5,000 / 6,500 / 7,500 / 10,000 / 12,000 / 15,000 / 18,000 / 22,000 / 24,000 W'

export const GeneratorWattageCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: FORMULA,
      variables:
        'Running watts = consumo estable de cada aparato\nSurge watts = pico breve de arranque (motores: 2-3× la marcha)\nQty = unidades de ese aparato corriendo a la vez\nmax(...) = el mayor grupo de motores que se supone arranca mientras lo demás sigue corriendo (primero los motores grandes)',
      explain:
        'Un generador tiene dos valores: vatios de marcha continuos y un pico de arranque que aguanta unos segundos. Como los arranques se pueden secuenciar, el dimensionado solo añade el mayor margen de pico sobre la carga de marcha combinada y después sube al siguiente escalón estándar.',
      example:
        'Paso 1: Seleccionados — nevera 700/2.200 W, ventilador de caldera 800/2.350 W, luces LED 100/100 W, microondas 1.000/1.000 W.\nPaso 2: Marcha = 700 + 800 + 100 + 1.000 = 2.600 W.\nPaso 3: Márgenes de pico: 1.500 / 1.550 / 0 / 0 → el mayor es 1.550 W.\nPaso 4: Pico = 2.600 + 1.550 = 4.150 W.\nPaso 5: El escalón estándar mínimo ≥ 4.150 es 5.000 W.\nResultado: un generador de clase 5.000 W — «Cargar ejemplo» da exactamente estas cifras.',
    },
    useCases: ['elegir un generador que mueva nevera y caldera durante un corte', 'entender la diferencia entre vatios de arranque y de marcha antes de comprar', 'alinear modelo y presupuesto con las potencias típicas (2-24 kW)', 'estimar la carga combinada de sierra y bomba en obra'],
    faqs: [
      { q: '¿Por qué el arranque triplica la potencia de marcha?', a: 'Los motores (compresores, bombas, ventiladores) vencen la inercia al arrancar y tiran de 2-3× su corriente nominal durante un instante. El generador se dimensiona por el pico de arranque, no por la marcha.' },
      { q: '¿Cómo se suma el total de arranque?', a: 'El criterio de esta herramienta: todo lo seleccionado corriendo a la vez, más el pico extra del motor más grande (es decir, arranca primero el mayor y luego el resto). Varios motores gemelos lanzados juntos suben aún más el pico.' },
      { q: '¿Merece un generador inversor?', a: 'Su salida es limpia (baja distorsión), así que portátiles, televisores y cargadores van seguros, y consume y hace menos ruido. Con motores grandes, mira igualmente el pico de arranque, no la palabra «inversor».' },
      { q: '¿Por qué no recomiendan termo y vitro en un generador?', a: 'Son carga resistiva sin pico, pero miles de vatios sostenidos: en una o dos horas se comen un generador mediano entero. En un corte, la prioridad es nevera, calefacción y luces.' },
    ],
    ui: {
      'pickAppliances': 'Marca lo que necesitas correr a la vez',
      'qty': 'Uds.',
      'runningLoad': 'Carga de marcha',
      'surgeLoad': 'Pico de arranque',
      'recommended': 'Generador recomendado',
      'tooBig': 'Supera un solo equipo portátil',
      'copySummary': 'Copiar resumen',
      'reset': 'Restablecer',
      'preset.0': 'Básico de corte',
      'preset.1': 'Kit de tormenta',
      'preset.2': 'Combo de obra',
      'item.fridge': 'Nevera / congelador',
      'item.furnace': 'Ventilador de caldera (½ CV)',
      'item.windowAC': 'Aire de ventana (10.000 BTU)',
      'item.sumpPump': 'Bomba sumergible (½ CV)',
      'item.wellPump': 'Bomba de pozo (¾ CV)',
      'item.microwave': 'Microondas (1.000 W)',
      'item.coffeeMaker': 'Cafetera',
      'item.washer': 'Lavadora',
      'item.spaceHeater': 'Estufa eléctrica',
      'item.range': 'Placa (un fuego)',
      'item.waterHeater': 'Termo eléctrico',
      'item.hairDryer': 'Secador de pelo',
      'item.circularSaw': 'Sierra circular (7¼")',
      'item.garageOpener': 'Motor de garaje (½ CV)',
      'item.tv': 'TV LED',
      'item.lights': 'Luces LED (×10)',
      'item.laptop': 'Portátil + cargadores',
      'note': '⚡ Dimensiona por el arranque: los motores piden 2-3× su vatiaje de marcha un instante. Arranca primero el motor más grande y luego el resto. Los inversores son seguros para electrónica; bombas de pozo a 240 V y compresores de aire piden conmutador y electricista.',
    },
  },
  de: {
    formula: {
      formula: FORMULA,
      variables:
        'Running watts = Dauerleistung jedes Geräts\nSurge watts = kurze Anlaufspitze (Motoren: das 2-3-Fache der Betriebsleistung)\nQty = Anzahl dieses Geräts, das gleichzeitig läuft\nmax(...) = die größte Motorgruppe, die angenommen startet, während alles andere läuft (große Motoren zuerst)',
      explain:
        'Generatoren haben zwei Angaben: kontinuierliche Betriebswatt und eine Anlaufspitze, die sie nur ein paar Sekunden halten. Weil sich Starts sequenzieren lassen, rechnet die Dimensionierung nur den größten Anlaufzuschlag auf die kombinierte Betriebslast und rundet dann auf die nächste Standardstufe auf.',
      example:
        'Schritt 1: Angewählt — Kühlschrank 700/2.200 W, Heizungslüfter 800/2.350 W, LED-Lampen 100/100 W, Mikrowelle 1.000/1.000 W.\nSchritt 2: Betrieb = 700 + 800 + 100 + 1.000 = 2.600 W.\nSchritt 3: Anlaufzuschläge: 1.500 / 1.550 / 0 / 0 → der größte ist 1.550 W.\nSchritt 4: Spitze = 2.600 + 1.550 = 4.150 W.\nSchritt 5: Kleinste Standardstufe ≥ 4.150 ist 5.000 W.\nErgebnis: ein Generator der Klasse 5.000 W — „Beispiel laden" liefert genau diese Zahlen.',
    },
    useCases: ['einen Generator wählen, der Kühlschrank und Heizungslüfter trägt', 'vor dem Kauf den Unterschied zwischen Anlauf- und Betriebswatt verstehen', 'Modell und Budget mit den typischen Stufen (2-24 kW) abgleichen', 'die kombinierte Last von Kreissäge und Pumpe auf der Baustelle schätzen'],
    faqs: [
      { q: 'Warum ist die Anlaufleistung fast dreimal so hoch?', a: 'Motoren (Kompressoren, Pumpen, Lüfter) müssen die Trägheit überwinden und ziehen beim Start kurz das 2-3-Fache ihres Nennstroms. Dimensioniere den Generator nach dem Anlaufstrom, nicht nach dem Betrieb.' },
      { q: 'Wie wird die Startlast summiert?', a: 'Ansatz dieses Rechners: alles Angewählte läuft gleichzeitig, plus der zusätzliche Spitzenwert des größten Motors — also zuerst den größten Motor starten, dann den Rest. Mehrere baugleiche Motoren gleichzeitig erhöhen die Spitze weiter.' },
      { q: 'Lohnt sich ein Inverter-Generator?', a: 'Er liefert saubere Spannung (niedrige Oberschwingungen), ist für Laptop, TV und Ladegeräte gefahrlos und leiser. Bei großen Motoren zählt trotzdem die Anlaufleistung, nicht das Wort „Inverter".' },
      { q: 'Warum raten Boyler und Herd vom Generator ab?', a: 'Sie sind ohmsche Lasten ohne Spitze, aber ziehen über Stunden Tausende Watt — ein mittelgroßes Gerät ist damit komplett belegt. Bei Stromausfall haben Kühlschrank, Heizung und Licht Vorrang.' },
    ],
    ui: {
      'pickAppliances': 'Wähle, was gleichzeitig laufen muss',
      'qty': 'Anz.',
      'runningLoad': 'Betriebslast',
      'surgeLoad': 'Anlaufspitze',
      'recommended': 'Empfohlener Generator',
      'tooBig': 'Übersteigt einen einzelnen tragbaren Generator',
      'copySummary': 'Zusammenfassung kopieren',
      'reset': 'Zurücksetzen',
      'preset.0': 'Blackout-Basis',
      'preset.1': 'Sturm-Set',
      'preset.2': 'Baustellen-Set',
      'item.fridge': 'Kühlschrank / Gefriergerät',
      'item.furnace': 'Heizungslüfter (½ PS)',
      'item.windowAC': 'Fenster-Klimagerät (10.000 BTU)',
      'item.sumpPump': 'Kellerpumpe (½ PS)',
      'item.wellPump': 'Brunnenpumpe (¾ PS)',
      'item.microwave': 'Mikrowelle (1.000 W)',
      'item.coffeeMaker': 'Kaffeemaschine',
      'item.washer': 'Waschmaschine',
      'item.spaceHeater': 'Heizlüfter',
      'item.range': 'Herdplatte (eine)',
      'item.waterHeater': 'Boiler',
      'item.hairDryer': 'Föhn',
      'item.circularSaw': 'Kreissäge (7¼")',
      'item.garageOpener': 'Garagenantrieb (½ PS)',
      'item.tv': 'LED-Fernseher',
      'item.lights': 'LED-Lampen (×10)',
      'item.laptop': 'Laptop + Ladegeräte',
      'note': '⚡ Nach Anlaufspitze dimensionieren: Motoren ziehen kurz das 2-3-Fache ihrer Betriebsleistung. Größten Motor zuerst starten, dann den Rest. Inverter-Generatoren sind elektroniksicher; 240-V-Brunnenpumpen und Klima-Kompressoren brauchen Umschalteschalter und Elektriker.',
    },
  },
}
