/**
 * 静态页(about/privacy/contact/terms)i18n 内容数据
 *
 * 结构设计:
 * - 每页按 locale 存一份完整内容(title + description + sections[])
 * - section = { heading, blocks[] }
 * - block 三种形态:
 *   - string —— 渲染为 <p>(纯文本,可能含 {placeholder} 占位的内链)
 *   - { list: string[] } —— 渲染为 <ul>(每项可含占位)
 *   - { heading: string } —— 渲染为 <h3>(子标题,contact 页用)
 * - 内联链接:文本里写 {key},同 section 的 links 字段提供 key→href 映射
 *   渲染器把 {key} 替换为 <a href={links[key]}>{key 对应的标签 = 占位符本身}</a>
 *
 * 为什么不用 React 节点直接存:数据要能 4 语对照、可序列化、好维护。
 * 内联链接用占位符 + links 映射,避免在字符串里混 JSX。
 *
 * 缺失某 locale 的整页 → 回退 en(渲染器兜底)。
 */

import type { Locale } from '@/lib/i18n'

/** 单个文本块:段落 / 列表 / 子标题 */
export type ContentBlock =
  | string
  | { list: string[] }
  | { heading: string }

/** 一个章节:小标题 + 若干文本块 + 该章节的内联链接映射 */
export interface PageSection {
  heading: string
  blocks: ContentBlock[]
  /** 章节内 {placeholder} → href 映射(可选);占位符本身作为链接锚文本 */
  links?: Record<string, string>
}

/** 一个静态页的完整内容 */
export interface PageContent {
  title: string
  description: string
  sections: PageSection[]
}

/** 4 语完整内容映射 */
export type LocalizedPage = Record<Locale, PageContent>

// ─────────────────────────────────────────────────────────────────────────────
// About 页
// ─────────────────────────────────────────────────────────────────────────────
export const aboutPage: LocalizedPage = {
  en: {
    title: 'About ToolHub',
    description: 'Fast, free, and privacy-friendly tools — built for people who just want to get things done.',
    sections: [
      {
        heading: 'Our Mission',
        blocks: [
          'ToolHub is a collection of simple, focused online tools built to solve everyday problems without getting in your way. We believe a utility should load instantly, do one job well, and respect your time and privacy. No popups begging for your email, no paywalls hiding the useful part, no 12-step onboarding.',
        ],
      },
      {
        heading: 'Privacy by Default',
        blocks: [
          'Most tools here run entirely in your browser. That means the text you paste, the files you process, and the options you toggle never get sent to a server. We have nothing to store, nothing to leak, and nothing to sell. This is not a marketing line — it is a direct consequence of how the tools are built.',
          'Our website may display advertisements to keep the tools free for everyone. When we do, we use reputable ad networks and never tie ad data to any personal information you enter into the tools (because, again, it never leaves your device). You can read the full details in our {Privacy Policy}.',
        ],
        links: { 'Privacy Policy': '/privacy/' },
      },
      {
        heading: 'What We Build',
        blocks: [
          'We focus on utilities for developers, writers, and anyone who works in a browser. Each tool is designed around a single, clearly defined task — like converting a blog post title into a clean URL slug — and is accompanied by a guide explaining how to get the most out of it.',
          'New tools are added regularly. If there is something you wish existed, {let us know} — reader requests have shaped more than one tool on this site.',
        ],
        links: { 'let us know': '/contact/' },
      },
      {
        heading: 'Who Is Behind This',
        blocks: [
          'ToolHub is run by a small team of developers who got tired of bloated, ad-heavy utility sites. We maintain this project in our spare time and fund it through unobtrusive advertising. There is no investor pressure and no growth-hack agenda — just a quiet effort to make the web slightly more useful.',
        ],
      },
      {
        heading: 'Get in Touch',
        blocks: [
          'Found a bug? Have an idea? Want a tool that does not exist yet? Head over to our {contact page}. We read every message.',
        ],
        links: { 'contact page': '/contact/' },
      },
    ],
  },
  zh: {
    title: '关于 ToolHub',
    description: '快速、免费、注重隐私的工具 —— 为只想把事做完的人而打造。',
    sections: [
      {
        heading: '我们的使命',
        blocks: [
          'ToolHub 是一组简单、专注的在线工具,用来解决日常问题、不打扰你。我们相信一个工具应该秒开、做好一件事、尊重你的时间与隐私。没有求你留邮箱的弹窗,没有挡住关键功能的付费墙,没有 12 步引导。',
        ],
      },
      {
        heading: '默认隐私',
        blocks: [
          '这里的大多数工具完全在你的浏览器中运行。也就是说,你粘贴的文本、处理的文件、勾选的选项都不会发往任何服务器。我们没东西可存、没东西可泄露、没东西可卖。这不是营销话术 —— 而是工具构建方式带来的直接结果。',
          '本站可能展示广告以让工具对所有人免费。展示时我们只用信誉良好的广告网络,且绝不把广告数据与你输入工具的任何个人信息关联(再说一次,这些信息根本不离开你的设备)。完整细节见{隐私政策}。',
        ],
        links: { '隐私政策': '/privacy/' },
      },
      {
        heading: '我们做什么',
        blocks: [
          '我们专注为开发者、写作者,以及任何在浏览器里工作的人做工具。每个工具围绕一个清晰定义的任务设计 —— 比如把博客标题转成干净的 URL slug —— 并附上指南,教你如何发挥它最大的价值。',
          '新工具持续更新。如果你希望某个工具存在,{告诉我们} —— 读者需求已经催生了本站不止一个工具。',
        ],
        links: { '告诉我们': '/contact/' },
      },
      {
        heading: '背后是谁',
        blocks: [
          'ToolHub 由一小队开发者运营,我们对臃肿、广告满屏的工具站忍无可忍。我们用业余时间维护这个项目,通过不打扰人的广告覆盖成本。没有投资人压力,没有增长黑客的算计 —— 只是想让互联网稍微更有用一点。',
        ],
      },
      {
        heading: '联系我们',
        blocks: [
          '发现 bug?有想法?想要一个还不存在的工具?去我们的{联系页}看看。我们每条消息都读。',
        ],
        links: { '联系页': '/contact/' },
      },
    ],
  },
  es: {
    title: 'Acerca de ToolHub',
    description: 'Herramientas rápidas, gratuitas y respetuosas con la privacidad — para quienes solo quieren hacer el trabajo.',
    sections: [
      {
        heading: 'Nuestra misión',
        blocks: [
          'ToolHub es una colección de herramientas online sencillas y enfocadas, pensadas para resolver problemas cotidianos sin estorbar. Creemos que una utilidad debe cargar al instante, hacer bien una sola cosa y respetar tu tiempo y privacidad. Sin ventanas que pidan tu correo, sin muros de pago que escondan lo útil, sin onboarding de 12 pasos.',
        ],
      },
      {
        heading: 'Privacidad por defecto',
        blocks: [
          'La mayoría de las herramientas aquí se ejecutan por completo en tu navegador. Eso significa que el texto que pegas, los archivos que procesas y las opciones que activas nunca se envían a un servidor. No tenemos nada que almacenar, nada que filtrar y nada que vender. No es una frase de marketing — es una consecuencia directa de cómo están construidas las herramientas.',
          'El sitio puede mostrar publicidad para mantener las herramientas gratuitas para todos. Cuando lo hacemos, usamos redes publicitarias reputadas y nunca vinculamos los datos de los anuncios a ninguna información personal que introduzcas en las herramientas (porque, de nuevo, nunca sale de tu dispositivo). Lee los detalles completos en nuestra {Política de Privacidad}.',
        ],
        links: { 'Política de Privacidad': '/privacy/' },
      },
      {
        heading: 'Qué construimos',
        blocks: [
          'Nos centramos en utilidades para desarrolladores, escritores y cualquiera que trabaje en un navegador. Cada herramienta gira en torno a una única tarea bien definida — como convertir el título de un artículo en un slug URL limpio — y viene con una guía para sacarle el máximo.',
          'Añadimos herramientas nuevas con regularidad. Si echas en falta algo, {dínoslo} — las peticiones de los lectores han dado forma a más de una herramienta en este sitio.',
        ],
        links: { 'dínoslo': '/contact/' },
      },
      {
        heading: 'Quién está detrás',
        blocks: [
          'ToolHub lo lleva un pequeño equipo de desarrolladores hartos de sitios de utilidades inflados y cargados de anuncios. Mantenemos este proyecto en nuestro tiempo libre y lo financiamos con publicidad discreta. No hay presión de inversores ni agenda de growth-hack — solo un esfuerzo tranquilo por hacer la web un poco más útil.',
        ],
      },
      {
        heading: 'Contacto',
        blocks: [
          '¿Encontraste un fallo? ¿Tienes una idea? ¿Quieres una herramienta que aún no existe? Pásate por nuestra {página de contacto}. Leemos todos los mensajes.',
        ],
        links: { 'página de contacto': '/contact/' },
      },
    ],
  },
  de: {
    title: 'Über ToolHub',
    description: 'Schnelle, kostenlose und datenschutzfreundliche Werkzeuge — für Menschen, die einfach nur erledigen wollen, was ansteht.',
    sections: [
      {
        heading: 'Unsere Mission',
        blocks: [
          'ToolHub ist eine Sammlung einfacher, fokussierter Online-Werkzeuge, die Alltagsprobleme lösen, ohne im Weg zu stehen. Wir glauben, dass ein Werkzeug sofort laden, eine Sache gut machen und deine Zeit und Privatsphäre respektieren sollte. Keine Pop-ups, die deine E-Mail wollen, keine Paywalls, die das Nützliche verstecken, kein 12-Schritt-Onboarding.',
        ],
      },
      {
        heading: 'Datenschutz by Default',
        blocks: [
          'Die meisten Werkzeuge hier laufen vollständig in deinem Browser. Das bedeutet: Der Text, den du einfügst, die Dateien, die du verarbeitest, und die Optionen, die du umschaltest, werden nie an einen Server geschickt. Wir haben nichts zu speichern, nichts preiszugeben, nichts zu verkaufen. Das ist keine Marketingphrase — es ist eine direkte Folge davon, wie die Werkzeuge gebaut sind.',
          'Die Seite kann Werbung anzeigen, um die Werkzeuge für alle kostenlos zu halten. Wenn wir das tun, nutzen wir seriöse Werbenetzwerke und verknüpfen niemals Werbedaten mit persönlichen Informationen, die du in die Werkzeuge eingibst (denn, wie gesagt, sie verlassen nie dein Gerät). Alle Details stehen in unserer {Datenschutzerklärung}.',
        ],
        links: { 'Datenschutzerklärung': '/privacy/' },
      },
      {
        heading: 'Was wir bauen',
        blocks: [
          'Wir konzentrieren uns auf Helfer für Entwickler, Schreibende und alle, die im Browser arbeiten. Jedes Werkzeug ist um eine einzige klar definierte Aufgabe herum gebaut — etwa einen Blogtitel in einen sauberen URL-Slug umzuwandeln — und wird von einer Anleitung begleitet, die zeigt, wie du das Meiste herausholst.',
          'Neue Werkzeuge kommen regelmäßig dazu. Wenn du dir etwas wünschst, das es noch nicht gibt, {sag uns Bescheid} — Leserwünsche haben hier schon mehr als ein Werkzeug geprägt.',
        ],
        links: { 'sag uns Bescheid': '/contact/' },
      },
      {
        heading: 'Wer dahinter steckt',
        blocks: [
          'ToolHub wird von einem kleinen Team aus Entwicklern betrieben, denen die aufgeblähten, werbelastigen Utility-Seiten reichten. Wir pflegen das Projekt in unserer Freizeit und finanzieren es über dezentrale Werbung. Kein Investorendruck, keine Growth-Hack-Agenda — nur der leise Versuch, das Web etwas nützlicher zu machen.',
        ],
      },
      {
        heading: 'Kontakt',
        blocks: [
          'Einen Bug gefunden? Eine Idee? Ein Werkzeug gewünscht, das es noch nicht gibt? Schau auf unserer {Kontaktseite} vorbei. Wir lesen jede Nachricht.',
        ],
        links: { 'Kontaktseite': '/contact/' },
      },
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Contact 页
// ─────────────────────────────────────────────────────────────────────────────
export const contactPage: LocalizedPage = {
  en: {
    title: 'Contact Us',
    description: "Questions, feedback, or a tool you wish existed? We'd love to hear from you.",
    sections: [
      {
        heading: 'Get in Touch',
        blocks: [
          'We read every message and do our best to reply within a few business days. Whether you found a bug, have a feature request, or just want to say hello — you are in the right place.',
        ],
      },
      {
        heading: '',
        blocks: [
          { heading: 'Email' },
          'The most reliable way to reach us. Write to: {contact@axtrivc.com}.',
        ],
        links: { 'contact@axtrivc.com': 'mailto:contact@axtrivc.com' },
      },
      {
        heading: '',
        blocks: [
          { heading: 'What to Include' },
          'To help us help you faster, please include:',
          {
            list: [
              'The tool name and the URL of the page you were on.',
              'A short description of what happened versus what you expected.',
              'Your browser and device (e.g. Chrome on Windows, Safari on iPhone).',
              'Any text or input that triggered the issue, if relevant.',
            ],
          },
        ],
      },
      {
        heading: '',
        blocks: [
          { heading: 'Tool Requests' },
          'We build new tools based on what readers actually need. If there is a utility you keep searching for and never finding a good version of, tell us about it. Describe the job you are trying to do, and we will consider it for a future release.',
        ],
      },
      {
        heading: '',
        blocks: [
          { heading: 'Business & Partnerships' },
          'For advertising, sponsorship, or partnership inquiries, please use the same email address with the subject line "Partnership."',
        ],
      },
      {
        heading: 'Response Time',
        blocks: [
          'ToolHub is maintained by a small team. We typically respond within 1–3 business days. Thank you for your patience.',
        ],
      },
    ],
  },
  zh: {
    title: '联系我们',
    description: '有问题、反馈,或希望某个工具存在?我们很乐意收到你的消息。',
    sections: [
      {
        heading: '取得联系',
        blocks: [
          '我们每条消息都读,并尽量在几个工作日内回复。无论你发现了 bug、有功能建议,还是只想打个招呼 —— 你来对地方了。',
        ],
      },
      {
        heading: '',
        blocks: [
          { heading: '邮箱' },
          '最可靠的联系方式。写信到:{contact@axtrivc.com}。',
        ],
        links: { 'contact@axtrivc.com': 'mailto:contact@axtrivc.com' },
      },
      {
        heading: '',
        blocks: [
          { heading: '建议附上' },
          '为了让我们更快帮你,请包含:',
          {
            list: [
              '工具名称以及你当时所在页面的 URL。',
              '简短描述发生了什么、你期望的结果是什么。',
              '你的浏览器和设备(例如 Windows 上的 Chrome、iPhone 上的 Safari)。',
              '触发问题的文本或输入(如相关)。',
            ],
          },
        ],
      },
      {
        heading: '',
        blocks: [
          { heading: '工具需求' },
          '我们根据读者的真实需求开发新工具。如果有个工具你一直在找、却总找不到好用的版本,告诉我们。描述你想完成的事,我们会考虑放进未来的版本。',
        ],
      },
      {
        heading: '',
        blocks: [
          { heading: '商务与合作' },
          '广告、赞助或合作咨询,请用同一个邮箱,主题写"Partnership"。',
        ],
      },
      {
        heading: '响应时间',
        blocks: [
          'ToolHub 由小团队维护。我们通常在 1–3 个工作日内回复。感谢你的耐心。',
        ],
      },
    ],
  },
  es: {
    title: 'Contacto',
    description: '¿Preguntas, comentarios o una herramienta que te gustaría que existiera? Nos encantaría leerte.',
    sections: [
      {
        heading: 'Ponte en contacto',
        blocks: [
          'Leemos todos los mensajes e intentamos responder en unos días laborables. Ya sea que encontraste un fallo, tienes una sugerencia o solo quieres saludar — estás en el lugar adecuado.',
        ],
      },
      {
        heading: '',
        blocks: [
          { heading: 'Correo electrónico' },
          'La forma más fiable de contactarnos. Escribe a: {contact@axtrivc.com}.',
        ],
        links: { 'contact@axtrivc.com': 'mailto:contact@axtrivc.com' },
      },
      {
        heading: '',
        blocks: [
          { heading: 'Qué incluir' },
          'Para que te ayudemos más rápido, procura incluir:',
          {
            list: [
              'El nombre de la herramienta y la URL de la página donde estabas.',
              'Una breve descripción de qué ocurrió frente a lo que esperabas.',
              'Tu navegador y dispositivo (p. ej. Chrome en Windows, Safari en iPhone).',
              'El texto o la entrada que provocó el problema, si es relevante.',
            ],
          },
        ],
      },
      {
        heading: '',
        blocks: [
          { heading: 'Peticiones de herramientas' },
          'Creamos herramientas según lo que los lectores necesitan de verdad. Si buscas una y no encuentras una buena versión, cuéntanoslo. Describe la tarea que intentas hacer y lo consideraremos para una próxima versión.',
        ],
      },
      {
        heading: '',
        blocks: [
          { heading: 'Negocios y colaboraciones' },
          'Para consultas de publicidad, patrocinio o colaboración, usa el mismo correo con el asunto "Partnership".',
        ],
      },
      {
        heading: 'Tiempo de respuesta',
        blocks: [
          'ToolHub lo mantiene un equipo pequeño. Solemos responder en 1–3 días laborables. Gracias por tu paciencia.',
        ],
      },
    ],
  },
  de: {
    title: 'Kontakt',
    description: 'Fragen, Feedback oder ein Werkzeug, das du dir wünschst? Wir freuen uns über deine Nachricht.',
    sections: [
      {
        heading: 'Melde dich',
        blocks: [
          'Wir lesen jede Nachricht und antworten meist innerhalb weniger Werktage. Egal ob du einen Bug gefunden hast, eine Funktion vorschlagen willst oder einfach Hallo sagen möchtest — du bist hier richtig.',
        ],
      },
      {
        heading: '',
        blocks: [
          { heading: 'E-Mail' },
          'Der zuverlässigste Weg, uns zu erreichen. Schreib an: {contact@axtrivc.com}.',
        ],
        links: { 'contact@axtrivc.com': 'mailto:contact@axtrivc.com' },
      },
      {
        heading: '',
        blocks: [
          { heading: 'Was du beifügen solltest' },
          'Damit wir dir schneller helfen können, bitte gib an:',
          {
            list: [
              'Den Namen des Werkzeugs und die URL der Seite, auf der du warst.',
              'Eine kurze Beschreibung dessen, was passiert ist, und was du erwartet hast.',
              'Deinen Browser und dein Gerät (z. B. Chrome unter Windows, Safari am iPhone).',
              'Den Text oder die Eingabe, die das Problem ausgelöst hat, falls relevant.',
            ],
          },
        ],
      },
      {
        heading: '',
        blocks: [
          { heading: 'Werkzeugwünsche' },
          'Wir bauen neue Werkzeuge nach dem, was Leser wirklich brauchen. Wenn du ein Utility suchst und nie eine gute Version findest, sag uns Bescheid. Beschreib die Aufgabe, die du erledigen willst — wir nehmen es für eine künftige Version in Betracht.',
        ],
      },
      {
        heading: '',
        blocks: [
          { heading: 'Business & Partnerschaften' },
          'Für Werbe-, Sponsorings- oder Kooperationsanfragen nutze dieselbe Adresse mit dem Betreff „Partnership".',
        ],
      },
      {
        heading: 'Reaktionszeit',
        blocks: [
          'ToolHub wird von einem kleinen Team gepflegt. Wir antworten in der Regel innerhalb von 1–3 Werktagen. Danke für deine Geduld.',
        ],
      },
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Privacy 页
// ─────────────────────────────────────────────────────────────────────────────
export const privacyPage: LocalizedPage = {
  en: {
    title: 'Privacy Policy',
    description: 'Last updated: January 2026',
    sections: [
      {
        heading: '',
        blocks: [
          'This Privacy Policy explains how ToolHub ("we," "us," or "our") handles information when you use our website and tools. We designed this policy to be short, clear, and honest — no legal fog.',
        ],
      },
      {
        heading: 'The Short Version',
        blocks: [
          {
            list: [
              'Our tools run entirely in your browser. The text and files you process never leave your device.',
              'We do not ask you to create an account, and we do not collect your name or email to use the tools.',
              'We use third-party advertising companies (notably Google AdSense) to keep the site free. These companies may use cookies to serve relevant ads.',
              'We use privacy-friendly analytics to understand which tools are used, so we can improve them.',
            ],
          },
        ],
      },
      {
        heading: 'Information You Provide to the Tools',
        blocks: [
          'When you use a tool — for example, pasting text into the Slug Generator — that input is processed locally in your browser by JavaScript. It is never transmitted to our servers, our databases, or any third party. We literally cannot see what you type.',
        ],
      },
      {
        heading: 'Information Collected Automatically',
        blocks: [
          'Like most websites, we and our partners automatically collect certain technical data when you visit:',
          {
            list: [
              'Browser type, operating system, and device type.',
              'Approximate region (country-level, derived from IP address).',
              'The pages you visit and the referring site.',
              'Aggregate, anonymized usage metrics.',
            ],
          },
          'This data is used to keep the site secure, understand traffic patterns, and improve the tools.',
        ],
      },
      {
        heading: 'Cookies and Similar Technologies',
        blocks: [
          'We use cookies and similar technologies for two purposes: running third-party ads, and privacy-friendly analytics. A cookie is a small text file stored on your device.',
          'Advertising cookies. We use Google AdSense, which is a third-party vendor that may use cookies to serve ads based on your prior visits to this and other websites. Google\'s use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.',
          {
            list: [
              'You may opt out of personalized advertising by visiting {Google Ads Settings}.',
              'Information about how Google uses data from sites that use its APIs and ad products is at {Google\'s Partner Sites policy}.',
              'For information about the Third-party vendors and ad networks that serve ads, please visit {aboutads.info}.',
            ],
          },
          'Analytics cookies. We use privacy-friendly, aggregate analytics that do not track you across other sites and do not identify you personally.',
        ],
        links: {
          'Google Ads Settings': 'https://www.google.com/settings/ads',
          "Google's Partner Sites policy": 'https://policies.google.com/technologies/partner-sites',
          'aboutads.info': 'https://www.aboutads.info',
        },
      },
      {
        heading: 'Third-Party Services',
        blocks: [
          'We rely on the following categories of third-party services, each with its own privacy practices:',
          {
            list: [
              'Google AdSense — serves ads; may use cookies for ad personalization. See {Google\'s Privacy Policy}.',
              'Web hosting and CDN — delivers the pages; may log standard server request data (IP, timestamp, user agent).',
            ],
          },
        ],
        links: {
          "Google's Privacy Policy": 'https://policies.google.com/privacy',
        },
      },
      {
        heading: 'Data Retention',
        blocks: [
          'Because our tools do not transmit your input to us, there is nothing for us to retain about your tool usage. Server logs and aggregate analytics data are retained only as long as needed for the purposes described above, and then deleted or anonymized.',
        ],
      },
      {
        heading: 'Your Choices',
        blocks: [
          {
            list: [
              'You can disable cookies in your browser settings at any time.',
              'You can opt out of personalized ads via the Google Ads Settings link above.',
              'You can use a content blocker or private browsing mode.',
            ],
          },
        ],
      },
      {
        heading: "Children's Privacy",
        blocks: [
          'Our website is not directed to children under 13, and we do not knowingly collect personal information from children. If you believe a child has provided us personal information, please contact us so we can delete it.',
        ],
      },
      {
        heading: 'Changes to This Policy',
        blocks: [
          'We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this page periodically.',
        ],
      },
      {
        heading: 'Contact Us',
        blocks: [
          'If you have questions about this Privacy Policy, please {contact us}.',
        ],
        links: { 'contact us': '/contact/' },
      },
    ],
  },
  zh: {
    title: '隐私政策',
    description: '最近更新:2026 年 1 月',
    sections: [
      {
        heading: '',
        blocks: [
          '本《隐私政策》说明 ToolHub("我们")在你使用本网站及工具时如何处理信息。我们尽量让这份政策简短、清晰、诚实 —— 不堆法律黑话。',
        ],
      },
      {
        heading: '简短版',
        blocks: [
          {
            list: [
              '我们的工具完全在你的浏览器中运行。你处理的文本和文件永不离开你的设备。',
              '我们不要求你创建账号,也不收集你的姓名或邮箱来使用工具。',
              '我们使用第三方广告公司(主要是 Google AdSense)以保持站点免费。这些公司可能使用 cookie 投放相关广告。',
              '我们使用注重隐私的分析工具来了解哪些工具被使用,以便改进。',
            ],
          },
        ],
      },
      {
        heading: '你提供给工具的信息',
        blocks: [
          '当你使用工具 —— 例如把文本粘贴进 Slug 生成器 —— 该输入由浏览器内的 JavaScript 本地处理。它绝不会传送到我们的服务器、数据库或任何第三方。我们确实看不到你输入的内容。',
        ],
      },
      {
        heading: '自动收集的信息',
        blocks: [
          '与大多数网站一样,我们及合作伙伴在你访问时自动收集某些技术数据:',
          {
            list: [
              '浏览器类型、操作系统和设备类型。',
              '大致地区(国家级,根据 IP 地址推断)。',
              '你访问的页面和来源站点。',
              '汇总、匿名的使用指标。',
            ],
          },
          '这些数据用于保障站点安全、了解流量模式并改进工具。',
        ],
      },
      {
        heading: 'Cookie 及类似技术',
        blocks: [
          '我们出于两个目的使用 cookie 及类似技术:投放第三方广告、做注重隐私的分析。Cookie 是存储在你设备上的小型文本文件。',
          '广告 cookie。我们使用 Google AdSense,这是一家第三方供应商,可能使用 cookie 根据你此前访问本站及其他网站的行为投放广告。Google 对广告 cookie 的使用,使其自身及合作伙伴能基于你对本站及/或其他网站的访问向你投放广告。',
          {
            list: [
              '你可以在 {Google 广告设置}中选择停用个性化广告。',
              '关于 Google 如何使用采用其 API 和广告产品的网站的数据,见 {Google 合作伙伴网站政策}。',
              '关于投放广告的第三方供应商和广告网络的信息,请访问 {aboutads.info}。',
            ],
          },
          '分析 cookie。我们使用注重隐私的汇总分析,不会跨站追踪你,也不会识别你的个人身份。',
        ],
        links: {
          'Google 广告设置': 'https://www.google.com/settings/ads',
          'Google 合作伙伴网站政策': 'https://policies.google.com/technologies/partner-sites',
          'aboutads.info': 'https://www.aboutads.info',
        },
      },
      {
        heading: '第三方服务',
        blocks: [
          '我们依赖以下几类第三方服务,各自有其隐私做法:',
          {
            list: [
              'Google AdSense —— 投放广告;可能使用 cookie 做广告个性化。见 {Google 隐私政策}。',
              'Web 托管和 CDN —— 分发页面;可能记录标准服务器请求数据(IP、时间戳、user agent)。',
            ],
          },
        ],
        links: {
          'Google 隐私政策': 'https://policies.google.com/privacy',
        },
      },
      {
        heading: '数据留存',
        blocks: [
          '由于我们的工具不会把你的输入传送给我们,关于你的工具使用我们没有任何东西可留存。服务器日志和汇总分析数据仅在上述目的所需期间保留,随后删除或匿名化。',
        ],
      },
      {
        heading: '你的选择',
        blocks: [
          {
            list: [
              '你随时可在浏览器设置中停用 cookie。',
              '可通过上方的 Google 广告设置链接停用个性化广告。',
              '可使用内容拦截器或隐私浏览模式。',
            ],
          },
        ],
      },
      {
        heading: '儿童隐私',
        blocks: [
          '本网站不针对 13 岁以下儿童,我们也不会故意收集儿童的个人信息。如果你认为有儿童向我们提供了个人信息,请联系我们以便删除。',
        ],
      },
      {
        heading: '本政策的变更',
        blocks: [
          '我们可能不时更新本《隐私政策》。更新时,我们会修改本页顶部的"最近更新"日期。建议你定期查看本页。',
        ],
      },
      {
        heading: '联系我们',
        blocks: [
          '如果你对本《隐私政策》有疑问,请{联系我们}。',
        ],
        links: { '联系我们': '/contact/' },
      },
    ],
  },
  es: {
    title: 'Política de Privacidad',
    description: 'Última actualización: enero de 2026',
    sections: [
      {
        heading: '',
        blocks: [
          'Esta Política de Privacidad explica cómo ToolHub ("nosotros") gestiona la información cuando usas nuestro sitio web y nuestras herramientas. La diseñamos para ser breve, clara y honesta — sin niebla legal.',
        ],
      },
      {
        heading: 'La versión corta',
        blocks: [
          {
            list: [
              'Nuestras herramientas se ejecutan por completo en tu navegador. El texto y los archivos que procesas nunca salen de tu dispositivo.',
              'No te pedimos que crees una cuenta ni recopilamos tu nombre o correo para usar las herramientas.',
              'Usamos empresas publicitarias externas (en particular Google AdSense) para mantener el sitio gratuito. Estas empresas pueden usar cookies para mostrar anuncios relevantes.',
              'Usamos analítica respetuosa con la privacidad para entender qué herramientas se usan y mejorarlas.',
            ],
          },
        ],
      },
      {
        heading: 'Información que proporcionas a las herramientas',
        blocks: [
          'Cuando usas una herramienta — por ejemplo, al pegar texto en el Slug Generator — esa entrada se procesa localmente en tu navegador con JavaScript. Nunca se transmite a nuestros servidores, bases de datos ni a terceros. Literalmente no podemos ver lo que escribes.',
        ],
      },
      {
        heading: 'Información recopilada automáticamente',
        blocks: [
          'Como la mayoría de los sitios, nosotros y nuestros socios recopilamos automáticamente ciertos datos técnicos cuando nos visitas:',
          {
            list: [
              'Tipo de navegador, sistema operativo y tipo de dispositivo.',
              'Región aproximada (nivel país, derivada de la IP).',
              'Las páginas que visitas y el sitio de procedencia.',
              'Métricas de uso agregadas y anónimas.',
            ],
          },
          'Estos datos se usan para mantener el sitio seguro, comprender los patrones de tráfico y mejorar las herramientas.',
        ],
      },
      {
        heading: 'Cookies y tecnologías similares',
        blocks: [
          'Usamos cookies y tecnologías similares con dos fines: servir anuncios de terceros y analítica respetuosa con la privacidad. Una cookie es un pequeño archivo de texto almacenado en tu dispositivo.',
          'Cookies publicitarias. Usamos Google AdSense, un proveedor externo que puede usar cookies para mostrar anuncios basados en tus visitas previas a este y otros sitios. El uso que Google hace de las cookies publicitarias permite a él y a sus socios servirte anuncios basados en tu visita a nuestro sitio y/o a otros sitios de Internet.',
          {
            list: [
              'Puedes darte de baja de la publicidad personalizada en la {Configuración de anuncios de Google}.',
              'La información sobre cómo Google usa los datos de sitios que emplean sus API y productos publicitarios está en la {política de Sitios de Socios de Google}.',
              'Para información sobre los proveedores y redes publicitarias externas, visita {aboutads.info}.',
            ],
          },
          'Cookies analíticas. Usamos analítica agregada y respetuosa con la privacidad, que no te rastrea entre sitios ni te identifica personalmente.',
        ],
        links: {
          'Configuración de anuncios de Google': 'https://www.google.com/settings/ads',
          'política de Sitios de Socios de Google': 'https://policies.google.com/technologies/partner-sites',
          'aboutads.info': 'https://www.aboutads.info',
        },
      },
      {
        heading: 'Servicios de terceros',
        blocks: [
          'Dependemos de las siguientes categorías de servicios de terceros, cada una con sus propias prácticas de privacidad:',
          {
            list: [
              'Google AdSense — sirve anuncios; puede usar cookies para personalización. Ver la {Política de Privacidad de Google}.',
              'Alojamiento web y CDN — entregan las páginas; pueden registrar datos estándar de solicitud (IP, marca de tiempo, user agent).',
            ],
          },
        ],
        links: {
          'Política de Privacidad de Google': 'https://policies.google.com/privacy',
        },
      },
      {
        heading: 'Conservación de datos',
        blocks: [
          'Como nuestras herramientas no transmiten tu entrada, no hay nada que conservar sobre tu uso. Los registros del servidor y los datos analíticos agregados se conservan solo el tiempo necesario para los fines descritos y luego se eliminan o anonimizan.',
        ],
      },
      {
        heading: 'Tus decisiones',
        blocks: [
          {
            list: [
              'Puedes desactivar las cookies en la configuración de tu navegador en cualquier momento.',
              'Puedes darte de baja de los anuncios personalizados desde el enlace de Configuración de anuncios de Google.',
              'Puedes usar un bloqueador de contenido o el modo de navegación privada.',
            ],
          },
        ],
      },
      {
        heading: 'Privacidad infantil',
        blocks: [
          'Nuestro sitio no está dirigido a menores de 13 años y no recopilamos deliberadamente información personal de niños. Si crees que un niño nos ha facilitado datos personales, contáctanos para que los eliminemos.',
        ],
      },
      {
        heading: 'Cambios en esta política',
        blocks: [
          'Podemos actualizar esta Política de Privacidad de vez en cuando. Cuando lo hagamos, revisaremos la fecha de "Última actualización" en la parte superior. Te animamos a revisar esta página periódicamente.',
        ],
      },
      {
        heading: 'Contáctanos',
        blocks: [
          'Si tienes preguntas sobre esta Política de Privacidad, {contáctanos}.',
        ],
        links: { 'contáctanos': '/contact/' },
      },
    ],
  },
  de: {
    title: 'Datenschutzerklärung',
    description: 'Zuletzt aktualisiert: Januar 2026',
    sections: [
      {
        heading: '',
        blocks: [
          'Diese Datenschutzerklärung erläutert, wie ToolHub („wir") mit Informationen umgeht, wenn du unsere Website und Werkzeuge nutzt. Wir haben sie kurz, klar und ehrlich gehalten — ohne juristischen Nebel.',
        ],
      },
      {
        heading: 'Die Kurzfassung',
        blocks: [
          {
            list: [
              'Unsere Werkzeuge laufen vollständig in deinem Browser. Die Texte und Dateien, die du verarbeitest, verlassen nie dein Gerät.',
              'Wir bitten dich nicht um ein Konto und erheben weder deinen Namen noch deine E-Mail, um die Werkzeuge zu nutzen.',
              'Wir nutzen Drittanbieter-Werbeunternehmen (insbesondere Google AdSense), um die Seite kostenlos zu halten. Diese Unternehmen können Cookies verwenden, um relevante Anzeigen zu schalten.',
              'Wir nutzen datenschutzfreundliche Analyse, um zu verstehen, welche Werkzeuge verwendet werden, und sie zu verbessern.',
            ],
          },
        ],
      },
      {
        heading: 'Informationen, die du den Werkzeugen gibst',
        blocks: [
          'Wenn du ein Werkzeug nutzt — z. B. Text in den Slug-Generator einfügst — wird diese Eingabe lokal in deinem Browser per JavaScript verarbeitet. Sie wird nie an unsere Server, Datenbanken oder Dritte übertragen. Wir können buchstäblich nicht sehen, was du tippst.',
        ],
      },
      {
        heading: 'Automatisch erhobene Daten',
        blocks: [
          'Wie die meisten Websites erheben wir und unsere Partner beim Besuch bestimmte technische Daten automatisch:',
          {
            list: [
              'Browsertyp, Betriebssystem und Gerätetyp.',
              'Grobe Region (Länderebene, abgeleitet aus der IP-Adresse).',
              'Die besuchten Seiten und die verweisende Site.',
              'Aggregierte, anonymisierte Nutzungskennzahlen.',
            ],
          },
          'Diese Daten dienen der Sicherheit der Seite, dem Verständnis von Verkehrsmustern und der Verbesserung der Werkzeuge.',
        ],
      },
      {
        heading: 'Cookies und ähnliche Technologien',
        blocks: [
          'Wir verwenden Cookies und ähnliche Technologien für zwei Zwecke: Drittanbieter-Werbung und datenschutzfreundliche Analyse. Ein Cookie ist eine kleine Textdatei auf deinem Gerät.',
          'Werbe-Cookies. Wir nutzen Google AdSense, einen Drittanbieter, der Cookies verwenden kann, um Anzeigen basierend auf deinen früheren Besuchen auf dieser und anderen Websites zu schalten. Googles Nutzung von Werbe-Cookies ermöglicht es ihm und seinen Partnern, dir Anzeigen basierend auf deinem Besuch unserer Site und/oder anderer Sites im Internet auszuspielen.',
          {
            list: [
              'Du kannst personalisierte Werbung in den {Google-Anzeigeneinstellungen} deaktivieren.',
              'Wie Google Daten von Sites nutzt, die seine APIs und Werbeprodukte verwenden, steht in der {Richtlinie zu Partner-Sites von Google}.',
              'Infos zu den Drittanbietern und Werbenetzwerken, die Anzeigen schalten, findest du auf {aboutads.info}.',
            ],
          },
          'Analyse-Cookies. Wir nutzen datenschutzfreundliche, aggregierte Analyse, die dich nicht über andere Sites hinweg verfolgt und dich nicht persönlich identifiziert.',
        ],
        links: {
          'Google-Anzeigeneinstellungen': 'https://www.google.com/settings/ads',
          'Richtlinie zu Partner-Sites von Google': 'https://policies.google.com/technologies/partner-sites',
          'aboutads.info': 'https://www.aboutads.info',
        },
      },
      {
        heading: 'Drittanbieter-Dienste',
        blocks: [
          'Wir verlassen uns auf folgende Kategorien von Drittanbieter-Diensten, jeweils mit eigenen Datenschutzpraktiken:',
          {
            list: [
              'Google AdSense — schaltet Anzeigen; kann Cookies für Personalisierung nutzen. Siehe {Googles Datenschutzerklärung}.',
              'Webhosting und CDN — liefern die Seiten; können Standard-Serveranfragedaten protokollieren (IP, Zeitstempel, User Agent).',
            ],
          },
        ],
        links: {
          'Googles Datenschutzerklärung': 'https://policies.google.com/privacy',
        },
      },
      {
        heading: 'Datenaufbewahrung',
        blocks: [
          'Da unsere Werkzeuge deine Eingabe nicht an uns übertragen, gibt es zu deiner Werkzeugnutzung nichts aufzubewahren. Server-Logdateien und aggregierte Analysedaten werden nur so lange aufbewahrt, wie für die oben genannten Zwecke nötig, und danach gelöscht oder anonymisiert.',
        ],
      },
      {
        heading: 'Deine Wahlmöglichkeiten',
        blocks: [
          {
            list: [
              'Du kannst Cookies jederzeit in deinen Browser-Einstellungen deaktivieren.',
              'Du kannst personalisierte Werbung über den Link zu den Google-Anzeigeneinstellungen oben deaktivieren.',
              'Du kannst einen Content-Blocker oder den privaten Browsermodus nutzen.',
            ],
          },
        ],
      },
      {
        heading: 'Datenschutz von Kindern',
        blocks: [
          'Unsere Site richtet sich nicht an Kinder unter 13 Jahren und wir erheben wissentlich keine persönlichen Daten von Kindern. Wenn du glaubst, dass ein Kind uns persönliche Daten übermittelt hat, kontaktiere uns, damit wir sie löschen.',
        ],
      },
      {
        heading: 'Änderungen dieser Richtlinie',
        blocks: [
          'Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Dabei ändern wir das Datum „Zuletzt aktualisiert" oben auf dieser Seite. Wir empfehlen dir, diese Seite regelmäßig zu überprüfen.',
        ],
      },
      {
        heading: 'Kontakt',
        blocks: [
          'Wenn du Fragen zu dieser Datenschutzerklärung hast, {kontaktiere uns}.',
        ],
        links: { 'kontaktiere uns': '/contact/' },
      },
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Terms 页
// ─────────────────────────────────────────────────────────────────────────────
export const termsPage: LocalizedPage = {
  en: {
    title: 'Terms of Service',
    description: 'Last updated: January 2026',
    sections: [
      {
        heading: '',
        blocks: [
          'Welcome to ToolHub. These Terms of Service ("Terms") govern your access to and use of our website and tools (the "Service"). By using the Service, you agree to these Terms. If you do not agree, please do not use the Service.',
        ],
      },
      {
        heading: '1. Using Our Tools',
        blocks: [
          'We grant you a personal, non-exclusive, non-transferable license to use the Service for lawful purposes. You may use the tools for both personal and commercial work — for example, generating slugs for your company blog is fine.',
          'You agree not to:',
          {
            list: [
              'Use the Service for any unlawful activity or in violation of any applicable law.',
              'Attempt to disrupt, overload, or gain unauthorized access to the Service.',
              'Use automated scripts to abuse the Service or to attempt to disable it.',
              'Reproduce or resell the Service as your own product.',
            ],
          },
        ],
      },
      {
        heading: '2. Your Content',
        blocks: [
          'Because our tools process input locally in your browser, you retain all rights to anything you enter. We do not store, copy, or claim any ownership over your input.',
        ],
      },
      {
        heading: '3. Intellectual Property',
        blocks: [
          'The Service — including its design, text, and code — is owned by ToolHub and protected by intellectual property laws. The output produced by a tool from your input belongs to you.',
        ],
      },
      {
        heading: '4. Disclaimers',
        blocks: [
          'The Service is provided "as is" and "as available," without warranties of any kind, express or implied. We do not guarantee that the tools will be error-free, uninterrupted, or produce results suitable for every purpose. You use the output at your own discretion.',
        ],
      },
      {
        heading: '5. Limitation of Liability',
        blocks: [
          'To the maximum extent permitted by law, ToolHub shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, the Service. Because the Service is provided free of charge, our total liability for any claim is limited to the amounts you have paid us, which is zero.',
        ],
      },
      {
        heading: '6. Advertisements',
        blocks: [
          'The Service is supported by advertising. Third-party ad networks may serve ads and use cookies as described in our {Privacy Policy}. We are not responsible for the content of third-party advertisements.',
        ],
        links: { 'Privacy Policy': '/privacy/' },
      },
      {
        heading: '7. Third-Party Links',
        blocks: [
          'The Service may contain links to third-party websites. We are not responsible for the content, policies, or practices of any third-party sites and assume no liability for them.',
        ],
      },
      {
        heading: '8. Changes to the Service and Terms',
        blocks: [
          'We may modify or discontinue the Service, or update these Terms, at any time. When Terms change, we will update the "Last updated" date above. Continued use of the Service after changes take effect constitutes acceptance of the new Terms.',
        ],
      },
      {
        heading: '9. Governing Law',
        blocks: [
          'These Terms are governed by the laws of the jurisdiction in which ToolHub operates, without regard to conflict-of-law principles.',
        ],
      },
      {
        heading: '10. Contact',
        blocks: [
          'Questions about these Terms? Please {get in touch}.',
        ],
        links: { 'get in touch': '/contact/' },
      },
    ],
  },
  zh: {
    title: '服务条款',
    description: '最近更新:2026 年 1 月',
    sections: [
      {
        heading: '',
        blocks: [
          '欢迎使用 ToolHub。本《服务条款》("条款")约束你访问和使用我们的网站与工具("服务")。使用服务即表示你同意本条款。如不同意,请不要使用服务。',
        ],
      },
      {
        heading: '1. 使用我们的工具',
        blocks: [
          '我们授予你一项个人的、非独占的、不可转让的许可,用于合法目的使用本服务。个人和商业用途都可以 —— 例如,为你公司博客生成 slug 是允许的。',
          '你同意不:',
          {
            list: [
              '出于任何非法活动或违反任何适用法律的目的使用服务。',
              '试图扰乱、过载或未经授权地访问服务。',
              '使用自动化脚本滥用服务或试图使其失效。',
              '将服务作为自己的产品复制或转售。',
            ],
          },
        ],
      },
      {
        heading: '2. 你的内容',
        blocks: [
          '由于我们的工具在浏览器中本地处理输入,你对所输入的任何内容保留全部权利。我们不存储、不复制,也不对输入主张任何所有权。',
        ],
      },
      {
        heading: '3. 知识产权',
        blocks: [
          '本服务 —— 包括其设计、文本和代码 —— 归 ToolHub 所有,受知识产权法保护。工具基于你的输入产生的输出归你所有。',
        ],
      },
      {
        heading: '4. 免责声明',
        blocks: [
          '本服务按"现状"和"按可用性"提供,不附带任何明示或暗示的保证。我们不保证工具无错误、不中断,或对每个目的都能产出合适的结果。你自行斟酌使用输出。',
        ],
      },
      {
        heading: '5. 责任限制',
        blocks: [
          '在法律允许的最大范围内,ToolHub 对因你使用或无法使用服务而产生的任何间接、附带或后果性损害概不负责。由于服务免费提供,我们对任何索赔的总责任以你已向我们支付的金额为限,即为零。',
        ],
      },
      {
        heading: '6. 广告',
        blocks: [
          '本服务由广告支持。第三方广告网络可能按我们{隐私政策}中所述投放广告并使用 cookie。我们对第三方广告的内容不承担责任。',
        ],
        links: { '隐私政策': '/privacy/' },
      },
      {
        heading: '7. 第三方链接',
        blocks: [
          '本服务可能包含指向第三方网站的链接。我们对任何第三方网站的内容、政策或做法不承担责任,也不对此承担任何责任。',
        ],
      },
      {
        heading: '8. 服务与条款的变更',
        blocks: [
          '我们可随时修改或停止服务,或更新本条款。条款变更时,我们会更新上方的"最近更新"日期。变更生效后继续使用服务,即视为接受新条款。',
        ],
      },
      {
        heading: '9. 适用法律',
        blocks: [
          '本条款受 ToolHub 运营所在司法管辖区的法律管辖,不考虑法律冲突原则。',
        ],
      },
      {
        heading: '10. 联系',
        blocks: [
          '对本条款有疑问?请{联系我们}。',
        ],
        links: { '联系我们': '/contact/' },
      },
    ],
  },
  es: {
    title: 'Términos del Servicio',
    description: 'Última actualización: enero de 2026',
    sections: [
      {
        heading: '',
        blocks: [
          'Bienvenido a ToolHub. Estos Términos del Servicio ("Términos") rigen tu acceso y uso de nuestro sitio web y herramientas (el "Servicio"). Al usar el Servicio, aceptas estos Términos. Si no estás de acuerdo, por favor no uses el Servicio.',
        ],
      },
      {
        heading: '1. Uso de nuestras herramientas',
        blocks: [
          'Te concedemos una licencia personal, no exclusiva e intransferible para usar el Servicio con fines lícitos. Puedes usar las herramientas tanto para trabajo personal como comercial — por ejemplo, generar slugs para el blog de tu empresa está permitido.',
          'Te comprometes a no:',
          {
            list: [
              'Usar el Servicio para actividades ilícitas o en violación de cualquier ley aplicable.',
              'Intentar interrumpir, sobrecargar o acceder sin autorización al Servicio.',
              'Usar scripts automatizados para abusar del Servicio o intentar desactivarlo.',
              'Reproducir o revender el Servicio como producto propio.',
            ],
          },
        ],
      },
      {
        heading: '2. Tu contenido',
        blocks: [
          'Como nuestras herramientas procesan la entrada localmente en tu navegador, conservas todos los derechos sobre lo que introduzcas. No almacenamos, copiamos ni reclamamos propiedad alguna sobre tu entrada.',
        ],
      },
      {
        heading: '3. Propiedad intelectual',
        blocks: [
          'El Servicio — incluido su diseño, texto y código — es propiedad de ToolHub y está protegido por las leyes de propiedad intelectual. La salida producida por una herramienta a partir de tu entrada te pertenece.',
        ],
      },
      {
        heading: '4. Avisos legales',
        blocks: [
          'El Servicio se ofrece "tal cual" y "según disponibilidad", sin garantías de ningún tipo, expresas o implícitas. No garantizamos que las herramientas estén libres de errores, sin interrupciones o que produzcan resultados adecuados para todo fin. Usas la salida bajo tu propio criterio.',
        ],
      },
      {
        heading: '5. Limitación de responsabilidad',
        blocks: [
          'En la medida máxima permitida por la ley, ToolHub no será responsable de ningún daño indirecto, incidental o consecuente derivado del uso o la imposibilidad de uso del Servicio. Dado que el Servicio es gratuito, nuestra responsabilidad total por cualquier reclamación se limita a las cantidades que nos hayas pagado, que son cero.',
        ],
      },
      {
        heading: '6. Anuncios',
        blocks: [
          'El Servicio se financia con publicidad. Las redes publicitarias externas pueden mostrar anuncios y usar cookies como se describe en nuestra {Política de Privacidad}. No somos responsables del contenido de los anuncios de terceros.',
        ],
        links: { 'Política de Privacidad': '/privacy/' },
      },
      {
        heading: '7. Enlaces a terceros',
        blocks: [
          'El Servicio puede contener enlaces a sitios de terceros. No nos responsabilizamos del contenido, las políticas o las prácticas de sitios de terceros y no asumimos responsabilidad alguna por ellos.',
        ],
      },
      {
        heading: '8. Cambios al Servicio y a los Términos',
        blocks: [
          'Podemos modificar o discontinuar el Servicio, o actualizar estos Términos, en cualquier momento. Cuando cambien los Términos, actualizaremos la fecha de "Última actualización" arriba. El uso continuado del Servicio tras los cambios constituye la aceptación de los nuevos Términos.',
        ],
      },
      {
        heading: '9. Ley aplicable',
        blocks: [
          'Estos Términos se rigen por las leyes de la jurisdicción en la que opera ToolHub, sin tener en cuenta los principios de conflicto de leyes.',
        ],
      },
      {
        heading: '10. Contacto',
        blocks: [
          '¿Preguntas sobre estos Términos? {Escríbenos}.',
        ],
        links: { 'Escríbenos': '/contact/' },
      },
    ],
  },
  de: {
    title: 'Nutzungsbedingungen',
    description: 'Zuletzt aktualisiert: Januar 2026',
    sections: [
      {
        heading: '',
        blocks: [
          'Willkommen bei ToolHub. Diese Nutzungsbedingungen („Bedingungen") regeln deinen Zugang zu und die Nutzung unserer Website und Werkzeuge (der „Dienst"). Mit der Nutzung des Dienstes stimmst du diesen Bedingungen zu. Wenn du nicht einverstanden bist, nutze den Dienst bitte nicht.',
        ],
      },
      {
        heading: '1. Nutzung unserer Werkzeuge',
        blocks: [
          'Wir gewähren dir eine persönliche, nicht-exklusive, nicht-übertragbare Lizenz zur Nutzung des Dienstes für rechtmäßige Zwecke. Du darfst die Werkzeuge für private und kommerzielle Arbeit nutzen — beispielsweise Slugs für den Firmenblog zu generieren ist in Ordnung.',
          'Du stimmst zu, Folgendes zu unterlassen:',
          {
            list: [
              'Den Dienst für rechtswidrige Aktivitäten oder unter Verstoß gegen anwendbares Recht nutzen.',
              'Versuchen, den Dienst zu stören, zu überlasten oder unbefugt darauf zuzugreifen.',
              'Automatisierte Skripte verwenden, um den Dienst zu missbrauchen oder zu deaktivieren.',
              'Den Dienst als eigenes Produkt reproduzieren oder weiterverkaufen.',
            ],
          },
        ],
      },
      {
        heading: '2. Deine Inhalte',
        blocks: [
          'Da unsere Werkzeuge die Eingabe lokal in deinem Browser verarbeiten, behältst du alle Rechte an dem, was du eingibst. Wir speichern, kopieren oder beanspruchen kein Eigentum an deiner Eingabe.',
        ],
      },
      {
        heading: '3. Geistiges Eigentum',
        blocks: [
          'Der Dienst — einschließlich Design, Text und Code — ist Eigentum von ToolHub und durch Gesetze zum geistigen Eigentum geschützt. Die Ausgabe, die ein Werkzeug aus deiner Eingabe erzeugt, gehört dir.',
        ],
      },
      {
        heading: '4. Haftungsausschluss',
        blocks: [
          'Der Dienst wird „wie besehen" und „wie verfügbar" ohne jegliche Gewährleistung, ausdrücklich oder stillschweigend, bereitgestellt. Wir garantieren nicht, dass die Werkzeuge fehlerfrei, unterbrechungsfrei oder für jeden Zweck geeignet sind. Du verwendest die Ausgabe auf eigenes Ermessen.',
        ],
      },
      {
        heading: '5. Haftungsbeschränkung',
        blocks: [
          'Soweit gesetzlich zulässig, haftet ToolHub nicht für indirekte, beiläufige oder Folgeschäden, die aus deiner Nutzung oder Nicht-Nutzung des Dienstes entstehen. Da der Dienst kostenlos ist, ist unsere Gesamthaftung für beliebige Ansprüche auf die Beträge begrenzt, die du uns gezahlt hast — also null.',
        ],
      },
      {
        heading: '6. Werbung',
        blocks: [
          'Der Dienst wird durch Werbung finanziert. Drittanbieter-Werbenetzwerke können Anzeigen schalten und Cookies verwenden, wie in unserer {Datenschutzerklärung} beschrieben. Für den Inhalt von Drittanbieter-Werbung sind wir nicht verantwortlich.',
        ],
        links: { 'Datenschutzerklärung': '/privacy/' },
      },
      {
        heading: '7. Links zu Drittanbietern',
        blocks: [
          'Der Dienst kann Links zu Drittanbieter-Websites enthalten. Wir sind nicht verantwortlich für Inhalt, Richtlinien oder Praktiken Dritter und übernehmen dafür keine Haftung.',
        ],
      },
      {
        heading: '8. Änderungen am Dienst und an den Bedingungen',
        blocks: [
          'Wir können den Dienst jederzeit ändern oder einstellen oder diese Bedingungen aktualisieren. Wenn sich die Bedingungen ändern, aktualisieren wir das Datum „Zuletzt aktualisiert" oben. Fortgesetzte Nutzung des Dienstes nach Inkrafttreten der Änderungen gilt als Zustimmung zu den neuen Bedingungen.',
        ],
      },
      {
        heading: '9. Anwendbares Recht',
        blocks: [
          'Diese Bedingungen unterliegen den Gesetzen der Rechtsordnung, in der ToolHub tätig ist, ohne Kollisionsnormen.',
        ],
      },
      {
        heading: '10. Kontakt',
        blocks: [
          'Fragen zu diesen Bedingungen? {Melde dich bei uns}.',
        ],
        links: { 'Melde dich bei uns': '/contact/' },
      },
    ],
  },
}
