/**
 * open-graph-generator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = OpenGraphGeneratorClient,自定义 client)
 */
import type { ToolL10n } from '../tool-l10n'

export const openGraphGeneratorL10n: ToolL10n = {
  zh: {
    useCases: [
      '生成网页的 Open Graph 标签',
      '预览链接在社交平台的分享卡片',
      '同时输出 Twitter Card 标签',
      '排查已部署却显示错误的链接预览',
    ],
    faqs: [
      { q: 'Open Graph 和 Twitter Cards 有什么区别？', a: 'Open Graph(og:)标签会被 Facebook、LinkedIn、Slack、Discord 和大多数平台读取。Twitter Cards(twitter:)标签是 X/Twitter 专用的,但在缺失时会回退到 Open Graph。两者都生成,能以最少的重复确保所有平台都显示正确的预览。' },
      { q: '图片应该用多大尺寸？', a: 'og:image 和 twitter:image 使用 1.91:1 比例、1200×630px,控制在 1 MB 以内;非常精细的图片至少要 8 MB。1080×1080 的方形图在某些平台可用,但 1200×630 是链接预览最稳妥的通用选择。' },
      { q: '部署后预览为什么还是没更新？', a: '平台会大量缓存分享预览。标签上线后,用 Facebook Sharing Debugger、Twitter Card Validator 或 LinkedIn Post Inspector 强制重新抓取。标签必须放在服务器返回的原始 HTML 中,而不是由 JavaScript 注入,否则不执行脚本爬虫看不到。' },
    ],
  },
  es: {
    useCases: [
      'generar etiquetas Open Graph para una página',
      'previsualizar la tarjeta de enlace en redes sociales',
      'generar también las etiquetas de Twitter Card',
      'depurar vistas previas de enlace que se muestran mal tras el despliegue',
    ],
    faqs: [
      { q: '¿Cuál es la diferencia entre Open Graph y Twitter Cards?', a: 'Las etiquetas Open Graph (og:) las leen Facebook, LinkedIn, Slack, Discord y la mayoría de plataformas. Las etiquetas Twitter Cards (twitter:) son específicas de X/Twitter, pero recurren a Open Graph cuando faltan. Generar ambas garantiza la mejor vista previa en todas partes con mínima duplicación.' },
      { q: '¿Qué tamaño de imagen debo usar?', a: 'Para og:image y twitter:image usa una proporción de 1,91:1 a 1200×630px, por debajo de 1 MB y al menos 8 MB para imágenes muy detalladas. Las imágenes cuadradas de 1080×1080 funcionan en algunas plataformas, pero 1200×630 es la opción universal más segura para vistas previas de enlace.' },
      { q: '¿Por qué mi vista previa no se actualiza tras el despliegue?', a: 'Las plataformas almacenan en caché las vistas previas de forma agresiva. Usa Facebook Sharing Debugger, Twitter Card Validator o LinkedIn Post Inspector para forzar un nuevo rastreo una vez que tus etiquetas estén activas. Las etiquetas deben estar en el HTML sin procesar del servidor, no inyectadas por JavaScript, para los rastreadores que no ejecutan scripts.' },
    ],
  },
  de: {
    useCases: [
      'Open-Graph-Tags für eine Seite erzeugen',
      'die Link-Vorschaukarte in sozialen Netzwerken prüfen',
      'gleichzeitig Twitter-Card-Tags ausgeben',
      'falsche Link-Vorschauen nach dem Deploy fehlerbeheben',
    ],
    faqs: [
      { q: 'Was ist der Unterschied zwischen Open Graph und Twitter Cards?', a: 'Open-Graph-Tags (og:) werden von Facebook, LinkedIn, Slack, Discord und den meisten Plattformen gelesen. Twitter-Card-Tags (twitter:) sind spezifisch für X/Twitter, fallen aber bei Fehlen auf Open Graph zurück. Wenn du beide generierst, erhältst du überall die beste Vorschau mit minimaler Duplizierung.' },
      { q: 'Welche Bildgröße soll ich verwenden?', a: 'Verwende für og:image und twitter:image ein Verhältnis von 1,91:1 bei 1200×630px, unter 1 MB und mindestens 8 MB für sehr detailreiche Bilder. Quadratische 1080×1080-Bilder funktionieren auf einigen Plattformen, aber 1200×630 ist die sicherste universelle Wahl für Link-Vorschauen.' },
      { q: 'Warum aktualisiert sich meine Vorschau nach dem Deploy nicht?', a: 'Plattformen cachen Link-Vorschauen aggressiv. Verwende Facebook Sharing Debugger, Twitter Card Validator oder LinkedIn Post Inspector, um nach Veröffentlichung der Tags ein erneutes Abrufen zu erzwingen. Die Tags müssen im rohen Server-HTML stehen, nicht von JavaScript injiziert werden, damit Crawler, die keine Skripte ausführen, sie sehen.' },
    ],
  },
}
