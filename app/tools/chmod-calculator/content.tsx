import { ToolContent } from '@/lib/content-templates'

export function ChmodCalculatorClientContent() {
  return (
    <ToolContent
      intro={
        <p>
          Linux file permissions decide who can read, write, or execute every file — and <code>chmod</code> is how you
          change them. This calculator turns the abstract octal and symbolic notations into a clickable grid: tick the
          boxes and instantly see the octal value (<code>755</code>), the symbolic form (<code>rwxr-xr-x</code>), and a
          ready-to-paste <code>chmod</code> command. It also works in reverse — paste <code>644</code> or{' '}
          <code>rwxr--r--</code> and the grid updates. Everything runs locally in your browser.
        </p>
      }
      sections={[
        {
          heading: 'Reading octal permissions',
          body: (
            <p>
              Each octal digit is the sum of <strong>read = 4, write = 2, execute = 1</strong>, and the three digits
              cover Owner, Group, and Others in that order. So <code>755</code> means the owner gets 4+2+1
              (everything), while group and others get 4+1 (read + execute) — the standard for scripts and web
              directories. <code>644</code> (owner read/write, everyone else read-only) is the default for regular
              files, and <code>600</code> locks a file to its owner — the required mode for SSH private keys.
            </p>
          ),
        },
        {
          heading: 'The special bits: setuid, setgid, sticky',
          body: (
            <p>
              A fourth, leading octal digit encodes three special flags. <strong>setuid</strong> (4) makes an
              executable run with the file owner&apos;s privileges — that is how <code>passwd</code> edits{' '}
              <code>/etc/shadow</code>. <strong>setgid</strong> (2) does the same for the group, and on a directory it
              forces new files to inherit the directory&apos;s group. The <strong>sticky bit</strong> (1) on a
              directory lets only a file&apos;s owner delete it — essential for shared folders like{' '}
              <code>/tmp</code> (<code>1777</code>). In symbolic output they overlay the execute slot as{' '}
              <code>s</code>/<code>S</code> and <code>t</code>/<code>T</code>.
            </p>
          ),
        },
        {
          heading: 'Common pitfalls to avoid',
          body: (
            <p>
              Resist <code>chmod 777</code>: world-writable files are a classic security hole, and the real fix is
              usually correcting ownership with <code>chown</code>. Remember that <strong>directories need the execute
              bit</strong> — without it you can list names (<code>r</code>) but cannot enter or access anything inside.
              Also note <code>chmod</code> is not recursive unless you pass <code>-R</code>, and recursive apply-every
              mode to a tree mixes files and folders — use{' '}
              <code>find . -type d -exec chmod 755 {} +</code> and a matching <code>-type f</code> pass instead.
            </p>
          ),
        },
      ]}
    />
  )
}
