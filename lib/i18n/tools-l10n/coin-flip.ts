/**
 * coin-flip 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const CoinFlipL10n: ToolL10n = {

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
