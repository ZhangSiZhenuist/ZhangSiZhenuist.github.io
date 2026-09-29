---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/components/SkywayBlog.tsx","src/styles/skyway.css"]
---

## Direction contract

THESIS: 把个人博客变成一段可探索的思想航线；陌生访客在首屏同时看见作者、写作主题与真实文章入口，而不是被航空概念遮住内容。

OWN-WORLD: Skyway 式深海军蓝电影画面、机舱窗口穿越、鲜明黄色行动色与宽屏编辑排版；航空只作为“探索与航线”的视觉语言，所有事实仍属于章思哲的公开博客。

STORY: 访客先认识章思哲和写作内容，立即打开《从这里开始》，随后探索文章、标签、归档与关于页，最后通过 GitHub 或邮箱联系。

FIRST VIEWPORT: 固定玻璃导航覆盖一幅全屏山峰视频；中央是“沿着思考的航线”、作者身份、简介与两个明确行动；前景机舱窗口随滚动放大穿越，右侧编辑标题淡出，下一段阅读导航在首屏末端露出。

FORM: 用户明确指定的 Skyway 视觉与 React + GSAP + Lenis 动效栈，桌面优先并在 1024px / 768px 重排；真实博客内容替代订票、机组、评价等虚构模块。方向由用户给出的完整提示词直接锁定，因此适用“user-pinned direction beats the roll”例外，不运行概念种子。

FINISH: 桌面与移动视口均完成可访问的减少动态分支、键盘焦点和性能清理；通过构建、视觉复核、finish review，并把最终系统记录到 DESIGN.md。
