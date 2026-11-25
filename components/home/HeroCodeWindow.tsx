import type { ReactNode } from 'react'

const loanSample = {
  tool: 'loan-calculator',
  inputs: { amount: 20000, rate: 7.5, years: 5 },
  monthly: 400.76,
  runsOn: 'your-browser',
  signup: false,
}

// This is a static illustration. The loan tool performs its own calculations.
function colorLine(line: string): ReactNode[] {
  return line.split(/("(?:[^"\\]|\\.)*"(?=:)|"(?:[^"\\]|\\.)*"|\b\d+(?:\.\d+)?\b|\bfalse\b)/).map((token, index, tokens) => {
    if (!token) return null
    if (token.startsWith('"')) {
      const color = tokens[index + 1]?.startsWith(':') ? 'text-accent-amber' : 'text-accent-teal'
      return <span key={index} className={color}>{token}</span>
    }
    if (/^\d|^false$/.test(token)) return <span key={index} className="text-[#e0a08a]">{token}</span>
    return token
  })
}

export function HeroCodeWindow({ status }: { status: string }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-on-dark/10 bg-surface-dark text-on-dark-soft">
      <div className="flex items-center gap-2 border-b border-on-dark/10 px-[18px] py-3.5">
        <span aria-hidden="true" className="flex gap-2">
          {[1, 2, 3].map(dot => <i key={dot} className="h-2.5 w-2.5 rounded-full bg-[#3a3732]" />)}
        </span>
        <span className="ml-2 rounded-md bg-dark-elevated px-2.5 py-1 font-mono text-xs">json-formatter</span>
      </div>
      <pre className="overflow-x-auto bg-dark-soft py-[18px] font-mono text-[13.5px] leading-[1.7]" dir="ltr">
        <code>
          {JSON.stringify(loanSample, null, 2).split('\n').map((line, index) => (
            <span key={index} className="block">
              <span aria-hidden="true" className="inline-block w-11 select-none pr-4 text-right text-on-dark-soft/80">{index + 1}</span>
              {colorLine(line)}
            </span>
          ))}
        </code>
      </pre>
      <div className="flex items-center gap-2 bg-dark-elevated px-[18px] py-2.5 font-mono text-xs">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-teal" aria-hidden="true" />
        <span className="text-on-dark-soft">{status}</span><span className="ml-auto shrink-0">UTF-8</span>
      </div>
    </div>
  )
}
