'use client'

import type { ReactNode } from 'react'
import type { Locale } from '@/lib/i18n'
import { useApp } from '@/components/providers/AppProviders'

/**
 * UsernameGenerator 长文正文 —— 四语 dispatcher
 *
 * en 分支与英文站渲染输出一致。zh/es/de 仅客户端 hydration 后切换。
 */

// ──────────────────────────── en ────────────────────────────
const en: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Why the same name never fits everywhere</h2>
    <p>Every platform draws its own line: Instagram allows 30 characters, X/Twitter 15, Discord now up to 32, Twitch 25, and many games cap at 16 or 20 — often silently rejecting symbols that another site accepts. Set max length to the strictest platform you care about and lean on lowercase letters plus digits, the one alphabet every login form tolerates.</p>
    <h2>The four styles, decoded</h2>
    <p>Gamer tags decorate with xX…Xx and leet substitutions (a→4, e→3, s→5) that date back to 2000s clan culture. Retro handles append an 80s/90s year suffix — think BBS and arcade high-score tables. Minimal keeps clean lowercase for a modern, professional look that survives platform redesigns. Underscore style joins two words with the classic _, still the most readable collision-breaker when the plain name is taken.</p>
    <h2>A username is public identity, not a secret</h2>
    <p>Handles are meant to be found, tagged, and remembered — which is exactly why they make terrible passwords. Treat the two as different jobs: this generator invents identities; the password generator protects the account behind them. Never reuse a username-derived string as a credential.</p>
    <h2>Getting the name you actually want</h2>
    <p>Short single words are almost always taken; combining a keyword with a noun or a two-digit suffix wins the availability race. Before committing, search the handle on the platforms you use and check the domain too — consistent naming across a game, a stream, and a GitHub account is worth the extra minute.</p>
  </section>
)

// ──────────────────────────── 中文 ────────────────────────────
const zh: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>为什么同一个名字到处不通用</h2>
    <p>每个平台都有自己的上限:Instagram 30 字符、X 15、Discord 现在 32、Twitch 25,很多游戏卡在 16 或 20——还会悄悄拒绝别站接受的符号。把最大长度设到你在意的最严平台,主用小写字母加数字——这是所有登录框都容忍的字母表。</p>
    <h2>四种风格拆解</h2>
    <p>游戏风用 xX…Xx 装饰和 leet 替换(a→4、e→3、s→5),血统来自 2000 年代的战队文化;复古风缀上 80/90 年代年份后缀——BBS 和街机排行榜的味道;极简风保持干净小写,专业耐看,扛得住平台改版;下划线风用经典 _ 连接两个词,当裸名被占时依然是最好读的破局法。</p>
    <h2>用户名是公开身份,不是秘密</h2>
    <p>昵称天生就是要被搜到、被@、被记住的——所以它当密码一定很糟。这是两份不同的工作:本工具发明身份,密码生成器保护身份背后的账号。永远不要把昵称派生的字符串再用作凭据。</p>
    <h2>拿到你真正想要的名字</h2>
    <p>单词短名几乎全被占了;关键词 + 名词、或加两位数字后缀,赢下可用性竞赛的速度最快。定名之前,先在你用的平台搜一遍这个 ID,顺手查一下域名——游戏、直播、GitHub 三处同名,值得多花那一分钟。</p>
  </section>
)

// ──────────────────────────── Español ────────────────────────────
const es: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Por qué el mismo nombre no cabe en todas partes</h2>
    <p>Cada plataforma traza su propia raya: Instagram admite 30 caracteres, X 15, Discord ahora 32, Twitch 25, y muchos juegos cortan en 16 o 20 — a veces rechazando en silencio símbolos que otro sitio acepta. Fija la longitud máxima a la plataforma más estricta que uses y apóyate en minúsculas y dígitos, el único alfabeto que todo formulario tolera.</p>
    <h2>Los cuatro estilos, descifrados</h2>
    <p>Los tags gamer se decoran con xX…Xx y sustituciones leet (a→4, e→3, s→5) que vienen de la cultura de clanes de los 2000. Los retro añaden un sufijo de año de los 80/90 — puro BBS y tabla de récords arcade. El minimalista mantiene minúsculas limpias para un aire moderno que sobrevive a los rediseños. El estilo guion bajo une dos palabras con el clásico _, sigue siendo el mejor rompe-empates cuando el nombre plano ya está cogido.</p>
    <h2>Un alias es identidad pública, no un secreto</h2>
    <p>Los handles existen para que te encuentren, te etiqueten y te recuerden — justo por eso son contraseñas pésimas. Son dos trabajos distintos: este generador inventa identidades; el generador de contraseñas protege la cuenta que hay detrás. Nunca reutilices como credencial una cadena derivada de tu alias.</p>
    <h2>Conseguir el nombre que de verdad quieres</h2>
    <p>Las palabras sueltas y cortas están casi todas cogidas; combinar una palabra clave con un sustantivo o un sufijo de dos dígitos gana la carrera de disponibilidad. Antes de decidirte, busca el alias en las plataformas que uses y mira también el dominio — un nombre coherente entre juego, stream y GitHub vale ese minuto extra.</p>
  </section>
)

// ──────────────────────────── Deutsch ────────────────────────────
const de: ReactNode = (
  <section className="prose-content mt-10 max-w-3xl">
    <h2>Warum derselbe Name nirgends passt</h2>
    <p>Jede Plattform zieht ihre eigene Grenze: Instagram erlaubt 30 Zeichen, X 15, Discord inzwischen 32, Twitch 25, und viele Games stopfen bei 16 oder 20 — und lehnen dann still Symbole ab, die anderswo durchgehen. Setze die Maximallänge auf die strengste Plattform und setze auf Kleinbuchstaben plus Ziffern, das eine Alphabet, das jedes Loginformular duldet.</p>
    <h2>Die vier Stile entschlüsselt</h2>
    <p>Gamer-Tags schmücken sich mit xX…Xx und Leet-Ersetzungen (a→4, e→3, s→5) aus der Clan-Kultur der 2000er. Retro-Anhängsel sind Jahressuffixe der 80/90er — reines BBS- und Arcade-Highscore-Aroma. Minimal bleibt bei sauberem Kleinschreiben für einen modernen Look, der Redesigns übersteht. Der Unterstrich-Stil verbindet zwei Wörter mit dem klassischen _ — noch immer der lesbarste Kniff, wenn der plain Name weg ist.</p>
    <h2>Ein Nick ist öffentliche Identität, kein Geheimnis</h2>
    <p>Handles sollen gefunden, getaggt und gemerkt werden — genau deshalb sind sie furchtbare Passwörter. Das sind zwei verschiedene Jobs: Dieser Generator erfindet Identitäten; der Passwort-Generator schützt das Konto dahinter. Nie eine nick-abgeleitete Zeichenkette als Credential wiederverwenden.</p>
    <h2>Den Namen bekommen, den du wirklich willst</h2>
    <p>Kurze Einzelwörter sind fast immer weg; Stichwort plus Substantiv oder einem zweistelligen Suffix gewinnt das Verfügbarkeitsrennen. Vor der Entscheidung den Handle auf deinen Plattformen suchen und auch die Domain prüfen — einheitliches Naming über Game, Stream und GitHub ist die Minute wert.</p>
  </section>
)

const CONTENT_BY_LOCALE: Record<Locale, ReactNode> = { en, zh, es, de }

export function UsernameGeneratorContent(): ReactNode {
  const { locale } = useApp()
  return CONTENT_BY_LOCALE[locale] ?? en
}
