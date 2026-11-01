/**
 * tire-size-calculator 本地化 bundle —— zh / es / de(B10 批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const TireSizeCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['comparar el diámetro real entre la medida actual y la nueva', 'saber cuánto se desvía el velocímetro antes de cambiar', 'recalibrar cuentakilómetros y consumo por revoluciones/milla', 'buscar una medida más ancha dentro del ±3 % de diámetro'],
    faqs: [
      { q: '¿Qué significa cada número del 225/45R17?', a: '225 es el ancho de sección en mm; 45, el perfil (flanco = 225 × 45 % ≈ 101 mm); R17, construcción radial y llanta de 17 pulgadas. Diámetro = llanta × 25,4 + 2 × flanco ≈ 634 mm.' },
      { q: '¿Qué pasa con el velocímetro al montar más grande?', a: 'Cuenta vueltas: más diámetro → menos vueltas por milla → marca MENOS de lo real. Con +1,4 % de diámetro, marcar 60 equivale a unos 60,9 reales — multas por sorpresa. La herramienta da la conversión en ambos sentidos.' },
      { q: '¿Cuánta diferencia de diámetro es aceptable?', a: 'La regla no escrita del sector es ±3 %; más allá fallan velocímetro, odómetro, la calibración de ABS/ESP e incluso roza el paso de rueda. Lo limpio es buscar la medida equivalente manteniendo el diámetro.' },
      { q: '¿Para qué sirven las revoluciones por milla?', a: 'Enlazan directamente con odómetro y consumo: pasar de 808 a 796 rev/milla hace que el cuentakilómetros se quede corto. Flotas y preparadores usan esa cifra para recalibrar.' },
    ],
    ui: {
      'in.tire1': 'Neumático actual',
      'in.tire2': 'Neumático nuevo (vacío = sin comparar)',
      'in.speed': 'Velocidad de referencia',
      'inSuffix.speed': 'mph',
      'out.d1': 'Diámetro actual',
      'out.d2': 'Diámetro nuevo',
      'out.diffPct': 'Cambio de diámetro',
      'out.speedoAt': 'Marca el velocímetro (velocidad real)',
      'out.trueAt': 'Velocidad real (marcando la referencia)',
      'out.revs': 'Revoluciones por milla',
      'chartTitle': 'Diámetro: actual vs nuevo',
      'cmpseg.0': 'Diámetro',
      'note': '📏 225/45R17: 225 mm de ancho, perfil 45 (flanco = 225 × 0,45 ≈ 101 mm), llanta de 17″; diámetro = llanta × 25,4 + 2 × flanco. Más de un +3 % de diámetro: velocímetro bajo y riesgo de roce.',
      'errSpec': 'Escribe la medida como ANCHO/PERFIL R LLANTA, p. ej. 225/45R17',
      'errSpec2': 'No pude interpretar la segunda medida — usa p. ej. 235/45R17',
      'errSpeed': 'La velocidad de referencia debe ser positiva',
      'noSecond': '— introduce una segunda medida para comparar',
      'preset.0': 'Plus-size un paso',
      'preset.1': 'Flanco más alto (confort)',
      'preset.2': 'Pickup todo terreno',
    },
  },
  de: {
    useCases: ['den echten Durchmesserunterschied Alt vs. Neu vergleichen', 'vor dem Reifenkauf wissen, wie weit der Tacho abweicht', 'Kilometerzähler und Verbrauch über Umdrehungen pro Meile einordnen', 'eine breitere Größe innerhalb der +3 %-Toleranz finden'],
    faqs: [
      { q: 'Was bedeuten die Zahlen bei 225/45R17?', a: '225 ist die Reifenbreite in mm, 45 die Höhe-Breite-Relation (Seitenwand = 225 × 45 % ≈ 101 mm), R17 radiale Bauweise mit 17-Zoll-Felge. Durchmesser = Felge × 25,4 + 2 × Seitenwand ≈ 634 mm.' },
      { q: 'Was macht der Tacho bei größeren Reifen?', a: 'Er zählt Umdrehungen: größerer Durchmesser → weniger Umdrehungen pro Meile → der Tacho zeigt ZU WENIG an. Bei +1,4 % Durchmesser entspricht „Tacho 60“ real etwa 60,9 — die Blitze-Falle. Der Rechner rechnet beide Richtungen.' },
      { q: 'Wie viel Durchmesserunterschied geht klar?', a: 'Ungefähre Branchentoleranz ±3 %; darüber leiden Tacho, Kilometerzähler, ABS/ESP-Kalibrierung und der Kotflügel-Spielraum. Sauber ist die „Plus-Size“-Regel: Breite zulegen, Profil abnehmen.' },
      { q: 'Wozu Umdrehungen pro Meile?', a: 'Sie hängen direkt an Kilometerzähler und Verbrauch: 808 → 796 U/min… je Meile heißt, der Zähler unterzählt. Flotten und Tuner kalibrieren mit genau dieser Zahl nach.' },
    ],
    ui: {
      'in.tire1': 'Aktueller Reifen',
      'in.tire2': 'Neuer Reifen (leer = kein Vergleich)',
      'in.speed': 'Referenzgeschwindigkeit',
      'inSuffix.speed': 'mph',
      'out.d1': 'Durchmesser aktuell',
      'out.d2': 'Durchmesser neu',
      'out.diffPct': 'Durchmesseränderung',
      'out.speedoAt': 'Tachoanzeige (bei echtem Tempo)',
      'out.trueAt': 'Echtes Tempo (bei Referenzanzeige)',
      'out.revs': 'Umdrehungen pro Meile',
      'chartTitle': 'Durchmesser: aktuell vs. neu',
      'cmpseg.0': 'Durchmesser',
      'note': '📏 225/45R17: 225 mm Breite, 45er Profil (Seitenwand = 225 × 0,45 ≈ 101 mm), 17-Zoll-Felge; Durchmesser = Felge × 25,4 + 2 × Seitenwand. Über etwa +3 % Durchmesser drohen Tacho-Untertreibung und Kotflügelkontakt.',
      'errSpec': 'Größe als BREITE/PROFIL R FELGE eingeben, z. B. 225/45R17',
      'errSpec2': 'Zweite Größe unlesbar — schreibe z. B. 235/45R17',
      'errSpeed': 'Die Referenzgeschwindigkeit muss positiv sein',
      'noSecond': '— zweite Größe eingeben zum Vergleichen',
      'preset.0': 'Plus-Size ein Schritt',
      'preset.1': 'Höhere Seitenwand (Komfort)',
      'preset.2': 'Pickup-All-Terrain-Wechsel',
    },
  },
}
