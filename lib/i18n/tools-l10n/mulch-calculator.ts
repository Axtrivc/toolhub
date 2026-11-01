/**
 * mulch-calculator 本地化 bundle —— zh / es / de(B8 建材与施工批次)
 * 覆盖: ui + faqs + useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const MulchCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['planificar el refresco de primavera de los parterres', 'comparar sacos a 5, 7,5 y 10 cm de espesor', 'presupuestar la profundidad de una zona de juego', 'decidir entre sacos o entrega a granel'],
    faqs: [
      { q: '¿Qué grosor debe tener el acolchado?', a: '2-3 pulgadas es el punto dulce para parterres: suficiente para frenar malas hierbas y retener humedad, lo bastante fino para que aire y agua lleguen a las raíces. Pasar de 4 pulgadas puede asfixiarlas y provocar pudrición.' },
      { q: '¿Cuántos sacos son una yarda cúbica?', a: 'Una yarda son 27 ft³ — catorce sacos de 2 ft³ o nueve de 3 ft³. A partir de unas 6 yardas, la entrega a granel suele ganar en precio.' },
      { q: '¿Por qué importa tanto el grosor en el precio?', a: 'El volumen crece en línea con el grosor: pasar de 2 a 4 pulgadas duplica el pedido. El gráfico de comparación muestra el coste de cada espesor habitual a tu precio de saco.' },
      { q: '¿El acolchado de parques infantiales es distinto?', a: 'Sí. Las zonas de juego necesitan 9-12 pulgadas de fibra de madera certificada y ensayada por amortiguación de impactos; el acolchado decorativo no tiene clasificación de caída y nunca debe sustituirlo.' },
    ],
    ui: {
      'in.length': 'Largo del parterre',
      'in.width': 'Ancho del parterre',
      'in.depth': 'Espesor',
      'in.bagSize': 'Tamaño de saco',
      'opt.bagSize.2': 'Sacos de 2 ft³',
      'opt.bagSize.3': 'Sacos de 3 ft³',
      'in.price': 'Precio por saco',
      'out.mulchYd': 'Acolchado necesario',
      'out.mulchCf': 'Volumen en pies cúbicos',
      'out.bags2cf': 'Sacos (2 ft³)',
      'out.bags3cf': 'Sacos (3 ft³)',
      'out.cost': 'Coste en sacos',
      'chartTitle': 'Coste según espesor',
      'cmp.0': '2 pulgadas',
      'cmp.1': '3 pulgadas',
      'cmp.2': '4 pulgadas',
      'cmpseg.0': 'Coste',
      'errDims': 'Introduce dimensiones válidas del parterre',
      'preset.0': 'Parterre 10×4 @ 2″',
      'preset.1': 'Refresco 20×10 @ 3″',
      'preset.2': 'Parque infantil 20×20 @ 9″',
      'note': '🌿 Una yarda cúbica cubre 324 ft² a 1 pulgada — y 108 ft² a las 3 pulgadas estándar. Las zonas de caída de parques infantiales exigen 9-12 pulgadas de fibra de madera certificada, no acolchado decorativo.',
    },
  },
  de: {
    useCases: ['Frühjahrs-Auffrischung der Beete planen', 'Sackzahlen bei 5, 7,5 und 10 cm Höhe vergleichen', 'Fallschutzhöhe für Spielbereiche budgetieren', 'zwischen Sackware und Schüttgut-Lieferung entscheiden'],
    faqs: [
      { q: 'Wie dick sollte Mulch aufgetragen werden?', a: '2-3 Zoll sind der Sweet Spot für Beete: genug, um Unkraut zu unterdrücken und Feuchtigkeit zu halten, dünn genug, dass Luft und Wasser zu den Wurzeln kommen. Über 4 Zoll drohen Wurzelstress und Fäulnis.' },
      { q: 'Wie viele Säcke ergeben einen Kubikyard?', a: 'Ein Yard sind 27 ft³ — vierzehn 2-ft³-Säcke oder neun 3-ft³-Säcke. Ab etwa 6 Yards gewinnt meist die Schüttgut-Anlieferung beim Preis.' },
      { q: 'Warum beeinflusst die Höhe den Preis so stark?', a: 'Das Volumen wächst linear mit der Höhe: von 2 auf 4 Zoll verdoppelt sich die Menge. Das Vergleichsdiagramm zeigt die Kosten der üblichen Höhen zu deinem Sackpreis.' },
      { q: 'Ist Mulch für Spielplätze anders?', a: 'Ja. Spielbereiche brauchen 9-12 Zoll zertifizierte Ingenieurholzfaser mit geprüfter Stoßdämpfung — Ziermulch hat keine Fallhöhen-Klasse und darf ihn nie ersetzen.' },
    ],
    ui: {
      'in.length': 'Beetlänge',
      'in.width': 'Beetbreite',
      'in.depth': 'Mulchhöhe',
      'in.bagSize': 'Sackgröße',
      'opt.bagSize.2': '2-ft³-Säcke',
      'opt.bagSize.3': '3-ft³-Säcke',
      'in.price': 'Preis pro Sack',
      'out.mulchYd': 'Benötigter Mulch',
      'out.mulchCf': 'Volumen in Kubikfuß',
      'out.bags2cf': 'Säcke (2 ft³)',
      'out.bags3cf': 'Säcke (3 ft³)',
      'out.cost': 'Kosten in Säcken',
      'chartTitle': 'Kosten nach Höhe',
      'cmp.0': '2 Zoll',
      'cmp.1': '3 Zoll',
      'cmp.2': '4 Zoll',
      'cmpseg.0': 'Kosten',
      'errDims': 'Gültige Beetmaße eingeben',
      'preset.0': 'Beet 10×4 @ 2″',
      'preset.1': 'Auffrischen 20×10 @ 3″',
      'preset.2': 'Spielbereich 20×20 @ 9″',
      'note': '🌿 Ein Kubikyard deckt bei 1 Zoll 324 ft² — bei den standardmäßigen 3 Zoll 108 ft². Fallschutzzonen brauchen 9-12 Zoll zertifizierte Ingenieurholzfaser, keinen Ziermulch.',
    },
  },
}
