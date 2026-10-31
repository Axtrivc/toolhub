import assert from 'node:assert/strict'
import test from 'node:test'
// The repository's existing smoke loader transpiles TypeScript in memory.
import { loadRepoModule } from './tool-smoke.mjs'
import { fileURLToPath } from 'node:url'
const { getPublishedTools, getRelatedTools } = loadRepoModule(fileURLToPath(new URL('../lib/tools.ts', import.meta.url)))
const { getRelatedToolsLite } = loadRepoModule(fileURLToPath(new URL('../lib/related-tools.ts', import.meta.url)))
const published = getPublishedTools()
const slugs = new Set(published.map(t => t.slug))
test('loan related cards lead to amortization and mortgage workflows', () => {
  assert.deepEqual(getRelatedTools('loan-calculator', 2).map(t => t.slug), ['amortization-table-generator', 'mortgage-calculator'])
})
test('all recommendations are unique published tools and exclude themselves', () => {
  for (const tool of published) {
    const result = getRelatedTools(tool.slug).map(t => t.slug)
    assert.equal(result.length, new Set(result).size)
    assert.ok(result.every(slug => slugs.has(slug) && slug !== tool.slug), tool.slug)
    assert.equal(result.length, 4)
  }
})
test('generated client recommendations match the server registry for all tools', () => {
  for (const tool of published) assert.deepEqual(getRelatedToolsLite(tool.slug).map(t => t.slug), getRelatedTools(tool.slug).map(t => t.slug), tool.slug)
})
test('unknown tool and zero limit have no recommendations', () => {
  assert.deepEqual(getRelatedTools('missing-tool'), [])
  assert.deepEqual(getRelatedTools('loan-calculator', 0), [])
})
