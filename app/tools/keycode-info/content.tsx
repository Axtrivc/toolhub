'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>key vs code vs keyCode</h2>
    <p><strong>event.key</strong> is the character produced ("a", "Enter", "ArrowLeft") and respects keyboard layout — match on this in modern code. <strong>event.code</strong> is the physical key position (KeyA is the A key even on AZERTY, where it prints "q"). <strong>keyCode</strong> is a legacy number kept only for old libraries.</p>
    <h2>Why modifier combos matter</h2>
    <p>Shortcut handlers should check modifier flags (ctrlKey, metaKey, shiftKey) alongside event.key. Remember Mac users press Meta/Cmd where Windows users press Ctrl — most apps accept both.</p>
    <h2>Keys that need preventDefault</h2>
    <p>Space scrolls the page, arrow keys navigate, Tab moves focus. The tester blocks those defaults on this page so you can observe them without the page jumping or focus escaping.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>key、code 与 keyCode 的区别</h2>
    <p><strong>event.key</strong> 是按键产生的字符("a"、"Enter"、"ArrowLeft"),并随键盘布局变化——现代代码应匹配它。<strong>event.code</strong> 指物理键位(KeyA 就是 A 键,即使它在 AZERTY 布局上印着 "q")。<strong>keyCode</strong> 是只为兼容老库而保留的旧编号。</p>
    <h2>为什么修饰键组合很重要</h2>
    <p>快捷键处理函数在检查 event.key 之外,还应检查修饰键标志(ctrlKey、metaKey、shiftKey)。记住 Mac 用户按 Meta/Cmd、Windows 用户按 Ctrl——多数应用两者都接受。</p>
    <h2>需要 preventDefault 的按键</h2>
    <p>空格会滚动页面,方向键会导航,Tab 会移动焦点。测试器在本页拦截了这些默认行为,你可以安心观察它们,页面不会跳动,焦点也不会跑掉。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>key, code y keyCode</h2>
    <p><strong>event.key</strong> es el carácter producido («a», «Enter», «ArrowLeft») y depende de la distribución del teclado — para código moderno, compara con este. <strong>event.code</strong> nombra la posición física de la tecla (KeyA es la tecla A incluso en AZERTY, donde imprime «q»). <strong>keyCode</strong> es un número heredado que solo se mantiene por las bibliotecas antiguas.</p>
    <h2>Por qué importan las combinaciones con modificadores</h2>
    <p>Los manejadores de atajos deben comprobar los flags de modificadores (ctrlKey, metaKey, shiftKey) junto a event.key. Recuerda: los usuarios de Mac pulsan Meta/Cmd y los de Windows pulsan Ctrl — la mayoría de aplicaciones acepta ambos.</p>
    <h2>Teclas que necesitan preventDefault</h2>
    <p>El espacio desplaza la página, las flechas navegan y Tab mueve el foco. El probador intercepta esos comportamientos en esta página para que puedas observarlos sin saltos ni pérdida de foco.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>key, code und keyCode</h2>
    <p><strong>event.key</strong> ist das erzeugte Zeichen („a“, „Enter“, „ArrowLeft“) und folgt dem Tastaturlayout — moderner Code matcht darauf. <strong>event.code</strong> benennt die physische Position der Taste (KeyA ist die A-Taste, selbst wenn auf AZERTY „q“ darauf steht). <strong>keyCode</strong> ist eine alte Nummer, die nur für ältere Bibliotheken erhalten bleibt.</p>
    <h2>Warum Modifikator-Kombis zählen</h2>
    <p>Shortcut-Handler sollten neben event.key auch die Modifikator-Flags prüfen (ctrlKey, metaKey, shiftKey). Denke daran: Mac-Nutzer drücken Meta/Cmd, Windows-Nutzer Strg — die meisten Apps akzeptieren beides.</p>
    <h2>Tasten, die preventDefault brauchen</h2>
    <p>Die Leertaste scrollt, die Pfeiltasten navigieren, Tab verschiebt den Fokus. Der Tester fängt diese Standardaktionen auf dieser Seite ab, damit du sie beobachten kannst, ohne dass die Seite springt oder der Fokus entgleitet.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function KeycodeInfoContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
