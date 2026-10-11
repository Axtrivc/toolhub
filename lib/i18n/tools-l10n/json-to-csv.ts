/**
 * json-to-csv 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(交互客户端为自定义组件,UI 本地化留待后续)
 */
import type { ToolL10n } from '../tool-l10n'

export const jsonToCsvL10n: ToolL10n = {
  zh: {
    ui: {
      inputTooLarge: '⚠️ 输入过大——支持规模最多 20 万字符。请裁剪输入后再计算。',
      defaultInput: '[{"姓名":"张三","年龄":30},{"姓名":"李四","年龄":25}]',
      inputLabel: 'JSON 对象数组',
      outputLabel: 'CSV',
      note: '🔄 把 JSON 对象数组转成 CSV。会对逗号和引号做正确转义,嵌套对象/数组会序列化为 JSON 字符串。只在后续对象中出现的键也会并入表头。',
    },
    useCases: [
      '从应用导出数据用于电子表格分析',
      '为数据库导入准备数据',
      '与非技术人员共享数据',
      '导入 Tableau、Power BI 等 BI 工具',
    ],
    faqs: [
      { q: '如果对象键不一样怎么办?', a: '表头取所有对象的键按首次出现顺序合并而成:后续对象多出的键会保留,缺失的键则为空值。先统一数据结构,仍能得到最干净的输出。' },
    ],
  },
  es: {
    ui: {
      inputTooLarge: '⚠️ Entrada demasiado grande: el tamaño admitido es de hasta 200 000 caracteres. Recorta la entrada para calcular.',
      defaultInput: '[{"nombre":"Juan","edad":30},{"nombre":"Ana","edad":25}]',
      inputLabel: 'Array JSON de objetos',
      outputLabel: 'CSV',
      note: '🔄 Convierte un array JSON de objetos a CSV. Gestiona comas y comillas con el escape correcto; los objetos y arrays anidados se emiten como cadenas JSON. Las claves que aparecen solo en objetos posteriores también se incluyen en los encabezados.',
    },
    useCases: [
      'exportar datos de una app para analizarlos en hojas de cálculo',
      'preparar datos para importarlos a una base de datos',
      'compartir datos con personas no técnicas',
      'alimentar herramientas de BI como Tableau o Power BI',
    ],
    faqs: [
      { q: '¿Qué pasa si mis objetos tienen claves distintas?', a: 'Los encabezados se construyen con la unión de las claves de todos los objetos en orden de primera aparición: las claves extra de objetos posteriores se conservan y las claves que falten dan valores vacíos. Normalizar tu estructura de datos primero sigue dando el resultado más limpio.' },
    ],
  },
  de: {
    ui: {
      inputTooLarge: '⚠️ Eingabe zu groß – die unterstützte Größe beträgt maximal 200.000 Zeichen. Kürze die Eingabe.',
      defaultInput: '[{"name":"Max","alter":30},{"name":"Anna","alter":25}]',
      inputLabel: 'JSON-Array von Objekten',
      outputLabel: 'CSV',
      note: '🔄 Wandelt ein JSON-Array von Objekten in CSV um. Behandelt Kommas und Anführungszeichen mit korrektem Escaping; verschachtelte Objekte und Arrays werden als JSON-Zeichenketten ausgegeben. Schlüssel, die erst in späteren Objekten auftreten, fließen ebenfalls in die Kopfzeilen ein.',
    },
    useCases: [
      'Daten aus einer App für die Tabellenanalyse exportieren',
      'Daten für den Datenbank-Import aufbereiten',
      'Daten mit nicht-technischen Stakeholdern teilen',
      'Daten in BI-Tools wie Tableau oder Power BI einspeisen',
    ],
    faqs: [
      { q: 'Was, wenn meine Objekte unterschiedliche Schlüssel haben?', a: 'Die Kopfzeilen werden aus der Vereinigung aller Objektschlüssel in Reihenfolge des ersten Auftretens gebildet: Zusätzliche Schlüssel späterer Objekte bleiben erhalten, fehlende Schlüssel ergeben leere Werte. Eine normalisierte Datenstruktur liefert weiterhin das sauberste Ergebnis.' },
    ],
  },
}
