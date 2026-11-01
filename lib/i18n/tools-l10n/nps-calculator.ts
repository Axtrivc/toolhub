/**
 * nps-calculator 本地化 bundle —— zh / es / de(B5 平台费批次)
 * 覆盖:ui / useCases / faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const NpsCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['convertir las respuestas de la encuesta en puntuación NPS', 'saber si tu resultado es bueno según los niveles de Bain', 'comparar la evolución del boca a boca entre trimestres', 'informar a dirección de la tendencia de lealtad de clientes'],
    faqs: [
      { q: '¿Cómo se calcula el NPS?', a: 'Resta el porcentaje de detractores (0-6) al de promotores (9-10). Los pasivos (7-8) cuentan en el denominador pero se cancelan. Con 250 promotores, 90 pasivos y 60 detractores: 62,5% − 15% = 47,5, redondeado a +48.' },
      { q: '¿Qué se considera un buen NPS?', a: 'La lectura habitual de Bain: 0-30 está bien, 31-70 es muy bueno, 71 o más es excelente, y un valor negativo significa que hay más detractores que promotores. La mayoría de los sectores ronda el 30: compárate con tu industria, no con Apple.' },
      { q: '¿Por qué los pasivos no cuentan en la puntuación?', a: 'El NPS mide la recomendación activa, no la satisfacción. Los pasivos están contentos pero sin entusiasmo: ni te promocionan ni te dañan, solo diluyen el denominador. Convertir a unos pocos pasivos en promotores mueve la cifra con fuerza.' },
      { q: '¿Cuántas respuestas necesito para un NPS fiable?', a: 'Trátalo como una estadística con margen de error: con 100 respuestas, unos ±8-10 puntos; con 400, cerca de ±5. Sigue la tendencia entre oleadas y no reacciones a los vaivenes de una muestra pequeña.' },
    ],
    ui: {
      'in.promoters': 'Promotores (9-10)',
      'in.passives': 'Pasivos (7-8)',
      'in.detractors': 'Detractores (0-6)',
      'out.totalResponses': 'Respuestas totales',
      'out.npsScore': 'Puntuación NPS',
      'out.promotersPct': 'Promotores',
      'out.passivesPct': 'Pasivos',
      'out.detractorsPct': 'Detractores',
      'out.level': 'Nivel de referencia Bain',
      'chartTitle': 'NPS en la escala de -100 a +100',
      'zone.0': 'Negativo',
      'zone.1': 'Bien',
      'zone.2': 'Muy bueno',
      'zone.3': 'Excelente',
      'level.low': 'Necesita mejora urgente',
      'level.ok': 'Bien',
      'level.good': 'Muy bueno',
      'level.excellent': 'Excelente',
      'preset.0': 'En dificultades (-25, 1 000 resp.)',
      'preset.1': 'B2B sólido (+45, 1 000 resp.)',
      'preset.2': 'Clase mundial (+74, 1 000 resp.)',
      'errNonNegative': 'Los recuentos no pueden ser negativos',
      'errEmpty': 'Introduce al menos una respuesta',
      'note': '📊 Pregunta «¿Recomendarías...? (0-10)». Lectura de Bain: 0-30 bien, 31-70 muy bueno, 71+ excelente; por debajo de cero los detractores superan a los promotores. Los pasivos solo entran en el denominador; el NPS se redondea a entero.',
    },
  },
  de: {
    useCases: ['Umfrageantworten schnell in einen NPS-Score umrechnen', 'einordnen, ob das Ergebnis nach Bain-Stufen gut ist', 'die Mundpropaganda-Entwicklung über Quartale verfolgen', 'dem Management den Loyalitätstrend berichten'],
    faqs: [
      { q: 'Wie wird der NPS berechnet?', a: 'Zieh den Anteil der Kritiker (0-6) vom Anteil der Promotoren (9-10) ab. Passive (7-8) zählen nur in den Nenner. Bei 250 Promotoren, 90 Passiven und 60 Kritikern: 62,5 % − 15 % = 47,5, gerundet +48.' },
      { q: 'Was ist ein guter NPS-Wert?', a: 'Bains gängige Lesart: 0-30 gut, 31-70 sehr gut, 71+ exzellent; unter null überwiegen die Kritiker. Die meisten Branchen liegen im Bereich um 30 — vergleiche mit deiner Branche, nicht mit Apple.' },
      { q: 'Warum zählen Passive nicht in den Score?', a: 'Der NPS misst aktive Empfehlung, nicht Zufriedenheit. Passive sind zufrieden, aber unbegeistert — sie bewerben dich nicht und schaden dir nicht, sie verwässern nur den Nenner. Schon wenige Passive als Promotoren bewegen den Score spürbar.' },
      { q: 'Wie viele Antworten braucht ein belastbarer NPS?', a: 'Behandle ihn als Statistik mit Fehlermarge: bei 100 Antworten rund ±8-10 Punkte, bei 400 etwa ±5. Verfolge den Trend über mehrere Wellen statt auf kleine Stichproben-Schwankungen zu reagieren.' },
    ],
    ui: {
      'in.promoters': 'Promotoren (9-10)',
      'in.passives': 'Passive (7-8)',
      'in.detractors': 'Kritiker (0-6)',
      'out.totalResponses': 'Antworten gesamt',
      'out.npsScore': 'NPS-Score',
      'out.promotersPct': 'Promotoren',
      'out.passivesPct': 'Passive',
      'out.detractorsPct': 'Kritiker',
      'out.level': 'Bain-Einstufung',
      'chartTitle': 'NPS auf der Skala von -100 bis +100',
      'zone.0': 'Negativ',
      'zone.1': 'Gut',
      'zone.2': 'Sehr gut',
      'zone.3': 'Exzellent',
      'level.low': 'Dringend verbessern',
      'level.ok': 'Gut',
      'level.good': 'Sehr gut',
      'level.excellent': 'Exzellent',
      'preset.0': 'Kriselnd (-25, 1 000 Antw.)',
      'preset.1': 'Solides B2B (+45, 1 000 Antw.)',
      'preset.2': 'Weltklasse (+74, 1 000 Antw.)',
      'errNonNegative': 'Anzahlen dürfen nicht negativ sein',
      'errEmpty': 'Gib mindestens eine Antwort ein',
      'note': '📊 Frage: „Wie wahrscheinlich ist eine Empfehlung? (0-10)“. Bains Lesart: 0-30 gut, 31-70 sehr gut, 71+ exzellent; unter null überwiegen Kritiker. Passive zählen nur in den Nenner — der NPS wird auf eine ganze Zahl gerundet.',
    },
  },
}
