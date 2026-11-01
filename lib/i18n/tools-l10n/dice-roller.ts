/**
 * dice-roller 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(纯随机,无公式)。
 */
import type { ToolL10n } from '../tool-l10n'

export const DiceRollerL10n: ToolL10n = {

  es: {
    useCases: [
      'Tirar ataques y salvaciones con d20 en partidas de D&D y generar atributos con 4d6 descartando el menor',
      'Sustituir los dados olvidados de la mesa: un 3d6 de una vez, con cada dado y el total a la vista para verificarlos',
      'Comprobar si un dado está viciado repitiendo: 200 tiradas de d6 y frecuencias que deben rondar 1/6',
      'En clase de probabilidad, comparar la distribución de 2d6 frente a 1d12 y ver el efecto de sumar dados',
    ],
    faqs: [
      {
        q: '¿Las tiradas son realmente aleatorias?',
        a: 'Sí. La herramienta usa crypto.getRandomValues() del navegador — la misma aleatoriedad criptográfica que protege claves, no el antiguo Math.random(). Cada dado se tira de forma independiente: un d20 tiene exactamente un 5 % por cara.',
      },
      {
        q: '¿Puedo tirar varios dados a la vez, como 3d6+2?',
        a: 'Sí. Elige el tipo (d4, d6, d8, d10, d12, d20 o d100) e indica cuántos dados. Ves el resultado individual de cada dado más el total, así el DJ o los jugadores pueden verificar cada tirada.',
      },
      {
        q: '¿Por qué repiten tanto los mismos números, está trucado?',
        a: 'El azar se agrupa: en 20 tiradas de un d6 es estadísticamente normal que un 4 salga tres veces. A partir de cientos de tiradas las frecuencias convergen; el historial solo conserva las tiradas más recientes, así que comprobar la convergencia exige llevar tú mismo la cuenta a lo largo de más tiradas.',
      },
      {
        q: '¿Funciona sin conexión y se guardan mis tiradas?',
        a: 'Es un lanzador 100 % en el navegador: funciona offline y no envía ni almacena nada — ideal para partidas presenciales donde el móvil no tiene cobertura. El historial vive solo en la página abierta.',
      },
    ],
    ui: {
      'clear': 'Borrar',
      'countLabel': 'n.º de dados',
      'history': 'Tiradas recientes',
      'note': '🎲 Las tiradas usan aleatoriedad criptográfica con muestreo de rechazo — sin sesgo de módulo. Máximo 20 dados por tirada.',
      'rollBtn': 'Lanzar {n}× d{s}',
    },
  },
  de: {
    useCases: [
      'Angriffs- und Rettungswürfe mit dem W20 bei D&D leiten, Attributswerte per 4W6 mit Streichen des Niedrigsten auswürfeln',
      'Vergessene Würfel am Tisch ersetzen: 3W6 auf einen Schlag, jedes Einzelergebnis und die Summe sichtbar für alle',
      'Die Fairness eines Würfels prüfen: 200 Würfe mit dem W6 in Folge, die Häufigkeiten sollten sich 1/6 nähern',
      'Im Matheunterricht die Verteilung von 2W6 gegen 1W12 vergleichen und den Zentralen Grenzwertsatz zeigen',
    ],
    faqs: [
      {
        q: 'Sind die Würfe wirklich zufällig?',
        a: 'Ja. Das Tool nutzt crypto.getRandomValues() des Browsers — denselben kryptografischen Zufall wie für sichere Schlüssel, nicht das ältere Math.random(). Jeder Würfel wird unabhängig geworfen; ein W20 hat exakt 5 % je Seite.',
      },
      {
        q: 'Kann ich mehrere Würfel gleichzeitig werfen, etwa 3W6+2?',
        a: 'Ja. Würfelart (W4, W6, W8, W10, W12, W20 oder W100) wählen und Anzahl einstellen. Du siehst jedes Einzelergebnis plus Summe, damit SL und Spieler jeden Wurf nachprüfen können.',
      },
      {
        q: 'Warum kommen manche Zahlen so oft — ist der Würfel gezinkt?',
        a: 'Zufall klumpt: Bei 20 Würfen mit einem W6 ist es statistisch völlig normal, wenn dieselbe Zahl dreimal erscheint. Erst über Hunderte Würfe gleichen sich die Häufigkeiten an — der Verlauf behält nur die letzten Würfe; die Angleichung siehst du nur, wenn du über mehr Würfe selbst mitzählst.',
      },
      {
        q: 'Brauche ich Internet, und wo landen die Ergebnisse?',
        a: 'Nein und nirgendwo: Es ist ein reiner Browser-Würfel ohne Server und ohne Speicherung — perfekt für Spieltage ohne Empfang. Der Verlauf existiert nur in der geöffneten Seite.',
      },
    ],
    ui: {
      'clear': 'Leeren',
      'countLabel': 'Anzahl Würfel',
      'history': 'Letzte Würfe',
      'note': '🎲 Die Würfe nutzen kryptografischen Zufall mit Rejection Sampling — kein Modulo-Bias. Maximal 20 Würfel pro Wurf.',
      'rollBtn': '{n}× d{s} werfen',
    },
  },
}
