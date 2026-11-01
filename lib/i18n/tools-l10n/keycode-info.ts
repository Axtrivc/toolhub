/**
 * keycode-info 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const KeycodeInfoL10n: ToolL10n = {

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
      'note': '⌨️ En código moderno, compara event.key («a», «Enter»); event.code es la tecla física, independiente de la distribución (KeyA); keyCode solo existe por compatibilidad.',
      'pressArea': 'Pulsa una tecla aquí',
      'pressPrompt': 'Haz clic aquí y pulsa una tecla',
      'recentKeys': 'Teclas recientes',
    },
  },
  de: {
    useCases: ['Tastenkürzel mit key und code debuggen', 'den alten keyCode einer Taste nachschlagen', 'prüfen, welche Modifikatoren gedrückt sind', 'event.key von event.code unterscheiden'],
    faqs: [
      { q: 'Auf welche Eigenschaft sollte ich matchen?', a: 'Auf event.key in modernem Code — es liefert das erzeugte Zeichen („a“, „Enter“), angepasst an Layout und Shift. event.code benennt die physische Taste unabhängig vom Layout (KeyA bleibt auf AZERTY KeyA); keyCode ist veraltet und existiert nur noch für die Kompatibilität mit alten Browsern.' },
      { q: 'Warum zeigt keyCode 0 oder seltsame Werte?', a: 'keyCode wurde nie standardisiert; moderne Engines emulieren nur das alte IE-Verhalten, manche Tasten melden 0, und dieselbe Taste kann sich je nach Browser unterscheiden. Nutze es, um Altbugs zu reproduzieren — für neuen Code nimm key oder code.' },
      { q: 'Wie untersuche ich Tastenkombinationen?', a: 'Drücke die Kombi und lies die Modifikator-Zeile: Ctrl, Meta/Cmd, Shift und Alt, mit + verknüpft. Das repeat-Flag zeigt, ob die System-Wiederholung auslöste — so unterscheidest du Gedrückthalten von neuen Anschlägen.' },
      { q: 'Funktionieren Tab und Pfeiltasten hier?', a: 'Ja — das Werkzeug fängt Tab, Pfeile und Leertaste ab, damit das Drücken weder scrollt noch den Fokus verschiebt. Ihre key-, code- und keyCode-Werte erscheinen wie bei jeder Taste, und die letzten Eingaben bleiben im Verlauf.' },
    ],
    ui: {
      'clearHistory': 'Leeren',
      'noneMod': 'keine',
      'note': '⌨️ Moderner Code matcht event.key („a“, „Enter“); event.code ist die physische Taste, layoutunabhängig (KeyA); keyCode existiert nur für die Abwärtskompatibilität.',
      'pressArea': 'Hier eine Taste drücken',
      'pressPrompt': 'Hier klicken, dann eine Taste drücken',
      'recentKeys': 'Letzte Tasten',
    },
  },
}
