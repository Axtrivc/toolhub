/**
 * 《The Science of Human Metabolism: Calculating BMR, TDEE, Caloric Deficits, and 16:8 Fasting》
 * Pillar 集群 #6(代谢健康,2026-09-05)。
 * 内链:intermittent-fasting-calculator / tdee-calculator / bmr-calculator / calorie-calculator。
 */

import type { LocalizedArticle } from './blog-articles'

const CODE_MIFFLIN = `// Mifflin-St Jeor (1990) — the equation dietitians actually use
Men:   BMR = 10*kg + 6.25*cm - 5*age + 5
Women: BMR = 10*kg + 6.25*cm - 5*age - 161
//
// TDEE = BMR * activity factor
//   sedentary 1.2 | light 1.375 | moderate 1.55 | very 1.725
//
// Deficit math: ~7,700 kcal per kg of fat
//   500 kcal/day deficit ≈ 0.45 kg per week`

export const metabolismGuideArticle: LocalizedArticle = {
  en: {
    lead: 'Weight change is not a morality play; it is an energy ledger with three entries — BMR, activity, and intake. Here is the equation set clinicians use, the honest math of deficits, and where 16:8 fasting actually helps (and where it does not).',
    sections: [
      {
        heading: '1. BMR: The Cost of Simply Being Alive',
        blocks: [
          'Your basal metabolic rate is the energy your body burns at complete rest — heart beating, brain thinking, cells repairing. It accounts for **60–75% of total daily burn** in sedentary adults, which is why "I barely eat and still gain" usually means the intake estimate is wrong, not the metabolism.',
          { code: CODE_MIFFLIN },
          'Mifflin-St Jeor outperforms the older Harris-Benedict equation in modern populations and remains the default in clinical dietetics. Note what drives it: **weight, height, age, sex** — no mystery variable. Two people of identical stats have BMRs within roughly ±10% of each other.',
          {
            card: {
              title: 'BMR Calculator',
              href: '/tools/bmr-calculator/',
              desc: 'Your basal metabolic rate via Mifflin-St Jeor — the floor number every calorie plan is built on.',
            },
          },
        ],
      },
      {
        heading: '2. TDEE: BMR Times the Life You Actually Live',
        blocks: [
          'Total daily energy expenditure multiplies BMR by an activity factor. The trap is self-flattery: most people with a desk job and a gym habit three times a week are **1.4–1.5, not 1.7**. Overestimating activity by one tier inflates your budget by 200–300 kcal/day — enough to erase a planned deficit entirely.',
          'A useful calibration: wearables and gym machines over-report burn by 15–30%. If the scale disagrees with your spreadsheet for three consecutive weeks, the activity factor — not your discipline — is the first suspect.',
          {
            card: {
              title: 'TDEE Calculator',
              href: '/tools/tdee-calculator/',
              desc: 'Maintenance calories from BMR plus honest activity — pick the tier that describes your average week, not your best one.',
            },
          },
        ],
      },
      {
        heading: '3. The Deficit Ledger: 7,700 kcal per Kilogram',
        blocks: [
          'Body fat stores roughly 7,700 kcal per kilogram, so a **500 kcal/day deficit predicts about 0.45 kg per week** of fat loss. The prediction decays honestly: as you lose weight, BMR drops (less body to run) and the same deficit shrinks — plateaus are arithmetic, not failure.',
          'Two guardrails keep the ledger healthy. Do not crash below BMR intake for extended periods — adherence collapses and lean mass follows. And protect muscle with **1.6–2.2 g of protein per kg of body weight** plus resistance training; weight lost without them is part fat, part engine.',
          {
            card: {
              title: 'Calorie Calculator',
              href: '/tools/calorie-calculator/',
              desc: 'Daily calorie targets for loss, maintenance, or gain from your TDEE — with the weekly rate the deficit implies.',
            },
          },
        ],
      },
      {
        heading: '4. 16:8 Fasting: A Scheduling Tool, Not a Metabolic Hack',
        blocks: [
          'Time-restricted eating compresses intake into a window — classically 8 hours eating, 16 fasting. Controlled trials consistently find it produces weight loss *equivalent to ordinary calorie restriction when calories match*. The mechanism is behavioral, not magical: a smaller window removes the late-evening grazing that quietly adds 300–500 kcal.',
          'Where 16:8 genuinely helps: appetite control (many people report lower hunger after a 1–2 week adaptation), schedule simplicity (no breakfast decision), and insulin-sensitivity improvements seen in early-time-restricted variants. Where it does not: it cannot outrun a surplus, and it is a poor fit for pregnant people, those with a history of disordered eating, or athletes fueling two-a-days.',
          {
            card: {
              title: 'Intermittent Fasting Calculator',
              href: '/tools/intermittent-fasting-calculator/',
              desc: 'Plan your 16:8 (or 18:6 / 20:4) window around your day — eating window start, fast end, and the weekly schedule.',
            },
          },
        ],
      },
      {
        heading: '5. Adaptive Thermogenesis: Why Diets Fight Back',
        blocks: [
          'Sustained deficits trigger adaptation: NEAT (fidgeting, posture, incidental movement) drops, hunger hormones rise, and TDEE falls beyond what lost weight alone predicts — typically **5–15%**. The counter-strategy is boring and proven: modest deficits (10–25% below TDEE), adequate protein, resistance training, and patience measured in months.',
          'The practical loop: estimate TDEE → set deficit → track intake for 2–3 weeks → adjust by what the *scale trend* says, not what the app predicted. Your body keeps the real books.',
        ],
      },
      {
        heading: 'The First Week, Hour by Hour',
        blocks: [
          { list: [
            'Day 1: compute **BMR** and honest **TDEE** — write both down.',
            'Day 2: set a **500 kcal** deficit target; nothing more aggressive.',
            'Days 3–7: track everything you eat without changing it — measurement before management.',
            'End of week 1: compare actual intake to the plan; most gaps are beverages, cooking oil, and weekends.',
            'Weekly thereafter: weigh at the same time of day, judge only the 7-day trend, adjust ±100–200 kcal when the trend stalls for 2+ weeks.',
          ] },
        ],
      },
    ],
  },
  zh: {
    lead: '体重变化不是道德剧,而是一本只有三个科目的能量账:BMR、活动量、摄入量。本文给出临床营养师实际使用的方程组、缺口计算的诚实数学,以及 16:8 断食真正有用(和没用)的地方。',
    sections: [
      {
        heading: '1. BMR:仅仅是活着的成本',
        blocks: [
          '基础代谢率是身体在完全静止下的耗能——心跳、思考、细胞修复。在久坐成年人中它占总消耗的 **60–75%**。所以"我几乎不吃还长胖"通常意味着摄入估算错了,而不是代谢坏了。',
          { code: CODE_MIFFLIN },
          'Mifflin-St Jeor 方程在现代人群中优于老版 Harris-Benedict,至今是临床营养学的默认。注意它的驱动变量:**体重、身高、年龄、性别**——没有神秘变量。参数相同的两个人,BMR 相差通常在 ±10% 以内。',
          {
            card: {
              title: 'BMR 计算器',
              href: '/tools/bmr-calculator/',
              desc: '用 Mifflin-St Jeor 算你的基础代谢——一切热量计划的地基数字。',
            },
          },
        ],
      },
      {
        heading: '2. TDEE:BMR 乘以你真实过的生活',
        blocks: [
          '每日总消耗 = BMR × 活动系数。陷阱在于自我美化:多数坐班、每周三次健身的人实际是 **1.4–1.5,不是 1.7**。活动量高估一档,每日预算虚增 200–300 kcal——足以把整个计划缺口清零。',
          '一个校准方法:手环和健身器械普遍高估消耗 15–30%。如果体重秤连续三周与你的表格打架,第一嫌疑人是活动系数,不是你的自律。',
          {
            card: {
              title: 'TDEE 计算器',
              href: '/tools/tdee-calculator/',
              desc: '由 BMR + 诚实活动量得出维持热量——选描述你平均一周的那档,而不是最好的一周。',
            },
          },
        ],
      },
      {
        heading: '3. 缺口账簿:每公斤脂肪 7,700 kcal',
        blocks: [
          '体脂大约每公斤储存 7,700 kcal,所以 **500 kcal/天的缺口,预计每周减脂约 0.45 kg**。预测会诚实地衰减:体重下降后 BMR 跟着降(要供养的身体变小了),同样的缺口逐渐缩小——平台期是算术,不是失败。',
          '两条护栏保护账本健康:不要长期把摄入压到 BMR 以下——依从性会崩,瘦体重跟着走。用**每公斤体重 1.6–2.2 g 蛋白质**加抗阻训练保住肌肉;没有它们,减掉的重量一半是脂肪,一半是发动机。',
          {
            card: {
              title: '热量计算器',
              href: '/tools/calorie-calculator/',
              desc: '由你的 TDEE 得出减脂/维持/增肌的每日热量目标——含缺口对应的每周速度。',
            },
          },
        ],
      },
      {
        heading: '4. 16:8 断食:排程工具,不是代谢外挂',
        blocks: [
          '限时进食把摄入压缩进一个窗口——经典为 8 小时进食、16 小时断食。对照试验的一致结论是:在热量相等时,它的减重效果*与普通热量限制相当*。机制是行为层面的,不是魔法:窗口变小,深夜顺手多吃的 300–500 kcal 被物理移除。',
          '16:8 真正有帮助的地方:食欲控制(多数人在 1–2 周适应后报告饥饿感下降)、日程简化(少了早餐决策)、以及早窗口变体中观察到的胰岛素敏感性改善。它做不到的地方:跑不赢热量盈余;也不适合孕期人群、有进食障碍史者,或一天两练的运动员。',
          {
            card: {
              title: '间歇性断食计算器',
              href: '/tools/intermittent-fasting-calculator/',
              desc: '围绕你的一天规划 16:8(或 18:6 / 20:4)窗口——进食开始、断食结束与每周排程。',
            },
          },
        ],
      },
      {
        heading: '5. 适应性产热:为什么节食会反击',
        blocks: [
          '持续缺口会触发适应:NEAT(抖腿、站姿、零碎动作)下降,饥饿激素上升,TDEE 下降幅度超出体重下降本身能解释的范围——典型 **5–15%**。反制策略无聊但被反复验证:温和缺口(TDEE 之下 10–25%)、足量蛋白、抗阻训练、以月为单位的耐心。',
          '实操闭环:估 TDEE → 定缺口 → 记录摄入 2–3 周 → 按*体重趋势*而不是 App 预测来微调。你的身体才握着真账本。',
        ],
      },
      {
        heading: '第一周,逐小时执行',
        blocks: [
          { list: [
            '第 1 天:算 **BMR** 与诚实的 **TDEE**——都写下来。',
            '第 2 天:定 **500 kcal** 缺口目标,不再激进。',
            '第 3–7 天:照常吃,但全部记录——先测量,再管理。',
            '第 1 周末:对比实际摄入与计划;多数缺口藏在饮料、食用油和周末里。',
            '之后每周:固定时间称重,只看 7 天趋势;趋势停滞 2 周以上才调 ±100–200 kcal。',
          ] },
        ],
      },
    ],
  },
  es: {
    lead: 'El cambio de peso no es una obra de moralidad; es un libro contable de energía con tres apuntes: BMR, actividad e ingesta. Aquí está el juego de ecuaciones que usan los clínicos, la matemática honesta del déficit y dónde ayuda de verdad el ayuno 16:8 (y dónde no).',
    sections: [
      {
        heading: '1. BMR: el coste de simplemente estar vivo',
        blocks: [
          'Tu tasa metabólica basal es la energía que el cuerpo quema en reposo total — corazón latiendo, cerebro pensando, células reparando. Supone el **60–75 % del gasto diario** en adultos sedentarios; por eso «apenas como y aun así engordo» suele significar que la estimación de ingesta falla, no el metabolismo.',
          { code: CODE_MIFFLIN },
          'Mifflin-St Jeor supera a la antigua Harris-Benedict en poblaciones modernas y sigue siendo la referencia clínica. Fíjate en lo que la gobierna: **peso, altura, edad, sexo** — sin variable misteriosa. Dos personas con las mismas cifras tienen BMR dentro de un ±10 %.',
          {
            card: {
              title: 'Calculadora de BMR',
              href: '/tools/bmr-calculator/',
              desc: 'Tu tasa metabólica basal según Mifflin-St Jeor — la cifra base de todo plan calórico.',
            },
          },
        ],
      },
      {
        heading: '2. TDEE: BMR por la vida que de verdad vives',
        blocks: [
          'El gasto energético diario total multiplica el BMR por un factor de actividad. La trampa es el auto-halago: la mayoría con trabajo de oficina y gimnasio tres veces por semana está en **1,4–1,5, no en 1,7**. Sobreestimar un escalón infla tu presupuesto en 200–300 kcal/día — suficiente para borrar entero el déficit planeado.',
          'Una calibración útil: pulseras y máquinas de gimnasio sobreestiman el gasto un 15–30 %. Si la báscula discrepa de tu hoja de cálculo tres semanas seguidas, el primer sospechoso es el factor de actividad, no tu disciplina.',
          {
            card: {
              title: 'Calculadora de TDEE',
              href: '/tools/tdee-calculator/',
              desc: 'Calorías de mantenimiento desde el BMR y una actividad honesta — elige el nivel que describe tu semana media, no tu mejor semana.',
            },
          },
        ],
      },
      {
        heading: '3. El libro del déficit: 7 700 kcal por kilogramo',
        blocks: [
          'La grasa corporal almacena unas 7 700 kcal por kilo, así que un **déficit de 500 kcal/día predice ~0,45 kg de pérdida semanal**. La predicción decae con honestidad: al perder peso, el BMR baja (menos cuerpo que mantener) y el mismo déficit se encoge — las mesetas son aritmética, no fracaso.',
          'Dos barandillas mantienen sano el libro: no caigas por debajo del BMR durante periodos largos — la adherencia colapsa y la masa magra la sigue. Y protege el músculo con **1,6–2,2 g de proteína por kg** más entrenamiento de fuerza; el peso perdido sin ellos es parte grasa, parte motor.',
          {
            card: {
              title: 'Calculadora de calorías',
              href: '/tools/calorie-calculator/',
              desc: 'Objetivos diarios para perder, mantener o ganar desde tu TDEE — con el ritmo semanal que implica el déficit.',
            },
          },
        ],
      },
      {
        heading: '4. El ayuno 16:8: una herramienta de agenda, no un truco metabólico',
        blocks: [
          'La alimentación con ventana comprime la ingesta — clásicamente 8 horas comiendo, 16 ayunando. Los ensayos controlados encuentran de forma consistente una pérdida *equivalente a la restricción calórica ordinaria cuando las calorías se igualan*. El mecanismo es conductual, no mágico: una ventana menor elimina el picoteo nocturno que suma 300–500 kcal sin hacer ruido.',
          'Dónde ayuda de verdad el 16:8: control del apetito (mucha gente reporta menos hambre tras 1–2 semanas de adaptación), simplicidad de agenda (adiós decisión del desayuno) y mejoras de sensibilidad a la insulina en variantes con ventana temprana. Dónde no: no puede con un superávit, y es mal encaje para embarazadas, personas con historia de TCA o atletas con dobles sesiones.',
          {
            card: {
              title: 'Calculadora de ayuno intermitente',
              href: '/tools/intermittent-fasting-calculator/',
              desc: 'Planifica tu ventana 16:8 (o 18:6 / 20:4) alrededor de tu día — inicio de comidas, fin del ayuno y horario semanal.',
            },
          },
        ],
      },
      {
        heading: '5. Termogénesis adaptativa: por qué las dietas contraatacan',
        blocks: [
          'Los déficits sostenidos disparan adaptación: cae el NEAT (movimientos incidentales, postura), suben las hormonas del hambre y el TDEE cae más de lo que predice solo la pérdida de peso — típicamente **5–15 %**. La contraestrategia es aburrida y probada: déficits modestos (10–25 % bajo el TDEE), proteína suficiente, fuerza y paciencia medida en meses.',
          'El bucle práctico: estima TDEE → fija el déficit → registra la ingesta 2–3 semanas → ajusta según lo que diga la *tendencia de la báscula*, no lo que predijo la app. Tu cuerpo lleva la contabilidad real.',
        ],
      },
      {
        heading: 'La primera semana, hora a hora',
        blocks: [
          { list: [
            'Día 1: calcula tu **BMR** y tu **TDEE** honesto — anótalos.',
            'Día 2: fija un déficit de **500 kcal**; nada más agresivo.',
            'Días 3–7: registra todo lo que comes sin cambiarlo — medir antes que gestionar.',
            'Fin de la semana 1: compara la ingesta real con el plan; la mayoría de fugas son bebidas, aceite de cocina y fines de semana.',
            'Cada semana: pésate a la misma hora, juzga solo la tendencia de 7 días, ajusta ±100–200 kcal si la tendencia se estanca 2+ semanas.',
          ] },
        ],
      },
    ],
  },
  de: {
    lead: 'Gewichtsveränderung ist kein Moralstück, sondern ein Energiekonto mit drei Positionen — BMR, Aktivität und Zufuhr. Hier der Gleichungssatz der Kliniker, die ehrliche Defizit-Mathematik und wo 16:8-Fasten wirklich hilft (und wo nicht).',
    sections: [
      {
        heading: '1. BMR: Die Kosten des bloßen Lebendigseins',
        blocks: [
          'Dein Grundumsatz ist die Energie, die der Körper in völliger Ruhe verbrennt — Herzschlag, Denken, Zellreparatur. Er macht **60–75 % des Tagesverbrauchs** bei sitzenden Erwachsenen aus. „Ich esse kaum und nehme trotzdem zu" heißt daher meist: Die Zufuhr-Schätzung ist falsch, nicht der Stoffwechsel.',
          { code: CODE_MIFFLIN },
          'Mifflin-St Jeor schlägt die ältere Harris-Benedict-Formel in modernen Populationen und bleibt der klinische Standard. Beachte die Treiber: **Gewicht, Größe, Alter, Geschlecht** — keine mysteriöse Variable. Zwei Menschen mit identischen Werten liegen beim BMR typisch innerhalb von ±10 %.',
          {
            card: {
              title: 'BMR-Rechner',
              href: '/tools/bmr-calculator/',
              desc: 'Dein Grundumsatz nach Mifflin-St Jeor — die Fundament-Zahl jedes Kalorienplans.',
            },
          },
        ],
      },
      {
        heading: '2. TDEE: BMR mal dem Leben, das du wirklich führst',
        blocks: [
          'Der Gesamtumsatz multipliziert den BMR mit einem Aktivitätsfaktor. Die Falle ist Selbstschmeichelei: Wer am Schreibtisch sitzt und dreimal pro Woche trainiert, liegt bei **1,4–1,5, nicht 1,7**. Eine Stufe zu hoch geschätzt bläht das Budget um 200–300 kcal/Tag — genug, um ein geplantes Defizit komplett zu löschen.',
          'Eine brauchbare Kalibrierung: Wearables und Gym-Geräte übermelden den Verbrauch um 15–30 %. Widerspricht die Waage drei Wochen in Folge deiner Tabelle, ist der Aktivitätsfaktor der erste Verdächtige — nicht deine Disziplin.',
          {
            card: {
              title: 'TDEE-Rechner',
              href: '/tools/tdee-calculator/',
              desc: 'Erhaltungskalorien aus BMR plus ehrlicher Aktivität — wähle die Stufe deiner durchschnittlichen Woche, nicht deiner besten.',
            },
          },
        ],
      },
      {
        heading: '3. Das Defizit-Konto: 7 700 kcal pro Kilogramm',
        blocks: [
          'Körperfett speichert grob 7 700 kcal pro Kilogramm — ein **Defizit von 500 kcal/Tag prognostiziert etwa 0,45 kg Fettverlust pro Woche**. Die Prognose altert ehrlich: Mit sinkendem Gewicht sinkt der BMR (weniger Körper zu versorgen) und dasselbe Defizit schrumpft — Plateaus sind Arithmetik, kein Versagen.',
          'Zwei Leitplanken halten das Konto gesund: Nicht dauerhaft unter BMR-Zufuhr fallen — die Adhärenz kollabiert und die Magermasse folgt. Und Muskeln schützen mit **1,6–2,2 g Protein pro kg Körpergewicht** plus Krafttraining; ohne sie ist verlorenes Gewicht zur Hälfte Fett, zur Hälfte Motor.',
          {
            card: {
              title: 'Kalorienrechner',
              href: '/tools/calorie-calculator/',
              desc: 'Tagesziele für Abnahme, Erhalt oder Aufbau aus deinem TDEE — inklusive der Wochenrate, die das Defizit impliziert.',
            },
          },
        ],
      },
      {
        heading: '4. 16:8-Fasten: Ein Terminplan-Werkzeug, kein Stoffwechsel-Hack',
        blocks: [
          'Time-Restricted Eating komprimiert die Zufuhr in ein Fenster — klassisch 8 Stunden essen, 16 fasten. Kontrollierte Studien finden konsistent: Bei gleichen Kalorien entspricht der Verlust *dem gewöhnlicher Kalorienrestriktion*. Der Mechanismus ist verhaltensbasiert, nicht magisch: Ein kleineres Fenster entfernt das spätabendliche Grazing, das leise 300–500 kcal addiert.',
          'Wo 16:8 wirklich hilft: Appetitkontrolle (viele berichten nach 1–2 Wochen Adaption weniger Hunger), Plan-Einfachheit (keine Frühstücksentscheidung) und bessere Insulinsensitivität bei Früh-Fenster-Varianten. Wo nicht: Es überrennt keinen Überschuss und passt schlecht zu Schwangerschaft, Essstörungs-Anamnese oder Zwei-Einheiten-Training.',
          {
            card: {
              title: 'Intervallfasten-Rechner',
              href: '/tools/intermittent-fasting-calculator/',
              desc: 'Plane dein 16:8- (oder 18:6- / 20:4-) Fenster um deinen Tag — Essensbeginn, Fastenende und Wochenplan.',
            },
          },
        ],
      },
      {
        heading: '5. Adaptive Thermogenese: Warum Diäten zurückschlagen',
        blocks: [
          'Anhaltende Defizite lösen Adaption aus: NEAT (Zappeln, Haltung, Alltagsbewegung) fällt, Hungerhormone steigen, und der TDEE sinkt über das hinaus, was der Gewichtsverlust allein erklärt — typisch **5–15 %**. Die Gegenstrategie ist langweilig und bewiesen: moderate Defizite (10–25 % unter TDEE), ausreichend Protein, Krafttraining und Geduld in Monaten.',
          'Die praktische Schleife: TDEE schätzen → Defizit setzen → 2–3 Wochen Zufuhr tracken → anpassen nach dem *Waagen-Trend*, nicht nach der App-Prognose. Dein Körper führt die wahren Bücher.',
        ],
      },
      {
        heading: 'Die erste Woche, Stunde für Stunde',
        blocks: [
          { list: [
            'Tag 1: **BMR** und ehrlichen **TDEE** berechnen — beides notieren.',
            'Tag 2: Defizitziel von **500 kcal** setzen; nichts Aggressiveres.',
            'Tage 3–7: Alles Essen tracken, ohne es zu ändern — erst messen, dann steuern.',
            'Ende Woche 1: Ist-Zufuhr mit dem Plan vergleichen; die meisten Lücken stecken in Getränken, Öl und Wochenenden.',
            'Danach wöchentlich: zur gleichen Tageszeit wiegen, nur den 7-Tage-Trend beurteilen, bei 2+ Wochen Stillstand ±100–200 kcal justieren.',
          ] },
        ],
      },
    ],
  },
}
