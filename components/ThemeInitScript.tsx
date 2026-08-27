/**
 * 主题初始化脚本 - 必须在 <head> 中内联执行,早于 React hydration
 *
 * 作用:在页面渲染前就读取 localStorage 的主题偏好,直接给 <html> 加 dark class,
 * 避免"先显示浅色再突然变深色"的闪烁(FOUC)。
 *
 * 这是 Next.js + Tailwind dark mode 的标准最佳实践。
 */
export function ThemeInitScript() {
  const code = `
    (function() {
      try {
        var theme = localStorage.getItem('app-theme');
        if (!theme) {
          theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        if (theme === 'dark') document.documentElement.classList.add('dark');
      } catch (e) { /* localStorage 不可用(隐私模式/禁用存储)时静默跳过 */ }
    })();
  `
  return <script dangerouslySetInnerHTML={{ __html: code }} />
}
