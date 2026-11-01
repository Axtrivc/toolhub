/**
 * prompt-template-filler 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(模板填充工具)。
 */
import type { ToolL10n } from '../tool-l10n'

export const PromptTemplateFillerL10n: ToolL10n = {

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
