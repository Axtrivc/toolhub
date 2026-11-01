/**
 * download-time-calculator 本地化 bundle —— zh / es / de(B10 批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const DownloadTimeCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['estimar cuánto tarda en bajar un juego o una ISO', 'decidir si te da tiempo a subir una presentación antes de la reunión', 'comparar cuánto ahorrarías al subir de banda ancha', 'calcular cuánto tardará una copia en la nube según tu subida'],
    faqs: [
      { q: '¿Por qué 100 Mbps no son 100 MB por segundo?', a: 'Los proveedores venden megabits y los archivos se miden en megabytes: 1 byte = 8 bits, así que 100 Mbps son como mucho 12,5 MB/s. Descontando el 10-15 % de sobrecarga, quedan unos 11 MB/s reales.' },
      { q: '¿Qué es la sobrecarga de protocolo?', a: 'Las cabeceras TCP/IP, las retransmisiones, el handshake TLS y la contención del Wi-Fi consumen ancho de banda. Un cable en buenas condiciones pierde ~10 %; un Wi-Fi saturado, 15 % o más — por eso la cifra de «rendimiento efectivo» es la realista.' },
      { q: '¿Y el tiempo de subida?', a: 'La fórmula es idéntica cambiando la velocidad por tu ancho de subida, normalmente mucho menor (planes 1000/50: veinte veces menos). Las copias en la nube y los adjuntos grandes van con la subida.' },
      { q: '¿Por qué en la realidad va más lento?', a: 'Ancho compartido (la familia en streaming), limitación del servidor, rutas lejanas y congestión en horas punta. Toma la estimación como límite optimista y reserva un 20-30 % de margen.' },
    ],
    ui: {
      'in.size': 'Tamaño del archivo',
      'in.sizeUnit': 'Unidad',
      'in.speed': 'Velocidad de conexión',
      'in.speedUnit': 'Unidad de velocidad',
      'in.overhead': 'Sobrecarga de protocolo',
      'opt.sizeUnit.MB': 'MB',
      'opt.sizeUnit.GB': 'GB',
      'opt.sizeUnit.TB': 'TB',
      'opt.speedUnit.Mbps': 'Mbps',
      'opt.speedUnit.MBps': 'MB/s',
      'opt.overhead.0': 'Ninguna',
      'opt.overhead.10': '10% TCP',
      'opt.overhead.15': '15% WiFi',
      'out.time': 'Tiempo de transferencia',
      'out.totalSeconds': 'Segundos totales',
      'out.effective': 'Rendimiento efectivo',
      'out.payloadMB': 'Volumen de datos',
      'chartTitle': 'Tiempo según la conexión',
      'cmpseg.0': 'Tiempo de transferencia',
      'note': '📡 Tu proveedor vende megabits (Mb), los archivos son megabytes (MB): 8× de diferencia antes de la sobrecarga. Cabeceras TCP/IP, retransmisiones y Wi-Fi se comen otro 10-15 %; el «rendimiento efectivo» es la cifra honesta. La subida es la misma fórmula con tu velocidad de subida.',
      'errInput': 'El tamaño y la velocidad deben ser números positivos',
      'preset.0': 'Película en streaming (4,5 GB)',
      'preset.1': 'Descarga de juego (80 GB)',
      'preset.2': 'Lote de fotos (500 MB)',
    },
  },
  de: {
    useCases: ['abschätzen, wie lange ein Spiel oder ISO-Download dauert', 'entscheiden, ob eine Präsentation vor dem Meeting noch hochgeladen ist', 'vergleichen, was ein Tarif-Upgrade bei großen Dateien bringt', 'Cloud-Backups nach der Upload-Bandbreite durchrechnen'],
    faqs: [
      { q: 'Warum sind 100 Mbps keine 100 MB pro Sekunde?', a: 'Anbieter verkaufen Megabits, Dateien zählen in Megabytes: 1 Byte = 8 Bit — 100 Mbps sind maximal 12,5 MB/s. Nach 10–15 % Protokoll-Overhead bleiben real etwa 11 MB/s.' },
      { q: 'Was ist Protokoll-Overhead?', a: 'TCP/IP-Header, verlorene Pakete, TLS-Handshake und Wi-Fi-Konkurrenz kosten Bandbreite. Ein sauberer Kabelansatz verliert ~10 %, ein belegtes WLAN 15 % oder mehr — deshalb ist die „effektive Durchsatzrate“ die ehrliche Zahl.' },
      { q: 'Wie rechne ich die Upload-Zeit?', a: 'Formel identisch, nur die Geschwindigkeit durch deine Upload-Bandbreite ersetzen — meist deutlich langsamer (1000/50-Tarife: Faktor 20). Cloud-Backups und große Anhänge hängen am Upload.' },
      { q: 'Warum läuft es real langsamer?', a: 'Geteilte Leitung (Familie streamt), Server-Drosseln, weite Routen und Stoßzeiten. Nimm die Schätzung als optimistische Untergrenze und plane 20–30 % Puffer ein.' },
    ],
    ui: {
      'in.size': 'Dateigröße',
      'in.sizeUnit': 'Einheit',
      'in.speed': 'Verbindungsgeschwindigkeit',
      'in.speedUnit': 'Geschwindigkeitseinheit',
      'in.overhead': 'Protokoll-Overhead',
      'opt.sizeUnit.MB': 'MB',
      'opt.sizeUnit.GB': 'GB',
      'opt.sizeUnit.TB': 'TB',
      'opt.speedUnit.Mbps': 'Mbit/s',
      'opt.speedUnit.MBps': 'MB/s',
      'opt.overhead.0': 'Keiner',
      'opt.overhead.10': '10% TCP',
      'opt.overhead.15': '15% WLAN',
      'out.time': 'Übertragungsdauer',
      'out.totalSeconds': 'Sekunden gesamt',
      'out.effective': 'Effektiver Durchsatz',
      'out.payloadMB': 'Datenmenge',
      'chartTitle': 'Dauer je Anschluss',
      'cmpseg.0': 'Übertragungsdauer',
      'note': '📡 Anbieter verkaufen Megabits (Mb), Dateien sind Megabytes (MB) — Faktor 8, bevor der Overhead kommt. TCP/IP-Header, Retransmits und WLAN kosten weitere 10–15 %; der „effektive Durchsatz“ ist die ehrliche Zahl. Upload: gleiche Formel mit deiner Upload-Rate.',
      'errInput': 'Dateigröße und Geschwindigkeit müssen positiv sein',
      'preset.0': 'Streaming-Film (4,5 GB)',
      'preset.1': 'Spiele-Download (80 GB)',
      'preset.2': 'Fotostapel (500 MB)',
    },
  },
}
