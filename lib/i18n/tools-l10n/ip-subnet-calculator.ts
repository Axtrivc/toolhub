/**
 * ip-subnet-calculator 本地化 bundle —— zh / es / de
 * 覆盖:useCases(client = IpSubnetCalculatorClient = 自定义 devtool client,无需 slug)
 * 注:该工具在 tool-faqs.ts 无 FAQ 条目,故 bundle 仅含 useCases
 */
import type { ToolL10n } from '../tool-l10n'

export const ipSubnetCalculatorL10n: ToolL10n = {
  zh: {
    useCases: [
      'CIDR 转子网掩码转换器',
      '可用主机范围计算器',
      '在线通配符掩码计算器',
      '一个 /24 子网能容纳多少主机',
    ],
  },
  es: {
    useCases: [
      'convertidor de CIDR a máscara de subred',
      'calculadora de rango de hosts utilizables',
      'calculadora de máscara comodín online',
      'cuántos hosts caben en una subred /24',
    ],
  },
  de: {
    useCases: [
      'CIDR-in-Subnetzmaske-Umrechner',
      'Rechner für den nutzbaren Host-Bereich',
      'Online-Rechner für Wildcard-Masken',
      'wie viele Hosts passen in ein /24-Subnetz',
    ],
  },
}
