import assert from 'node:assert/strict'
import test from 'node:test'
import { loadRepoModule } from './tool-smoke.mjs'
import path from 'node:path'
import QRCode from 'qrcode'
const load = (p) => loadRepoModule(path.resolve(p))
const { solverFilter } = load('lib/wordle-solver.ts')
const { countWords, countSentences } = load('lib/text-stats.ts')
const { calcLoan } = load('lib/loan.ts')
const { QR_QUIET_ZONE } = load('lib/qr-config.ts')

test('Wordle green plus yellow means two distinct occurrences', () => {
  assert.deepEqual(solverFilter(['alone', 'adapt'], ['a', '', '', '', ''], 'a', ''), ['adapt'])
})
test('Wordle grey duplicate limits to exactly the confirmed multiplicity', () => {
  assert.deepEqual(solverFilter(['eerie', 'eaten', 'elite'], ['e', '', '', '', ''], 'e', 'e'), ['elite', 'eaten'])
})
test('Wordle pure grey, positions and repeated yellow constraints', () => {
  assert.deepEqual(solverFilter(['sleet', 'steel', 'steal'], ['', '', '', '', 't'], 'ee', 'a'), ['sleet'])
  assert.deepEqual(solverFilter(['apple', 'crane'], ['', '', '', '', ''], '', 'a'), [])
})
test('word counts exclude punctuation and preserve bilingual units', () => {
  assert.equal(countWords('Hello — world!'), 2)
  assert.equal(countWords('你好，世界！'), 4)
  assert.equal(countWords('Hello 世界!'), 3)
  assert.equal(countWords('... 😀 —'), 0)
  assert.equal(countWords("don't 3.14"), 2)
})
test('sentence heuristic includes the unfinished tail and ignores punctuation', () => {
  assert.equal(countSentences('One sentence. Another unfinished'), 2)
  assert.equal(countSentences('Pi is 3.14. Next'), 2)
  assert.equal(countSentences('你好。世界'), 2)
  assert.equal(countSentences('!!! ... 😀'), 0)
  assert.equal(countSentences(''), 0)
})
test('loan zero-rate fixture and amortization conservation', () => {
  const zero = calcLoan(1200, 0, 1)
  assert.equal(zero.monthlyPayment, 100)
  assert.equal(zero.totalInterest, 0)
  assert.equal(zero.schedule.length, 12)
  const loan = calcLoan(20000, 7.5, 5)
  assert.ok(Math.abs(loan.monthlyPayment - 400.76) < .005)
  assert.equal(loan.schedule.at(-1).balance, 0)
  assert.ok(Math.abs(loan.schedule.reduce((n,r) => n+r.principal, 0)-20000) < 1e-7)
  assert.ok(Math.abs(loan.totalPaid-loan.totalInterest-20000) < 1e-7)
})
test('QR SVG preserves four-module quiet zone around the matrix', async () => {
  const payload = 'https://example.com'
  const qr = QRCode.create(payload, {errorCorrectionLevel:'M'})
  const svg = await QRCode.toString(payload, {type:'svg', margin:QR_QUIET_ZONE, errorCorrectionLevel:'M'})
  const size = qr.modules.size + 8
  assert.equal(QR_QUIET_ZONE, 4)
  assert.ok(svg.includes(`viewBox="0 0 ${size} ${size}"`))
  assert.ok(svg.includes('M4 4.5'))
})
