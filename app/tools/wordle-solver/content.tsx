import { ToolContent } from '@/lib/content-templates'

export function WordleSolverContent() {
  return (
    <ToolContent
      intro={
        <p>
          A <strong>Wordle solver and word finder</strong> that narrows a built-in dictionary of common English
          five-letter words down to the ones that fit what you already know: fixed green positions, letters the word
          must contain, and letters it must not. An anagram mode finds every word you can spell from a pool of
          letters, and you can merge in your own extra words. Everything runs 100% in your browser — no lookups, no
          network.
        </p>
      }
      sections={[
        {
          heading: 'Mapping your guesses to the filters',
          body: (
            <p>
              After each Wordle guess, type confirmed letters into the five <strong>green</strong> slots at their exact
              positions, put letters that are in the word but misplaced into <em>must contain</em> (yellow), and list
              ruled-out letters under <em>must NOT contain</em> (grey). The list updates with every keystroke, showing
              up to 200 matches with the exact count. Click any word chip to copy it straight into your next guess.
            </p>
          ),
        },
        {
          heading: 'The tricky case: duplicate letters',
          body: (
            <p>
              Wordle greys a repeated letter when the answer contains it fewer times than you guessed — which tempts
              you to exclude that letter entirely. This solver handles it: a letter that appears in <em>both</em> your
              grey list and a green/yellow constraint is not banned outright; the answer just may not contain it more
              times than you have confirmed. So an answer like <code>sleet</code> survives a grey <code>e</code> as
              long as two <code>e</code>s are already confirmed green or yellow — while <code>eerie</code>, with a
              third <code>e</code>, is ruled out.
            </p>
          ),
        },
        {
          heading: 'Anagram mode and custom dictionaries',
          body: (
            <p>
              Switch to <strong>Anagram mode</strong> and enter 3–10 letters to find every dictionary word — up to five
              letters long, sorted longest first — that can be spelled without reusing a letter more times than you
              have it. Great for Scrabble-style puzzles. If a valid word is missing from the bundled list, paste your
              own words (one per line or space-separated) into <em>extra words</em> and they join the dictionary for
              the session, in both modes.
            </p>
          ),
        },
      ]}
    />
  )
}
