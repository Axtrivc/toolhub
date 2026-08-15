/**
 * bcrypt 浏览器封装 —— vendored bcryptjs 2.4.3(纯 JS,Apache-2.0,见 lib/vendor/bcryptjs.umd.js)。
 *
 * 只在事件处理器里调用(浏览器环境):库内部用 self.crypto.getRandomValues 取随机盐,
 * Node 预渲染期不会执行这些函数,SSG 安全。集中在此导出,方便后续替换实现。
 */
import bcrypt from './vendor/bcryptjs.umd'

/** 生成 $2a$ 格式盐字符串;rounds 为 cost(2^rounds 次迭代),合法范围 4-31 */
export function genSaltSync(rounds: number): string {
  // bcryptjs 对非法 rounds 行为不定(负值异常、过大直接卡死页面),先校验
  if (!Number.isInteger(rounds) || rounds < 4 || rounds > 31) {
    throw new Error(`bcrypt rounds must be an integer between 4 and 31, got ${rounds}`)
  }
  return bcrypt.genSaltSync(rounds)
}

/** 计算 bcrypt 哈希($2a$cost$salt+hash,共 60 字符) */
export function hashSync(password: string, salt: string): string {
  return bcrypt.hashSync(password, salt)
}

/** 校验密码与 bcrypt 哈希是否匹配 */
export function compareSync(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash)
}
