/**
 * password-strength-checker 本地化 bundle —— zh / es / de
 * 覆盖:faqs + useCases(client = PasswordStrengthCheckerClient = 自定义 devtool client,无需 slug)
 */
import type { ToolL10n } from '../tool-l10n'

export const passwordStrengthCheckerL10n: ToolL10n = {
  zh: {
    useCases: [
      '我的密码有多强',
      '密码强度熵值检测器',
      '密码安全检查清单',
      '密码破解时间估算',
    ],
    faqs: [
      { q: '在这里输入真实密码安全吗?', a: '安全。本工具完全在你的浏览器本地处理,不会发起任何网络请求——你的密码绝不会离开你的设备。你也可以测试各种变体。' },
      { q: '如果我的密码已经出现在数据泄露中怎么办?', a: '强度只衡量「可猜测性」,并不代表它是否已经泄露。请到 Have I Been Pwned 查询你的密码是否出现在已知泄露里。' },
    ],
  },
  es: {
    useCases: [
      'qué tan fuerte es mi contraseña',
      'comprobador de entropía y fuerza de contraseña',
      'lista de comprobación de seguridad de contraseñas',
      'estimador de tiempo para descifrar contraseñas',
    ],
    faqs: [
      { q: '¿Es seguro escribir aquí mi contraseña real?', a: 'Sí. Esta herramienta procesa todo localmente en tu navegador. No hay ninguna petición de red: tu contraseña nunca sale de tu dispositivo. También puedes probar variaciones.' },
      { q: '¿Qué pasa si mi contraseña está en una filtración de datos?', a: 'La fuerza solo mide la adivinabilidad, no si ha sido filtrada. Consulta Have I Been Pwned para ver si tu contraseña ha aparecido en filtraciones conocidas.' },
    ],
  },
  de: {
    useCases: [
      'wie stark ist mein Passwort',
      'Prüfer für Entropie und Passwortstärke',
      'Sicherheits-Checkliste für Passwörter',
      'Schätzung der Knackzeit für Passwörter',
    ],
    faqs: [
      { q: 'Ist es sicher, hier mein echtes Passwort einzugeben?', a: 'Ja. Dieses Werkzeug verarbeitet alles lokal in deinem Browser. Es gibt keine Netzwerkanfrage – dein Passwort verlässt nie dein Gerät. Du kannst auch Variationen testen.' },
      { q: 'Was, wenn mein Passwort in einem Datenleck auftaucht?', a: 'Die Stärke misst nur die Ratability, nicht ob es geleakt wurde. Prüfe auf Have I Been Pwned, ob dein Passwort in bekannten Lecks aufgetaucht ist.' },
    ],
  },
}
