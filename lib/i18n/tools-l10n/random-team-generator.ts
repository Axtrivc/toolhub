/**
 * random-team-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(随机分组工具)。
 */
import type { ToolL10n } from '../tool-l10n'

export const RandomTeamGeneratorL10n: ToolL10n = {
  zh: {
    useCases: [
      '团建或课堂随机分组:名单贴进来,一键生成人数均衡的小组,杜绝"抱团"',
      '球赛分队:20 人分 4 队,轮流发牌式分配保证各队人数最多差一人',
      '黑客马拉松开场随机成队——先输入名字的人不会有任何位置优势',
      '分组结果不满意点"重新打乱",每次洗牌都是加密级随机的全新结果',
    ],
    faqs: [
      { q: '分组真的公平吗?', a: '公平。算法是 Fisher-Yates 洗牌 + 轮流发牌:先用加密级随机数(crypto.getRandomValues)把名单彻底洗乱——数学上每种排列概率完全相等——再依次把第 1、2、3… 人轮流发给各队。不存在任何位置或顺序偏好。' },
      { q: '人数不能被队数整除怎么办?', a: '轮流发牌天然处理余数:23 人分 4 队,前三队 6 人、最后一队 5 人,各队人数至多少一人,不会出现一队独大的情况。' },
      { q: '名单顺序会影响结果吗?', a: '不会。洗牌发生在分牌之前,输入顺序在洗牌后被完全打乱——第一个输入的名字和最后一个进入各队的概率完全相同。' },
      { q: '名单会被保存或上传吗?', a: '不会。整个分组过程在浏览器本地完成,刷新页面名单即消失。涉及真实姓名或工号的内部名单可以放心使用。' },
    ],
    ui: {
      'generate': '生成分组',
      'nNames': '已输入 {n} 人',
      'namesLabel': '名单 — 每行一个',
      'note': '👥 加密级随机的 Fisher-Yates 洗牌 + 轮流发牌保证各队人数至多差一。先输入的名字没有任何优势。',
      'reshuffle': '重新打乱',
      'teamN': '第 {n} 队',
      'teamsLabel': '队伍数量',
    },
  },
  es: {
    useCases: [
      'Grupos aleatorios para team building o clase: pega la lista y genera equipos equilibrados de un clic, sin «grupitos»',
      'Dividir un partido: 20 personas en 4 equipos con reparto por turnos — como máximo difieren en uno',
      'Formación aleatoria al inicio de un hackathon: quien escribió su nombre primero no tiene ventaja alguna',
      '¿No convence el resultado? «Rebarajar» genera una combinación nueva con aleatoriedad criptográfica',
    ],
    faqs: [
      { q: '¿El reparto es realmente justo?', a: 'Sí. El algoritmo es barajado Fisher-Yates + reparto por turnos: primero mezcla la lista con números aleatorios criptográficos (crypto.getRandomValues) — todas las permutaciones son igual de probables — y luego reparte la persona 1, 2, 3… por turnos entre los equipos. No existe sesgo de posición ni de orden.' },
      { q: '¿Qué pasa si el número no es divisible?', a: 'El reparto por turnos gestiona el resto de forma natural: 23 personas en 4 equipos dan tres equipos de 6 y uno de 5 — como mucho difieren en una persona, nunca un equipo desproporcionado.' },
      { q: '¿Influye el orden de la lista?', a: 'No. El barajado ocurre antes del reparto y destruye por completo el orden de entrada: el primer nombre escrito tiene exactamente la misma probabilidad de caer en cualquier equipo que el último.' },
      { q: '¿Se guarda o sube la lista?', a: 'No. Todo el reparto ocurre localmente en el navegador y la lista desaparece al recargar. Listas internas con nombres reales o IDs de empleado pueden usarse con tranquilidad.' },
    ],
    ui: {
      'generate': 'Generar equipos',
      'nNames': '{n} personas introducidas',
      'namesLabel': 'Nombres — uno por línea',
      'note': '👥 Barajado Fisher-Yates con aleatoriedad criptográfica y reparto por turnos: los equipos difieren a lo sumo en uno. Los primeros nombres no llevan ventaja.',
      'reshuffle': 'Rebarajar',
      'teamN': 'Equipo {n}',
      'teamsLabel': 'Número de equipos',
    },
  },
  de: {
    useCases: [
      'Zufallsgruppen fürs Teambuilding oder den Unterricht: Liste einfügen, mit einem Klick ausgewogene Teams ohne „Cliquen“',
      'Sport-Teams bilden: 20 Leute auf 4 Teams per Round-Robin — der Unterschied beträgt höchstens eine Person',
      'Zufällige Teams zu Hackathon-Beginn: Wer zuerst eingetippt wurde, hat keinerlei Vorteil',
      'Passt das Ergebnis nicht? „Neu mischen“ erzeugt jedes Mal eine kryptografisch frische Kombination',
    ],
    faqs: [
      { q: 'Ist die Verteilung wirklich fair?', a: 'Ja. Der Algorithmus ist Fisher-Yates-Shuffle + Round-Robin-Austeilen: Erst wird die Liste mit Krypto-Zufall (crypto.getRandomValues) durchgemischt — jede Permutation ist mathematisch gleich wahrscheinlich — dann werden Person 1, 2, 3 … reihum an die Teams verteilt. Es gibt keinen Positions- oder Reihenfolgen-Bias.' },
      { q: 'Was, wenn die Zahl nicht aufgeht?', a: 'Das Austeilen verarbeitet den Rest von Natur aus: 23 Personen in 4 Teams ergeben drei 6er- und ein 5er-Team — maximal ein Unterschied, nie ein überdimensioniertes Team.' },
      { q: 'Spielt die Reihenfolge der Namen eine Rolle?', a: 'Nein. Das Mischen passiert vor dem Verteilen und zerstört die Eingabereihenfolge vollständig — der zuerst eingegebene Name landet mit exakt derselben Wahrscheinlichkeit in jedem Team wie der letzte.' },
      { q: 'Wird die Liste gespeichert oder hochgeladen?', a: 'Nein. Alles läuft lokal im Browser, und nach einem Reload ist die Liste weg. Interne Listen mit echten Namen oder Personalnummern sind also unbedenklich.' },
    ],
    ui: {
      'generate': 'Teams erstellen',
      'nNames': '{n} Personen erfasst',
      'namesLabel': 'Namen — einer pro Zeile',
      'note': '👥 Fisher-Yates-Shuffle mit Krypto-Zufall, dann Round-Robin-Verteilung — Teams unterscheiden sich um höchstens einen. Zuerst eingegebene Namen haben keinen Vorteil.',
      'reshuffle': 'Neu mischen',
      'teamN': 'Team {n}',
      'teamsLabel': 'Anzahl Teams',
    },
  },
}
