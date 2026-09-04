---
name: "章思哲个人博客"
description: "以暖纸、深墨和克制双色标记构成的内容优先个人出版物。"
colors:
  primary-teal: "#227a73"
  secondary-red: "#af3029"
  paper: "#fffcf0"
  ink: "#1c1b1a"
  muted-ink: "#6f6b62"
  hairline: "#dad6cc"
typography:
  display:
    fontFamily: '"Noto Sans SC", "Microsoft YaHei", "PingFang SC", system-ui, sans-serif'
    fontSize: "clamp(3rem, 3.4vw, 3.4rem)"
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "0.015em"
  headline:
    fontFamily: '"Noto Sans SC", "Microsoft YaHei", "PingFang SC", system-ui, sans-serif'
    fontSize: "clamp(2.8rem, 6vw, 5.2rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.055em"
  title:
    fontFamily: '"Noto Sans SC", "Microsoft YaHei", "PingFang SC", system-ui, sans-serif'
    fontSize: "clamp(2.25rem, 2.5vw, 2.5rem)"
    fontWeight: 630
    lineHeight: 1.15
    letterSpacing: "-0.05em"
  body:
    fontFamily: '"Noto Sans SC", "Microsoft YaHei", "PingFang SC", system-ui, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: '"Noto Sans SC", "Microsoft YaHei", "PingFang SC", system-ui, sans-serif'
    fontSize: "0.9rem"
    fontWeight: 700
    lineHeight: 1.65
    letterSpacing: "0.08em"
rounded:
  square: "0px"
  avatar: "50%"
spacing:
  inline: "0.5rem"
  content: "1rem"
  cluster: "1.5rem"
  section: "3rem"
  page: "clamp(1.25rem, 6vw, 7rem)"
components:
  article-action:
    textColor: "{colors.primary-teal}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    height: "48px"
  article-row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "2.7rem 0"
  navigation-link:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    height: "44px"
---

# Design System: 章思哲个人博客

## Overview

**Creative North Star: “公开学习札记”**

这是一个安静、诚实的个人出版空间：访客先认识章思哲，再顺着清晰的文章入口开始阅读。视觉像一张被认真排版的暖色数字纸张，用排版、留白和细线建立秩序，不用口号式英雄区、卡片墙或装饰性隐喻争夺注意力。

系统保持适度的编辑感，但中文可读性优先。深墨承担内容，深青绿指向可行动与当前状态，氧化红只做类别和身份标记；真实头像是唯一主要图像。

**Key Characteristics:**

- 暖纸底色与深墨文字贯穿整页。
- 单一中文无衬线字体栈，靠字号、字重与留白建立层级。
- 发丝细分隔线、直角轮廓和排版式文章行取代卡片。
- 氧化红与深青绿稀疏出现，各自承担明确语义。
- 动效轻、短且可关闭，不改变内容阅读顺序。

## Colors

色彩像旧纸上的双色编辑标记：大面积保持中性，强调色只在能帮助理解或行动的位置出现。

### Primary

- **深青绿**（`#227a73`）：文章动作、当前导航下划线、标题短线、正文链接与引用标记；代表“可继续阅读”。

### Secondary

- **氧化红**（`#af3029`）：作者标记、在线状态点、文章类别和日期标签；代表“身份与编辑注记”。

### Neutral

- **暖纸**（`#fffcf0`）：唯一页面底色，也是所有内容区的连续画布。
- **深墨**（`#1c1b1a`）：主标题、正文和关键名称。
- **风化灰墨**（`#6f6b62`）：日期、摘要、联系方式和辅助说明。
- **发丝灰**（`#dad6cc`）：页眉、文章行、正文与页脚之间的结构分隔。

### Named Rules

**The Two-Ink Rule.** 深青绿只表示阅读路径或当前状态，氧化红只表示身份与编辑标签；两者都不铺成大面积背景。

**The One-Paper Rule.** 页面保持一张连续暖纸，不用白色卡片或交替色块切碎阅读流。

## Typography

**Display Font:** Noto Sans SC（回退 Microsoft YaHei、PingFang SC 与系统无衬线）  
**Body Font:** Noto Sans SC（相同回退栈）

**Character:** 中文无衬线排版清晰、直接、略带编辑出版感。系统不靠字体混搭制造个性，而用紧凑标题、宽松正文行距和数字等宽特性保持秩序。

### Hierarchy

- **Display**（650，`clamp(3rem, 3.4vw, 3.4rem)`，1.1）：首页问候，只出现一次；桌面尽量保持单行，移动端自然断成两行。
- **Headline**（650，`clamp(2.8rem, 6vw, 5.2rem)`，1.08）：文章页内标题，用于开始一次沉浸阅读。
- **Title**（630，`clamp(2.25rem, 2.5vw, 2.5rem)`，1.15）：文章列表标题，必须比摘要更快被扫到。
- **Body**（400，`1rem`，1.65；长文 2.0）：导航、说明和正文。长文阅读宽度限制在 48rem。
- **Label**（700，`0.9rem`，字距 `0.08em`）：文章类别与日期组合，稀疏使用。

### Named Rules

**The One-Family Rule.** 不引入展示性衬线体、等宽体或手写体；层级只通过同一中文无衬线家族的尺度、字重、行距与颜色建立。

## Layout

页面使用最大 84rem 的居中连续画布，左右页边距由 `clamp(1.25rem, 6vw, 7rem)` 调节。桌面首屏的介绍区约为 65/35 双栏：文字在左，真实圆形头像与状态在右；下方文章入口是一条贯穿容器的三栏排版行，顺序为日期、内容、动作。

正文收窄到 48rem 并居中，以较大的垂直间距和 2.0 行高支持中文长读。760px 以下，介绍、文章行和联系方式依次堆叠；头像缩为 4.5rem 并与状态并排。所有关键触点保持至少 44px 高，移动端不得横向滚动。

**The Reading-First Grid Rule.** 每个区块都必须沿 DOM 阅读顺序自然成立；网格只增强层级，不能依赖视觉换序解释内容。

## Elevation & Depth

系统完全无阴影。层次由暖纸上的发丝分隔线、字号反差、内容宽度和留白建立；悬浮态只改变颜色、下划线或轻微位移，不抬升整块内容。

**The Flat-by-Default Rule.** 不为导航、文章入口、联系方式或正文添加阴影、玻璃模糊与浮层质感。

## Shapes

结构元素全部使用直角：导航下划线、标题短线、状态方点、文章行和焦点轮廓都保持几何克制。唯一的圆形是作者头像，用来清晰地区分真实人物与排版系统。边框固定为 1px 发丝线；可见键盘焦点使用 3px 半透明深青绿轮廓并向外偏移 5px。

## Components

### Navigation

- **Wordmark:** 深墨粗体名称配一个氧化红方点；整块触点至少 44px。
- **Links:** 常态为深墨，悬浮转氧化红；当前“文章”项用 3px 深青绿下划线定位。
- **Mobile:** 760px 以下保留“文章”和“关于”，隐藏外部 GitHub 项以避免拥挤；联系方式区仍提供 GitHub。

### Article Row

- **Structure:** 上下各一条 1px 发丝线；桌面以日期、文章内容、阅读动作三列组织，移动端按相同语义顺序堆叠。
- **Typography:** 氧化红类别、深墨标题、风化灰墨摘要；标题悬浮或聚焦时出现从左展开的 2px 深青绿下划线。
- **Action:** 深青绿文字与箭头，底部 2px 实线；桌面指针靠近时允许轻微磁吸，触摸设备和减少动态模式禁用。

### Avatar Status

- **Avatar:** 真实 GitHub 头像，灰度处理，1px 发丝边框，圆形裁切；不得用插画或占位图替换。
- **Status:** 小氧化红方点加一行风化灰墨说明，语气事实化，不夸张包装。

### Contact Links

- **Style:** Lucide 线性图标、风化灰墨文字、至少 44px 触点；悬浮转氧化红。
- **Behavior:** 邮箱使用 `mailto:`，GitHub 在新标签页打开；移动端纵向排列并允许长邮箱安全换行。

### Long-form Article

- **Measure:** 标题、导语和正文都限制在 48rem；正文行高 2.0。
- **Quote:** 不使用卡片或引号图片，左侧仅放一个放大的深青绿中文开引号。
- **Links:** 深青绿、较高字重并带 1px 下划线，不能只靠颜色表达可点击性。

### Motion

- **Entrance:** 首屏区块向上 10px 淡入，时长 520ms，使用 `cubic-bezier(0.22, 1, 0.36, 1)`，分四级轻微错峰。
- **Interaction:** 常规颜色切换 180ms；文章标题下划线 220ms；磁吸进入 180ms、复位 420ms。
- **Accessibility:** `prefers-reduced-motion: reduce` 下关闭平滑滚动，并把动画与过渡压缩到近乎即时。

## Do's and Don'ts

### Do:

- **Do** 先呈现真实作者身份，再给出首屏可见的文章入口。
- **Do** 把暖纸、深墨、发丝线和大量留白当作主要视觉材料。
- **Do** 保持每个强调色的语义稳定，并为键盘、触摸与减少动态场景提供完整体验。
- **Do** 只展示真实文章、头像、联系方式和可验证内容。

### Don't:

- **Don't** 使用卡片墙、渐变、玻璃拟态、投影、圆角容器或大面积强调色。
- **Don't** 使用口号式全屏英雄区、胶片隐喻、复古胶片配色或装饰性视觉叙事。
- **Don't** 混用多套字体、把中文压得过紧，或让装饰阻挡文章阅读入口。
- **Don't** 伪造项目、履历、统计数字、推荐语或更多文章来填满版面。
