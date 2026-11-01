/**
 * christmas-budget-calculator 本地化 bundle —— zh / es / de(B4 家庭与人生大事批)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const ChristmasBudgetCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['repartir el presupuesto festivo en regalos, decoración y comida', 'calcular cuánto por persona según tu lista', 'asegurar una parte razonable para familia, amigos y compañeros', 'fijar el tope antes de evitar el susto de la tarjeta en enero'],
    faqs: [
      { q: '¿En qué proporciones se reparte?', a: 'Reparto típico: regalos 70%, decoración 15%, comida y reuniones 15%. Dentro del fondo de regalos: familia 60%, amigos 30%, compañeros 10% — la cercanía fija el gasto unitario, la estructura que coincide con casi todas las guías de gasto navideño.' },
      { q: '¿Cómo sale el importe por persona?', a: 'Lo que recibe cada grupo ÷ su número de personas. Con 800 $: el fondo de regalos son 560 $ — familia 336 $ (5 personas ≈ 67 $), amigos 168 $ (6 = 28 $), compañeros 56 $ (4 = 14 $). Cambia un número y el por cabeza se recalcula solo.' },
      { q: '¿Cuánto «debería» gastar por cabeza?', a: 'No hay respuesta única; el método presupuestario es «el total fija el marco, las proporciones la estructura, el censo el precio unitario». Define primero lo que puedes permitirte y deja que la calculadora reparta — la mayoría de hogares supera el gasto en 30%+ precisamente por empezar por la tienda.' },
      { q: '¿Cómo evitar el susto de enero?', a: 'Fija el total en octubre, cierra la lista antes del Black Friday y no pases de 1,5 × el por-cabeza previsto en una sola compra. Anota los números por persona en tu lista y revísalos antes de pagar — la «deriva presupuestaria» vive en las compras de última semana.' },
    ],
    ui: {
      'chartTitle': 'Composición del presupuesto festivo',
      'chartCenter': 'Total',
      'preset.0': 'Año ajustado',
      'preset.1': 'Año típico',
      'preset.2': 'Familia grande',
      'slice.giftPool': 'Regalos 70%',
      'slice.decor': 'Decoración 15%',
      'slice.food': 'Comida 15%',
      'in.total': 'Presupuesto festivo total',
      'in.family': 'Personas de familia',
      'in.friends': 'Amigos',
      'in.coworkers': 'Compañeros',
      'out.giftPool': 'Fondo de regalos (70%)',
      'out.perFamily': 'Por cada familiar',
      'out.perFriend': 'Por cada amigo',
      'out.perCoworker': 'Por cada compañero',
      'out.decor': 'Decoración (15%)',
      'out.food': 'Comida y fiestas (15%)',
      'outSub.giftPool': 'familia 60% / amigos 30% / compañeros 10%',
      'note': '🎄 Reparto típico 70/15/15 (regalos/decoración/comida), con el fondo de regalos ponderado 60/30/10 entre familia, amigos y compañeros. El trabajo real es la ejecución: lleva los números por persona a tu lista de compras — el «compra extra» de la última semana es lo que dispara el gasto.',
      'errInvalid': 'Introduce un presupuesto y unos conteos no negativos',
    },
  },
  de: {
    useCases: ['das Festbudget auf Geschenke, Deko und Essen aufteilen', 'das Pro-Kopf-Budget nach Empfängerliste berechnen', 'Familie, Freunde und Kollegen fair gewichten', 'das Limit vorab festlegen statt im Januar zu erschrecken'],
    faqs: [
      { q: 'In welchen Proportionen wird verteilt?', a: 'Typisch: Geschenke 70%, Deko 15%, Essen und Feiern 15%. Innerhalb des Geschenketopfes: Familie 60%, Freunde 30%, Kollegen 10% — die Nähe bestimmt den Pro-Kopf-Satz; das ist die Struktur, die fast alle Weihnachtsbudget-Leitfäden teilen.' },
      { q: 'Wie entsteht der Pro-Kopf-Betrag?', a: 'Gruppenbudget ÷ Personenzahl. Bei 800 $ sind 560 $ Geschenketopf — Familie 336 $ (5 Personen ≈ 67 $), Freunde 168 $ (6 = 28 $), Kollegen 56 $ (4 = 14 $). Ändert sich eine Zahl, rechnet sich der Pro-Kopf-Wert neu.' },
      { q: 'Wie viel pro Person ist „passend“?', a: 'Darauf gibt es keine alleinige Antwort; die Budget-Methode lautet: „Die Summe setzt den Rahmen, die Proportionen die Struktur, die Liste den Stückpreis.“ Lege zuerst fest, was tragbar ist, und lass den Rechner verteilen — die meisten Haushalte überschreiten um 30%+, weil sie im Laden anfangen.' },
      { q: 'Wie vermeidet man den Januar-Schock?', a: 'Summe im Oktober fixieren, Liste vor dem Black Friday abschließen, keine Einzelkäufe über dem 1,5-fachen Pro-Kopf-Satz. Schreib die Zahlen in die Einkaufsliste und prüfe vor dem Bezahlen — die „Budgetdrift“ entsteht in den Käufen der letzten Woche.' },
    ],
    ui: {
      'chartTitle': 'Zusammensetzung des Festbudgets',
      'chartCenter': 'Gesamt',
      'preset.0': 'Karges Jahr',
      'preset.1': 'Typisches Jahr',
      'preset.2': 'Große Familie',
      'slice.giftPool': 'Geschenke 70%',
      'slice.decor': 'Deko 15%',
      'slice.food': 'Essen 15%',
      'in.total': 'Gesamtes Festbudget',
      'in.family': 'Familienmitglieder',
      'in.friends': 'Freunde',
      'in.coworkers': 'Kollegen',
      'out.giftPool': 'Geschenketopf (70%)',
      'out.perFamily': 'Pro Familienmitglied',
      'out.perFriend': 'Pro Freund',
      'out.perCoworker': 'Pro Kollege',
      'out.decor': 'Deko (15%)',
      'out.food': 'Essen & Feiern (15%)',
      'outSub.giftPool': 'Familie 60% / Freunde 30% / Kollegen 10%',
      'note': '🎄 Typische Aufteilung 70/15/15 (Geschenke/Deko/Essen), Geschenketopf gewichtet 60/30/10 auf Familie, Freunde, Kollegen. Die eigentliche Arbeit ist die Umsetzung: nimm die Pro-Kopf-Zahlen in die Einkaufsliste — die Zugeständnisse der letzten Woche sprengen das Budget.',
      'errInvalid': 'Gib ein nicht-negatives Budget und nicht-negative Anzahlen ein',
    },
  },
}
