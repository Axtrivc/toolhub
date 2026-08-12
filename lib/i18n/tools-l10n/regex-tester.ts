/**
 * regex-tester 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const regexTesterL10n: ToolL10n = {
  zh: {
    useCases: ['实时高亮查看正则的每个匹配', '调试捕获组,确认提取的内容正确', '验证邮箱、订单号等格式的正则', '配合查找替换做文本提取与拆分'],
    faqs: [
      { q: '用的是哪种正则引擎?', a: '使用浏览器的 JavaScript RegExp 引擎,接近 ECMAScript 规范。支持先行断言、命名分组、unicode 标志和 s(dotAll) 标志。不支持旧版 Safari 中的后行断言,也不支持原子分组等 PCRE 专属特性。' },
      { q: '捕获组怎么显示?', a: '每个匹配在文本中高亮显示,结果区下方会列出每次匹配的所有捕获组(编号和命名)及其捕获值。这有助于调试 /(\\d+)-(\\d+)/ 这类模式,看清每个组到底捕获了什么。' },
      { q: '为什么我的正则报错了?', a: '常见原因:括号不配对、特殊字符未转义(用 \\. 匹配字面句点)、或量词前面没有可重复内容(如 *+)。JavaScript 引擎的错误信息会内联显示,方便你修复语法。' },
    ],
  },
  es: {
    useCases: ['ver cada coincidencia de tu regex resaltada en vivo', 'depurar grupos de captura y confirmar que extraen lo correcto', 'validar patrones de email, número de pedido, etc.', 'extraer y dividir texto con buscar y reemplazar'],
    faqs: [
      { q: '¿Qué variante de regex usa?', a: 'Usa el motor RegExp de JavaScript (el mismo que corre en tu navegador), cercano a la especificación ECMAScript. Soporta lookahead, grupos nombrados, el flag unicode y el flag s (dotAll). No soporta lookbehind en Safari antiguo ni características específicas de PCRE como los grupos atómicos.' },
      { q: '¿Cómo se muestran los grupos de captura?', a: 'Cada coincidencia se resalta en el texto y, bajo el resultado, se lista cada grupo de captura (numerado y nombrado) con su valor para cada coincidencia. Ayuda a depurar patrones como /(\\d+)-(\\d+)/ mostrando qué capturó cada grupo.' },
      { q: '¿Por qué mi regex da error?', a: 'Causas comunes: paréntesis desbalanceados, un carácter especial sin escapar (usa \\. para un punto literal) o un cuantificador sin nada que repetir (como *+). El mensaje de error del motor JavaScript se muestra en línea para que puedas corregir la sintaxis.' },
    ],
  },
  de: {
    useCases: ['jeden Treffer deines Regex live hervorgehoben sehen', 'Capture-Groups debuggen und bestätigen, dass sie richtig extrahieren', 'Muster für E-Mail, Bestellnummer usw. validieren', 'Text mit Suchen-Ersetzen extrahieren und aufteilen'],
    faqs: [
      { q: 'Welche Regex-Variante wird verwendet?', a: 'Es nutzt die JavaScript-RegExp-Engine (dieselbe, die in deinem Browser läuft), was der ECMAScript-Spezifikation nahe kommt. Sie unterstützt Lookahead, benannte Gruppen, das Unicode-Flag und das s-Flag (dotAll). Keine Unterstützung für Lookbehind in älterem Safari oder PCRE-spezifische Features wie atomare Gruppen.' },
      { q: 'Wie werden Capture-Groups angezeigt?', a: 'Jeder Treffer wird im Text hervorgehoben und unter dem Ergebnis wird jede Capture-Group (nummeriert und benannt) mit ihrem erfassten Wert pro Treffer aufgelistet. Das hilft, Muster wie /(\\d+)-(\\d+)/ zu debuggen, indem es genau zeigt, was jede Gruppe erfasst hat.' },
      { q: 'Warum wirft mein Regex einen Fehler?', a: 'Häufige Ursachen: unausgewogene Klammern, ein nicht escaptes Sonderzeichen (nutze \\., um einen literalen Punkt zu treffen) oder ein Quantifier ohne etwas zum Wiederholen (wie *+). Die Fehlermeldung der JavaScript-Engine wird inline angezeigt, damit du die Syntax korrigieren kannst.' },
    ],
  },
}
