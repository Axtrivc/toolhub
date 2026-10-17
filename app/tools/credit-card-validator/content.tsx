'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * CreditCardValidator 长文正文 —— 四语 dispatcher
 *
 * en 分支与改造前渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Luhn actually catches</h2>
    <p>The checksum (IBM, 1954) doubles every second digit from the right, subtracts 9 from any result over 9, and requires the total to be a multiple of 10. That construction catches every single-digit typo and almost every transposed pair — the exact mistakes humans make when typing or reading numbers aloud. It was never security; it is a typo fence, and it is still embedded in every card terminal and payment form on the planet.</p>
    <h2>Brand rules come from the IIN, not the logo</h2>
    <p>The first 6-8 digits are the Issuer Identification Number. Visa starts with 4; Mastercard with 51-55 or 2221-2720; Amex with 34 or 37 and is 15 digits, which is why Amex fields group as 4-6-5 instead of 4-4-4-4; Discover uses 6011, 65, 644-649 or 622126-622925. A number can pass Luhn and still have the wrong length for its brand — both checks must agree before "valid" means anything.</p>
    <h2>Valid format, not a valid account</h2>
    <p>This tool runs entirely in your browser and checks structure only: shape, brand and checksum. It cannot know whether the account is open, funded, or past its fraud rules — only the issuing bank knows that, at authorization time. That is why payment test numbers like Visa's 4111 1111 1111 1111 are published openly: they are structurally perfect and connected to nothing.</p>
    <h2>Where this belongs in your form</h2>
    <p>Luhn plus brand-length rules are the right client-side gate before you ever call a payment API: they stop the 16th-digit typo from becoming a failed charge attempt and a confused user. Amex's 15 digits and 4-6-5 grouping deserve their own input mask, and switching the card icon by prefix is a small trust signal users notice.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Luhn 到底能挡住什么</h2>
    <p>这套校验(IBM,1954)从右往左把每隔一位的数字翻倍、超过 9 就减 9,再要求总和是 10 的倍数。这个构造恰好抓住所有单字打错和几乎所有的相邻互换——正是人类抄写、口述号码时犯的错。它从来不是安全机制,而是一道防错栅栏,如今仍内嵌在地球上每一台刷卡终端和支付表单里。</p>
    <h2>品牌规则看的是 IIN,不是卡面 logo</h2>
    <p>卡号前 6-8 位是发卡行识别号。Visa 以 4 开头;Mastercard 是 51-55 或 2221-2720;Amex 是 34/37 且只有 15 位——所以 Amex 输入框按 4-6-5 分组而不是 4-4-4-4;Discover 用 6011、65、644-649 或 622126-622925。一个号码可能过了 Luhn 但长度不符合其品牌——两项检查都通过,"有效"才有意义。</p>
    <h2>是格式有效,不是账户有效</h2>
    <p>本工具完全在浏览器内运行,只查结构:形状、品牌、校验和。它无法知道账户是否开立、有没有余额、是否触发风控——只有发卡行在授权时才知道。支付测试号(如 Visa 的 4111 1111 1111 1111)能公开流传,正因为它们结构完美却不连接任何账户。</p>
    <h2>它该放在表单的哪一环</h2>
    <p>在调用支付 API 之前,Luhn 加品牌长度规则就是正确的客户端闸门:它让第 16 位打错的数字止步于本地,而不是变成一次失败的扣款尝试和一位困惑的用户。Amex 的 15 位与 4-6-5 分组值得单独的输入掩码;按前缀切换卡面图标虽小,却是用户能感觉到的信任信号。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Qué detecta de verdad Luhn</h2>
    <p>La suma de control (IBM, 1954) duplica cada segunda cifra desde la derecha, resta 9 a los resultados que pasen de 9 y exige que el total sea múltiplo de 10. Esa construcción caza todos los errores de una sola cifra y casi todos los pares intercambiados — exactamente los fallos humanos al teclear o dictar números. Nunca fue seguridad: es una valla contra erratas, y sigue empotrada en cada datáfono y formulario de pago del planeta.</p>
    <h2>Las reglas de marca vienen del IIN, no del logo</h2>
    <p>Los primeros 6-8 dígitos son el número de identificación del emisor. Visa empieza por 4; Mastercard por 51-55 o 2221-2720; Amex por 34 o 37 y tiene 15 dígitos — por eso sus campos se agrupan 4-6-5 y no 4-4-4-4; Discover usa 6011, 65, 644-649 o 622126-622925. Un número puede pasar Luhn y aun así tener la longitud equivocada para su marca: «válido» solo significa algo cuando ambas comprobaciones coinciden.</p>
    <h2>Formato válido, no cuenta válida</h2>
    <p>Esta herramienta corre entera en tu navegador y comprueba solo estructura: forma, marca y suma. No puede saber si la cuenta está abierta, con fondos o fuera de las reglas antifraude — eso solo lo sabe el emisor al autorizar. Los números de test (como el 4111 1111 1111 1111 de Visa) se publican abiertamente precisamente porque son estructuralmente perfectos y no están conectados a nada.</p>
    <h2>Dónde encaja en tu formulario</h2>
    <p>Luhn más las reglas de longitud por marca son la puerta correcta del lado cliente antes de llamar a una API de pagos: cortan la errata del dígito 16 en local, en vez de convertir-la en un cargo fallido y un usuario confundido. Los 15 dígitos y el agrupado 4-6-5 de Amex merecen su propia máscara de entrada, y cambiar el icono de tarjeta según el prefijo es una señal de confianza que el usuario nota.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was Luhn wirklich abfängt</h2>
    <p>Die Prüfsumme (IBM, 1954) verdoppelt von rechts jede zweite Ziffer, zieht bei Ergebnissen über 9 neun ab und verlangt, dass die Summe ein Vielfaches von 10 ist. Diese Konstruktion fängt jeden einstelligen Tippfehler und nahezu jedes vertauschte Paar — genau die Fehler, die Menschen beim Tippen oder Diktieren machen. Sie war nie Sicherheit, sondern ein Tippfehler-Zaun — und sitzt noch heute in jedem Kartenterminal und Zahlungsformular des Planeten.</p>
    <h2>Markenregeln kommen aus der IIN, nicht vom Logo</h2>
    <p>Die ersten 6-8 Ziffern sind die Aussteller-Identifikationsnummer. Visa beginnt mit 4; Mastercard mit 51-55 oder 2221-2720; Amex mit 34 oder 37 und hat 15 Ziffern — darum gruppieren Amex-Felder 4-6-5 statt 4-4-4-4; Discover nutzt 6011, 65, 644-649 oder 622126-622925. Eine Nummer kann Luhn bestehen und trotzdem die falsche Länge für ihre Marke haben — erst wenn beide Prüfungen stimmen, bedeutet „gültig“ etwas.</p>
    <h2>Gültiges Format, kein gültiges Konto</h2>
    <p>Dieses Werkzeug läuft vollständig im Browser und prüft nur Struktur: Form, Marke, Prüfsumme. Ob das Konto offen, gedeckt oder außerhalb der Betrugsregeln ist, kann es nicht wissen — das erfährt nur die ausgebende Bank bei der Autorisierung. Dass Zahlungs-Testnummern wie Visas 4111 1111 1111 1111 offen publiziert sind, liegt genau daran: strukturell perfekt, an nichts angebunden.</p>
    <h2>Wo das in dein Formular gehört</h2>
    <p>Luhn plus Marken-Längeregeln sind das richtige clientseitige Tor, bevor irgendeine Zahlungs-API gerufen wird: Der Tippfehler in Ziffer 16 endet lokal statt als gescheiterter Abbuchungsversuch mit verwirrtem Nutzer. Amex’ 15 Ziffern und die 4-6-5-Gruppierung verdienen eine eigene Eingabemaske, und das Karten-Symbol nach Präfix umzuschalten ist ein kleines Vertrauenssignal, das Nutzer bemerken.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function CreditCardValidatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
