/**
 * numeral-system-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义 NumeralSystemConverterClient,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const numeralSystemConverterL10n: ToolL10n = {
  zh: {
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
