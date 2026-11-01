/**
 * css-minifier 本地化 bundle —— zh / es / de(2026-10 B12 批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const CssMinifierL10n: ToolL10n = {

  es: {
    useCases: ['minificar CSS escrito a mano antes de subir a producción', 'ver bytes y porcentaje antes y después', 'aligerar el critical CSS que va inline en el HTML', 'mostrar qué espacios en blanco se pueden borrar y cuáles no'],
    faqs: [
      { q: '¿Cuánto se encoge el CSS?', a: 'Con comentarios y espacios, suele ser un 15-30 %. Ojo: gzip ya comprime muy bien el espacio en blanco, así que la ganancia en red es modesta — lo que de verdad cuentas es el coste de parseo, la higiene del bundle y la estabilidad del hash de caché.' },
      { q: '¿Por qué no se borran los espacios dentro de calc()?', a: 'La gramática de CSS exige espacios a ambos lados de + y - dentro de calc(); quitarlos invalida la declaración entera. Es el accidente número uno de los minificadores ingenuos, y aquí se conservan a propósito.' },
      { q: '¿Fusiona reglas o acorta colores?', a: 'A propósito, no. Fusionar selectores solapados altera el orden de cascada: más riesgo que beneficio. Solo pliegues seguros a nivel de byte: 0px→0, 0.5→.5, eliminar el último punto y coma y las reglas vacías.' },
      { q: '¿Sobreviven los comentarios /*! ... */ ?', a: 'Sí: por convención los «comentarios importantes» que empiezan por /*! (normalmente texto de licencia) se conservan; los /* */ normales se eliminan sin piedad.' },
    ],
    ui: {
      'inputLabel': 'Tu CSS',
      'outputLabel': 'CSS minificado',
      'loadSample': 'Cargar ejemplo',
      'statsIn': 'Bytes de entrada',
      'statsOut': 'Bytes de salida',
      'statsSaved': 'Ahorro',
      'tooLarge': 'Entrada demasiado grande — el máximo admitido es de 300 000 caracteres.',
      'note': '🛡️ Conservador a propósito: las cadenas y los banners /*! se aíslan como placeholders antes de tocar el espacio en blanco; calc() conserva los espacios que su gramática exige; 0% nunca se pliega a 0 (no son equivalentes en flex-basis). Sin fusiones agresivas: la salida es válida al primer intento.',
    },
  },
  de: {
    useCases: ['handgeschriebenes CSS vor dem Deployment minifizieren', 'Bytes und Ersparnis vor/nach dem Vergleich ansehen', 'Inline-Critical-CSS im HTML entschlacken', 'zeigen, welcher Weißraum sicher geht und welcher nicht'],
    faqs: [
      { q: 'Wie viel schrumpft CSS?', a: 'Mit Kommentaren und Leerraum typischerweise 15-30 %. Beachte: gzip packt Weißraum ohnehin hervorragend, der Netzgewinn ist begrenzt — die echte Ersparnis sind Parse-Kosten, Bundle-Hygiene und stabile Cache-Hashes.' },
      { q: 'Warum bleiben die Leerzeichen in calc() stehen?', a: 'Die CSS-Grammatik verlangt Whitespace um + und - innerhalb von calc(); ohne ihn ist die gesamte Deklaration tot. Das ist Kardinalfehler Nummer eins naiver Minifier — dieses Tool lässt sie bewusst stehen.' },
      { q: 'Werden Regeln gemerged oder Farben gekürzt?', a: 'Bewusst nein. Selektoren-Merging ändert die Kaskadenreihenfolge — mehr Risiko als Nutzen. Es laufen nur sichere Byte-Folds: 0px→0, 0.5→.5, letztes Semikolon und leere Regeln weg.' },
      { q: 'Überleben /*! ... */-Kommentare?', a: 'Ja — „wichtige Kommentare“ mit /*! (meist Lizenztext) bleiben per Konvention erhalten; normale /* */-Kommentare werden restlos entfernt.' },
    ],
    ui: {
      'inputLabel': 'Dein CSS',
      'outputLabel': 'Minifiziertes CSS',
      'loadSample': 'Beispiel laden',
      'statsIn': 'Bytes rein',
      'statsOut': 'Bytes raus',
      'statsSaved': 'Ersparnis',
      'tooLarge': 'Eingabe zu groß — unterstützt sind bis zu 300.000 Zeichen.',
      'note': '🛡️ Bewusst konservativ: Strings und /*!-Banner werden als Platzhalter isoliert, bevor irgendein Whitespace angefasst wird; calc() behält die grammatikalisch nötigen Leerzeichen; 0% wird nie zu 0 gefaltet (in flex-basis nicht äquivalent). Keine aggressiven Merges — die Ausgabe passt beim ersten Versuch.',
    },
  },
}
