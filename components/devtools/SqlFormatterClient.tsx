'use client'

import { useState, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * SQL Formatter / Beautifier
 *
 * tokenizer → 按 SQL 关键字重排缩进。关键字大写。
 * 支持 Format / Minify 两种输出。100% 本地。
 */

const SAMPLE_SQL = `select u.id, u.name, count(o.id) as order_count from users u left join orders o on o.user_id = u.id where u.status = 'active' and o.created_at > '2024-01-01' group by u.id, u.name having count(o.id) > 5 order by order_count desc limit 10;`

/** 需要"换行 + 缩进回到顶层"的主关键字(顶头) */
const TOP_KEYWORDS = new Set([
  'SELECT',
  'FROM',
  'WHERE',
  'GROUP BY',
  'ORDER BY',
  'HAVING',
  'LIMIT',
  'OFFSET',
  'INSERT INTO',
  'VALUES',
  'UPDATE',
  'SET',
  'DELETE FROM',
  'CREATE TABLE',
  'JOIN',
  'LEFT JOIN',
  'RIGHT JOIN',
  'INNER JOIN',
  'OUTER JOIN',
  'ON',
  'UNION',
  'UNION ALL',
])

/** 标准化关键字大小写(用于匹配多词关键字如 GROUP BY) */
function normalizeKw(s: string): string {
  return s.toUpperCase().replace(/\s+/g, ' ')
}

/**
 * 把 SQL 切成 token:标识符/数字/字符串/括号/逗号/运算符。
 * 保留字符串字面量内容(含空格)不拆。
 */
function tokenize(sql: string): string[] {
  const tokens: string[] = []
  let i = 0
  const n = sql.length
  while (i < n) {
    const c = sql[i]
    // 空白
    if (/\s/.test(c)) {
      i++
      continue
    }
    // 字符串(单引号,支持 '' 转义)
    if (c === "'") {
      let j = i + 1
      let val = "'"
      while (j < n) {
        if (sql[j] === "'" && sql[j + 1] === "'") {
          val += "''"
          j += 2
          continue
        }
        if (sql[j] === "'") {
          val += "'"
          j++
          break
        }
        val += sql[j]
        j++
      }
      tokens.push(val)
      i = j
      continue
    }
    // 双引号标识符
    if (c === '"') {
      let j = i + 1
      let val = '"'
      while (j < n && sql[j] !== '"') {
        val += sql[j]
        j++
      }
      val += '"'
      tokens.push(val)
      i = j + 1
      continue
    }
    // 行注释 -- 到行尾(整段一个 token,防止后续子句被 minify 折进行注释里)
    if (c === '-' && sql[i + 1] === '-') {
      let j = i
      while (j < n && sql[j] !== '\n') j++
      tokens.push(sql.slice(i, j))
      i = j
      continue
    }
    // 块注释 /* ... */
    if (c === '/' && sql[i + 1] === '*') {
      const end = sql.indexOf('*/', i + 2)
      const j = end === -1 ? n : end + 2
      tokens.push(sql.slice(i, j))
      i = j
      continue
    }
    // 括号、逗号、分号
    if (c === '(' || c === ')' || c === ',' || c === ';') {
      tokens.push(c)
      i++
      continue
    }
    // 标识符/数字/关键字(连续非空白非特殊字符)
    let word = ''
    while (i < n && !/[\s(),'";]/.test(sql[i])) {
      word += sql[i]
      i++
    }
    if (word) tokens.push(word)
  }
  return tokens
}

/** 合并多词关键字:把 ["GROUP","BY"] 合成 "GROUP BY" */
function mergeMultiword(tokens: string[]): string[] {
  const out: string[] = []
  let i = 0
  while (i < tokens.length) {
    const cur = tokens[i]
    const next = tokens[i + 1]
    const two = next ? normalizeKw(`${cur} ${next}`) : ''
    if (TOP_KEYWORDS.has(two)) {
      out.push(two)
      i += 2
      continue
    }
    out.push(cur)
    i++
  }
  return out
}

// 普通 token 大写白名单(真正的 SQL 关键字才转大写)。放在模块作用域:
// 之前在循环体内每 token new Set(...),大脚本(数十万 token)会产生同等数量的
// Set 分配,是纯浪费(P-5:>1KB 输入的重计算路径不动微优化,但这是明摆着的分配放大)
const SQL_KEYWORDS = new Set([
  'AND','OR','NOT','IN','AS','IS','NULL','LIKE','ASC','DESC','DISTINCT',
  'CASE','WHEN','THEN','ELSE','END','BETWEEN','EXISTS','ALL','ANY','SOME',
  'COUNT','SUM','AVG','MIN','MAX','PRIMARY','KEY','FOREIGN','REFERENCES',
  'TABLE','INDEX','VIEW','UNIQUE','DEFAULT','CONSTRAINT',
])

/** 格式化 SQL:按 TOP_KEYWORDS 换行 + 括号内缩进 + 逗号后换行 */
function formatSql(sql: string): string {
  const raw = tokenize(sql)
  const tokens = mergeMultiword(raw)
  const lines: string[] = []
  let indent = 0
  // 当前括号深度:子查询里的主子句也要跟着往里缩,而不是顶到第 0 列
  let parenDepth = 0
  let currentLine = ''

  const pushLine = () => {
    if (currentLine.trim()) {
      lines.push('  '.repeat(indent) + currentLine.trim())
    }
    currentLine = ''
  }

  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i]
    const upper = normalizeKw(tok)

    if (TOP_KEYWORDS.has(upper)) {
      pushLine()
      // JOIN 系列保持在 FROM 下层;主子句顶头(子查询内随括号深度缩进)
      const base = parenDepth
      if (upper === 'ON') {
        indent = base + 2
        currentLine = upper + ' '
      } else if (upper.includes('JOIN')) {
        indent = base + 1
        currentLine = upper + ' '
      } else if (upper === 'VALUES' || upper === 'SET') {
        indent = base + 1
        currentLine = upper + ' '
      } else {
        indent = base
        currentLine = upper + ' '
      }
      continue
    }

    if (tok === '(') {
      currentLine = currentLine.trimEnd() + ' ('
      pushLine()
      indent++
      parenDepth++
      continue
    }
    if (tok === ')') {
      pushLine()
      indent = Math.max(0, indent - 1)
      parenDepth = Math.max(0, parenDepth - 1)
      currentLine = ') '
      continue
    }
    if (tok === ',') {
      currentLine = currentLine.trimEnd() + ','
      pushLine()
      continue
    }
    if (tok === ';') {
      currentLine = currentLine.trimEnd() + ';'
      pushLine()
      continue
    }

    // 普通标识符:仅真正的 SQL 关键字大写，其余标识符(表名/列名)保留原大小写
    const isKeyword = SQL_KEYWORDS.has(tok.toUpperCase())
    currentLine += (isKeyword ? tok.toUpperCase() : tok) + ' '
    // 行注释必须独占行尾,否则同行后续 token 会被并进注释里
    if (tok.startsWith('--')) pushLine()
  }
  pushLine()
  return lines.join('\n').trim()
}

/** 压缩 SQL:按 token 拼接,字符串字面量内的空白/逗号/括号原样保留 */
function minifySql(sql: string): string {
  const tokens = tokenize(sql)
  // 注意:不要对不断增长的输出串做 /\s$/.test(out) —— 无前导锚点的正则
  // 在长串上是 O(n) 单次、O(n²) 累计(292KB 输入实测 5s+);只测前一个
  // token 的末字符,语义等价(每轮迭代结束时输出总以最后 token 结尾)。
  const parts: string[] = []
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i]
    if (i > 0) {
      if (tokens[i - 1].startsWith('--')) {
        // 行注释后必须换行,否则后续子句会被注释吞掉
        parts.push('\n')
      } else {
        // 逗号/分号/右括号紧跟前 token;左括号前后均不加空格
        const tight = t === ',' || t === ')' || t === ';' || t === '(' || tokens[i - 1] === '('
        if (!tight && !/\s$/.test(tokens[i - 1])) parts.push(' ')
      }
    }
    parts.push(t)
  }
  return parts.join('')
}

export function SqlFormatterClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('sql-formatter', locale, key, fb)

  const [input, setInput] = useState('')
  const [mode, setMode] = useState<'format' | 'minify'>('format')

  const result = useMemo<{ output?: string; error?: string }>(() => {
    if (!input.trim()) return {}
    try {
      return { output: mode === 'format' ? formatSql(input) : minifySql(input) }
    } catch (e) {
      return { error: e instanceof Error ? e.message : L('couldNotFormat', 'Could not format SQL') }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, mode, locale])

  const handleLoadSample = useCallback(() => setInput(SAMPLE_SQL), [])

  const inputCls =
    'w-full rounded-lg border p-4 font-mono text-xs shadow-sm outline-none transition focus:ring-2'

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="sql-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {L('inputLabel', 'Paste your SQL')}
          </label>
          <div className="flex items-center gap-2">
            <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
          </div>
        </div>
        <textarea
          id="sql-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="select * from users where id = 1"
          rows={6}
          spellCheck={false}
          className={inputCls}
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
        />
      </div>

      {/* 模式切换 */}
      <div className="flex gap-2">
        {(['format', 'minify'] as const).map((m) => (
          <button
            key={m}
            type="button"
            aria-pressed={mode === m}
            onClick={() => setMode(m)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium capitalize transition ${
              mode === m ? 'text-white' : 'border hover:bg-brand-50 dark:hover:bg-brand-950/40'
            }`}
            style={
              mode === m
                ? { backgroundColor: 'rgb(var(--primary))' }
                : { borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }
            }
          >
            {m === 'format' ? L('modeFormat', 'format') : L('modeMinify', 'minify')}
          </button>
        ))}
      </div>

      {result.error && (
        <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">⚠️ {result.error}</div>
      )}

      {result.output && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{mode === 'format' ? L('formattedSql', 'Formatted SQL') : L('minifiedSql', 'Minified SQL')}</span>
            <CopyButton value={result.output} label={L('copy', 'Copy')} />
          </div>
          <pre
            className="overflow-x-auto rounded-lg border bg-slate-50 p-4 text-xs dark:bg-slate-800/60"
            style={{ borderColor: 'rgb(var(--border))' }}
          >
            <code>{result.output}</code>
          </pre>
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('note', '🔒 100% client-side — a generic ANSI SQL formatter. Keywords are capitalized; indentation follows clause hierarchy.')}
      </p>
    </div>
  )
}
