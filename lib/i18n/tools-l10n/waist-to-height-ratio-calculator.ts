/**
 * waist-to-height-ratio-calculator 本地化 bundle —— zh / es / de(2026-10 B6 健身批)
 * 覆盖: ui / faqs / useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const WaistToHeightRatioCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['autochequeo con la regla «cintura menor que media talla»', 'detectar obesidad oculta con BMI normal', 'saber qué cintura te devuelve al 0,5', 'seguir el perímetro abdominal durante el cutting'],
    faqs: [
      { q: '¿Dónde se mide la cintura?', a: 'En el punto medio entre la última costilla y la cresta ilíaca, con la cinta horizontal, ajustada sin comprimir, al final de una exhalación normal. Medir sobre la ropa o conteniendo el aire son los dos errores habituales y pueden bajar el cociente 0,03-0,05.' },
      { q: '¿Por qué el umbral 0,5?', a: 'Varias revisiones sistemáticas (p. ej. las de Ashwell) respaldan que una cintura igual a media talla marca el inicio del riesgo de obesidad central y resistencia a la insulina. Entre 0,4 y 0,5 los marcadores metabólicos suelen ser óptimos; de 0,5 a 0,6 el riesgo sube; por encima de 0,6, se dispara.' },
      { q: '¿En qué mejora al IMC?', a: 'El IMC no distingue músculo de grasa visceral: marca como sobrepeso a gente musculosa y se pierde la «obesidad oculta» de peso normal con cintura alta. El WHtR mide directamente el depósito abdominal y no necesita tablas por edad ni sexo.' },
      { q: '¿Sirve para niños y mayores?', a: 'Desde unos 5 años el mismo corte de 0,5 funciona como cribado —esa es su ventaja frente a los percentiles del IMC—. Por debajo de esa edad usa percentiles específicos y consulta con pediatría si hay dudas.' },
    ],
    ui: {
      'in.waist': 'Perímetro de cintura',
      'in.height': 'Talla',
      'out.whtr': 'Cintura-talla',
      'outSub.whtr': 'Cintura ÷ talla',
      'out.category': 'Categoría de riesgo',
      'out.healthyWaist': 'Cintura para WHtR 0,5',
      'outSub.healthyWaist': 'La mitad de tu talla',
      'out.toTrim': 'Para volver al rango sano',
      'cat.slim': 'Delgado — vigila la nutrición global',
      'cat.healthy': 'Sano — sigue así',
      'cat.increased': 'Riesgo aumentado — actúa ya',
      'cat.high': 'Riesgo alto — consulta a un profesional',
      'already': 'Ya estás en el rango sano',
      'errInvalid': 'La cintura y la talla deben ser mayores que cero',
      'chartTitle': 'Tu cintura-talla en la escala',
      'zone.0': 'Delgado',
      'zone.1': 'Sano',
      'zone.2': 'Riesgo aumentado',
      'zone.3': 'Riesgo alto',
      'preset.0': 'Sano ≈ 0,45',
      'preset.1': 'Aumentado ≈ 0,55',
      'preset.2': 'Alto ≈ 0,65',
      'note': '📏 Mide en el punto medio entre la última costilla y la cresta de la cadera, tras una exhalación normal. La regla del 0,5 —«cintura menor que media talla»— detecta riesgo cardiometabólico mejor que el IMC solo y no necesita ajustes por edad ni sexo.',
    },
  },
  de: {
    useCases: ['Selbstcheck mit der Regel „Bauchumfang unter halber Körpergröße“', 'verstecktes Bauchfett bei normalem BMI entdecken', 'den Zielumfang für WHtR 0,5 erfahren', 'den Umfang während der Diät verfolgen'],
    faqs: [
      { q: 'Wo genau wird gemessen?', a: 'Auf halber Strecke zwischen dem unteren Rippenrand und dem Darmbeinkamm, Maßband waagerecht, anliegend ohne einzuengen, am Ende einer normalen Ausatmung. Über der Kleidung oder mit angehaltenem Atem zu messen sind die klassischen Fehler und drücken den Wert um 0,03-0,05 nach unten.' },
      { q: 'Warum die 0,5-Grenze?', a: 'Mehrere systematische Übersichtsarbeiten (u. a. von Ashwell) stützen: Ab einem Umfang von der halben Körpergröße steigt das Risiko für zentrale Adipositas und Insulinresistenz. Zwischen 0,4 und 0,5 sind die Stoffwechselwerte meist am besten; 0,5-0,6 erhöht, über 0,6 deutlich erhöht das Risiko.' },
      { q: 'Was macht den WHtR besser als den BMI?', a: 'Der BMI trennt Muskeln nicht von viszeralem Fett — Muskelöse gelten schnell als übergewichtig, während „normalgewichtig mit dickem Bauch“ ganz untergeht. Der WHtR misst die abdominale Fetteinlagerung direkt und braucht keine Alters- oder Geschlechtstabellen.' },
      { q: 'Gilt das auch für Kinder und Ältere?', a: 'Ab etwa 5 Jahren funktioniert dieselbe 0,5-Grenze als Screening — das ist sein Vorteil gegenüber BMI-Perzentilen. Darunter besser altersspezifische Perzentilen nutzen und im Zweifel die Kinderarztpraxis fragen.' },
    ],
    ui: {
      'in.waist': 'Bauchumfang',
      'in.height': 'Körpergröße',
      'out.whtr': 'Taille-zu-Größe',
      'outSub.whtr': 'Umfang ÷ Größe',
      'out.category': 'Risikokategorie',
      'out.healthyWaist': 'Umfang bei WHtR 0,5',
      'outSub.healthyWaist': 'Die Hälfte deiner Größe',
      'out.toTrim': 'Bis zum gesunden Bereich',
      'cat.slim': 'Schlank — auf Gesamternährung achten',
      'cat.healthy': 'Gesund — so bleiben',
      'cat.increased': 'Erhöhtes Risiko — jetzt handeln',
      'cat.high': 'Hohes Risiko — ärztlich abklären',
      'already': 'Bereits im gesunden Bereich',
      'errInvalid': 'Umfang und Größe müssen über null liegen',
      'chartTitle': 'Dein WHtR auf der Skala',
      'zone.0': 'Schlank',
      'zone.1': 'Gesund',
      'zone.2': 'Erhöhtes Risiko',
      'zone.3': 'Hohes Risiko',
      'preset.0': 'Gesund ≈ 0,45',
      'preset.1': 'Erhöht ≈ 0,55',
      'preset.2': 'Hoch ≈ 0,65',
      'note': '📏 Miss auf halber Strecke zwischen unterem Rippenrand und Hüftkamm nach einer normalen Ausatmung. Die 0,5-Regel — „Bauchumfang unter der halben Körpergröße“ — erkennt kardiometabolisches Risiko besser als BMI allein und braucht keine Alters- oder Geschlechtskorrektur.',
    },
  },
}
