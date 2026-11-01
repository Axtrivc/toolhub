/**
 * roth-ira-calculator 本地化 bundle —— zh / es / de
 *
 * en 不在此(回退英文原值:lib/tool-faqs.ts、lib/tool-formulas.ts)。
 *
 * 覆盖:faqs(可见)+ useCases(Common uses)+ formula(公式区)。b00 新建,无 ui 块。
 */

import type { ToolL10n } from '../tool-l10n'

const FORMULA = 'FV = C × ((1+r)ⁿ − 1)/r · Roth net = FV × (1 − t_now) · Trad net = FV × (1 − t_retire)'

export const rothIraCalculatorL10n: ToolL10n = {



  // ──────────────────────────── Español ────────────────────────────
  es: {
    ui: {
      'in.age': 'Edad actual',
      'in.retireAge': 'Edad de jubilación',
      'in.contribution': 'Aportación anual',
      'in.currentTax': 'Tipo impositivo actual',
      'in.retireTax': 'Tipo impositivo en la jubilación',
      'in.returnRate': 'Rendimiento anual estimado',
      'out.verdict': 'Recomendación',
      'out.rothNet': 'Valor neto tras impuestos (Roth)',
      'out.tradNet': 'Valor neto tras impuestos (Trad.)',
      'out.rothBalance': 'Saldo en cuenta Roth',
      'outSub.rothBalance': 'Retiradas 100% libres de impuestos',
      'out.tradBalance': 'Saldo en cuenta Traditional',
      'outSub.tradBalance': 'Sujeto a IRPF íntegro al retirar',
      'out.taxOwed': 'Factura fiscal al jubilarse (Trad.)',
      'preset.0': 'Joven ahorrador (24% → 12%)',
      'preset.1': 'Ingresos máximos (32% → 22%)',
      'preset.2': 'Tipo constante (22% → 22%)',
      'errInvalid': 'Rellena todos los campos con números válidos',
      'errAge': 'La edad de jubilación debe ser mayor que la edad actual',
      'errRange': 'Las aportaciones o los tipos parecen poco realistas',
      'tie': 'Empate fiscal: elige por flexibilidad (Roth) o deducción hoy (Trad.)',
      'rothWins': 'Se estima que el Roth IRA te dejará',
      'tradWins': 'Se estima que el Trad. IRA te dejará',
      'more': 'más tras impuestos',
      'chartTitle': 'Crecimiento de saldo: Roth vs Traditional',
      'line.trad': 'Saldo Traditional (bruto)',
      'line.roth': 'Saldo Roth (aportación neta)',
      'note': '💡 El límite IRA para 2026 es de 7.500 $ (8.600 $ para mayores de 50 años). La diferencia clave radica en cuándo se pagan los impuestos.',
    },
    useCases: [
      '7000 $ al año al 7 % durante 30 años: ambos crecen a unos 661.000 $ brutos; con 22 % hoy y 32 % al jubilarse, el Roth saca unos 66.000 $ netos de ventaja',
      'arrancar la carrera con Roth (12-22 % marginal) y pasar a Tradicional en años de pico (24-32 %): comparar año a año el punto de cruce',
      'escenario 50+: el límite sube a 8600 $; los 1100 $ extra al año al 7 % acumulan unos 27.600 $ en 15 años',
      'poner a prueba la intuición «los impuestos subirán»: intercambia t_now y t_retire y compara los dos escenarios lado a lado',
    ],
    faqs: [
      {
        q: '¿Cuándo gana el Roth frente al Tradicional?',
        a: 'El Roth gana cuando tu tipo marginal actual es menor que el efectivo que esperas en la jubilación: primeros años de carrera, ingresos bajos o previsión de subidas de tipos. El Tradicional gana en años de pico retributivo: deducir al 24-32 % ahora y retirar al 10-12 % después.',
      },
      {
        q: '¿Cuál es el límite de aportación?',
        a: '7500 $ al año en 2026, más 1100 $ de catch-up a partir de los 50 (8600 $ en total). El límite se comparte entre Roth y Tradicional — aportar a ambos no lo duplica. El límite del 401(k) de tu empleador es aparte y mucho más alto.',
      },
      {
        q: '¿Tiene en cuenta los tramos de exclusión (phase-out)?',
        a: 'No — aísla la decisión de calendario fiscal haciendo crecer aportaciones idénticas en ambas cuentas. Las aportaciones Roth dejan de ser válidas por encima de ~153.000 $ (soltero) / 242.000 $ (matrimonio) en 2026, y la deducibilidad del Tradicional desaparece si tienes plan en la empresa. Consulta la Publicación 590-A del IRS.',
      },
      {
        q: '¿Cómo se relaciona con los planes de pensiones españoles?',
        a: 'Los planes de pensiones funcionan al revés del Roth: deducción hoy (dentro del límite del IRPF del trabajo) y tributación al rescatar. El Roth paga impuestos ahora y cobra libre después; conviene si esperas tipos marginales más altos en el futuro.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Aportaciones anuales idénticas C al rendimiento r durante n años (valor futuro de una anualidad). El Roth paga impuestos hoy: saldo menor, retiro exento; el Tradicional deduce hoy: saldo completo, gravado al tipo de jubilación t_retire. Tras impuestos decide solo t_now frente a t_retire.',
    },
  },

  // ──────────────────────────── Deutsch ────────────────────────────
  de: {
    ui: {
      'in.age': 'Aktuelles Alter',
      'in.retireAge': 'Renteneintrittsalter',
      'in.contribution': 'Jährlicher Sparbeitrag',
      'in.currentTax': 'Heutiger Steuersatz',
      'in.retireTax': 'Steuersatz im Ruhestand',
      'in.returnRate': 'Erwartete Jahresrendite',
      'out.verdict': 'Empfehlung',
      'out.rothNet': 'Netto-Endwert (Roth IRA)',
      'out.tradNet': 'Netto-Endwert (Trad. IRA)',
      'out.rothBalance': 'Guthaben im Roth-Konto',
      'outSub.rothBalance': 'Auszahlungen 100% steuerfrei',
      'out.tradBalance': 'Guthaben im Trad.-Konto',
      'outSub.tradBalance': 'Auszahlung voll steuerpflichtig',
      'out.taxOwed': 'Steuerlast bei Auszahlung (Trad.)',
      'preset.0': 'Berufseinsteiger (24% → 12%)',
      'preset.1': 'Spitzenverdiener (32% → 22%)',
      'preset.2': 'Konstanter Steuersatz (22% → 22%)',
      'errInvalid': 'Alle Felder mit gültigen Zahlen ausfüllen',
      'errAge': 'Renteneintrittsalter muss über aktuellem Alter liegen',
      'errRange': 'Beitrag oder Steuersatz unplausibel',
      'tie': 'Steuer-Gleichstand: Wähle nach Flexibilität (Roth) oder Steuerabzug heute (Trad.)',
      'rothWins': 'Mit dem Roth IRA erzielst du voraussichtlich',
      'tradWins': 'Mit dem Trad. IRA erzielst du voraussichtlich',
      'more': 'mehr nach Steuern',
      'chartTitle': 'Vermögenswachstum: Roth vs. Traditional',
      'line.trad': 'Traditional-Guthaben (brutto)',
      'line.roth': 'Roth-Guthaben (nach Steuern eingezahlt)',
      'note': '💡 Das IRA-Beitragslimit für 2026 beträgt 7.500 $ (8.600 $ ab 50 Jahren). Der Unterschied liegt rein im Besteuerungszeitpunkt.',
    },
    useCases: [
      '7000 $ jährlich bei 7 % über 30 Jahre: beide Konten wachsen auf rund 661.000 $ brutto; bei 22 % heute und 32 % im Ruhestand liegt Roth um etwa 66.000 $ vorn',
      'Berufseinstieg mit Roth (Grenzsteuersatz 12-22 %), Wechsel zu Traditional im Peak-Earnings-Jahr (24-32 %): Schnittpunkt Jahr für Jahr vergleichen',
      'Szenario 50+: das Limit steigt auf 8600 $; die zusätzlichen 1100 $ pro Jahr bringen bei 7 % rund 27.600 $ in 15 Jahren',
      'die Intuition »die Steuern steigen noch« prüfen: t_now und t_retire tauschen und beide Durchläufe gegenüberstellen',
    ],
    faqs: [
      {
        q: 'Wann ist ein Roth IRA besser als ein Traditional IRA?',
        a: 'Roth gewinnt, wenn dein heutiger Grenzsteuersatz unter dem effektiven Satz im Ruhestand liegt: Berufseinstieg, niedriges Einkommen oder erwartete Steuererhöhungen. Traditional gewinnt im Peak-Earnings-Jahr: heute mit 24-32 % absetzen, später mit 10-12 % entnehmen.',
      },
      {
        q: 'Wie hoch ist das Beitragslimit?',
        a: '7500 $ pro Jahr (2026), ab 50 weitere 1100 $ catch-up (zusammen 8600 $). Das Limit gilt für Roth und Traditional zusammen — zwei Konten verdoppeln es nicht. Das 401(k)-Limit des Arbeitgebers ist separat und deutlich höher.',
      },
      {
        q: 'Berücksichtigt der Rechner die Einkommens-Phase-outs?',
        a: 'Nein — er isoliert die Steuer-Timing-Entscheidung, indem er identische Beiträge in beiden Konten wachsen lässt. Roth-Beiträge laufen 2026 ab ca. 153.000 $ (Ledige) / 242.000 $ (Verheiratete) aus; die Traditional-Absetzbarkeit ebenfalls, wenn ein Firmenplan existiert. Details: IRS Publication 590-A.',
      },
      {
        q: 'Gibt es eine deutsche Entsprechung?',
        a: 'Kein 1:1-Pendant; am nächsten kommt die Wahl zwischen vorgelagerter Abzugsfähigkeit (klassische Vorsorge) und nachgelagerter Besteuerung. Das Prinzip — heute niedriger Grenzsteuersatz spricht für Nachversteuerung, heute hoher für Sofortabzug — gilt aber überall, etwa bei Rürup oder betrieblicher Altersvorsorge.',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: 'Identische Jahresbeiträge C wachsen mit Rendite r über n Jahre (Endwert einer Rente). Roth versteuert vorab: kleineres Guthaben, steuerfreie Auszahlung; Traditional zieht heute ab: volles Guthaben, im Ruhestand mit t_retire versteuert. Nach Steuern entscheidet allein t_now gegen t_retire.',
    },
  },
}
