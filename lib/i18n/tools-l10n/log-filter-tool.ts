/**
 * log-filter-tool 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const LogFilterToolL10n: ToolL10n = {

  es: {
    useCases: ['extraer los errores de un log gigante', 'acotar la búsqueda por nivel o palabra clave', 'filtrar logs con expresiones regulares', 'copiar un fragmento limpio de errores para el equipo'],
    faqs: [
      { q: '¿Es seguro pegar logs de producción?', a: 'Sí: el filtrado corre enteramente en el navegador; no se sube ni se almacena nada. Aun así, antes de compartir la salida conviene borrar tokens y datos personales, porque las líneas que coinciden siguen conteniendo todo lo que traigan.' },
      { q: '¿Cómo funciona el filtro por nivel?', a: 'Los niveles coinciden por límites de palabra: elegir WARN coincide con WARN pero no con WARNING, y ERROR conserva solo las líneas de error, esté donde esté el token. Combínalo con términos de inclusión/exclusión para afinar, como líneas ERROR que contengan timeout.' },
      { q: '¿Puedo usar expresiones regulares?', a: 'Sí — activa el interruptor de regex y tanto incluir como excluir pasan a ser regex insensibles a mayúsculas, de modo que timeout|refused coincide con ambas palabras. Los patrones inválidos se marcan en rojo en lugar de no coincidir con nada en silencio.' },
    ],
    ui: {
      'allLevels': 'Todos los niveles',
      'excludeLabel': 'Excluir',
      'includeLabel': 'Incluir (palabra o regex)',
      'inputLabel': 'Pega tus logs',
      'invalidRegex': 'Expresión regular no válida',
      'levelLabel': 'Nivel de log',
      'matchedN': '{m} de {t} líneas',
      'noLines': 'Ninguna línea coincide con los filtros.',
      'note': '🔒 El filtrado es 100 % en el cliente — pega logs de producción sin miedo. El nivel coincide por límite de palabra exacto (WARN coincide con WARN, no con WARNING).',
      'regexToggle': 'Tratar patrones como regex',
      'truncateNotice': 'El registro supera el límite de {n} caracteres: solo se filtra el principio.',
    },
  },
  de: {
    useCases: ['Fehlerzeilen aus riesigen Logs herausfiltern', 'die Suche nach Level oder Stichwort eingrenzen', 'Logs per Regex filtern', 'ein sauberes Fehler-Snippet fürs Team kopieren'],
    faqs: [
      { q: 'Ist es sicher, Produktions-Logs einzufügen?', a: 'Ja — das Filtern läuft komplett lokal im Browser; nichts wird hochgeladen oder gespeichert. Vor dem Teilen der Ausgabe dennoch Tokens und personenbezogene Daten entfernen, denn die getroffenen Zeilen enthalten weiterhin alles, was in ihnen steht.' },
      { q: 'Wie funktioniert das Level-Filtern?', a: 'Level matchen an Wortgrenzen: WARN trifft WARN, aber nicht WARNING; ERROR behält nur Fehlerzeilen, egal wo das Token steht. Mit Ein-/Ausschluss-Begriffen verfeinerst du weiter, etwa ERROR-Zeilen mit timeout.' },
      { q: 'Kann ich reguläre Ausdrücke nutzen?', a: 'Ja — schalte den Regex-Schalter um, dann sind Einschließen und Ausschließen case-insensitive Regexes, sodass timeout|refused beide Wörter trifft. Ungültige Muster werden rot markiert, statt still nichts zu matchen.' },
    ],
    ui: {
      'allLevels': 'Alle Level',
      'excludeLabel': 'Ausschließen',
      'includeLabel': 'Einschließen (Wort oder Regex)',
      'inputLabel': 'Logs einfügen',
      'invalidRegex': 'Ungültiger regulärer Ausdruck',
      'levelLabel': 'Log-Level',
      'matchedN': '{m} von {t} Zeilen',
      'noLines': 'Keine Zeilen entsprechen den Filtern.',
      'note': '🔒 Das Filtern läuft komplett im Browser — Produktivlogs bedenkenlos einfügen. Level-Match ist wortgrenzengenau (WARN trifft WARN, nicht WARNING).',
      'regexToggle': 'Muster als Regex behandeln',
      'truncateNotice': 'Das Protokoll überschreitet das Limit von {n} Zeichen — gefiltert wird nur der Anfang.',
    },
  },
}
