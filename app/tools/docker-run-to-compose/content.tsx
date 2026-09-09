export function DockerRunToComposeContent() {
  return (
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
}
