/**
 * data-storage-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端 = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const dataStorageConverterL10n: ToolL10n = {

  es: {
    ui: {
      'note': '💾 Las unidades decimales (KB = 1000 bytes) corresponden a discos y velocidades de red; las binarias (KiB = 1024 bytes), a lo que informa el sistema operativo. Los bits usan base 1000 (1 byte = 8 bits).',
      'unit.b': 'Bytes (B)',
      'unit.bit': 'Bits (bit)',
      'unit.gb': 'Gigabytes (GB)',
      'unit.gbit': 'Gigabits (Gb)',
      'unit.gib': 'Gibibytes (GiB)',
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
      'convertir TB a GB en tamaños de archivo',
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
      'TB in GB bei Dateigrößen umrechnen',
    ],
    faqs: [
      { q: 'Warum zeigt mein 256-GB-Handy weniger freien Speicher?', a: 'Aus zwei Gründen: Das Betriebssystem rechnet in binären Einheiten (256 dezimale GB ≈ 238 binäre GB), und das Betriebssystem selbst belegt mehrere GB. Der tatsächlich nutzbare Speicher ist noch geringer.' },
      { q: 'Internetgeschwindigkeit vs. Dateigröße?', a: 'Internetgeschwindigkeiten werden in Bits pro Sekunde (Mbps) angegeben, Dateigrößen aber in Bytes. Teile Mbps durch 8, um MB/s zu erhalten. Eine 100-Mbps-Verbindung lädt mit etwa 12,5 MB/s.' },
    ],
  },
}
