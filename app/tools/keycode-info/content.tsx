/**
 * KeycodeInfo 长文正文 —— 工具说明(英文;SSR 恒英文,与全站一致)
 */

export function KeycodeInfoContent() {
  return (
    <section className="prose-content mt-10 max-w-3xl">
      <h2>key vs code vs keyCode</h2>
      <p><strong>event.key</strong> is the character produced ("a", "Enter", "ArrowLeft") and respects keyboard layout — match on this in modern code. <strong>event.code</strong> is the physical key position (KeyA is the A key even on AZERTY, where it prints "q"). <strong>keyCode</strong> is a legacy number kept only for old libraries.</p>
      <h2>Why modifier combos matter</h2>
      <p>Shortcut handlers should check modifier flags (ctrlKey, metaKey, shiftKey) alongside event.key. Remember Mac users press Meta/Cmd where Windows users press Ctrl — most apps accept both.</p>
      <h2>Keys that need preventDefault</h2>
      <p>Space scrolls the page, arrow keys navigate, Tab moves focus. The tester blocks those defaults inside its capture zone so you can observe them without the page jumping.</p>
    </section>
  )
}
