/**
 * LogFilterTool 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function LogFilterToolContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>Why local filtering matters</h2>
      <p>Logs contain tokens, user identifiers, stack traces with internal paths. Pasting them into random web tools leaks production detail; this filter parses everything in your browser and never uploads a byte.</p>
      <h2>Level filtering behavior</h2>
      <p>Level matching is word-boundary exact: WARN matches WARN lines but not WARNING, so mixed-format logs stay predictable. Leave it on "All levels" and rely on include/exclude patterns when formats vary.</p>
      <h2>Regex tips</h2>
      <p>Enable regex mode for alternation like error|timeout|refused. Keep patterns simple — catastrophic backtracking patterns freeze the same here as anywhere; stick to literal alternations over nested quantifiers.</p>
    </section>
  )
}
