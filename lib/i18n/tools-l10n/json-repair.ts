/**
 * json-repair 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const JsonRepairL10n: ToolL10n = {
  zh: {
    ui: {
      'appliedAnyway': '失败前尝试过的修复：',
      'copyJson': '复制 JSON',
      'inputLabel': '损坏的 JSON',
      'loadSample': '加载示例',
      'note': '覆盖 LLM 经典翻车模式：markdown 围栏、尾逗号、单引号、裸键、智能引号、token 上限导致的截断。深度畸形输入会带解析器位置大声报错，而不是瞎猜。',
      'repairsApplied': '已应用的修复',
      'stillBroken': '修复后仍无法解析——下方错误指出位置：',
      'validJson': '有效的 JSON',
    },
  },
  es: {
    ui: {
      'appliedAnyway': 'Reparaciones intentadas antes de fallar:',
      'copyJson': 'Copiar JSON',
      'inputLabel': 'JSON roto',
      'loadSample': 'Cargar ejemplo',
      'note': 'Cubre los fallos típicos de los LLM: vallas markdown, comas finales, comillas simples, claves sin comillas y salidas truncadas. Lo muy roto falla con posición, sin adivinar.',
      'repairsApplied': 'Reparaciones aplicadas',
      'stillBroken': 'Sigue sin poder analizarse; el error indica dónde:',
      'validJson': 'JSON válido',
    },
  },
  de: {
    ui: {
      'appliedAnyway': 'Vor dem Scheitern versuchte Reparaturen:',
      'copyJson': 'JSON kopieren',
      'inputLabel': 'Kaputtes JSON',
      'loadSample': 'Beispiel laden',
      'note': 'Deckt typische LLM-Fehler ab: Markdown-Zäune, Endkommas, einfache Anführungszeichen, nackte Keys und abgeschnittene Ausgaben. Tief kaputte Eingaben scheitern laut mit Position.',
      'repairsApplied': 'Angewandte Reparaturen',
      'stillBroken': 'Auch nach Reparaturen unlesbar — der Fehler zeigt die Stelle:',
      'validJson': 'Gültiges JSON',
    },
  },
}
