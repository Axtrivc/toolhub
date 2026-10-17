/**
 * cat-age-calculator 本地化 bundle —— zh / es / de(2026-10 B7 宠物批次)
 * 覆盖: ui + faqs + useCases(client = CatAgeCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const CatAgeCalculatorL10n: ToolL10n = {
  zh: {
    useCases: ['把猫的实际年龄换算成人类等效年龄', '判断猫处于哪个生命阶段(幼猫到超级老年)', '理解为什么 ×7 换算法则对猫不适用', '为新猫评估年龄与照护需求'],
    faqs: [
      { q: '猫年龄怎么换算成人类年龄?', a: '第一年约等于人类 15 岁,第二年再加 9 岁(累计 24),之后每年加 4——所以 5 岁的猫大约相当于人类 36 岁。与狗不同,这条曲线基本不随品种体型变化。' },
      { q: '为什么 ×7 法则对猫是错的?', a: '它会把幼猫算得离谱地年轻(1 岁的猫已完全成熟,×7 只有"7 岁"),又把老年猫算得太老。15/24/+4 曲线才符合猫真实的成熟与衰老节奏。' },
      { q: '猫几岁算老年?', a: '大约 11 岁(约人类 60 岁)进入老年,15 岁以上算超级老年。室内猫活到 18-20 岁很常见——约人类 88-96 岁。' },
      { q: '户外猫老得更快吗?', a: '统计上是的——户外猫平均寿命只有 2-5 年(车祸、天敌、疾病),但衰老速度本身没变快,变的是风险。室内散养(有封网阳台)是寿命与丰富度的折中。' },
    ],
    ui: {
      'in.catAge': '猫的年龄',
      'out.humanAge': '人类等效年龄',
      'out.lifeStage': '生命阶段',
      'out.mythNote': '关于 ×7 法则',
      'stage.kitten': '幼猫',
      'stage.youngAdult': '青年成年',
      'stage.matureAdult': '壮年成年',
      'stage.senior': '老年',
      'stage.superSenior': '超级老年',
      'unit.humanYears': '人类岁',
      'myth': '×7 法则忽略了猫的成熟节奏',
      'errInvalidAge': '请输入 0-25 岁之间的年龄',
      'note': '🐱 1 岁的猫约等于人类 15 岁,2 岁对应 24 岁,之后每年加 4——与狗不同,曲线几乎不随品种变化。室内猫普遍能活到 15-20 岁(约人类 76-96 岁)。',
    },
  },
  es: {
    useCases: ['convertir la edad real de tu gato a años humanos', 'saber en qué etapa vital está (de gatito a súper senior)', 'entender por qué la regla del ×7 falla en gatos', 'estimar edad y cuidados de un gato recién adoptado'],
    faqs: [
      { q: '¿Cómo se convierte la edad felina a humana?', a: 'El primer año equivale a unos 15 años humanos, el segundo suma 9 más (24 en total) y cada año posterior añade 4 — un gato de 5 años ronda los 36 años humanos. A diferencia de los perros, la curva apenas depende del tamaño de raza.' },
      { q: '¿Por qué falla la regla del ×7 en gatos?', a: 'Deja a los gatitos absurdamente jóvenes (un gato de 1 año ya es adulto; ×7 daría «7 años») y a los seniors demasiado viejos. La curva 15/24/+4 sigue el ritmo real de maduración y envejecimiento felino.' },
      { q: '¿Cuándo es un gato senior?', a: 'Hacia los 11 años (unos 60 humanos), y a partir de 15 se considera súper senior. Los gatos de interior llegan con frecuencia a 18-20 años — unos 88-96 años humanos.' },
      { q: '¿Los gatos de exterior envejecen más rápido?', a: 'Estadísticamente viven menos (2-5 años de media por tráfico, depredadores y enfermedades), aunque su envejecimiento no acelere: lo que cambia es el perfil de riesgo. El acceso seguro a un balcón enrejado es el punto medio.' },
    ],
    ui: {
      'in.catAge': 'Edad del gato',
      'out.humanAge': 'Edad humana equivalente',
      'out.lifeStage': 'Etapa vital',
      'out.mythNote': 'Sobre la regla ×7',
      'stage.kitten': 'Gatito',
      'stage.youngAdult': 'Adulto joven',
      'stage.matureAdult': 'Adulto maduro',
      'stage.senior': 'Senior',
      'stage.superSenior': 'Súper senior',
      'unit.humanYears': 'años humanos',
      'myth': 'La regla ×7 ignora el ritmo de maduración felina',
      'errInvalidAge': 'Introduce una edad entre 0 y 25 años',
      'note': '🐱 Un gato de 1 año equivale a unos 15 años humanos, 2 años a 24, y cada año extra suma 4 — a diferencia de los perros, la curva casi no varía por raza. Los gatos de interior suelen llegar a 15-20 años (76-96 años humanos).',
    },
  },
  de: {
    useCases: ['das echte Katzenalter in Menschenjahre umrechnen', 'die Lebensphase bestimmen (von Kitten bis Super-Senior)', 'verstehen, warum die ×7-Regel bei Katzen versagt', 'Alter und Pflegebedarf einer neuen Katze einschätzen'],
    faqs: [
      { q: 'Wie rechnet man Katzenalter in Menschenjahre um?', a: 'Das erste Jahr entspricht etwa 15 Menschenjahren, das zweite addiert 9 (24 gesamt), danach je Jahr 4 — eine 5-jährige Katze ist also rund 36 in Menschenjahren. Anders als bei Hunden hängt die Kurve kaum von der Rassengröße ab.' },
      { q: 'Warum stimmt die ×7-Regel bei Katzen nicht?', a: 'Sie macht Kitten absurd jung (eine 1-jährige Katze ist erwachsen, ×7 ergäbe „7 Jahre“) und Senioren zu alt. Die 15/24/+4-Kurve folgt dem echten Reifungs- und Alterungstempo von Katzen.' },
      { q: 'Ab wann ist eine Katze Senior?', a: 'Mit etwa 11 Jahren (rund 60 Menschenjahre); ab 15 gilt sie als Super-Senior. Wohnungskatzen erreichen häufig 18-20 Jahre — etwa 88-96 Menschenjahre.' },
      { q: 'Altern Freigänger schneller?', a: 'Statistisch leben sie kürzer (2-5 Jahre im Schnitt wegen Verkehr, Feinden und Krankheit), obwohl die Alterung selbst nicht schneller abläuft — das Risikoprofil ändert sich. Ein gesicherter Balkon ist der Kompromiss.' },
    ],
    ui: {
      'in.catAge': 'Alter der Katze',
      'out.humanAge': 'Entsprechendes Menschenalter',
      'out.lifeStage': 'Lebensphase',
      'out.mythNote': 'Zur ×7-Regel',
      'stage.kitten': 'Kitten',
      'stage.youngAdult': 'Junger Erwachsener',
      'stage.matureAdult': 'Erwachsen',
      'stage.senior': 'Senior',
      'stage.superSenior': 'Super-Senior',
      'unit.humanYears': 'Menschenjahre',
      'myth': 'Die ×7-Regel ignoriert das Reifungstempo der Katze',
      'errInvalidAge': 'Alter zwischen 0 und 25 Jahren eingeben',
      'note': '🐱 Eine 1-jährige Katze entspricht etwa 15 Menschenjahren, 2 Jahre den Wert 24, danach je Jahr +4 — anders als bei Hunden ist die Kurve kaum rassenabhängig. Wohnungskatzen werden oft 15-20 Jahre alt (76-96 Menschenjahre).',
    },
  },
}
