import type { ReactNode } from 'react'
import { ToolContent } from '@/lib/content-templates'

/**
 * 10 个文本工具的内容 - 每个都是独立原创,讲真实知识
 * 这些函数被各工具的 content.tsx 重新导出
 */

export function UppercaseConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool converts any text to <strong>uppercase</strong> (ALL CAPS) instantly. Every
          lowercase letter becomes its uppercase equivalent; numbers, symbols, and already-uppercase
          letters stay the same. The conversion happens entirely in your browser — nothing is sent
          anywhere.
        </p>
      }
      sections={[
        {
          heading: 'When to Use Uppercase',
          body: (
            <ul>
              <li><strong>Headings and titles</strong> for emphasis in print and design</li>
              <li><strong>Acronyms</strong> like NASA, HTML, CEO — convention is all caps</li>
              <li><strong>Warning labels</strong> and signage where visibility matters</li>
              <li><strong>Keyboard shortcuts and code</strong> — many tools show keys in caps</li>
              <li><strong>Product codes and serial numbers</strong> to avoid ambiguity</li>
            </ul>
          ),
        },
        {
          heading: 'Typography Tip',
          body: (
            <p>
              All-caps text is harder to read in long passages because letters lose their distinctive
              shapes (word outlines). Use it for short labels and headings, not paragraphs. For body
              text, sentence case or title case reads much faster.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Does this work with non-English text?', a: 'Yes. The tool uses Unicode-aware conversion, so accented letters like café → CAFÉ and Greek/Cyrillic letters also convert correctly.' },
      ]}
    />
  )
}

export function LowercaseConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool converts any text to <strong>lowercase</strong> — every capital letter becomes
          lowercase, while everything else stays the same. Fast, free, and private.
        </p>
      }
      sections={[
        {
          heading: 'When to Use Lowercase',
          body: (
            <ul>
              <li><strong>Email addresses</strong> — officially case-insensitive, but lowercase avoids confusion</li>
              <li><strong>URLs and slugs</strong> — convention is lowercase to avoid duplicate-content issues</li>
              <li><strong>Programming variables</strong> — most languages use camelCase or snake_case</li>
              <li><strong>Hashtags</strong> — #lowercase reads cleaner and avoids accessibility issues</li>
              <li><strong>Casual messaging</strong> — many people type in lowercase informally</li>
            </ul>
          ),
        },
        {
          heading: 'Why URLs Should Be Lowercase',
          body: (
            <p>
              Web servers treat <code>/About</code> and <code>/about</code> as different URLs on many
              systems (including Linux). Mixing cases creates duplicate content that splits SEO
              ranking. Stick to lowercase for all URLs and slugs.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Will lowercase affect my data?', a: 'No — numbers, symbols, and punctuation are unaffected. Only letters change. The conversion is lossless for the letters that have case.' },
      ]}
    />
  )
}

export function TitleCaseConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          <strong>Title case</strong> capitalizes the first letter of every word. This tool applies
          it instantly to any text. It&apos;s the standard for book titles, song names, article
          headlines, and button labels.
        </p>
      }
      sections={[
        {
          heading: 'Title Case vs. Capitalize-First-Letter',
          body: (
            <p>
              This tool capitalizes <em>every</em> word. Professional style guides (APA, Chicago)
              often keep short words like &quot;the,&quot; &quot;of,&quot; and &quot;in&quot; in
              lowercase. For example: &quot;The Lord of the Rings&quot; (style guide) vs. &quot;The
              Lord Of The Rings&quot; (this tool). For marketing copy and UI buttons, capitalizing
              every word is fine and often looks cleaner.
            </p>
          ),
        },
        {
          heading: 'Common Uses',
          body: (
            <ul>
              <li>Blog post titles and headlines</li>
              <li>YouTube video titles</li>
              <li>Book, movie, and song titles</li>
              <li>Button and menu labels in apps</li>
              <li>Section headings in documents</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'Why are some style guides different?', a: 'Major style guides (APA, Chicago, AP) have their own rules about which words to capitalize. They typically lowercase articles, conjunctions, and short prepositions. This tool capitalizes every word for simplicity.' },
      ]}
    />
  )
}

export function SentenceCaseConverterContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          <strong>Sentence case</strong> capitalizes only the first letter of each sentence, leaving
          the rest lowercase. It&apos;s the natural capitalization of normal writing and the most
          readable for paragraphs of text.
        </p>
      }
      sections={[
        {
          heading: 'When to Use Sentence Case',
          body: (
            <ul>
              <li><strong>Body text</strong> in articles, emails, and documentation</li>
              <li><strong>Headlines in newspapers</strong> — most print journalism uses sentence case</li>
              <li><strong>Plain-language writing</strong> where readability matters most</li>
            </ul>
          ),
        },
        {
          heading: 'Limitations of Automatic Conversion',
          body: (
            <p>
              This tool capitalizes after sentence-ending punctuation (. ! ?) but cannot detect
              proper nouns like names, brands, or places. After conversion, manually capitalize
              &quot;john&quot; → &quot;John,&quot; &quot;paris&quot; → &quot;Paris,&quot; etc. For
              most cleanup tasks (text typed in all caps), this tool gets you 95% of the way there.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'What about abbreviations like "USA"?', a: 'This tool lowercases them to "usa". You will need to manually fix abbreviations and proper nouns after conversion. No automated tool can perfectly distinguish them.' },
      ]}
    />
  )
}

export function ReverseTextContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool reverses any text — the last character becomes the first, the first becomes the
          last. It handles Unicode correctly, so emojis and accented letters reverse cleanly as
          single characters.
        </p>
      }
      sections={[
        {
          heading: 'Fun and Practical Uses',
          body: (
            <ul>
              <li><strong>Puzzles and word games</strong> — decode reversed messages</li>
              <li><strong>Creating ambigrams</strong> or symmetrical designs</li>
              <li><strong>Testing code</strong> that processes strings</li>
              <li><strong>Privacy</strong> — reversing email addresses can confuse basic scrapers (john@example.com → moc.elpmaxe@nhoj)</li>
              <li><strong>Hebrew/Arabic processing</strong> in left-to-right contexts</li>
            </ul>
          ),
        },
        {
          heading: 'Reversing Words vs. Characters',
          body: (
            <p>
              This tool reverses <em>characters</em>. To reverse word order (&quot;hello world&quot;
              → &quot;world hello&quot;), you would split on spaces, reverse the array, and rejoin.
              Character reversal is the more common request and is what this tool does.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Why do emojis sometimes break?', a: 'Some emojis (family, flags) are composed of multiple code points. This tool uses grapheme-aware splitting, so most emojis reverse correctly, but complex composed emojis may still separate.' },
      ]}
    />
  )
}

export function RemoveDuplicateLinesContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool removes duplicate lines from any list, keeping only the first occurrence of each
          unique line. Order is preserved — the output appears in the same sequence as the input,
          just without repeats.
        </p>
      }
      sections={[
        {
          heading: 'Common Uses',
          body: (
            <ul>
              <li><strong>Email lists</strong> — remove subscribers who appear twice</li>
              <li><strong>Keyword lists</strong> — dedupe SEO keywords before analysis</li>
              <li><strong>Inventory and SKUs</strong> — clean product lists</li>
              <li><strong>Log files</strong> — remove repeated error lines</li>
              <li><strong>Data prep</strong> before importing to a spreadsheet or database</li>
            </ul>
          ),
        },
        {
          heading: 'How It Works',
          body: (
            <p>
              Each line is trimmed of surrounding whitespace before comparison. So{' '}
              <code>&quot;apple &quot;</code> and <code>&quot;apple&quot;</code> are treated as the
              same line. Empty lines are removed entirely. The first occurrence is kept; later
              duplicates are dropped.
            </p>
          ),
        },
        {
          heading: 'Case Sensitivity',
          body: (
            <p>
              This tool is case-sensitive: <code>Apple</code> and <code>apple</code> are treated as
              different lines. If you want case-insensitive dedup, convert everything to lowercase
              first using our lowercase tool, then dedupe.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Will this sort my list?', a: 'No — order is preserved. Use the Sort Lines tool if you also want alphabetical ordering.' },
        { q: 'Is there a size limit?', a: 'No hard limit, but very large inputs (millions of lines) may slow down your browser. The tool runs locally.' },
      ]}
    />
  )
}

export function SortLinesContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool sorts lines alphabetically (A → Z), removes empty lines, and trims whitespace.
          It&apos;s perfect for organizing lists, cleaning up data, and preparing content.
        </p>
      }
      sections={[
        {
          heading: 'What Gets Sorted',
          body: (
            <ul>
              <li>Each line becomes one item in the sort</li>
              <li>Empty lines are removed entirely</li>
              <li>Leading and trailing spaces on each line are trimmed</li>
              <li>Sorting is case-insensitive (Apple and apple sort together)</li>
              <li>Numbers sort before letters (10 comes before apple)</li>
            </ul>
          ),
        },
        {
          heading: 'Common Uses',
          body: (
            <ul>
              <li>Organize a brainstormed list of ideas</li>
              <li>Sort names alphabetically for a directory</li>
              <li>Order product SKUs or codes</li>
              <li>Prepare keywords or tags for review</li>
              <li>Clean up copied text from documents</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'Can I sort in reverse (Z to A)?', a: 'This tool sorts ascending. For descending order, sort here then manually reverse the output. We may add a reverse option in a future update.' },
        { q: 'How are numbers sorted?', a: 'Lines are sorted as text, so "10" comes before "9" (because "1" < "9"). For natural numeric sorting, pad numbers with leading zeros first.' },
      ]}
    />
  )
}

export function RemoveLineBreaksContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool removes all line breaks from your text, joining everything into a single
          continuous line. Multiple spaces and stray whitespace are collapsed into single spaces for
          clean output.
        </p>
      }
      sections={[
        {
          heading: 'When You\'ll Need This',
          body: (
            <ul>
              <li><strong>Copy-pasting from PDFs</strong> — PDFs often insert unwanted line breaks</li>
              <li><strong>Email forwarding</strong> — quoted text accumulates broken lines</li>
              <li><strong>Form fields</strong> that don&apos;t accept multi-line input</li>
              <li><strong>URLs and code</strong> that were wrapped across lines</li>
              <li><strong>Social media</strong> where single-line posts work better</li>
            </ul>
          ),
        },
        {
          heading: 'Preserving Paragraphs',
          body: (
            <p>
              This tool joins <em>everything</em> into one line, including what were originally
              separate paragraphs. If you need to keep paragraph breaks while only removing
              single-line breaks within paragraphs, you&apos;ll need to process each paragraph
              separately.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Will it remove the spaces between words?', a: 'No — line breaks are replaced with a single space, and multiple consecutive spaces collapse to one. Words stay properly separated.' },
      ]}
    />
  )
}

export function FindAndReplaceContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool finds every occurrence of a search term in your text and replaces it with
          something else. Separate your text, search term, and replacement with{' '}
          <code>&nbsp;|||&nbsp;</code> so the tool knows where each part begins.
        </p>
      }
      sections={[
        {
          heading: 'How to Format Your Input',
          body: (
            <p>
              Use three parts separated by <code>&nbsp;|||&nbsp;</code>:
            </p>
          ),
        },
        {
          heading: 'Example',
          body: (
            <p>
              <code>I love cats and cats are great ||| cats ||| dogs</code>
              <br />
              Result: <code>I love dogs and dogs are great</code>
            </p>
          ),
        },
        {
          heading: 'Common Uses',
          body: (
            <ul>
              <li>Rename a term across a long document</li>
              <li>Update placeholder text like [NAME] with the real value</li>
              <li>Swap formatting markers (e.g., &quot;--&quot; to em dash)</li>
              <li>Clean up inconsistent spelling (color → colour)</li>
              <li>Replace sensitive data before sharing text</li>
            </ul>
          ),
        },
      ]}
      faqs={[
        { q: 'Is the search case-sensitive?', a: 'Yes — "Cat" and "cat" are different. For case-insensitive replace, convert your whole text to one case first, then replace.' },
        { q: 'Can I use regular expressions?', a: 'This basic version matches literal text only. Regex support may come in a future update.' },
      ]}
    />
  )
}

export function WhitespaceRemoverContent(): ReactNode {
  return (
    <ToolContent
      intro={
        <p>
          This tool cleans up messy whitespace: trims leading and trailing spaces from each line,
          collapses multiple consecutive spaces into one, and removes empty lines. The result is
          neat, consistent text.
        </p>
      }
      sections={[
        {
          heading: 'What Gets Cleaned',
          body: (
            <ul>
              <li>Spaces at the start or end of each line — removed</li>
              <li>Multiple spaces in a row — collapsed to a single space</li>
              <li>Tabs mixed with spaces — normalized to single spaces</li>
              <li>Empty lines — removed entirely</li>
            </ul>
          ),
        },
        {
          heading: 'When You\'ll Need This',
          body: (
            <ul>
              <li>Cleaning up text copied from websites or PDFs</li>
              <li>Formatting data before pasting into spreadsheets</li>
              <li>Preparing text for code (extra spaces break indentation)</li>
              <li>Normalizing user input in forms</li>
              <li>Tidying notes and drafts</li>
            </ul>
          ),
        },
        {
          heading: 'Preserving Intentional Formatting',
          body: (
            <p>
              This tool removes <em>all</em> extra whitespace. If you have intentional indentation
              (like code or poetry), don&apos;t use it on that text — it will flatten everything.
            </p>
          ),
        },
      ]}
      faqs={[
        { q: 'Does this remove all line breaks?', a: 'No — line breaks are preserved, but empty lines are removed. Use the Remove Line Breaks tool if you also want to join everything into one line.' },
      ]}
    />
  )
}
