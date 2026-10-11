/**
 * coin-flip 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const CoinFlipL10n: ToolL10n = {
  zh: {
    useCases: [
      '买单或开局起争执时抛一次硬币当场定夺,把"谁先谁后"的拉扯压缩到一秒钟',
      '课堂上演示大数定律:连抛 200 次,让学生看着正面比例从随机波动收敛到 50%',
      '球赛、辩论赛或桌游选边:当场抛掷、累计记录留在屏幕上,事后没人能反悔',
      '露营或飞行模式下的公平决策:随机数来自本机 Web Crypto,断网照常可用,结果不留存',
    ],
    faqs: [
      {
        q: '这枚硬币真的公平吗?',
        a: '它使用加密级随机数 crypto.getRandomValues,无偏且不可预测——甚至比实体硬币更公平,后者会因重量分布或抛掷手法产生细微偏差。正面和反面各出现恰好 50%。',
      },
      {
        q: '能一次抛很多次吗?',
        a: '可以——连续抛即可,屏幕上的正反面累计计数会替你记录,适合统计演示、一次性了结多个平局,或实证检验公平性。',
      },
      {
        q: '断网还能用吗?',
        a: '能。随机性来自你自己设备的 Web Crypto API,不经过服务器,也不保存任何结果。页面加载完成后没有网络照样可以一直抛。',
      },
      {
        q: '连出 5 次正面后,下一次更可能是反面吗?',
        a: '不是。每次抛掷相互独立,正面的概率始终是 50%。连出 5 次正面的概率本来就只有 1/32,但这不影响之后的任何一次抛掷——赌徒谬误正是把两者混为一谈。',
      },
    ],
    ui: {
      'flipBtn': '抛硬币',
      'heads': '正面',
      'headsN': '正面',
      'headsShare': '正面比例',
      'note': '🪙 每次抛掷都取自加密级熵——任意长度的会话都与公平硬币统计无差。累计百分比会如期收敛到 50%。',
      'tails': '反面',
      'tailsN': '反面',
      'tapFlip': '抛',
    },
  },
  es: {
    useCases: [
      'Resolver en un segundo quién paga la cuenta o quién empieza, sin piedra-papel-tijera ni discusiones',
      'Demostrar la ley de los grandes números en clase: 200 lanzamientos seguidos y el porcentaje de caras converge al 50 %',
      'Sortear el campo o el saque antes de un partido, con el historial acumulado a la vista para que nadie lo discuta después',
      'Decidir en modo avión o de excursión: la aleatoriedad sale del Web Crypto del dispositivo y funciona sin conexión',
    ],
    faqs: [
      {
        q: '¿La moneda es realmente justa?',
        a: 'Usa aleatoriedad de grado criptográfico (crypto.getRandomValues), imparcial e impredecible — incluso más justa que una moneda física, que puede estar sesgada por su distribución de peso o la técnica de quien la lanza. Cara y cruz salen exactamente el 50 % cada una.',
      },
      {
        q: '¿Puedo lanzar muchas veces de una?',
        a: 'Sí — lanza repetidamente y el recuento acumulado de caras y cruces va llevando la cuenta: útil para demostraciones de estadística, resolver varios empates de golpe o comprobar la equidad empíricamente.',
      },
      {
        q: '¿Funciona sin conexión?',
        a: 'Sí. La aleatoriedad procede de la Web Crypto API de tu propio dispositivo — sin llamadas al servidor ni resultados guardados. Una vez cargada la página, sigue funcionando sin red.',
      },
      {
        q: 'Salieron 5 caras seguidas, ¿ahora toca cruz?',
        a: 'No: cada lanzamiento es independiente y la probabilidad de cara sigue siendo del 50 %. Que salgan 5 caras seguidas ya es raro (1/32), pero no cambia nada lo que venga después — es la falacia del jugador.',
      },
    ],
    ui: {
      'flipBtn': 'Lanzar moneda',
      'heads': 'CARA',
      'headsN': 'Cara',
      'headsShare': '% cara',
      'note': '🪙 Cada lanzamiento sale de entropía criptográfica — indistinguible de una moneda justa. El porcentaje converge al 50 % como se espera.',
      'tails': 'CRUZ',
      'tailsN': 'Cruz',
      'tapFlip': 'LANZAR',
    },
  },
  de: {
    useCases: [
      'Streit um die Rechnung oder den Aufschlag mit einem Wurf beenden — statt Schere-Stein-Papier und Diskussionen',
      'Im Unterricht das Gesetz der großen Zahlen zeigen: 200 Würfe hintereinander, der Kopf-Anteil konvergiert gegen 50 %',
      'Seitenwahl oder Anstoß vor dem Spiel auslosen, mit laufender Statistik auf dem Bildschirm — niemand kann es nachträglich anfechten',
      'Entscheidungen ohne Netz: Die Entropie kommt aus der Web-Crypto-API des Geräts, beim Camping genauso nutzbar',
    ],
    faqs: [
      {
        q: 'Ist die Münze wirklich fair?',
        a: 'Sie nutzt kryptografisch sichere Zufälligkeit (crypto.getRandomValues) — unverzerrt und unvorhersehbar, wohl fairer als eine physische Münze, die durch Gewichtsverteilung oder Wurftechnik leicht verzerrt sein kann. Kopf und Zahl erscheinen exakt je 50 %.',
      },
      {
        q: 'Kann ich viele Würfe auf einmal machen?',
        a: 'Ja — wirf einfach wiederholt, die laufende Kopf-/Zahl-Bilanz zählt mit: praktisch für Statistik-Demonstrationen, mehrere Gleichstände auf einmal oder einen empirischen Fairness-Test.',
      },
      {
        q: 'Funktioniert das offline?',
        a: 'Ja. Die Zufälligkeit kommt aus der Web-Crypto-API deines eigenen Geräts — kein Serveraufruf, keine gespeicherten Ergebnisse. Nach dem Laden der Seite läuft alles ohne Verbindung weiter.',
      },
      {
        q: 'Fünfmal Kopf in Folge — jetzt auf Zahl setzen?',
        a: 'Nein: Jeder Wurf ist unabhängig, die Wahrscheinlichkeit für Kopf bleibt 50 %. Fünf Kopf hintereinander sind mit 1/32 selten, ändern aber nichts an den kommenden Würfen — das ist der Spielerfehlschluss.',
      },
    ],
    ui: {
      'flipBtn': 'Münze werfen',
      'heads': 'KOPF',
      'headsN': 'Kopf',
      'headsShare': 'Kopf %',
      'note': '🪙 Jeder Wurf nutzt krypto-Entropie — statistisch nicht von einer fairen Münze unterscheidbar. Der Prozentsatz konvergiert erwartungsgemäß gegen 50 %.',
      'tails': 'ZAHL',
      'tailsN': 'Zahl',
      'tapFlip': 'WERFEN',
    },
  },
}
