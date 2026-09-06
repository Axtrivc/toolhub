/**
 * wheel-spinner 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui + useCases + faqs。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const WheelSpinnerL10n: ToolL10n = {
  zh: {
    useCases: [
      '课堂随机点名:40 个名字全贴进转盘,每人被点中的概率完全相等',
      '家务分工:洗碗、倒垃圾、遛狗都进转盘,转出谁就是谁,免掉互相推诿',
      '聚餐选地方:15 家备选餐厅转一次,省掉群里半小时的「都行」「随便」',
      '抽奖活动:中奖者移出转盘后再转一轮,依次抽出第二、三名',
    ],
    faqs: [
      { q: '转盘的随机性可靠吗?', a: '可靠。中奖选项在动画播放前就用加密级随机数抽出——转盘动画只是视觉揭晓,不参与决定。每个选项中奖概率相等,与它在转盘上的位置无关。' },
      { q: '中奖后能移除这个名字吗?', a: '可以。每次转动后可删掉中奖者、用剩余选项再转,这正是抽奖和「下一个是谁」排队场景的用法;也可以复制某个选项来提高其中奖概率。' },
      { q: '最多能放多少个选项?', a: '转盘在几十个选项内仍清晰可读;超过约 50 个后标签变小、视觉上难以跟随,但抽取本身依然公平。人数很多时可分轮进行,或改用随机分组工具。' },
      { q: '我的名单会被保存吗?', a: '不会。一切都在浏览器本地运行,无账号、无服务器存储——关掉标签页名单就消失。这让它适合课堂使用,也适合员工福利抽奖这类保密场合。' },
    ],
    ui: {
      'itemsHint': '转盘上有 {n} 个选项',
      'itemsOverflow': '已忽略多出的 {extra} 行——转盘最多 12 个选项',
      'itemsLabel': '选项 — 每行一个(最多 12 个)',
      'note': '🎡 中奖扇区先用加密级随机数抽出,转盘再动画转到它——漂亮的动画之下是真正公平的抽取。',
      'spin': '转动',
      'wheelAlt': '抽奖转盘',
    },
  },
  es: {
    useCases: [
      'orden de exposiciones en clase: 20 nombres con la misma probabilidad para todos',
      'repartir tareas domésticas: platos, basura y pasear al perro los decide la rueda',
      'elegir el restaurante del viernes entre 15 candidatos sin discusiones eternas',
      'sorteo de premios: elimina al ganador y gira de nuevo para el segundo puesto',
    ],
    faqs: [
      { q: '¿Qué tan aleatorio es el giro?', a: 'La opción ganadora se sortea con aleatoriedad criptográfica antes de reproducir la animación: el giro es solo una revelación visual. Todas las opciones tienen la misma probabilidad, sin importar su posición en la rueda.' },
      { q: '¿Puedo quitar un nombre después de que gane?', a: 'Sí: tras cada giro puedes borrar al ganador y volver a girar con el resto, el flujo típico de sorteos y turnos de «a quién le toca». También puedes duplicar entradas para dar más peso a alguien.' },
      { q: '¿Cuántas entradas admite como máximo?', a: 'La rueda sigue legible hasta unas docenas de entradas; a partir de ~50 las etiquetas se encogen y cuesta seguir el giro visualmente, aunque el sorteo sigue siendo justo. Con grupos grandes, divide en rondas o usa el generador aleatorio de equipos.' },
      { q: '¿Mi lista de nombres se guarda en algún sitio?', a: 'No. Todo funciona en tu navegador sin cuenta ni almacenamiento en servidor: cierras la pestaña y desaparece. Por eso es apto para el aula y para sorteos confidenciales entre empleados.' },
    ],
    ui: {
      'itemsHint': '{n} opciones en la rueda',
      'itemsOverflow': '{extra} líneas de más ignoradas — la rueda admite máx. 12',
      'itemsLabel': 'Opciones — una por línea (máx. 12)',
      'note': '🎡 El sector ganador se sortea con aleatoriedad criptográfica antes de que la rueda anime hacia él — movimiento bonito sobre selección justa.',
      'spin': 'Girar',
      'wheelAlt': 'Rueda de premios',
    },
  },
  de: {
    useCases: [
      'Abfrage-Reihenfolge im Unterricht: 40 Schülernamen, für jeden dieselbe Chance',
      'Haushaltsaufgaben verteilen: Spülen, Müll, Gassigängen — das Rad entscheidet',
      'aus 15 Restaurantkandidaten das Freitagabend-Lokal ermitteln, ohne Diskussion',
      'Gewinnspiel: Gewinner aus dem Rad löschen und den zweiten Platz nachziehen',
    ],
    faqs: [
      { q: 'Wie zufällig ist das Rad?', a: 'Der Gewinnereintrag wird vor der Animation mit kryptografischer Zufälligkeit gezogen — die Drehbewegung ist nur eine visuelle Enthüllung. Jeder Eintrag hat dieselbe Chance, unabhängig von seiner Position auf dem Rad.' },
      { q: 'Kann ich einen Namen nach dem Gewinn entfernen?', a: 'Ja — nach jedem Dreh den Gewinner löschen und mit den restlichen Einträgen weiterdrehen: genau der Ablauf für Verlosungen und «wer kommt als Nächstes»-Warteschlangen. Duplizierte Einträge erhöhen die Gewinnchance.' },
      { q: 'Wie viele Einträge sind maximal möglich?', a: 'Bis zu einige Dutzend Einträge bleibt das Rad gut lesbar; über ~50 schrumpfen die Beschriftungen, obwohl die Ziehung fair bleibt. Bei großen Gruppen in Runden aufteilen oder den Zufalls-Team-Generator nutzen.' },
      { q: 'Wird meine Liste irgendwo gespeichert?', a: 'Nein. Alles läuft im Browser ohne Konto und ohne Serverspeicher — Tab schließen, Einträge weg. Dadurch ist es klassenzimmertauglich und passt zu vertraulichen Ziehungen wie Mitarbeiter-Verlosungen.' },
    ],
    ui: {
      'itemsHint': '{n} Optionen auf dem Rad',
      'itemsOverflow': '{extra} zusätzliche Zeilen ignoriert — das Rad fasst max. 12',
      'itemsLabel': 'Optionen — eine pro Zeile (max. 12)',
      'note': '🎡 Der Gewinnersektor wird kryptografisch gezogen, bevor das Rad dorthin animiert — schöne Bewegung über ehrlich fairer Auswahl.',
      'spin': 'Drehen',
      'wheelAlt': 'Glücksrad',
    },
  },
}
