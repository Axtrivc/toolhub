import { ToolContent } from '@/lib/content-templates'

export function YamlToJsonContent() {
  return (
    <ToolContent
      intro={
        <p>
          <strong>YAML</strong> (YAML Ain&apos;t Markup Language) is a human-friendly configuration format
          used by Docker Compose, Kubernetes, GitHub Actions, Ansible, and many CI tools.{' '}
          <strong>JSON</strong> is the data interchange format every API speaks. Converting YAML to JSON is
          a common need when feeding config into tooling that only accepts JSON — and YAML&apos;s
          indentation rules make it easy to get wrong by hand. This tool parses YAML locally and emits
          clean JSON.
        </p>
      }
      sections={[
        {
          heading: 'What this parser supports',
          body: (
            <ul>
              <li>
                <strong>Mappings &amp; sequences</strong> — nested key-value pairs and lists ({`- item`}).
              </li>
              <li>
                <strong>Inline flow</strong> — <code>[a, b]</code> for arrays and{' '}
                <code>{`{key: value}`}</code> for objects.
              </li>
              <li>
                <strong>Scalars</strong> — strings (quoted and plain), numbers, booleans (<code>true</code>
                /<code>false</code>), and <code>null</code> (also <code>~</code>).
              </li>
              <li>
                <strong>Comments</strong> — anything after <code>#</code> (outside quotes) is ignored.
              </li>
              <li>
                <strong>Block scalars</strong> — <code>|</code> (literal) and <code>&gt;</code> (folded).
              </li>
            </ul>
          ),
        },
        {
          heading: 'Why YAML parsing is tricky',
          body: (
            <p>
              Unlike JSON, YAML is <strong>indentation-sensitive</strong> — two spaces versus four changes
              the structure entirely. Tabs are forbidden for indentation (use spaces only). Plain scalars
              are also implicitly typed: <code>yes</code>, <code>no</code>, <code>on</code>, and{' '}
              <code>off</code> become booleans in older YAML 1.1 parsers, which is a famous source of
              bugs (the &quot;Norway problem&quot; where <code>NO</code> became <code>false</code>). Quote
              such values if you need them as strings.
            </p>
          ),
        },
        {
          heading: 'When the conversion fails',
          body: (
            <p>
              The most common cause is inconsistent indentation — mixing 2-space and 4-space steps, or tabs
              sneaking in from a copy-paste. The error message points to the offending line. Also watch for
              duplicate keys in the same mapping: while some YAML libraries silently overwrite, this parser
              reports them as errors because they almost always indicate a real mistake.
            </p>
          ),
        },
      ]}
    />
  )
}
