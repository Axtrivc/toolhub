import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { test } from 'node:test'
import vm from 'node:vm'
import ts from 'typescript'

const require = createRequire(import.meta.url)
const cache = new Map()

function loadModule(relativePath, imports = {}, globals = {}) {
  const source = readFileSync(new URL(relativePath, import.meta.url), 'utf8')
  if (!cache.has(relativePath)) {
    cache.set(relativePath, ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
    }).outputText)
  }
  const exports = {}
  vm.runInNewContext(cache.get(relativePath), {
    exports, ...globals,
    require(name) { return name in imports ? imports[name] : require(name) },
  })
  return exports
}

const translations = {
  t: (_locale, key) => key,
  tc: (_locale, category) => category,
  getToolName: (_locale, _slug, name) => name,
  getToolShortIntro: (_locale, _slug, intro) => intro,
}
const search = loadModule('../lib/tool-search.ts', { './i18n': translations })
const inline = loadModule('../lib/inline-answer.ts')
const tools = Object.fromEntries(['alpha', 'beta'].map((slug) => [slug, {
  slug, name: slug, h1: slug, keywords: [], shortIntro: '', category: 'test',
}]))

function findNode(node, predicate) {
  if (!node || typeof node !== 'object') return undefined
  if (Array.isArray(node)) {
    for (const child of node) {
      const found = findNode(child, predicate)
      if (found) return found
    }
    return undefined
  }
  if (predicate(node)) return node
  return findNode(node.props?.children, predicate)
}

function paletteHarness() {
  const state = []
  const effects = []
  const listeners = new Map()
  const routes = []
  let cursor = 0
  let closed = 0
  let tree
  let mounting = true
  // 假面板/焦点元素:驱动窗口级 Tab 陷阱的边界逻辑与焦点归还
  const doc = { body: { style: {} }, activeElement: null }
  const focusLog = []
  const firstEl = { focus() { focusLog.push('first'); doc.activeElement = firstEl } }
  const midEl = { focus() { focusLog.push('mid'); doc.activeElement = midEl } }
  const lastEl = { focus() { focusLog.push('last'); doc.activeElement = lastEl } }
  const fakePanel = {
    querySelectorAll: () => [firstEl, midEl, lastEl],
    contains: (el) => el === firstEl || el === midEl || el === lastEl,
    querySelector: () => null,
    focus() {},
  }
  const react = {
    useState(initial) {
      const index = cursor++
      if (!(index in state)) state[index] = initial
      return [state[index], (next) => { state[index] = typeof next === 'function' ? next(state[index]) : next }]
    },
    useRef: () => ({ current: fakePanel }),
    useId: () => 'search-test',
    useMemo: (calculate) => calculate(),
    useEffect: (effect) => { if (mounting) effects.push(effect) },
  }
  class HTMLElement {}
  const { SearchPalette } = loadModule('../components/SearchPalette.tsx', {
    react,
    'react-dom': { createPortal: (children) => children },
    'next/link': { default: 'a' },
    'next/navigation': { useRouter: () => ({ push: (route) => routes.push(route) }) },
    '@/lib/inline-answer': inline,
    '@/lib/tool-search': search,
    '@/lib/related-tools': { toolLiteMeta: tools },
    '@/lib/tool-icons': { getToolIcon: () => 'test' },
    '@/components/SmartIcon': { SmartIcon: 'span' },
    '@/lib/i18n': translations,
    './motion/MotionPrimitives': { motion: { div: 'div', button: 'button' }, AnimatePresence: 'div', useReducedMotion: () => true },
  }, {
    HTMLElement,
    document: doc,
    window: {
      requestAnimationFrame: () => 1,
      cancelAnimationFrame() {},
      addEventListener: (name, handler) => listeners.set(name, handler),
      removeEventListener: (name) => listeners.delete(name),
    },
  })
  function render() {
    cursor = 0
    tree = SearchPalette({ locale: 'en', open: true, onClose: () => { closed++ } })
  }
  render()
  const opener = Object.create(HTMLElement.prototype)
  opener.focus = () => focusLog.push('opener')
  doc.activeElement = opener
  const cleanups = []
  for (const effect of effects) {
    const cleanup = effect()
    if (typeof cleanup === 'function') cleanups.push(cleanup)
  }
  mounting = false
  render()
  return {
    doc,
    firstEl,
    midEl,
    lastEl,
    focusLog,
    cleanups: () => cleanups,
    routes,
    tree: () => tree,
    render: () => render(),
    get closed() { return closed },
    input: () => findNode(tree, (node) => node.type === 'input'),
    query(value) {
      this.input().props.onChange({ target: { value } })
      render()
    },
    key(key, nativeEvent = {}) {
      let prevented = false
      const event = { key, ...nativeEvent, nativeEvent, preventDefault() { prevented = true } }
      this.input().props.onKeyDown(event)
      listeners.get('keydown')?.(event)
      render()
      return prevented
    },
    selected: () => findNode(tree, (node) => node.props?.role === 'option' && node.props['aria-selected']),
  }
}

for (const key of ['Enter', 'ArrowDown', 'ArrowUp', 'Escape']) {
  for (const nativeEvent of [{ isComposing: true }, { isComposing: false, keyCode: 229 }]) {
    test(`IME ${key} stays with the input method: ${JSON.stringify(nativeEvent)}`, () => {
      const palette = paletteHarness()
      palette.key('ArrowDown')
      const selected = palette.selected().props.id
      assert.equal(palette.key(key, nativeEvent), false)
      assert.equal(palette.selected().props.id, selected)
      assert.equal(palette.closed, 0)
      assert.equal(palette.routes.length, 0)
    })
  }
}

test('normal arrow navigation and Enter open the selected tool', () => {
  const palette = paletteHarness()
  assert.equal(palette.key('ArrowDown'), true)
  assert.equal(palette.input().props['aria-activedescendant'], palette.selected().props.id)
  palette.key('Enter')
  assert.deepEqual(palette.routes, ['/tools/beta/'])
  assert.equal(palette.closed, 1)
})

test('normal Escape still closes the palette', () => {
  const palette = paletteHarness()
  palette.key('Escape')
  assert.equal(palette.closed, 1)
})

test('inline answer exposes its active option to assistive technology', () => {
  const palette = paletteHarness()
  palette.query('2+2')
  assert.equal(palette.input().props['aria-activedescendant'], palette.selected().props.id)
  palette.key('Enter')
  assert.equal(palette.routes.length, 1)
  assert.equal(palette.closed, 1)
})

test('empty results have no active descendant and Enter does not navigate', () => {
  const palette = paletteHarness()
  palette.query('zzzz-no-such-tool')
  assert.equal(palette.input().props['aria-activedescendant'], undefined)
  palette.key('ArrowDown')
  palette.key('Enter')
  assert.equal(palette.routes.length, 0)
  assert.equal(palette.closed, 0)
})

test('empty results render an actionable empty state whose clear button resets the query', () => {
  const palette = paletteHarness()
  palette.query('zzzz-no-such-tool')
  const clear = findNode(
    palette.tree(),
    (node) => node.type === 'button' && node.props.children === 'searchEmptyClear',
  )
  assert.ok(clear, 'empty state renders the clear button')
  clear.props.onClick()
  palette.render()
  assert.equal(palette.input().props.value, '')
  // 清空后结果恢复,活动选项回到第一项
  assert.equal(palette.input().props['aria-activedescendant'], 'search-test-opt-0')
})

test('empty state browse button navigates to the tools index and closes the palette', () => {
  const palette = paletteHarness()
  palette.query('zzzz-no-such-tool')
  const browse = findNode(
    palette.tree(),
    (node) => node.type === 'button' && node.props.children === 'searchEmptyBrowse',
  )
  assert.ok(browse, 'empty state renders the browse button')
  browse.props.onClick()
  assert.deepEqual(palette.routes, ['/tools/'])
  assert.equal(palette.closed, 1)
})

test('Home and End stay native in the input so text caret editing works', () => {
  const palette = paletteHarness()
  // 输入框不再拦截 Home/End:行首/行尾的原生光标编辑保留,结果高亮不受影响
  assert.equal(palette.key('End'), false)
  assert.equal(palette.selected().props['data-idx'], 0)
  assert.equal(palette.key('Home'), false)
  assert.equal(palette.selected().props['data-idx'], 0)
})

test('PageUp and PageDown move the selection by a page', () => {
  const palette = paletteHarness()
  palette.key('PageDown')
  assert.equal(palette.selected().props['data-idx'], 1)
  palette.key('PageUp')
  assert.equal(palette.selected().props['data-idx'], 0)
})

test('Tab is not intercepted by the input: native focus order, selection untouched', () => {
  const palette = paletteHarness()
  palette.doc.activeElement = palette.firstEl
  assert.equal(palette.key('Tab'), false)
  assert.equal(palette.selected().props['data-idx'], 0)
  palette.doc.activeElement = palette.midEl
  assert.equal(palette.key('Tab', { shiftKey: true }), false)
  assert.equal(palette.selected().props['data-idx'], 0)
})

test('window focus trap cycles only at the first/last boundary', () => {
  const palette = paletteHarness()
  // 焦点在末元素:Tab 送回首元素,不逃逸出弹窗
  palette.doc.activeElement = palette.lastEl
  assert.equal(palette.key('Tab'), true)
  assert.deepEqual(palette.focusLog, ['first'])
  // 焦点在首元素:Shift+Tab 送到末元素
  palette.doc.activeElement = palette.firstEl
  assert.equal(palette.key('Tab', { shiftKey: true }), true)
  assert.deepEqual(palette.focusLog, ['first', 'last'])
  // 焦点在面板内部且不在边界:原生放行,交给浏览器默认 Tab 顺序
  palette.doc.activeElement = palette.firstEl
  assert.equal(palette.key('Tab'), false)
})

test('Tab with no results stays native so the empty-state buttons are reachable', () => {
  const palette = paletteHarness()
  palette.query('zzzz-no-such-tool')
  palette.doc.activeElement = palette.firstEl
  assert.equal(palette.key('Tab'), false)
  palette.doc.activeElement = palette.midEl
  assert.equal(palette.key('Tab', { shiftKey: true }), false)
  assert.equal(palette.routes.length, 0)
  assert.equal(palette.closed, 0)
  // 空态的两个按钮是普通按钮(无 tabindex=-1),Tab 焦点顺序天然可达
  const clear = findNode(
    palette.tree(),
    (node) => node.type === 'button' && node.props.children === 'searchEmptyClear',
  )
  const browse = findNode(
    palette.tree(),
    (node) => node.type === 'button' && node.props.children === 'searchEmptyBrowse',
  )
  assert.ok(clear, 'clear button rendered')
  assert.ok(browse, 'browse button rendered')
  assert.equal(clear.props.tabIndex, undefined)
  assert.equal(browse.props.tabIndex, undefined)
})

test('Escape closes the palette and hands focus back to the opener', () => {
  const palette = paletteHarness()
  assert.equal(palette.key('Escape'), true)
  assert.equal(palette.closed, 1)
  // 关闭路径共用 open effect 的清理:归还焦点给打开前元素(Header 搜索按钮)
  assert.equal(palette.focusLog.length, 0)
  palette.cleanups().forEach((cleanup) => cleanup())
  assert.ok(palette.focusLog.includes('opener'))
})
