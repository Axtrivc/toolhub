'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Nginx Config Generator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原 ToolContent 渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is This Tool?</h2>
    <p>
      Setting up <strong>nginx as a reverse proxy</strong> — in front of a Node.js app, a Python API, or any local
      service — means remembering a dozen directives: which headers to forward, how to terminate SSL, how
      WebSocket upgrades work. This generator builds a complete, commented <code>sites-available</code> config
      from a simple form, live as you type. Everything runs in your browser, and the result downloads as a{' '}
      <code>.conf</code> file ready for your server.
    </p>

    <div>
      <h2>What the generated config includes</h2>
      <p>
        Every config forwards the headers your app needs to see real clients: <code>Host</code>,{' '}
        <code>X-Real-IP</code>, <code>X-Forwarded-For</code>, and <code>X-Forwarded-Proto</code>, plus{' '}
        <code>proxy_http_version 1.1</code>. Enable <strong>SSL</strong> to get a <code>443 ssl http2</code>{' '}
        listener with Let&apos;s Encrypt certificate paths and an HTTP→HTTPS redirect block; enable{' '}
        <strong>WebSocket support</strong> for the <code>Upgrade</code>/<code>Connection</code> headers and the
        required <code>map</code> block. Optional <strong>gzip</strong> and <strong>static asset caching</strong>{' '}
        (<code>expires 30d</code>) round out a production-ready setup.
      </p>
    </div>

    <div>
      <h2>How to install it</h2>
      <p>
        Save the file to <code>/etc/nginx/sites-available/your-domain.conf</code>, symlink it with{' '}
        <code>sudo ln -s /etc/nginx/sites-available/your-domain.conf /etc/nginx/sites-enabled/</code>, then run{' '}
        <code>sudo nginx -t</code> to validate and <code>sudo systemctl reload nginx</code> to apply. If you use
        SSL, obtain the certificate first with <code>sudo certbot --nginx -d your-domain.com</code>, or start
        with SSL off and add it later.
      </p>
    </div>

    <div>
      <h2>Common pitfalls to check</h2>
      <p>
        Three mistakes cause most reverse-proxy bugs. First, a missing or wrong <code>Host</code> header breaks
        apps that route by domain — the generated config always sets it. Second, WebSocket apps hang silently
        without the <code>Upgrade</code> headers and the <code>map $http_upgrade $connection_upgrade</code>{' '}
        block. Third, uploads fail with <em>413 Request Entity Too Large</em> until{' '}
        <code>client_max_body_size</code> is raised — pick the value that matches your largest expected upload.
        Also make sure your app binds to the proxy target port (<code>127.0.0.1</code> is safest) and that the
        firewall allows ports 80/443.
      </p>
    </div>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>这是什么工具?</h2>
    <p>
      把 <strong>nginx 配置为反向代理</strong> —— 放在 Node.js 应用、Python API 或任意本地服务前面 —— 意味着要记住十几个指令:转发哪些头、如何终结 SSL、WebSocket 升级怎么工作。本生成器根据一个简单的表单,边输入边生成一份完整且带注释的 <code>sites-available</code> 配置。
      一切都在浏览器中完成,结果可作为 <code>.conf</code> 文件下载,直接放到你的服务器上使用。
    </p>

    <div>
      <h2>生成的配置包含哪些内容</h2>
      <p>
        每份配置都会转发你的应用查看真实客户端所需的头:<code>Host</code>、<code>X-Real-IP</code>、<code>X-Forwarded-For</code>、<code>X-Forwarded-Proto</code>,以及 <code>proxy_http_version 1.1</code>。
        开启 <strong>SSL</strong> 可得到一个 <code>443 ssl http2</code> 监听器,带 Let's Encrypt 证书路径和 HTTP→HTTPS 跳转块;开启 <strong>WebSocket 支持</strong> 可加上 <code>Upgrade</code>/<code>Connection</code> 头以及必需的 <code>map</code> 块。可选的 <strong>gzip</strong> 与 <strong>静态资源缓存</strong>(<code>expires 30d</code>)让整套配置达到生产可用。
      </p>
    </div>

    <div>
      <h2>如何安装</h2>
      <p>
        把文件保存到 <code>/etc/nginx/sites-available/your-domain.conf</code>,用 <code>sudo ln -s /etc/nginx/sites-available/your-domain.conf /etc/nginx/sites-enabled/</code> 创建软链,然后运行 <code>sudo nginx -t</code> 验证,再用 <code>sudo systemctl reload nginx</code> 应用。
        如果使用 SSL,请先用 <code>sudo certbot --nginx -d your-domain.com</code> 申请证书;也可以先关掉 SSL,以后再补。
      </p>
    </div>

    <div>
      <h2>需要检查的常见坑</h2>
      <p>
        大多数反向代理 bug 都源自三类错误。第一,缺失或错误的 <code>Host</code> 头会让按域名路由的应用崩溃 —— 生成的配置始终会设置它。第二,没有 <code>Upgrade</code> 头和 <code>map $http_upgrade $connection_upgrade</code> 块,WebSocket 应用会悄无声息地卡住。第三,上传会以 <em>413 Request Entity Too Large</em> 失败,直到你调大 <code>client_max_body_size</code> —— 选一个匹配你最大预期上传的值。
        另外,请确保应用监听在代理目标端口上(<code>127.0.0.1</code> 最安全),并让防火墙放行 80/443 端口。
      </p>
    </div>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es esta herramienta?</h2>
    <p>
      Configurar <strong>nginx como reverse proxy</strong> — por delante de una app Node.js, una API Python o cualquier servicio local — significa recordar una docena de directivas: qué cabeceras reenviar, cómo terminar SSL, cómo funcionan las actualizaciones WebSocket. Este generador construye una configuración <code>sites-available</code> completa y comentada a partir de un formulario sencillo, en vivo mientras escribes.
      Todo ocurre en tu navegador, y el resultado se descarga como un archivo <code>.conf</code> listo para tu servidor.
    </p>

    <div>
      <h2>Qué incluye la configuración generada</h2>
      <p>
        Toda configuración reenvía las cabeceras que tu app necesita para ver a los clientes reales: <code>Host</code>, <code>X-Real-IP</code>, <code>X-Forwarded-For</code> y <code>X-Forwarded-Proto</code>, además de <code>proxy_http_version 1.1</code>.
        Activa <strong>SSL</strong> para obtener un listener <code>443 ssl http2</code> con rutas de certificado de Let's Encrypt y un bloque de redirección HTTP→HTTPS; activa el <strong>soporte WebSocket</strong> para las cabeceras <code>Upgrade</code>/<code>Connection</code> y el bloque <code>map</code> requerido. El <strong>gzip</strong> opcional y la <strong>caché de activos estáticos</strong> (<code>expires 30d</code>) redondean una configuración lista para producción.
      </p>
    </div>

    <div>
      <h2>Cómo instalarla</h2>
      <p>
        Guarda el archivo en <code>/etc/nginx/sites-available/your-domain.conf</code>, crea un enlace simbólico con <code>sudo ln -s /etc/nginx/sites-available/your-domain.conf /etc/nginx/sites-enabled/</code>, luego ejecuta <code>sudo nginx -t</code> para validar y <code>sudo systemctl reload nginx</code> para aplicar.
        Si usas SSL, obtén primero el certificado con <code>sudo certbot --nginx -d your-domain.com</code>, o empieza con SSL desactivado y añádelo más tarde.
      </p>
    </div>

    <div>
      <h2>Errores comunes que conviene revisar</h2>
      <p>
        Tres errores causan la mayoría de los bugs de reverse proxy. Primero, una cabecera <code>Host</code> ausente o incorrecta rompe las apps que enrutan por dominio — la configuración generada siempre la establece. Segundo, las apps WebSocket se cuelgan en silencio sin las cabeceras <code>Upgrade</code> y el bloque <code>map $http_upgrade $connection_upgrade</code>. Tercero, las subidas fallan con <em>413 Request Entity Too Large</em> hasta que se aumenta <code>client_max_body_size</code> — elige el valor que coincida con tu mayor subida esperada.
        Además, asegúrate de que tu app escuche en el puerto destino del proxy (<code>127.0.0.1</code> es lo más seguro) y de que el firewall permita los puertos 80/443.
      </p>
    </div>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist dieses Werkzeug?</h2>
    <p>
      <strong>nginx als Reverse Proxy</strong> einzurichten — vor einer Node.js-App, einer Python-API oder einem beliebigen lokalen Service — bedeutet, sich an ein Dutzend Direktiven zu erinnern: welche Header weitergeleitet werden, wie SSL terminiert wird, wie WebSocket-Upgrades funktionieren. Dieser Generator erstellt aus einem einfachen Formular eine vollständige, kommentierte <code>sites-available</code>-Konfiguration, live während du tippst.
      Alles läuft im Browser, und das Ergebnis lädt als <code>.conf</code>-Datei herunter, bereit für deinen Server.
    </p>

    <div>
      <h2>Was die generierte Konfiguration enthält</h2>
      <p>
        Jede Konfiguration leitet die Header weiter, die deine App sehen muss, um echte Clients zu erkennen: <code>Host</code>, <code>X-Real-IP</code>, <code>X-Forwarded-For</code> und <code>X-Forwarded-Proto</code>, plus <code>proxy_http_version 1.1</code>.
        Aktiviere <strong>SSL</strong>, um einen <code>443 ssl http2</code>-Listener mit Let's-Encrypt-Zertifikatspfaden und einen HTTP→HTTPS-Redirect-Block zu erhalten; aktiviere die <strong>WebSocket-Unterstützung</strong> für die <code>Upgrade</code>/<code>Connection</code>-Header und den erforderlichen <code>map</code>-Block. Optionales <strong>gzip</strong> und <strong>statisches Asset-Caching</strong> (<code>expires 30d</code>) runden ein produktionsreifes Setup ab.
      </p>
    </div>

    <div>
      <h2>Wie man sie installiert</h2>
      <p>
        Speichere die Datei unter <code>/etc/nginx/sites-available/your-domain.conf</code>, verknüpfe sie mit <code>sudo ln -s /etc/nginx/sites-available/your-domain.conf /etc/nginx/sites-enabled/</code>, führe dann <code>sudo nginx -t</code> zur Validierung und <code>sudo systemctl reload nginx</code> zum Anwenden aus.
        Wenn du SSL nutzt, hole das Zertifikat zuerst mit <code>sudo certbot --nginx -d your-domain.com</code>, oder starte ohne SSL und füge es später hinzu.
      </p>
    </div>

    <div>
      <h2>Häufige Stolperfallen, die du prüfen solltest</h2>
      <p>
        Drei Fehler verursachen die meisten Reverse-Proxy-Bugs. Erstens: Ein fehlender oder falscher <code>Host</code>-Header bringt Apps durcheinander, die nach Domain routen — die generierte Konfiguration setzt ihn immer. Zweitens: WebSocket-Apps hängen sich lautlos auf ohne die <code>Upgrade</code>-Header und den Block <code>map $http_upgrade $connection_upgrade</code>. Drittens: Uploads scheitern mit <em>413 Request Entity Too Large</em>, bis <code>client_max_body_size</code> erhöht wird — wähle den Wert, der zu deinem größten erwarteten Upload passt.
        Stelle außerdem sicher, dass deine App an den Proxy-Zielport bindet (<code>127.0.0.1</code> ist am sichersten) und dass die Firewall die Ports 80/443 zulässt.
      </p>
    </div>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function NginxConfigGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
