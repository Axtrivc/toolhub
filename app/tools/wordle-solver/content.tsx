'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Wordle Solver 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      A <strong>Wordle solver and word finder</strong> that narrows a built-in dictionary of common English
      five-letter words down to the ones that fit what you already know: fixed green positions, letters the word
      must contain, and letters it must not. An anagram mode finds every word you can spell from a pool of
      letters, and you can merge in your own extra words. Everything runs 100% in your browser — no lookups, no
      network.
    </p>

    <div>
      <h2>Mapping your guesses to the filters</h2>
      <p>
        After each Wordle guess, type confirmed letters into the five <strong>green</strong> slots at their exact
        positions, put letters that are in the word but misplaced into <em>must contain</em> (yellow), and list
        ruled-out letters under <em>must NOT contain</em> (grey). The list updates with every keystroke, showing
        up to 200 matches with the exact count. Click any word chip to copy it straight into your next guess.
      </p>
    </div>

    <div>
      <h2>The tricky case: duplicate letters</h2>
      <p>
        Wordle greys a repeated letter when the answer contains it fewer times than you guessed — which tempts
        you to exclude that letter entirely. This solver handles it: a letter that appears in <em>both</em> your
        grey list and a green/yellow constraint is not banned outright; the answer just may not contain it more
        times than you have confirmed. So an answer like <code>sleet</code> survives a grey <code>e</code> as
        long as two <code>e</code>s are already confirmed green or yellow — while <code>eerie</code>, with a
        third <code>e</code>, is ruled out.
      </p>
    </div>

    <div>
      <h2>Anagram mode and custom dictionaries</h2>
      <p>
        Switch to <strong>Anagram mode</strong> and enter 3–10 letters to find every dictionary word — up to as
        many letters as you entered, sorted longest first — that can be spelled without reusing a letter more
        times than you have it. Great for Scrabble-style puzzles. If a valid word is missing from the bundled
        list, paste your own words (one per line or space-separated) into <em>extra words</em> and they join the
        dictionary for the session, in both modes.
      </p>
    </div>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Un <strong>solucionador y buscador de palabras para Wordle</strong> que reduce un diccionario integrado de
      palabras inglesas comunes de cinco letras a las que encajan con lo que ya sabes: posiciones verdes fijas,
      letras que la palabra debe contener y letras que no debe contener. El modo anagrama encuentra todas las
      palabras que puedes formar a partir de un conjunto de letras, y puedes añadir tus propias palabras extra.
      Todo se ejecuta 100% en tu navegador — sin consultas, sin red.
    </p>

    <div>
      <h2>Cómo trasladar tus intentos a los filtros</h2>
      <p>
        Tras cada intento de Wordle, escribe las letras confirmadas en las cinco casillas <strong>verdes</strong>{' '}
        en sus posiciones exactas, pon las letras que están en la palabra pero mal colocadas en{' '}
        <em>debe contener</em> (amarillo), y lista las letras descartadas en <em>NO debe contener</em> (gris). La
        lista se actualiza con cada pulsación, mostrando hasta 200 coincidencias con el recuento exacto. Haz clic
        en cualquier ficha de palabra para copiarla directamente en tu próximo intento.
      </p>
    </div>

    <div>
      <h2>El caso complicado: letras duplicadas</h2>
      <p>
        Wordle pone en gris una letra repetida cuando la respuesta la contiene menos veces de las que marcaste
        — lo que te tienta a excluir esa letra por completo. Este solucionador lo maneja: una letra que aparece{' '}
        <em>tanto</em> en tu lista gris como en una restricción verde/amarilla no se prohíbe sin más; la respuesta
        simplemente no puede contenerla más veces de las que has confirmado. Así, una respuesta como{' '}
        <code>sleet</code> sobrevive a un <code>e</code> gris siempre que dos <code>e</code>s ya estén confirmadas
        en verde o amarillo — mientras que <code>eerie</code>, con una tercera <code>e</code>, queda descartada.
      </p>
    </div>

    <div>
      <h2>Modo anagrama y diccionarios personalizados</h2>
      <p>
        Cambia al <strong>modo anagrama</strong> e introduce 3–10 letras para encontrar todas las palabras del
        diccionario — de hasta tantas letras como introduzcas, ordenadas de más larga a más corta — que puedan
        escribirse sin reutilizar una letra más veces de las que tienes. Perfecto para juegos tipo Scrabble.
        Si falta una palabra válida de la lista incluida, pega tus propias palabras (una por línea o separadas
        por espacios) en{' '}
        <em>palabras extra</em> y se añadirán al diccionario durante la sesión, en ambos modos.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Ein <strong>Wordle-Löser und Wort-Finder</strong>, der ein eingebautes Wörterbuch häufiger englischer
      Fünfbuchstabenwörter auf die eingrenzt, die zu dem passen, was du schon weißt: feste grüne Positionen,
      Buchstaben, die das Wort enthalten muss, und Buchstaben, die es nicht enthalten darf. Ein Anagramm-Modus
      findet jedes Wort, das du aus einem Buchstabenpool bilden kannst, und du kannst eigene zusätzliche
      Wörter einfügen. Alles läuft zu 100 % in deinem Browser — keine Online-Abfragen, kein Netzwerk.
    </p>

    <div>
      <h2>Deine Raten den Filtern zuordnen</h2>
      <p>
        Gib nach jedem Wordle-Versuch die bestätigten Buchstaben in die fünf <strong>grünen</strong> Felder an
        ihren genauen Positionen ein, setze Buchstaben, die im Wort, aber falsch platziert sind, unter{' '}
        <em>muss enthalten</em> (gelb), und liste ausgeschlossene Buchstaben unter <em>darf NICHT enthalten</em>
        (grau). Die Liste aktualisiert sich mit jedem Tastendruck und zeigt bis zu 200 Treffer mit der genauen
        Anzahl. Klicke auf einen Wort-Chip, um ihn direkt in deinen nächsten Versuch zu kopieren.
      </p>
    </div>

    <div>
      <h2>Der knifflige Fall: doppelte Buchstaben</h2>
      <p>
        Wordle graut einen wiederholten Buchstaben aus, wenn die Antwort ihn seltener enthält, als du geraten hast
        — was dich verleitet, diesen Buchstaben ganz auszuschließen. Dieser Löser handhabt das: Ein Buchstabe,
        der <em>sowohl</em> in deiner Grauliste als auch in einer Grün/Gelb-Bedingung steht, wird nicht pauschal
        verboten; die Antwort darf ihn nur nicht öfter enthalten, als du bestätigt hast. Also überlebt eine
        Antwort wie <code>sleet</code> ein graues <code>e</code>, solange zwei <code>e</code> bereits grün oder
        gelb bestätigt sind — während <code>eerie</code> mit einem dritten <code>e</code> ausgeschlossen wird.
      </p>
    </div>

    <div>
      <h2>Anagramm-Modus und eigene Wörterbücher</h2>
      <p>
        Wechsle in den <strong>Anagramm-Modus</strong> und gib 3–10 Buchstaben ein, um jedes Wörterbuchwort zu
        finden — mit höchstens so vielen Buchstaben, wie du eingegeben hast, nach Länge absteigend sortiert —
        das sich bilden lässt, ohne einen Buchstaben häufiger zu verwenden, als du ihn hast. Toll für
        Scrabble-artige Rätsel. Fehlt ein gültiges Wort
        in der mitgelieferten Liste, füge deine eigenen Wörter (eines pro Zeile oder leerzeichengetrennt) unter{' '}
        <em>zusätzliche Wörter</em> ein — sie kommen dann in beiden Modi für die Sitzung zum Wörterbuch hinzu.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function WordleSolverContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
