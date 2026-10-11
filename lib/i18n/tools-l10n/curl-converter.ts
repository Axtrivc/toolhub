/**
 * curl-converter 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const curlConverterL10n: ToolL10n = {
  zh: {
    ui: {
      'clear': '清空',
      'copy': '复制',
      'hasBody': '含请求体',
      'headers': '个请求头',
      'ignoredFlags': '不支持的选项已忽略',
      'invalidCurl': '无效的 curl 命令',
      'noUrl': '(无 URL)',
      'note': '🔒 100% 本地运行——解析在你的浏览器中完成。不执行任何命令,仅转换文本。',
      'pasteCurl': '粘贴你的 curl 命令',
    },
    useCases: ['把浏览器复制的 curl 命令转成 JavaScript/Python 代码', '根据同事 README 或文档里的 curl 生成可运行的请求', '在 Fetch、Axios 和 Python requests 之间选择', '在本地离线解析 curl(含请求头与请求体)'],
    faqs: [
      { q: '支持哪些 curl 功能?', a: '解析 URL、-X/--request 方法、-H/--header 请求头(含 Content-Type 和 Authorization)、-d/--data/--data-raw 请求体,以及 -k/--insecure。Shell 引号(单引号、双引号)和 $\'...\' ANSI-C 语法都能处理。不支持的选项会被忽略。' },
      { q: '请求体怎么编码?', a: '原始请求体(-d "..." 或 --data-raw)原样传递。JavaScript Fetch 中变成 body: "...";Python requests 中变成 data="..."(若 Content-Type 为 JSON 则尽量用 json=)。multipart 文件上传(-F)不会转成 multipart 代码——请用专用的客户端处理。' },
      { q: '我的 curl 命令会发到服务器吗?', a: '不会。解析和代码生成全部在浏览器本地由手写分词器完成。你的命令、令牌或请求头永远不会上传——这一点在你的 curl 含有令牌或密钥时也很重要,不过仍应避免在任何地方粘贴真实凭证。' },
    ],
  },
  es: {
    ui: {
      'clear': 'Limpiar',
      'copy': 'Copiar',
      'hasBody': 'tiene cuerpo',
      'headers': 'cabecera(s)',
      'ignoredFlags': 'opciones no admitidas ignoradas',
      'invalidCurl': 'Comando curl inválido',
      'noUrl': '(sin URL)',
      'note': '🔒 100% en el cliente — el análisis se ejecuta en tu navegador. No se ejecuta ningún comando; solo se convierte texto.',
      'pasteCurl': 'Pega tu comando curl',
    },
    useCases: ['convertir un comando curl copiado del navegador a código JavaScript/Python', 'generar peticiones ejecutables a partir del curl de un README o la documentación de un colega', 'elegir entre Fetch, Axios y Python requests', 'parsear curl (con cabeceras y cuerpo) localmente, sin conexión'],
    faqs: [
      { q: '¿Qué funciones de curl se admiten?', a: 'Parsea la URL, el método -X / --request, las cabeceras -H / --header (incluidos Content-Type y Authorization), los cuerpos -d / --data / --data-raw y -k / --insecure. Gestiona el entrecomillado del shell (comillas simples y dobles) y la sintaxis ANSI-C $\'...\'. Las opciones no admitidas se ignoran.' },
      { q: '¿Cómo se codifica el cuerpo de la petición?', a: 'Los cuerpos en bruto (-d "..." o --data-raw) se pasan tal cual. Para JavaScript Fetch pasa a ser body: "..."; para Python requests pasa a ser data="..." (o json= para Content-Type JSON cuando sea posible). Las subidas multipart (-F) no se convierten a código multipart — usa un cliente dedicado para eso.' },
      { q: '¿Mi comando curl se envía a un servidor?', a: 'No. El análisis y la generación de código se ejecutan totalmente en tu navegador con un analizador léxico escrito a mano. Tu comando, tokens o cabeceras nunca se suben, lo que también importa si tu curl contiene tokens o secretos — aunque aun así conviene evitar pegar credenciales reales en cualquier sitio.' },
    ],
  },
  de: {
    ui: {
      'clear': 'Leeren',
      'copy': 'Kopieren',
      'hasBody': 'hat Body',
      'headers': 'Header',
      'ignoredFlags': 'nicht unterstützte Optionen ignoriert',
      'invalidCurl': 'Ungültiger curl-Befehl',
      'noUrl': '(keine URL)',
      'note': '🔒 100% clientseitig — das Parsing läuft in deinem Browser. Es wird kein Befehl ausgeführt; nur Text wird umgewandelt.',
      'pasteCurl': 'Füge deinen curl-Befehl ein',
    },
    useCases: ['einen aus dem Browser kopierten curl-Befehl in JavaScript/Python-Code umwandeln', 'aus curl in einem README oder Doc eines Kollegen ausführbare Requests erzeugen', 'zwischen Fetch, Axios und Python requests wählen', 'curl (mit Headern, Body) lokal parsen, ohne Netz'],
    faqs: [
      { q: 'Welche curl-Funktionen werden unterstützt?', a: 'Parst die URL, die Methode (-X / --request), die Header (-H / --header, inklusive Content-Type und Authorization), die Bodies (-d / --data / --data-raw) sowie -k / --insecure. Shell-Quoting (einfache und doppelte Anführungszeichen) und die ANSI-C-Syntax $\'...\' werden behandelt. Nicht unterstützte Optionen werden ignoriert.' },
      { q: 'Wie wird der Request-Body codiert?', a: 'Raw-Bodies (-d "..." oder --data-raw) werden unverändert durchgereicht. Für JavaScript Fetch wird daraus body: "..."; für Python requests wird es data="..." (bzw. json= bei JSON-Content-Type, wenn möglich). Multipart-Uploads (-F) werden nicht in Multipart-Code umgewandelt — nutze dafür einen dedizierten Client.' },
      { q: 'Wird mein curl-Befehl an einen Server gesendet?', a: 'Nein. Parsing und Codegenerierung laufen vollständig in deinem Browser mit einem handgeschriebenen Tokenizer. Dein Befehl, Tokens oder Header werden nie hochgeladen — was auch zählt, wenn dein curl Tokens oder Secrets enthält. Trotzdem solltest du echte Credentials nirgendwo einfügen.' },
    ],
  },
}
