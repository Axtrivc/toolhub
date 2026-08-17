/**
 * data-storage-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端 = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const dataStorageConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '💾 十进制单位(KB = 1000 字节)用于硬盘和网速标称;二进制单位(KiB = 1024 字节)用于操作系统显示。比特按电信惯例 1000 进制(1 字节 = 8 比特)。',
      'unit.b': '字节 (B)',
      'unit.bit': '比特 (bit)',
      'unit.gb': '吉字节 (GB)',
      'unit.gbit': '吉比特 (Gb)',
      'unit.gib': '吉字节二进制 (GiB)',
      'unit.kb': '千字节 (KB)',
      'unit.kbit': '千比特 (Kb)',
      'unit.kib': '千字节二进制 (KiB)',
      'unit.mb': '兆字节 (MB)',
      'unit.mbit': '兆比特 (Mb)',
      'unit.mib': '兆字节二进制 (MiB)',
      'unit.pb': '拍字节 (PB)',
      'unit.pib': '拍字节二进制 (PiB)',
      'unit.tb': '太字节 (TB)',
      'unit.tib': '太字节二进制 (TiB)',
    },
    useCases: [
      '规划数据库字段和存储容量',
      '核对 API 负载大小限制',
      '估算文件、照片、视频的存储占用',
    ],
    faqs: [
      { q: '为什么 256GB 手机显示的可用空间更少?', a: '两个原因:系统按二进制单位显示(十进制 256 GB ≈ 二进制 238 GB),而且操作系统本身就要占用好几个 GB。实际可用空间还会更少。' },
      { q: '网速和文件大小怎么换算?', a: '网速的单位是比特每秒(Mbps),而文件大小是字节。把 Mbps 除以 8 就得到 MB/s。100 Mbps 的宽带下载速度约为 12.5 MB/s。' },
    ],
  },
  es: {
    ui: {
      'note': '💾 Las unidades decimales (KB = 1000 bytes) corresponden a discos y velocidades de red; las binarias (KiB = 1024 bytes), a lo que informa el sistema operativo. Los bits usan base 1000 (1 byte = 8 bits).',
      'unit.b': 'Bytes (B)',
      'unit.bit': 'Bits (bit)',
      'unit.gb': 'Gigabytes (GB)',
      'unit.gbit': 'Gigabits (Gb)',
      'unit.gib': 'Gigabibytes (GiB)',
      'unit.kb': 'Kilobytes (KB)',
      'unit.kbit': 'Kilobits (Kb)',
      'unit.kib': 'Kibibytes (KiB)',
      'unit.mb': 'Megabytes (MB)',
      'unit.mbit': 'Megabits (Mb)',
      'unit.mib': 'Mebibytes (MiB)',
      'unit.pb': 'Petabytes (PB)',
      'unit.pib': 'Pebibytes (PiB)',
      'unit.tb': 'Terabytes (TB)',
      'unit.tib': 'Tebibytes (TiB)',
    },
    useCases: [
      'planificar campos de base de datos y capacidad de almacenamiento',
      'comprobar los límites de tamaño de las cargas de API',
      'estimar el espacio que ocupan archivos, fotos y vídeos',
    ],
    faqs: [
      { q: '¿Por qué mi teléfono de 256 GB muestra menos espacio libre?', a: 'Por dos razones: el sistema operativo informa en unidades binarias (256 GB decimales ≈ 238 GB binarios) y el propio sistema operativo ocupa varios GB. El espacio realmente utilizable es aún menor.' },
      { q: '¿Velocidad de internet frente a tamaño de archivo?', a: 'Las velocidades de internet se miden en bits por segundo (Mbps), pero los tamaños de archivo en bytes. Divide los Mbps entre 8 para obtener MB/s. Una conexión de 100 Mbps descarga a unos 12,5 MB/s.' },
    ],
  },
  de: {
    ui: {
      'note': '💾 Dezimale Einheiten (KB = 1000 Bytes) entsprechen Festplatten- und Netzwerkangaben; binäre Einheiten (KiB = 1024 Bytes) der Anzeige des Betriebssystems. Bits verwenden Basis 1000 (1 Byte = 8 Bits).',
      'unit.b': 'Bytes (B)',
      'unit.bit': 'Bits (bit)',
      'unit.gb': 'Gigabyte (GB)',
      'unit.gbit': 'Gigabits (Gb)',
      'unit.gib': 'Gibibytes (GiB)',
      'unit.kb': 'Kilobytes (KB)',
      'unit.kbit': 'Kilobits (Kb)',
      'unit.kib': 'Kibibytes (KiB)',
      'unit.mb': 'Megabyte (MB)',
      'unit.mbit': 'Megabits (Mb)',
      'unit.mib': 'Mebibytes (MiB)',
      'unit.pb': 'Petabyte (PB)',
      'unit.pib': 'Pebibytes (PiB)',
      'unit.tb': 'Terabyte (TB)',
      'unit.tib': 'Tebibytes (TiB)',
    },
    useCases: [
      'Datenbankfelder und Speicherkapazität planen',
      'Größenbeschränkungen von API-Payloads prüfen',
      'den Speicherbedarf von Dateien, Fotos und Videos abschätzen',
    ],
    faqs: [
      { q: 'Warum zeigt mein 256-GB-Handy weniger freien Speicher?', a: 'Aus zwei Gründen: Das Betriebssystem rechnet in binären Einheiten (256 dezimale GB ≈ 238 binäre GB), und das Betriebssystem selbst belegt mehrere GB. Der tatsächlich nutzbare Speicher ist noch geringer.' },
      { q: 'Internetgeschwindigkeit vs. Dateigröße?', a: 'Internetgeschwindigkeiten werden in Bits pro Sekunde (Mbps) angegeben, Dateigrößen aber in Bytes. Teile Mbps durch 8, um MB/s zu erhalten. Eine 100-Mbps-Verbindung lädt mit etwa 12,5 MB/s.' },
    ],
  },
}
