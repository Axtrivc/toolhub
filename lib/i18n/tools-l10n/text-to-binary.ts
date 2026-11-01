/**
 * text-to-binary 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const textToBinaryL10n: ToolL10n = {

  es: {
    ui: {
      defaultInput: 'Hola',
      inputLabel: 'Texto',
      outputLabel: 'Binario',
      note: '💾 Convierte texto a binario UTF-8 — cada carácter pasa a ser uno o más bytes de 8 bits.',
      inputTooLarge: '⚠️ Entrada demasiado grande: el tamaño admitido es de hasta 200 000 caracteres. Recorta la entrada para convertir.',
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
      inputTooLarge: '⚠️ Eingabe zu groß – die unterstützte Größe beträgt maximal 200.000 Zeichen. Kürze die Eingabe zum Umwandeln.',
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
