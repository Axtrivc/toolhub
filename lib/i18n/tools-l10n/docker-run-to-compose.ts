/**
 * docker-run-to-compose 本地化 bundle —— zh / es / de
 */

import type { ToolL10n } from '../tool-l10n'

export const dockerRunToComposeL10n: ToolL10n = {
  zh: {
    ui: {
      samplesLabel: '快捷加载示例:',
      'sample.postgres': 'PostgreSQL 数据库',
      'sample.nginx': 'Nginx Web 服务器',
      'sample.redis': 'Redis 自定义命令',
      'sample.node': 'Node.js 开发环境',
      inputTitle: 'Docker Run 命令输入',
      clearBtn: '清空',
      inputHint: '支持多行反斜杠续行、各种单双引号、端口映射、数据卷、环境变量及常见 docker run 参数。',
      outputTitle: 'docker-compose.yml 输出',
      copyYaml: '复制 Compose 配置',
      includeVersionLabel: "包含旧版 version: '3.8' 声明头",
      envFormatLabel: '环境变量语法:',
      summaryTitle: '检测到的参数解析概览',
      ignoredFlagsNote: '已安全忽略的参数(Compose 中不适用或未识别):',
    },
    useCases: [
      '将复杂命令版本化: 将一条带 10 个 -e 和 -v 参数的 PostgreSQL 启动命令转为 git 可追踪的 docker-compose.yml',
      'Web 代理一键生成: 将 Nginx 容器连同宿主机 80/443 端口与只读证书挂载一键转为 Compose 服务',
      '本地开发环境配置: 转换带 -it、--rm 和 $(pwd) 目录绑定的 Node/Python 开发容器为长期服务',
      '提取命名数据卷: 自动识别 pgdata 或 redis-data 等命名卷, 并在 YAML 底部自动声明 volumes: 节点',
    ],
    faqs: [
      {
        q: '为什么要将 docker run 转换为 docker-compose.yml?',
        a: '单条 docker run 命令容易在终端历史中丢失, 且参数复杂时极易遗漏。Docker Compose 可以将端口、数据卷、环境变量等全部配置纳入 Git 版本管理, 并通过一条 docker compose up -d 轻松启动。',
      },
      {
        q: '如何处理命名数据卷与宿主机绝对路径挂载?',
        a: '如果数据卷以 /、./、../ 或 Windows 盘符开头, 本工具将其视为宿主机目录绑定挂载(bind mount); 如果是类似 pgdata:/var/lib/postgresql 的纯名称, 则会自动在 YAML 根节点补充 volumes: 声明。',
      },
      {
        q: '命令解析是否安全? 会不会上传我的密钥?',
        a: '100% 本地纯前端解析, 无任何后端接口调用。你的数据库密码、API Key 和私有服务器凭据绝不会离开你的浏览器。',
      },
      {
        q: '生成的 Docker Compose 是什么版本?',
        a: '默认生成现代 Compose Specification 标准格式(支持 docker compose v2, 无需冗余的 version 声明)。也可以随时勾选开关保留旧版 version: "3.8" 头。',
      },
    ],
  },
  es: {
    ui: {
      samplesLabel: 'Cargar ejemplo:',
      'sample.postgres': 'Base de datos PostgreSQL',
      'sample.nginx': 'Servidor web Nginx',
      'sample.redis': 'Redis con comando personalizado',
      'sample.node': 'Desarrollo Node.js',
      inputTitle: 'Comando Docker Run',
      clearBtn: 'Limpiar',
      inputHint: 'Pega cualquier comando docker run o docker create con barras invertidas, puertos, volúmenes y variables de entorno.',
      outputTitle: 'docker-compose.yml generado',
      copyYaml: 'Copiar Compose',
      includeVersionLabel: "Incluir encabezado version: '3.8'",
      envFormatLabel: 'Formato de variables de entorno:',
      summaryTitle: 'Resumen de configuración detectada',
      ignoredFlagsNote: 'Parámetros ignorados (no aplicables en Compose o no reconocidos):',
    },
    useCases: [
      'Control de versiones: convierte comandos largos de PostgreSQL en un docker-compose.yml almacenable en Git',
      'Servidores web: traduce contenedores Nginx con puertos 80/443 y montajes de solo lectura a servicios estructurados',
      'Entornos de desarrollo: convierte comandos interactivos de Node.js o Python en servicios reproducibles',
      'Volúmenes persistentes: genera automáticamente la sección superior de volumes: para datos con nombre',
    ],
    faqs: [
      {
        q: '¿Por qué convertir docker run a docker-compose.yml?',
        a: 'Los comandos docker run son difíciles de recordar y versionar. Docker Compose permite guardar la configuración en un archivo YAML en Git y levantarla con un solo comando docker compose up -d.',
      },
      {
        q: '¿Cómo gestiona volúmenes con nombre frente a rutas de host?',
        a: 'Las rutas que empiezan por /, ./ o letras de unidad se tratan como montajes de host (bind mounts). Los nombres simples como pgdata:/var/lib/postgresql se declaran automáticamente en la sección global volumes:.',
      },
      {
        q: '¿Es seguro el conversor?',
        a: 'Funciona 100% en tu navegador mediante JavaScript local. Tus contraseñas y claves de entorno nunca se envían a ningún servidor.',
      },
      {
        q: '¿Qué versión de Docker Compose se produce?',
        a: 'Genera el estándar moderno Compose Spec (compatible con docker compose v2), con opción de activar la cabecera clásica version: "3.8".',
      },
    ],
  },
  de: {
    ui: {
      samplesLabel: 'Beispiel laden:',
      'sample.postgres': 'PostgreSQL-Datenbank',
      'sample.nginx': 'Nginx-Webserver',
      'sample.redis': 'Redis mit eigenem Befehl',
      'sample.node': 'Node.js-Entwicklung',
      inputTitle: 'Docker Run Befehl',
      clearBtn: 'Leeren',
      inputHint: 'Füge beliebige docker run Befehle mit Backslashes, Ports, Volumes und Umgebungsvariablen ein.',
      outputTitle: 'docker-compose.yml Ausgabe',
      copyYaml: 'Compose kopieren',
      includeVersionLabel: "Header version: '3.8' einbinden",
      envFormatLabel: 'Umgebungsvariablen-Format:',
      summaryTitle: 'Erkannte Konfiguration im Überblick',
      ignoredFlagsNote: 'Ignorierte Parameter (in Compose nicht anwendbar oder ungenutzt):',
    },
    useCases: [
      'Versionskontrolle in Git: Lange docker run Befehle mit Passwörtern und Mounts in lesbare Compose-Dateien wandeln',
      'Webserver-Deployment: Nginx mit Ports 80/443 und Read-Only Zertifikaten sauber als Service definieren',
      'Entwicklungsumgebungen: Interaktive Node.js Container mit Workdir und Volumes reproduzierbar machen',
      'Named Volumes automatisch deklarieren: Erkennt Namen wie pgdata und legt den volumes: Block am Ende an',
    ],
    faqs: [
      {
        q: 'Warum sollte man docker run in docker-compose.yml umwandeln?',
        a: 'docker run Befehle gehen im Terminalverlauf verloren. Docker Compose speichert alle Ports, Volumes und Umgebungsvariablen in einer sauberen Datei im Git-Repository, startbar mit docker compose up -d.',
      },
      {
        q: 'Wie werden Named Volumes und Host-Pfade unterschieden?',
        a: 'Pfade mit /, ./ oder Laufwerksbuchstaben werden als Bind Mounts formatiert. Namen wie pgdata werden automatisch im Root-Bereich volumes: deklariert.',
      },
      {
        q: 'Ist der Konverter datenschutzsicher?',
        a: 'Ja, die gesamte Befehlsanalyse läuft vollständig lokal in deinem Browser. Keine Passwörter oder Tokens verlassen deinen Rechner.',
      },
      {
        q: 'Welche Docker Compose Version wird erzeugt?',
        a: 'Standardmäßig die moderne Compose Specification (für docker compose v2). Die klassische version: "3.8" Zeile kann optional aktiviert werden.',
      },
    ],
  },
}
