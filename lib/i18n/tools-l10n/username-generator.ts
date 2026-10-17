/**
 * username-generator 本地化 bundle —— zh / es / de(B14 生成器与趣味批次)
 * 覆盖: ui / faqs / useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const UsernameGeneratorL10n: ToolL10n = {
  zh: {
    useCases: ['为游戏和社交平台起不重复的昵称', '按平台长度上限过滤候选名', '让朋友队/战队拿到统一风格的 ID', '快速产出备选清单再挑顺眼的'],
    faqs: [
      { q: '能全平台用同一个用户名吗?', a: '各平台规则不同(Instagram 30 字符、X 15、Discord 现为 32)——把最大长度设到最严的那个,并少用数字/下划线,可移植性最好。' },
      { q: '这些用户名能当密码用吗?', a: '不能——昵称本来就是公开且要被人猜到的。凡是守护账号的东西都用密码生成器。' },
      { q: '为什么提示没有合适的候选?', a: '最大长度过滤掉了更长的组合——放宽上限或换更短的关键词;工具不会硬截断,因为断尾的 ID 比换一个更难看。' },
      { q: '各种风格分别做什么?', a: '游戏风加 leet 数字和 xX…Xx 装饰;复古风挑 80/90 年代年份后缀;极简风保持干净小写;下划线风用经典 _ 连接两个词。' },
    ],
    ui: {
      'keywordLabel': '关键词或名字(可选)',
      'keywordPlaceholder': '如 nova、你的名字、战队标签',
      'maxLenLabel': '最大长度',
      'styleLabel': '风格',
      'styleGamer': '🎮 游戏风',
      'styleRetro': '👾 复古风',
      'styleMinimal': '⬜ 极简风',
      'styleUnderscore': '下划线风格',
      'generate': '生成用户名',
      'noneFit': '该长度限制下没有合适候选——放宽上限或缩短关键词。',
      'note': '👤 游戏风带 leet 数字与 xX 装饰,复古风配 80/90 年代年份后缀,极简风只有干净小写,下划线风用经典 _ 连接两个词。这些是昵称不是密码——凡涉及账号安全请用密码生成器。',
    },
  },
  es: {
    useCases: ['crear aliases únicos para juegos y redes', 'filtrar candidatos por el límite de cada plataforma', 'dar a tu equipo o clan IDs del mismo estilo', 'generar una lista corta y elegir la que guste'],
    faqs: [
      { q: '¿Puedo usar el mismo nombre en todas partes?', a: 'Las reglas varían (Instagram 30 caracteres, X 15, Discord ahora 32) — fija la longitud máxima al límite más estricto y usa pocos dígitos o guiones para máxima portabilidad.' },
      { q: '¿Sirven como contraseña?', a: 'No — los alias son públicos y adivinables por diseño. Para todo lo que protege una cuenta, usa el generador de contraseñas.' },
      { q: '¿Por qué dice que ningún candidato encaja?', a: 'El filtro de longitud máxima descarta las combinaciones largas — sube el límite o usa una palabra clave más corta; nunca se trunca, porque un nombre cortado se ve peor que otro.' },
      { q: '¿Qué hace cada estilo?', a: 'Gamer añade dígitos leet y decoración xX…Xx; Retro elige un sufijo de año de los 80/90; Minimal se queda en minúsculas limpias; Underscore une dos palabras con el clásico _.' },
    ],
    ui: {
      'keywordLabel': 'Palabra clave o nombre (opcional)',
      'keywordPlaceholder': 'p. ej. nova, tu nombre, el tag del clan',
      'maxLenLabel': 'Longitud máxima',
      'styleLabel': 'Estilo',
      'styleGamer': '🎮 Gamer',
      'styleRetro': '👾 Retro',
      'styleMinimal': '⬜ Minimalista',
      'styleUnderscore': 'estilo_underscore',
      'generate': 'Generar nombres',
      'noneFit': 'Ningún candidato cabe en esa longitud — sube el límite o acorta la palabra clave.',
      'note': '👤 Gamer aporta dígitos leet y decoración xX…Xx, Retro un sufijo de año de los 80/90, Minimal solo minúsculas limpias, Underscore une dos palabras con el clásico _. Son para aliases, no contraseñas — para cuentas usa el generador de contraseñas.',
    },
  },
  de: {
    useCases: ['eindeutige Nicks für Games und Netzwerke erzeugen', 'Kandidaten nach Plattformlängenlimit filtern', 'dem Team oder Clan IDs im gleichen Stil geben', 'eine Kurzliste erzeugen und die beste wählen'],
    faqs: [
      { q: 'Kann ich überall denselben Namen nutzen?', a: 'Die Regeln unterscheiden sich (Instagram 30 Zeichen, X 15, Discord inzwischen 32) — setze die Maximallänge auf das strengste Limit und spare mit Ziffern/Unterstrichen für beste Portabilität.' },
      { q: 'Taugen diese Namen als Passwort?', a: 'Nein — Nicks sind öffentlich und sollen erratbar sein. Für alles, was ein Konto schützt, nimm den Passwort-Generator.' },
      { q: 'Warum passt kein Kandidat?', a: 'Der Längenfilter verwirft längere Kombinationen — erhöhe das Limit oder nimm ein kürzeres Stichwort; abgeschnitten wird nie, weil ein verstümmelter Nick schlechter aussieht als ein anderer.' },
      { q: 'Was machen die Stile?', a: 'Gamer bringt Leet-Ziffern und xX…Xx-Deko, Retro einen Jahres-Suffix aus den 80/90ern, Minimal bleibt bei sauberem Kleinschreiben, Underscore verbindet zwei Wörter mit dem klassischen _.' },
    ],
    ui: {
      'keywordLabel': 'Stichwort oder Name (optional)',
      'keywordPlaceholder': 'z. B. nova, dein Name, der Clan-Tag',
      'maxLenLabel': 'Maximale Länge',
      'styleLabel': 'Stil',
      'styleGamer': '🎮 Gamer',
      'styleRetro': '👾 Retro',
      'styleMinimal': '⬜ Minimal',
      'styleUnderscore': 'unterstrich_stil',
      'generate': 'Namen generieren',
      'noneFit': 'Kein Kandidat passt in diese Länge — erhöhe das Limit oder kürze das Stichwort.',
      'note': '👤 Gamer-Style bringt Leet-Ziffern und xX…Xx-Deko, Retro einen Jahres-Suffix aus den 80/90ern, Minimal bleibt bei sauberem Kleinschreiben, Underscore verbindet zwei Wörter mit dem klassischen _. Das sind Nicks, keine Passwörter — für Konten nimm den Passwort-Generator.',
    },
  },
}
