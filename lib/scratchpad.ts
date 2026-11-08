export type ScratchpadAction = 'json' | 'b64enc' | 'b64dec' | 'upper' | 'lower' | 'trim'

export function transformScratchpad(text: string, action: ScratchpadAction): string {
  switch (action) {
    case 'json':
      return JSON.stringify(JSON.parse(text), null, 2)
    case 'b64enc': {
      const bytes = new TextEncoder().encode(text)
      let binary = ''
      for (const byte of bytes) binary += String.fromCharCode(byte)
      return btoa(binary)
    }
    case 'b64dec': {
      const binary = atob(text.trim())
      const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0))
      return new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(bytes)
    }
    case 'upper':
      return text.toUpperCase()
    case 'lower':
      return text.toLowerCase()
    case 'trim':
      return text.split('\n').map((line) => line.trimEnd()).join('\n').trim().replace(/\n{3,}/g, '\n\n')
  }
}

export async function copyScratchpad(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    const previousFocus = document.activeElement
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    textarea.setAttribute('readonly', '')
    document.body.appendChild(textarea)
    try {
      textarea.select()
      return document.execCommand('copy')
    } catch {
      return false
    } finally {
      textarea.remove()
      if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true })
    }
  }
}
