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

const zh: ToolInfoTemplate = {
  aboutTitle: '关于 {name}',
  howToTitle: '如何使用这个工具',
  whyTitleByType: {
    calculator: '为什么要用在线计算器?',
    converter: '为什么要用在线换算器?',
    generator: '为什么要用在线生成器?',
    tool: '为什么要用在线工具?',
  },
  commonUsesLabel: '常见用途:',
  commonUsesLead: '需要时,大家会用它来',
  intros: {
    calculator: [
      '{name} 可以让你瞬间算出结果,无需打开电子表格或手动计算。无论你是在做预算、核对贷款,还是做作业,工具都会在后台套用正确的公式,你一输入数字就立刻显示结果。',
      '和静态的图表或表格不同,这个计算器会根据你的输入实时调整。你可以修改任何一个数值,立即看到结果变化——方便你对比不同方案,比如「利率再低 1% 会怎样?」或「每月多还 50 美元会怎样?」。',
    ],
    converter: [
      '{name} 使用国际标准换算系数,把单位准确从一个换算到另一个。输入数值、选择源单位和目标单位,换算结果即时显示——无需等待、无需刷新。',
      '手动换算容易出错,因为要记一堆比例(一米等于几英尺、一升等于几品脱)。这个工具消除了这种摩擦:换算系数已内置,全程全精度计算,只在最后显示时才四舍五入。',
    ],
    generator: [
      '{name} 在浏览器中按需生成结果。设置好所需选项、点击生成,结果即可复制。由于一切都在本地运行,你输入或生成的内容都不会离开你的设备。',
      '当你需要某个特定输出(密码、UUID、二维码、占位文本),又不想安装应用或把数据交给陌生网站时,这类生成器很有用。本工具免费、无使用次数限制,手机和电脑上体验一致。',
    ],
    tool: [
      '{name} 直接在浏览器中处理你的内容。粘贴或输入内容,工具即时处理——无需上传、无需注册、无需等待。它专为那些需要快速变换、又不想离开当前工作流的时刻而做。',
      '由于工具在客户端运行,它又快又私密。你的文本不会经过服务器,处理敏感内容也很安全。界面键盘友好,在任何装有现代浏览器的设备上都能用。',
    ],
  },
  howTos: {
    calculator: [
      '输入计算器要求的主要数值(例如金额、利率和时间)。',
      '在工具提供选项的地方,选择正确的单位或选项。',
      '查看结果,它会即时显示在输入框下方。',
      '调整任意字段以测试不同方案——结果无需刷新就会更新。',
      '复制或记下结果。工具不会保存任何数据,用完直接关闭页面即可。',
    ],
    converter: [
      '在输入框中输入要换算的数值。',
      '选择你正在换算的源单位。',
      '选择你想换算成的目标单位。',
      '换算值即时显示。可调整任一单位来做全面对比。',
      '如需在别处使用,复制结果即可。你的输入不会被发送到任何地方。',
    ],
    generator: [
      '设置生成器提供的选项(长度、格式、数量等)。',
      '点击生成按钮产出结果。',
      '查看结果,如需调整选项再重新生成。',
      '用复制按钮把输出复制到剪贴板。',
    ],
    tool: [
      '把你的内容粘贴或输入到文本框。',
      '调整工具提供的选项。',
      '在你输入或修改选项时,输出会自动更新。',
      '用复制按钮复制结果。',
    ],
  },
  whyIntro: '像这样的浏览器工具,相比安装软件或手动方法,有几个实在的优势:',
  whyBullets: [
    { label: '无需安装。', body: '在任何浏览器、任何操作系统上都能即时打开。' },
    { label: '默认私密。', body: '一切在本地运行,你的数据始终留在你的设备上。' },
    { label: '始终保持最新。', body: '无需更新——打开页面时你用的就是最新版本。' },
    { label: '免费且无限制。', body: '想用几次用几次,无需账号、没有上限。' },
  ],
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
      '{name} te permite calcular el resultado al instante, sin recurrir a una hoja de cálculo ni hacer la operación a mano. Ya sea que prepares un presupuesto, revises un préstamo o resuelvas deberes, la herramienta aplica la fórmula correcta en segundo plano y muestra el resultado en cuanto introduces tus cifras.',
      'A diferencia de un gráfico o una tabla estáticos, esta calculadora se adapta a tus entradas exactas. Puedes ajustar cualquier valor y ver el resultado actualizarse en tiempo real, lo que facilita comparar escenarios —por ejemplo, «¿qué pasaría si la tasa fuera 1 % más baja?» o «¿y si pago 50 $ más al mes?».',
    ],
    converter: [
      '{name} convierte unidades de una a otra usando los factores de conversión definidos internacionalmente. Escribe un valor, elige las unidades de origen y destino, y el resultado convertido se muestra al instante —sin esperas ni recarga.',
      'La conversión manual es propensa a errores porque obliga a memorizar razones (cuántos pies en un metro, cuántas pintas en un litro). Esta herramienta elimina esa fricción: el factor va integrado y la cuenta se hace con precisión completa, sin redondear hasta el número final.',
    ],
    generator: [
      '{name} crea el resultado bajo demanda, directamente en tu navegador. Configura las opciones que necesites, pulsa generar y el resultado queda listo para copiar. Como todo corre en local, nada de lo que introduces o generas sale de tu dispositivo.',
      'Los generadores como este son útiles cuando necesitas una salida concreta (una contraseña, un UUID, un código QR, texto de relleno) y no quieres instalar una app ni confiar tus datos a una web desconocida. Esta herramienta es gratuita, no tiene límites de uso y funciona igual en móvil y escritorio.',
    ],
    tool: [
      '{name} procesa tu contenido directamente en el navegador. Pega o escribe la entrada y la herramienta la procesa al instante —sin subidas, sin registro, sin esperas. Está pensada para esos momentos en que necesitas una transformación rápida sin abandonar tu flujo de trabajo.',
      'Como la herramienta corre del lado del cliente, es rápida y privada. Tu texto nunca pasa por un servidor, lo que la hace segura también para contenido delicado. La interfaz es amigable con el teclado y funciona en cualquier dispositivo con un navegador moderno.',
    ],
  },
  howTos: {
    calculator: [
      'Introduce los valores principales que pide la calculadora (por ejemplo, importe, tasa y plazo).',
      'Elige la unidad u opción correcta cuando la herramienta ofrezca elegir.',
      'Lee el resultado, que aparece al instante bajo las entradas.',
      'Ajusta cualquier campo para probar otro escenario: la respuesta se actualiza sin recargar.',
      'Copia o anota el resultado. No se guarda nada, así que cierra la pestaña cuando termines.',
    ],
    converter: [
      'Escribe el valor que quieres convertir en el campo de entrada.',
      'Selecciona la unidad de la que conviertes.',
      'Selecciona la unidad a la que quieres convertir.',
      'El valor convertido aparece al instante. Ajusta cualquiera de las unidades para comparar.',
      'Copia el resultado si lo necesitas en otro sitio. Tu entrada nunca se envía a ningún lado.',
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
    { label: 'Privado por defecto.', body: 'Todo corre en local, así que tus datos se quedan en tu dispositivo.' },
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
      '{name} liefert dir das Ergebnis sofort, ohne Tabellenkalkulation oder Kopfrechnen. Egal, ob du einen Haushaltsplan erstellst, einen Kredit prüfst oder Hausaufgaben rechnest — das Werkzeug wendet im Hintergrund die richtige Formel an und zeigt das Ergebnis, sobald du deine Zahlen eingibst.',
      'Anders als eine statische Tabelle oder Grafik passt sich dieser Rechner an deine genauen Eingaben an. Du kannst jeden Wert ändern und siehst das Ergebnis in Echtzeit aktualisiert — praktisch, um Szenarien zu vergleichen, etwa „Was wäre, wenn der Zins 1 % niedriger wäre?" oder „Was, wenn ich 50 $ mehr im Monat zahle?".',
    ],
    converter: [
      '{name} rechnet mit den international festgelegten Umrechnungsfaktoren von einer Einheit in eine andere. Gib einen Wert ein, wähle Quell- und Zieleinheit — das Ergebnis erscheint sofort, ohne Warten und ohne Neuladen.',
      'Manuelles Umrechnen ist fehleranfällig, weil man Verhältnisse auswendig kennen muss (wie viele Fuß auf einen Meter, wie viele Pints auf einen Liter). Dieses Werkzeug nimmt diese Hürde: Der Faktor ist eingebaut, gerechnet wird mit voller Genauigkeit, erst bei der Anzeige wird gerundet.',
    ],
    generator: [
      '{name} erzeugt die Ausgabe auf Abruf, direkt in deinem Browser. Stell die nötigen Optionen ein, klick auf Generieren und das Ergebnis ist kopierbereit. Weil alles lokal läuft, verlässt nichts, was du eingibst oder erzeugst, dein Gerät.',
      'Generatoren wie dieser sind nützlich, wenn du eine bestimmte Ausgabe brauchst (Passwort, UUID, QR-Code, Platzhaltertext) und dafür keine App installieren oder deine Daten einer unbekannten Website anvertrauen willst. Das Werkzeug ist kostenlos, ohne Nutzungslimit und funktioniert auf Handy und Desktop gleich.',
    ],
    tool: [
      '{name} verarbeitet deine Eingabe direkt im Browser. Füge den Text ein oder tippe ihn ein — das Werkzeug verarbeitet ihn sofort, ohne Upload, ohne Anmeldung, ohne Warten. Es ist für die Momente gebaut, in denen du eine schnelle Umwandlung brauchst, ohne deinen Workflow zu verlassen.',
      'Weil das Werkzeug clientseitig läuft, ist es schnell und privat. Dein Text berührt keinen Server, was es auch für sensible Inhalte sicher macht. Die Oberfläche ist tastaturfreundlich und läuft auf jedem Gerät mit modernem Browser.',
    ],
  },
  howTos: {
    calculator: [
      'Gib die Hauptwerte ein, die der Rechner verlangt (z. B. Betrag, Zins und Laufzeit).',
      'Wähle bei Angebot die richtige Einheit oder Option.',
      'Lies das Ergebnis, das sofort unter den Eingaben erscheint.',
      'Passe beliebige Felder an, um ein anderes Szenario zu testen — das Ergebnis aktualisiert sich ohne Neuladen.',
      'Kopiere oder notiere das Ergebnis. Es wird nichts gespeichert; schließe den Tab, wenn du fertig bist.',
    ],
    converter: [
      'Gib den Wert, den du umrechnen willst, in das Eingabefeld ein.',
      'Wähle die Einheit, von der du umrechnest.',
      'Wähle die Zieleinheit, in die du umrechnen willst.',
      'Der umgerechnete Wert erscheint sofort. Passe eine der Einheiten an, um flächendeckend zu vergleichen.',
      'Kopiere das Ergebnis, falls du es woanders brauchst. Deine Eingabe wird nirgendwo hingeschickt.',
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
    { label: 'Privat von Haus aus.', body: 'Alles läuft lokal, deine Daten bleiben auf deinem Gerät.' },
    { label: 'Immer aktuell.', body: 'Es gibt nichts zu aktualisieren — beim Laden der Seite hast du immer die neueste Version.' },
    { label: 'Kostenlos und unbegrenzt.', body: 'Nutze es so oft du willst, ohne Konto und ohne Limits.' },
  ],
}

/** 非英文模板(en 在 ToolInfoSection 内走原 JSX)。 */
export const toolInfoTemplates: Partial<Record<Locale, ToolInfoTemplate>> = { zh, es, de }

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
  if (locale === 'zh') return `${rest.join('、')} 或 ${last}`
  if (locale === 'es') return `${rest.join(', ')} o ${last}`
  if (locale === 'de') return `${rest.join(', ')} oder ${last}`
  return `${rest.join(', ')} or ${last}`
}
