/**
 * angle-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端 = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const angleConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'note': '📐 用于数学、工程和导航。1 转 = 360° = 2π 弧度。',
      'unit.arcmin': '角分 (′)',
      'unit.arcsec': '角秒 (″)',
      'unit.deg': '度 (°)',
      'unit.grad': '梯度 (grad)',
      'unit.rad': '弧度 (rad)',
      'unit.rev': '转 (rev)',
    },
    useCases: [
      '在数学课上进行三角函数(弧度)与几何(角度)换算',
      '编程时在角度和弧度之间转换(大多数数学函数用弧度)',
      '天文学中处理很小的角度(角秒)',
    ],
    faqs: [
      { q: '在代码里怎么把角度转成弧度?', a: '把角度乘以 π/180,或者用内置函数(例如 Python 的 radians()、JavaScript 的 Math.PI/180)。大多数语言都有角度转弧度的辅助函数。' },
    ],
  },
  es: {
    ui: {
      'note': '📐 Usado en matemáticas, ingeniería y navegación. 1 revolución = 360° = 2π rad.',
      'unit.arcmin': 'Minutos de arco (′)',
      'unit.arcsec': 'Segundos de arco (″)',
      'unit.deg': 'Grados (°)',
      'unit.grad': 'Gradianes (grad)',
      'unit.rad': 'Radianes (rad)',
      'unit.rev': 'Revoluciones (rev)',
    },
    useCases: [
      'en clase de matemáticas convertir entre trigonometría (radianes) y geometría (grados)',
      'al programar, pasar entre grados y radianes (la mayoría de funciones matemáticas usan radianes)',
      'manejar ángulos muy pequeños en astronomía (segundos de arco)',
    ],
    faqs: [
      { q: '¿Cómo convierto grados a radianes en código?', a: 'Multiplica los grados por π/180 o usa la función integrada (p. ej., radians() en Python, Math.PI/180 en JavaScript). La mayoría de los lenguajes también ofrecen una función auxiliar de grados a radianes.' },
    ],
  },
  de: {
    ui: {
      'note': '📐 Für Mathematik, Ingenieurwesen und Navigation. 1 Umdrehung = 360° = 2π rad.',
      'unit.arcmin': 'Bogenminuten (′)',
      'unit.arcsec': 'Bogensekunden (″)',
      'unit.deg': 'Grad (°)',
      'unit.grad': 'Gon (grad)',
      'unit.rad': 'Bogenmaß (rad)',
      'unit.rev': 'Umdrehungen (rev)',
    },
    useCases: [
      'im Mathematikunterricht zwischen Trigonometrie (Bogenmaß) und Geometrie (Grad) umrechnen',
      'beim Programmieren zwischen Grad und Bogenmaß wechseln (die meisten Mathefunktionen nutzen Bogenmaß)',
      'in der Astronomie sehr kleine Winkel verarbeiten (Bogensekunden)',
    ],
    faqs: [
      { q: 'Wie wandle ich Grad in Code in Bogenmaß um?', a: 'Multipliziere Grad mit π/180 oder nutze die eingebaute Funktion (z. B. radians() in Python, Math.PI/180 in JavaScript). Die meisten Sprachen bieten auch einen Grad-zu-Bogenmaß-Helfer.' },
    ],
  },
}
