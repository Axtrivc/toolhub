/**
 * 401k-match-calculator 本地化 bundle —— zh / es / de(B4 家庭与人生大事批)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const Match401kCalculatorL10n: ToolL10n = {

  es: {
    useCases: ['calcular cuánto vale al año el matching de tu empleador', 'comprobar si tu aporte alcanza el tope del matching', 'saber cuánto «dinero gratis» dejas sobre la mesa', 'decir si conviene subir tu porcentaje de aporte'],
    faqs: [
      { q: '¿Qué significa «50% up to 6%»?', a: 'Por cada dólar que aportas, el empleador añade 50 centavos, pero solo sobre el primer 6% de tu salario. Con 75 000 $ al año y un aporte del 6%, el matching máximo es de 2 250 $; aportando solo el 4%, recibes 1 500 $.' },
      { q: '¿Cómo se calcula el «dinero gratis» perdido?', a: 'El matching máximo menos el matching que recibes hoy. Se acumula año tras año — una década sin llegar al 6% son 7 500 $ aportados por el empleador que rechazaste, sin contar su crecimiento posterior.' },
      { q: '¿Cuál es el límite de aporte en 2026?', a: 'Para empleados menores de 50 años, el límite de aplazamiento elective es de 24 500 $ en 2026 (23 500 $ en 2025; hay aportaciones adicionales desde los 50). El matching lo paga el empleador y no consume tu límite personal, aunque el IRS limita el combined como % del salario.' },
      { q: '¿Afecta el vesting al resultado?', a: 'Sí. La herramienta calcula lo que el empleador «pone»; si te vas antes de cumplir el vesting, puedes perder parte o todo el matching. Lo habitual es cliff de 3-5 años o gradual anual — revisa el documento del plan.' },
    ],
    ui: {
      'chartTitle': 'Dinero anual que entra en tu 401(k)',
      'chartCenter': 'Total anual',
      'preset.0': 'Típico: 50% hasta 6%',
      'preset.1': 'Dólar por dólar hasta 4%',
      'preset.2': 'Generoso: 100% hasta 5%',
      'slice.yourContribution': 'Tu aporte',
      'slice.employerMatch': 'Matching del empleador',
      'slice.unclaimedMatch': 'Matching sin reclamar',
      'in.salary': 'Salario anual',
      'in.contribPct': 'Tu % de aporte',
      'in.matchPct': 'Tasa de matching',
      'in.matchLimitPct': 'Tope salarial del matching',
      'out.yourContribution': 'Tu aporte anual',
      'out.employerMatch': 'Matching anual',
      'out.maxMatch': 'Matching máximo posible',
      'out.unclaimedMatch': 'Dinero gratis perdido',
      'outSub.unclaimedMatch': 'sube tu % para capturarlo',
      'note': '💰 Las fórmulas varían: dólar por dólar (100% up to X%) es la más generosa; 50% up to 6% la más común. El matching se detiene en el tope — aportar de más sigue creciendo a favor de impuestos, pero sin matching extra. Captura el matching antes que cualquier otra cosa. Topes del IRS (2026): aportes propios hasta 24 500 $/año; el matching se calcula sobre una retribución de hasta 360 000 $.',
      'errInvalid': 'Introduce un salario válido y porcentajes no negativos (matching ≤ 100%)',
    },
  },
  de: {
    useCases: ['ausrechnen, wie viel der Arbeitgeber-Match pro Jahr wert ist', 'prüfen, ob der eigene Beitrag das Match-Limit erreicht', 'sehen, wie viel „gratis Geld“ liegen bleibt', 'entscheiden, ob der eigene Beitragssatz steigen sollte'],
    faqs: [
      { q: 'Was bedeutet „50 % up to 6 %“?', a: 'Zu jedem eingezahlten Dollar legt der Arbeitgeber 50 Cent dazu — aber nur auf die ersten 6% des Gehalts. Bei 75.000 $ Jahresgehalt und 6% Eigenanteil sind das bis zu 2.250 $ Match pro Jahr; bei nur 4% Eigenanteil gibt es 1.500 $.' },
      { q: 'Wie wird das liegen gelassene „gratis Geld“ berechnet?', a: 'Maximaler Match minus tatsächlich erhaltener Match. Das summiert sich: Ein Jahrzehnt unter 6% sind im Beispiel 7.500 $ abgelehnter Arbeitgeberbeitrag — ohne dessen spätere Wertsteigerung.' },
      { q: 'Wie hoch ist die Einzahlungsgrenze 2026?', a: 'Für unter 50-Jährige liegt das Elective-Deferral-Limit 2026 bei 24.500 $ (2025: 23.500 $; ab 50 gibt es Zusatzbeiträge). Der Match zahlt der Arbeitgeber und zählt nicht gegen dein persönliches Limit; der IRS begrenzt aber die Summe als Prozentsatz des Gehalts.' },
      { q: 'Spielt Vesting eine Rolle?', a: 'Ja. Der Rechner zeigt, was der Arbeitgeber „hineinlegt“ — wer vor Erfüllung der Vesting-Frist geht, verliert Teil oder alles vom Match. Üblich sind Cliff-Vesting über 3-5 Jahre oder jährlich gestaffelt; Details stehen im Plan-Dokument.' },
    ],
    ui: {
      'chartTitle': 'Geld pro Jahr im 401(k)',
      'chartCenter': 'Jahressumme',
      'preset.0': 'Typisch: 50 % bis 6 %',
      'preset.1': 'Dollar für Dollar bis 4 %',
      'preset.2': 'Großzügig: 100 % bis 5 %',
      'slice.yourContribution': 'Deine Einzahlung',
      'slice.employerMatch': 'Arbeitgeber-Match',
      'slice.unclaimedMatch': 'Ungenutzter Match',
      'in.salary': 'Jahresgehalt',
      'in.contribPct': 'Dein Einzahlungssatz',
      'in.matchPct': 'Match-Quote',
      'in.matchLimitPct': 'Gehaltsobergrenze für Match',
      'out.yourContribution': 'Deine Jahreseinzahlung',
      'out.employerMatch': 'Jährlicher Match',
      'out.maxMatch': 'Maximal möglicher Match',
      'out.unclaimedMatch': 'Liegengelassenes Gratis-Geld',
      'outSub.unclaimedMatch': 'mit höherem Satz holbar',
      'note': '💰 Die Formeln variieren: Dollar-für-Dollar (100% up to X%) ist am großzügigsten, 50% up to 6% am häufigsten. Der Match endet am Limit — mehr Einzahlung wächst weiter steuerbegünstigt, aber ohne Zusatz-Match. Erst den Match sichern, dann alles andere. IRS-Grenzen 2026: Eigene Einzahlungen maximal 24.500 $/Jahr; der Match wird auf Gehalt bis 360.000 $ berechnet.',
      'errInvalid': 'Gib ein gültiges Gehalt und nicht-negative Prozente ein (Match ≤ 100%)',
    },
  },
}
