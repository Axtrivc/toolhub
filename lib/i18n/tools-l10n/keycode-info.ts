/**
 * keycode-info 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const KeycodeInfoL10n: ToolL10n = {
  zh: {
    useCases: ['调试键盘快捷键的 key 与 code', '查某个按键的 keyCode 旧值', '确认修饰键组合的按下状态', '区分 event.key 和 event.code'],
    faqs: [
      { q: '该匹配哪个属性?', a: '现代代码用 event.key——它给出实际字符("a"、"Enter"),并随键盘布局和 Shift 调整。event.code 指物理按键、与布局无关(AZERTY 键盘上 KeyA 仍是 KeyA);keyCode 已废弃,只为兼容老浏览器而保留。' },
      { q: '为什么 keyCode 是 0 或怪值?', a: 'keyCode 从未被标准化;现代引擎只是近似复刻老 IE 的行为,所以有些键报 0,同一键在不同浏览器还可能不同。复现老 bug 时可以查它——新代码请写 key 或 code。' },
      { q: '怎么查看组合键?', a: '直接按下组合键,修饰键一行会列出 Ctrl、Meta/Cmd、Shift、Alt 并用 + 连接。repeat 标志还能显示是否触发了系统按键重复,以此区分长按与连点。' },
      { q: 'Tab 和方向键在这里能用吗?', a: '能——工具拦截了 Tab、方向键和空格,按下它们不会滚动页面或移走焦点。它们的 key、code、keyCode 与其他键一样显示,最近按键还会留在历史列表里。' },
    ],
    ui: {
      'clearHistory': '清空',
      'noneMod': '无',
      'note': '⌨️ 现代代码应匹配 event.key("a"、"Enter");event.code 是物理键位,与布局无关(KeyA);keyCode 仅为兼容旧代码而存在。',
      'pressArea': '在此按任意键',
      'pressPrompt': '点击此处,然后按任意键',
      'recentKeys': '最近按键',
    },
  },
  es: {
    useCases: ['depurar atajos de teclado con key y code', 'consultar el viejo keyCode de una tecla', 'verificar qué modificadores están pulsados', 'distinguir event.key de event.code'],
    faqs: [
      { q: '¿En qué propiedad debo hacer match?', a: 'En event.key para código moderno: devuelve el carácter impreso («a», «Enter») ajustado por distribución y Shift. event.code nombra la tecla física sin importar la distribución (KeyA sigue siendo KeyA en AZERTY); keyCode es legado deprecado que solo sobrevive por compatibilidad.' },
      { q: '¿Por qué keyCode vale 0 o cosas raras?', a: 'keyCode nunca se estandarizó; los motores modernos solo emulan el viejo comportamiento de IE, así que algunas teclas dan 0 y la misma tecla varía entre navegadores. Úsalo para reproducir bugs antiguos; el código nuevo va con key o code.' },
      { q: '¿Cómo inspecciono combinaciones?', a: 'Pulsa la combinación y lee la fila de modificadores: Ctrl, Meta/Cmd, Shift y Alt unidos con +. El indicador repeat muestra si disparó la repetición del sistema, para distinguir tecla mantenida de pulsaciones nuevas.' },
      { q: '¿Funcionan Tab y las flechas aquí?', a: 'Sí: la herramienta intercepta Tab, flechas y espacio para que pulsarlas no desplace la página ni mueva el foco. Muestran sus valores key, code y keyCode como cualquier tecla, y las últimas pulsaciones quedan en el historial.' },
    ],
    ui: {
      'clearHistory': 'Borrar',
      'noneMod': 'ninguno',
      'note': '⌨️ En código moderno compara event.key («a», «Enter»); event.code es la tecla física (KeyA); keyCode solo existe por compatibilidad.',
      'pressArea': 'Pulsa una tecla aquí',
      'pressPrompt': 'Haz clic aquí y pulsa una tecla',
      'recentKeys': 'Teclas recientes',
    },
  },
  de: {
    useCases: ['Tastenkürzel mit key und code debuggen', 'den alten keyCode einer Taste nachschlagen', 'prüfen, welche Modifikatoren gedrückt sind', 'event.key von event.code unterscheiden'],
    faqs: [
      { q: 'Auf welche Eigenschaft sollte ich matchen?', a: 'Auf event.key in modernem Code — es liefert das gedruckte Zeichen („a“, „Enter“), angepasst an Layout und Shift. event.code benennt die physische Taste unabhängig vom Layout (KeyA bleibt auf AZERTY KeyA); keyCode ist veraltetes Legacy, das nur für alte Browser überlebt.' },
      { q: 'Warum zeigt keyCode 0 oder seltsame Werte?', a: 'keyCode wurde nie standardisiert; moderne Engines emulieren nur das alte IE-Verhalten, manche Tasten melden 0, und dieselbe Taste kann je Browser differieren. Nutze es, um Altbugs zu reproduzieren — neuer Code gehört auf key oder code.' },
      { q: 'Wie untersuche ich Tastenkombinationen?', a: 'Drücke die Kombi und lies die Modifikator-Zeile: Ctrl, Meta/Cmd, Shift und Alt, mit + verknüpft. Das repeat-Flag zeigt, ob die System-Wiederholung auslöste — so unterscheidest du Halten von frischen Tastenschlägen.' },
      { q: 'Funktionieren Tab und Pfeiltasten hier?', a: 'Ja — das Werkzeug fängt Tab, Pfeile und Leertaste ab, damit das Drücken weder scrollt noch den Fokus verschiebt. Ihre key-, code- und keyCode-Werte erscheinen wie bei jeder Taste, und die letzten Eingaben bleiben im Verlauf.' },
    ],
    ui: {
      'clearHistory': 'Leeren',
      'noneMod': 'keine',
      'note': '⌨️ Moderner Code matcht event.key („a", „Enter"); event.code ist die physische Taste (KeyA); keyCode existiert nur für Altkompatibilität.',
      'pressArea': 'Hier eine Taste drücken',
      'pressPrompt': 'Hier klicken, dann eine Taste drücken',
      'recentKeys': 'Letzte Tasten',
    },
  },
}
