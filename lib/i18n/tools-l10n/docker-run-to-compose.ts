/**
 * docker-run-to-compose 本地化 bundle —— zh / es / de
 */

import type { ToolL10n } from '../tool-l10n'

export const dockerRunToComposeL10n: ToolL10n = {

  es: {
    ui: {
      samplesLabel: 'Cargar ejemplo:',
      'sample.postgres': 'Base de datos PostgreSQL',
      'sample.nginx': 'Servidor web Nginx',
      'sample.redis': 'Redis con comando personalizado',
      'sample.node': 'Entorno de desarrollo Node.js',
      inputTitle: 'Comando Docker Run',
      clearBtn: 'Limpiar',
      inputHint: 'Pega cualquier comando docker run o docker create: se admiten barras invertidas de continuación de línea, comillas, puertos, volúmenes y variables de entorno.',
      outputTitle: 'docker-compose.yml generado',
      copyYaml: 'Copiar Compose',
      includeVersionLabel: "Incluir encabezado version: '3.8'",
      envFormatLabel: 'Formato de variables de entorno:',
      summaryTitle: 'Resumen de configuración detectada',
      badgeService: 'Servicio:',
      badgeImage: 'Imagen:',
      badgePorts: 'Puertos:',
      badgeVolumes: 'Volúmenes:',
      badgeEnvVars: 'Variables de entorno:',
      badgeRestart: 'Reinicio:',
      badgeNetworks: 'Redes:',
      ignoredFlagsNote: 'Parámetros ignorados (no aplicables en Compose o no reconocidos):',
    },
    useCases: [
      'Control de versiones: convierte comandos largos de PostgreSQL en un docker-compose.yml almacenable en Git',
      'Servidores web: traduce contenedores Nginx con puertos 80/443 y montajes de solo lectura a servicios estructurados',
      'Entornos de desarrollo: convierte comandos interactivos de Node.js o Python en servicios reproducibles',
      'Volúmenes persistentes: genera automáticamente la sección raíz de volúmenes (volumes:) para volúmenes con nombre',
    ],
    faqs: [
      {
        q: '¿Por qué convertir docker run a docker-compose.yml?',
        a: 'Los comandos docker run son difíciles de recordar y versionar. Docker Compose permite guardar la configuración en un archivo YAML en Git y levantarla con un solo comando docker compose up -d.',
      },
      {
        q: '¿Cómo gestiona volúmenes con nombre frente a rutas de host?',
        a: 'Las rutas que empiezan por /, ./ o letras de unidad se tratan como montajes de host (bind mounts). Los nombres simples como pgdata:/var/lib/postgresql se declaran automáticamente en la sección raíz de volúmenes (volumes:).',
      },
      {
        q: '¿Es seguro el conversor?',
        a: 'Sí: funciona 100% en tu navegador mediante JavaScript local. Tus contraseñas y claves de entorno nunca se envían a ningún servidor.',
      },
      {
        q: '¿Qué versión de Docker Compose se genera?',
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
      inputHint: 'Füge beliebige docker run oder docker create Befehle ein: Backslash-Zeilenumbrüche, Anführungszeichen, Ports, Volumes und Umgebungsvariablen werden unterstützt.',
      outputTitle: 'docker-compose.yml Ausgabe',
      copyYaml: 'Compose kopieren',
      includeVersionLabel: "Header version: '3.8' einbinden",
      envFormatLabel: 'Umgebungsvariablen-Format:',
      summaryTitle: 'Erkannte Konfiguration im Überblick',
      badgeService: 'Service:',
      badgeImage: 'Image:',
      badgePorts: 'Ports:',
      badgeVolumes: 'Volumes:',
      badgeEnvVars: 'Umgebungsvariablen:',
      badgeRestart: 'Neustart:',
      badgeNetworks: 'Netzwerke:',
      ignoredFlagsNote: 'Ignorierte Parameter (in Compose nicht anwendbar oder nicht erkannt):',
    },
    useCases: [
      'Versionskontrolle in Git: Lange docker run Befehle mit Passwörtern und Mounts in lesbare Compose-Dateien wandeln',
      'Webserver-Deployment: Nginx mit Ports 80/443 und schreibgeschützten Mounts sauber als Service definieren',
      'Entwicklungsumgebungen: Interaktive Node.js Container mit Workdir und Volumes reproduzierbar machen',
      'Named Volumes automatisch deklarieren: Erkennt Namen wie pgdata und legt den volumes: Block am Ende an',
    ],
    faqs: [
      {
        q: 'Warum sollte man docker run in docker-compose.yml umwandeln?',
        a: 'Lange docker run Befehle sind fehleranfällig, gehen im Terminalverlauf verloren und lassen sich schwer versionieren. Docker Compose speichert alle Ports, Volumes und Umgebungsvariablen in einer sauberen Datei im Git-Repository, startbar mit docker compose up -d.',
      },
      {
        q: 'Wie werden Named Volumes und Host-Pfade unterschieden?',
        a: 'Pfade mit /, ./ oder Laufwerksbuchstaben werden als Bind Mounts behandelt. Namen wie pgdata werden automatisch im Root-Abschnitt volumes: deklariert.',
      },
      {
        q: 'Ist der Konverter datenschutzsicher?',
        a: 'Ja, die gesamte Befehlsanalyse läuft vollständig lokal in deinem Browser. Keine Passwörter oder Tokens verlassen deinen Rechner.',
      },
      {
        q: 'Welche Docker Compose Version wird erzeugt?',
        a: 'Standardmäßig die moderne Compose Specification (für docker compose v2). Optional lässt sich die klassische Zeile version: "3.8" aktivieren.',
      },
    ],
  },
}
