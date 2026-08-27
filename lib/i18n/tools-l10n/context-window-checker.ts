/**
 * context-window-checker 本地化 bundle —— zh / es / de(2025-08 扩张批次)
 * 覆盖: ui。useCases/formula/faqs 缺失自动回退英文。
 */
import type { ToolL10n } from '../tool-l10n'

export const ContextWindowCheckerL10n: ToolL10n = {
  zh: {
    ui: {
      'estimate': '≈ {n} tokens · {c} 字符',
      'exceeds': '超出 {}',
      'headroom': '剩余',
      'inputLabel': '粘贴你的提示词 / 文档',
      'note': '📏 token 数为近似估算(拉丁文本字符÷4,CJK 每字约 1.1)——5% 以内的波动视为噪声。输出与输入共享同一窗口,请为回复加系统提示预留空间。',
      'ofWindow': '占窗口',
      'placeholder': '粘贴你打算发送的文本…',
    },
  },
  es: {
    ui: {
      'estimate': '≈ {n} tokens · {c} caracteres',
      'exceeds': 'excede por {}',
      'headroom': 'margen',
      'inputLabel': 'Pega tu prompt / documento',
      'note': '📏 Los tokens son estimaciones (caracteres÷4 en latín, ~1,1 por carácter CJK). La salida comparte ventana: reserva margen para la respuesta.',
      'ofWindow': 'de la ventana',
      'placeholder': 'Pega el texto que enviarás…',
    },
  },
  de: {
    ui: {
      'estimate': '≈ {n} Tokens · {c} Zeichen',
      'exceeds': 'überschreitet um {}',
      'headroom': 'Spielraum',
      'inputLabel': 'Prompt / Dokument einfügen',
      'note': '📏 Token-Zahlen sind Schätzungen (Zeichen÷4 bei Latein, ~1,1 je CJK-Zeichen). Die Ausgabe teilt sich das Fenster — Spielraum einplanen.',
      'ofWindow': 'des Fensters',
      'placeholder': 'Füge den Text ein, den du senden willst…',
    },
  },
}
