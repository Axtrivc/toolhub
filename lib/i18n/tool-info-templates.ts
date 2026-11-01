/**
 * ToolInfoSection 模板化内容 —— 4 类型 × 非英文语种
 *
 * 覆盖范围:ToolInfoSection 渲染的 About / How to Use / Why Use 三段,
 * 是所有 169 个工具页共用的"通用信息区"。译一次,全部工具受益。
 *
 * 关键设计:
 *  - en 不在此 —— ToolInfoSection 里 locale==='en' 时走原 JSX(字节不变,
 *    Google 索引不受影响);只有非英文才从这里取模板渲染。
 *  - 非英文模板用 {name} 占位(渲染时替换为本地化工具名,并加粗)。
 *    不嵌入英文 {mainKeyword}(避免在中文/西/德语句里硬塞英文词)。
 *  - whyTitle 按"类型"分开存(西/德语有语法性别,需随类型变冠词)。
 */

import type { Locale } from '../i18n'

export type ToolInfoType = 'calculator' | 'converter' | 'generator' | 'tool'

export interface ToolInfoTemplate {
  /** "About the {name}" —— 含 {name} 占位 */
  aboutTitle: string
  /** "How to Use This Tool" */
  howToTitle: string
  /** "Why Use an Online {type}?" —— 按类型存,规避性别语言冠词问题 */
  whyTitleByType: Record<ToolInfoType, string>
  /** "Common uses:" */
  commonUsesLabel: string
  /** "people reach for this tool when they need to" —— 后接 useCases 列表 */
  commonUsesLead: string
  /** 每类型两段介绍(可含 {name}) */
  intros: Record<ToolInfoType, string[]>
  /** 每类型 how-to 步骤(可含 {name}) */
  howTos: Record<ToolInfoType, string[]>
  /** "Browser-based tools like this one have a few real advantages..." */
  whyIntro: string
  /** 4 条 "Why" 要点:加粗 label + body */
  whyBullets: Array<{ label: string; body: string }>
}


const es: ToolInfoTemplate = {
  aboutTitle: 'Sobre {name}',
  howToTitle: 'Cómo usar esta herramienta',
  whyTitleByType: {
    calculator: '¿Por qué usar una calculadora en línea?',
    converter: '¿Por qué usar un conversor en línea?',
    generator: '¿Por qué usar un generador en línea?',
    tool: '¿Por qué usar una herramienta en línea?',
  },
  commonUsesLabel: 'Usos comunes:',
  commonUsesLead: 'la gente recurre a esta herramienta cuando necesita',
  intros: {
    calculator: [
      '{name} te permite calcular el resultado al instante, sin recurrir a una hoja de cálculo ni hacer la operación a mano. Ya sea que compares opciones, revises tus cifras o resuelvas deberes, la herramienta aplica la fórmula correcta en segundo plano y muestra el resultado en cuanto introduces tus números.',
      'A diferencia de un gráfico o una tabla estáticos, esta calculadora se adapta a tus entradas exactas. Puedes ajustar cualquier valor y ver el resultado actualizarse en tiempo real, lo que facilita comparar escenarios: cambia un campo a la vez y observa cómo responde el resultado.',
    ],
    converter: [
      '{name} convierte unidades de una a otra usando los factores de conversión definidos internacionalmente. Escribe un valor, elige las unidades de origen y destino, y el resultado convertido se muestra al instante —sin esperas ni recarga.',
      'La conversión manual es propensa a errores porque obliga a memorizar razones (cuántos pies en un metro, cuántas pintas en un litro). Esta herramienta elimina esa fricción: el factor va integrado y la cuenta se hace con precisión completa, sin redondear hasta el número final.',
    ],
    generator: [
      '{name} crea el resultado bajo demanda, directamente en tu navegador. Configura las opciones que necesites, pulsa generar y el resultado queda listo para copiar. La generación ocurre localmente en tu navegador.',
      'Los generadores como este son útiles cuando necesitas una salida concreta (una contraseña, un UUID, un código QR, texto de relleno) y no quieres instalar una app ni confiar tus datos a una web desconocida. Esta herramienta es gratuita, no tiene límites de uso y funciona igual en móvil y escritorio.',
    ],
    tool: [
      '{name} procesa tu contenido directamente en el navegador. Pega o escribe la entrada y la herramienta la procesa al instante —sin registro y sin esperas. Está pensada para esos momentos en que necesitas una transformación rápida sin abandonar tu flujo de trabajo.',
      'Como la herramienta corre del lado del cliente, es rápida y privada. Tu texto se procesa en tu navegador; los enlaces para compartir pueden incluir opciones en la URL. La interfaz es amigable con el teclado y funciona en cualquier dispositivo con un navegador moderno.',
    ],
  },
  howTos: {
    calculator: [
      'Introduce los valores que pide el formulario de arriba.',
      'Elige la unidad u opción correcta cuando la herramienta ofrezca elegir.',
      'Comprueba las unidades y las entradas, y lee el resultado, que aparece al instante debajo.',
      'Ajusta cualquier campo para probar otro escenario: la respuesta se actualiza sin recargar.',
      'Copia o anota el resultado. El cálculo se ejecuta localmente en tu navegador.',
    ],
    converter: [
      'Escribe el valor que quieres convertir en el campo de entrada.',
      'Selecciona la unidad de la que conviertes.',
      'Selecciona la unidad a la que quieres convertir.',
      'El valor convertido aparece al instante. Ajusta cualquiera de las unidades para comparar.',
      'Copia el resultado si lo necesitas en otro sitio. La conversión se ejecuta en tu navegador.',
    ],
    generator: [
      'Configura las opciones del generador (longitud, formato, cantidad, etc.).',
      'Pulsa el botón generar para producir la salida.',
      'Revisa el resultado y ajusta las opciones para regenerarlo si hace falta.',
      'Usa el botón copiar para llevar la salida al portapapeles.',
    ],
    tool: [
      'Pega o escribe tu entrada en el área de texto.',
      'Ajusta las opciones que ofrezca la herramienta.',
      'La salida se actualiza automáticamente al escribir o cambiar opciones.',
      'Copia el resultado con el botón copiar.',
    ],
  },
  whyIntro:
    'Las herramientas basadas en navegador como esta tienen ventajas reales frente al software instalado o los métodos manuales:',
  whyBullets: [
    { label: 'Sin instalación.', body: 'Se abre al instante en cualquier navegador y en cualquier sistema operativo.' },
    { label: 'Privado por defecto.', body: 'Las herramientas procesan entradas localmente; los enlaces para compartir pueden incluir opciones en la URL.' },
    { label: 'Siempre actualizado.', body: 'No hay nada que actualizar: siempre obtienes la última versión al cargar la página.' },
    { label: 'Gratis e ilimitado.', body: 'Úsala tantas veces como quieras, sin cuenta y sin límites.' },
  ],
}

const de: ToolInfoTemplate = {
  aboutTitle: 'Über {name}',
  howToTitle: 'So nutzt du dieses Werkzeug',
  whyTitleByType: {
    calculator: 'Warum einen Online-Rechner nutzen?',
    converter: 'Warum einen Online-Umrechner nutzen?',
    generator: 'Warum einen Online-Generator nutzen?',
    tool: 'Warum ein Online-Werkzeug nutzen?',
  },
  commonUsesLabel: 'Häufige Einsatzfälle:',
  commonUsesLead: 'zu diesem Werkzeug greifen Leute, wenn sie',
  intros: {
    calculator: [
      '{name} liefert dir das Ergebnis sofort, ohne Tabellenkalkulation oder Kopfrechnen. Egal, ob du Optionen vergleichst, deine Zahlen prüfst oder Hausaufgaben rechnest — das Werkzeug wendet im Hintergrund die richtige Formel an und zeigt das Ergebnis, sobald du deine Zahlen eingibst.',
      'Anders als eine statische Tabelle oder Grafik passt sich dieser Rechner an deine genauen Eingaben an. Du kannst jeden Wert ändern und siehst das Ergebnis in Echtzeit aktualisiert — praktisch, um Szenarien zu vergleichen: Ändere ein Feld nach dem anderen und beobachte, wie das Ergebnis reagiert.',
    ],
    converter: [
      '{name} rechnet mit den international festgelegten Umrechnungsfaktoren von einer Einheit in eine andere. Gib einen Wert ein, wähle Quell- und Zieleinheit — das Ergebnis erscheint sofort, ohne Warten und ohne Neuladen.',
      'Manuelles Umrechnen ist fehleranfällig, weil man Verhältnisse auswendig kennen muss (wie viele Fuß auf einen Meter, wie viele Pints auf einen Liter). Dieses Werkzeug nimmt diese Hürde: Der Faktor ist eingebaut, gerechnet wird mit voller Genauigkeit, erst bei der Anzeige wird gerundet.',
    ],
    generator: [
      '{name} erzeugt die Ausgabe auf Abruf, direkt in deinem Browser. Stell die nötigen Optionen ein, klick auf Generieren und das Ergebnis ist kopierbereit. Die Erzeugung passiert lokal in deinem Browser.',
      'Generatoren wie dieser sind nützlich, wenn du eine bestimmte Ausgabe brauchst (Passwort, UUID, QR-Code, Platzhaltertext) und dafür keine App installieren oder deine Daten einer unbekannten Website anvertrauen willst. Das Werkzeug ist kostenlos, ohne Nutzungslimit und funktioniert auf Handy und Desktop gleich.',
    ],
    tool: [
      '{name} verarbeitet deine Eingabe direkt im Browser. Füge den Text ein oder tippe ihn ein — das Werkzeug verarbeitet ihn sofort, ohne Anmeldung und ohne Warten. Es ist für die Momente gebaut, in denen du eine schnelle Umwandlung brauchst, ohne deinen Workflow zu verlassen.',
      'Weil das Werkzeug clientseitig läuft, ist es schnell und privat. Dein Text wird im Browser verarbeitet; teilbare Links können Einstellungen in die URL schreiben. Die Oberfläche ist tastaturfreundlich und läuft auf jedem Gerät mit modernem Browser.',
    ],
  },
  howTos: {
    calculator: [
      'Gib die Werte ein, die das Formular oben verlangt.',
      'Wähle bei Angebot die richtige Einheit oder Option.',
      'Prüfe Einheiten und Eingaben und lies das Ergebnis, das sofort darunter erscheint.',
      'Passe beliebige Felder an, um ein anderes Szenario zu testen — das Ergebnis aktualisiert sich ohne Neuladen.',
      'Kopiere oder notiere das Ergebnis. Die Berechnung läuft lokal in deinem Browser.',
    ],
    converter: [
      'Gib den Wert, den du umrechnen willst, in das Eingabefeld ein.',
      'Wähle die Einheit, von der du umrechnest.',
      'Wähle die Zieleinheit, in die du umrechnen willst.',
      'Der umgerechnete Wert erscheint sofort. Passe eine der Einheiten an, um flächendeckend zu vergleichen.',
      'Kopiere das Ergebnis, falls du es woanders brauchst. Die Umrechnung läuft in deinem Browser.',
    ],
    generator: [
      'Stell die Optionen des Generators ein (Länge, Format, Anzahl usw.).',
      'Klick auf den Generieren-Button, um die Ausgabe zu erzeugen.',
      'Prüfe das Ergebnis und passe die Optionen an, um nötigenfalls neu zu generieren.',
      'Nutze den Kopieren-Button, um die Ausgabe in die Zwischenablage zu übernehmen.',
    ],
    tool: [
      'Füge deine Eingabe in das Textfeld ein oder tippe sie.',
      'Passe die Optionen an, die das Werkzeug anbietet.',
      'Die Ausgabe aktualisiert sich automatisch, während du tippst oder Optionen änderst.',
      'Kopiere das Ergebnis mit dem Kopieren-Button.',
    ],
  },
  whyIntro:
    'Browserbasierte Werkzeuge wie dieses haben ein paar echte Vorteile gegenüber installierter Software oder manuellen Methoden:',
  whyBullets: [
    { label: 'Keine Installation.', body: 'Öffnet sich sofort in jedem Browser, auf jedem Betriebssystem.' },
    { label: 'Privat von Haus aus.', body: 'Werkzeuge verarbeiten Eingaben lokal; teilbare Links können Einstellungen in die URL schreiben.' },
    { label: 'Immer aktuell.', body: 'Es gibt nichts zu aktualisieren — beim Laden der Seite hast du immer die neueste Version.' },
    { label: 'Kostenlos und unbegrenzt.', body: 'Nutze es so oft du willst, ohne Konto und ohne Limits.' },
  ],
}

/** 非英文模板(en 在 ToolInfoSection 内走原 JSX)。 */
export const toolInfoTemplates: Partial<Record<Locale, ToolInfoTemplate>> = {  es, de }

/**
 * 把长尾 useCases 列表按语种自然连接(最多 4 条)。
 * zh: 「、」+ 末项「或」;es/de: 逗号 + 末项「o / oder」。
 */
export function joinUseCases(locale: Locale, items: string[]): string {
  const phrases = items.slice(0, 4)
  if (phrases.length === 0) return ''
  if (phrases.length === 1) return phrases[0]
  const last = phrases[phrases.length - 1]
  const rest = phrases.slice(0, -1)
  if (locale === 'es') return `${rest.join(', ')} o ${last}`
  if (locale === 'de') return `${rest.join(', ')} oder ${last}`
  return `${rest.join(', ')} or ${last}`
}
