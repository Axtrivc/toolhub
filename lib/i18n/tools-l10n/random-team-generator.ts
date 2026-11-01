/**
 * random-team-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(随机分组工具)。
 */
import type { ToolL10n } from '../tool-l10n'

export const RandomTeamGeneratorL10n: ToolL10n = {

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
