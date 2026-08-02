import { ToolContent } from '@/lib/content-templates'

export function JsonToTypeScriptContent() {
  return (
    <ToolContent
      intro={
        <p>
          Manually writing TypeScript types for a large API response is tedious and error-prone. This tool
          takes any valid JSON and <strong>recursively infers the shape</strong>, emitting clean, nested{' '}
          <code>interface</code> declarations you can paste straight into your codebase. It handles nested
          objects, arrays, optional (nullable) fields, and even mixed-type arrays.
        </p>
      }
      sections={[
        {
          heading: 'How the types are inferred',
          body: (
            <ul>
              <li>
                <strong>Primitives</strong> — strings become <code>string</code>, numbers become{' '}
                <code>number</code>, booleans become <code>boolean</code>.
              </li>
              <li>
                <strong>Objects</strong> — each object becomes its own <code>interface</code>, named after
                its parent key in PascalCase (e.g. <code>address</code> → <code>Address</code>). Nested
                objects recurse, so deeply structured responses produce a complete type tree.
              </li>
              <li>
                <strong>Arrays</strong> — typed as the element type plus <code>[]</code>. If every element
                shares a type you get <code>string[]</code>; if they differ, you get a union like{' '}
                <code>(string | number)[]</code>.
              </li>
              <li>
                <strong>Null</strong> — JSON <code>null</code> is typed as <code>null</code> and the
                property is marked optional (<code>?:</code>), since nullable API fields are usually also
                absent when empty.
              </li>
            </ul>
          ),
        },
        {
          heading: 'Interfaces vs type aliases',
          body: (
            <p>
              This generator uses <code>interface</code> declarations because they are the most extensible
              convention for object shapes — they support declaration merging and are easier to augment
              later. If your codebase prefers <code>type</code> aliases, a simple find-and-replace of{' '}
              <code>interface Foo {`{'{'}`} </code> → <code>type Foo = {'{'}</code> on the output converts
              them. The inferred member types are identical either way.
            </p>
          ),
        },
        {
          heading: 'When the sample data is incomplete',
          body: (
            <p>
              The inferred types reflect <em>exactly</em> the JSON you pasted, not the full schema the API
              might return. If a field is <code>string</code> in your sample but can also be{' '}
              <code>null</code> in production, widen it manually. For APIs you control, prefer generating
              types from a sample that includes optional and empty states so the union captures reality.
            </p>
          ),
        },
      ]}
    />
  )
}
