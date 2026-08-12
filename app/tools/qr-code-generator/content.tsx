'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * QR Code Generator 长文正文 —— 四语 dispatcher
 *
 * en 分支等价于原渲染输出。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en (与改造前渲染输出一致) ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>What Is a QR Code?</h2>
    <p>
      A <strong>QR code</strong> (Quick Response code) is a two-dimensional barcode that stores
      information — URLs, text, contact details, WiFi credentials, and more — in a pattern of
      black squares on a white background. When scanned with a smartphone camera, the device
      instantly decodes the information and performs the associated action: opening a website,
      joining a WiFi network, displaying text, or adding a contact.
    </p>
    <p>
      Unlike traditional barcodes that hold a short string of numbers, a single QR code can store
      up to several thousand characters, making them far more versatile for both digital and print
      use.
    </p>

    <h2>Common Uses for QR Codes</h2>
    <ul>
      <li>
        <strong>Marketing and print media.</strong> Put a QR code on a flyer, poster, business
        card, or product packaging to direct people straight to your website, a landing page, or a
        promotion — no typing required.
      </li>
      <li>
        <strong>Restaurant menus.</strong> Many restaurants replaced physical menus with QR codes
        during the pandemic, and the convenience stuck. Customers scan to view the menu in their
        browser.
      </li>
      <li>
        <strong>WiFi sharing.</strong> Generate a WiFi QR code once and guests can join your
        network by scanning — no more spelling out a long password. The code auto-configures the
        SSID and password on their phone.
      </li>
      <li>
        <strong>Payments.</strong> Payment apps use QR codes to transfer money instantly between
        accounts, widely used in mobile wallets worldwide.
      </li>
      <li>
        <strong>Event tickets and boarding passes.</strong> Airlines, concert venues, and
        conferences use QR codes for fast, scannable entry validation.
      </li>
      <li>
        <strong>Contact sharing.</strong> Encode a vCard so people can add your contact info to
        their phone in one tap.
      </li>
    </ul>

    <h2>How to Use This Generator</h2>
    <ol>
      <li>
        <strong>Choose a type.</strong> Pick URL, Text, or WiFi at the top of the tool, depending
        on what you want to encode.
      </li>
      <li>
        <strong>Enter your content.</strong> For URLs, paste the full link (including{' '}
        <code>https://</code>). For WiFi, enter your network name, password, and encryption type.
      </li>
      <li>
        <strong>Customize the look.</strong> Adjust the preview size and pick foreground and
        background colors to match your brand. Keep the contrast high so scanners can read the
        code reliably.
      </li>
      <li>
        <strong>Download.</strong> Click &quot;Download PNG&quot; to save a high-resolution image
        ready for print or web.
      </li>
    </ol>

    <h2>Tips for Scannable QR Codes</h2>
    <p>
      A QR code is only useful if it scans reliably. Follow these guidelines to make sure your
      codes work on every device:
    </p>
    <ul>
      <li>
        <strong>Keep contrast high.</strong> Dark foreground on a light background scans best.
        Avoid light-on-dark or low-contrast color pairs.
      </li>
      <li>
        <strong>Don&apos;t make them too small.</strong> For print, aim for at least 2 × 2 cm
        (about 0.8 inches). Smaller codes struggle to scan, especially from a distance.
      </li>
      <li>
        <strong>Add a quiet zone.</strong> The white margin around the code (the &quot;quiet
        zone&quot;) helps scanners detect it. This tool adds a margin automatically — don&apos;t
        crop it off when placing the image.
      </li>
      <li>
        <strong>Test before printing.</strong> Always scan your generated code with a real phone
        before printing 1,000 flyers. A typo in a URL is a costly mistake once it&apos;s on paper.
      </li>
      <li>
        <strong>Keep URLs short.</strong> Shorter URLs produce simpler codes with larger modules,
        which scan more easily. Use a URL shortener if needed.
      </li>
    </ul>

    <h2>Static vs. Dynamic QR Codes</h2>
    <p>
      The codes generated here are <strong>static</strong>: the content is encoded directly in the
      pattern, and once created it cannot be changed. This is great for permanent uses like WiFi
      sharing, contact cards, or fixed product links.
    </p>
    <p>
      <strong>Dynamic</strong> QR codes (offered by paid services) encode a short redirect URL
      instead of the final content, letting you change the destination later and track scan
      analytics. For most personal and small-business uses, static codes are all you need.
    </p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>什么是二维码?</h2>
    <p>
      <strong>二维码</strong>(QR 码,即快速响应码)是一种二维条形码,以白底黑色方块图案存储信息——网址、文本、联系方式、WiFi 凭据等等。用手机摄像头扫描后,设备会即时解码其中的信息并执行相应操作:打开网站、加入 WiFi 网络、显示文本或添加联系人。
    </p>
    <p>
      不同于只能存一串数字的传统条形码,单个二维码最多能存储数千个字符,因此在数字和印刷领域都更加灵活。
    </p>

    <h2>二维码的常见用途</h2>
    <ul>
      <li>
        <strong>营销与印刷品。</strong>把二维码放在传单、海报、名片或产品包装上,让人们直接跳转到你的网站、落地页或促销活动——无需手动输入。
      </li>
      <li>
        <strong>餐厅菜单。</strong>疫情期间许多餐厅用二维码取代了纸质菜单,而这种便利保留了下来。顾客扫码即可在浏览器中查看菜单。
      </li>
      <li>
        <strong>WiFi 共享。</strong>生成一次 WiFi 二维码,客人扫描就能加入你的网络——再也不用念一长串密码了。该码会自动在他们的手机上配置好 SSID 和密码。
      </li>
      <li>
        <strong>支付。</strong>支付类 App 用二维码在账户之间即时转账,在全球移动钱包中被广泛使用。
      </li>
      <li>
        <strong>活动门票和登机牌。</strong>航空公司、演出场馆和会议都用二维码进行快速、可扫描的入场验证。
      </li>
      <li>
        <strong>联系人共享。</strong>编码一个 vCard,让人们一键把你的联系方式添加到手机里。
      </li>
    </ul>

    <h2>如何使用本生成器</h2>
    <ol>
      <li>
        <strong>选择类型。</strong>根据你想编码的内容,在工具顶部选择 URL、文本或 WiFi。
      </li>
      <li>
        <strong>输入内容。</strong>对于 URL,粘贴完整链接(包含 <code>https://</code>)。对于 WiFi,输入网络名称、密码和加密类型。
      </li>
      <li>
        <strong>自定义外观。</strong>调整预览尺寸,选择前景色和背景色以匹配你的品牌。保持高对比度,这样扫描器才能可靠读取。
      </li>
      <li>
        <strong>下载。</strong>点击「Download PNG」,保存一张适用于印刷或网页的高分辨率图片。
      </li>
    </ol>

    <h2>让二维码易于扫描的技巧</h2>
    <p>
      二维码只有在能可靠扫描时才有用。遵循以下准则,确保你的码在每台设备上都能正常工作:
    </p>
    <ul>
      <li>
        <strong>保持高对比度。</strong>浅色背景上的深色前景扫描效果最好。避免浅色加深色或低对比度的颜色搭配。
      </li>
      <li>
        <strong>不要太小。</strong>印刷用途至少要做到 2 × 2 厘米(约 0.8 英寸)。更小的码难以扫描,尤其是远距离时。
      </li>
      <li>
        <strong>保留静区。</strong>码周围的白色边距(「静区」)有助于扫描器识别它。本工具会自动添加边距——放置图片时不要把它裁掉。
      </li>
      <li>
        <strong>印刷前先测试。</strong>在打印 1,000 张传单之前,务必用真机扫描一下生成的码。URL 里的拼写错误一旦上了纸,代价可不小。
      </li>
      <li>
        <strong>尽量缩短 URL。</strong>更短的 URL 会生成更简洁、模块更大的码,也更容易扫描。如有需要,可使用短链接服务。
      </li>
    </ul>

    <h2>静态二维码与动态二维码</h2>
    <p>
      这里生成的码是<strong>静态</strong>的:内容直接编码在图案中,一旦生成就无法更改。这非常适合 WiFi 共享、联系人名片或固定的产品链接等永久性用途。
    </p>
    <p>
      <strong>动态</strong>二维码(由付费服务提供)编码的是一个简短的重定向 URL,而非最终内容,让你日后可以更改目标地址并追踪扫描数据。对于大多数个人和小型企业用途来说,静态码就已经足够了。
    </p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>¿Qué es un código QR?</h2>
    <p>
      Un <strong>código QR</strong> (Quick Response) es un código de barras bidimensional que almacena información —
      URLs, texto, datos de contacto, credenciales WiFi y más — en un patrón de cuadrados negros sobre fondo blanco.
      Al escanearlo con la cámara del móvil, el dispositivo decodifica la información al instante y realiza la acción
      asociada: abrir un sitio web, unirse a una red WiFi, mostrar texto o añadir un contacto.
    </p>
    <p>
      A diferencia de los códigos de barras tradicionales, que contienen una breve cadena de números, un único código
      QR puede almacenar hasta varios miles de caracteres, lo que los hace mucho más versátiles para uso digital e impreso.
    </p>

    <h2>Usos comunes de los códigos QR</h2>
    <ul>
      <li>
        <strong>Marketing y medios impresos.</strong> Pon un código QR en un folleto, póster, tarjeta de visita o
        embalaje de producto para dirigir a la gente directamente a tu sitio web, una landing page o una promoción — sin escribir nada.
      </li>
      <li>
        <strong>Cartas de restaurante.</strong> Muchos restaurantes sustituyeron las cartas físicas por códigos QR
        durante la pandemia, y la comodidad se quedó. Los clientes escanean para ver la carta en su navegador.
      </li>
      <li>
        <strong>Compartir WiFi.</strong> Genera un código QR de WiFi una vez y tus invitados podrán unirse a tu red
        escaneando — sin más deletrear contraseñas largas. El código configura el SSID y la contraseña en su móvil.
      </li>
      <li>
        <strong>Pagos.</strong> Las apps de pago usan códigos QR para transferir dinero al instante entre cuentas,
        muy extendido en carteras móviles de todo el mundo.
      </li>
      <li>
        <strong>Entradas de eventos y tarjetas de embarque.</strong> Aerolíneas, recintos de conciertos y congresos
        usan códigos QR para una validación de entrada rápida y escaneable.
      </li>
      <li>
        <strong>Intercambio de contactos.</strong> Codifica una vCard para que la gente pueda añadir tu contacto a su
        móvil con un toque.
      </li>
    </ul>

    <h2>Cómo usar este generador</h2>
    <ol>
      <li>
        <strong>Elige un tipo.</strong> Selecciona URL, Texto o WiFi en la parte superior de la herramienta, según lo
        que quieras codificar.
      </li>
      <li>
        <strong>Introduce tu contenido.</strong> Para URLs, pega el enlace completo (incluyendo <code>https://</code>).
        Para WiFi, introduce el nombre de red, la contraseña y el tipo de cifrado.
      </li>
      <li>
        <strong>Personaliza el aspecto.</strong> Ajusta el tamaño de la vista previa y elige colores de primer plano y
        fondo para tu marca. Mantén un contraste alto para que los escáneres lean el código de forma fiable.
      </li>
      <li>
        <strong>Descarga.</strong> Haz clic en «Download PNG» para guardar una imagen de alta resolución lista para
        impresión o web.
      </li>
    </ol>

    <h2>Consejos para códigos QR escaneables</h2>
    <p>
      Un código QR solo es útil si se escanea de forma fiable. Sigue estas directrices para asegurar que tus códigos
      funcionen en todos los dispositivos:
    </p>
    <ul>
      <li>
        <strong>Mantén un contraste alto.</strong> Un primer plano oscuro sobre fondo claro se escanea mejor. Evita
        combinaciones claras sobre oscuras o de bajo contraste.
      </li>
      <li>
        <strong>No los hagas demasiado pequeños.</strong> Para impresión, apunta a al menos 2 × 2 cm (unos 0,8 pulgadas).
        Los códigos más pequeños cuesta escanearlos, sobre todo a distancia.
      </li>
      <li>
        <strong>Añade una zona tranquila.</strong> El margen blanco alrededor del código (la «zona tranquila») ayuda a
        los escáneres a detectarlo. Esta herramienta añade el margen automáticamente — no lo recortes al colocar la imagen.
      </li>
      <li>
        <strong>Prueba antes de imprimir.</strong> Escanea siempre tu código generado con un teléfono real antes de
        imprimir 1.000 folletos. Un error tipográfico en una URL es un fallo caro una vez en papel.
      </li>
      <li>
        <strong>Mantén las URLs cortas.</strong> Las URLs más cortas producen códigos más sencillos con módulos más
        grandes, que se escanean con más facilidad. Usa un acortador de URLs si hace falta.
      </li>
    </ul>

    <h2>Códigos QR estáticos frente a dinámicos</h2>
    <p>
      Los códigos generados aquí son <strong>estáticos</strong>: el contenido se codifica directamente en el patrón y,
      una vez creado, no puede cambiarse. Es ideal para usos permanentes como compartir WiFi, tarjetas de contacto o
      enlaces fijos de producto.
    </p>
    <p>
      Los códigos QR <strong>dinámicos</strong> (que ofrecen servicios de pago) codifican una URL de redirección corta
      en lugar del contenido final, lo que te permite cambiar el destino más adelante y rastrear analíticas de
      escaneo. Para la mayoría de usos personales y de pequeña empresa, los códigos estáticos son todo lo que necesitas.
    </p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Was ist ein QR-Code?</h2>
    <p>
      Ein <strong>QR-Code</strong> (Quick Response) ist ein zweidimensionaler Barcode, der Informationen speichert —
      URLs, Text, Kontaktdaten, WLAN-Zugangsdaten und mehr — in einem Muster aus schwarzen Quadraten auf weißem Grund.
      Beim Scannen mit der Handykamera dekodiert das Gerät die Information sofort und führt die zugehörige Aktion aus:
      eine Website öffnen, einem WLAN beitreten, Text anzeigen oder einen Kontakt hinzufügen.
    </p>
    <p>
      Anders als traditionelle Barcodes, die nur eine kurze Zahlenreihe enthalten, kann ein einzelner QR-Code bis zu
      mehrere tausend Zeichen speichern, was ihn für digitale und gedruckte Anwendungen deutlich vielseitiger macht.
    </p>

    <h2>Häufige Verwendungszwecke für QR-Codes</h2>
    <ul>
      <li>
        <strong>Marketing und Printmedien.</strong> Setze einen QR-Code auf Flyer, Poster, Visitenkarten oder
        Produktverpackungen, um Menschen direkt auf deine Website, eine Landingpage oder eine Aktion zu leiten — ohne Tippen.
      </li>
      <li>
        <strong>Speisekarten.</strong> Viele Restaurants haben während der Pandemie physische Karten durch QR-Codes
        ersetzt, und die Bequemlichkeit blieb. Gäste scannen, um die Karte im Browser zu sehen.
      </li>
      <li>
        <strong>WLAN teilen.</strong> Erstelle einmal einen WLAN-QR-Code und Gäste können per Scan deinem Netzwerk
        beitreten — kein langes Passwort mehr buchstabieren. Der Code konfiguriert SSID und Passwort auf ihrem Handy automatisch.
      </li>
      <li>
        <strong>Zahlungen.</strong> Zahlungs-Apps nutzen QR-Codes für sofortige Überweisungen zwischen Konten, weltweit
        in mobilen Wallets verbreitet.
      </li>
      <li>
        <strong>Eventtickets und Boardingpässe.</strong> Fluggesellschaften, Konzertlocations und Konferenzen nutzen
        QR-Codes für schnelle, scannbare Einlasskontrolle.
      </li>
      <li>
        <strong>Kontaktteilen.</strong> Codiere eine vCard, damit Menschen deine Kontaktdaten mit einem Tipp aufs Handy
        speichern können.
      </li>
    </ul>

    <h2>So benutzt du diesen Generator</h2>
    <ol>
      <li>
        <strong>Wähle einen Typ.</strong> Wähle oben im Werkzeug URL, Text oder WLAN, je nachdem, was du codieren willst.
      </li>
      <li>
        <strong>Gib deinen Inhalt ein.</strong> Für URLs den vollständigen Link einfügen (inklusive <code>https://</code>).
        Für WLAN Netzwerkname, Passwort und Verschlüsselungstyp eingeben.
      </li>
      <li>
        <strong>Passe das Aussehen an.</strong> Stelle die Vorschaugröße ein und wähle Vorder- und Hintergrundfarben
        passend zu deiner Marke. Halte den Kontrast hoch, damit Scanner den Code zuverlässig lesen.
      </li>
      <li>
        <strong>Herunterladen.</strong> Klicke auf „Download PNG", um ein hochauflösendes Bild für Druck oder Web zu speichern.
      </li>
    </ol>

    <h2>Tipps für scannbare QR-Codes</h2>
    <p>
      Ein QR-Code ist nur nützlich, wenn er zuverlässig scannt. Folge diesen Richtlinien, damit deine Codes auf jedem
      Gerät funktionieren:
    </p>
    <ul>
      <li>
        <strong>Hoher Kontrast.</strong> Dunkle Vordergrund auf hellem Hintergrund scannt am besten. Vermeide
        hell-auf-dunkel oder paarungen mit geringem Kontrast.
      </li>
      <li>
        <strong>Nicht zu klein machen.</strong> Für Druck auf mindestens 2 × 2 cm (ca. 0,8 Zoll) abzielen. Kleinere
        Codes lassen sich schwer scannen, besonders aus der Ferne.
      </li>
      <li>
        <strong>Ruhezone lassen.</strong> Der weiße Rand um den Code (die „Ruhezone") hilft Scannern, ihn zu erkennen.
        Dieses Werkzeug fügt automatisch einen Rand hinzu — schneide ihn beim Platzieren des Bildes nicht ab.
      </li>
      <li>
        <strong>Vor dem Drucken testen.</strong> Scanne deinen erzeugten Code immer mit einem echten Handy, bevor du
        1.000 Flyer druckst. Ein Tippfehler in einer URL ist ein teurer Fehler, sobald er auf Papier steht.
      </li>
      <li>
        <strong>URLs kurz halten.</strong> Kürzere URLs erzeugen einfachere Codes mit größeren Modulen, die sich leichter
        scannen lassen. Nutze bei Bedarf einen URL-Shortener.
      </li>
    </ul>

    <h2>Statische vs. dynamische QR-Codes</h2>
    <p>
      Die hier erzeugten Codes sind <strong>statisch</strong>: Der Inhalt ist direkt im Muster codiert und kann nach
      dem Erstellen nicht mehr geändert werden. Das ist ideal für dauerhafte Anwendungen wie WLAN-Teilen, Kontaktkarten
      oder feste Produktlinks.
    </p>
    <p>
      <strong>Dynamische</strong> QR-Codes (von kostenpflichtigen Diensten) codieren eine kurze Weiterleitungs-URL
      statt des eigentlichen Inhalts, sodass du das Ziel später ändern und Scan-Analysen erfassen kannst. Für die meisten
      privaten und Kleinunternehmens-Anwendungen reichen statische Codes völlig aus.
    </p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function QRCodeGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
