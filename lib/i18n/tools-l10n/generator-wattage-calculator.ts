/**
 * generator-wattage-calculator 本地化 bundle —— zh / es / de(B9 家居与厨房批次)
 * 覆盖: ui / useCases / faqs / formula(explain・variables・example 译文;
 * formula 代码块是数学/代码示例,按站规保持英文原值)。
 */
import type { ToolL10n } from '../tool-l10n'

const FORMULA =
  'Running load = Σ(Running watts × Qty)\nSurge = Running load + max[(Surge watts − Running watts) × Qty]\nRecommended = smallest standard size ≥ Surge\nStandard sizes = 2,000 / 3,000 / 4,000 / 5,000 / 6,500 / 7,500 / 10,000 / 12,000 / 15,000 / 18,000 / 22,000 / 24,000 W'

export const GeneratorWattageCalculatorL10n: ToolL10n = {
  zh: {
    formula: {
      formula: FORMULA,
      variables:
        'Running watts = 每台电器的稳态运行功率\nSurge watts = 瞬时启动功率(电机为运行功率的 2-3 倍)\nQty = 该电器同时运行的台数\nmax(...) = 假定其余电器照常运行时一起启动的最大电机组(先启大电机)',
      explain:
        '发电机有两个额定值:可持续输出的运行功率,和只能维持数秒的浪涌功率。由于启动可以排队,选型只需在合计运行负载上叠加最大一份浪涌裕量,再向上对齐到下一个标准功率档。',
      example:
        '第 1 步:选中——冰箱 700/2,200 W、供暖风机 800/2,350 W、LED 灯 100/100 W、微波炉 1,000/1,000 W。\n第 2 步:运行 = 700 + 800 + 100 + 1,000 = 2,600 W。\n第 3 步:浪涌裕量:1,500 / 1,550 / 0 / 0 → 最大为 1,550 W。\n第 4 步:浪涌 = 2,600 + 1,550 = 4,150 W。\n第 5 步:≥ 4,150 的最小标准档是 5,000 W。\n结果:一台 5,000 W 档发电机——点"加载示例"正好算出这些数字。',
    },
    useCases: ['停电时挑一台够带动冰箱与供暖风机的发电机', '搞清"启动浪涌"和"运行瓦"差多少再下单', '按常见功率档(2k-24kW)对齐型号与预算', '工地电锯/水泵的组合负载估算'],
    faqs: [
      { q: '启动瓦和运行瓦为什么差这么多?', a: '电机(压缩机、水泵、风机)启动瞬间要克服惯性,通常拉 2-3 倍于运行时的电流。发电机按启动浪涌选型,而不是运行瓦。' },
      { q: '怎么算总的浪涌?', a: '本工具的口径是:全部选中电器同时运行,加上其中最大一台电机的额外浪涌(也就是"先启最大那台,再开其他"的推荐顺序)。多台同型电机同时启动会把浪涌再推高。' },
      { q: '变频(逆变)发电机值不值?', a: '它的输出 THD 低,可安全带笔记本、电视与充电设备,油耗和噪音也更低;但带大电机时仍要看浪涌额定,不是看"变频"三个字。' },
      { q: '为什么电热水器、电磁炉不太建议上发电机?', a: '它们是纯阻性负载、没有浪涌,但持续数千瓦,一两小时就能吃掉一台中型发电机的全部容量。停电优先级通常给冰箱、供暖、照明。' },
    ],
    ui: {
      'pickAppliances': '勾选需要同时运行的电器',
      'qty': '数量',
      'runningLoad': '运行负载',
      'surgeLoad': '启动浪涌',
      'recommended': '建议发电机功率',
      'tooBig': '超出单台便携机组范围',
      'copySummary': '复制摘要',
      'reset': '重置',
      'preset.0': '停电基本款',
      'preset.1': '风暴应急',
      'preset.2': '工地组合',
      'item.fridge': '冰箱/冷柜',
      'item.furnace': '供暖风机(½ 马力)',
      'item.windowAC': '窗式空调(10,000 BTU)',
      'item.sumpPump': '污水泵(½ 马力)',
      'item.wellPump': '井泵(¾ 马力)',
      'item.microwave': '微波炉(1,000 W)',
      'item.coffeeMaker': '咖啡机',
      'item.washer': '洗衣机',
      'item.spaceHeater': '取暖器',
      'item.range': '电灶(单眼)',
      'item.waterHeater': '电热水器',
      'item.hairDryer': '吹风机',
      'item.circularSaw': '圆锯(7¼ 英寸)',
      'item.garageOpener': '车库门电机(½ 马力)',
      'item.tv': 'LED 电视',
      'item.lights': 'LED 灯(×10)',
      'item.laptop': '笔记本+充电器',
      'note': '⚡ 按启动瓦选型:电机启动瞬间要 2-3 倍运行功率。先启最大那台电机,再依次开其他。变频发电机对电子设备更安全;240V 井泵与空调压缩机需要转换开关和电工。',
    },
  },
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
