/**
 * inflation-calculator 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const inflationCalculatorL10n: ToolL10n = {

  es: {
    formula: {
      formula: 'Future value = present × (1 + i)^n',
      explain: 'Erosión del poder adquisitivo. i = tasa de inflación anual, n = años. El mismo dinero compra proporcionalmente menos a medida que los precios suben de forma compuesta.',
    },
    useCases: ['ver cómo la inflación erosiona el poder adquisitivo', 'convertir dinero de hoy al equivalente futuro', 'calcular cuánto se devalúa el dinero por la inflación', 'estimar la rentabilidad necesaria para objetivos a largo plazo'],
    faqs: [
      { q: '¿Cuál es una tasa de inflación normal?', a: 'Los bancos centrales fijan un objetivo del 2 % aprox. como inflación «saludable». EE. UU. promedió un 3 % en el último siglo. Tanto la alta inflación (10 %+) como la deflación (negativa) causan problemas económicos.' },
      { q: '¿Qué tasa uso para España o Latinoamérica?', a: 'Para la zona euro toma el IPC armonizado (objetivo del BCE: 2 %); España ha rondado el 2-4 % en años recientes (con el pico de 2022 por encima del 8 %), y varios países latinoamericanos han visto picos del 7-10 %. Usa la media a largo plazo de tu país, no el último dato mensual.' },
      { q: '¿Cuánto pierde mi dinero en 10 años con un 3 %?', a: 'Dentro de 10 años necesitarás 13.439 € para comprar lo que hoy cuesta 10.000 €: la inflación se aplica en compuesto y el poder adquisitivo cae cerca de un 26 %; a 20 años quedan unos 5.540 €. Cuanto más largo el plazo, más agresiva la erosión.' },
      { q: '¿La deflación no es buena noticia?', a: 'A corto plazo parece un alivio, pero si los precios bajan de forma sostenida la gente pospone compras, las empresas recortan plantillas y las deudas pesan más en términos reales. La deflación japonesa tras 1990 es el caso de manual — por eso el BCE apunta al 2 % y no al 0 %.' },
    ],
    ui: {
      'chartTitle': 'Coste de la misma cesta',
      'line.today': 'Cuesta hoy',
      'line.future': 'Costará entonces',
      'in.amount': 'Importe', 'in.rate': 'Inflación anual', 'in.years': 'Años',
      'out.future': 'Coste equivalente en el futuro', 'out.lost': 'Poder adquisitivo perdido',
      note: '💸 $1,000 hoy con una inflación del 3 % valen menos cada año. En 10 años necesitarías $1,344 para comprar lo que $1,000 compran ahora.',
      errNonNegative: 'El importe, la inflación y los años no pueden ser negativos',
    },
  },
  de: {
    formula: {
      formula: 'Future value = present × (1 + i)^n',
      explain: 'Kaufkraftverlust. i = jährliche Inflationsrate, n = Jahre. Dasselbe Geld kauft anteilig weniger, während die Preise über die Zeit steigen.',
    },
    useCases: ['sehen, wie Inflation die Kaufkraft aushöhlt', 'heutiges Geld in den zukünftigen Gegenwert umrechnen', 'berechnen, wie viel Wert das Geld durch Inflation verliert', 'die nötige Rendite für langfristige Ziele schätzen'],
    faqs: [
      { q: 'Was ist eine normale Inflationsrate?', a: 'Notenbanken steuern auf etwa 2 % als „gesunde“ Inflation. Die USA lagen im letzten Jahrhundert bei durchschnittlich 3 %. Hohe Inflation (10 %+) und Deflation (negativ) verursachen beide Wirtschaftsprobleme.' },
      { q: 'Welchen Wert soll ich für Deutschland einsetzen?', a: 'Nimm den HVPI der EZB — Ziel sind 2 %. Deutschland lag 2022 über 6 %, historisch eher bei 1,5-2 %; für Langfristprojektionen sind 2-3 % ein realistischer Ansatz. Für Lohnverhandlungen zählt der aktuelle VPI des Statistischen Bundesamts.' },
      { q: 'Was bedeutet 3 % Inflation über 10 Jahre?', a: 'In zehn Jahren brauchst du 13.439 € für einen Warenkorb, der heute 10.000 € kostet: Inflation wirkt zinseszinsartig, die Kaufkraft sinkt um rund 26 %; nach 20 Jahren bleiben etwa 5.540 €. Je länger der Horizont, desto härter die Aushöhlung.' },
      { q: 'Ist Deflation (fallende Preise) nicht gut?', a: 'Kurzfristig schon, aber bei anhaltend sinkenden Preisen schieben Verbraucher Käufe auf, Firmen bauen Personal ab und Schulden werden real schwerer — eine Abwärtsspirale. Japans Deflation nach 1990 ist das Lehrbuchbeispiel; deshalb steuern Notenbanken auf 2 % statt 0 %.' },
    ],
    ui: {
      'chartTitle': 'Preis desselben Warenkorbs',
      'line.today': 'Heutiger Preis',
      'line.future': 'Zukünftiger Preis',
      'in.amount': 'Betrag', 'in.rate': 'Jährliche Inflation', 'in.years': 'Jahre',
      'out.future': 'Entsprechende Zukunftskosten', 'out.lost': 'Verlorene Kaufkraft',
      note: '💸 $1,000 heute verlieren bei 3 % Inflation jährlich an Wert. In 10 Jahren brauchst du $1,344 für das, was $1,000 jetzt kaufen.',
      errNonNegative: 'Betrag, Inflation und Jahre dürfen nicht negativ sein',
    },
  },
}
