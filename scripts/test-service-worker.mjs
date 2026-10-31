import assert from 'node:assert/strict'
import fs from 'node:fs'
import vm from 'node:vm'
import test from 'node:test'

const source = fs.readFileSync(new URL('../public/sw.js', import.meta.url), 'utf8')
function harness() {
  const handlers = {}, stores = new Map()
  const cache = (name) => {
    if (!stores.has(name)) stores.set(name, new Map())
    const entries = stores.get(name)
    return {
      match: async (request) => entries.get(typeof request === 'string' ? request : request.url),
      put: async (request, response) => entries.set(request.url, response),
      add: async (url) => entries.set(url, { body: `shell:${url}` }),
      keys: async () => [...entries.keys()],
      delete: async (key) => entries.delete(key),
    }
  }
  const ctx = vm.createContext({
    URL,
    self: { location: { origin: 'https://toolhub.test' }, addEventListener: (name, fn) => handlers[name] = fn, skipWaiting: async () => {}, clients: { claim: async () => {} } },
    caches: { open: async (name) => cache(name), keys: async () => [...stores.keys()], delete: async (name) => stores.delete(name) },
    fetch: async () => { throw new Error('offline') },
  })
  vm.runInContext(source, ctx)
  return { ctx, stores, cache, handlers }
}
const request = (path, mode = 'navigate') => ({ url: `https://toolhub.test${path}`, mode, headers: { get: () => mode === 'navigate' ? 'text/html' : 'text/x-component' } })

test('offline navigation uses shell precached during installation', async () => {
  const h = harness(); let installed
  h.handlers.install({ waitUntil: (promise) => installed = promise }); await installed
  const result = await h.ctx.networkFirst(request('/never-visited/'))
  assert.equal(result.body, 'shell:/')
})
test('offline previously visited page takes precedence over shell', async () => {
  const h = harness()
  await h.cache('runtime-toolhub-sw-v1.0.3').put(request('/tools/loan-calculator/'), { body: 'loan' })
  assert.equal((await h.ctx.networkFirst(request('/tools/loan-calculator/'))).body, 'loan')
})
test('uncached RSC request never receives HTML fallback', async () => {
  const h = harness(); await h.cache('static-toolhub-sw-v1.0.3').add('/')
  await assert.rejects(h.ctx.networkFirst(request('/tools/loan-calculator/index.txt', 'cors')), /offline/)
})
test('activation deletes only obsolete ToolHub caches', async () => {
  const h = harness()
  for (const name of ['static-toolhub-sw-v1.0.2', 'runtime-toolhub-sw-v1.0.2', 'static-toolhub-sw-v1.0.3', 'runtime-toolhub-sw-v1.0.3', 'other-app-cache']) h.cache(name)
  let activated; h.handlers.activate({ waitUntil: p => activated = p }); await activated
  assert.deepEqual([...h.stores.keys()], ['static-toolhub-sw-v1.0.3', 'runtime-toolhub-sw-v1.0.3', 'other-app-cache'])
})
test('API requests bypass service worker response interception', () => {
  const h = harness(); let intercepted = false
  h.handlers.fetch({ request: { ...request('/api/stats'), method: 'GET' }, respondWith: () => intercepted = true })
  assert.equal(intercepted, false)
})
