import type { ReactNode } from 'react'

/** QR Code Generator 配套深度内容 */
export function QRCodeGeneratorContent(): ReactNode {
  return (
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
}
