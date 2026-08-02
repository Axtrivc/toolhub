/**
 * Embed 检测脚本 - 必须在 <head> 中内联执行,早于 React hydration
 *
 * 作用:当页面被 iframe 嵌入(window.self !== window.top)时,在页面渲染前就给
 * <html> 加上 "embed" class。配合 globals.css 的 [class~="embed"] 规则,
 * 隐藏 Header / Footer / 广告 / 相关工具等"chrome",只保留工具本体,
 * 让嵌入体验干净(博主更愿意嵌入 → 更多反向链接)。
 *
 * 同步内联执行 = 零闪烁(不会先显示 chrome 再突然隐藏)。
 */
export function EmbedDetectScript() {
  const code = `
    (function() {
      try {
        if (window.self !== window.top) {
          document.documentElement.classList.add('embed');
        }
      } catch (e) {
        // 跨域 iframe 访问 window.top 可能抛错,此时也按嵌入处理
        document.documentElement.classList.add('embed');
      }
    })();
  `
  return <script dangerouslySetInnerHTML={{ __html: code }} />
}
