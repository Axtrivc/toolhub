/**
 * wordle-solver 本地化 bundle —— zh / es / de
 * 覆盖:useCases(无 FAQ / formula 条目 → 仅 useCases)
 */
import type { ToolL10n } from '../tool-l10n'

export const wordleSolverL10n: ToolL10n = {
  zh: {
    useCases: [
      '按字母位置的 Wordle 解算器',
      'Wordle 五字母单词查找器',
      'Wordle 绿黄灰提示助手',
      '文字游戏易位构词查找器',
    ],
  },
  es: {
    useCases: [
      'solucionador de Wordle por posición de letra',
      'buscador de palabras de 5 letras para Wordle',
      'ayudante de Wordle verde amarillo gris',
      'buscador de anagramas para juegos de palabras',
    ],
  },
  de: {
    useCases: [
      'Wordle-Löser nach Buchstabenposition',
      '5-Buchstaben-Wortfinder für Wordle',
      'Wordle-Helfer grün gelb grau',
      'Anagramm-Finder für Wortspiele',
    ],
  },
}
