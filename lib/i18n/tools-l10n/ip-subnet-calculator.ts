/**
 * ip-subnet-calculator 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs(client = IpSubnetCalculatorClient = 自定义 devtool client)
 */
import type { ToolL10n } from '../tool-l10n'

export const ipSubnetCalculatorL10n: ToolL10n = {
  zh: {
    ui: {
      'addressType': '地址类型',
      'binaryMask': '二进制掩码',
      'broadcastAddress': '广播地址',
      'copySummary': '复制摘要',
      'firstUsableHost': '首个可用主机',
      'inputLabel': '带前缀的 IPv4 地址(CIDR、点分掩码或空格分隔)',
      'ipAddress': 'IP 地址',
      'ipClass': 'IP 类别',
      'lastUsableHost': '末个可用主机',
      'networkAddress': '网络地址',
      'noteF1': '🔒 接受的输入:',
      'noteF2': ', ',
      'noteF3': ', 或 ',
      'noteF4': '。边界情况遵循 RFC:',
      'noteF5': ' 是点对点链路,有 2 个可用地址(RFC 3021),而 "',
      'noteF6': ' 标识单个主机。"',
      'sInput': '输入:',
      'subnetMask': '子网掩码',
      'summaryTitle': 'IP 子网摘要',
      'totalAddresses': '地址总数',
      'usableHosts': '可用主机数',
      'wildcardMask': '通配符掩码',
    },
    formula: {
      formula: 'addresses = 2^(32 − prefix)\nusable hosts = 2^(32 − prefix) − 2',
      explain: 'IPv4 /prefix 中,主机位为 (32 − prefix)。两个地址保留(网络地址和广播地址),所以可用主机比地址总数少 2。',
    },
    useCases: [
      'CIDR 转子网掩码转换器',
      '可用主机范围计算器',
      '在线通配符掩码计算器',
      '一个 /24 子网能容纳多少主机',
    ],
    faqs: [
      {
        q: '什么是 CIDR 表示法(例如 /24)?',
        a: 'CIDR 是 IP 后面的「/数字」,表示有多少位属于网络部分。/24 表示前 24 位固定、后 8 位可变,共 256 个地址。数字越小(如 /16)覆盖主机越多;数字越大(如 /30)覆盖越少。',
      },
      {
        q: '为什么可用主机数比地址总数少 2 个?',
        a: '每个子网里,第一个地址保留为网络地址、最后一个保留为广播地址,两者都不能分配给设备。所以 /24 有 256 个地址但只有 254 个可用主机;/30 有 4 个地址但只有 2 个可用。',
      },
      {
        q: '网络地址和广播地址分别是做什么用的?',
        a: '网络地址标识子网本身,被路由器使用;广播地址用于向该子网内的所有主机发送数据包。两者都不属于任何一台具体设备,所以都被排除在可用主机范围之外。',
      },
    ],
  },
  es: {
    ui: {
      'addressType': 'Tipo de dirección',
      'binaryMask': 'Máscara binaria',
      'broadcastAddress': 'Dirección de broadcast',
      'copySummary': 'Copiar resumen',
      'firstUsableHost': 'Primer host utilizable',
      'inputLabel': 'Dirección IPv4 con prefijo (CIDR, máscara con puntos o separada por espacios)',
      'ipAddress': 'Dirección IP',
      'ipClass': 'Clase IP',
      'lastUsableHost': 'Último host utilizable',
      'networkAddress': 'Dirección de red',
      'noteF1': '🔒 Entradas aceptadas: ',
      'noteF2': ', ',
      'noteF3': ', o ',
      'noteF4': '. Los casos límite siguen los RFC: ',
      'noteF5': ' es un enlace punto a punto con 2 hosts utilizables (RFC 3021) y "',
      'noteF6': ' identifica un único host."',
      'sInput': 'Entrada:',
      'subnetMask': 'Máscara de subred',
      'summaryTitle': 'Resumen de subred IP',
      'totalAddresses': 'Direcciones totales',
      'usableHosts': 'Hosts utilizables',
      'wildcardMask': 'Máscara comodín',
    },
    formula: {
      formula: 'addresses = 2^(32 − prefix)\nusable hosts = 2^(32 − prefix) − 2',
      explain: 'En un /prefix IPv4, los bits de host son (32 − prefix). Dos direcciones se reservan (red y broadcast), así los hosts utilizables son dos menos que el total.',
    },
    useCases: [
      'convertidor de CIDR a máscara de subred',
      'calculadora de rango de hosts utilizables',
      'calculadora de máscara comodín online',
      'cuántos hosts caben en una subred /24',
    ],
    faqs: [
      {
        q: '¿Qué es la notación CIDR (p. ej. /24)?',
        a: 'CIDR es el /número detrás de una IP que indica cuántos bits forman la parte de red. /24 significa que los primeros 24 bits son fijos y los últimos 8 varían, dando 256 direcciones. Números más pequeños (como /16) cubren más hosts; más grandes (como /30), menos.',
      },
      {
        q: '¿Por qué hay dos hosts utilizables menos que el total de direcciones?',
        a: 'En cada subred, la primera dirección se reserva como dirección de red y la última como dirección de broadcast, y ninguna puede asignarse a un dispositivo. Un /24 tiene 256 direcciones pero solo 254 hosts utilizables; un /30 tiene 4 direcciones pero solo 2 utilizables.',
      },
      {
        q: '¿Para qué sirven la dirección de red y la de broadcast?',
        a: 'La dirección de red identifica a la propia subred y la usan los routers; la de broadcast envía un paquete a todos los hosts de esa subred. Ninguna pertenece a un dispositivo individual, por eso ambas se excluyen del rango de hosts utilizables.',
      },
    ],
  },
  de: {
    ui: {
      'addressType': 'Adresstyp',
      'binaryMask': 'Binäre Maske',
      'broadcastAddress': 'Broadcast-Adresse',
      'copySummary': 'Zusammenfassung kopieren',
      'firstUsableHost': 'Erster nutzbarer Host',
      'inputLabel': 'IPv4-Adresse mit Präfix (CIDR, Punktschreibweise oder leerzeichengetrennt)',
      'ipAddress': 'IP-Adresse',
      'ipClass': 'IP-Klasse',
      'lastUsableHost': 'Letzter nutzbarer Host',
      'networkAddress': 'Netzwerkadresse',
      'noteF1': '🔒 Akzeptierte Eingaben: ',
      'noteF2': ', ',
      'noteF3': ', oder ',
      'noteF4': '. Grenzfälle folgen den RFCs: ',
      'noteF5': ' ist eine Punkt-zu-Punkt-Verbindung mit 2 nutzbaren Adressen (RFC 3021) und "',
      'noteF6': ' bezeichnet einen einzelnen Host."',
      'sInput': 'Eingabe:',
      'subnetMask': 'Subnetzmaske',
      'summaryTitle': 'IP-Subnetz Zusammenfassung',
      'totalAddresses': 'Adressen gesamt',
      'usableHosts': 'Nutzbare Hosts',
      'wildcardMask': 'Wildcard-Maske',
    },
    formula: {
      formula: 'addresses = 2^(32 − prefix)\nusable hosts = 2^(32 − prefix) − 2',
      explain: 'Bei einem IPv4 /prefix sind die Host-Bits (32 − prefix). Zwei Adressen sind reserviert (Netzwerk und Broadcast), daher sind nutzbare Hosts zwei weniger als die Gesamtanzahl.',
    },
    useCases: [
      'CIDR-in-Subnetzmaske-Umrechner',
      'Rechner für den nutzbaren Host-Bereich',
      'Online-Rechner für Wildcard-Masken',
      'wie viele Hosts passen in ein /24-Subnetz',
    ],
    faqs: [
      {
        q: 'Was ist die CIDR-Schreibweise (z. B. /24)?',
        a: 'CIDR ist die /Zahl hinter einer IP und gibt an, wie viele Bits zum Netzwerkteil gehören. /24 bedeutet: die ersten 24 Bits sind fest, die letzten 8 variieren — das sind 256 Adressen. Kleinere Zahlen (wie /16) decken mehr Hosts ab; größere (wie /30) weniger.',
      },
      {
        q: 'Warum gibt es zwei nutzbare Hosts weniger als Adressen insgesamt?',
        a: 'In jedem Subnetz ist die erste Adresse als Netzwerkadresse und die letzte als Broadcast-Adresse reserviert, beide können keinem Gerät zugewiesen werden. Ein /24 hat 256 Adressen, aber nur 254 nutzbare Hosts; ein /30 hat 4 Adressen, aber nur 2 nutzbare.',
      },
      {
        q: 'Wozu dienen Netzwerk- und Broadcast-Adresse?',
        a: 'Die Netzwerkadresse identifiziert das Subnetz selbst und wird von Routern verwendet; die Broadcast-Adresse sendet ein Paket an alle Hosts im Subnetz. Keine gehört zu einem einzelnen Gerät, deshalb werden beide aus dem nutzbaren Host-Bereich ausgeschlossen.',
      },
    ],
  },
}
