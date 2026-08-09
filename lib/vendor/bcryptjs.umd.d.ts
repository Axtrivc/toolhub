/**
 * bcryptjs 2.4.3 (UMD) 的最小类型声明 —— 只覆盖本工具用到的同步 API。
 * 库本体见同目录 bcryptjs.umd.js(MIT,https://github.com/dcodeIO/bcrypt.js)。
 */
interface BcryptStatic {
  /** 生成 $2a$ 格式盐字符串,cost 即 2^cost 轮 */
  genSaltSync(rounds?: number): string
  /** 用给定盐(或 cost 数字)计算 bcrypt 哈希 */
  hashSync(s: string, salt?: string | number): string
  /** 恒定时间比较密码与 bcrypt 哈希 */
  compareSync(s: string, hash: string): boolean
  /** 设置 CSPRNG 兜底(浏览器走 self.crypto.getRandomValues,无需设置) */
  setRandomFallback(random: (len: number) => number[]): void
}
declare const bcrypt: BcryptStatic
export = bcrypt
