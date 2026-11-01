/**
 * username-generator 本地化 bundle —— zh / es / de(B14 生成器与趣味批次)
 * 覆盖: ui / faqs / useCases。formula 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const UsernameGeneratorL10n: ToolL10n = {

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
