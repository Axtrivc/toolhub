'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import { CalculatorField } from '@/components/calculator/CalculatorField'
import { BreakdownChart } from '@/components/calculator/BreakdownChart'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

const CURRENCIES: { code: string; symbol: string; decimals: number }[] = [
  { code: 'USD', symbol: '$', decimals: 2 },
  { code: 'EUR', symbol: '€', decimals: 2 },
  { code: 'GBP', symbol: '£', decimals: 2 },
  { code: 'JPY', symbol: '¥', decimals: 0 },
  { code: 'CNY', symbol: '¥', decimals: 2 },
  { code: 'CAD', symbol: 'C$', decimals: 2 },
  { code: 'AUD', symbol: 'A$', decimals: 2 },
  { code: 'CHF', symbol: 'Fr', decimals: 2 },
  { code: 'INR', symbol: '₹', decimals: 2 },
  { code: 'KRW', symbol: '₩', decimals: 0 },
]

interface LineItem {
  id: number
  description: string
  qty: string
  rate: string
}

/**
 * 'YYYY-MM-DD' → 本地化短日期(en → 'Aug 9, 2026',与旧手写英文映射逐字节一致)。
 * 只在挂载后(日期已在 effect 中填充)被调用,locale 走应用语言,首帧不受影响。
 */
function formatDate(iso: string, localeTag: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!m) return iso
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
  return d.toLocaleDateString(localeTag, { year: 'numeric', month: 'short', day: 'numeric' })
}

function toISODate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

// 打印窗口注入此 script 在加载后自动弹出打印对话框;
// 下载存档的 HTML 不带它,避免每次打开存档都弹打印。
const AUTO_PRINT_SCRIPT = '\n<script>window.onload = function () { window.print(); };</script>'

/**
 * 自由职业者发票生成器:左侧表单 + 右侧实时预览,
 * 打印/下载均为完全自包含的内联样式 HTML(纯客户端,刷新即丢数据)。
 */
export function FreelanceInvoiceGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('freelance-invoice-generator', locale, key, fb)
  // 数字/日期按应用 locale 格式化;en 首帧恒 en-US(与 SSR 一致),zh/es/de 得到本地格式
  const localeTag = locale === 'en' ? 'en-US' : locale

  const [yourName, setYourName] = useState('')
  const [yourEmail, setYourEmail] = useState('')
  const [clientName, setClientName] = useState('')
  const [invoiceNumber, setInvoiceNumber] = useState('INV-0001')
  const [issueDate, setIssueDate] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [taxPct, setTaxPct] = useState('')
  const [notes, setNotes] = useState('')
  const [items, setItems] = useState<LineItem[]>([{ id: 1, description: '', qty: '1', rate: '0' }])
  // 打印窗口被弹窗拦截器吃掉时给用户可见反馈(而非静默无反应),并提示下载兜底
  const [popupBlocked, setPopupBlocked] = useState(false)
  const nextId = useRef(2)

  // 日期默认值依赖"今天",挂载后在 useEffect 中设置,避免 SSG 输出与水合不一致
  useEffect(() => {
    const today = new Date()
    const due = new Date(today)
    due.setDate(due.getDate() + 30)
    setIssueDate((v) => v || toISODate(today))
    setDueDate((v) => v || toISODate(due))
  }, [])

  const cur = CURRENCIES.find((c) => c.code === currency) ?? CURRENCIES[0]
  const fmt = (n: number) =>
    `${cur.symbol}${n.toLocaleString(localeTag, { minimumFractionDigits: cur.decimals, maximumFractionDigits: cur.decimals })}`

  const rows = useMemo(
    () =>
      items.map((it) => {
        const qty = Number(it.qty)
        const rate = Number(it.rate)
        const valid = isFinite(qty) && isFinite(rate) && qty >= 0 && rate >= 0
        return { ...it, qtyN: qty, rateN: rate, amount: valid ? qty * rate : 0, valid }
      }),
    [items]
  )

  const subtotal = useMemo(() => rows.reduce((s, r) => s + r.amount, 0), [rows])
  const taxN = Number(taxPct)
  const taxRate = taxPct.trim() === '' || !isFinite(taxN) || taxN < 0 ? 0 : taxN
  const taxAmount = (subtotal * taxRate) / 100
  const total = subtotal + taxAmount

  const updateItem = (id: number, patch: Partial<LineItem>) =>
    setItems((list) => list.map((it) => (it.id === id ? { ...it, ...patch } : it)))
  const addItem = () => setItems((list) => [...list, { id: nextId.current++, description: '', qty: '1', rate: '0' }])
  const removeItem = (id: number) => setItems((list) => (list.length > 1 ? list.filter((it) => it.id !== id) : list))

  // 自包含 HTML(内联样式,无外部 CSS)—— 用于打印窗口与 Download HTML
  const invoiceHtml = useMemo(() => {
    const e = escapeHtml
    const itemRows = rows
      .map(
        (r) => `<tr>
  <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;">${e(r.description) || '<span style="color:#9ca3af;">—</span>'}</td>
  <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;text-align:right;font-family:ui-monospace,monospace;">${r.valid ? r.qtyN : '—'}</td>
  <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;text-align:right;font-family:ui-monospace,monospace;">${r.valid ? fmt(r.rateN) : '—'}</td>
  <td style="padding:10px 12px;border-bottom:1px solid #e5e7eb;text-align:right;font-family:ui-monospace,monospace;">${r.valid ? fmt(r.amount) : '—'}</td>
</tr>`
      )
      .join('\n')
    const taxRow =
      taxRate > 0
        ? `<tr><td style="padding:6px 12px;color:#6b7280;">${L('tax', 'Tax')} (${taxRate}%)</td><td style="padding:6px 12px;text-align:right;font-family:ui-monospace,monospace;">${fmt(taxAmount)}</td></tr>`
        : ''
    const notesBlock = notes.trim()
      ? `<div style="margin-top:32px;padding-top:16px;border-top:1px solid #e5e7eb;">
  <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#9ca3af;margin-bottom:6px;">${L('notes', 'Notes')}</div>
  <div style="font-size:13px;color:#4b5563;white-space:pre-wrap;">${e(notes)}</div>
</div>`
      : ''
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${L('invoiceTitle', 'Invoice')} ${e(invoiceNumber)}</title>
<style>@media print { body { margin: 0; } }</style>
</head>
<body style="margin:0;padding:40px;background:#f9fafb;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111827;">
<div style="max-width:720px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:48px;">
  <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px;">
    <div>
      <div style="font-size:24px;font-weight:700;">${e(yourName) || L('yourNamePlaceholder', 'Your Name')}</div>
      ${yourEmail ? `<div style="font-size:13px;color:#6b7280;margin-top:4px;">${e(yourEmail)}</div>` : ''}
    </div>
    <div style="text-align:right;">
      <div style="font-size:28px;font-weight:800;letter-spacing:0.12em;color:#2563eb;">${L('invoiceLabel', 'INVOICE')}</div>
      <div style="font-size:13px;color:#6b7280;margin-top:4px;font-family:ui-monospace,monospace;">${e(invoiceNumber)}</div>
    </div>
  </div>
  <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:24px;margin-top:32px;">
    <div>
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#9ca3af;margin-bottom:6px;">${L('billTo', 'Bill To')}</div>
      <div style="font-size:14px;font-weight:600;">${e(clientName) || `<span style="color:#9ca3af;">${L('clientNamePlaceholder', 'Client name')}</span>`}</div>
    </div>
    <div style="text-align:right;font-size:13px;">
      <div><span style="color:#9ca3af;">${L('issueDate', 'Issue date:')}</span> <span style="font-family:ui-monospace,monospace;">${formatDate(issueDate, localeTag) || '—'}</span></div>
      <div style="margin-top:4px;"><span style="color:#9ca3af;">${L('dueDate', 'Due date:')}</span> <span style="font-family:ui-monospace,monospace;">${formatDate(dueDate, localeTag) || '—'}</span></div>
    </div>
  </div>
  <table style="width:100%;border-collapse:collapse;margin-top:32px;font-size:14px;">
    <thead>
      <tr style="background:#f3f4f6;">
        <th style="padding:10px 12px;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;">${L('description', 'Description')}</th>
        <th style="padding:10px 12px;text-align:right;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;">${L('qty', 'Qty')}</th>
        <th style="padding:10px 12px;text-align:right;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;">${L('rate', 'Rate')}</th>
        <th style="padding:10px 12px;text-align:right;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:#6b7280;">${L('amount', 'Amount')}</th>
      </tr>
    </thead>
    <tbody>
${itemRows}
    </tbody>
  </table>
  <div style="display:flex;justify-content:flex-end;margin-top:16px;">
    <table style="font-size:14px;min-width:240px;">
      <tr><td style="padding:6px 12px;color:#6b7280;">${L('subtotal', 'Subtotal')}</td><td style="padding:6px 12px;text-align:right;font-family:ui-monospace,monospace;">${fmt(subtotal)}</td></tr>
      ${taxRow}
      <tr style="border-top:2px solid #111827;"><td style="padding:10px 12px;font-weight:700;font-size:16px;">${L('total', 'Total')}</td><td style="padding:10px 12px;text-align:right;font-weight:700;font-size:16px;font-family:ui-monospace,monospace;">${fmt(total)}</td></tr>
    </table>
  </div>
  ${notesBlock}
</div>
</body>
</html>`
  }, [rows, taxRate, taxAmount, subtotal, total, notes, invoiceNumber, yourName, yourEmail, clientName, issueDate, dueDate, currency, locale]) // eslint-disable-line react-hooks/exhaustive-deps

  const handlePrint = () => {
    // 用 Blob URL 替代 win.document.write(老 API,部分浏览器已限制);打印窗口注入自动打印 script
    const blob = new Blob([invoiceHtml + AUTO_PRINT_SCRIPT], { type: 'text/html;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const win = window.open(url, '_blank')
    if (!win) {
      URL.revokeObjectURL(url)
      setPopupBlocked(true)
      return
    }
    setPopupBlocked(false)
    // 文档解析完成后即可回收 URL;revoke 不影响已加载文档
    win.addEventListener('load', () => URL.revokeObjectURL(url), { once: true })
  }

  const handleDownload = () => {
    const blob = new Blob([invoiceHtml], { type: 'text/html;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${invoiceNumber || 'invoice'}.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const inputCls = 'w-full rounded-lg border p-3 shadow-sm outline-none transition focus:ring-2'
  const inputStyle = {
    borderColor: 'rgb(var(--border-strong))',
    backgroundColor: 'rgb(var(--bg-card))',
    color: 'rgb(var(--text))',
  } as const

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* 左侧表单 */}
        <div className="space-y-4">
          <CalculatorField id="your-name" label={L('yourNameCompany', 'Your name / company')} value={yourName} onChange={setYourName} type="text" placeholder="Acme Design Studio" />
          <CalculatorField id="your-email" label={L('yourEmail', 'Your email')} value={yourEmail} onChange={setYourEmail} type="text" placeholder="you@example.com" />
          <CalculatorField id="client-name" label={L('clientName', 'Client name')} value={clientName} onChange={setClientName} type="text" placeholder="Client Inc." />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <CalculatorField id="invoice-number" label={L('invoiceNumber', 'Invoice number')} value={invoiceNumber} onChange={setInvoiceNumber} type="text" placeholder="INV-0001" />
            <CalculatorField id="issue-date" label={L('issueDateLabel', 'Issue date')} value={issueDate} onChange={setIssueDate} type="date" />
            <CalculatorField id="due-date" label={L('dueDateLabel', 'Due date')} value={dueDate} onChange={setDueDate} type="date" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="currency" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('currency', 'Currency')}
              </label>
              <select id="currency" value={currency} onChange={(e) => setCurrency(e.target.value)} className={inputCls} style={inputStyle}>
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} ({c.symbol})
                  </option>
                ))}
              </select>
            </div>
            <CalculatorField id="tax-pct" label={L('taxOptional', 'Tax (optional)')} value={taxPct} onChange={setTaxPct} suffix="%" placeholder="0" />
          </div>

          {/* 行项目 */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('lineItems', 'Line items')}
              </span>
              <button type="button" onClick={addItem} className="btn btn-secondary text-xs">
                {L('addItem', '+ Add item')}
              </button>
            </div>
            <div className="space-y-2">
              {items.map((it, idx) => (
                <div key={it.id} className="flex items-start gap-2">
                  <input
                    type="text"
                    value={it.description}
                    onChange={(e) => updateItem(it.id, { description: e.target.value })}
                    placeholder={`${L('descriptionOfItem', 'Description of item ')}${idx + 1}`}
                    aria-label={`${L('itemPrefix', 'Item ')}${idx + 1} ${L('descriptionWord', 'description')}`}
                    className={`${inputCls} min-w-0 flex-1 p-2.5 text-sm`}
                    style={inputStyle}
                  />
                  <input
                    type="number"
                    value={it.qty}
                    onChange={(e) => updateItem(it.id, { qty: e.target.value })}
                    placeholder={L('qty', 'Qty')}
                    aria-label={`${L('itemPrefix', 'Item ')}${idx + 1} ${L('quantityWord', 'quantity')}`}
                    min="0"
                    step="any"
                    className={`${inputCls} w-20 p-2.5 text-sm`}
                    style={inputStyle}
                  />
                  <input
                    type="number"
                    value={it.rate}
                    onChange={(e) => updateItem(it.id, { rate: e.target.value })}
                    placeholder={L('rate', 'Rate')}
                    aria-label={`${L('itemPrefix', 'Item ')}${idx + 1} ${L('unitRateWord', 'unit rate')}`}
                    min="0"
                    step="any"
                    className={`${inputCls} w-28 p-2.5 text-sm`}
                    style={inputStyle}
                  />
                  <button
                    type="button"
                    onClick={() => removeItem(it.id)}
                    disabled={items.length <= 1}
                    aria-label={`${L('removeItemPrefix', 'Remove item ')}${idx + 1}`}
                    className="rounded-lg border px-2.5 py-2 text-sm transition disabled:cursor-not-allowed disabled:opacity-40"
                    style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('notesLabel', 'Notes (payment terms, thank-you message…)')}
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder={L('notesPlaceholder', 'Payment due within 30 days. Thank you for your business!')}
              className={`${inputCls} font-mono text-sm`}
              style={inputStyle}
            />
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={handlePrint} className="btn btn-primary">
              {L('printSavePdf', 'Print / Save as PDF')}
            </button>
            <button type="button" onClick={handleDownload} className="btn btn-secondary">
              {L('downloadHtml', 'Download HTML')}
            </button>
          </div>
          {popupBlocked && (
            <p
              role="alert"
              className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-200"
            >
              {L('popupBlocked', '⚠️ Print window was blocked by your browser. Use "Download HTML" instead, then open the file and print it.')}
            </p>
          )}
        </div>

        {/* 右侧实时预览(纸质发票风格) */}
        <div className="rounded-xl border bg-white p-6 text-slate-900 shadow-sm sm:p-8" style={{ borderColor: 'rgb(var(--border))' }}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="text-xl font-bold">{yourName || <span className="text-slate-300">{L('yourNamePlaceholder', 'Your Name')}</span>}</div>
              {yourEmail && <div className="mt-0.5 text-xs text-slate-500">{yourEmail}</div>}
            </div>
            <div className="text-right">
              <div className="text-2xl font-extrabold tracking-widest text-blue-600">{L('invoiceLabel', 'INVOICE')}</div>
              <div className="mt-0.5 font-mono text-xs text-slate-500">{invoiceNumber}</div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-between gap-4">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">{L('billTo', 'Bill To')}</div>
              <div className="mt-1 text-sm font-semibold">{clientName || <span className="text-slate-300">{L('clientNamePlaceholder', 'Client name')}</span>}</div>
            </div>
            <div className="text-right text-xs">
              <div>
                <span className="text-slate-400">{L('issueDate', 'Issue date:')}</span>{' '}
                <span className="font-mono">{issueDate ? formatDate(issueDate, localeTag) : '—'}</span>
              </div>
              <div className="mt-1">
                <span className="text-slate-400">{L('dueDate', 'Due date:')}</span>{' '}
                <span className="font-mono">{dueDate ? formatDate(dueDate, localeTag) : '—'}</span>
              </div>
            </div>
          </div>

          <table className="mt-6 w-full text-sm">
            <thead>
              <tr className="bg-slate-100 text-[10px] uppercase tracking-wider text-slate-500">
                <th className="rounded-l-md px-3 py-2 text-left font-medium">{L('description', 'Description')}</th>
                <th className="px-3 py-2 text-right font-medium">{L('qty', 'Qty')}</th>
                <th className="px-3 py-2 text-right font-medium">{L('rate', 'Rate')}</th>
                <th className="rounded-r-md px-3 py-2 text-right font-medium">{L('amount', 'Amount')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r) => (
                <tr key={r.id}>
                  <td className="px-3 py-2.5">{r.description || <span className="text-slate-300">—</span>}</td>
                  <td className="px-3 py-2.5 text-right font-mono text-sm">{r.valid ? r.qtyN : '—'}</td>
                  <td className="px-3 py-2.5 text-right font-mono text-sm">{r.valid ? fmt(r.rateN) : '—'}</td>
                  <td className="px-3 py-2.5 text-right font-mono text-sm">{r.valid ? fmt(r.amount) : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-end">
            <div className="w-56 text-sm">
              <div className="flex justify-between px-3 py-1.5">
                <span className="text-slate-500">{L('subtotal', 'Subtotal')}</span>
                <span className="font-mono">{fmt(subtotal)}</span>
              </div>
              {taxRate > 0 && (
                <div className="flex justify-between px-3 py-1.5">
                  <span className="text-slate-500">{L('tax', 'Tax')} ({taxRate}%)</span>
                  <span className="font-mono">{fmt(taxAmount)}</span>
                </div>
              )}
              <div className="flex justify-between border-t-2 border-slate-900 px-3 py-2 text-base font-bold">
                <span>{L('total', 'Total')}</span>
                <span className="font-mono">{fmt(total)}</span>
              </div>
            </div>
          </div>

          {notes.trim() && (
            <div className="mt-6 border-t border-slate-200 pt-4">
              <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">{L('notes', 'Notes')}</div>
              <div className="mt-1 whitespace-pre-wrap text-xs text-slate-600">{notes}</div>
            </div>
          )}
        </div>
      </div>

      {/* 发票构成:小计 / 税额 环形图(0 值分段自动隐藏;全 0 显示空环占位) */}
      <BreakdownChart
        title={L('chartTitle', 'Invoice breakdown')}
        slices={[
          { label: L('subtotal', 'Subtotal'), value: subtotal, color: '#3b82f6' },
          { label: L('tax', 'Tax'), value: taxAmount, color: '#f59e0b' },
        ]}
        centerLabel={L('total', 'Total')}
        centerValue={fmt(total)}
        emptyLabel={L('chartEmpty', 'Add line items to see the invoice breakdown.')}
      />

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('noteP1', '🔒 Everything stays in your browser — no data is uploaded or saved anywhere. That also means')}{' '}
        <strong>{L('noteStrong', 'refreshing the page discards your invoice')}</strong>{L('noteP2', ', so print or download the HTML before leaving.')}
      </p>
    </div>
  )
}
