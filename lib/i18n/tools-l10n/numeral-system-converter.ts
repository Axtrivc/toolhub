/**
 * numeral-system-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义 NumeralSystemConverterClient,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const numeralSystemConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'baseBinary': '二进制(基 2)',
      'baseDecimal': '十进制(基 10)',
      'baseHex': '十六进制(基 16)',
      'baseOctal': '八进制(基 8)',
      'emptyState': '为所选基数输入有效数字',
      'fromBase': '从基数',
      'note': '🔢 常见用途:编程(十六进制颜色、内存地址)、数字电子(二进制)、文件权限(八进制)。试试十进制 255 = 十六进制 FF。',
      'number': '数字',
    },
    useCases: [
      '在网页设计里用十六进制颜色(如 #FFFFFF)',
      '查看调试器中以十六进制显示的内存地址',
      '理解 Unix 文件权限(八进制的 chmod 755)',
    ],
    faqs: [
      { q: '程序员为什么用十六进制?', a: '因为一个十六进制数字正好表示 4 位二进制(一个「半字节」)。这让冗长的二进制数变得短得多、好读得多。FF 比 11111111 紧凑得多。' },
    ],
  },
  es: {
    ui: {
      'baseBinary': 'Binario (base 2)',
      'baseDecimal': 'Decimal (base 10)',
      'baseHex': 'Hexadecimal (base 16)',
      'baseOctal': 'Octal (base 8)',
      'emptyState': 'Introduce un número válido para la base seleccionada',
      'fromBase': 'De base',
      'note': '🔢 Usos comunes: programación (colores hex, direcciones de memoria), electrónica digital (binario) y permisos de archivos (octal). Prueba 255 decimal = FF hex.',
      'number': 'Número',
    },
    useCases: [
      'usar colores hexadecimales en diseño web (p. ej., #FFFFFF)',
      'revisar direcciones de memoria que el depurador muestra en hexadecimal',
      'entender permisos de archivos de Unix (chmod 755 en octal)',
    ],
    faqs: [
      { q: '¿Por qué los programadores usan hexadecimal?', a: 'Porque un dígito hexadecimal representa exactamente 4 dígitos binarios (un «nibble»). Esto hace que los números binarios largos sean mucho más cortos y fáciles de leer. FF es más compacto que 11111111.' },
    ],
  },
  de: {
    ui: {
      'baseBinary': 'Binär (Basis 2)',
      'baseDecimal': 'Dezimal (Basis 10)',
      'baseHex': 'Hexadezimal (Basis 16)',
      'baseOctal': 'Oktal (Basis 8)',
      'emptyState': 'Gültige Zahl für die gewählte Basis eingeben',
      'fromBase': 'Von Basis',
      'note': '🔢 Häufige Nutzung: Programmierung (Hex-Farben, Speicheradressen), Digitaltechnik (Binär), Dateirechte (Oktal). Probier 255 dezimal = FF hex.',
      'number': 'Zahl',
    },
    useCases: [
      'Hexadezimal-Farben im Webdesign verwenden (z. B. #FFFFFF)',
      'Speicheradressen im Debugger im Hexadezimalsystem nachvollziehen',
      'Unix-Dateirechte verstehen (chmod 755 oktal)',
    ],
    faqs: [
      { q: 'Warum verwenden Programmierer Hexadezimal?', a: 'Weil eine Hexadezimalziffer genau 4 Binärziffern (ein „Nibble") darstellt. Damit werden lange Binärzahlen deutlich kürzer und leichter lesbar. FF ist kompakter als 11111111.' },
    ],
  },
}
