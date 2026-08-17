/**
 * nginx-config-generator 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const nginxConfigGeneratorL10n: ToolL10n = {
  zh: {
    ui: {
      'copy': '复制',
      'enableSsl': '启用 SSL(HTTPS + HTTP 跳转)',
      'errDomainInvalid': '请输入有效域名(如 example.com 或 *.example.com)。',
      'errTargetInvalid': '请输入有效的 http:// 或 https:// 地址(如 http://127.0.0.1:3000)。',
      'generatedConfig': '生成的配置',
      'gzipCompression': 'Gzip 压缩',
      'listenPortLabel': '监听端口',
      'noteClientSide': '🔒 100% 在客户端生成——不发送任何东西到任何地方。',
      'notePlace': '📁 把文件放在',
      'noteSymlink': ',再软链到',
      'noteThenRun': ',然后运行',
      'proxyTargetLabel': '代理目标',
      'serverNameLabel': '服务器名(域名)',
      'staticAssetsCaching': '静态资源缓存(30 天)',
      'warnTargetPath': '代理目标含路径({path})——nginx 不接受正则 location 内 proxy_pass 带 URI 部分,nginx -t 会报 "proxy_pass cannot have URI part" 直接失败。建议去掉路径(如 http://host:3000),或改用 upstream + rewrite 方式。',
      'websocketSupport': 'WebSocket 支持',
    },
    useCases: [
      'nginx 反向代理配置生成器',
      'Node.js 应用的 nginx 配置',
      'nginx WebSocket 代理配置',
      'Let’s Encrypt nginx SSL 配置模板',
    ],
    faqs: [
      {
        q: '它能替代手动调优 nginx 吗?',
        a: '它给你一个正确、可直接上线的 server 块起点,但高流量场景仍需针对硬件和流量做调优(worker 数、缓冲、限流)。请把输出当作待编辑的可靠基线,而非最终优化好的配置。',
      },
      {
        q: '输出里包含 SSL / HTTPS 吗?',
        a: '开启 SSL 后,它会生成证书路径、HTTPS server 块、HTTP 到 HTTPS 的跳转,以及现代密码套件和协议设置。部署前你仍需把路径指向真实证书(例如 Let’s Encrypt 的)。',
      },
      {
        q: '它能配置 WebSocket 反向代理吗?',
        a: '能。开启 WebSocket 选项后会加上 Upgrade 和 Connection 头,以及 WebSocket 长连接所需的代理超时设置,这样实时应用在代理后无需额外编辑即可正常工作。',
      },
    ],
  },
  es: {
    ui: {
      'copy': 'Copiar',
      'enableSsl': 'Activar SSL (HTTPS + redirección HTTP)',
      'errDomainInvalid': 'Introduce un dominio válido (p. ej. example.com o *.example.com).',
      'errTargetInvalid': 'Introduce una URL http:// o https:// válida (p. ej. http://127.0.0.1:3000).',
      'generatedConfig': 'Configuración generada',
      'gzipCompression': 'Compresión Gzip',
      'listenPortLabel': 'Puerto de escucha',
      'noteClientSide': '🔒 Generado 100% en el cliente — no se envía nada a ningún sitio.',
      'notePlace': '📁 Coloca el archivo en',
      'noteSymlink': 'y enlázalo en',
      'noteThenRun': ', luego ejecuta',
      'proxyTargetLabel': 'Destino del proxy',
      'serverNameLabel': 'Nombre del servidor (dominio)',
      'staticAssetsCaching': 'Caché de recursos estáticos (30 días)',
      'warnTargetPath': 'El destino del proxy incluye una ruta ({path}): nginx no acepta una parte URI en proxy_pass dentro de una location con regex, así que nginx -t fallará con "proxy_pass cannot have URI part". Quita la ruta (p. ej. http://host:3000) o usa un bloque upstream con rewrite.',
      'websocketSupport': 'Soporte WebSocket',
    },
    useCases: [
      'generador de configuración de proxy inverso nginx',
      'configuración nginx para app Node.js',
      'configuración de proxy WebSocket nginx',
      'plantilla SSL nginx con Let’s Encrypt',
    ],
    faqs: [
      {
        q: '¿Reemplaza el ajuste manual de nginx?',
        a: 'Te da un bloque server inicial correcto y listo para producción, pero los entornos de alto tráfico siguen necesitando ajustes (workers, buffering, límites) a medida de tu hardware y tráfico. Considera la salida una base sólida para editar, no una configuración final optimizada.',
      },
      {
        q: '¿La salida incluye SSL / HTTPS?',
        a: 'Al activar SSL genera las rutas de certificado, el bloque server HTTPS, la redirección de HTTP a HTTPS y los ajustes modernos de cifrado y protocolos. Antes de desplegar debes apuntar las rutas a tus certificados reales (p. ej. de Let’s Encrypt).',
      },
      {
        q: '¿Puede configurar un proxy inverso para WebSocket?',
        a: 'Sí. Al habilitar la opción WebSocket añade las cabeceras Upgrade y Connection y el ajuste de tiempos de espera que necesitan las conexiones persistentes de WebSocket, así las apps en tiempo real funcionan tras el proxy sin edición extra.',
      },
    ],
  },
  de: {
    ui: {
      'copy': 'Kopieren',
      'enableSsl': 'SSL aktivieren (HTTPS + HTTP-Weiterleitung)',
      'errDomainInvalid': 'Gib eine gültige Domain ein (z. B. example.com oder *.example.com).',
      'errTargetInvalid': 'Gib eine gültige http://- oder https://-URL ein (z. B. http://127.0.0.1:3000).',
      'generatedConfig': 'Erzeugte Konfiguration',
      'gzipCompression': 'Gzip-Kompression',
      'listenPortLabel': 'Listen-Port',
      'noteClientSide': '🔒 Zu 100% clientseitig erzeugt — nichts wird irgendwohin gesendet.',
      'notePlace': '📁 Lege die Datei in',
      'noteSymlink': 'und verlinke sie in',
      'noteThenRun': ', dann führe',
      'proxyTargetLabel': 'Proxy-Ziel',
      'serverNameLabel': 'Servername (Domain)',
      'staticAssetsCaching': 'Statische Assets cachen (30 Tage)',
      'warnTargetPath': 'Das Proxy-Ziel enthält einen Pfad ({path}) — nginx akzeptiert in einer Regex-location keinen URI-Teil im proxy_pass, daher schlägt nginx -t mit "proxy_pass cannot have URI part" fehl. Entferne den Pfad (z. B. http://host:3000) oder nutze einen upstream-Block mit rewrite.',
      'websocketSupport': 'WebSocket-Unterstützung',
    },
    useCases: [
      'nginx Reverse-Proxy-Konfigurationsgenerator',
      'nginx-Konfiguration für Node.js-App',
      'nginx WebSocket-Proxy-Konfiguration',
      'Let’s-Encrypt-nginx-SSL-Konfigurationsvorlage',
    ],
    faqs: [
      {
        q: 'Ersetzt das das manuelle nginx-Tuning?',
        a: 'Es liefert einen korrekten, produktions tauglichen Start-server-Block, aber High-Traffic-Setups brauchen weiterhin Tuning (Worker, Buffering, Rate-Limits) passend zu Hardware und Traffic. Betrachte die Ausgabe als solide Basis zum Bearbeiten, nicht als finale optimierte Konfiguration.',
      },
      {
        q: 'Enthält die Ausgabe SSL / HTTPS?',
        a: 'Wenn du SSL aktivierst, werden Zertifikatspfade, der HTTPS-server-Block, die HTTP-auf-HTTPS-Weiterleitung und moderne Cipher-/Protokolleinstellungen erzeugt. Vor dem Deploy musst du die Pfade auf deine echten Zertifikate (z. B. von Let’s Encrypt) zeigen lassen.',
      },
      {
        q: 'Kann es einen WebSocket-Reverse-Proxy konfigurieren?',
        a: 'Ja. Die WebSocket-Option fügt die Upgrade- und Connection-Header sowie die Proxy-Timeouts hinzu, die langlebige WebSocket-Verbindungen brauchen, sodass Echtzeit-Apps hinter dem Proxy ohne weitere Bearbeitung laufen.',
      },
    ],
  },
}
