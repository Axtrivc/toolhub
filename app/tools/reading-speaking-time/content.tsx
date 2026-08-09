import { ToolContent } from '@/lib/content-templates'

export function ReadingSpeakingTimeContent() {
  return (
    <ToolContent
      intro={
        <p>
          Paste any article, blog draft, script, or speech and this tool instantly estimates{' '}
          <strong>how long it takes to read or say out loud</strong> — along with word, character, sentence, and page
          counts. It&apos;s built for writers checking read-time badges, speakers timing a talk, and podcasters sizing
          a script. Everything runs in your browser; your text is never uploaded.
        </p>
      }
      sections={[
        {
          heading: 'How the estimate is calculated',
          body: (
            <p>
              Words are counted by splitting the trimmed text on whitespace, and the time is simply{' '}
              <code>words ÷ words-per-minute</code>. Presets cover common speeds: <strong>slow reading</strong> (100
              wpm), the <strong>adult average</strong> (~150 wpm), <strong>fast reading</strong> (200 wpm), and{' '}
              <strong>skimming</strong> (300 wpm), plus a custom slider from 50–400 wpm. Speaking presets reflect real
              delivery: a measured <strong>presentation</strong> (~100 wpm), normal <strong>conversation</strong> (~130
              wpm), and a <strong>fast speaker</strong> (~160 wpm).
            </p>
          ),
        },
        {
          heading: 'Which number should you use?',
          body: (
            <p>
              For a <strong>blog read-time badge</strong>, the 150–200 wpm range matches what Medium and most CMSs
              assume. For a <strong>speech or voice-over</strong>, use the speaking figures — and remember they assume
              continuous delivery. Slides, demos, pauses for laughter, and Q&amp;A easily add 10–20%, so if the tool
              says 9:30, plan a 10–11 minute slot. The <em>pages</em> estimate (250 words/page) helps when a brief asks
              for &quot;about four pages&quot;.
            </p>
          ),
        },
        {
          heading: 'Caveats worth knowing',
          body: (
            <p>
              Estimates treat every token as one word, so dense technical prose, code blocks, numbers read aloud
              (&quot;3.14159&quot; takes a while to say), and unfamiliar names all run slower in practice. Sentences are
              counted by terminal punctuation (<code>.</code>, <code>!</code>, <code>?</code>), so abbreviations and
              ellipses can nudge the count. For a critical timing — a keynote, a broadcast segment — always do one real
              read-through with a stopwatch.
            </p>
          ),
        },
      ]}
    />
  )
}
