import { ToolContent } from '@/lib/content-templates'

export function SrtSubtitleShiftContent() {
  return (
    <ToolContent
      intro={
        <p>
          An <strong>SRT subtitle shifter</strong> that moves every cue in a subtitle file forward or backward by a
          fixed number of seconds — the classic fix for subtitles that are out of sync with the video. Paste your SRT
          text or upload a <code>.srt</code> file, set an offset like <code>-2.5</code>, and download the corrected
          file. It also cleans up formatting tags and renumbers cues. Everything runs 100% in your browser.
        </p>
      }
      sections={[
        {
          heading: 'How the shift works',
          body: (
            <p>
              Each cue&apos;s timestamps (<code>HH:MM:SS,mmm --&gt; HH:MM:SS,mmm</code>) are converted to integer
              milliseconds, the offset is added, and the result is formatted back with zero-padding — no floating-point
              drift, no rounding surprises. Positive offsets delay subtitles (use when text appears too early);
              negative values like <code>-1.75</code> make them appear sooner. When a shift pushes a cue below zero,
              the <strong>clamp</strong> option pins it to <code>00:00:00,000</code> instead of writing an invalid
              negative timestamp, and the tool tells you how many cues were clamped.
            </p>
          ),
        },
        {
          heading: 'Tolerant parsing, safe renumbering',
          body: (
            <p>
              Real-world SRT files are messy: Windows <code>CRLF</code> line endings, missing or duplicated index
              numbers, stray blank lines. The parser handles all of that — cue indexes are optional and any block
              without a valid timestamp line is skipped and reported as a parse error, never silently mangled. Turn on{' '}
              <strong>Renumber cues</strong> (default) to write clean sequential indexes, which some strict players
              require.
            </p>
          ),
        },
        {
          heading: 'Stripping formatting and music symbols',
          body: (
            <p>
              Subtitle files often carry styling your player can&apos;t use: <code>&lt;i&gt;</code>,{' '}
              <code>&lt;b&gt;</code>, and <code>&lt;font&gt;</code> HTML tags, ASS override blocks like{' '}
              <code>{'{\\an8}'}</code>, and ♪ markers around music cues. The <strong>strip formatting</strong> option
              removes all of them and tidies leftover whitespace, giving you a clean plain-text track. A tip: shift
              first, verify sync with one or two lines of dialogue, then download — shifting the whole file beats
              editing cue by cue.
            </p>
          ),
        },
      ]}
    />
  )
}
