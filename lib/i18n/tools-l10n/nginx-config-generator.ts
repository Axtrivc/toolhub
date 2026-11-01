/**
 * nginx-config-generator 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const nginxConfigGeneratorL10n: ToolL10n = {

  es: {
    ui: {
      'copy': 'Copiar',
      'enableSsl': 'Activar SSL (HTTPS + redirección HTTP)',
      'errDomainInvalid': 'Introduce un dominio válido (p. ej. example.com o *.example.com).',
      'errTargetInvalid': 'Introduce una URL http:// o https:// válida (p. ej. http://127.0.0.1:3000).',
      'generatedConfig': 'Configuración generada',
      'gzipCompression': 'Compresión gzip',
      'listenPortLabel': 'Puerto de escucha',
      'noteClientSide': '🔒 Generado 100% en el cliente — no se envía nada a ningún sitio.',
      'noteEnd': '. ',
      'notePlace': '📁 Coloca el archivo en ',
      'noteSymlink': ' y enlázalo en ',
      'noteThenRun': ', luego ejecuta ',
      'proxyTargetLabel': 'Destino del proxy',
      'serverNameLabel': 'Nombre del servidor (dominio)',
      'staticAssetsCaching': 'Caché de recursos estáticos (30 días)',
      'warnTargetPath': 'El destino del proxy incluye una ruta ({path}): nginx no acepta una URI en proxy_pass dentro de una location con regex, así que nginx -t fallará con "proxy_pass cannot have URI part". Quita la ruta (p. ej. http://host:3000) o usa un bloque upstream con rewrite.',
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
        a: 'Te da un bloque server inicial correcto y listo para producción, pero los entornos de alto tráfico siguen necesitando ajustes (número de workers, buffering, límites de tasa) adaptados a tu hardware y tu tráfico. Considera la salida una base sólida para editar, no una configuración final optimizada.',
      },
      {
        q: '¿La salida incluye SSL / HTTPS?',
        a: 'Al activar SSL genera las rutas de certificado, el bloque server HTTPS, la redirección de HTTP a HTTPS y los ajustes modernos de cifrado y protocolos. Antes de desplegar debes apuntar las rutas a tus certificados reales (p. ej. de Let’s Encrypt).',
      },
      {
        q: '¿Puede configurar un proxy inverso para WebSocket?',
        a: 'Sí. Al habilitar la opción WebSocket añade las cabeceras Upgrade y Connection y los ajustes de tiempos de espera del proxy que necesitan las conexiones WebSocket de larga duración, de modo que las apps en tiempo real funcionan tras el proxy sin edición adicional.',
      },
      {
        q: '¿Cómo despliego la configuración generada?',
        a: 'Guarda el bloque server en /etc/nginx/sites-available/<dominio>, enlázalo en sites-enabled/ para activarlo, valida con nginx -t y aplica con systemctl reload nginx: el reload no corta las conexiones activas, el restart sí.',
      },
    ],
  },
  de: {
    ui: {
      'copy': 'Kopieren',
      'enableSsl': 'SSL aktivieren (HTTPS + HTTP-Weiterleitung)',
      'errDomainInvalid': 'Gib eine gültige Domain ein (z. B. example.com oder *.example.com).',
      'errTargetInvalid': 'Gib eine gültige http://- oder https://-URL ein (z. B. http://127.0.0.1:3000).',
      'generatedConfig': 'Generierte Konfiguration',
      'gzipCompression': 'Gzip-Kompression',
      'listenPortLabel': 'Listen-Port',
      'noteClientSide': '🔒 Zu 100% clientseitig erzeugt — nichts wird irgendwohin gesendet.',
      'noteEnd': '. ',
      'notePlace': '📁 Lege die Datei in ',
      'noteSymlink': ' und verlinke sie in ',
      'noteThenRun': ', führe dann Folgendes aus: ',
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
        a: 'Es liefert einen korrekten, produktionsreifen server-Block als Startpunkt, aber High-Traffic-Setups brauchen weiterhin Tuning (Worker, Buffering, Rate-Limits) passend zu Hardware und Traffic. Betrachte die Ausgabe als solide Basis zum Bearbeiten, nicht als finale optimierte Konfiguration.',
      },
      {
        q: 'Enthält die Ausgabe SSL / HTTPS?',
        a: 'Wenn du SSL aktivierst, werden Zertifikatspfade, der HTTPS-server-Block, die HTTP-auf-HTTPS-Weiterleitung und moderne Cipher-/Protokolleinstellungen erzeugt. Vor dem Deploy musst du die Pfade auf deine echten Zertifikate (z. B. von Let’s Encrypt) umstellen.',
      },
      {
        q: 'Kann es einen WebSocket-Reverse-Proxy konfigurieren?',
        a: 'Ja. Die WebSocket-Option fügt die Upgrade- und Connection-Header sowie die Proxy-Timeouts hinzu, die langlebige WebSocket-Verbindungen brauchen, sodass Echtzeit-Apps hinter dem Proxy ohne weitere Bearbeitung laufen.',
      },
      {
        q: 'Wie bringe ich die generierte Konfiguration zum Laufen?',
        a: 'Speichere den server-Block unter /etc/nginx/sites-available/<domain>, verlinke ihn nach sites-enabled/, prüfe mit nginx -t und lade mit systemctl reload nginx neu — ein Reload bricht bestehende Verbindungen nicht ab, ein Restart schon.',
      },
    ],
  },
}
