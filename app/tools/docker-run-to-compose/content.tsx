'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * Docker Run to Compose 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原单语文案的 DOM 结构,zh/es/de 在客户端 hydration 后按 locale
 * 切换。<code> 中的 docker/compose 标志、YAML 片段与专有名词保持不变。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why Convert Docker Run to Docker Compose?</h2>
    <p>
      <code>docker run</code> commands are great for quick one-off container tests. However, once you add port mappings,
      persistent volumes, environment variables, restart policies, and custom network rules, a single command can stretch
      across a dozen lines of bash with fragile backslashes.
    </p>
    <p>
      Converting your commands into a <code>docker-compose.yml</code> file gives you several key advantages:
    </p>
    <ul>
      <li><strong>Version control:</strong> Track infrastructure changes in Git alongside your application code.</li>
      <li><strong>Reproducibility:</strong> Start and stop complex multi-container stacks with a single <code>docker compose up -d</code>.</li>
      <li><strong>Security:</strong> Safely separate sensitive environment variables into <code>.env</code> files rather than pasting plaintext passwords into terminal history.</li>
      <li><strong>Persistence:</strong> Define named volumes and network topologies cleanly in declarative YAML.</li>
    </ul>

    <h2>Named Volumes vs. Host Bind Mounts</h2>
    <p>
      Docker supports two main storage types:
    </p>
    <ul>
      <li><strong>Named volumes (e.g. <code>pgdata:/var/lib/postgresql/data</code>):</strong> Managed by the Docker engine, stored in Docker&apos;s internal directory, and shared across containers. This tool automatically declares them in the root <code>volumes:</code> section.</li>
      <li><strong>Bind mounts (e.g. <code>./html:/usr/share/nginx/html</code>):</strong> Directly mapped to specific host paths. These do not require root volume declarations.</li>
    </ul>

    <h2>Modern Compose Spec vs. Legacy v3</h2>
    <p>
      Modern Docker Compose (v2 CLI) follows the official <em>Compose Specification</em> where top-level <code>version:</code> keys
      are deprecated and optional. By default, this tool outputs clean, modern Compose YAML. You can also toggle the
      <code>version: &apos;3.8&apos;</code> header if your CI/CD runner relies on legacy Compose v1.
    </p>
  </section>
)

// ──────────────────────────── zh ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>为什么要把 docker run 转换为 Docker Compose?</h2>
    <p>
      <code>docker run</code> 适合快速的临时容器测试。但一旦加上端口映射、持久化数据卷、环境变量、重启策略和自定义网络规则,
      一条命令就会膨胀成十几行带脆弱反斜杠续行的 bash,既难读也难维护。
    </p>
    <p>
      把命令转换成 <code>docker-compose.yml</code> 文件,可以带来几个关键优势:
    </p>
    <ul>
      <li><strong>版本控制:</strong> 在 Git 中与应用代码一起追踪基础设施变更。</li>
      <li><strong>可复现性:</strong> 一条 <code>docker compose up -d</code> 即可启停复杂的多容器编排。</li>
      <li><strong>安全性:</strong> 把敏感环境变量分离到 <code>.env</code> 文件,避免明文密码留在终端历史里。</li>
      <li><strong>持久化:</strong> 用声明式 YAML 干净地定义命名数据卷与网络拓扑。</li>
    </ul>

    <h2>命名数据卷 vs. 宿主机绑定挂载</h2>
    <p>
      Docker 主要支持两类存储方式:
    </p>
    <ul>
      <li><strong>命名数据卷(例如 <code>pgdata:/var/lib/postgresql/data</code>):</strong> 由 Docker 引擎管理,存放在 Docker 内部目录中,可在多个容器间共享。本工具会自动在根级 <code>volumes:</code> 段中声明它们。</li>
      <li><strong>绑定挂载(例如 <code>./html:/usr/share/nginx/html</code>):</strong> 直接映射到宿主机指定路径,不需要根级数据卷声明。</li>
    </ul>

    <h2>现代 Compose 规范 vs. 旧版 v3</h2>
    <p>
      现代 Docker Compose(v2 CLI)遵循官方 <em>Compose Specification</em>,顶层的 <code>version:</code> 键已被弃用且可省略。
      本工具默认输出干净、现代的 Compose YAML;如果你的 CI/CD 流水线仍依赖旧版 Compose v1,也可以勾选开关保留
      <code>version: &apos;3.8&apos;</code> 声明头。
    </p>
  </section>
)

// ──────────────────────────── es ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Por qué convertir docker run a Docker Compose?</h2>
    <p>
      Los comandos <code>docker run</code> son ideales para pruebas rápidas de contenedores. Sin embargo, en cuanto añades
      mapeos de puertos, volúmenes persistentes, variables de entorno, políticas de reinicio y reglas de red personalizadas,
      un solo comando puede estirarse a una docena de líneas de bash con contrabarras frágiles.
    </p>
    <p>
      Convertir tus comandos en un archivo <code>docker-compose.yml</code> te ofrece varias ventajas clave:
    </p>
    <ul>
      <li><strong>Control de versiones:</strong> registra los cambios de infraestructura en Git junto con tu código.</li>
      <li><strong>Reproducibilidad:</strong> arranca y detiene stacks multicontenedor complejos con un solo <code>docker compose up -d</code>.</li>
      <li><strong>Seguridad:</strong> separa las variables de entorno sensibles en archivos <code>.env</code> en lugar de pegar contraseñas en texto plano en el historial de la terminal.</li>
      <li><strong>Persistencia:</strong> define volúmenes con nombre y topologías de red de forma limpia en YAML declarativo.</li>
    </ul>

    <h2>Volúmenes con nombre vs. bind mounts de host</h2>
    <p>
      Docker admite dos tipos principales de almacenamiento:
    </p>
    <ul>
      <li><strong>Volúmenes con nombre (p. ej. <code>pgdata:/var/lib/postgresql/data</code>):</strong> gestionados por el motor de Docker, almacenados en el directorio interno de Docker y compartibles entre contenedores. Esta herramienta los declara automáticamente en la sección raíz <code>volumes:</code>.</li>
      <li><strong>Bind mounts (p. ej. <code>./html:/usr/share/nginx/html</code>):</strong> mapeados directamente a rutas específicas del host. No requieren declaraciones de volumen raíz.</li>
    </ul>

    <h2>Compose Spec moderno vs. v3 heredado</h2>
    <p>
      Docker Compose moderno (CLI v2) sigue la <em>Compose Specification</em> oficial, donde la clave de nivel superior{' '}
      <code>version:</code> está obsoleta y es opcional. Por defecto, esta herramienta genera YAML de Compose limpio y moderno.
      También puedes activar la cabecera <code>version: &apos;3.8&apos;</code> si tu runner de CI/CD depende del antiguo Compose v1.
    </p>
  </section>
)

// ──────────────────────────── de ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum docker run in Docker Compose umwandeln?</h2>
    <p>
      <code>docker run</code> Befehle eignen sich gut für schnelle Container-Tests. Sobald du aber Port-Mappings, persistente
      Volumes, Umgebungsvariablen, Restart-Richtlinien und eigene Netzwerkregeln hinzufügst, wächst ein einzelner Befehl schnell
      auf ein Dutzend Zeilen Bash mit fragilen Backslashes an.
    </p>
    <p>
      Die Umwandlung in eine <code>docker-compose.yml</code> Datei bringt mehrere Vorteile:
    </p>
    <ul>
      <li><strong>Versionskontrolle:</strong> Infrastruktur-Änderungen gemeinsam mit dem Anwendungscode in Git verfolgen.</li>
      <li><strong>Reproduzierbarkeit:</strong> Komplexe Multi-Container-Stacks mit einem einzigen <code>docker compose up -d</code> starten und stoppen.</li>
      <li><strong>Sicherheit:</strong> Sensible Umgebungsvariablen sauber in <code>.env</code> Dateien auslagern, statt Klartext-Passwörter in der Terminal-Historie zu hinterlassen.</li>
      <li><strong>Persistenz:</strong> Named Volumes und Netzwerk-Topologien deklarativ in sauberem YAML definieren.</li>
    </ul>

    <h2>Named Volumes vs. Host Bind Mounts</h2>
    <p>
      Docker unterstützt zwei Haupt-Speicherarten:
    </p>
    <ul>
      <li><strong>Named Volumes (z. B. <code>pgdata:/var/lib/postgresql/data</code>):</strong> vom Docker-Engine verwaltet, im internen Docker-Verzeichnis gespeichert und zwischen Containern teilbar. Dieses Tool deklariert sie automatisch im Root-Abschnitt <code>volumes:</code>.</li>
      <li><strong>Bind Mounts (z. B. <code>./html:/usr/share/nginx/html</code>):</strong> direkt auf bestimmte Host-Pfade gemappt. Sie benötigen keine Root-Volume-Deklaration.</li>
    </ul>

    <h2>Modernes Compose Spec vs. Legacy v3</h2>
    <p>
      Das moderne Docker Compose (v2 CLI) folgt der offiziellen <em>Compose Specification</em>, in der der Top-Level-Key{' '}
      <code>version:</code> als veraltet gilt und optional ist. Dieses Tool erzeugt standardmäßig sauberes, modernes Compose
      YAML. Optional lässt sich die Zeile <code>version: &apos;3.8&apos;</code> aktivieren, falls deine CI/CD-Pipeline noch auf
      das alte Compose v1 setzt.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DockerRunToComposeContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
