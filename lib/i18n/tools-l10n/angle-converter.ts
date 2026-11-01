/**
 * angle-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端 = makeUnitConverter,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const angleConverterL10n: ToolL10n = {

  es: {
    ui: {
      'note': '📐 Usado en matemáticas, ingeniería y navegación. 1 revolución = 360° = 2π rad.',
      'unit.arcmin': 'Minutos de arco (′)',
      'unit.arcsec': 'Segundos de arco (″)',
      'unit.deg': 'Grados (°)',
      'unit.grad': 'Gradianes (grad)',
      'unit.mrad': 'Milirradianes (mrad)',
      'unit.rad': 'Radianes (rad)',
      'unit.rev': 'Revoluciones (rev)',
    },
    useCases: [
      'en clase de matemáticas, convertir entre grados y radianes (la trigonometría usa radianes, la geometría grados)',
      'al programar, pasar entre grados y radianes (la mayoría de funciones matemáticas usan radianes)',
      'manejar ángulos muy pequeños en astronomía (segundos de arco)',
      'en topografía, convertir gradianes (gon) a grados',
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
      'unit.mrad': 'Milliradian (mrad)',
      'unit.rad': 'Radiant (rad)',
      'unit.rev': 'Umdrehungen (rev)',
    },
    useCases: [
      'im Mathematikunterricht zwischen Grad und Bogenmaß umrechnen (Trigonometrie nutzt Bogenmaß, Geometrie Grad)',
      'beim Programmieren zwischen Grad und Bogenmaß wechseln (die meisten Mathefunktionen nutzen Bogenmaß)',
      'in der Astronomie sehr kleine Winkel verarbeiten (Bogensekunden)',
      'in der Vermessung Gon in Grad umrechnen',
    ],
    faqs: [
      { q: 'Wie wandle ich Grad in Code in Bogenmaß um?', a: 'Multipliziere Grad mit π/180 oder nutze die eingebaute Funktion (z. B. radians() in Python, Math.PI/180 in JavaScript). Die meisten Sprachen bieten auch einen Grad-zu-Bogenmaß-Helfer.' },
    ],
  },
}
