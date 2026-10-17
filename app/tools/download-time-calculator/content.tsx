'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * DownloadTimeCalculator 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Bits, bytes, and the 8× tax</h2>
    <p>ISPs sell megabits per second; files are measured in megabytes — and one byte is eight bits. A 100 Mbps line moves at most 12.5 MB/s before reality intervenes. Decimal units compound quietly too: network math uses 1 GB = 1,000 MB, while Windows reports disk space in binary gibibytes (1 GiB = 1,024 MiB), which is why a "4.5 GB" download shows up as 4.19 GB on disk.</p>
    <h2>Why 10-15% never arrives</h2>
    <p>TCP/IP headers ride on every packet, lost packets get retransmitted, TLS adds handshakes, and Wi-Fi airtime is shared with every device in range. A clean wired connection loses roughly 10% of headline speed; a busy wireless one, 15% or worse. The effective-throughput figure is the number worth remembering — it is what your file manager actually achieves.</p>
    <h2>Upload is the other bottleneck</h2>
    <p>The same formula run against your upload rate explains cloud-backup reality: on a typical 1000/50 Mbps plan, downloading 100 GB takes about 15 minutes, while uploading the same 100 GB takes more than four hours. Video calls, cloud sync, and sending large attachments all live on the upload side, which is why "symmetric" fiber feels so different.</p>
    <h2>Reading the estimate honestly</h2>
    <p>Treat the result as an optimistic floor. Server-side throttling, peak-hour congestion, distance to the CDN node, and a household streaming in 4K all shave the rate. If the estimate says 40 minutes, plan for an hour — and remember that pausing and resuming a browser download restarts the clock more often than it should.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>位、字节与 8 倍"税"</h2>
    <p>运营商卖的是兆位/秒,文件按兆字节计——而 1 字节 = 8 位。100 Mbps 的线路在现实介入之前,上限就是 12.5 MB/s。十进制单位也在悄悄叠加:网络计算用 1 GB = 1000 MB,而 Windows 报告磁盘容量用二进制 GiB(1 GiB = 1024 MiB)——这就是"4.5 GB"的下载落到磁盘上显示 4.19 GB 的原因。</p>
    <h2>为什么总有 10-15% 到不了</h2>
    <p>每个包都背着 TCP/IP 头部,丢包要重传,TLS 有握手开销,Wi-Fi 的空口时间还要与范围内所有设备共享。顺畅的有线连接大约损失宣传速率的 10%,繁忙的无线环境 15% 起步。值得记住的是"有效吞吐"那个数——它才是文件管理器真实能达到的速度。</p>
    <h2>上传是另一条瓶颈</h2>
    <p>把同一公式套在上传速率上,云备份的现实就清楚了:典型的 1000/50 Mbps 套餐,下载 100 GB 约 15 分钟,上传同样 100 GB 要四个多小时。视频会议、云同步、发大附件都活在上传侧——这也是"上下行对等"光纤体验完全不同的原因。</p>
    <h2>诚实地读估算值</h2>
    <p>把结果当乐观下限。服务端限速、晚高峰拥塞、到 CDN 节点的距离、家里正在 4K 追剧的室友,都在削你的速率。估算说 40 分钟,就按 1 小时打算;还有,浏览器下载暂停再恢复,重置计时器的概率远比它应有的高。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Bits, bytes y el impuesto del 8×</h2>
    <p>Los proveedores venden megabits por segundo; los archivos se miden en megabytes — y un byte son ocho bits. Una línea de 100 Mbps mueve como mucho 12,5 MB/s antes de que llegue la realidad. Las unidades decimales también suman en silencio: la red usa 1 GB = 1000 MB, mientras que Windows informa en gibibytes binarios (1 GiB = 1024 MiB) — por eso una descarga «de 4,5 GB» aparece en disco como 4,19 GB.</p>
    <h2>Por qué nunca llegan el 10-15 %</h2>
    <p>Cada paquete carga cabeceras TCP/IP, los perdidos se retransmiten, TLS añade negociaciones y el aire del Wi-Fi se comparte con todos los dispositivos de la zona. Un cable limpio pierde en torno al 10 % de la velocidad nominal; una red inalámbrica ocupada, el 15 % o más. La cifra que merece la pena recordar es el rendimiento efectivo — lo que tu gestor de archivos consigue de verdad.</p>
    <h2>La subida es el otro cuello de botella</h2>
    <p>La misma fórmula aplicada a tu velocidad de subida explica el drama de las copias en la nube: en un plan típico de 1000/50 Mbps, bajar 100 GB lleva unos 15 minutos, pero subirlos lleva más de cuatro horas. Videollamadas, sincronización y adjuntos grandes viven del lado de la subida — de ahí la diferencia de sentir la fibra simétrica.</p>
    <h2>Leer la estimación con honestidad</h2>
    <p>Tómala como suelo optimista. La limitación del servidor, la congestión de horas punta, la distancia al nodo CDN y la familia en 4K recortan la tasa. Si la estimación dice 40 minutos, planifica una hora — y recuerda que pausar y reanudar una descarga del navegador reinicia el cronómetro más de lo que debería.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Bits, Bytes und die 8×-Steuer</h2>
    <p>Anbieter verkaufen Megabits pro Sekunde, Dateien werden in Megabytes gemessen — und ein Byte sind acht Bit. Eine 100-Mbit-Leitung schafft vor allen Realitäten höchstens 12,5 MB/s. Auch die Einheiten rechnen sich leise weg: Das Netz nutzt 1 GB = 1000 MB, Windows meldet dagegen binäre Gibibytes (1 GiB = 1024 MiB) — deshalb zeigt ein „4,5-GB“-Download auf der Platte nur 4,19 GB.</p>
    <h2>Warum 10-15 % nie ankommen</h2>
    <p>Jedes Paket trägt TCP/IP-Header, verlorene Pakete werden erneut geschickt, TLS kostet Handshakes, und die WLAN-Luftzeit teilst du dir mit allen Geräten in Reichweite. Eine saubere Kabelverbindung verliert rund 10 % der Nenngeschwindigkeit, ein volles Funknetz 15 % und mehr. Merk dir die effektive Durchsatzrate — das ist die Zahl, die der Dateimanager wirklich erreicht.</p>
    <h2>Der Upload ist der andere Flaschenhals</h2>
    <p>Dieselbe Formel auf die Upload-Rate zeigt das Cloud-Backup-Drama: Bei einem typischen 1000/50-Tarif dauert der Download von 100 GB rund 15 Minuten, der Upload derselben Daten über vier Stunden. Videocalls, Cloud-Sync und große Anhänge leben auf der Upload-Seite — deshalb fühlt sich symmetrisches Glasfaser so anders an.</p>
    <h2>Die Schätzung ehrlich lesen</h2>
    <p>Nimm das Ergebnis als optimistische Untergrenze. Server-Drosseln, Stoßzeiten, Distanz zum CDN-Knoten und der 4K-streamende Haushalt scheren alle an der Rate. Steht da 40 Minuten, plane eine Stunde — und denk daran: Browser-Downloads setzen nach Pause oft den Fortschritt zurück.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function DownloadTimeCalculatorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
