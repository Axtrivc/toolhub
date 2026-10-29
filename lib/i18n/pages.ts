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
          'Most tools here run entirely in your browser. The text you paste, the files you process, and the options you toggle are handled locally instead of being sent to a server-side calculation API.',
          'The site itself may show ads and use analytics to keep the tools free. These services handle site-level data separately, and shareable tool URLs can contain settings. Our {Privacy Policy} explains those data flows and why sensitive values do not belong in a shared link.',
        ],
        links: { 'Privacy Policy': '/privacy/' },
      },
      {
        heading: 'What We Build',
        blocks: [
          'We focus on utilities for developers, writers, and anyone who works in a browser. Each tool is designed around a single, clearly defined task — like converting a blog post title into a clean URL slug — and is accompanied by a guide explaining how to get the most out of it.',
          'Under the hood, the site is a static-exported Next.js + TypeScript app that installs as a PWA: pages are pre-rendered files, and every calculation runs browser-locally. It currently ships 350 tools across 15 categories, with the interface available in 4 languages (English, 中文, Español, Deutsch).',
          'New tools are added regularly. If there is something you wish existed, {let us know} — reader requests have shaped more than one tool on this site.',
          'Curious how all of this fits together? There is a full {architecture write-up} on the blog.',
        ],
        links: { 'let us know': '/contact/', 'architecture write-up': '/blog/how-i-built-toolhub/' },
      },
      {
        heading: 'Who Is Behind This',
        blocks: [
          'ToolHub is designed, built, and maintained by one independent developer in spare time — a side project born out of frustration with bloated, ad-heavy utility sites, funded by unobtrusive advertising. There is no company behind it and no growth-hack agenda — just a quiet effort to make the web slightly more useful.',
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
          '这里的大多数工具完全在你的浏览器中运行。你粘贴的文本、处理的文件和勾选的选项都在本地处理,不会发送给服务端计算 API。',
          '站点本身可能展示广告并使用分析服务来维持工具免费。这些服务会单独处理网站层面的数据,而工具分享链接也可能包含设置。{隐私政策}会讲清这些数据流,以及为什么不应在链接中放敏感数值。',
        ],
        links: { '隐私政策': '/privacy/' },
      },
      {
        heading: '我们做什么',
        blocks: [
          '我们专注为开发者、写作者,以及任何在浏览器里工作的人做工具。每个工具围绕一个清晰定义的任务设计 —— 比如把博客标题转成干净的 URL slug —— 并附上指南,教你如何发挥它最大的价值。',
          '技术底座是一个静态导出的 Next.js + TypeScript 应用,可安装为 PWA:页面都是预渲染文件,所有计算都在浏览器本地完成。目前收录 350 个工具、15 个分类,界面提供 4 种语言(English、中文、Español、Deutsch)。',
          '新工具持续更新。如果你希望某个工具存在,{告诉我们} —— 读者需求已经催生了本站不止一个工具。',
          '想知道这一切是怎么拼起来的?博客上有一篇完整的{架构复盘}。',
        ],
        links: { '告诉我们': '/contact/', '架构复盘': '/blog/how-i-built-toolhub/' },
      },
      {
        heading: '背后是谁',
        blocks: [
          'ToolHub 由一名独立开发者利用业余时间设计、开发和维护 —— 源于对臃肿、广告满屏的工具站的厌倦,靠不打扰人的广告覆盖成本。背后没有公司,也没有增长黑客的算计 —— 只是想让互联网稍微更有用一点。',
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
          'La mayoría de las herramientas se ejecutan por completo en tu navegador. El texto, los archivos y las opciones se procesan localmente, sin enviarlos a una API de cálculo remota.',
          'El sitio puede mostrar publicidad y usar analíticas para mantener las herramientas gratuitas. Estos servicios tratan datos del sitio por separado, y las URLs para compartir pueden incluir opciones. Nuestra {Política de Privacidad} explica estos flujos y por qué no debes compartir valores sensibles en un enlace.',
        ],
        links: { 'Política de Privacidad': '/privacy/' },
      },
      {
        heading: 'Qué construimos',
        blocks: [
          'Nos centramos en utilidades para desarrolladores, escritores y cualquiera que trabaje en un navegador. Cada herramienta gira en torno a una única tarea bien definida — como convertir el título de un artículo en un slug URL limpio — y viene con una guía para sacarle el máximo.',
          'Bajo el capó, el sitio es una aplicación Next.js + TypeScript exportada estáticamente e instalable como PWA: las páginas son archivos prerenderizados y cada cálculo corre localmente en el navegador. Hoy reúne 350 herramientas en 15 categorías, con la interfaz disponible en 4 idiomas (English, 中文, Español, Deutsch).',
          'Añadimos herramientas nuevas con regularidad. Si echas en falta algo, {dínoslo} — las peticiones de los lectores han dado forma a más de una herramienta en este sitio.',
          '¿Curioso por cómo encaja todo? En el blog hay un {repaso completo de la arquitectura}.',
        ],
        links: { 'dínoslo': '/contact/', 'repaso completo de la arquitectura': '/blog/how-i-built-toolhub/' },
      },
      {
        heading: 'Quién está detrás',
        blocks: [
          'ToolHub está diseñado, construido y mantenido por un desarrollador independiente en su tiempo libre — un proyecto paralelo nacido del cansancio con sitios de utilidades inflados y cargados de anuncios, financiado con publicidad discreta. No hay ninguna empresa detrás ni agenda de growth-hack — solo un esfuerzo tranquilo por hacer la web un poco más útil.',
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
          'Die meisten Werkzeuge laufen vollständig in deinem Browser. Text, Dateien und Optionen werden lokal verarbeitet, statt an eine serverseitige Rechen-API gesendet zu werden.',
          'Die Seite kann Werbung zeigen und Analysen nutzen, um die Werkzeuge kostenlos zu halten. Diese Dienste verarbeiten Website-Daten getrennt, und teilbare Werkzeug-URLs können Einstellungen enthalten. Unsere {Datenschutzerklärung} erklärt diese Datenflüsse und warum sensible Werte nicht in einen geteilten Link gehören.',
        ],
        links: { 'Datenschutzerklärung': '/privacy/' },
      },
      {
        heading: 'Was wir bauen',
        blocks: [
          'Wir konzentrieren uns auf Helfer für Entwickler, Schreibende und alle, die im Browser arbeiten. Jedes Werkzeug ist um eine einzige klar definierte Aufgabe herum gebaut — etwa einen Blogtitel in einen sauberen URL-Slug umzuwandeln — und wird von einer Anleitung begleitet, die zeigt, wie du das Meiste herausholst.',
          'Unter der Haube ist die Seite eine statisch exportierte Next.js-+-TypeScript-Anwendung, die sich als PWA installieren lässt: Seiten sind vorgerenderte Dateien, und jede Berechnung läuft lokal im Browser. Aktuell umfasst sie 350 Werkzeuge in 15 Kategorien, die Oberfläche gibt es in 4 Sprachen (English, 中文, Español, Deutsch).',
          'Neue Werkzeuge kommen regelmäßig dazu. Wenn du dir etwas wünschst, das es noch nicht gibt, {sag uns Bescheid} — Leserwünsche haben hier schon mehr als ein Werkzeug geprägt.',
          'Neugierig, wie das alles zusammengebaut ist? Im Blog gibt es eine {vollständige Architektur-Rückschau}.',
        ],
        links: { 'sag uns Bescheid': '/contact/', 'vollständige Architektur-Rückschau': '/blog/how-i-built-toolhub/' },
      },
      {
        heading: 'Wer dahinter steckt',
        blocks: [
          'ToolHub wird von einem einzigen unabhängigen Entwickler in der Freizeit entworfen, gebaut und gepflegt — ein Nebenprojekt aus Frust über aufgeblähte, werbelastige Utility-Seiten, finanziert über dezentrale Werbung. Kein Unternehmen dahinter, keine Growth-Hack-Agenda — nur der leise Versuch, das Web etwas nützlicher zu machen.',
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
          'ToolHub is maintained by one independent developer. Replies typically take 1–3 business days. Thank you for your patience.',
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
          'ToolHub 由一名独立开发者维护,通常在 1–3 个工作日内回复。感谢你的耐心。',
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
          'ToolHub lo mantiene un desarrollador independiente. Las respuestas suelen tardar 1–3 días laborables. Gracias por tu paciencia.',
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
          'Für Werbe-, Sponsorings- oder Kooperationsanfragen nutze dieselbe Adresse mit dem Betreff „Partnership“.',
        ],
      },
      {
        heading: 'Reaktionszeit',
        blocks: [
          'ToolHub wird von einem unabhängigen Entwickler gepflegt. Antworten dauern in der Regel 1–3 Werktage. Danke für deine Geduld.',
        ],
      },
    ],
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Privacy 页
// ─────────────────────────────────────────────────────────────────────────────
export { privacyPage } from './privacy-page'

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
          'Willkommen bei ToolHub. Diese Nutzungsbedingungen („Bedingungen“) regeln deinen Zugang zu und die Nutzung unserer Website und Werkzeuge (der „Dienst“). Mit der Nutzung des Dienstes stimmst du diesen Bedingungen zu. Wenn du nicht einverstanden bist, nutze den Dienst bitte nicht.',
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
          'Der Dienst wird „wie besehen“ und „wie verfügbar“ ohne jegliche Gewährleistung, ausdrücklich oder stillschweigend, bereitgestellt. Wir garantieren nicht, dass die Werkzeuge fehlerfrei, unterbrechungsfrei oder für jeden Zweck geeignet sind. Du verwendest die Ausgabe auf eigenes Ermessen.',
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
          'Wir können den Dienst jederzeit ändern oder einstellen oder diese Bedingungen aktualisieren. Wenn sich die Bedingungen ändern, aktualisieren wir das Datum „Zuletzt aktualisiert“ oben. Fortgesetzte Nutzung des Dienstes nach Inkrafttreten der Änderungen gilt als Zustimmung zu den neuen Bedingungen.',
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
