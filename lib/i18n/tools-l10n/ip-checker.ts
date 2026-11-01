/**
 * ip-checker 本地化 bundle —— zh / es / de
 * 覆盖:ui + useCases + faqs
 */
import type { ToolL10n } from '../tool-l10n'

export const ipCheckerL10n: ToolL10n = {

  es: {
    ui: {
      'asn': 'ASN',
      'cfColo': 'Colo CF',
      'customQueryAria': 'Consulta personalizada de IP o dominio',
      'edgeFrankfurt': 'Fráncfort (AWS eu-central-1)',
      'edgeSingapore': 'Singapur (AWS ap-southeast-1)',
      'edgeTokyo': 'Tokio (AWS ap-northeast-1)',
      'edgeUsEast': 'Este de EE. UU. (AWS Norte de Virginia)',
      'edgeUsWest': 'Oeste de EE. UU. (AWS Oregón)',
      'mapTitle': 'Mapa de ubicación IP (OpenStreetMap)',
      'of100': 'de 100',
      'outOf5Stars': 'de 5 estrellas',
      'riskScoreAria': 'Puntuación de riesgo',
      'statusOk': 'OK',
      'uaPrefix': 'UA',
    },
    useCases: [
      'comprobador de puntuación de fraude IP',
      'comprobación IP residencial vs datacenter',
      'comprobador de calidad IP para TikTok',
      'detector de proxy VPN online gratis',
    ],
    faqs: [
      {
        q: '¿Qué es una puntuación de fraude IP y cómo se calcula?',
        a: 'Una puntuación de fraude es una valoración heurística de 0 a 100 de lo sospechosa que parece una IP para las plataformas online. Combina señales como el tipo de ASN (datacenter frente a residencial), las discrepancias entre la zona horaria de tu dispositivo y la de la geolocalización de la IP, y palabras clave de hosting/proxy en el nombre del propietario del ASN. Cuanto mayor es la puntuación, más se parece la IP a un bot, una VPN o un nodo de salida de proxy.',
      },
      {
        q: '¿Cuál es la diferencia entre una IP residencial y una IP de datacenter (IDC)?',
        a: 'Las IP residenciales las asignan ISP de consumo a hogares reales, por lo que las plataformas tratan su tráfico como humano. Las IP de datacenter provienen de proveedores de nube como AWS, Google Cloud o DigitalOcean; son baratas de obtener en volumen, y por eso TikTok, Amazon y plataformas similares las marcan — las cuentas operadas desde IP de datacenter se enfrentan a muchas más verificaciones y baneos.',
      },
      {
        q: '¿Por qué la zona horaria de mi dispositivo difiere de la de mi IP?',
        a: 'La zona horaria del dispositivo viene de la configuración del navegador/sistema operativo, mientras que la de la IP se deduce geolocalizando tu IP de salida. Si no coinciden — por ejemplo, el dispositivo indica Asia/Shanghai pero la IP resuelve a America/New_York — casi seguro estás detrás de una VPN o proxy, y los sistemas antifraude usan justo ese desajuste como señal de fuga.',
      },
    ],
  },
  de: {
    ui: {
      'asn': 'ASN',
      'cfColo': 'CF-Colo',
      'customQueryAria': 'Eigene IP- oder Domain-Abfrage',
      'edgeFrankfurt': 'Frankfurt (AWS eu-central-1)',
      'edgeSingapore': 'Singapur (AWS ap-southeast-1)',
      'edgeTokyo': 'Tokio (AWS ap-northeast-1)',
      'edgeUsEast': 'US-Osten (AWS N. Virginia)',
      'edgeUsWest': 'US-Westen (AWS Oregon)',
      'mapTitle': 'IP-Standortkarte (OpenStreetMap)',
      'of100': 'von 100',
      'outOf5Stars': 'von 5 Sternen',
      'riskScoreAria': 'Risiko-Score',
      'statusOk': 'OK',
      'uaPrefix': 'UA',
    },
    useCases: [
      'IP-Betrugsscore-Prüfer',
      'Residential- vs. Datacenter-IP-Prüfung',
      'IP-Qualitäts-Prüfer für TikTok',
      'kostenloser Proxy-VPN-Detektor online',
    ],
    faqs: [
      {
        q: 'Was ist ein IP-Betrugsscore und wie wird er berechnet?',
        a: 'Ein Betrugsscore ist eine heuristische Bewertung von 0 bis 100 dafür, wie riskant eine IP für Online-Plattformen wirkt. Er kombiniert Signale wie den ASN-Typ (Rechenzentrum vs. Wohnanschluss), Abweichungen zwischen der Geräte-Zeitzone und der Zeitzone der IP-Geolokalisierung sowie Hosting-/Proxy-Schlüsselwörter im Namen des ASN-Betreibers. Je höher der Score, desto mehr ähnelt die IP einem Bot, einem VPN oder einem Proxy-Exit-Knoten.',
      },
      {
        q: 'Was ist der Unterschied zwischen einer Residential-IP und einer Datacenter-IP (IDC)?',
        a: 'Residential-IPs werden von Consumer-Providern an echte Haushalte vergeben, weshalb Plattformen ihren Traffic als menschlich einstufen. Datacenter-IPs stammen von Cloud-Anbietern wie AWS, Google Cloud oder DigitalOcean; sie sind günstig in großer Zahl zu bekommen, deshalb markieren TikTok, Amazon und ähnliche Plattformen sie — Accounts auf Datacenter-IPs erleben deutlich mehr Verifizierungsanforderungen und Sperren.',
      },
      {
        q: 'Warum weicht meine Geräte-Zeitzone von der IP-Zeitzone ab?',
        a: 'Die Geräte-Zeitzone stammt aus den Browser-/Systemeinstellungen, die IP-Zeitzone ergibt sich aus der Geolokalisierung deiner Exit-IP. Stimmen sie nicht überein — etwa meldet das Gerät Asia/Shanghai, während die IP nach America/New_York auflöst — sitzt du fast sicher hinter einem VPN oder Proxy, und Anti-Betrugssysteme nutzen genau diese Abweichung als Leak-Signal.',
      },
    ],
  },
}
