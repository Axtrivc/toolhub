/**
 * iban-validator 本地化 bundle —— zh / es / de(2026-10 B12 批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const IbanValidatorL10n: ToolL10n = {
  zh: {
    useCases: ['转账前确认收款 IBAN 没抄错', '排查因长度或校验位被银行系统拒绝的 IBAN', '把 IBAN 排成 4 位一组便于人工核对', '录入前清洗带空格/连字符的粘贴内容'],
    faqs: [
      { q: 'mod-97 校验到底证明了什么?', a: '把 IBAN 的前四位挪到末尾、字母换成数字后,整串除以 97 余 1。它能挡住几乎所有的抄写错误——但只证明"结构正确",不证明账户真实存在或可收款。' },
      { q: '正确的 IBAN 为什么没通过?', a: '最常见的是国别长度不符(本工具内置官方注册表的长度表),其次是 O/I 被打成 0/1 这类形近字符。校验位为 00、01、99 的也直接无效——ISO 13616 保留了它们。' },
      { q: '还需要 BIC/SWIFT 吗?', a: '本工具只校验 IBAN。欧盟/欧洲经济区内的 SEPA 汇款只凭 IBAN 就够;跨区汇款通常还要 BIC,那需要另一张注册表。' },
      { q: '所有国家都用 IBAN 吗?', a: '大约 90 个国家和地区采用。美国、加拿大、澳大利亚仍在用各自的国内路由体系(如 ABA routing number),这些输入在本工具会提示"未收录国别"。' },
    ],
    ui: {
      'inputLabel': 'IBAN',
      'outputLabel': '校验结果',
      'defaultInput': 'GB82 WEST 1234 5698 7654 32',
      'inputTooLarge': '⚠️ 输入过大——支持的上限是 2,000 字符。请删减输入后再校验。',
      'note': '🏦 只做结构校验:官方 IBAN 注册表的国别长度 + ISO 7064 mod-97 校验和,全部在浏览器内完成。校验通过代表 IBAN 格式正确——不能确认账户存在或可收款。',
    },
  },
  es: {
    useCases: ['confirmar que el IBAN del beneficiario está bien copiado antes de transferir', 'averiguar por qué un banco rechaza un IBAN por longitud o dígito de control', 'agrupar el IBAN de 4 en 4 para revisión manual', 'limpiar espacios y guiones al pegar antes de dar de alta'],
    faqs: [
      { q: '¿Qué demuestra exactamente la prueba mod-97?', a: 'Que al mover los cuatro primeros caracteres al final y convertir letras en números, la cadena entera dividida entre 97 deja resto 1. Atrapa casi todos los errores de transcripción — pero solo prueba que la estructura es correcta, no que la cuenta exista ni que admita cobros.' },
      { q: '¿Por qué falla un IBAN que es correcto?', a: 'Lo más habitual es una longitud que no corresponde al país (esta herramienta lleva la tabla de longitudes del registro oficial); después, caracteres parecidos como O/I tecleados como 0/1. Los dígitos de control 00, 01 y 99 son siempre inválidos — así lo reserva la norma ISO 13616.' },
      { q: '¿Hace falta también el BIC/SWIFT?', a: 'Esta herramienta solo valida el IBAN. Dentro de SEPA (UE/EEE) basta con el IBAN; para transferencias fuera de la zona suele exigirse además el BIC, que requiere otro registro.' },
      { q: '¿Todos los países usan IBAN?', a: 'Unos 90 países y territorios lo han adoptado. EE. UU., Canadá y Australia siguen con sus sistemas internos de enrutamiento (como el ABA routing number); esos datos aquí devuelven «país no catalogado».' },
    ],
    ui: {
      'inputLabel': 'IBAN',
      'outputLabel': 'Resultado de la validación',
      'defaultInput': 'GB82 WEST 1234 5698 7654 32',
      'inputTooLarge': '⚠️ Entrada demasiado grande — el máximo admitido es de 2000 caracteres. Recorta la entrada para validar.',
      'note': '🏦 Solo valida estructura: longitud por país según el registro oficial de IBAN más la suma de control ISO 7064 mod-97, en tu navegador. Que pase la prueba significa que el IBAN está bien formado — no confirma que la cuenta exista.',
    },
  },
  de: {
    useCases: ['vor der Überweisung prüfen, ob der Empfänger-IBAN korrekt übernommen wurde', 'herausfinden, warum eine Bank einen IBAN wegen Länge oder Prüfziffer ablehnt', 'den IBAN in 4er-Blöcken zur manuellen Kontrolle formatieren', 'eingefügte Leerzeichen und Bindestriche vor der Erfassung bereinigen'],
    faqs: [
      { q: 'Was genau beweist die mod-97-Prüfung?', a: 'Dass die Zeichenkette — vordere vier Zeichen ans Ende verschoben, Buchstaben in Zahlen umgewandelt — geteilt durch 97 den Rest 1 ergibt. Das fängt nahezu alle Abschreibfehler ab, beweist aber nur die korrekte Struktur, nicht die Existenz eines kontoführenden Kontos.' },
      { q: 'Warum scheitert ein eigentlich korrekter IBAN?', a: 'Am häufigsten passt die Länge nicht zum Land (dieses Werkzeug führt die Längentabelle des offiziellen Registers mit); danach kommen Verwechslungen wie O/I getippt als 0/1. Prüfziffern 00, 01 und 99 sind stets ungültig — so reserviert es die ISO 13616.' },
      { q: 'Braucht es zusätzlich BIC/SWIFT?', a: 'Dieses Werkzeug prüft nur den IBAN. Innerhalb von SEPA (EU/EWR) genügt der IBAN; für Überweisungen darüber hinaus verlangt man meist zusätzlich den BIC — der braucht ein anderes Register.' },
      { q: 'Nutzen alle Länder IBAN?', a: 'Rund 90 Länder und Gebiete haben ihn übernommen. Die USA, Kanada und Australien fahren mit ihren nationalen Routing-Systemen weiter (etwa der ABA routing number) — solche Eingaben melden hier „Land nicht katalogisiert“.' },
    ],
    ui: {
      'inputLabel': 'IBAN',
      'outputLabel': 'Prüfergebnis',
      'defaultInput': 'GB82 WEST 1234 5698 7654 32',
      'inputTooLarge': '⚠️ Eingabe zu groß — unterstützt sind bis zu 2.000 Zeichen. Kürze die Eingabe, um zu prüfen.',
      'note': '🏦 Nur Strukturprüfung: Länderlänge laut offiziellem IBAN-Register plus ISO-7064-mod-97-Prüfsumme, alles im Browser. Eine bestandene Prüfung heißt wohlgeformt — sie bestätigt weder Kontexistenz noch Zahlungsfähigkeit.',
    },
  },
}
