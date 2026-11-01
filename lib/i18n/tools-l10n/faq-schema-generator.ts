/**
 * faq-schema-generator 本地化 bundle —— zh / es / de(B13 电子与音频批)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const FaqSchemaGeneratorL10n: ToolL10n = {

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
