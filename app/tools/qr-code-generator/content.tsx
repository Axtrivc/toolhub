'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * QR Code Generator 长文正文 —— 三语 dispatcher
 *
 * en 分支等价于原渲染输出。es/de 仅客户端 hydration 后切换。
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
      up to several thousand characters, making it far more versatile for both digital and print
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
        <strong>Download.</strong>{' '}
        Click &quot;Download PNG&quot; to save a high-resolution image
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
        <strong>Add a quiet zone.</strong>{' '}
        The white margin around the code (the &quot;quiet
        zone&quot;) helps scanners detect it. This tool adds a margin automatically — don&apos;t
        crop it off when placing the image.
      </li>
      <li>
        <strong>Test before printing.</strong>{' '}
        Always scan your generated code with a real phone
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
      QR puede almacenar hasta varios miles de caracteres, lo que lo hace mucho más versátil para uso digital e impreso.
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
        escaneando — sin tener que deletrear contraseñas largas. El código configura el SSID y la contraseña en su móvil.
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
        <strong>Descarga.</strong> Haz clic en «Descargar PNG» para guardar una imagen de alta resolución lista para
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
        <strong>No los hagas demasiado pequeños.</strong> Para impresión, apunta a un mínimo de 2 × 2 cm (unos 0,8 pulgadas).
        Los códigos más pequeños se escanean peor, sobre todo a distancia.
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
      en lugar del contenido final, lo que te permite cambiar el destino más adelante y rastrear estadísticas de
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
        QR-Codes für schnelle, scanbare Einlasskontrolle.
      </li>
      <li>
        <strong>Kontaktteilen.</strong> Codiere eine vCard, damit Menschen deine Kontaktdaten mit einem Fingertipp aufs Handy
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
        Für WLAN: Netzwerkname, Passwort und Verschlüsselungstyp eingeben.
      </li>
      <li>
        <strong>Passe das Aussehen an.</strong> Stelle die Vorschaugröße ein und wähle Vorder- und Hintergrundfarben
        passend zu deiner Marke. Halte den Kontrast hoch, damit Scanner den Code zuverlässig lesen.
      </li>
      <li>
        <strong>Herunterladen.</strong> Klicke auf „PNG herunterladen“, um ein hochauflösendes Bild für Druck oder Web zu speichern.
      </li>
    </ol>

    <h2>Tipps für scanbare QR-Codes</h2>
    <p>
      Ein QR-Code ist nur nützlich, wenn er sich zuverlässig scannen lässt. Folge diesen Richtlinien, damit deine Codes auf jedem
      Gerät funktionieren:
    </p>
    <ul>
      <li>
        <strong>Hoher Kontrast.</strong> Dunkle Vordergrund auf hellem Hintergrund scannt am besten. Vermeide
        hell-auf-dunkel oder Kombinationen mit geringem Kontrast.
      </li>
      <li>
        <strong>Nicht zu klein machen.</strong> Für Druck auf mindestens 2 × 2 cm (ca. 0,8 Zoll) abzielen. Kleinere
        Codes lassen sich schwer scannen, besonders aus der Ferne.
      </li>
      <li>
        <strong>Ruhezone lassen.</strong> Der weiße Rand um den Code (die „Ruhezone“) hilft Scannern, ihn zu erkennen.
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

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, es, de }

export function QRCodeGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
