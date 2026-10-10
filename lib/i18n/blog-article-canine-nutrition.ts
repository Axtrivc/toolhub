/**
 * 《Veterinary Math for Dog Owners: Decoding RER, MER, and Accurate Daily Calorie Intake》
 * Pillar 集群 #9(宠物养育,2026-09-05)。
 * 内链:dog-food-calculator / dog-age-calculator。
 */

import type { LocalizedArticle } from './blog-articles'

const CODE_RER = `// Resting Energy Requirement (kcal/day)
RER = 70 * (weight_kg ^ 0.75)
//
// MER = RER * life-stage factor
//   neutered adult   1.6   |  intact adult   1.8
//   puppy 0-4 mo     3.0   |  puppy 4-12 mo  2.0
//   weight loss      1.0   |  senior         1.4
//   working dog      2.0-5.0 (by intensity)
//
// 20 kg neutered adult: RER = 70*20^0.75 ≈ 662, MER ≈ 1,060 kcal`

export const canineNutritionArticle: LocalizedArticle = {
  en: {
    lead: 'Feeding guidelines on kibble bags are written for intact, active, young dogs — and most pets are none of the three. The veterinary RER/MER framework gives you the actual number, and the 10% treat rule keeps you honest about where calories hide.',
    sections: [
      {
        heading: '1. RER: The Baseline Every Bowl Is Built On',
        blocks: [
          'The **Resting Energy Requirement** is the calories a dog burns at rest in a thermoneutral room — the canine BMR. The formula is allometric, not linear: metabolism scales with body weight to the 3/4 power, so a 40 kg dog needs far less than double a 20 kg dog.',
          { code: CODE_RER },
          'This nonlinearity is why per-kg feeding charts on bags mislead: they assume a straight line through a curved relationship. RER is the correct starting point — but it is a *resting* number, and no living dog is a resting number.',
        ],
      },
      {
        heading: '2. MER: The Life-Stage Multiplier That Decides Everything',
        blocks: [
          'The **Maintenance Energy Requirement** multiplies RER by a factor for the dog your dog actually is. The spread is enormous: a neutered adult needs 1.6× RER; an intact adult 1.8×; a puppy under 4 months **3×**; a dog on a vet-supervised weight-loss plan just 1.0×.',
          'Two dogs of identical weight can differ by 2–3× in legitimate calorie needs. "How much should I feed?" has no answer until you answer: *which* dog — age, neuter status, activity, body condition?',
          {
            card: {
              title: 'Dog Food Calculator',
              href: '/tools/dog-food-calculator/',
              desc: 'RER → MER with the correct life-stage factor, converted to grams of your specific food from its per-cup or per-100 g calorie label.',
            },
          },
        ],
      },
      {
        heading: '3. From Calories to Grams: Read the Label Like a Vet',
        blocks: [
          'Calorie targets are useless until converted to the food in your cupboard. Pet foods list energy as **kcal/kg (or kcal/cup)** — typical kibble runs 3,400–4,200 kcal/kg. A 20 kg neutered adult needing ~1,060 kcal/day eats roughly 280 g of a 3,800 kcal/kg kibble — and that is *total*, including everything else the dog eats that day.',
          'Weigh food with a kitchen scale, not a scoop: studies of owners using measuring cups find portions drift 20–80% from target. A $10 scale is the single highest-ROI purchase in canine weight management.',
        ],
      },
      {
        heading: '4. The 10% Treat Rule and the Body Condition Score',
        blocks: [
          'Treats, chews, table scraps, and training rewards together must stay under **10% of daily calories** — and they count *inside* the MER, not on top of it. A dental chew can run 60–90 kcal; five training treats at 8 kcal add 40. On a 1,060 kcal budget, that is already the entire treat allowance before dinner.',
          'Then verify the plan against the dog, not the spreadsheet: the **Body Condition Score** (1–9 scale) is the field instrument. Ribs palpable under a thin fat layer, visible waist from above, tucked abdomen from the side — that is a 4–5. If you cannot feel ribs without pressing, the MER factor you chose was too generous; adjust intake down 10% and re-score in 3 weeks.',
        ],
      },
      {
        heading: '5. Age Is a Feeding Variable: The Human-Years Myth',
        blocks: [
          'The "multiply by 7" rule fails because dogs mature fast early and slow later: a 1-year-old dog is roughly 15 in human years; year 2 adds about 9; each year after adds 4–5. What matters for feeding is the *life stage* that mapping exposes — the puppy multiplier (3.0×) ends around 12 months (18–24 for giant breeds), and the senior factor kicks in around 7+ (as early as 5–6 for giant breeds), as activity and lean mass decline.',
          'Feeding the same cup from age 2 to age 12 is why middle-aged dogs drift overweight: the factor moved and the bowl didn\u2019t.',
          {
            card: {
              title: 'Dog Age Calculator',
              href: '/tools/dog-age-calculator/',
              desc: 'Size-aware human-year mapping with life-stage flags — know when the puppy factor ends and the senior adjustment begins.',
            },
          },
        ],
      },
      {
        heading: 'The Monthly Weigh-In Protocol',
        blocks: [
          { list: [
            'Compute **RER → MER** with the right life-stage factor; log the target.',
            'Convert to **grams of your actual food** from its kcal/kg label; weigh every meal.',
            'Cap treats+chews at **10% inside** the budget, not on top.',
            'Weigh the dog monthly; adjust ±10% on any sustained trend — wait 3 weeks before judging a change.',
            'Re-run the factors at every life-stage transition (spay/neuter, 12 months, ~7 years).',
          ] },
          'Any unexplained weight change on stable intake, or a BCS drifting outside 4–5/9, earns a vet visit — the math guides feeding, it does not diagnose.',
        ],
      },
    ],
  },
  zh: {
    lead: '狗粮袋上的喂食建议是按"未绝育、高活动、年轻犬"写的——而多数宠物犬三者皆非。兽医界的 RER/MER 框架给出真实数字,10% 零食规则则让你诚实面对热量藏在哪里。',
    sections: [
      {
        heading: '1. RER:每一碗饭的基线',
        blocks: [
          '**静息能量需求(RER)**是狗在舒适室温下完全静止时消耗的热量——犬类版 BMR。公式是异速生长的,不是线性的:代谢随体重的 3/4 次幂缩放,所以 40 kg 的狗需要的远少于 20 kg 狗的两倍。',
          { code: CODE_RER },
          '这种非线性正是袋子上"每公斤喂多少"表格误导人的原因:它们假设一条直线穿过一条曲线。RER 是正确的起点——但它是*静息*数字,没有一只活狗是静息数字。',
        ],
      },
      {
        heading: '2. MER:决定一切的生命阶段乘数',
        blocks: [
          '**维持能量需求(MER)** = RER × 生命阶段系数——对应"你家狗真实是哪种狗"。差距极大:绝育成年犬 1.6×;未绝育 1.8×;4 月龄以下幼犬 **3.0×**;兽医监督减重期的狗只有 1.0×。',
          '两只体重相同的狗,合理热量需求可以相差 2–3 倍。"该喂多少?"在回答"*哪只*狗——年龄、绝育状态、活动量、体况"之前,没有答案。',
          {
            card: {
              title: '狗粮计算器',
              href: '/tools/dog-food-calculator/',
              desc: '用正确的生命阶段系数算 RER → MER,并按你家粮包装上的每杯或每 100 g 热量标注折算成每天该喂多少克。',
            },
          },
        ],
      },
      {
        heading: '3. 从热量到克数:像兽医一样读标签',
        blocks: [
          '热量目标在换算成你家柜子里的粮之前毫无用处。宠物粮标注能量为 **kcal/kg(或 kcal/杯)**——典型干粮 3,400–4,200 kcal/kg。一只 20 kg 绝育成年犬每天约需 1,060 kcal,折合 3,800 kcal/kg 的干粮约 280 g——而且是*全天总量*,包括当天吃的其他一切。',
          '用厨房秤称粮,不要用勺:用量杯喂食的主人在研究里份量偏差 20–80%。一把 $10 的秤是犬类体重管理里投资回报率最高的单品。',
        ],
      },
      {
        heading: '4. 10% 零食规则与体况评分',
        blocks: [
          '零食、磨牙棒、餐桌残渣、训练奖励合计必须低于每日热量的 **10%**——且计入 MER *之内*,不是之外。一根洁齿骨 60–90 kcal;5 粒 8 kcal 的训练零食又是 40。在 1,060 kcal 的预算里,晚饭前零食额度已经用完。',
          '然后对着狗验证计划,别对着表格验证:**体况评分(BCS,1–9 分)**才是现场仪器。薄脂肪层下可摸到肋骨、上方看有腰线、侧面看腹部收紧——这是 4–5 分。如果不用力压就摸不到肋骨,说明你选的 MER 系数太慷慨:摄入下调 10%,三周后重新评分。',
        ],
      },
      {
        heading: '5. 年龄是喂食变量:破除"乘 7"神话',
        blocks: [
          '"狗龄乘 7"失效的原因:狗早年成熟快、晚年放缓——1 岁狗约相当于人类 15 岁;第 2 年再加约 9;之后每年加 4–5。对喂食重要的是这种映射暴露的*生命阶段*:幼犬系数(3.0×)约 12 月龄结束(巨型犬 18–24 月),老年系数在 7 岁左右(巨型犬早至 5–6 岁)随活动量和瘦体重下降而启用。',
          '从 2 岁到 12 岁喂同一杯,正是中年犬悄悄发胖的原因:系数动了,碗没动。',
          {
            card: {
              title: '狗龄计算器',
              href: '/tools/dog-age-calculator/',
              desc: '按体型修正的人类年龄映射,带生命阶段标记——知道幼犬系数何时结束、老年调整何时开始。',
            },
          },
        ],
      },
      {
        heading: '每月称重协议',
        blocks: [
          { list: [
            '用正确的生命阶段系数算 **RER → MER**,记录目标值。',
            '按粮袋上的 kcal/kg 折算成**克数**,每餐用秤称。',
            '零食+磨牙棒封顶 **10%,计入预算之内**,不是之上。',
            '每月称重;任何持续趋势按 ±10% 调整——评估一次改动要等 3 周。',
            '每次生命阶段转换(绝育、12 月龄、约 7 岁)都重跑系数。',
          ] },
          '摄入稳定却出现不明体重变化,或 BCS 漂出 4–5/9 区间,就该去看兽医——数学指导喂食,不做诊断。',
        ],
      },
    ],
  },
  es: {
    lead: 'Las guías de los sacos de pienso están escritas para perros jóvenes, activos y sin esterilizar — y la mayoría de las mascotas no es ninguna de las tres. El marco veterinario RER/MER te da el número real, y la regla del 10 % de premios te obliga a ser honesto sobre dónde se esconden las calorías.',
    sections: [
      {
        heading: '1. RER: la base sobre la que se construye cada cuenco',
        blocks: [
          'El **Requerimiento Energético en Reposo (RER)** son las calorías que un perro quema en reposo en una sala termoneutra — el BMR canino. La fórmula es alométrica, no lineal: el metabolismo escala con el peso elevado a 3/4, así que un perro de 40 kg necesita mucho menos que el doble de uno de 20 kg.',
          { code: CODE_RER },
          'Esta no linealidad es la razón por la que las tablas «por kg» de los sacos engañan: asumen una línea recta sobre una relación curva. El RER es el punto de partida correcto — pero es un número *en reposo*, y ningún perro vivo es un número en reposo.',
        ],
      },
      {
        heading: '2. MER: el multiplicador por etapa vital que lo decide todo',
        blocks: [
          'El **Requerimiento Energético de Mantenimiento (MER)** multiplica el RER por un factor según el perro que tu perro realmente es. La dispersión es enorme: un adulto esterilizado necesita 1,6× RER; uno intacto 1,8×; un cachorro menor de 4 meses **3,0×**; un perro en plan de adelgazamiento supervisado solo 1,0×.',
          'Dos perros de idéntico peso pueden diferir 2–3× en necesidades calóricas legítimas. «¿Cuánto debo darle?» no tiene respuesta hasta que respondas: ¿*qué* perro — edad, esterilización, actividad, condición corporal?',
          {
            card: {
              title: 'Calculadora de comida para perros',
              href: '/tools/dog-food-calculator/',
              desc: 'RER → MER con el factor de etapa correcto, convertido a gramos de tu pienso según la etiqueta (por taza o por 100 g).',
            },
          },
        ],
      },
      {
        heading: '3. De calorías a gramos: lee la etiqueta como un veterinario',
        blocks: [
          'Los objetivos calóricos no sirven hasta convertirlos al pienso de tu armario. Los alimentos declaran energía en **kcal/kg (o kcal/taza)** — el pienso típico anda entre 3 400–4 200 kcal/kg. Un adulto esterilizado de 20 kg que necesita ~1 060 kcal/día come unos 280 g de un pienso de 3 800 kcal/kg — y eso es el *total*, incluyendo todo lo demás que coma ese día.',
          'Pesa la comida con báscula de cocina, no con cacito: los estudios de dueños con tazas medidoras encuentran desviaciones del 20–80 % respecto al objetivo. Una báscula de $10 es la compra con mayor ROI del control de peso canino.',
        ],
      },
      {
        heading: '4. La regla del 10 % de premios y la condición corporal',
        blocks: [
          'Premios, snacks dentales, restos de mesa y recompensas de adiestramiento juntos deben quedar por debajo del **10 % de las calorías diarias** — y cuentan *dentro* del MER, no encima. Un snack dental puede tener 60–90 kcal; cinco premios de entrenamiento de 8 kcal suman 40. Con un presupuesto de 1 060 kcal, esa es toda la ración de premios antes de la cena.',
          'Luego verifica el plan contra el perro, no contra la hoja de cálculo: la **Condición Corporal (BCS, escala 1–9)** es el instrumento de campo. Costillas palpables bajo una fina capa de grasa, cintura visible desde arriba, abdomen recogido de lado — eso es un 4–5. Si no palpas costillas sin presionar, el factor MER elegido fue demasiado generoso: baja la ingesta un 10 % y repite la evaluación en 3 semanas.',
        ],
      },
      {
        heading: '5. La edad es una variable de alimentación: el mito de los años humanos',
        blocks: [
          'La regla del «multiplica por 7» falla porque los perros maduran rápido al principio y se frenan después: un perro de 1 año equivale a unos 15 humanos; el año 2 suma ~9; cada año posterior suma 4–5. Lo que importa para alimentar es la *etapa vital* que revela ese mapeo — el factor de cachorro (3,0×) termina hacia los 12 meses (18–24 en razas gigantes) y el factor senior entra hacia los 7+ (desde los 5–6 en razas gigantes), cuando bajan actividad y masa magra.',
          'Dar el mismo cacito de los 2 a los 12 años es por lo que los perros de mediana edad engordan sin ruido: el factor se movió y el cuenco no.',
          {
            card: {
              title: 'Calculadora de edad perruna',
              href: '/tools/dog-age-calculator/',
              desc: 'Mapeo a años humanos consciente del tamaño, con marcas de etapa vital — sabe cuándo acaba el factor cachorro y cuándo empieza el ajuste senior.',
            },
          },
        ],
      },
      {
        heading: 'El protocolo de pesaje mensual',
        blocks: [
          { list: [
            'Calcula **RER → MER** con el factor de etapa correcto; anota el objetivo.',
            'Convierte a **gramos de tu pienso real** según sus kcal/kg; pesa cada comida.',
            'Limita premios y snacks al **10 % dentro** del presupuesto, no encima.',
            'Pesa al perro cada mes; ajusta ±10 % ante cualquier tendencia sostenida — espera 3 semanas antes de juzgar un cambio.',
            'Reejecuta los factores en cada transición de etapa (esterilización, 12 meses, ~7 años).',
          ] },
          'Cualquier cambio de peso sin explicación con ingesta estable, o un BCS que salga del 4–5/9, merece visita al veterinario — la matemática guía la alimentación, no diagnostica.',
        ],
      },
    ],
  },
  de: {
    lead: 'Die Fütterungsempfehlungen auf Futtersäcken sind für intakte, aktive, junge Hunde geschrieben — und die meisten Haushunde sind nichts davon. Das veterinäre RER/MER-Framework liefert die echte Zahl, und die 10-%-Leckerli-Regel zwingt zur Ehrlichkeit, wo Kalorien sich verstecken.',
    sections: [
      {
        heading: '1. RER: Die Basis, auf der jeder Napf ruht',
        blocks: [
          'Der **Ruheenergiebedarf (RER)** sind die Kalorien, die ein Hund in Ruhe bei neutraler Raumtemperatur verbrennt — das canine BMR-Pendant. Die Formel ist allometrisch, nicht linear: Der Stoffwechsel skaliert mit dem Körpergewicht hoch 3/4, also braucht ein 40-kg-Hund weit weniger als das Doppelte eines 20-kg-Hundes.',
          { code: CODE_RER },
          'Diese Nichtlinearität ist der Grund, warum „pro-kg"-Tabellen auf Säcken in die Irre führen: Sie legen eine Gerade über eine Kurve. Der RER ist der korrekte Startpunkt — aber er ist eine *Ruhe*-Zahl, und kein lebender Hund ist eine Ruhe-Zahl.',
        ],
      },
      {
        heading: '2. MER: Der Lebensstufen-Multiplikator, der alles entscheidet',
        blocks: [
          'Der **Erhaltungsenergiebedarf (MER)** multipliziert den RER mit einem Faktor für den Hund, der dein Hund wirklich ist. Die Spreizung ist enorm: Ein kastrierter Erwachsener braucht 1,6× RER; ein intakter 1,8×; ein Welpe unter 4 Monaten **3,0×**; ein Hund im tierärztlich begleiteten Abnehmplan nur 1,0×.',
          'Zwei Hunde gleichen Gewichts können legitim das 2–3-Fache an Kalorien brauchen. „Wie viel soll ich füttern?" hat keine Antwort, bevor du nicht beantwortest: *welcher* Hund — Alter, Kastrationsstatus, Aktivität, Körperkondition?',
          {
            card: {
              title: 'Hundefutter-Rechner',
              href: '/tools/dog-food-calculator/',
              desc: 'RER → MER mit dem korrekten Lebensstufen-Faktor, umgerechnet in Gramm deines konkreten Futters anhand der Angabe pro Tasse oder pro 100 g.',
            },
          },
        ],
      },
      {
        heading: '3. Von Kalorien zu Gramm: Lies das Etikett wie ein Tierarzt',
        blocks: [
          'Kalorienziele sind nutzlos, bis sie auf das Futter in deinem Schrank umgerechnet sind. Tiernahrung deklariert Energie als **kcal/kg (oder kcal/Tasse)** — typische Trockenfutter liegen bei 3 400–4 200 kcal/kg. Ein 20-kg-kastrierter Erwachsener mit ~1 060 kcal/Tag frisst grob 280 g eines 3 800-kcal/kg-Futters — und das ist die *Gesamtmenge*, inklusive allem anderen an diesem Tag.',
          'Wiege das Futter mit der Küchenwaage, nicht mit dem Messbecher: Studien mit Messbecher-Besitzern finden Abweichungen von 20–80 % vom Ziel. Eine $10-Waage ist der Kauf mit dem höchsten ROI im Gewichtsmanagement.',
        ],
      },
      {
        heading: '4. Die 10-%-Leckerli-Regel und der Body Condition Score',
        blocks: [
          'Leckerlis, Kauartikel, Tischreste und Trainingsbelohnungen müssen zusammen unter **10 % der Tageskalorien** bleiben — und sie zählen *innerhalb* des MER, nicht obendrauf. Ein Dentalsnack kann 60–90 kcal haben; fünf Trainingsleckerlis à 8 kcal addieren 40. Bei einem 1 060-kcal-Budget ist die Leckerli-Quote vor dem Abendessen schon aufgebraucht.',
          'Dann prüfe den Plan am Hund, nicht an der Tabelle: Der **Body Condition Score (1–9)** ist das Feldinstrument. Rippen unter dünner Fettschicht tastbar, Taille von oben sichtbar, Bauch von der Seite eingezogen — das ist 4–5. Fühlst du Rippen nur mit Druck, war der gewählte MER-Faktor zu großzügig: Fütterung um 10 % senken und in 3 Wochen neu bewerten.',
        ],
      },
      {
        heading: '5. Alter ist eine Fütterungsvariable: Der Menschenjahre-Mythos',
        blocks: [
          'Die „mal 7"-Regel scheitert, weil Hunde früh schnell reifen und später abbremsen: Ein 1-jähriger Hund entspricht grob 15 Menschenjahren; Jahr 2 addiert ~9; jedes weitere Jahr 4–5. Fütterungsrelevant ist die *Lebensstufe*, die diese Abbildung freilegt — der Welpenfaktor (3,0×) endet um 12 Monate (18–24 bei Riesenrassen), der Senior-Faktor greift ab ~7 (bei Riesenrassen schon ab 5–6), wenn Aktivität und Magermasse sinken.',
          'Von 2 bis 12 denselben Becher zu füttern ist der Grund, warum Hunde mittleren Alters lautlos zunehmen: Der Faktor hat sich bewegt, der Napf nicht.',
          {
            card: {
              title: 'Hundealter-Rechner',
              href: '/tools/dog-age-calculator/',
              desc: 'Größenbewusste Menschenjahre-Umrechnung mit Lebensstufen-Markern — erkenne, wann der Welpenfaktor endet und die Senior-Anpassung beginnt.',
            },
          },
        ],
      },
      {
        heading: 'Das monatliche Wiege-Protokoll',
        blocks: [
          { list: [
            '**RER → MER** mit dem richtigen Lebensstufen-Faktor berechnen; Ziel notieren.',
            'In **Gramm deines echten Futters** umrechnen (kcal/kg-Angabe); jede Mahlzeit wiegen.',
            'Leckerlis+Kauartikel auf **10 % innerhalb** des Budgets deckeln, nicht darüber.',
            'Hund monatlich wiegen; bei anhaltendem Trend ±10 % justieren — eine Änderung erst nach 3 Wochen beurteilen.',
            'Bei jedem Stufenwechsel die Faktoren neu rechnen (Kastration, 12 Monate, ~7 Jahre).',
          ] },
          'Unerklärliche Gewichtsänderung bei stabiler Fütterung oder ein BCS außerhalb 4–5/9 verdient den Tierarzt — die Mathematik steuert die Fütterung, sie diagnostiziert nicht.',
        ],
      },
    ],
  },
}
