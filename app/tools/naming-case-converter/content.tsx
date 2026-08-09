import { ToolContent } from '@/lib/content-templates'

export function NamingCaseConverterContent() {
  return (
    <ToolContent
      intro={
        <p>
          Every language and framework has its own naming convention — JavaScript favors <strong>camelCase</strong>,
          Python <strong>snake_case</strong>, CSS classes <strong>kebab-case</strong>, and constants are usually{' '}
          <strong>CONSTANT_CASE</strong>. This converter takes any phrase — or a whole list of phrases in bulk mode —
          and instantly renders it in eight common code naming cases. It runs entirely in your browser, and every row
          has its own copy button so you can grab exactly the variant you need.
        </p>
      }
      sections={[
        {
          heading: 'How words are split',
          body: (
            <p>
              The input is first broken on <strong>spaces, underscores, hyphens, dots, and slashes</strong>, so{' '}
              <code>user profile-settings</code> and <code>user/profile_settings</code> both yield the same words.
              Then camelCase and PascalCase boundaries are detected — including acronym runs — so{' '}
              <code>getHTTPResponse</code> correctly splits into <code>get</code>, <code>http</code>,{' '}
              <code>response</code> rather than <code>gethttpresponse</code>. All words are lowercased before the
              target case is applied.
            </p>
          ),
        },
        {
          heading: 'Which case should you use?',
          body: (
            <p>
              As a rule of thumb: <code>camelCase</code> for variables and functions in JS/Java,{' '}
              <code>PascalCase</code> for classes, components, and types, <code>snake_case</code> for Python, Ruby,
              and database columns, <code>CONSTANT_CASE</code> for environment variables and constants,{' '}
              <code>kebab-case</code> for CSS classes and URL slugs, <code>Train-Case</code> for HTTP headers, and{' '}
              <code>dot.case</code> or <code>path/case</code> for config keys and namespaced identifiers. When in
              doubt, match the convention of the surrounding file.
            </p>
          ),
        },
        {
          heading: 'Bulk mode for renames',
          body: (
            <p>
              Flip on <strong>bulk mode</strong> and paste one phrase per line — ideal when renaming a batch of
              variables, migrating config keys, or generating CSS classes from a design spec. Each output row then
              shows every converted line, and the row&apos;s copy button copies the whole block at once. Blank lines
              are ignored, and the conversion updates live as you type.
            </p>
          ),
        },
      ]}
    />
  )
}
