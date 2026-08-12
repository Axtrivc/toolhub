'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Wordle Solver 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
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
        Switch to <strong>Anagram mode</strong> and enter 3–10 letters to find every dictionary word — up to five
        letters long, sorted longest first — that can be spelled without reusing a letter more times than you
        have it. Great for Scrabble-style puzzles. If a valid word is missing from the bundled list, paste your
        own words (one per line or space-separated) into <em>extra words</em> and they join the dictionary for
        the session, in both modes.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      一个 <strong>Wordle 求解器和找词工具</strong>,从一个内置的常用英语五字母词库中筛选出符合你已知条件的词:已确定位置的绿色字母、单词必须包含的字母,以及必须排除的字母。变位词模式可以找出从一个字母池中能拼出的所有单词,你还可以合并自己的额外词汇。一切 100% 在你的浏览器中运行 —— 无查询、无网络。
    </p>

    <div>
      <h2>把你的猜测映射到筛选条件</h2>
      <p>
        每次 Wordle 猜测后,把已确认的字母输入五个<strong>绿色</strong>方框(放在确切位置),把在单词中但位置错误的字母放入<em>必须包含</em>(黄色),把排除的字母列入<em>必须不包含</em>(灰色)。列表会随每次按键更新,最多显示 200 个匹配项及其精确数量。点击任意词条即可把它直接复制到下一次猜测中。
      </p>
    </div>

    <div>
      <h2>棘手的情况:重复字母</h2>
      <p>
        当答案中某个字母的出现次数少于你猜测的次数时,Wordle 会把它标灰 —— 这会诱使你把该字母完全排除。本求解器能处理这种情况:同时出现在<em>灰色</em>列表和绿色/黄色约束中的字母不会被一刀切地禁用;答案只是不能包含超过你已确认次数的该字母。因此像 <code>sleet</code> 这样的答案,只要已有两个 <code>e</code> 被确认为绿色或黄色,就能通过一个灰色的 <code>e</code> —— 而包含第三个 <code>e</code> 的 <code>eerie</code> 则会被排除。
      </p>
    </div>

    <div>
      <h2>变位词模式与自定义词典</h2>
      <p>
        切换到<strong>变位词模式</strong>,输入 3–10 个字母,即可找出词典中所有 —— 最长五个字母、按长度从长到短排序 —— 可以在不重复使用超过你持有次数的字母的前提下拼出的单词。非常适合 Scrabble 类谜题。如果某个有效词不在内置列表中,把你的词(每行一个或用空格分隔)粘贴到<em>额外词</em>中,它们就会在本次会话中(两种模式下)加入词典。
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
      letras que la palabra debe contener y letras que no debe contener. Un modo de anagrama encuentra cada
      palabra que puedes formar a partir de un conjunto de letras, y puedes fusionar tus propias palabras extra.
      Todo se ejecuta 100% en tu navegador — sin consultas, sin red.
    </p>

    <div>
      <h2>Mapear tus conjeturas a los filtros</h2>
      <p>
        Tras cada conjetura de Wordle, escribe las letras confirmadas en las cinco casillas <strong>verdes</strong>
        en sus posiciones exactas, pon las letras que están en la palabra pero mal colocadas en{' '}
        <em>debe contener</em> (amarillo), y lista las letras descartadas en <em>NO debe contener</em> (gris). La
        lista se actualiza con cada pulsación, mostrando hasta 200 coincidencias con el recuento exacto. Haz clic
        en cualquier ficha de palabra para copiarla directamente en tu próxima conjetura.
      </p>
    </div>

    <div>
      <h2>El caso complicado: letras duplicadas</h2>
      <p>
        Wordle pone en gris una letra repetida cuando la respuesta la contiene menos veces de las que conjeturaste
        — lo que te tienta a excluir esa letra por completo. Este solucionador lo maneja: una letra que aparece{' '}
        <em>tanto</em> en tu lista gris como en una restricción verde/amarilla no se prohíbe sin más; la respuesta
        simplemente puede no contenerla más veces de las que has confirmado. Así, una respuesta como{' '}
        <code>sleet</code> sobrevive a un <code>e</code> gris siempre que dos <code>e</code>s ya estén confirmadas
        en verde o amarillo — mientras que <code>eerie</code>, con una tercera <code>e</code>, queda descartada.
      </p>
    </div>

    <div>
      <h2>Modo anagrama y diccionarios personalizados</h2>
      <p>
        Cambia al <strong>modo anagrama</strong> e introduce 3–10 letras para encontrar cada palabra del
        diccionario — de hasta cinco letras, ordenadas de más larga a más corta — que pueda escribirse sin
        reutilizar una letra más veces de las que tienes. Estupendo para puzzles tipo Scrabble. Si falta una
        palabra válida de la lista incluida, pega tus propias palabras (una por línea o separadas por espacios) en{' '}
        <em>palabras extra</em> y se unirán al diccionario durante la sesión, en ambos modos.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      Ein <strong>Wordle-Solver und Wort-Finder</strong>, der ein eingebautes Wörterbuch häufiger englischer
      Fünfbuchstabenwörter auf die eingrenzt, die zu dem passen, was du schon weißt: feste grüne Positionen,
      Buchstaben, die das Wort enthalten muss, und Buchstaben, die es nicht enthalten darf. Ein Anagramm-Modus
      findet jedes Wort, das du aus einem Buchstabenpool bilden kannst, und du kannst eigene Zusatzwörter
      einfügen. Alles läuft zu 100 % in deinem Browser — keine Lookups, kein Netzwerk.
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
        — was dich verleitet, diesen Buchstaben ganz auszuschließen. Dieser Solver handhabt das: Ein Buchstabe,
        der <em>sowohl</em> in deiner Grauliste als auch in einer Grün/Gelb-Bedingung steht, wird nicht pauschal
        verboten; die Antwort darf ihn nur nicht öfter enthalten, als du bestätigt hast. Also überlebt eine
        Antwort wie <code>sleet</code> ein graues <code>e</code>, solange zwei <code>e</code>s bereits grün oder
        gelb bestätigt sind — während <code>eerie</code> mit einem dritten <code>e</code> ausgeschlossen wird.
      </p>
    </div>

    <div>
      <h2>Anagramm-Modus und eigene Wörterbücher</h2>
      <p>
        Wechsle in den <strong>Anagramm-Modus</strong> und gib 3–10 Buchstaben ein, um jedes Wörterbuchwort zu
        finden — bis zu fünf Buchstaben lang, nach Länge absteigend sortiert — das sich bilden lässt, ohne einen
        Buchstaben häufiger zu verwenden, als du ihn hast. Toll für Scrabble-artige Rätsel. Fehlt ein gültiges Wort
        in der mitgelieferten Liste, füge deine eigenen Wörter (eines pro Zeile oder leerzeichengetrennt) unter{' '}
        <em>Zusatzwörter</em> ein und sie kommen für die Sitzung zum Wörterbuch hinzu, in beiden Modi.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function WordleSolverContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
