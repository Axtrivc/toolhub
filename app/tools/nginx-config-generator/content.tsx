import { ToolContent } from '@/lib/content-templates'

export function NginxConfigGeneratorContent() {
  return (
    <ToolContent
      intro={
        <p>
          Setting up <strong>nginx as a reverse proxy</strong> — in front of a Node.js app, a Python API, or any local
          service — means remembering a dozen directives: which headers to forward, how to terminate SSL, how
          WebSocket upgrades work. This generator builds a complete, commented <code>sites-available</code> config
          from a simple form, live as you type. Everything runs in your browser, and the result downloads as a{' '}
          <code>.conf</code> file ready for your server.
        </p>
      }
      sections={[
        {
          heading: 'What the generated config includes',
          body: (
            <p>
              Every config forwards the headers your app needs to see real clients: <code>Host</code>,{' '}
              <code>X-Real-IP</code>, <code>X-Forwarded-For</code>, and <code>X-Forwarded-Proto</code>, plus{' '}
              <code>proxy_http_version 1.1</code>. Enable <strong>SSL</strong> to get a <code>443 ssl http2</code>{' '}
              listener with Let&apos;s Encrypt certificate paths and an HTTP→HTTPS redirect block; enable{' '}
              <strong>WebSocket support</strong> for the <code>Upgrade</code>/<code>Connection</code> headers and the
              required <code>map</code> block. Optional <strong>gzip</strong> and <strong>static asset caching</strong>{' '}
              (<code>expires 30d</code>) round out a production-ready setup.
            </p>
          ),
        },
        {
          heading: 'How to install it',
          body: (
            <p>
              Save the file to <code>/etc/nginx/sites-available/your-domain.conf</code>, symlink it with{' '}
              <code>sudo ln -s /etc/nginx/sites-available/your-domain.conf /etc/nginx/sites-enabled/</code>, then run{' '}
              <code>sudo nginx -t</code> to validate and <code>sudo systemctl reload nginx</code> to apply. If you use
              SSL, obtain the certificate first with <code>sudo certbot --nginx -d your-domain.com</code>, or start
              with SSL off and add it later.
            </p>
          ),
        },
        {
          heading: 'Common pitfalls to check',
          body: (
            <p>
              Three mistakes cause most reverse-proxy bugs. First, a missing or wrong <code>Host</code> header breaks
              apps that route by domain — the generated config always sets it. Second, WebSocket apps hang silently
              without the <code>Upgrade</code> headers and the <code>map $http_upgrade $connection_upgrade</code>{' '}
              block. Third, uploads fail with <em>413 Request Entity Too Large</em> until{' '}
              <code>client_max_body_size</code> is raised — pick the value that matches your largest expected upload.
              Also make sure your app binds to the proxy target port (<code>127.0.0.1</code> is safest) and that the
              firewall allows ports 80/443.
            </p>
          ),
        },
      ]}
    />
  )
}
