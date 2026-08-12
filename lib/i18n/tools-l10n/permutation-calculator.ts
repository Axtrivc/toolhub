/**
 * permutation-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = PermutationCalculatorClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const permutationCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      '密码:4 位 PIN = 10⁴ 种排列',
      '比赛名次:8 名选手的前 3 名(有序)',
      '座位安排:桌边谁坐哪里',
      'ID 与代码生成',
    ],
    faqs: [
      { q: 'P(n,r) 什么时候等于 n!?', a: '当 r = n 时——你在排列全部物品。排列 n 个不同物品的方式数就是 n!(n 的阶乘)。例如 5 本书放在书架上:5! = 120 种排法。' },
    ],
  },
  es: {
    useCases: [
      'contraseñas: un PIN de 4 dígitos = 10⁴ permutaciones',
      'resultados de carrera: los 3 primeros de 8 corredores (ordenados)',
      'arreglos de asientos: quién se sienta dónde en una mesa',
      'generación de IDs y códigos',
    ],
    faqs: [
      { q: '¿Cuándo es P(n,r) = n!?', a: 'Cuando r = n — estás ordenando TODOS los elementos. El número de formas de ordenar n elementos distintos es n! (n factorial). Para 5 libros en una estantería: 5! = 120 arreglos.' },
    ],
  },
  de: {
    useCases: [
      'Passwörter: eine 4-stellige PIN = 10⁴ Permutationen',
      'Rennergebnisse: die ersten 3 von 8 Läufern (geordnet)',
      'Sitzordnungen: wer am Tisch wo sitzt',
      'ID- und Codegenerierung',
    ],
    faqs: [
      { q: 'Wann ist P(n,r) = n!?', a: 'Wenn r = n — du ordnest ALLE Elemente an. Die Anzahl der Möglichkeiten, n verschiedene Elemente anzuordnen, ist n! (n Fakultät). Für 5 Bücher auf einem Regal: 5! = 120 Anordnungen.' },
    ],
  },
}
