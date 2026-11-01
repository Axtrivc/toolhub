/**
 * intermittent-fasting-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts)。
 *
 * 覆盖:faqs(可见)+ useCases(Common uses)+ formula(公式区)。b00 新建,无 ui 块。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'eating window = first meal → first meal + E · fasting = first meal + E → first meal + 24'

export const intermittentFastingCalculatorL10n: ToolL10n = {



  // ──────────────────────────── Español ────────────────────────────
  es: {
    ui: {
      'model': 'Protocolo de ayuno',
      'opt16-8': '16h ayuno',
      'opt18-6': '18h ayuno',
      'opt20-4': '20h ayuno',
      'opt14-10': '14h ayuno',
      'blurb16-8': 'El protocolo más popular para principiantes',
      'blurb18-6': 'Ventana de quema de grasa más constante',
      'blurb20-4': 'Estilo dieta del guerrero, avanzado',
      'blurb14-10': 'Inicio suave, adecuado para principiantes',
      'firstMeal': 'Primera comida del día',
      'eatingWindow': 'Ventana de alimentación',
      'fastingWindow': 'Ventana de ayuno',
      'statusEating': '🥗 Ventana de comida abierta',
      'statusFasting': '🔥 Ayunando · Modo quema de grasa',
      'untilClose': 'hasta que se cierre la ventana de comida',
      'untilOpen': 'hasta que se abra tu ventana de comida',
      'statusLoading': 'Cargando cuenta atrás en directo…',
      'timelineTitle': 'Tu cronograma metabólico de 24 horas',
      'tlEating': 'Ventana de alimentación',
      'nowCursor': 'Ahora',
      'thPhase': 'Fase',
      'thWhen': 'Tiempo de ayuno',
      'thClock': 'Hora del reloj',
      'thWhat': 'Qué ocurre en tu cuerpo',
      'phase0': 'Digestión',
      'phaseDesc0': 'Sube el azúcar y la insulina en sangre',
      'phase4': 'Absorción',
      'phaseDesc4': 'El azúcar en sangre vuelve a bajar',
      'phase8': 'Uso de glucógeno',
      'phaseDesc8': 'El glucógeno hepático se agota',
      'phase12': 'Quema de grasa',
      'phaseDesc12': 'Empieza la cetosis (grasa → cetonas)',
      'phase16': 'Cetosis profunda',
      'phaseDesc16': 'La autofagia se acelera (est.)',
      'summaryTitle': 'Plan de ayuno intermitente',
      'sProtocol': 'Protocolo',
      'sFirstMeal': 'Primera comida',
      'sEatingWindow': 'Ventana de comida',
      'sFastingWindow': 'Ventana de ayuno',
      'sNow': 'Estado actual',
      'sEating': 'Ventana de comida abierta',
      'sFasting': 'Ayunando',
      'sUntilClose': 'hasta el cierre',
      'sUntilOpen': 'hasta la apertura',
      'csvField': 'Campo',
      'csvValue': 'Valor',
      'copySummary': 'Copiar resumen',
      'note': '⏰ Los tiempos de las fases (cetosis ≈ 12 h+, autofagia ≈ 16-24 h) son estimaciones basadas en estudios: los cambios metabólicos reales varían según lo que y cuánto comas, tu actividad y tu cuerpo. Este planificador es información general, no consejo médico; embarazadas, lactantes, personas con diabetes o bajo peso deben consultar a un médico antes de ayunos prolongados.',
    },
    useCases: [
      'montar un 16:8: primera comida a las 12:00, ventana hasta las 20:00, cuenta atrás hasta el marcador de cetosis (12 h aprox.)',
      'pasar de 14:10 a 16:8: recortar 30 minutos por semana y ver cuándo entra en la línea temporal el marcador de autofagia (16-24 h)',
      'adaptarlo a turnos de noche: con la hora real de la primera comida, el 18:6 se recalcula hasta la primera comida del día siguiente',
      'cazar calorías invisibles: un latte con leche (60 kcal aprox.) reinicia el reloj; el café solo y el té sin azúcar no',
    ],
    faqs: [
      {
        q: '¿Qué horario es mejor para empezar?',
        a: 'La mayoría arranca con 16:8 (16 horas de ayuno, 8 de comida) o con el más suave 14:10. La constancia pesa más que la intensidad: una ventana moderada que mantienes a diario vale más que una agresiva que abandonas.',
      },
      {
        q: '¿Cuándo empiezan la cetosis y la autofagia?',
        a: 'La quema de grasa (cetosis) se vuelve significativa hacia las 12+ horas tras la última comida, cuando se agota el glucógeno hepático; procesos de limpieza celular como la autofagia aceleran entre las 16 y 24 horas. Varía con el tamaño de la comida, la actividad y tu cuerpo — la línea temporal los marca como estimaciones.',
      },
      {
        q: '¿El café rompe el ayuno?',
        a: 'Agua, café solo y té sin azúcar se consideran compatibles con el ayuno. Cualquier cosa con calorías — nata, azúcar o un latte «pequeño» — termina el estado de ayuno y reinicia el reloj.',
      },
      {
        q: '¿Puedo entrenar en ayunas?',
        a: 'Sí para sesiones suaves o moderadas; para series intensas conviene algo de hidratos. La línea temporal sigue corriendo: entrenar no la reinicia, pero un café con leche (unas 60 kcal) sí — por eso cuenta como primera comida si mides el ayuno estricto.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Derivación del horario F:E: la ventana de comida abre con la primera comida y cierra E horas después; el ayuno corre F horas hasta la primera comida del día siguiente (F = 24 − E). Los marcadores metabólicos (cetosis ≈ 12 h+, autofagia ≈ 16-24 h) son estimaciones añadidas a la línea temporal.',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    ui: {
      'model': 'Fasten-Protokoll',
      'opt16-8': '16h Fasten',
      'opt18-6': '18h Fasten',
      'opt20-4': '20h Fasten',
      'opt14-10': '14h Fasten',
      'blurb16-8': 'Das beliebteste Protokoll für Einsteiger',
      'blurb18-6': 'Stabilere Fettverbrennungsphase',
      'blurb20-4': 'Warrior-Diät-Stil, fortgeschritten',
      'blurb14-10': 'Sanfter, einsteigerfreundlicher Einstieg',
      'firstMeal': 'Erste Mahlzeit des Tages',
      'eatingWindow': 'Essensfenster',
      'fastingWindow': 'Fastenfenster',
      'statusEating': '🥗 Essensfenster geöffnet',
      'statusFasting': '🔥 Fastenphase · Fettverbrennungsmodus',
      'untilClose': 'bis das Essensfenster schließt',
      'untilOpen': 'bis dein Essensfenster öffnet',
      'statusLoading': 'Live-Countdown wird geladen…',
      'timelineTitle': 'Dein 24-Stunden-Stoffwechsel-Zeitplan',
      'tlEating': 'Essensfenster',
      'nowCursor': 'Jetzt',
      'thPhase': 'Phase',
      'thWhen': 'Fastendauer',
      'thClock': 'Uhrzeit',
      'thWhat': 'Stoffwechselprozess',
      'phase0': 'Verdauung',
      'phaseDesc0': 'Blutzucker & Insulin steigen',
      'phase4': 'Resorption',
      'phaseDesc4': 'Blutzucker sinkt wieder ab',
      'phase8': 'Glykogenverbrennung',
      'phaseDesc8': 'Leberglykogen wird aufgebraucht',
      'phase12': 'Fettverbrennung',
      'phaseDesc12': 'Ketose beginnt (Fett → Ketone)',
      'phase16': 'Tiefe Ketose',
      'phaseDesc16': 'Autophagie nimmt zu (geschätzt)',
      'summaryTitle': 'Intervallfasten-Plan',
      'sProtocol': 'Protokoll',
      'sFirstMeal': 'Erste Mahlzeit',
      'sEatingWindow': 'Essensfenster',
      'sFastingWindow': 'Fastenfenster',
      'sNow': 'Aktueller Status',
      'sEating': 'Essensfenster geöffnet',
      'sFasting': 'Im Fasten',
      'sUntilClose': 'bis zum Ende',
      'sUntilOpen': 'bis zum Beginn',
      'csvField': 'Feld',
      'csvValue': 'Wert',
      'copySummary': 'Zusammenfassung kopieren',
      'note': '⏰ Die Phasenzeitpunkte (Ketose ≈ 12 h+, Autophagie ≈ 16-24 h) sind forschungsbasierte Schätzungen — die tatsächlichen Stoffwechselwechsel hängen davon ab, was und wie viel du isst, sowie von Aktivität und Körper. Dieser Planer ist allgemeine Information, keine medizinische Beratung; Schwangere, Stillende, Diabetiker oder Untergewichtige sollten vor verlängertem Fasten ärztlichen Rat einholen.',
    },
    useCases: [
      '16:8 einrichten: erste Mahlzeit 12:00, Fenster bis 20:00, Countdown bis zum Ketose-Marker (ca. 12 h)',
      'von 14:10 zu 16:8 steigern: wöchentlich 30 Minuten kürzen und beobachten, wann der Autophagie-Marker (16-24 h) auftaucht',
      'an Schichtdienst anpassen: mit der echten ersten Mahlzeit rechnet der 18:6-Plan bis zur ersten Mahlzeit des Folgetags',
      'versteckten Fastenbruch finden: Milchkaffee (ca. 60 kcal) setzt die Uhr zurück — schwarzer Kaffee und ungesüßter Tee nicht',
    ],
    faqs: [
      {
        q: 'Welcher Plan eignet sich für Anfänger?',
        a: 'Die meisten starten mit 16:8 (16 Stunden fasten, 8 essen) oder dem sanfteren 14:10. Beständigkeit schlägt Intensität — ein moderates Fenster, das du täglich hältst, schlägt ein aggressives, das du nach drei Tagen aufgibst.',
      },
      {
        q: 'Wann starten Fettketose und Autophagie?',
        a: 'Die Fettverbrennung (Ketose) wird etwa 12+ Stunden nach der letzten Mahlzeit deutlich, wenn das Leberglykogen zur Neige geht; zelluläre Aufräumprozesse wie Autophagie ziehen zwischen 16 und 24 Stunden an. Die Zeiten hängen von Mahlzeit, Aktivität und Körper ab — die Zeitachse markiert sie als Schätzungen.',
      },
      {
        q: 'Bricht Kaffee das Fasten?',
        a: 'Wasser, schwarzer Kaffee und ungesüßter Tee gelten als fastenkompatibel. Alles mit Kalorien — Sahne, Zucker oder ein „kleiner“ Latte — beendet den Nüchternzustand und stellt die Uhr zurück.',
      },
      {
        q: 'Worauf achten im Essensfenster?',
        a: 'Auf Eiweiß (1,2-1,6 g pro kg Körpergewicht) und Gesamtkalorien: 16:8 regelt nur das Wann, nicht das Was. Wer im 8-Stunden-Fenster überisst, hebt den größten Teil des Effekts auf; die Zeitachse misst Stunden, keine Essensqualität.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Ableitung des F:E-Plans: Das Essensfenster öffnet mit der ersten Mahlzeit und schließt E Stunden später; das Fasten läuft F Stunden bis zur ersten Mahlzeit des Folgetags (F = 24 − E). Stoffwechselmarker (Ketose ≈ 12 h+, Autophagie ≈ 16-24 h) sind forschungsbasierte Schätzungen auf der Zeitachse.',
    },
  },
}
