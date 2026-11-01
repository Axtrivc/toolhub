/**
 * 工具级本地化「核心层」—— 零注册表依赖的客户端安全模块
 *
 * 背景:lib/i18n/tool-l10n.ts 静态聚合全部 239 个 tools-l10n/<slug>.ts,
 * 任何 client 组件 import 它都会把整表词典拖进同一个首载 chunk。
 * 本模块把「查表逻辑 + 跨工具共享 COMMON 表」与「数据」拆开:
 *   - 数据:各调用点按需 import 自己的 tools-l10n/<slug>.ts(per-slug 拆分);
 *   - 逻辑:本模块的 tuiFromEntry / l10nEntryFor / makeRegistryTui,
 *     查表表达式与 tool-l10n.ts 的 getToolL10n/tui 逐字段一致(en 恒回退英文)。
 *
 * 仅供 client 组件/工厂使用;server 侧仍可直接用 lib/i18n/tool-l10n.ts 全量表。
 */

import type { Locale } from '../i18n'

/** 单个语种的工具本地化条目(所有字段可选,按需覆盖英文原值) */
export interface ToolL10nEntry {
  /** 可见 FAQ Q&A(覆盖 lib/tool-faqs.ts 的英文) */
  faqs?: Array<{ q: string; a: string }>
  /** 工具交互界面字符串(供 Client 组件 tui() 读取) */
  ui?: Record<string, string>
  /** ToolInfoSection "Common uses" 列表(替代英文 formatUseCases) */
  useCases?: string[]
  /** FormulaSection 公式与解释(覆盖 lib/tool-formulas.ts) */
  formula?: { formula: string; variables?: string; explain?: string; example?: string }
}

/** 非英文语种 → 条目。en 不出现,保证英文走原值。 */
export type ToolL10n = Partial<Record<Exclude<Locale, 'en'>, ToolL10nEntry>>

/**
 * 取某语种的本地化条目(与 tool-l10n.ts 的 getToolL10n 同表达式):
 * - locale === 'en' → null(调用方走英文原值)
 * - record 缺失 → null(回退英文)
 */
export function l10nEntryFor(record: ToolL10n | null | undefined, locale: Locale): ToolL10nEntry | null {
  if (locale === 'en') return null
  return record?.[locale] ?? null
}

/**
 * 取工具交互界面字符串(与 tool-l10n.ts 的 tui 同语义):
 * 缺失 → 回退 fallback(英文原值),保证 SSR 与缺译时不破图。
 */
export function tuiFromEntry(
  record: ToolL10n | null | undefined,
  locale: Locale,
  key: string,
  fallback: string,
): string {
  const entry = l10nEntryFor(record, locale)
  return entry?.ui?.[key] ?? fallback
}

/**
 * 由「本文件用到的 slug → 条目」子表构造与全量 tui 同签名的查表函数。
 * 子表只含调用点实际使用的 slug,命中行为与全量表逐位一致;
 * 未入子表的 slug 返回英文 fallback(与全量表未注册 slug 行为一致)。
 */
export function makeRegistryTui(subset: Record<string, ToolL10n | undefined>) {
  return (slug: string, locale: Locale, key: string, fallback: string): string =>
    tuiFromEntry(subset[slug], locale, key, fallback)
}

// ──────────── makeCalculatorClient 通用 UI key(跨工具共享) ────────────
// 这些 key(summaryTitle / inputsLabel / csvField ...)在所有 makeCalculatorClient
// 生成的计算器里语义一致,译一次即可,不必逐 bundle 重复。en 不在此 → 回退英文。
export const COMMON_CALC_UI: Record<Exclude<Locale, 'en'>, Record<string, string>> = {

  es: {
    summaryTitle: 'Resumen del cálculo',
    chartEmpty: 'Introduce valores para ver el gráfico.',
    inputsLabel: 'Entradas:',
    resultsLabel: 'Resultados:',
    copySummary: 'Copiar resumen',
    csvField: 'Campo',
    csvType: 'Tipo',
    csvValue: 'Valor',
    csvInput: 'Entrada',
    csvResult: 'Resultado',
    inputs: 'Entradas',
    reset: 'Restablecer',
    // Modo comparación A/B (allowCompare)
    compareAdd: '+ Comparar escenario',
    compareExit: '× Salir de la comparación',
    compareSync: '⟲ Copiar A → B',
    scenarioA: 'Escenario A',
    scenarioB: 'Escenario B',
    deltaCol: 'B frente a A',
  },
  de: {
    summaryTitle: 'Zusammenfassung der Berechnung',
    chartEmpty: 'Werte eingeben, um das Diagramm zu sehen.',
    inputsLabel: 'Eingaben:',
    resultsLabel: 'Ergebnisse:',
    copySummary: 'Zusammenfassung kopieren',
    csvField: 'Feld',
    csvType: 'Typ',
    csvValue: 'Wert',
    csvInput: 'Eingabe',
    csvResult: 'Ergebnis',
    inputs: 'Eingaben',
    reset: 'Zurücksetzen',
    // Szenario-A/B-Vergleich (allowCompare)
    compareAdd: '+ Szenario vergleichen',
    compareExit: '× Vergleich beenden',
    compareSync: '⟲ A → B kopieren',
    scenarioA: 'Szenario A',
    scenarioB: 'Szenario B',
    deltaCol: 'B gegenüber A',
  },
}

/**
 * 取 makeCalculatorClient 通用 UI key 的本地化值(跨工具共享)。
 * locale==='en' 或缺失 → 回退 fallback(英文原值),保证 SSR 恒英文。
 */
export function tuiCalc(key: string, locale: Locale, fallback: string): string {
  if (locale === 'en') return fallback
  return COMMON_CALC_UI[locale]?.[key] ?? fallback
}

// ──────────── makeUnitConverter 通用 UI key(跨工具共享)────────────
// 单位转换器的 chrome(Convert / Value / From / To / Formula / 摘要)在所有
// makeUnitConverter 生成的转换器里语义一致,译一次即可。en 不在此 → 回退英文。
export const COMMON_UC_UI: Record<Exclude<Locale, 'en'>, Record<string, string>> = {

  es: {
    convert: 'Convertir',
    value: 'Valor',
    from: 'De',
    to: 'A',
    convertedValue: 'Valor convertido',
    formula: 'Fórmula',
    conversionSummary: 'Resumen de conversión',
    summaryValue: 'Valor:',
    summaryResult: 'Resultado:',
    summaryFormula: 'Fórmula:',
    conversionNone: 'Conversión: —',
    conversionTitle: 'Conversión de {from} a {to}',
    quickValues: 'Valores rápidos',
    scaleTitle: 'Escala de magnitud',
    generatedBy: 'Generado por ToolHub',
    swapUnits: 'Intercambiar unidades',
    swap: 'Intercambiar',
    // Panel «todas las unidades» (makeUnitConverter)
    allUnits: 'Todas las unidades',
    allUnitsHint: 'Haz clic en una unidad para fijarla como destino',
    sourceUnitTag: 'entrada',
  },
  de: {
    convert: 'Umrechnen',
    value: 'Wert',
    from: 'Von',
    to: 'Nach',
    convertedValue: 'Umgerechneter Wert',
    formula: 'Formel',
    conversionSummary: 'Umrechnungszusammenfassung',
    summaryValue: 'Wert:',
    summaryResult: 'Ergebnis:',
    summaryFormula: 'Formel:',
    conversionNone: 'Umrechnung: —',
    conversionTitle: '{from} nach {to} Umrechnung',
    quickValues: 'Schnellwerte',
    scaleTitle: 'Größenordnung',
    generatedBy: 'Erstellt von ToolHub',
    swapUnits: 'Einheiten tauschen',
    swap: 'Tauschen',
    // Alle-Einheiten-Panel (makeUnitConverter)
    allUnits: 'Alle Einheiten',
    allUnitsHint: 'Klicke auf eine Einheit, um sie als Ziel festzulegen',
    sourceUnitTag: 'Eingabe',
  },
}

/**
 * 取 makeUnitConverter 通用 UI key 的本地化值(跨工具共享)。
 * locale==='en' 或缺失 → 回退 fallback(英文原值),保证 SSR 恒英文。
 */
export function tuiUc(key: string, locale: Locale, fallback: string): string {
  if (locale === 'en') return fallback
  return COMMON_UC_UI[locale]?.[key] ?? fallback
}
