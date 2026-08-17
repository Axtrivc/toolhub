/**
 * text-to-binary 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const textToBinaryL10n: ToolL10n = {
  zh: {
    ui: {
      defaultInput: '你好',
      inputLabel: '文本',
      outputLabel: '二进制',
      note: '💾 把文本转成 UTF-8 二进制——每个字符变成一个或多个 8 位字节。',
    },
    useCases: [
      '计算机科学作业',
      '理解文本在计算机中的存储方式',
      '调试底层数据格式',
      '制作二进制主题的艺术或信息',
    ],
    faqs: [
      { q: '为什么每个字符用 8 位?', a: '8 位(一个字节)可表示 256 个不同的值(0–255),足以覆盖英文文本、常用符号和 ASCII/扩展 ASCII 的控制字符。UTF-8 用 1–4 个字节表示一个字符,以支持完整的 Unicode。' },
    ],
  },
  es: {
    ui: {
      defaultInput: 'Ho',
      inputLabel: 'Texto',
      outputLabel: 'Binario',
      note: '💾 Convierte texto a binario UTF-8 — cada carácter pasa a ser uno o más bytes de 8 bits.',
    },
    useCases: [
      'tareas de informática',
      'entender cómo se almacena el texto en la computadora',
      'depurar formatos de datos de bajo nivel',
      'crear arte o mensajes en binario',
    ],
    faqs: [
      { q: '¿Por qué 8 bits por carácter?', a: '8 bits (un byte) pueden representar 256 valores distintos (0-255), suficiente para texto en inglés, símbolos comunes y caracteres de control de ASCII/ASCII extendido. UTF-8 usa 1-4 bytes por carácter para admitir Unicode completo.' },
    ],
  },
  de: {
    ui: {
      defaultInput: 'Hallo',
      inputLabel: 'Text',
      outputLabel: 'Binär',
      note: '💾 Wandelt Text in UTF-8-Binär um — jedes Zeichen wird zu einem oder mehreren 8-Bit-Bytes.',
    },
    useCases: [
      'Informatik-Hausaufgaben',
      'verstehen, wie Text gespeichert wird',
      'Datenformate auf niedriger Ebene debuggen',
      'Binär-Kunst oder -Botschaften erstellen',
    ],
    faqs: [
      { q: 'Warum 8 Bits pro Zeichen?', a: '8 Bits (ein Byte) können 256 verschiedene Werte darstellen (0-255). Das reicht für englischen Text, gängige Symbole und Steuerzeichen in ASCII/erweitertem ASCII. UTF-8 nutzt 1-4 Bytes pro Zeichen für vollständige Unicode-Unterstützung.' },
    ],
  },
}
