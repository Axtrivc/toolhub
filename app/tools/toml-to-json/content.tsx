/**
 * TomlToJson 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function TomlToJsonContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Why TOML exists</h2>
      <p>Rust (Cargo), Python (pyproject), and many modern tools chose TOML for configs because it is diff-friendly and typed: strings are quoted, numbers are bare, dates are unambiguous — no YAML surprise-me typing.</p>
      <h2>What converts cleanly</h2>
      <p>Tables become objects, array tables become arrays of objects, dotted keys nest, integers (including hex/octal/binary and underscore separators) become JSON numbers, booleans map directly. Datetimes stay as ISO strings since JSON lacks a date type.</p>
      <h2>Deliberate limitations</h2>
      <p>Multi-line strings and datetime objects are rejected loudly with line numbers rather than silently mangled — a converter that guesses wrong on config files costs hours. Fix the syntax or strip those values first.</p>
    </section>
  )
}
