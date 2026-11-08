import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import vm from 'node:vm'
import ts from 'typescript'

function loadModule(relativePath, globals = {}, imports = {}) {
  const source = readFileSync(new URL(relativePath, import.meta.url), 'utf8')
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX },
  }).outputText
  const exports = {}
  vm.runInNewContext(code, {
    exports, TextEncoder, TextDecoder, btoa, atob, ...globals,
    require(name) {
      if (!(name in imports)) throw new Error(`Unexpected import: ${name}`)
      return imports[name]
    },
  })
  return exports
}

const { transformScratchpad } = loadModule('../lib/scratchpad.ts')

test('Base64 round-trips Unicode, emoji, newlines and a leading BOM', () => {
  for (const text of ['hello', '你好 🎵\nEspaña', '\uFEFFnotes', '']) {
    assert.equal(transformScratchpad(transformScratchpad(text, 'b64enc'), 'b64dec'), text)
  }
})

test('invalid Base64 and non-UTF8 bytes are rejected instead of corrupting text', () => {
  for (const text of ['%', 'A', '/w==', 'wyg=']) {
    assert.throws(() => transformScratchpad(text, 'b64dec'))
  }
})

test('JSON formatting validates input and preserves values', () => {
  assert.equal(transformScratchpad('{"value":1}', 'json'), '{\n  "value": 1\n}')
  assert.throws(() => transformScratchpad('{broken', 'json'))
})

test('text actions retain line structure and clear excess whitespace', () => {
  assert.equal(transformScratchpad('  first  \n\n\nlast  ', 'trim'), 'first\n\nlast')
  assert.equal(transformScratchpad('Abc', 'upper'), 'ABC')
  assert.equal(transformScratchpad('Abc', 'lower'), 'abc')
})

test('large Unicode input avoids spread argument limits', () => {
  const text = '音乐🎵'.repeat(50_000)
  assert.equal(transformScratchpad(transformScratchpad(text, 'b64enc'), 'b64dec'), text)
})

test('clipboard success uses the native clipboard', async () => {
  let copied
  const { copyScratchpad } = loadModule('../lib/scratchpad.ts', {
    navigator: { clipboard: { writeText: async (text) => { copied = text } } },
  })
  assert.equal(await copyScratchpad('notes'), true)
  assert.equal(copied, 'notes')
})

for (const result of [true, false, 'throw']) {
  test(`clipboard fallback ${result} reports accurately and restores focus`, async () => {
    let removed = false
    let focused = false
    class HTMLElement { focus() { focused = true } }
    const { copyScratchpad } = loadModule('../lib/scratchpad.ts', {
      navigator: {}, HTMLElement,
      document: {
        activeElement: new HTMLElement(),
        body: { appendChild() {} },
        createElement: () => ({ style: {}, setAttribute() {}, select() {}, remove() { removed = true } }),
        execCommand() { if (result === 'throw') throw new Error('denied'); return result },
      },
    })
    assert.equal(await copyScratchpad('notes'), result === true)
    assert.equal(removed, true)
    assert.equal(focused, true)
  })
}

function workspaceHarness(storage) {
  const state = []
  const effects = []
  const listeners = {}
  let cursor = 0
  let mounted = false
  const module = loadModule('../hooks/useWorkspace.ts', {
    localStorage: storage,
    window: {
      addEventListener: (name, listener) => { listeners[name] = listener },
      removeEventListener: (name) => { delete listeners[name] },
    },
  }, {
    react: {
      useState(initial) {
        const index = cursor++
        if (!(index in state)) state[index] = initial
        return [state[index], (next) => { state[index] = next }]
      },
      useCallback: (callback) => callback,
      useEffect: (effect) => { if (!mounted) effects.push(effect) },
    },
    '@/lib/useFavorites': { useFavorites: () => ({ favorites: [], favoritesReady: true }) },
    '@/lib/useRecentlyUsed': { useRecentlyUsed: () => ({ recentlyUsed: [], recentlyReady: true }) },
  })
  function render() { cursor = 0; return module.useWorkspace() }
  render()
  mounted = true
  effects.forEach((effect) => effect())
  return { render, listeners }
}

test('storage write failures retain text without claiming it was saved', () => {
  const storage = {
    getItem: () => 'old notes',
    setItem: () => { throw new Error('quota') },
    removeItem: () => { throw new Error('denied') },
  }
  const harness = workspaceHarness(storage)
  assert.equal(harness.render().scratchpad, 'old notes')
  harness.render().setScratchpad('new notes')
  assert.equal(harness.render().scratchpad, 'new notes')
  assert.equal(harness.render().scratchpadSaved, false)
  storage.setItem = () => {}
  harness.render().setScratchpad('retry notes')
  assert.equal(harness.render().scratchpadSaved, true)
  harness.render().clearScratchpad()
  assert.equal(harness.render().scratchpadSaved, false)
})

test('unavailable storage does not claim saved on mount', () => {
  const harness = workspaceHarness({ getItem() { throw new Error('blocked') } })
  assert.equal(harness.render().scratchpadReady, true)
  assert.equal(harness.render().scratchpadSaved, false)
})

test('cross-tab clear is reflected, but failed reads preserve in-memory notes', () => {
  const storage = { getItem: () => 'notes' }
  const harness = workspaceHarness(storage)
  storage.getItem = () => { throw new Error('denied') }
  harness.listeners.storage({ key: 'toolhub-scratchpad' })
  assert.equal(harness.render().scratchpad, 'notes')
  assert.equal(harness.render().scratchpadSaved, false)
  storage.getItem = () => null
  harness.listeners.storage({ key: null })
  assert.equal(harness.render().scratchpad, '')
  assert.equal(harness.render().scratchpadSaved, true)
})

function widgetHarness(initial) {
  let text = initial
  let cursor = 0
  const state = []
  const jsx = (type, props) => ({ type, props })
  const module = loadModule('../components/workspace/ScratchpadWidget.tsx', {
    setTimeout: () => 1, clearTimeout() {},
  }, {
    react: {
      useState(initialState) {
        const index = cursor++
        if (!(index in state)) state[index] = initialState
        return [state[index], (next) => { state[index] = next }]
      },
      useRef: () => ({ current: null }),
      useEffect() {},
    },
    'react/jsx-runtime': { jsx, jsxs: jsx },
    'lucide-react': {},
    '@/hooks/useWorkspace': { useWorkspace: () => ({
      scratchpad: text, scratchpadReady: true, scratchpadSaved: true,
      setScratchpad: (next) => { text = next }, clearScratchpad: () => { text = '' },
    }) },
    '@/components/providers/AppProviders': { useApp: () => ({ locale: 'en' }) },
    '@/lib/i18n': { t: (_locale, key) => key },
    '@/lib/scratchpad': { transformScratchpad },
  })
  function nodes() {
    cursor = 0
    const result = []
    function visit(node) {
      if (!node || typeof node !== 'object') return
      if (Array.isArray(node)) return node.forEach(visit)
      result.push(node)
      visit(node.props?.children)
    }
    visit(module.ScratchpadWidget())
    return result
  }
  function button(key) {
    return nodes().find((node) => node.type === 'button' &&
      [node.props.children].flat().includes(key))
  }
  return { button, nodes, value: () => text, externalChange: (next) => { text = next } }
}

test('widget undo restores text after a transform', () => {
  const widget = widgetHarness('My Notes')
  widget.button('scratchpadUpper').props.onClick()
  assert.equal(widget.value(), 'MY NOTES')
  assert.equal(widget.button('scratchpadUndo').props.disabled, false)
  widget.button('scratchpadUndo').props.onClick()
  assert.equal(widget.value(), 'My Notes')
  assert.equal(widget.button('scratchpadUndo').props.disabled, true)
})

test('widget clear can be undone even when text is empty', () => {
  const widget = widgetHarness('keep me')
  widget.button('scratchpadClear').props.onClick()
  assert.equal(widget.value(), '')
  assert.equal(widget.button('scratchpadUndo').props.disabled, false)
  widget.button('scratchpadUndo').props.onClick()
  assert.equal(widget.value(), 'keep me')
})

test('typing or cross-tab edits prevent stale undo from replacing newer text', () => {
  const widget = widgetHarness('notes')
  widget.button('scratchpadUpper').props.onClick()
  widget.externalChange('another tab')
  assert.equal(widget.button('scratchpadUndo').props.disabled, true)
  widget.button('scratchpadUndo').props.onClick()
  assert.equal(widget.value(), 'another tab')
  widget.nodes().find((node) => node.type === 'textarea').props.onChange({ target: { value: 'typed' } })
  assert.equal(widget.button('scratchpadUndo').props.disabled, true)
  assert.equal(widget.value(), 'typed')
})

test('invalid decoding leaves the original text untouched', () => {
  const widget = widgetHarness('/w==')
  widget.button('scratchpadB64Dec').props.onClick()
  assert.equal(widget.value(), '/w==')
  assert.equal(widget.button('scratchpadUndo').props.disabled, true)
})
