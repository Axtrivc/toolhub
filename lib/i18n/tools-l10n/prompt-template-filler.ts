/**
 * prompt-template-filler 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(模板填充工具)。
 */
import type { ToolL10n } from '../tool-l10n'

export const PromptTemplateFillerL10n: ToolL10n = {
  zh: {
    useCases: [
      '调试带变量的 prompt 模板:本地填出最终文本,确认措辞后再接进代码',
      '验证 mustache 与 f-string 混用模板的行为——双花括号先替换,结果可预期',
      '把"模板 + 变量 JSON"打包发给同事,对方用同一工具 10 秒复现你的问题',
      '填充完成后一键复制进 OpenAI Playground 或 Claude 控制台实测效果',
    ],
    faqs: [
      { q: '支持哪几种占位符?', a: '两种:{{double}}(mustache 风格)和 {single}(f-string / Python 风格)。替换顺序是双花括号优先,因此 "{{a} 与 {a}" 这类混合模板的行为是确定性的——先处理 {{a}},再处理 {a},互不干扰。' },
      { q: '变量缺失时会怎样?', a: '不会静默留空——工具会列出所有未填充的变量名。这是故意的:发出去的 prompt 里残留 {{name}} 占位符是最常见的线上事故,显式列出比悄悄放过安全得多。' },
      { q: '变量 JSON 里能放数字和布尔值吗?', a: '可以,非字符串值会自动转成字符串:true 变 "true",42 变 "42"。但数组和对象会被原样 JSON 序列化——如果模板需要列表,建议先在变量侧拼好字符串。' },
      { q: '模板和变量会被上传吗?', a: '不会。整个填充过程是浏览器内的纯字符串替换,零网络请求。含有业务话术或未公开产品信息的内部模板可以放心使用。' },
    ],
    ui: {
      'badJson': '变量 JSON：',
      'copyPrompt': '复制提示词',
      'filledLabel': '填充后的提示词',
      'missingVars': '未填充的变量：',
      'note': '🧩 同时支持 {{double}}（mustache 风格）与 {single}（f-string 风格）占位符——双花括号先替换，混用模板行为可预期。非字符串 JSON 值会转成字符串。一切都在浏览器内完成。',
      'templateLabel': '含 {{变量}} 的模板',
      'varsLabel': '变量（JSON 对象）',
    },
  },
  es: {
    useCases: [
      'Depurar plantillas de prompt con variables: rellena el texto final en local y ajusta la redacción antes de llevarla al código',
      'Verificar el comportamiento de plantillas que mezclan mustache y f-string — las llaves dobles se sustituyen primero',
      'Enviar «plantilla + JSON de variables» a un compañero para reproducir tu problema en 10 segundos con la misma herramienta',
      'Copiar el prompt rellenado al Playground de OpenAI o a la consola de Claude y medir el resultado real',
    ],
    faqs: [
      { q: '¿Qué marcadores admite?', a: 'Dos: {{double}} (estilo mustache) y {single} (estilo f-string / Python). Las llaves dobles se sustituyen primero, así que una plantilla mixta como «{{a} y {a}» tiene un comportamiento determinista: primero {{a}}, luego {a}, sin interferencias.' },
      { q: '¿Qué pasa si falta una variable?', a: 'No queda un hueco silencioso: la herramienta lista todas las variables sin rellenar. Es deliberado — un placeholder {{name}} residual en un prompt enviado es el incidente más común en producción, y listarlo es mucho más seguro que pasarlo por alto.' },
      { q: '¿Puedo usar números y booleanos en el JSON?', a: 'Sí: los valores que no son cadenas se convierten en cadena — true pasa a «true» y 42 a «42». Arrays y objetos se serializan como JSON tal cual; si la plantilla necesita una lista, compón la cadena en el lado de las variables.' },
      { q: '¿Se suben la plantilla o las variables?', a: 'No. El rellenado es una sustitución de cadenas 100 % dentro del navegador, sin peticiones de red. Plantillas internas con jerga de negocio o productos no anunciados están seguras aquí.' },
    ],
    ui: {
      'badJson': 'JSON de variables:',
      'copyPrompt': 'Copiar prompt',
      'filledLabel': 'Prompt rellenado',
      'missingVars': 'Variables sin rellenar:',
      'note': '🧩 Admite marcadores {{double}} (estilo mustache) y {single} (estilo f-string): las llaves dobles se sustituyen primero, así que las plantillas mixtas se comportan de forma predecible. Los valores JSON que no son cadenas se convierten en cadena. Todo queda en tu navegador.',
      'templateLabel': 'Plantilla con {{variables}}',
      'varsLabel': 'Variables (objeto JSON)',
    },
  },
  de: {
    useCases: [
      'Prompt-Vorlagen mit Variablen debuggen: den finalen Text lokal füllen und die Formulierung prüfen, bevor sie ins Produkt wandert',
      'Das Verhalten gemischter Mustache-/f-String-Vorlagen verifizieren — doppelte Klammern werden zuerst ersetzt',
      '„Vorlage + Variablen-JSON“ an Kollegen schicken, die damit dein Problem in 10 Sekunden reproduzieren',
      'Den ausgefüllten Prompt per Klick in den OpenAI-Playground oder die Claude-Konsole kopieren und testen',
    ],
    faqs: [
      { q: 'Welche Platzhalter werden unterstützt?', a: 'Zwei: {{double}} (Mustache-Stil) und {single} (f-String-/Python-Stil). Doppelte Klammern werden zuerst ersetzt, darum verhält sich eine gemischte Vorlage wie „{{a} und {a}“ deterministisch: erst {{a}}, dann {a}, ohne Wechselwirkung.' },
      { q: 'Was passiert bei fehlenden Variablen?', a: 'Kein stillschweigendes Leerfeld — das Werkzeug listet alle ungefüllten Variablen auf. Das ist Absicht: Ein zurückgebliebener {{name}}-Platzhalter im verschickten Prompt ist der häufigste Produktionsunfall, und Auflisten ist weit sicherer als Wegschauen.' },
      { q: 'Gehen auch Zahlen und Booleans im Variablen-JSON?', a: 'Ja, Nicht-Strings werden automatisch in Strings gewandelt: true wird „true“, 42 wird „42“. Arrays und Objekte werden als JSON serialisiert — braucht die Vorlage eine Liste, baue den String besser vorab im Variablen-JSON zusammen.' },
      { q: 'Werden Vorlage oder Variablen hochgeladen?', a: 'Nein. Das Füllen ist reine String-Ersetzung im Browser, ganz ohne Netzwerkanfragen. Interne Vorlagen mit Geschäftsterminologie oder unveröffentlichten Produktnamen sind hier sicher.' },
    ],
    ui: {
      'badJson': 'Variablen-JSON:',
      'copyPrompt': 'Prompt kopieren',
      'filledLabel': 'Ausgefüllter Prompt',
      'missingVars': 'Ungefüllte Variablen:',
      'note': '🧩 Unterstützt {{double}}-Platzhalter (Mustache-Stil) und {single} (f-String-Stil) — doppelte Klammern werden zuerst ersetzt, gemischte Vorlagen bleiben vorhersagbar. Nicht-String-JSON-Werte werden in Strings umgewandelt. Alles bleibt im Browser.',
      'templateLabel': 'Vorlage mit {{Variablen}}',
      'varsLabel': 'Variablen (JSON-Objekt)',
    },
  },
}
