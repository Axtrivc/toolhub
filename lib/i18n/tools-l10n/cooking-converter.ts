/**
 * cooking-converter 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const CookingConverterL10n: ToolL10n = {
  zh: {
    useCases: ['把杯/tbsp/tsp 换算成克', '按食材密度精确换算烘焙用量', '把克数食谱反算成杯量', '适配欧式称重与美式杯量食谱'],
    faqs: [
      { q: '为什么一杯面粉不等于一杯糖?', a: '杯量计的是体积,而食材密度不同:一杯美式中筋面粉约 120 g,一杯砂糖却有 200 g。本转换器用的是按食材区分的密度表(基于 USDA),不是一个笼统的换算系数。' },
      { q: '换算有多准?', a: '日常烘焙足够用——数值是标准的「勺舀后刮平」均值。装杯方式不同会让结果相差最多约 20%(过筛面粉 vs 直接舀),所以马卡龙、酸面团这类精细配方,厨房秤仍然更可靠。' },
      { q: '支持哪些食材?', a: '20 种常见食材:中筋/高筋/低筋/全麦/杏仁粉,白砂糖/红糖/糖粉,黄油、植物油、牛奶、水、蜂蜜、熟米饭/生米、燕麦片、可可粉、巧克力豆、酸奶和花生酱。每种都有自己的克/杯值。' },
      { q: '能从克反算成杯吗?', a: '能。输入单位选克(或盎司),填入重量,即可得到所选食材对应的杯、汤匙和茶匙——这是对付纯称重写法的欧式食谱的常用办法。' },
    ],
    ui: {
      'amount': '数量',
      'convert': '换算',
      'copySummary': '复制摘要',
      'gPerCup': '克 / 美制杯',
      'ingredient': '食材',
      'note': '🧁 体积转重量取决于装杯密实度(过筛与舀入的面粉差约 20%)。本工具用标准"舀入刮平"均值;厨房秤永远最准。',
      'unit': '单位',
      'volume': '体积(美制)',
      'weight': '重量',
    },
  },
  es: {
    useCases: ['convertir tazas y cucharadas a gramos', 'medir ingredientes de repostería por densidad', 'pasar recetas en gramos a tazas', 'adaptar recetas europeas por peso a medidas en tazas'],
    faqs: [
      { q: '¿Por qué una taza de harina no es una de azúcar?', a: 'Las tazas miden volumen, pero los ingredientes difieren en densidad: una taza US de harina de trigo son unos 120 g y una de azúcar granulado, 200 g. Este conversor usa una tabla de densidades por ingrediente (base USDA), no un único factor.' },
      { q: '¿Cómo de preciso es?', a: 'Suficiente para hornear a diario: los valores son medias estándar de cuchara y rasero. Cómo llenes la taza mueve el resultado hasta ~20 % (harina tamizada frente a sacada a cuchara), así que para recetas delicadas como macarons o masa madre, la báscula sigue ganando.' },
      { q: '¿Qué ingredientes están incluidos?', a: 'Veinte habituales: harinas de trigo normal, de fuerza, floja, integral y de almendra; azúcar blanco, moreno y glas; mantequilla, aceite, leche, agua, miel, arroz cocido y crudo, copos de avena, cacao, chips de chocolate, yogur y crema de cacahuete.' },
      { q: '¿Puedo pasar de gramos a tazas?', a: 'Sí. Elige gramos (u onzas) como unidad de entrada, pon el peso y obtendrás tazas, cucharadas y cucharaditas para el ingrediente elegido — la solución típica para recetas europeas escritas solo por peso.' },
    ],
    ui: {
      'amount': 'Cantidad',
      'convert': 'Convertir',
      'copySummary': 'Copiar resumen',
      'gPerCup': 'g por taza (US)',
      'ingredient': 'Ingrediente',
      'note': '🧁 El volumen a peso depende de cómo llenes la taza (tamizada vs cuchareada difiere ~20 %). Usamos medias estándar; la báscula siempre gana.',
      'unit': 'Unidad',
      'volume': 'Volumen (EE. UU.)',
      'weight': 'Peso',
    },
  },
  de: {
    useCases: ['Tassen und Esslöffel in Gramm umrechnen', 'Backzutaten über die Dichte genau umrechnen', 'Rezepte in Gramm zurück in Tassen rechnen', 'europäische Gewichts- und US-Tassenrezepte vereinbaren'],
    faqs: [
      { q: 'Warum ist eine Tasse Mehl nicht eine Tasse Zucker?', a: 'Tassen messen Volumen, aber Zutaten unterscheiden sich in der Dichte: Eine US-Tasse Weizenmehl wiegt etwa 120 g, eine Tasse Kristallzucker 200 g. Dieser Konverter nutzt eine Dichtetabelle je Zutat (USDA-Grundlage), keinen pauschalen Faktor.' },
      { q: 'Wie genau ist das?', a: 'Für das tägliche Backen reicht es — die Werte sind Standardmittelwerte nach Löffel-und-abstreichen. Wie du die Tasse füllst, verschiebt das Ergebnis um bis zu ~20 % (gesiebtes vs. hineingeschaufeltes Mehl); bei empfindlichen Rezepten wie Makronen oder Sauerteig gewinnt dennoch die Küchenwaage.' },
      { q: 'Welche Zutaten sind enthalten?', a: 'Zwanzig gängige: Weizenmehl Typ 405, Brotmehl, Kuchenmehl, Vollkorn und Mandelmehl; Kristall-, Braun- und Puderzucker; Butter, Öl, Milch, Wasser, Honig, gegarter und roher Reis, Haferflocken, Kakao, Schokodrops, Joghurt und Erdnussbutter.' },
      { q: 'Kann ich von Gramm in Tassen umrechnen?', a: 'Ja. Wähle Gramm (oder Unzen) als Eingabeeinheit, gib das Gewicht ein und du erhältst Tassen, Ess- und Teelöffel für die gewählte Zutat — der übliche Trick für europäische Rezepte, die nur nach Gewicht geschrieben sind.' },
    ],
    ui: {
      'amount': 'Menge',
      'convert': 'Umrechnen',
      'copySummary': 'Zusammenfassung kopieren',
      'gPerCup': 'g pro US-Tasse',
      'ingredient': 'Zutat',
      'note': '🧁 Volumen zu Gewicht hängt von der Befüllung ab (gesiebt vs. gelöffelt ~20 % Unterschied). Wir nutzen Standardmittel; die Küchenwaage gewinnt immer.',
      'unit': 'Einheit',
      'volume': 'Volumen (US)',
      'weight': 'Gewicht',
    },
  },
}
