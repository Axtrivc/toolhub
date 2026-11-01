'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * IbanValidator 长文正文 —— 三语 dispatcher
 *
 * en 分支与改造前渲染输出一致。es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why the check digits exist</h2>
    <p>IBANs are long enough that humans mistype them constantly, so ISO 13616 bolts two check digits after the country code, computed with the ISO 7064 mod-97 scheme. Move the first four characters to the end, convert letters to numbers (A=10 … Z=35), and the whole string must leave remainder 1 when divided by 97. That single modular test rejects roughly 99% of random typos — wrong digits, swapped characters, dropped characters — before money ever moves.</p>
    <h2>Length is part of the identity</h2>
    <p>Every country fixes its IBAN length in the registry: Norway 15 (the shortest), Germany and the UK 22, France 27, Brazil 29, Malta 31 (the longest). A mod-97 pass on the wrong length is still a wrong IBAN — which is why validation is two steps: registry length first, checksum second. Check digits 00, 01 and 99 are reserved and never valid.</p>
    <h2>A valid checksum is not a valid account</h2>
    <p>Mod-97 proves the IBAN is well-formed, nothing more. Whether the account exists, who owns it, and whether it can receive payments are bank-side facts that no offline tool can know. Name-checking (Iban-to-name services) exists in some SEPA flows precisely because format validation alone cannot stop a mistyped-but-well-formed recipient.</p>
    <h2>Formatting conventions worth copying</h2>
    <p>Printed IBANs group into blocks of four for a reason: the eye can verify blocks against a source document far faster than an unbroken 22-character run. Electronic systems strip the spaces; paper adds them. The BBAN inside stays country-specific — in the UK it packs a sort code and account number, in Germany it is bank code plus account — so never "fix" the middle part by eye.</p>
  </section>
)


// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Para qué existen los dígitos de control</h2>
    <p>Los IBAN son tan largos que la gente los teclea mal sin parar; por eso la ISO 13616 coloca dos dígitos de control tras el código de país, calculados con el esquema mod-97 de la ISO 7064: mueve los cuatro primeros caracteres al final, convierte las letras en números (A=10 … Z=35) y la cadena entera dividida entre 97 debe dejar resto 1. Esa única prueba modular rechaza cerca del 99 % de los errores aleatorios — dígitos erróneos, caracteres intercambiados o caídos — antes de que el dinero se mueva.</p>
    <h2>La longitud es parte de la identidad</h2>
    <p>Cada país fija su longitud en el registro: Noruega 15 (la más corta), Alemania y Reino Unido 22, Francia 27, Brasil 29, Malta 31 (la más larga). Un mod-97 que pasa con longitud equivocada sigue siendo un IBAN equivocado — por eso la validación va en dos pasos: primero longitud del registro, después la suma. Los dígitos de control 00, 01 y 99 están reservados y nunca son válidos.</p>
    <h2>Una suma válida no es una cuenta válida</h2>
    <p>El mod-97 demuestra que el IBAN está bien formado, y nada más. Que la cuenta exista, de quién sea y si admite cobros son hechos del banco que ninguna herramienta offline conoce. Que algunos flujos SEPA ofrezcan comprobación IBAN-nombre se debe justo a esto: la validación de formato sola no frena un destinatario mal escrito pero bien formado.</p>
    <h2>Convenciones de formato que conviene copiar</h2>
    <p>Los IBAN impresos se agrupan de cuatro en cuatro por algo: el ojo verifica bloques contra el documento original mucho más rápido que una tira ininterrumpida de 22 caracteres. Los sistemas electrónicos quitan los espacios; el papel los añade. El BBAN interno varía por país — en el Reino Unido empaqueta sort code y número de cuenta, en Alemania código de banco más cuenta — así que nunca «arregles» a ojo esa parte central.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum es die Prüfziffern gibt</h2>
    <p>IBANs sind so lang, dass sie ständig falsch getippt werden — darum hängt die ISO 13616 zwei Prüfziffern hinter den Ländercode, berechnet nach dem ISO-7064-Verfahren mod 97: Die vorderen vier Zeichen wandern ans Ende, Buchstaben werden Zahlen (A=10 … Z=35), und die ganze Kette muss geteilt durch 97 den Rest 1 lassen. Dieser eine modulare Test weist rund 99 % aller Zufallsfehler ab — falsche Ziffern, vertauschte oder verlorene Zeichen — bevor Geld in Bewegung gerät.</p>
    <h2>Die Länge ist Teil der Identität</h2>
    <p>Jedes Land fixiert seine IBAN-Länge im Register: Norwegen 15 (am kürzesten), Deutschland und Großbritannien 22, Frankreich 27, Brasilien 29, Malta 31 (am längsten). Ein mod-97, der bei falscher Länge besteht, ist trotzdem ein falscher IBAN — deshalb validiert man zweistufig: erst Registerlänge, dann Prüfsumme. Die Prüfziffern 00, 01 und 99 sind reserviert und niemals gültig.</p>
    <h2>Eine gültige Prüfsumme ist kein gültiges Konto</h2>
    <p>Mod-97 beweist nur, dass der IBAN wohlgeformt ist — nichts mehr. Ob das Konto existiert, wem es gehört und ob es Zahlungen annimmt, sind bankseitige Fakten, die kein Offline-Werkzeug kennen kann. Dass manche SEPA-Abläufe eine IBAN-Name-Prüfung anbieten, liegt genau daran: Formatvalidierung allein hält keinen wohlgeformten, aber falschen Empfänger auf.</p>
    <h2>Formatkonventionen, die man übernehmen sollte</h2>
    <p>Gedruckte IBANs gruppieren in Viererblöcke aus gutem Grund: Das Auge gleicht Blöcke gegen das Originaldokument weit schneller ab als eine durchgehende 22-Zeichen-Kette. Elektronische Systeme strippen die Leerzeichen, Papier fügt sie hinzu. Das BBAN im Inneren bleibt länderspezifisch — in Großbritannien stecken Sort Code und Kontonummer darin, in Deutschland Bankleitzahl plus Konto — also „korrigiere“ diesen Mittelteil nie nach Augenmaß.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function IbanValidatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
