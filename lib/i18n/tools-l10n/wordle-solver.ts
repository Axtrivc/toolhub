/**
 * wordle-solver 本地化 bundle —— zh / es / de
 * 覆盖:ui + useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const wordleSolverL10n: ToolL10n = {

  es: {
    ui: {
      'anagramEmpty': 'Escribe al menos 3 letras para encontrar palabras que puedas formar.',
      'anagramHint': 'Encuentra palabras del diccionario (hasta el número de letras que escribas) que se puedan formar solo con estas letras.',
      'anagramLabel': 'Letras disponibles (3–10)',
      'anagramMode': 'Modo anagrama',
      'anagramNoMatch': 'No se puede formar ninguna palabra con esas letras. Prueba a añadir más letras o pega palabras extra abajo.',
      'anagramPlaceholder': 'p. ej. least',
      'clear': 'Limpiar',
      'clickAnyWordToCopy': 'pulsa cualquier palabra para copiarla',
      'clickToCopy': 'Pulsa para copiar',
      'commonFirst': 'Primero las más comunes',
      'extraWordsLabel': 'Palabras extra (opcional — una por línea o separadas por espacios, se incorporan al diccionario de esta sesión)',
      'foundClickToCopy': '— pulsa cualquier palabra para copiarla',
      'inDictionary': '{n} palabras en el diccionario',
      'knownPositions': 'Posiciones conocidas (verde)',
      'letterPosition': 'Letra en la posición {n}',
      'matchingWordPlural': 'palabras coincidentes',
      'matchingWordSingular': 'palabra coincidente',
      'more': 'más',
      'mustContain': 'Debe contener (amarillo)',
      'mustNotContain': 'NO debe contener (gris)',
      'mustPlaceholder': 'p. ej. ar',
      'notPlaceholder': 'p. ej. xyz',
      'privacyIntro': '🔒 100% en el cliente — un diccionario de ',
      'privacyOutro': ' palabras se incluye con la página; nada se consulta online.',
      'solverEmpty': 'Introduce al menos una restricción arriba — una posición verde, letras que la palabra deba contener o letras a excluir — y las palabras aparecerán aquí.',
      'solverMode': 'Solucionador de Wordle',
      'solverNoMatch': 'Ninguna palabra cumple esas restricciones. Revisa que las letras grises no estén también marcadas en verde o amarillo.',
      'summaryConstraints': 'debe contener {m}|excluir {x}|verde {g}',
      'wordPlural': 'palabras',
      'wordSingular': 'palabra',
    },
    useCases: [
      'solucionador de Wordle por posición de letra',
      'buscador de palabras de 5 letras para Wordle',
      'ayudante de Wordle con verde, amarillo y gris',
      'buscador de anagramas para juegos de palabras',
    ],
    faqs: [
      {
        q: '¿Usa la lista oficial de respuestas de Wordle?',
        a: 'Usa una amplia lista de palabras en inglés integrada, dimensionada para cubrir respuestas de cinco letras estilo Wordle, así que las sugerencias encajan con el tipo de palabras que acepta el juego. Es una potente ayuda, aunque ninguna lista de terceros garantice reflejar el juego con exactitud todos los días futuros.',
      },
      {
        q: '¿Cómo se mapean las pistas verde, amarillo y gris a las entradas?',
        a: 'Las letras verdes (posición correcta) van en los campos de «posición conocida»; las amarillas (en la palabra, posición errónea) en la casilla de «debe contener»; las grises (no en la palabra) en «NO debe contener». El solucionador filtra el diccionario con las tres a la vez para acotar candidatos.',
      },
      {
        q: '¿Admite anagramas y resolución por patrón?',
        a: 'Sí. Además de los filtros estándar de pistas, puede casar patrones de anagrama y posiciones de letra conocidas, lo que ayuda cuando tienes letras revueltas o información parcial y quieres todas las palabras del diccionario que encajan.',
      },
      {
        q: '¿Por qué no conviene probar el primer candidato tal cual?',
        a: 'La lista se ordena con las más comunes primero (alfabético dentro de cada grupo), pero el valor de una jugada no es solo la frecuencia: cuando quedan varios candidatos, una palabra de sondeo con letras aún sin probar (aunque no sea candidata) suele acotar antes. Usa el solucionador como filtro, no como generador de respuestas.',
      },
    ],
  },
  de: {
    ui: {
      'anagramEmpty': 'Gib mindestens 3 Buchstaben ein, um Wörter zu finden, die sich daraus bilden lassen.',
      'anagramHint': 'Findet Wörterbuchwörter (bis zur Anzahl der eingegebenen Buchstaben), die nur aus diesen Buchstaben bildbar sind.',
      'anagramLabel': 'Verfügbare Buchstaben (3–10)',
      'anagramMode': 'Anagramm-Modus',
      'anagramNoMatch': 'Aus diesen Buchstaben lässt sich kein Wort bilden. Probier es mit mehr Buchstaben oder füge unten zusätzliche Wörter ein.',
      'anagramPlaceholder': 'z. B. least',
      'clear': 'Leeren',
      'clickAnyWordToCopy': 'klicke ein Wort zum Kopieren',
      'clickToCopy': 'Zum Kopieren klicken',
      'commonFirst': 'Häufigste zuerst',
      'extraWordsLabel': 'Zusätzliche Wörter (optional — eines pro Zeile oder leerzeichengetrennt, werden ins Wörterbuch dieser Sitzung aufgenommen)',
      'foundClickToCopy': 'gefunden — klicke ein Wort zum Kopieren',
      'inDictionary': '{n} Wörter im Wörterbuch',
      'knownPositions': 'Bekannte Positionen (grün)',
      'letterPosition': 'Buchstabe an Position {n}',
      'matchingWordPlural': 'passende Wörter',
      'matchingWordSingular': 'passendes Wort',
      'more': 'mehr',
      'mustContain': 'Muss enthalten (gelb)',
      'mustNotContain': 'Darf NICHT enthalten (grau)',
      'mustPlaceholder': 'z. B. ar',
      'notPlaceholder': 'z. B. xyz',
      'privacyIntro': '🔒 100% clientseitig — ein ',
      'privacyOutro': '-Wörter-Wörterbuch ist mit der Seite gebündelt; nichts wird online nachgeschlagen.',
      'solverEmpty': 'Gib oben mindestens eine Einschränkung ein — eine grüne Position, Buchstaben, die enthalten sein müssen, oder auszuschließende Buchstaben — und passende Wörter erscheinen hier.',
      'solverMode': 'Wordle-Löser',
      'solverNoMatch': 'Keine Wörter passen zu diesen Einschränkungen. Prüfe, dass graue Buchstaben nicht auch als grün oder gelb markiert sind.',
      'summaryConstraints': 'muss enthalten {m}|ausschließen {x}|grün {g}',
      'wordPlural': 'Wörter',
      'wordSingular': 'Wort',
    },
    useCases: [
      'Wordle-Löser nach Buchstabenposition',
      '5-Buchstaben-Wortfinder für Wordle',
      'Wordle-Helfer mit Grün, Gelb und Grau',
      'Anagramm-Finder für Wortspiele',
    ],
    faqs: [
      {
        q: 'Nutzt es die offizielle Wordle-Antwortliste?',
        a: 'Es nutzt eine große eingebaute englische Wortliste, die Wordle-artige Fünfbuchstaben-Antworten abdeckt, sodass die Vorschläge dem Worttyp entsprechen, den das Spiel akzeptiert. Es ist eine starke Hilfe, aber keine Drittanbieter-Liste garantiert, an jedem zukünftigen Tag exakt mit dem Spiel übereinzustimmen.',
      },
      {
        q: 'Wie werden grüne, gelbe und graue Hinweise den Eingaben zugeordnet?',
        a: 'Grüne Buchstaben (richtige Position) gehören in die Felder „Bekannte Positionen“; gelbe (im Wort, falsche Position) ins Feld „Muss enthalten“; graue (nicht im Wort) zu „Darf NICHT enthalten“. Der Löser gleicht das Wörterbuch mit allen drei Bedingungen ab, um die Kandidaten einzuengen.',
      },
      {
        q: 'Werden Anagramm- und Mustersuche unterstützt?',
        a: 'Ja. Neben den Standard-Hinweisfiltern deckt es auch Anagramm-Muster und bekannte Buchstabenpositionen ab, was hilft, wenn du vertauschte Buchstaben oder Teilinformationen hast und jedes passende Wort aus dem Wörterbuch finden willst.',
      },
      {
        q: 'Warum sollte man nicht einfach den ersten Kandidaten übernehmen?',
        a: 'Die Liste sortiert die häufigsten Wörter standardmäßig nach oben (innerhalb der Gruppe alphabetisch), aber der Spielwert eines Wortes ist mehr als bloße Häufigkeit: Bleiben mehrere Kandidaten, grenzt ein Sondierungswort mit ungetesteten Buchstaben (auch wenn es kein Kandidat ist) oft schneller ein. Nutze den Löser als Filter, nicht als Antwortgenerator.',
      },
    ],
  },
}
