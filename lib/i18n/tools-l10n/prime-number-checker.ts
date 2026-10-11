/**
 * prime-number-checker 本地化 bundle —— zh / es / de
 * 覆盖:faqs + ui + useCases(client = PrimeNumberCheckerClient = makeCalculatorClient)
 */
import type { ToolL10n } from '../tool-l10n'

export const primeNumberCheckerL10n: ToolL10n = {
  zh: {
    formula: {
      formula: 'n 是质数 ⟺ n > 1 且对所有 d ∈ [2, √n] 都有 n mod d ≠ 0',
      explain: '试除法只除到平方根:任何合数必有一个不超过 √n 的因数,因此更大的除数无需再试。按定义 1 不是质数;2 是唯一的偶质数。',
    },
    ui: {
      noUnder2: '否(质数从 2 开始)',
      errIntegers: '请输入整数',
      errTooBig: '请输入不超过 1,000,000,000,000(10¹²)的数',
      yesPrime: '是 — {n} 是质数',
      noNotPrime: '否 — {n} 不是质数',
      none: '无',
      'in.n': '要检查的数',
      'out.isPrime': '是否为质数?',
      'out.next': '下一个质数',
      'out.prev': '上一个质数',
      note: '🔢 质数只能被 1 和它本身整除。质数是密码学(RSA)的基石。',
    },
    useCases: [
      '密码学:RSA 加密依赖两个大质数乘积分解的难度',
      '哈希表:质数容量的桶能减少冲突',
      '数论学习与数学作业',
      '查找某个数附近的前后质数',
    ],
    faqs: [
      { q: '1 是质数吗?', a: '不是。按现代定义,质数恰好有两个不同的因数(1 和它本身)。1 只有一个因数,因此被排除在外。这样能让算术基本定理(唯一分解)保持简洁。' },
      { q: '检查器如何判定质数?', a: '用试除法:逐一测试从 2 到 √n 的因数。如果都不能整除 n,则 n 是质数。之所以在平方根处停止,是因为任何合数都至少有一个因数小于或等于它的平方根。' },
      { q: '所有质数都是奇数吗?', a: '不是——2 是唯一的偶质数。其它偶数都能被 2 整除,因而至少有三个因数,不可能是质数。2 之后的所有质数都是奇数;2 和 5 之后,每个质数的末位只能是 1、3、7 或 9。' },
      { q: '多大的数还能秒查?', a: '本工具上限 10¹²:试除到 √n 最多约一百万次除法,浏览器毫秒级完成。真正的密码学场景(几百位大数)要用 Miller–Rabin 这类概率测试,试除法就不适用了。' },
    ],
  },
  es: {
    formula: {
      formula: 'n es primo ⟺ n > 1 y n mod d ≠ 0 para todo d ∈ [2, √n]',
      explain: 'División por tentativa hasta la raíz cuadrada: todo número compuesto tiene un factor menor o igual que √n, así que no hace falta probar divisores mayores. Por definición, 1 no es primo; 2 es el único primo par.',
    },
    ui: {
      noUnder2: 'No (los números primos empiezan en 2)',
      errIntegers: 'Introduce un número entero',
      errTooBig: 'Introduce un número ≤ 1 000 000 000 000 (10¹²)',
      yesPrime: 'Sí — {n} es primo',
      noNotPrime: 'No — {n} no es primo',
      none: 'Ninguno',
      'in.n': 'Número a comprobar',
      'out.isPrime': '¿Es primo?',
      'out.next': 'Siguiente primo',
      'out.prev': 'Primo anterior',
      note: '🔢 Un primo solo es divisible entre 1 y entre sí mismo. Los primos son la base de la criptografía (RSA).',
    },
    useCases: [
      'criptografía: el cifrado RSA se basa en la dificultad de factorizar el producto de dos primos grandes',
      'tablas hash: los cubos de tamaño primo reducen las colisiones',
      'estudiar teoría de números y hacer deberes de matemáticas',
      'encontrar los primos anteriores y siguientes a un número',
    ],
    faqs: [
      { q: '¿Es 1 un número primo?', a: 'No. Por definición moderna, los primos tienen exactamente dos divisores distintos (1 y el propio número). 1 solo tiene un divisor, por lo que se excluye. Esto mantiene limpio el teorema fundamental de la aritmética (factorización única).' },
      { q: '¿Cómo comprueba la herramienta la primalidad?', a: 'Por división por tentativa: prueba divisores desde 2 hasta √n. Si ninguno divide a n exactamente, n es primo. Se detiene en la raíz cuadrada porque todo número compuesto debe tener al menos un factor menor o igual que su raíz cuadrada.' },
      { q: '¿Todos los números primos son impares?', a: 'No — 2 es el único primo par. Todos los demás números pares son divisibles por 2, lo que les da al menos tres divisores, por lo que no pueden ser primos. Después del 2, todos los primos son impares; después del 2 y del 5, todo primo termina en 1, 3, 7 o 9.' },
      { q: '¿Hasta qué número llega el comprobador?', a: 'El límite es 10¹²: la división por tentativa prueba como máximo un millón de divisores (hasta √n), algo que un navegador hace en milisegundos. Para números de cientos de dígitos, como los de RSA, hacen falta pruebas probabilísticas tipo Miller–Rabin.' },
    ],
  },
  de: {
    formula: {
      formula: 'n ist prim ⟺ n > 1 und n mod d ≠ 0 für jedes d ∈ [2, √n]',
      explain: 'Probedivision bis zur Quadratwurzel: Jede zusammengesetzte Zahl hat einen Teiler kleiner oder gleich √n, also müssen größere Teiler nicht geprüft werden. Nach Definition ist 1 keine Primzahl; 2 ist die einzige gerade Primzahl.',
    },
    ui: {
      noUnder2: 'Nein (Primzahlen beginnen bei 2)',
      errIntegers: 'Gib eine ganze Zahl ein',
      errTooBig: 'Gib eine Zahl ≤ 1.000.000.000.000 (10¹²) ein',
      yesPrime: 'Ja — {n} ist eine Primzahl',
      noNotPrime: 'Nein — {n} ist keine Primzahl',
      none: 'Keine',
      'in.n': 'Zu prüfende Zahl',
      'out.isPrime': 'Primzahl?',
      'out.next': 'Nächste Primzahl',
      'out.prev': 'Vorige Primzahl',
      note: '🔢 Eine Primzahl ist nur durch 1 und sich selbst teilbar. Primzahlen sind die Bausteine der Kryptografie (RSA).',
    },
    useCases: [
      'Kryptografie: Die RSA-Verschlüsselung beruht auf der Schwierigkeit, das Produkt zweier großer Primzahlen zu faktorisieren',
      'Hash-Tabellen: Buckets in Primzahlgröße verringern Kollisionen',
      'Zahlentheorie lernen und Mathehausaufgaben',
      'die benachbarten Primzahlen vor und nach einer Zahl finden',
    ],
    faqs: [
      { q: 'Ist 1 eine Primzahl?', a: 'Nein. Nach moderner Definition haben Primzahlen genau zwei verschiedene Teiler (1 und sich selbst). 1 hat nur einen Teiler und wird deshalb ausgeschlossen. Das hält den Fundamentalsatz der Arithmetik (eindeutige Faktorisierung) sauber.' },
      { q: 'Wie prüft das Werkzeug auf Primzahl?', a: 'Durch Probedivision: Es testet Teiler von 2 bis √n. Wenn keiner n glatt teilt, ist n prim. Es stoppt bei der Quadratwurzel, weil jede zusammengesetzte Zahl mindestens einen Teiler kleiner oder gleich ihrer Quadratwurzel haben muss.' },
      { q: 'Sind alle Primzahlen ungerade?', a: 'Nein — 2 ist die einzige gerade Primzahl. Jede andere gerade Zahl ist durch 2 teilbar und hat damit mindestens drei Teiler, kann also nicht prim sein. Nach der 2 sind alle Primzahlen ungerade; nach 2 und 5 endet jede Primzahl auf 1, 3, 7 oder 9.' },
      { q: 'Bis zu welcher Zahl funktioniert die Prüfung?', a: 'Die Grenze liegt bei 10¹²: Die Probedivision testet höchstens eine Million Teiler (bis √n), was der Browser in Millisekunden schafft. Für Zahlen mit Hunderten Stellen wie bei RSA braucht es probabilistische Tests wie Miller–Rabin.' },
    ],
  },
}
