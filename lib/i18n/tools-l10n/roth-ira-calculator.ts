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
  // ──────────────────────────── 中文 ────────────────────────────
  zh: {
    useCases: [
      '同样每年 7000 美元、7% 回报、存 30 年:两账户税前都约 66 万美元,输入 22% 与 32% 两档税率,税后差约 6.6 万美元',
      '职业早期税率 12%-22% 时优先 Roth,进入 24%-32% 收入峰值期换传统账户,逐年比出切换点',
      '50 岁以上补缴场景:限额升到 8000 美元,每年多出的 1000 美元按 7% 年金复利 15 年累计约 2.5 万美元',
      '压力测试「退休税率更高」的直觉:把 t_now 与 t_retire 对调各跑一遍,胜负和差距一目了然',
    ],
    faqs: [
      {
        q: 'Roth IRA 什么时候比 Traditional 更划算?',
        a: '当现在的边际税率低于你预期的退休税率时,Roth 赢:职业生涯早期、低收入年份,或预判税率上行时。Traditional 在收入峰值年更优——现在按 24%-32% 抵扣,退休后按 10%-12% 提取。',
      },
      {
        q: '每年能存多少?',
        a: '2025 年上限 7000 美元,50 岁及以上另有 1000 美元追加(合计 8000)。该限额在 Roth 与 Traditional 之间共享,同时开两个不会翻倍;雇主 401(k) 的限额另算且高得多。',
      },
      {
        q: '计算器考虑收入上限(phase-out)吗?',
        a: '没有——它把两份相同投入分别复利,只隔离「何时缴税」这一个变量。2025 年 Roth 供款在单人约 15 万美元、夫妻合报约 23.6 万美元以上逐步取消;有雇主计划时 Traditional 的抵扣也有收入线。具体查 IRS 590-A 号刊物。',
      },
      {
        q: '和国内个人养老金是什么关系?',
        a: '国内个人养老金账户是缴费时抵税、领取时按 3% 单独计税,逻辑接近 Traditional;Roth 则是税后钱进去、领取免税。若预期未来税率高于当下,Roth 式的「先缴税」更优——这正是本工具让两个税率对打的意义。',
      },
    ],
    formula: {
      formula: FORMULA,
      explain: '同样的年缴 C 以回报率 r 复利 n 年(年金终值)。Roth 先缴税:账户更小,领取免税;Traditional 现在抵税:账户更大,领取时按退休税率 t_retire 计税。税后胜负只取决于 t_now 与 t_retire 谁更高。',
    },
  },

  // ──────────────────────────── Español ────────────────────────────
  es: {
    useCases: [
      '7000 $ al año al 7 % durante 30 años: ambos crecen a unos 661.000 $ brutos; con 22 % hoy y 32 % al jubilarse, el Roth saca unos 66.000 $ netos de ventaja',
      'arrancar la carrera con Roth (12-22 % marginal) y pasar a Tradicional en años de pico (24-32 %): comparar año a año el punto de cruce',
      'escenario 50+: el límite sube a 8000 $; los 1000 $ extra al año al 7 % acumulan unos 25.000 $ en 15 años',
      'poner a prueba la intuición «los impuestos subirán»: intercambia t_now y t_retire y compara los dos escenarios lado a lado',
    ],
    faqs: [
      {
        q: '¿Cuándo gana el Roth frente al Tradicional?',
        a: 'El Roth gana cuando tu tipo marginal actual es menor que el efectivo que esperas en la jubilación: primeros años de carrera, ingresos bajos o previsión de subidas de tipos. El Tradicional gana en años de pico retributivo: deducir al 24-32 % ahora y retirar al 10-12 % después.',
      },
      {
        q: '¿Cuál es el límite de aportación?',
        a: '7000 $ al año en 2025, más 1000 $ de catch-up a partir de los 50 (8000 $ en total). El límite se comparte entre Roth y Tradicional — aportar a ambos no lo duplica. El límite del 401(k) de tu empleador es aparte y mucho más alto.',
      },
      {
        q: '¿Tiene en cuenta los tramos de exclusión (phase-out)?',
        a: 'No — aísla la decisión de calendario fiscal haciendo crecer aportaciones idénticas en ambas cuentas. Las aportaciones Roth dejan de ser válidas por encima de ~150.000 $ (soltero) / 236.000 $ (matrimonio) en 2025, y la deducibilidad del Tradicional desaparece si tienes plan en la empresa. Consulta la Publicación 590-A del IRS.',
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
    useCases: [
      '7000 $ jährlich bei 7 % über 30 Jahre: beide Konten wachsen auf rund 661.000 $ brutto; bei 22 % heute und 32 % im Ruhestand liegt Roth um etwa 66.000 $ vorn',
      'Berufseinstieg mit Roth (Grenzsteuersatz 12-22 %), Wechsel zu Traditional im Peak-Earnings-Jahr (24-32 %): Schnittpunkt Jahr für Jahr vergleichen',
      'Szenario 50+: das Limit steigt auf 8000 $; die zusätzlichen 1000 $ pro Jahr bringen bei 7 % rund 25.000 $ in 15 Jahren',
      'die Intuition »die Steuern steigen noch« prüfen: t_now und t_retire tauschen und beide Durchläufe gegenüberstellen',
    ],
    faqs: [
      {
        q: 'Wann ist ein Roth IRA besser als ein Traditional IRA?',
        a: 'Roth gewinnt, wenn dein heutiger Grenzsteuersatz unter dem effektiven Satz im Ruhestand liegt: Berufseinstieg, niedriges Einkommen oder erwartete Steuererhöhungen. Traditional gewinnt im Peak-Earnings-Jahr: heute mit 24-32 % absetzen, später mit 10-12 % entnehmen.',
      },
      {
        q: 'Wie hoch ist das Beitragslimit?',
        a: '7000 $ pro Jahr (2025), ab 50 weitere 1000 $ catch-up (zusammen 8000 $). Das Limit gilt für Roth und Traditional zusammen — zwei Konten verdoppeln es nicht. Das 401(k)-Limit des Arbeitgebers ist separat und deutlich höher.',
      },
      {
        q: 'Berücksichtigt der Rechner die Einkommens-Phase-outs?',
        a: 'Nein — er isoliert die Steuer-Timing-Entscheidung, indem er identische Beiträge in beiden Konten wachsen lässt. Roth-Beiträge laufen 2025 ab ca. 150.000 $ (Ledige) / 236.000 $ (Verheiratete) aus; die Traditional-Absetzbarkeit ebenfalls, wenn ein Firmenplan existiert. Details: IRS Publication 590-A.',
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
