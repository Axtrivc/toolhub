/**
 * wheel-spinner 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const WheelSpinnerL10n: ToolL10n = {

  es: {
    useCases: [
      'Orden de participación en clase: una docena de nombres con la misma probabilidad para todos',
      'Reparto de tareas domésticas: fregar, la basura y el paseo del perro los decide la rueda',
      'Elegir el restaurante del viernes entre una docena de candidatos, sin eternas discusiones',
      'Sorteo de premios: elimina al ganador y gira de nuevo para el segundo puesto',
    ],
    faqs: [
      { q: '¿Qué tan aleatorio es el giro?', a: 'La opción ganadora se sortea con aleatoriedad criptográfica antes de reproducir la animación: el giro es solo una revelación visual. Todas las opciones tienen la misma probabilidad, sin importar su posición en la rueda.' },
      { q: '¿Puedo quitar un nombre después de que gane?', a: 'Sí: tras cada giro puedes borrar al ganador y volver a girar con el resto, el flujo típico de sorteos y turnos de «a quién le toca». También puedes duplicar entradas para dar más peso a alguien.' },
      { q: '¿Cuántas entradas admite como máximo?', a: 'La rueda admite como máximo 12 opciones; si escribes más, las líneas extra se ignoran con un aviso. Con grupos grandes, divide en rondas o usa el generador aleatorio de equipos.' },
      { q: '¿Mi lista de nombres se guarda en algún sitio?', a: 'No. Todo funciona en tu navegador sin cuenta ni almacenamiento en servidor: cierras la pestaña y desaparece. Por eso es apto para el aula y para sorteos confidenciales entre empleados.' },
    ],
    ui: {
      'itemsHint': '{n} opciones en la rueda',
      'itemsOverflow': '{extra} líneas de más ignoradas — la rueda admite máx. 12',
      'itemsLabel': 'Opciones — una por línea (máx. 12)',
      'note': '🎡 El sector ganador se sortea con aleatoriedad criptográfica antes de que la rueda anime hacia él — movimiento bonito sobre selección justa.',
      'spin': 'Girar',
      'winnerLabel': 'Ganador',
      'wheelAlt': 'Rueda de premios',
    },
  },
  de: {
    useCases: [
      'Abfrage-Reihenfolge im Unterricht: ein Dutzend Schülernamen, für jeden dieselbe Chance',
      'Haushaltsaufgaben verteilen: Spülen, Müll rausbringen, Gassigehen — das Rad entscheidet',
      'Aus einem Dutzend Restaurantkandidaten das Freitagabend-Lokal ermitteln — ohne Diskussion',
      'Gewinnspiel: Gewinner aus dem Rad löschen und den zweiten Platz in einer weiteren Runde auslosen',
    ],
    faqs: [
      { q: 'Wie zufällig ist das Rad?', a: 'Der Gewinnereintrag wird vor der Animation mit kryptografischer Zufälligkeit gezogen — die Drehbewegung ist nur eine visuelle Enthüllung. Jeder Eintrag hat dieselbe Chance, unabhängig von seiner Position auf dem Rad.' },
      { q: 'Kann ich einen Namen nach dem Gewinn entfernen?', a: 'Ja — nach jedem Dreh den Gewinner löschen und mit den restlichen Einträgen weiterdrehen: genau der Ablauf für Verlosungen und «wer kommt als Nächstes»-Warteschlangen. Duplizierte Einträge erhöhen die Gewinnchance.' },
      { q: 'Wie viele Einträge sind maximal möglich?', a: 'Das Rad fasst höchstens 12 Einträge — weitere Zeilen werden mit einem Hinweis ignoriert. Bei großen Gruppen in Runden aufteilen oder den Zufalls-Team-Generator nutzen.' },
      { q: 'Wird meine Liste irgendwo gespeichert?', a: 'Nein. Alles läuft im Browser ohne Konto und ohne Serverspeicher — Tab schließen, Einträge weg. Dadurch ist es klassenzimmertauglich und passt zu vertraulichen Ziehungen wie Mitarbeiter-Verlosungen.' },
    ],
    ui: {
      'itemsHint': '{n} Optionen auf dem Rad',
      'itemsOverflow': '{extra} zusätzliche Zeilen ignoriert — das Rad fasst max. 12',
      'itemsLabel': 'Optionen — eine pro Zeile (max. 12)',
      'note': '🎡 Der Gewinnersektor wird kryptografisch gezogen, bevor das Rad dorthin animiert — schöne Bewegung über ehrlich fairer Auswahl.',
      'spin': 'Drehen',
      'winnerLabel': 'Gewinner',
      'wheelAlt': 'Glücksrad',
    },
  },
}
