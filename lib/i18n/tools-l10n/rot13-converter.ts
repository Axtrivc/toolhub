/**
 * rot13-converter 本地化 bundle —— zh / es / de(2026-10 B12 批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const Rot13ConverterL10n: ToolL10n = {

  es: {
    useCases: ['resolver pistas ROT13 de acertijos', 'ocultar soluciones o spoilers en foros', 'entender el desplazamiento del cifrado César', 'jugar con ROT-N en pasatiempos de letras'],
    faqs: [
      { q: '¿ROT13 es cifrado?', a: 'No. Solo existen 25 desplazamientos y cualquiera lo revierte a simple vista: es anti-mirada, no confidencialidad. Nada que importe de verdad debería protegerse así.' },
      { q: '¿Cómo se decodifica?', a: 'Pega la salida de vuelta en la entrada — ROT13 es su propia inversa (13 + 13 = 26, la vuelta completa). Otro desplazamiento N se deshace con 26 − N: ROT7 se decodifica con ROT19.' },
      { q: '¿Cambian los números y los signos?', a: 'Por defecto pasan intactos. Con ROT5 activado, los dígitos rotan en 5 (0↔5, 1↔6), también autoreversible; los signos y espacios nunca se tocan.' },
      { q: '¿Para qué se usa hoy?', a: 'Tapar soluciones en foros, pistas de juegos de ingenio y la etiqueta de spoilers heredada de Usenet: un velo fino que se corre solo cuando quieres.' },
    ],
    ui: {
      'inputLabel': 'Texto de entrada',
      'outputLabel': 'Salida',
      'shiftLabel': 'Desplazamiento',
      'rot5Label': 'Rotar también los dígitos en 5 (ROT5)',
      'clear': 'Limpiar',
      'tooLarge': 'Entrada demasiado grande — el máximo admitido es de 200 000 caracteres.',
      'note': '🔁 ROT13 es su propia inversa — pega la salida de vuelta para decodificar. Otro ROT-N se deshace con 26 − N (ROT7 ↔ ROT19). Se conserva el uso de mayúsculas; los dígitos pasan intactos salvo que actives ROT5, igualmente autoreversible.',
    },
  },
  de: {
    useCases: ['ROT13-Hinweise in Rätseln lösen', 'Lösungen und Spoiler in Foren verhüllen', 'die Verschiebung der Caesar-Verschlüsselung verstehen', 'mit ROT-N durch Buchstabenspiele spielen'],
    faqs: [
      { q: 'Ist ROT13 eine Verschlüsselung?', a: 'Nein. Es gibt nur 25 Verschiebungen, jeder knackt das auf einen Blick — es ist Blickschutz, keine Vertraulichkeit. Alles, was wirklich zählt, gehört nicht dahinter.' },
      { q: 'Wie dekodiert man?', a: 'Ausgabe zurück in die Eingabe einfügen — ROT13 ist selbstinvers (13 + 13 = 26, einmal komplett herum). Eine andere Verschiebung N löst man mit 26 − N: ROT7 dekodiert man mit ROT19.' },
      { q: 'Werden Zahlen und Satzzeichen verändert?', a: 'Standardmäßig bleiben sie unberührt. Mit ROT5 rotieren Ziffern um 5 (0↔5, 1↔6), ebenfalls selbstinvers; Satzzeichen und Leerzeichen bleiben immer stehen.' },
      { q: 'Wofür nutzt man es heute?', a: 'Lösungen in Foren zudecken, Hinweise in Denkspielen und die aus Usenet stammende Spoiler-Etikette: ein dünner Schleier, den man nur bei Lust wegzieht.' },
    ],
    ui: {
      'inputLabel': 'Eingabetext',
      'outputLabel': 'Ausgabe',
      'shiftLabel': 'Verschiebung',
      'rot5Label': 'Ziffern zusätzlich um 5 rotieren (ROT5)',
      'clear': 'Leeren',
      'tooLarge': 'Eingabe zu groß — unterstützt sind bis zu 200.000 Zeichen.',
      'note': '🔁 ROT13 ist selbstinvers — Ausgabe zurück in die Eingabe ergibt den Klartext. Jedes andere ROT-N löst man mit 26 − N (ROT7 ↔ ROT19). Groß-/Kleinschreibung bleibt; Ziffern bleiben unangetastet, außer ROT5 ist an — auch das selbstinvers.',
    },
  },
}
