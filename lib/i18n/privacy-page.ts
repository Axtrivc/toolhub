import type { LocalizedPage } from './pages'

/** 隐私政策单独维护，正文只描述代码中真实存在的数据流。 */
export const privacyPage: LocalizedPage = {
  en: {
    title: 'Privacy Policy',
    description: 'Last updated: October 29, 2026',
    sections: [
      {
        heading: 'The Short Version',
        blocks: [
          'ToolHub is an independent project operated by its maintainer. This policy separates what happens inside a tool from the data needed to operate and measure the website.',
          {
            list: [
              'Calculations and file transformations run in your browser; we do not send tool input to a server-side calculation API.',
              'Some tools offer shareable URLs. Values placed in the URL can be visible to hosting, analytics, your browser history, and anyone you share the link with.',
              'No account is required. Advertising and analytics are separate from tool processing and are disclosed below.',
            ],
          },
        ],
      },
      {
        heading: 'Tool Inputs, Local Storage, and Shareable URLs',
        blocks: [
          'Text, numbers, and files are processed locally by JavaScript in your browser. ToolHub does not operate a remote service that performs the calculations for you.',
          'Some tools can save drafts, history, preferences, or recent items in your browser storage. That local data stays on your device until you clear it or the site data in your browser.',
          'Tools with a Share Link feature may encode input values or settings in the page URL, such as ?value=5. A URL is not a private storage channel: it can appear in browser history, hosting and CDN request logs, analytics that record full page URLs, and referrer data. Do not put passwords or other sensitive information into a shareable URL.',
        ],
      },
      {
        heading: 'Website Data We and Our Providers Handle',
        blocks: [
          'The following site-level data is distinct from browser-local tool processing:',
          {
            list: [
              'Cloudflare Pages and CDN deliver the site and may process standard request logs, including IP address, timestamp, user agent, and the requested URL (including its query string).',
              'Cloudflare Web Analytics, when configured, provides aggregate page, referrer, device, and country metrics. Its beacon is described by Cloudflare as cookie-free and not using cross-site tracking. See {Cloudflare privacy information}.',
              'Google Analytics 4, when configured, loads only after you choose Accept all. It may use cookies and record page and usage data; the initial page URL can include query parameters.',
              'The ToolHub visitor counter sends the page path (without the query string), a timestamp, and a daily-rotating identifier to our Cloudflare D1 database. The identifier is a truncated SHA-256 hash of a random ID stored in your browser plus the UTC date. It is designed for daily deduplication, not cross-day identification; it is pseudonymous rather than personally identifying.',
            ],
          },
          'We use this information to deliver and secure the site, understand aggregate usage, and improve tools. We do not ask for your name or email to use a tool.',
        ],
        links: {
          'Cloudflare privacy information': 'https://www.cloudflare.com/privacypolicy/',
        },
      },
      {
        heading: 'Advertising, Cookies, and Similar Technologies',
        blocks: [
          'Language, theme, consent, local history, and visitor random ID preferences may be stored in your browser. Cloudflare Web Analytics is used without cookies; GA4 is opt-in through Accept all.',
          'When AdSense is configured, Google and its partners may use cookies or similar technologies to serve and personalize ads. The current banner is opt-out for ads: ads may load unless you choose Necessary only. Choosing Necessary only also prevents GA4 from loading. You can change browser storage and cookies through your browser settings.',
          'You can also manage personalized ads through {Google Ads Settings}, read {Google’s Partner Sites policy}, and visit {aboutads.info} for industry opt-out information.',
        ],
        links: {
          'Google Ads Settings': 'https://www.google.com/settings/ads',
          'Google’s Partner Sites policy': 'https://policies.google.com/technologies/partner-sites',
          'aboutads.info': 'https://www.aboutads.info',
        },
      },
      {
        heading: 'Data Retention',
        blocks: [
          'Visitor-counter visit rows are retained for up to 180 days and then removed by rolling cleanup. The separate all-time aggregate visit counter is retained without per-visit rows. Local drafts and browser history remain under your control.',
          'Cloudflare and Google retain logs and analytics according to their own configured retention settings and policies. We do not invent a single retention period for those independent services.',
        ],
      },
      {
        heading: 'Your Choices and Requests',
        blocks: [
          'You can clear site data and browser history, disable cookies, choose Necessary only, use private browsing or a content blocker, and avoid putting sensitive values in shareable URLs. Tool data stored only on your device must be removed there; we cannot remotely clear your browser.',
          'For a question about site data, or a request to access or delete server-side data that can reasonably be associated with you, contact the maintainer through our {contact page}. Daily-rotating visitor hashes and aggregate counts may not be linkable back to a particular person.',
        ],
        links: { 'contact page': '/contact/' },
      },
      {
        heading: 'Operator, Providers, and International Processing',
        blocks: [
          'ToolHub is maintained by an independent developer, reachable through the {contact page}. Cloudflare and Google may process data in the countries where they operate; their own privacy policies and transfer terms apply. Contact the maintainer for operator or jurisdiction-specific questions.',
        ],
        links: { 'contact page': '/contact/' },
      },
      {
        heading: "Children's Privacy and Policy Changes",
        blocks: [
          'The site is not directed to children under 13, and we do not knowingly collect personal information from children. Contact us if you believe a child has provided personal information that can be identified in server-side records.',
          'We may update this policy when the implementation or providers change. The date at the top will be updated for substantive changes.',
        ],
      },
    ],
  },
  zh: {
    title: '隐私政策',
    description: '最近更新:2026 年 10 月 29 日',
    sections: [
      {
        heading: '简短版',
        blocks: [
          'ToolHub 是由维护者独立运营的项目。本政策把工具内部的处理过程,与运行和统计网站所需的数据分开说明。',
          {
            list: [
              '计算和文件转换在你的浏览器中完成;我们不会把工具输入发送给服务端计算 API。',
              '部分工具提供分享链接。写入 URL 的数值可能被托管服务、分析服务、浏览器历史以及你分享链接的对象看到。',
              '使用工具无需账号。广告和网站分析与工具计算相互独立,具体见下文。',
            ],
          },
        ],
      },
      {
        heading: '工具输入、本地存储与分享链接',
        blocks: [
          '文本、数值和文件由浏览器中的 JavaScript 在本地处理。ToolHub 没有替你远程执行这些计算的服务。',
          '部分工具会把草稿、历史、偏好或最近项目保存在浏览器存储中。这些数据一直留在你的设备上,直到你清除它们或清除该站的浏览器数据。',
          '带“分享链接”功能的工具可能把输入值或设置编码进页面 URL,例如 ?value=5。URL 不是私密存储渠道:它可能出现在浏览器历史、托管和 CDN 请求日志、记录完整页面 URL 的分析服务以及 referrer 数据中。不要把密码或其他敏感信息放进分享链接。',
        ],
      },
      {
        heading: '我们和服务商处理的网站数据',
        blocks: [
          '以下网站层面的数据与浏览器本地计算是分开的:',
          {
            list: [
              'Cloudflare Pages 和 CDN 负责分发网站,可能处理标准请求日志,包括 IP 地址、时间戳、user agent 和请求的 URL(含查询字符串)。',
              '配置 Cloudflare Web Analytics 后,它提供汇总页面、来源、设备和国家指标。Cloudflare 将其 beacon 描述为无 cookie、不做跨站追踪。见{Cloudflare 隐私说明}。',
              '配置 Google Analytics 4 后,只有选择“全部接受”才会加载。它可能使用 cookie 并记录页面与使用数据;首次页面 URL 可能包含查询参数。',
              'ToolHub 访客计数器会把页面路径(不含查询字符串)、时间戳和每日轮换标识发送到我们的 Cloudflare D1 数据库。该标识是“浏览器中的随机 ID + UTC 日期”经 SHA-256 后截取的结果,用于按天去重,而非跨天识别;它属于去标识化的假名标识,不是姓名等直接身份信息。',
            ],
          },
          '这些信息用于分发和保护网站、了解汇总使用情况并改进工具。使用工具不需要提供姓名或邮箱。',
        ],
        links: { 'Cloudflare 隐私说明': 'https://www.cloudflare.com/privacypolicy/' },
      },
      {
        heading: '广告、Cookie 及类似技术',
        blocks: [
          '语言、主题、同意选择、本地历史和访客随机 ID 等偏好可能保存在浏览器中。Cloudflare Web Analytics 不使用 cookie;GA4 只有选择“全部接受”才加载。',
          '配置 AdSense 后,Google 及合作伙伴可能使用 cookie 或类似技术投放和个性化广告。当前横幅对广告采用退出机制:除非选择“仅必要”,否则广告可能加载。选择“仅必要”也会阻止 GA4 加载。你可以通过浏览器设置管理存储和 cookie。',
          '你也可以通过{Google 广告设置}管理个性化广告,阅读{Google 合作伙伴网站政策},或访问{aboutads.info}了解行业退出方式。',
        ],
        links: {
          'Google 广告设置': 'https://www.google.com/settings/ads',
          'Google 合作伙伴网站政策': 'https://policies.google.com/technologies/partner-sites',
          'aboutads.info': 'https://www.aboutads.info',
        },
      },
      {
        heading: '数据留存',
        blocks: [
          '访客计数的访问明细最多保留 180 天,随后由滚动清理删除。独立的累计访问总数不与这些逐次明细绑定保存。本地草稿和浏览器历史由你控制。',
          'Cloudflare 和 Google 按各自的配置与政策保留日志和分析数据。我们不会为这些独立服务虚构统一的保留期限。',
        ],
      },
      {
        heading: '你的选择与请求',
        blocks: [
          '你可以清除网站数据和浏览器历史、停用 cookie、选择“仅必要”、使用隐私浏览或内容拦截器,并避免在分享链接中放入敏感数值。只保存在你设备上的工具数据需要由你在本机删除,我们无法远程清除浏览器。',
          '如果你想询问网站数据,或请求访问、删除能够合理关联到你的服务端数据,请通过{联系页}联系维护者。每日轮换的访客哈希和汇总计数可能无法反向关联到特定个人。',
        ],
        links: { '联系页': '/contact/' },
      },
      {
        heading: '运营者、服务商与跨境处理',
        blocks: [
          'ToolHub 由一名独立开发者维护,可通过{联系页}联系。Cloudflare 和 Google 可能在其运营所在国家处理数据,适用各自的隐私政策与跨境条款。如需询问运营者或司法辖区相关信息,请联系维护者。',
        ],
        links: { '联系页': '/contact/' },
      },
      {
        heading: '儿童隐私与政策变更',
        blocks: [
          '本站不面向 13 岁以下儿童,也不会故意收集儿童个人信息。如果你认为儿童提供了可在服务端记录中识别的个人信息,请联系我们。',
          '实现或服务商变化时,我们可能更新本政策。发生实质变更时,会同步更新页首日期。',
        ],
      },
    ],
  },
  es: {
    title: 'Política de Privacidad',
    description: 'Última actualización: 29 de octubre de 2026',
    sections: [
      {
        heading: 'La versión corta',
        blocks: [
          'ToolHub es un proyecto independiente operado por su responsable. Esta política separa lo que ocurre dentro de una herramienta de los datos necesarios para operar y medir el sitio.',
          {
            list: [
              'Los cálculos y las conversiones de archivos se ejecutan en tu navegador; no enviamos la entrada a una API de cálculo remota.',
              'Algunas herramientas ofrecen enlaces para compartir. Los valores incluidos en la URL pueden ser visibles para el alojamiento, la analítica, tu historial y cualquier persona con la que compartas el enlace.',
              'No necesitas una cuenta. La publicidad y la analítica son independientes del procesamiento de las herramientas.',
            ],
          },
        ],
      },
      {
        heading: 'Entradas, almacenamiento local y enlaces para compartir',
        blocks: [
          'El texto, los números y los archivos se procesan localmente con JavaScript en tu navegador. ToolHub no tiene un servicio remoto que haga estos cálculos por ti.',
          'Algunas herramientas guardan borradores, historial, preferencias o elementos recientes en el almacenamiento del navegador. Esos datos permanecen en tu dispositivo hasta que los borres o elimines los datos del sitio.',
          'Las herramientas con Share Link pueden codificar valores u opciones en la URL, como ?value=5. Una URL no es un canal privado: puede aparecer en el historial, los registros del alojamiento y la CDN, la analítica que registre URLs completas y los datos de referrer. No incluyas contraseñas ni información sensible en una URL para compartir.',
        ],
      },
      {
        heading: 'Datos del sitio que tratamos con proveedores',
        blocks: [
          'Estos datos del sitio son distintos del procesamiento local de las herramientas:',
          {
            list: [
              'Cloudflare Pages y la CDN entregan el sitio y pueden procesar registros de solicitud con IP, fecha, user agent y URL solicitada, incluida la query string.',
              'Cloudflare Web Analytics, cuando está configurado, ofrece métricas agregadas de páginas, referrers, dispositivos y países. Cloudflare describe su beacon como libre de cookies y sin seguimiento entre sitios. Consulta la {información de privacidad de Cloudflare}.',
              'Google Analytics 4, cuando está configurado, solo se carga tras elegir Aceptar todas. Puede usar cookies y registrar páginas y uso; la URL inicial puede incluir parámetros.',
              'El contador de ToolHub envía la ruta de la página (sin query string), una fecha y un identificador diario a nuestra base Cloudflare D1. Es un hash SHA-256 truncado de un ID aleatorio del navegador más la fecha UTC. Sirve para deduplicar por día, no para identificar entre días; es seudónimo, no una identidad directa.',
            ],
          },
          'Usamos esta información para entregar y proteger el sitio, entender el uso agregado y mejorar las herramientas. No pedimos nombre ni correo para usar una herramienta.',
        ],
        links: { 'información de privacidad de Cloudflare': 'https://www.cloudflare.com/privacypolicy/' },
      },
      {
        heading: 'Publicidad, cookies y tecnologías similares',
        blocks: [
          'El idioma, el tema, el consentimiento, el historial local y el ID aleatorio pueden guardarse en tu navegador. Cloudflare Web Analytics no usa cookies; GA4 solo se carga con Aceptar todas.',
          'Cuando AdSense está configurado, Google y sus socios pueden usar cookies o tecnologías similares para servir y personalizar anuncios. El banner actual permite anuncios salvo que elijas Solo necesarias. Esa opción también impide que GA4 se cargue. Puedes gestionar almacenamiento y cookies en tu navegador.',
          'También puedes gestionar anuncios personalizados en {Configuración de anuncios de Google}, leer la {política de Sitios de Socios de Google} y visitar {aboutads.info}.',
        ],
        links: {
          'Configuración de anuncios de Google': 'https://www.google.com/settings/ads',
          'política de Sitios de Socios de Google': 'https://policies.google.com/technologies/partner-sites',
          'aboutads.info': 'https://www.aboutads.info',
        },
      },
      {
        heading: 'Conservación de datos',
        blocks: [
          'Las filas del contador se conservan hasta 180 días y después se eliminan mediante limpieza periódica. El contador agregado histórico se conserva por separado de las visitas individuales. Los borradores y el historial local dependen de ti.',
          'Cloudflare y Google conservan registros y analítica según sus propias configuraciones y políticas. No inventamos un plazo único para servicios independientes.',
        ],
      },
      {
        heading: 'Tus decisiones y solicitudes',
        blocks: [
          'Puedes borrar los datos del sitio y el historial, desactivar cookies, elegir Solo necesarias, usar navegación privada o un bloqueador y evitar valores sensibles en enlaces. Los datos guardados solo en tu dispositivo debes eliminarlos allí; no podemos borrar tu navegador a distancia.',
          'Para preguntar por los datos del sitio o solicitar acceso o eliminación de datos de servidor razonablemente asociables a ti, usa nuestra {página de contacto}. Puede que los hashes diarios y los conteos agregados no se puedan vincular a una persona.',
        ],
        links: { 'página de contacto': '/contact/' },
      },
      {
        heading: 'Responsable, proveedores y tratamiento internacional',
        blocks: [
          'ToolHub lo mantiene un desarrollador independiente, disponible en la {página de contacto}. Cloudflare y Google pueden procesar datos en los países donde operan; se aplican sus políticas y condiciones de transferencia. Consulta al responsable para preguntas sobre el operador o la jurisdicción.',
        ],
        links: { 'página de contacto': '/contact/' },
      },
      {
        heading: 'Privacidad infantil y cambios',
        blocks: [
          'El sitio no está dirigido a menores de 13 años y no recopilamos deliberadamente sus datos personales. Contáctanos si crees que un menor facilitó datos identificables en registros del servidor.',
          'Podemos actualizar esta política cuando cambien la implementación o los proveedores. La fecha superior se actualizará con los cambios sustanciales.',
        ],
      },
    ],
  },
  de: {
    title: 'Datenschutzerklärung',
    description: 'Zuletzt aktualisiert: 29. Oktober 2026',
    sections: [
      {
        heading: 'Die Kurzfassung',
        blocks: [
          'ToolHub ist ein unabhängiges Projekt seines Betreuers. Diese Erklärung trennt die Verarbeitung innerhalb eines Werkzeugs von den Daten, die zum Betrieb und zur Messung der Website nötig sind.',
          {
            list: [
              'Berechnungen und Dateiumwandlungen laufen in deinem Browser; wir senden Werkzeugeingaben nicht an eine serverseitige Rechen-API.',
              'Einige Werkzeuge bieten teilbare URLs. Werte in der URL können für Hosting, Analysen, deinen Verlauf und Empfänger des Links sichtbar sein.',
              'Es ist kein Konto nötig. Werbung und Analysen sind von der Werkzeugverarbeitung getrennt.',
            ],
          },
        ],
      },
      {
        heading: 'Eingaben, lokaler Speicher und teilbare URLs',
        blocks: [
          'Text, Zahlen und Dateien werden lokal durch JavaScript in deinem Browser verarbeitet. ToolHub betreibt keinen Remote-Dienst, der diese Berechnungen für dich ausführt.',
          'Einige Werkzeuge speichern Entwürfe, Verlauf, Einstellungen oder zuletzt genutzte Elemente im Browser. Diese Daten bleiben auf deinem Gerät, bis du sie oder die Website-Daten löschst.',
          'Werkzeuge mit Share Link können Werte oder Einstellungen in die URL schreiben, etwa ?value=5. Eine URL ist kein privater Speicher: Sie kann im Verlauf, in Hosting- und CDN-Logs, in Analysen vollständiger URLs und in Referrer-Daten erscheinen. Speichere keine Passwörter oder sensiblen Informationen in einer teilbaren URL.',
        ],
      },
      {
        heading: 'Website-Daten, die wir und Anbieter verarbeiten',
        blocks: [
          'Diese Website-Daten sind von der lokalen Werkzeugverarbeitung getrennt:',
          {
            list: [
              'Cloudflare Pages und CDN liefern die Seite aus und können Standard-Request-Logs mit IP-Adresse, Zeitstempel, User-Agent und angeforderter URL einschließlich Query-String verarbeiten.',
              'Cloudflare Web Analytics liefert bei Konfiguration aggregierte Seiten-, Referrer-, Geräte- und Ländermetriken. Cloudflare beschreibt den Beacon als cookie-frei und ohne Cross-Site-Tracking. Siehe {Cloudflare-Datenschutzinformationen}.',
              'Google Analytics 4 wird bei Konfiguration erst nach Alle akzeptieren geladen. Es kann Cookies und Seiten- oder Nutzungsdaten verarbeiten; die erste URL kann Query-Parameter enthalten.',
              'Der ToolHub-Besucherzähler sendet den Seitenpfad (ohne Query-String), einen Zeitstempel und eine täglich wechselnde Kennung an unsere Cloudflare-D1-Datenbank. Sie ist ein gekürzter SHA-256-Hash aus einer Zufalls-ID im Browser und dem UTC-Datum. Sie dient der täglichen Deduplizierung, nicht der Identifikation über Tage; sie ist pseudonym, keine direkte Identität.',
            ],
          },
          'Wir nutzen diese Daten zur Auslieferung und Absicherung der Seite, zur aggregierten Nutzungsanalyse und zur Verbesserung der Werkzeuge. Für die Nutzung fragen wir weder Namen noch E-Mail ab.',
        ],
        links: { 'Cloudflare-Datenschutzinformationen': 'https://www.cloudflare.com/privacypolicy/' },
      },
      {
        heading: 'Werbung, Cookies und ähnliche Technologien',
        blocks: [
          'Sprache, Theme, Einwilligung, lokaler Verlauf und die Zufalls-ID können im Browser gespeichert werden. Cloudflare Web Analytics arbeitet ohne Cookies; GA4 wird nur nach Alle akzeptieren geladen.',
          'Bei konfiguriertem AdSense können Google und Partner Cookies oder ähnliche Technologien zur Auslieferung und Personalisierung von Werbung nutzen. Das aktuelle Banner erlaubt Werbung, sofern du nicht Nur notwendige wählst. Diese Auswahl verhindert auch GA4. Speicher und Cookies kannst du im Browser verwalten.',
          'Personalisierte Werbung kannst du außerdem in den {Google-Anzeigeneinstellungen} verwalten, die {Richtlinie zu Partner-Sites von Google} lesen und {aboutads.info} besuchen.',
        ],
        links: {
          'Google-Anzeigeneinstellungen': 'https://www.google.com/settings/ads',
          'Richtlinie zu Partner-Sites von Google': 'https://policies.google.com/technologies/partner-sites',
          'aboutads.info': 'https://www.aboutads.info',
        },
      },
      {
        heading: 'Datenaufbewahrung',
        blocks: [
          'Besuchsdetails des Zählers werden bis zu 180 Tage aufbewahrt und anschließend rollierend gelöscht. Der separate aggregierte Gesamtzähler wird ohne die einzelnen Besuchszeilen gespeichert. Lokale Entwürfe und Verlauf stehen unter deiner Kontrolle.',
          'Cloudflare und Google bewahren Logs und Analysen nach ihren eigenen Einstellungen und Richtlinien auf. Wir erfinden dafür keine gemeinsame Aufbewahrungsfrist.',
        ],
      },
      {
        heading: 'Deine Wahlmöglichkeiten und Anfragen',
        blocks: [
          'Du kannst Website-Daten und Verlauf löschen, Cookies deaktivieren, Nur notwendige wählen, privates Surfen oder einen Blocker nutzen und sensible Werte aus teilbaren URLs heraushalten. Daten, die nur auf deinem Gerät liegen, musst du dort löschen; wir können deinen Browser nicht aus der Ferne leeren.',
          'Für Fragen oder für Zugriff auf beziehungsweise Löschung von serverseitigen Daten, die dir vernünftigerweise zugeordnet werden können, nutze unsere {Kontaktseite}. Tägliche Hashes und aggregierte Zähler lassen sich möglicherweise keiner Person zuordnen.',
        ],
        links: { Kontaktseite: '/contact/' },
      },
      {
        heading: 'Betreiber, Anbieter und internationale Verarbeitung',
        blocks: [
          'ToolHub wird von einem unabhängigen Entwickler gepflegt, der über die {Kontaktseite} erreichbar ist. Cloudflare und Google können Daten in ihren Betriebsländern verarbeiten; deren Datenschutz- und Transferbedingungen gelten. Fragen zum Betreiber oder zur Gerichtsbarkeit kannst du an den Betreuer richten.',
        ],
        links: { Kontaktseite: '/contact/' },
      },
      {
        heading: 'Kinder und Änderungen dieser Erklärung',
        blocks: [
          'Die Seite richtet sich nicht an Kinder unter 13 Jahren, und wir erheben nicht wissentlich personenbezogene Daten von Kindern. Kontaktiere uns, wenn ein Kind identifizierbare Daten in Serverprotokollen hinterlassen haben könnte.',
          'Wir können diese Erklärung bei Änderungen der Implementierung oder Anbieter aktualisieren. Bei wesentlichen Änderungen wird das Datum oben angepasst.',
        ],
      },
    ],
  },
}
