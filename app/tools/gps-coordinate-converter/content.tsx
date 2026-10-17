'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * GpsCoordinateConverter 长文正文 —— 四语 dispatcher
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Three formats, three worlds</h2>
    <p>Decimal degrees (40.7128, -74.0060) rule software: Google Maps URLs, GeoJSON, PostGIS, and virtually every API. Degrees-minutes-seconds (40° 42' 46.1" N, 74° 0' 21.6" W) survive on nautical charts, aviation, geocaching printouts, and legal land descriptions. Degrees-decimal-minutes (40° 42.768' N) is the house style of handheld GPS units and NMEA sentences. Every conversion is exact — no precision is lost moving between them.</p>
    <h2>Hemispheres, signs, and the minus convention</h2>
    <p>Latitude is positive north of the equator, negative south; longitude is positive east of Greenwich, negative west. "74.0060° W" and "-74.0060" are the same point — which means pasting a positive longitude where a western one belongs drops your pin in Mongolia instead of Manhattan. Most coordinate-order bugs are sign bugs: always sanity-check that New York is roughly +41, -74.</p>
    <h2>How many decimals do you need?</h2>
    <p>One degree of latitude is about 111 km, so each decimal place divides error by ten: 4 decimals ≈ 11 m (good enough for a street address), 5 ≈ 1.1 m (a parking spot), 6 ≈ 0.11 m (geocaching and survey markers). Longitude shrinks with the cosine of latitude — at 60° north, a longitude degree is only 55.8 km — but the decimal-place rule of thumb holds everywhere.</p>
    <h2>The lon-first trap</h2>
    <p>Humans say "latitude, longitude"; GeoJSON, shapely, PostGIS, and most mapping libraries demand [longitude, latitude] in x-y order. Swap them and your point lands in the ocean or the polar desert — the classic reason a map layer renders empty. The output above includes a ready-to-paste lon-first pair so the order never has to be remembered, only copied.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>三种格式,三个世界</h2>
    <p>十进制度(40.7128, -74.0060)统治软件世界:Google Maps 链接、GeoJSON、PostGIS 以及几乎全部 API。度分秒(40° 42' 46.1" N, 74° 0' 21.6" W)活在海图、航空、地理缓存打印件和土地法律文书里。度分(40° 42.768' N)则是手持 GPS 与 NMEA 语句的当家写法。三者互转是精确的——不会损失任何精度。</p>
    <h2>方位字母、符号与负号惯例</h2>
    <p>纬度赤道以北为正、以南为负;经度本初子午线以东为正、以西为负。"74.0060° W" 与 "-74.0060" 是同一个点——这也意味着,把西经位置粘成正经度,你的图钉会从曼哈顿掉到蒙古。多数坐标顺序 bug 本质是符号 bug:永远先抽查一下"纽约约在 +41, -74"。</p>
    <h2>小数点后留几位才够?</h2>
    <p>一度纬度约 111 公里,小数每多一位、误差除以十:4 位小数约 11 米(够定位到门牌),5 位约 1.1 米(一个车位),6 位约 0.11 米(寻宝与测量标志)。经度圈随纬度余弦收缩——北纬 60° 处一经度只有 55.8 公里——但"一位小数一数量级"的经验到处成立。</p>
    <h2>经度在前的陷阱</h2>
    <p>人类口语说"纬度,经度";GeoJSON、shapely、PostGIS 和多数地图库却要求 [经度, 纬度] 的 x-y 顺序。一交换,你的点就落进大洋或极地荒原——地图图层渲染成空白的经典原因。上面输出里专门给了一行可直接粘贴的"经度在前"坐标对,顺序不用记,照抄即可。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Tres formatos, tres mundos</h2>
    <p>Los grados decimales (40.7128, -74.0060) dominan el software: enlaces de Google Maps, GeoJSON, PostGIS y prácticamente todas las APIs. Los grados-minutos-segundos (40° 42' 46.1" N, 74° 0' 21.6" W) sobreviven en cartas náuticas, aviación, listados de geocaching y descripciones legales de terrenos. Los grados-minutos decimales (40° 42.768' N) son el estilo de los GPS de mano y las tramas NMEA. Todas las conversiones son exactas: no se pierde precisión al pasar de una a otra.</p>
    <h2>Hemisferios, signos y la convención del menos</h2>
    <p>La latitud es positiva al norte del ecuador y negativa al sur; la longitud, positiva al este de Greenwich y negativa al oeste. «74.0060° O» y «-74.0060» son el mismo punto — y por eso pegar una longitud positiva donde iba una occidental deja el pin en Mongolia en vez de Manhattan. La mayoría de los bugs de coordenadas son bugs de signo: comprueba siempre que Nueva York ronda +41, -74.</p>
    <h2>¿Cuántos decimales necesitas?</h2>
    <p>Un grado de latitud son unos 111 km, así que cada decimal divide el error entre diez: 4 decimales ≈ 11 m (suficiente para un portal), 5 ≈ 1,1 m (una plaza de aparcamiento), 6 ≈ 0,11 m (geocaching y hitos topográficos). La longitud se encoge con el coseno de la latitud — a 60° norte un grado son solo 55,8 km — pero la regla del decimal vale en todas partes.</p>
    <h2>La trampa del longitud-primero</h2>
    <p>Los humanos dicen «latitud, longitud»; GeoJSON, shapely, PostGIS y casi todas las librerías exigen [longitud, latitud] en orden x-y. Al intercambiarlas, el punto cae al océano o al desierto polar — la razón clásica de que una capa del mapa salga vacía. La salida incluye un par listo para pegar con la longitud primero: no hay que recordar el orden, solo copiar.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Drei Formate, drei Welten</h2>
    <p>Dezimalgrade (40.7128, -74.0060) beherrschen die Software: Google-Maps-Links, GeoJSON, PostGIS und praktisch jede API. Grad-Minuten-Sekunden (40° 42' 46.1" N, 74° 0' 21.6" W) überleben auf Seekarten, in der Luftfahrt, auf Geocaching-Ausdrucken und in Liegenschaftsbeschreibungen. Grad-Dezimalminuten (40° 42.768' N) sind der Hausstil von Hand-GPS und NMEA-Daten. Jede Umrechnung ist exakt — es geht keine Präzision verloren.</p>
    <h2>Halbkugeln, Vorzeichen und die Minus-Konvention</h2>
    <p>Breite ist nördlich des Äquators positiv, südlich negativ; Länge östlich von Greenwich positiv, westlich negativ. „74.0060° W“ und „-74.0060“ sind derselbe Punkt — und deshalb landet der Pin in der Mongolei statt in Manhattan, wenn du eine westliche Länge positiv einfügst. Die meisten Koordinaten-Bugs sind Vorzeichen-Bugs: Gegenprobe, dass New York etwa +41, -74 liegt.</p>
    <h2>Wie viele Nachkommastellen brauchst du?</h2>
    <p>Ein Breitengrad sind rund 111 km, jede Nachkommastelle teilt den Fehler durch zehn: 4 Stellen ≈ 11 m (für eine Hausadresse), 5 ≈ 1,1 m (ein Parkplatz), 6 ≈ 0,11 m (Geocaching und Vermessungspunkte). Die Länge schrumpft mit dem Breitenkosinus — bei 60° Nord ist ein Längengrad nur 55,8 km —, aber die Stellen-Regel gilt überall.</p>
    <h2>Die Länge-zuerst-Falle</h2>
    <p>Menschen sagen „Breite, Länge“; GeoJSON, shapely, PostGIS und die meisten Kartenbibliotheken verlangen [Länge, Breite] in x-y-Reihenfolge. Vertauscht du sie, landet der Punkt im Ozean oder in der Polarwüste — der klassische Grund für leere Kartenlayer. Die Ausgabe oben enthält ein fertiges Länge-zuerst-Paar: Reihenfolge nicht merken, einfach kopieren.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function GpsCoordinateConverterContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
