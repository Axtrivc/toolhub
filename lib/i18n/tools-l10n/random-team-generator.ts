/**
 * random-team-generator 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const RandomTeamGeneratorL10n: ToolL10n = {
  zh: {
    ui: {
      'generate': '生成分组',
      'nNames': '已输入 {n} 人',
      'namesLabel': '名单 — 每行一个',
      'note': '👥 加密级随机的 Fisher-Yates 洗牌 + 轮流发牌保证各队人数至多差一。先输入的名字没有任何优势。',
      'reshuffle': '重新打乱',
      'teamN': '第 {n} 队',
      'teamsLabel': '队伍数量',
    },
  },
  es: {
    ui: {
      'generate': 'Generar equipos',
      'nNames': '{n} personas introducidas',
      'namesLabel': 'Nombres — uno por línea',
      'note': '👥 Barajado Fisher-Yates con aleatoriedad criptográfica y reparto por turnos: los equipos difieren a lo sumo en uno. Los primeros nombres no llevan ventaja.',
      'reshuffle': 'Rebarajar',
      'teamN': 'Equipo {n}',
      'teamsLabel': 'Número de equipos',
    },
  },
  de: {
    ui: {
      'generate': 'Teams erstellen',
      'nNames': '{n} Personen erfasst',
      'namesLabel': 'Namen — einer pro Zeile',
      'note': '👥 Fisher-Yates-Shuffle mit Krypto-Zufall, dann Round-Robin-Verteilung — Teams unterscheiden sich um höchstens einen. Zuerst eingegebene Namen haben keinen Vorteil.',
      'reshuffle': 'Neu mischen',
      'teamN': 'Team {n}',
      'teamsLabel': 'Anzahl Teams',
    },
  },
}
