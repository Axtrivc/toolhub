/**
 * credit-card-validator 本地化 bundle —— zh / es / de(2026-10 B12 批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const CreditCardValidatorL10n: ToolL10n = {

  es: {
    useCases: ['comprobar que un número de tarjeta está bien tecleado', 'identificar la marca para agrupar bien los campos del formulario', 'probar flujos de pago con números de test', 'explicar el algoritmo de Luhn en clase'],
    faqs: [
      { q: '¿Qué comprueba exactamente?', a: 'Tres cosas: la forma del número (12-19 dígitos), la marca y longitud esperadas según el prefijo del emisor (Visa/Mastercard/Amex/Discover/JCB/Diners/UnionPay) y la suma de control de Luhn. No dice si la cuenta existe ni si hay fondos — solo que los dígitos están bien formados.' },
      { q: '¿Es seguro pegar un número real?', a: 'Todo el cálculo ocurre en tu navegador, sin ninguna petición de red. Aun así, la buena práctica es usar números de test públicos (el 4111 1111 1111 1111 de Visa): pasa Luhn sin corresponder a ninguna cuenta real.' },
      { q: '¿Por qué me rechazan una tarjeta "válida"?', a: 'Que pase Luhn solo significa formato correcto. Los rechazos reales llegan por otros sitios: cuenta cerrada, fondos insuficientes, reglas antifraude, caducidad o CVC erróneo — eso solo lo sabe el emisor.' },
      { q: '¿Cómo funciona Luhn?', a: 'De derecha a izquierda, cada segunda cifra se duplica y, si pasa de 9, se le resta 9; la suma total debe ser divisible entre 10. Es un diseño de IBM de 1954 que caza casi todos los dígitos mal tecleados y los intercambios de cifras vecinas.' },
    ],
    ui: {
      'inputLabel': 'Número de tarjeta',
      'outputLabel': 'Resultado de la validación',
      'defaultInput': '4111 1111 1111 1111',
      'inputTooLarge': '⚠️ Entrada demasiado grande — el máximo admitido es de 2000 caracteres. Recorta la entrada para validar.',
      'note': '🔒 Solo comprueba formato: suma de Luhn más reglas de prefijo/longitud por marca, todo en tu navegador. «Válido» significa bien formado — no que la cuenta exista — y no se envía nada a ninguna parte.',
    },
  },
  de: {
    useCases: ['prüfen, ob eine Kartennummer korrekt getippt wurde', 'die Marke erkennen für die richtige Eingabe-Gruppierung', 'Zahlungsabläufe mit Testnummern verifizieren', 'den Luhn-Algorithmus im Unterricht erklären'],
    faqs: [
      { q: 'Was genau wird geprüft?', a: 'Drei Dinge: die Form der Nummer (12-19 Ziffern), die zum Präfix gehörende Marke und Länge (Visa/Mastercard/Amex/Discover/JCB/Diners/UnionPay) sowie die Luhn-Prüfsumme. Ob das Konto existiert oder gedeckt ist, sagt es nicht — nur dass die Ziffern wohlgeformt sind.' },
      { q: 'Ist es sicher, eine echte Nummer einzufügen?', a: 'Die gesamte Rechnung läuft im Browser, ohne eine einzige Netzwerkanfrage. Dennoch gilt: Nutze öffentliche Testnummern (Visa 4111 1111 1111 1111) — sie besteht Luhn, gehört aber zu keinem realen Konto.' },
      { q: 'Warum wird eine „gültige“ Karte trotzdem abgelehnt?', a: 'Luhn besteht heißt nur: Format stimmt. Die echten Ablehnungsgründe liegen woanders — Konto geschlossen, fehlende Deckung, Betrugsregeln, falsches Ablaufdatum oder CVC. Das weiß nur der Issuer.' },
      { q: 'Wie funktioniert Luhn?', a: 'Von rechts nach links wird jede zweite Ziffer verdoppelt und bei über 9 um 9 reduziert; die Summe muss durch 10 teilbar sein. Das IBM-Design von 1954 fängt nahezu alle Tippfehler und vertauschten Nachbarnziffern ab.' },
    ],
    ui: {
      'inputLabel': 'Kartennummer',
      'outputLabel': 'Prüfergebnis',
      'defaultInput': '4111 1111 1111 1111',
      'inputTooLarge': '⚠️ Eingabe zu groß — unterstützt sind bis zu 2.000 Zeichen. Kürze die Eingabe, um zu prüfen.',
      'note': '🔒 Nur Formalprüfung: Luhn-Prüfsumme plus Präfix-/Längeregeln je Marke, komplett im Browser. „Gültig“ heißt wohlgeformt — nicht, dass das Konto existiert — und es wird nichts an irgendwen gesendet.',
    },
  },
}
