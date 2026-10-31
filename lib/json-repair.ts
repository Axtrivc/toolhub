/** 修复启发式管线:每步记录日志;先纯字符级,再截断补全,最后 parse 验证 */
export function repairJson(input: string): { output: string; log: string[]; ok: boolean } {
  const log: string[] = []
  let s = input

  // 0) 已是合法 JSON:直接格式化返回,不再过启发式。否则两处误伤:
  //    字符串值里的单词 undefined 被静默改写成 null(数据损坏);两个
  //    撇号被单引号转换吞掉,合法负载反而报「无法解析」。合法输入必须原样通过。
  try {
    return { output: JSON.stringify(JSON.parse(s), null, 2), log, ok: true }
  } catch { /* 继续修复管线 */ }

  // 1) 剥离 markdown 围栏(```json ... ``` 或 ``` ... ```)
  const fence = /^\s*```[a-zA-Z]*\s*\n([\s\S]*?)\n?```\s*$/g.exec(s)
  if (fence) {
    s = fence[1]
    log.push('Stripped markdown code fences')
  }

  // 2) 去首尾无关文本:截取第一个 { 或 [ 到最后一个 } 或 ]
  const firstObj = s.search(/[{[]/)
  const lastObj = Math.max(s.lastIndexOf('}'), s.lastIndexOf(']'))
  if (firstObj > 0 || (lastObj >= 0 && lastObj < s.length - 1)) {
    // 全文无任何闭合括号:带前导文本的截断输出,slice 到 -1+1=0 会把内容
    // 清空。保留到末尾,交给第 9 步栈式补全收尾。
    s = lastObj === -1 ? s.slice(firstObj) : s.slice(firstObj, lastObj + 1)
    log.push('Trimmed text outside the outermost { } or [ ]')
  }

  // Apply syntax repairs only outside string tokens. A broken comma must not
  // change user data such as "undefined", ",}" or apostrophes inside a value.
  function syntax(label: string, repair: (chunk: string) => string) {
    const next = mapTokens(s, repair)
    if (next !== s) { log.push(label); s = next }
  }
  syntax('Converted smart quotes to straight quotes', chunk => chunk.replace(/[\u201c\u201d\u201e\u00ab\u00bb]/g, '"'))
  syntax('Removed control characters', chunk => chunk.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, ''))
  syntax('Quoted bare object keys', chunk => chunk.replace(/([{,]\s*)([A-Za-z_$][\w$]*)(\s*:)/g, '$1"$2"$3'))
  const quoted = mapTokens(s, chunk => chunk, singleToDouble)
  if (quoted !== s) { s = quoted; log.push('Converted single-quoted strings to double quotes') }
  syntax('Removed trailing commas', chunk => chunk.replace(/,\s*([}\]])/g, '$1'))
  syntax('undefined → null', chunk => chunk.replace(/\bundefined\b/g, 'null'))
  syntax('NaN → null', chunk => chunk.replace(/\bNaN\b/g, 'null'))
  syntax('Infinity → null', chunk => chunk.replace(/-?\bInfinity\b/g, 'null'))

  // 9) 截断补全:栈式扫描字符串外的未闭合括号,同时关掉未终结的字符串
  try {
    JSON.parse(s)
  } catch {
    const closed = closeTruncated(s)
    if (closed !== s) {
      s = closed
      log.push('Closed truncated brackets/strings')
    }
  }

  try {
    const parsed = JSON.parse(s)
    return { output: JSON.stringify(parsed, null, 2), log, ok: true }
  } catch (e) {
    return { output: '', log: [...log, (e as Error).message], ok: false }
  }
}

/** 扫描字符串感知的括号栈,补齐截断尾部。
 *  对「错位闭合」做容忍:占位示例 `{ "name": "Ada", tags: ['math',}` 里 } 试图闭合 [
 *  ——旧实现直接弹栈,末尾补全出一对错乱括号,连 UI 占位提示都修不好。
 *  现改为按类型匹配才弹栈,错位闭合符丢弃,最后按剩余开括号逐层补全。 */
function closeTruncated(s: string): string {
  const stack: string[] = []
  let out = ''
  let inStr = false
  let esc = false
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (inStr) {
      out += c
      if (esc) esc = false
      else if (c === '\\') esc = true
      else if (c === '"') inStr = false
      continue
    }
    if (c === '"') { inStr = true; out += c; continue }
    if (c === '{' || c === '[') { stack.push(c); out += c; continue }
    if (c === '}' || c === ']') {
      const want = stack[stack.length - 1]
      if ((c === '}' && want === '{') || (c === ']' && want === '[')) {
        stack.pop()
        out += c
        continue
      }
      continue // 错位闭合:结构上视为手误的闭合符,丢弃
    }
    out += c
  }
  if (inStr) { out += '"' }
  out = out.replace(/[,:\s]+$/, '')
  while (stack.length) {
    out += stack.pop() === '{' ? '}' : ']'
  }
  return out
}


/** Preserve complete and truncated strings; never run syntax regexes on data. */
function mapTokens(input: string, outside: (chunk: string) => string, single?: (token: string) => string): string {
  let output = '', start = 0, i = 0
  while (i < input.length) {
    const quote = input[i]
    if (quote !== '"' && quote !== "'") { i++; continue }
    output += outside(input.slice(start, i))
    const tokenStart = i++
    let closed = false
    while (i < input.length) {
      if (input[i] === '\\') { i += 2; continue }
      if (input[i++] === quote) { closed = true; break }
    }
    const token = input.slice(tokenStart, i)
    output += quote === "'" && closed && single ? single(token) : token
    start = i
  }
  return output + outside(input.slice(start))
}

function singleToDouble(token: string): string {
  let content = ''
  for (let i = 1; i < token.length - 1; i++) {
    const c = token[i]
    if (c === '\\') {
      const next = token[++i]
      content += next === "'" ? "'" : '\\' + next
    } else content += c === '"' ? '\\"' : c
  }
  return '"' + content + '"'
}
