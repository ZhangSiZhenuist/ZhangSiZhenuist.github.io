---
name: "章思哲个人博客：编号出版目录"
description: "以哑黑画布、暖白文字、钴蓝与酸性青柠信号构成的编号个人出版目录。"
colors:
  signal-blue: "#3869f8"
  signal-lime: "#d9ff43"
  signal-lime-pressed: "#b9de2e"
  matte-black: "#090909"
  warm-white: "#f8f7ec"
  muted-silver: "#a8aaad"
  dim-silver: "#85898e"
  hairline: "#34383b"
  card-stroke: "#474b4e"
typography:
  catalog-number:
    fontFamily: '"Noto Sans SC Local", sans-serif'
    fontSize: "clamp(11rem, 14vw, 13.4rem)"
    fontWeight: 900
    lineHeight: 0.72
    letterSpacing: "-0.06em"
  display:
    fontFamily: '"Noto Sans SC Local", "Microsoft YaHei", sans-serif'
    fontSize: "clamp(4rem, 7.3vw, 7rem)"
    fontWeight: 850
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Noto Sans SC Local", "Microsoft YaHei", sans-serif'
    fontSize: "clamp(3.6rem, 7vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  card-title:
    fontFamily: '"Noto Sans SC Local", "Microsoft YaHei", sans-serif'
    fontSize: "clamp(3rem, 5.4vw, 5.6rem)"
    fontWeight: 850
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  body:
    fontFamily: '"Noto Sans SC Local", "Microsoft YaHei", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  post-body:
    fontFamily: '"Noto Sans SC Local", "Microsoft YaHei", sans-serif'
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 2
  catalog-label:
    fontFamily: '"League Gothic Local", "Noto Sans SC Local", sans-serif'
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.14em"
  action:
    fontFamily: '"Noto Sans SC Local", "Microsoft YaHei", sans-serif'
    fontSize: "1rem"
    fontWeight: 750
    lineHeight: 1.65
rounded:
  square: "0px"
spacing:
  screen-edge: "4.1vw"
  deck-gap: "1.25rem"
  heading-gap: "4rem"
  card-inset: "clamp(1.4rem, 4vw, 4rem)"
  section-block: "clamp(6rem, 10vw, 10rem)"
components:
  primary-action:
    backgroundColor: "{colors.signal-blue}"
    textColor: "{colors.matte-black}"
    typography: "{typography.action}"
    rounded: "{rounded.square}"
    padding: "0 1.7rem"
    height: "4rem"
  primary-action-hover:
    backgroundColor: "{colors.signal-lime}"
    textColor: "{colors.matte-black}"
  primary-action-active:
    backgroundColor: "{colors.signal-lime-pressed}"
    textColor: "{colors.matte-black}"
  article-card:
    backgroundColor: "{colors.matte-black}"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.square}"
    width: "min(71vw, 68rem)"
  deck-control:
    backgroundColor: "{colors.matte-black}"
    textColor: "{colors.warm-white}"
    rounded: "{rounded.square}"
    size: "4.25rem"
---

# Design System: 章思哲个人博客

## Overview

**Creative North Star: “编号出版目录 / Numbered Publishing Catalog”**

这是一个把每篇文章当作独立编号出版物的个人博客。它以目录、档案编号、状态标签和信号波形组织信息：访客先在首屏识别作者与 CATALOG 001，再直接进入真实文章，而不是经过居中头像、履历卡片或泛化作品集介绍。

视觉气质冷静、技术化、强对比。哑黑背景像设备面板，暖白大字承担叙事，钴蓝与酸性青柠分别标记主路径和高反馈状态；超大编号、细线网格、压缩英文标签、方形按钮与横向卡组共同构成可扩展的出版目录语言。

**Key Characteristics:**

- 每篇内容必须拥有连续的三位目录编号，如 `001`、`002`。
- 哑黑连续画布上使用暖白大标题、银灰辅助信息和 1px 结构线。
- 钴蓝是默认操作信号，酸性青柠用于悬浮、焦点、选区和正文链接。
- 超大编号与中文粗体标题使用 Noto Sans SC Local；窄体元数据使用 League Gothic Local。
- 信号波形是唯一主要抽象图像，并与文章编号一同出现。
- 所有交互保持直角、机械、可键盘访问，并尊重减少动态偏好。

## Colors

配色来自暗色设备界面与印刷校样标记：大面积保持近黑与暖白，两个高饱和信号色只负责路径和反馈。

### Primary

- **钴蓝信号**（`#3869f8`）：主阅读按钮、当前导航下划线、文章状态点、目录进度和文章元数据；它代表默认可行动路径。

### Secondary

- **酸性青柠**（`#d9ff43`）：主按钮悬浮、键盘焦点、文本选区、正文链接和激活后的目录进度；它代表即时反馈，而不是静态装饰。
- **按压青柠**（`#b9de2e`）：主操作按下时的唯一暗化状态。

### Neutral

- **哑黑**（`#090909`）：页面和文章卡片的连续底色。
- **暖白**（`#f8f7ec`）：主标题、关键文本和反转控制内容。
- **静音银**（`#a8aaad`）：日期、导航默认态、页脚和次级说明。
- **暗银**（`#85898e`）：编码标签、未发布状态与低优先级文字。
- **结构线**（`#34383b`）：分区、页脚、卡片内部和详情区的 1px 分隔。
- **卡片描边**（`#474b4e`）：已发布与排队文章卡片的外轮廓。

### Named Rules

**The Signal Hierarchy Rule.** 钴蓝表示默认路径，酸性青柠表示反馈或最高显著性；不要互换两者的角色，也不要让它们成为大面积背景。

**The Continuous Black Rule.** 页面区段与卡片保持同一哑黑底色，层级依靠描边、留白、字号与信号色建立，不使用交替背景色。

## Typography

**Display Font:** Noto Sans SC Local（本地可变字重，回退 Microsoft YaHei 与 sans-serif）
**Body Font:** Noto Sans SC Local（同一字体栈）
**Catalog Label Font:** League Gothic Local（回退 Noto Sans SC Local 与 sans-serif）

**Character:** Noto Sans SC Local 负责中文阅读与极粗显示层级，既能承载 16px 正文，也能扩展到 200px 以上的目录编号。League Gothic Local 只出现在短英文编码、状态名和档案标签中，以窄体节奏强化目录感；它不用于中文正文。

### Hierarchy

- **Catalog Number**（900，`clamp(11rem, 14vw, 13.4rem)`，0.72，字距 `-0.06em`）：首屏三位编号；桌面纵向放大 1.18 倍，移动端改为 `clamp(8rem, 33vw, 12rem)` 并取消变形。
- **Display**（850，`clamp(4rem, 7.3vw, 7rem)`，1.02，字距 `-0.04em`）：首屏文章标题；桌面横向放大 1.07 倍，移动端允许自然换行。
- **Headline**（850，`clamp(3.6rem, 7vw, 6rem)`，0.98，字距 `-0.04em`）：文章目录、关于区和正文标题；620px 以下统一为 `clamp(3rem, 15vw, 4.6rem)`。
- **Card Title**（850，`clamp(3rem, 5.4vw, 5.6rem)`，1.04，字距 `-0.04em`）：文章卡主标题；620px 以下收敛为 `clamp(2.8rem, 13vw, 4rem)`。
- **Body**（400，`1rem`，1.65）：导航外的大多数说明文字；页面基准字号不低于 16px。
- **Post Body**（400，`1.08rem`，2.0）：长文正文，620px 以下回到 `1rem`，阅读宽度上限 48rem。
- **Catalog Label**（400，约 `0.9rem`，字距 `0.10–0.14em`）：`CATALOG 001`、`TYPE`、`STATUS`、作者编码和文章结束标记；仅限短文本。

### Named Rules

**The Two-Type Rule.** Noto Sans SC Local 承担所有中文与主要显示层级；League Gothic Local 只承担短英文目录元数据。不得引入第三种字体。

**The Number-before-Title Rule.** 每个出版入口先出现编号或 `CATALOG` 标签，再出现文章标题；编号是导航结构，不是装饰水印。

## Layout

全站采用宽屏、不对称的目录式构图。通用内容宽度为 `min(91.8vw, 92rem)`；首屏使用 `100svh` 且最小高度 48rem，桌面关键内容以约 4.1% 的左右边距绝对定位：作者导航在顶部，编号与文章标题占左侧，宽幅信号波形占右半部，联系方式和版权固定在首屏底部边线之上。

文章目录使用横向可选择卡组。已发布卡宽 `min(71vw, 68rem)`，待发布卡宽 `min(28vw, 24rem)`，卡间距 1.25rem；轨道被视口裁切，通过前后按钮平移。卡片主体在桌面为文字/波形双栏，顶部存放目录号和日期，底部存放详情开关与主题编码。关于区为头像、介绍、作者编码三栏，长文区收窄至 48rem。

### Responsive Structure

- **≤980px:** 首屏从绝对定位改为五行网格，使用 1.25rem 页面内边距；页眉变为两列，隐藏状态短句、GitHub 顶部导航、主题栈和宣言栈。波形变为全宽，联系信息纵排；文章卡主体改为单列，关于区改为头像/介绍两列。
- **≤620px:** 通用内容宽度变为 `calc(100vw - 2.5rem)`；主阅读按钮铺满容器，首屏页脚、关于区和文章页脚纵向堆叠。已发布卡占满内容宽，待发布卡保留下一张露出的预告宽度；详情元数据从三列变一列。
- **Minimum:** 页面最小宽度 320px，任何视口不得产生意外横向滚动；卡组横移量必须与对应断点的卡宽一致。

**The Asymmetric Balance Rule.** 左侧用编号和标题建立重量，右侧用信号波形与小型编码栈平衡；不要把首屏重新居中成头像加简介。

**The Peek-ahead Rule.** 文章卡组必须在桌面和移动端都露出下一张卡的一部分，让横向导航关系在操作前就可见。

## Elevation & Depth

系统不使用阴影、渐变、玻璃模糊或悬浮面板。深度来自卡片描边、1px 结构线、超大字号与被裁切的横向轨道；卡片与页面共享哑黑底色，因此它们读作出版版面而非浮动容器。

**The Flat Instrument Rule.** 所有表面在静止和交互状态都保持平面；反馈通过颜色反转、线条、位移和内容展开完成，不通过投影抬升。

## Shapes

所有可交互控件和内容容器均为直角（`0px`）。文章卡、主按钮、翻页按钮、状态点、进度线和焦点轮廓形成方形机械语言；图标统一使用无填充线条、方形端点与斜接连接，描边宽 1.6。头像保持原始方形裁切并转灰度，不使用圆形头像。

结构线通常为 1px；当前导航和卡组进度为 2px。键盘焦点使用 2px 酸性青柠轮廓，向外偏移 5px。信号波形可以有连续有机曲线，但只能作为规则网格中的对比元素。

## Components

### Navigation

- **Wordmark:** Noto Sans SC Local，800 字重，桌面 `clamp(1.35rem, 1.75vw, 1.7rem)`；移动端 1.25rem。
- **Links:** 默认静音银、0.8rem、字距 0.06em、最小高度 44px；悬浮或当前项转暖白，并由 2px 钴蓝下划线从右向左展开。
- **State:** `IntersectionObserver` 根据 `INDEX` 和 `ABOUT` 对应区段自动更新当前项；≤980px 隐藏顶部 GitHub，但页内仍保留联系入口。

### Primary Action

- **Shape:** 方形实色按钮（`0px`），桌面最小宽 14.75rem、高 4rem，水平内边距 1.7rem；卡片版本宽 13.5rem、高 3.6rem。
- **Default:** 钴蓝底、黑字、750 字重，标签与右箭头两端对齐。
- **Hover / Active:** 悬浮转酸性青柠，箭头向右移动 0.32rem；按下转按压青柠。背景切换 180ms，箭头位移 200ms。
- **Mobile:** ≤620px 的首屏主按钮占满内容宽度。

### Article Deck

- **Viewport / Track:** 视口隐藏溢出；轨道使用水平 flex、1.25rem 间距和 `translate3d`，切换时长 620ms。
- **Published Card:** 1px 卡片描边、至少 35rem 高；顶部目录状态，主体标题/摘要/按钮/波形，底部详情开关与主题编码。
- **Queued Card:** 使用暗银文本与状态点，明确标注 `QUEUE` 和“尚未发布”；不可伪装为可阅读内容。
- **Navigation:** 前后按钮为 4.25rem 方形描边控制。可用状态为暖白，悬浮反转为暖白底黑字，按下使用酸性青柠；禁用状态降低对比并显示 `not-allowed`。
- **Position Indicator:** `01 / 02` 居中，下方两段 3rem 进度线分别以钴蓝或酸性青柠表示当前卡。

### Expandable Detail

- **Trigger:** 原生按钮，至少 44px 高，文本在“展开详情 / 收起详情”之间切换；加号图标展开时旋转 45°。
- **Panel:** 默认 `grid-template-rows: 0fr`、透明且裁切；展开后变为 `1fr`，上下内边距 2rem并显示结构线。
- **Metadata:** `TYPE / STATUS / READ` 桌面三列，≤620px 单列；League Gothic Local 标签配 Noto Sans SC Local 值。
- **Semantics:** 同步维护 `aria-expanded`、`aria-controls` 与详情区 `aria-hidden`，视觉状态不得脱离无障碍状态。

### Signal Wave Plate

- **Role:** 由钴蓝过渡到酸性青柠的信号线，作为文章主题的唯一抽象视觉；装饰性实例使用空 `alt`。
- **Hero:** 桌面位于右侧，宽 54%、高 33%；进入时由右侧裁切展开并从 5px 模糊恢复清晰。
- **Card:** 自适应卡片右栏，最小高度 12rem；移动端移到正文之后并降低为 7rem 最小高度。

### About Block

- **Identity:** 真实 GitHub 头像，最大 10rem，方形、灰度并提升对比；配 `ZSZ / PROFILE` 窄体编码。
- **Copy:** 主标题沿用 Headline，说明文字最大 64ch；只陈述真实的写作与学习定位。
- **Links:** 44px 最小触点，默认 1px 钴蓝底边；悬浮时文字和底边同时转酸性青柠。

### Long-form Article

- **Measure:** 标题、正文、页脚统一限制在 48rem 并居中；正文行高 2.0。
- **Metadata:** `CATALOG 001`、日期和类型横向换行排列，首项使用钴蓝。
- **Quote:** 上下各一条 1px 钴蓝线，字号 `clamp(1.4rem, 2.4vw, 2rem)`、700 字重，不使用引用卡片。
- **Links:** 酸性青柠并始终带 1px 下划线，不能只靠颜色表达可点击性。

### Motion

- **Standard Ease:** `cubic-bezier(0.16, 1, 0.3, 1)`，用于轨道、裁切与机械位移。
- **Signal Entrance:** 900ms，延迟 140ms，以 `clip-path` 和 5px 模糊恢复呈现。
- **Deck:** 卡组平移 620ms；详情展开 440ms，透明度和边线 240ms；加号旋转 300ms。
- **Micro-interactions:** 颜色 180ms，导航下划线 220ms，箭头位移 200ms。
- **Reduced Motion:** `prefers-reduced-motion: reduce` 下关闭平滑滚动，把所有动画和过渡压缩至 0.01ms，并只播放一次。

### Accessibility

- **Keyboard:** 页面首项提供跳到主要内容的链接；所有链接与按钮使用 2px 酸性青柠可见焦点，偏移 5px。
- **Targets:** 导航、联系链接和详情开关至少 44px；主操作和翻页按钮更大。
- **Semantics:** 使用语义化 `nav`、`article`、`time`、`dl` 和真实 `button`；卡组区域、导航和控件均有可读标签。
- **Images:** 真实头像必须有姓名替代文本；纯装饰信号波形使用空替代文本。
- **Touch:** 链接和按钮使用 `touch-action: manipulation`；禁用按钮同时具有原生 `disabled` 和明确低对比状态。

## Do's and Don'ts

### Do:

- **Do** 为每篇真实文章分配连续三位编号，并在首屏、文章卡和正文元数据中保持一致。
- **Do** 用哑黑、暖白、银灰和 1px 结构线搭建主体，把钴蓝和酸性青柠留给信号与反馈。
- **Do** 让下一张文章卡始终部分露出，并让按钮、状态标签和进度指示同步当前卡。
- **Do** 维持 Noto Sans SC Local / League Gothic Local 的职责分工与本地字体加载。
- **Do** 在桌面、平板、移动端和减少动态模式下保留完整阅读路径与无障碍状态。

### Don't:

- **Don't** 恢复暖纸、红绿编辑标记、居中头像、圆角卡片或传统作品集首屏。
- **Don't** 添加阴影、渐变、玻璃拟态、圆角胶囊或大面积酸性青柠背景。
- **Don't** 把 League Gothic Local 用于中文正文，或使用第三种装饰字体破坏目录语言。
- **Don't** 用虚构文章填满卡组；未发布内容必须以排队状态明确标识且不可点击。
- **Don't** 依赖动画、悬浮或颜色单独传达状态；键盘、触摸和减少动态体验必须等价。
