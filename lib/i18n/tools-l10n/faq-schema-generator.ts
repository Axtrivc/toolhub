/**
 * faq-schema-generator 本地化 bundle —— zh / es / de(B13 电子与音频批)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const FaqSchemaGeneratorL10n: ToolL10n = {
  zh: {
    useCases: ['给落地页生成 FAQPage 结构化数据', '把已有的问答区块转成 JSON-LD script 标签', '为产品页做搜索富媒体摘要准备', '给客服 FAQ 页面补上 schema 标记'],
    faqs: [
      { q: '生成的代码该粘贴到哪里?', a: '页面 HTML 的任何位置都行——放在 <head> 里或 </body> 之前都可以。搜索引擎读取整个文档,位置不影响解析。' },
      { q: 'FAQ 文字必须页面上可见吗?', a: '必须。Google 的规范要求结构化数据里的问答对页面上也真实展示给用户;只藏在 schema 里、访客看不到的 FAQ 会直接失去富媒体结果资格。' },
      { q: '我的页面能在 Google 拿到 FAQ 富媒体摘要吗?', a: '2023 年 8 月起,Google 的 FAQ 富媒体结果基本只展示给权威的政府与健康网站。但标记本身仍然有效,能帮助其他搜索引擎和 AI 答题引擎理解页面。' },
      { q: '为什么用 JSON-LD 而不是 microdata?', a: 'Google 官方推荐 JSON-LD:它装在一个 script 标签里,不怕 CMS 换主题弄丢,也能在服务端独立生成,不用改动页面可见的 HTML。' },
    ],
    ui: {
      'inputLabel': '问答内容(空行分隔每组)',
      'outputLabel': 'FAQPage JSON-LD 代码',
      'placeholder': '第一行写问题,下面几行写答案;\n\n用空行分隔下一组。',
      'defaultInput': '你们提供免费配送吗?\n满 $50 的订单在美国大陆 3-5 个工作日内免费配送。\n\n退货政策是什么?\n签收后 30 天内、商品保持原状可全额退款。',
      'note': '🧩 把生成的 <script> 粘进页面 <head> 或 </body> 之前。Google 要求同样的问答在页面上对用户可见——只有 schema、页面上看不到的 FAQ 属于违规。2023 年 8 月后 FAQ 富媒体结果主要留给权威政府/健康站点,但有效的标记仍能帮其他搜索引擎与 AI 爬虫理解页面。',
      'errParse': '⚠️ 没有解析到有效的问答——每组需第一行是问题、随后至少一行答案,组与组之间用空行分隔。',
    },
  },
  es: {
    useCases: ['generar datos estructurados FAQPage para una landing', 'convertir una sección de preguntas en una etiqueta script JSON-LD', 'preparar una página de producto para resultados enriquecidos', 'añadir schema FAQ a una página de soporte'],
    faqs: [
      { q: '¿Dónde pego el código generado?', a: 'En cualquier parte del HTML de la página: en el <head> o justo antes de </body>. Los buscadores leen el documento completo, así que la posición no afecta al análisis.' },
      { q: '¿El texto del FAQ tiene que verse en la página?', a: 'Sí. Las directrices de Google exigen que las preguntas y respuestas del marcado también aparezcan ante los usuarios. Un FAQ que solo vive en el schema arriesga perder los resultados enriquecidos.' },
      { q: '¿Mi página conseguirá resultados enriquecidos de FAQ?', a: 'Desde agosto de 2023 Google reserva los resultados enriquecidos de FAQ sobre todo a sitios gubernamentales y de salud autorizados. El marcado sigue siendo válido y ayuda a otros buscadores y motores de IA a entender la página.' },
      { q: '¿Por qué JSON-LD en vez de microdata?', a: 'Google recomienda JSON-LD: vive en una sola etiqueta script, sobrevive a cambios de tema en el CMS y puede generarse en el servidor sin tocar el HTML visible.' },
    ],
    ui: {
      'inputLabel': 'Preguntas y respuestas (separa cada par con una línea en blanco)',
      'outputLabel': 'Código FAQPage JSON-LD',
      'placeholder': 'Primera línea la pregunta, las siguientes la respuesta;\n\nuna línea en blanco separa el siguiente par.',
      'defaultInput': '¿Hacen envíos gratis?\nLos pedidos superiores a 50 $ envían gratis en 3-5 días laborables.\n\n¿Cuál es la política de devoluciones?\nAceptamos devoluciones en los 30 días posteriores a la entrega en su estado original.',
      'note': '🧩 Pega el <script> generado en el <head> o antes de </body>. Google exige que las mismas preguntas se muestren visibles en la página: un FAQ que solo existe en el schema es motivo de acción manual. Desde agosto de 2023 los resultados enriquecidos van sobre todo a sitios gubernamentales y de salud, pero el marcado válido sigue ayudando a otros buscadores y rastreadores de IA.',
      'errParse': '⚠️ No se encontró ningún par válido: cada bloque necesita la pregunta en la primera línea y al menos una línea de respuesta, con líneas en blanco entre bloques.',
    },
  },
  de: {
    useCases: ['FAQPage-Strukturdaten für eine Landingpage erzeugen', 'einen bestehenden FAQ-Bereich in ein JSON-LD-Script-Tag umwandeln', 'eine Produktseite auf Rich-Results vorbereiten', 'Support-Seiten mit FAQ-Schema ausstatten'],
    faqs: [
      { q: 'Wo füge ich den generierten Code ein?', a: 'An beliebiger Stelle im HTML der Seite — im <head> oder direkt vor </body>. Suchmaschinen lesen das ganze Dokument, die Position beeinflusst das Parsen nicht.' },
      { q: 'Muss der FAQ-Text auf der Seite sichtbar sein?', a: 'Ja. Googles Richtlinien verlangen, dass Fragen und Antworten aus dem Markup auch für Nutzer sichtbar sind. FAQs, die nur im Schema existieren, riskieren den Verlust der Rich Results.' },
      { q: 'Bekommt meine Seite FAQ-Rich-Results bei Google?', a: 'Seit August 2023 zeigt Google FAQ-Rich-Results überwiegend autoritativen Regierungs- und Gesundheitsseiten. Das Markup bleibt trotzdem valide und hilft anderen Suchmaschinen und KI-Antwortmaschinen, die Seite zu verstehen.' },
      { q: 'Warum JSON-LD statt Microdata?', a: 'Google empfiehlt JSON-LD: Es steckt in einem einzigen Script-Tag, übersteht Theme- und CMS-Wechsel und lässt sich serverseitig generieren, ohne das sichtbare HTML anzufassen.' },
    ],
    ui: {
      'inputLabel': 'Fragen und Antworten (Blöcke mit Leerzeile trennen)',
      'outputLabel': 'FAQPage-JSON-LD-Code',
      'placeholder': 'Erste Zeile die Frage, die folgenden die Antwort;\n\nLeerzeile trennt den nächsten Block.',
      'defaultInput': 'Ist der Versand kostenlos?\nBestellungen über 50 $ versenden wir in 3-5 Werktagen kostenlos.\n\nWie ist die Rücksenderegelung?\nWir nehmen Rücksendungen innerhalb von 30 Tagen in Originalzustand zurück.',
      'note': '🧩 Das erzeugte <script> gehört in den <head> oder vor </body>. Google verlangt, dass dieselben Fragen auf der Seite sichtbar sind — Schema-only-FAQs ohne sichtbaren Text riskieren eine manuelle Maßnahme. Seit August 2023 gehen FAQ-Rich-Results meist an autoritative Behörden- und Gesundheitssites, aber gültiges Markup hilft weiter anderen Suchmaschinen und KI-Crawlern.',
      'errParse': '⚠️ Kein gültiges Frage-Antwort-Paar gefunden — jeder Block braucht die Frage in Zeile 1 und mindestens eine Antwortzeile; Blöcke werden durch Leerzeilen getrennt.',
    },
  },
}
