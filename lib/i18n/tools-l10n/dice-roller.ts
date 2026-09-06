/**
 * dice-roller 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 不适用(纯随机,无公式)。
 */
import type { ToolL10n } from '../tool-l10n'

export const DiceRollerL10n: ToolL10n = {
  zh: {
    useCases: [
      'D&D 团里掷 d20 攻击与豁免判定,再用 4d6 弃最低生成六维角色属性',
      '桌面 RPG 缺实体骰时补位:一次掷 3d6+2,每颗点数与总和都可见,DM 可当场核验',
      '用计数模式连掷 200 次 d6 验证骰子是否均匀——各面频数应趋近 1/6',
      '概率课上对比 2d6 与 1d12 的点数分布,直观展示多个骰子求和后的中心化效应',
    ],
    faqs: [
      {
        q: '骰子结果真的随机吗?',
        a: '是。工具使用浏览器的 crypto.getRandomValues()——与生成安全密钥同一级别的密码学随机源,而非较旧的 Math.random();每颗骰子独立采样,一颗 d20 每个面恰好 5% 概率。',
      },
      {
        q: '能一次掷多个骰子吗,比如 3d6+2?',
        a: '可以。选骰型(d4、d6、d8、d10、d12、d20、d100),设定数量,再按你的规则加固定修正值。结果同时列出每颗骰子的点数和总和,玩家和 DM 都能逐个核对。',
      },
      {
        q: '为什么同一个数总反复出现,是不是有猫腻?',
        a: '随机本来就"扎堆":掷 20 次 d6,某个数出现 3 次在统计上完全正常。掷到几百次后各面频数会趋向均等,用计数模式即可自行验证。',
      },
      {
        q: '掷骰记录会上传或保存吗?',
        a: '不会。这是纯浏览器内掷骰器,不联网、不存储,断网也能用;历史列表只显示在当前页面上,刷新后清空。',
      },
    ],
    ui: {
      'clear': '清空',
      'countLabel': '骰子数',
      'history': '最近掷骰',
      'note': '🎲 骰子来自加密级随机数 + 拒绝采样——无模偏差、无规律序列。每次最多掷 20 颗。',
      'rollBtn': '掷 {n} 个 d{s}',
    },
  },
  es: {
    useCases: [
      'Tirar ataques y salvaciones con d20 en partidas de D&D y generar atributos con 4d6 descartando el menor',
      'Sustituir los dados olvidados de la mesa: un 3d6+2 de una vez, con cada dado y el total a la vista para verificarlos',
      'Comprobar si un dado está viciado con el modo recuento: 200 tiradas de d6 y frecuencias que deben rondar 1/6',
      'En clase de probabilidad, comparar la distribución de 2d6 frente a 1d12 y ver el efecto de sumar dados',
    ],
    faqs: [
      {
        q: '¿Las tiradas son realmente aleatorias?',
        a: 'Sí. La herramienta usa crypto.getRandomValues() del navegador — la misma aleatoriedad criptográfica que protege claves, no el antiguo Math.random(). Cada dado se tira de forma independiente: un d20 tiene exactamente un 5 % por cara.',
      },
      {
        q: '¿Puedo tirar varios dados a la vez, como 3d6+2?',
        a: 'Sí. Elige el tipo (d4, d6, d8, d10, d12, d20 o d100), indica cuántos dados y añade un modificador fijo si tu juego lo usa. Ves el resultado individual de cada dado más el total, así el DJ o los jugadores pueden verificar cada tirada.',
      },
      {
        q: '¿Por qué repiten tanto los mismos números, está trucado?',
        a: 'El azar se agrupa: en 20 tiradas de un d6 es estadísticamente normal que un 4 salga tres veces. A partir de cientos de tiradas las frecuencias convergen; compruébalo con el modo recuento durante la sesión.',
      },
      {
        q: '¿Funciona sin conexión y se guardan mis tiradas?',
        a: 'Es un lanzador 100 % en el navegador: funciona offline y no envía ni almacena nada — ideal para partidas presenciales donde el móvil no tiene cobertura. El historial vive solo en la página abierta.',
      },
    ],
    ui: {
      'clear': 'Borrar',
      'countLabel': 'n.º de dados',
      'history': 'Tiradas recientes',
      'note': '🎲 Las tiradas usan aleatoriedad criptográfica con muestreo de rechazo — sin sesgo de módulo. Máximo 20 dados por tirada.',
      'rollBtn': 'Lanzar {n}× d{s}',
    },
  },
  de: {
    useCases: [
      'Angriffs- und Rettungswürfe mit dem W20 bei D&D leiten, Attributswerte per 4W6 mit Streichen des Niedrigsten auswürfeln',
      'Vergessene Würfel am Tisch ersetzen: 3W6+2 auf einen Schlag, jedes Einzelergebnis und die Summe sichtbar für alle',
      'Die Fairness eines Würfels prüfen: 200 Würfe mit dem W6 im Zählmodus, die Häufigkeiten sollten sich 1/6 nähern',
      'Im Matheunterricht die Verteilung von 2W6 gegen 1W12 vergleichen und den Zentralen Grenzwertsatz zeigen',
    ],
    faqs: [
      {
        q: 'Sind die Würfe wirklich zufällig?',
        a: 'Ja. Das Tool nutzt crypto.getRandomValues() des Browsers — denselben kryptografischen Zufall wie für sichere Schlüssel, nicht das ältere Math.random(). Jeder Würfel wird unabhängig geworfen; ein W20 hat exakt 5 % je Seite.',
      },
      {
        q: 'Kann ich mehrere Würfel gleichzeitig werfen, etwa 3W6+2?',
        a: 'Ja. Würfelart (W4, W6, W8, W10, W12, W20 oder W100) wählen, Anzahl einstellen und bei Bedarf einen festen Modifikator ergänzen. Du siehst jedes Einzelergebnis plus Summe, damit SL und Spieler jeden Wurf nachprüfen können.',
      },
      {
        q: 'Warum kommen manche Zahlen so oft — ist der Würfel gezinkt?',
        a: 'Zufall klumpt: Bei 20 Würfen mit einem W6 ist es statistisch völlig normal, wenn dieselbe Zahl dreimal erscheint. Erst über Hunderte Würfe gleichen sich die Häufigkeiten an — im Zählmodus selbst überprüfbar.',
      },
      {
        q: 'Brauche ich Internet, und wo landen die Ergebnisse?',
        a: 'Nein und nirgendwo: Es ist ein reiner Browser-Würfel ohne Server und ohne Speicherung — perfekt für Spieltage ohne Empfang. Der Verlauf existiert nur in der geöffneten Seite.',
      },
    ],
    ui: {
      'clear': 'Leeren',
      'countLabel': 'Anzahl Würfel',
      'history': 'Letzte Würfe',
      'note': '🎲 Die Würfe nutzen kryptografischen Zufall mit Rejection Sampling — kein Modulo-Bias. Maximal 20 Würfel pro Wurf.',
      'rollBtn': '{n}× d{s} werfen',
    },
  },
}
