---
name: "章思哲个人博客：AstroPaper v5.5.1"
description: "直接复用 AstroPaper v5.5.1 的居中等宽双主题阅读系统。"
colors:
  light-background: "#fdfdfd"
  light-foreground: "#282728"
  light-accent: "#006cac"
  light-muted: "#e6e6e6"
  light-border: "#ece9e9"
  dark-background: "#212737"
  dark-foreground: "#eaedf3"
  dark-accent: "#ff6b01"
  dark-muted: "#343f60"
  dark-border: "#ab4b08"
typography:
  display:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
  headline:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: "2.25rem"
  title:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: "1.75rem"
  body:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.5rem"
  label:
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "1.25rem"
rounded:
  inline: "0.25rem"
  control: "0.375rem"
  round: "9999px"
spacing:
  page-inset: "1rem"
  item-block: "1.5rem"
  section-block: "3rem"
  compact-gap: "0.25rem"
---

# Design System: 章思哲个人博客

## Overview

**Creative North Star: “AstroPaper 阅读栏 / The AstroPaper Reading Rail”**

当前站点不是旧版“编号出版目录”的延续，而是对开源主题 [AstroPaper v5.5.1](https://github.com/satnaing/astro-paper/tree/v5.5.1) 的直接复用与中文化适配。界面与主要交互来自 Sat Naing 及贡献者维护的 AstroPaper，按 MIT License 使用；版本与来源同时记录在 `package.json`、`README.md` 和 `THIRD_PARTY_NOTICES.md`。新增页面与组件应优先沿用上游 AstroPaper 的既有模式，避免重新发明一套品牌视觉。

视觉核心是一条克制、居中的等宽阅读栏：接近纸白或蓝黑的连续页面底色，单一主题强调色，细分隔线，以及不加容器装饰的文章条目。桌面预览中，导航、首屏、文章列表与页脚共享同一条 48rem 栏宽和同一左边线，页面靠排版、间距与颜色建立层级，而不是靠海报式大图、营销卡片或装饰背景。

**Key Characteristics:**

- AstroPaper v5.5.1 原生结构、图标与交互是当前视觉权威。
- 全站使用系统等宽字体，中文、英文、数字和代码保持一致的技术写作气质。
- 浅色主题使用蓝色强调，深色主题使用橙色强调；两套主题各自拥有背景、前景、弱化面和边框 token。
- 桌面采用 `max-w-3xl` 的居中单栏；页面主体不扩展为全宽杂志布局。
- 文章入口是无卡片底色、无阴影的列表项，标题、日期和摘要顺序清晰。
- 虚线下划线、波浪活动态和线性图标构成轻量交互语言。

## Colors

色彩按语义成对切换：背景、前景、强调、弱化面和边框在浅色与深色主题中保持相同职责，不混用两套强调色。

### Primary

- **浅色蓝强调**（`light-accent`）：浅色主题中的文章标题、RSS 图标、悬浮链接、列表标记、焦点轮廓和阅读进度。
- **深色橙强调**（`dark-accent`）：深色主题中承担完全相同的行动与状态职责。

### Neutral

- **浅色纸面与墨色**（`light-background`、`light-foreground`）：浅色页面的连续底色和正文、标题、图标颜色。
- **浅色弱化面与分隔线**（`light-muted`、`light-border`）：行内代码、滚动条、表格和区段边界。
- **深色蓝黑与冷白**（`dark-background`、`dark-foreground`）：深色页面的连续底色和主要内容颜色。
- **深色弱化面与棕橙分隔线**（`dark-muted`、`dark-border`）：深色模式中的次级表面和结构线。

### Named Rules

**The Paired Theme Rule.** 任一颜色都必须通过当前主题的语义变量使用；不要在组件中固定浅色蓝或深色橙，也不要让一个主题借用另一个主题的 token。

**The Accent-as-Signal Rule.** 强调色用于链接、当前状态、焦点、代码差异与阅读进度；大面积页面仍由背景色和前景色主导。

**The Continuous Canvas Rule.** 页眉、正文、文章条目和页脚共享页面底色。分区用细边框和留白表达，不增加交替色块。

## Typography

**Display Font:** 系统等宽字体栈（`ui-monospace` 起始，回退到 SFMono-Regular、Menlo、Monaco、Consolas、Liberation Mono、Courier New 与 `monospace`）

**Body Font:** 同一系统等宽字体栈

**Label/Mono Font:** 同一系统等宽字体栈

**Character:** 页面通过单一等宽字体获得一致的技术记录感。没有另设中文展示字体或衬线正文字体；层级来自字号、字重、斜体、透明度和间距，长文则由 Tailwind Typography 的排版节奏组织。

### Hierarchy

- **Display**（700，桌面 3rem / 移动端 2.25rem，桌面行高 1）：首页“你好，我是章思哲”的唯一大标题。
- **Headline**（页面标题通常 600，文章标题 700；桌面 1.875rem / 移动端 1.5rem）：文章列表页、关于页和文章详情页标题。
- **Section Title**（600，1.5rem，字距略放宽）：“精选文章”“最近文章”等首页分区标题。
- **Article Entry Title**（500，1.125rem，行高 1.75rem）：文章列表中的强调色标题链接。
- **Body**（400，1rem，行高 1.5rem）：导航、简介、摘要、日期与页脚；长文由 `.app-prose` 继承同一字体并使用 Typography 插件的内容节奏。
- **Label**（400，0.875rem，行高 1.25rem）：小尺寸日期、标签、复制代码控件和辅助元数据。
- **Secondary Tone:** 面包屑、日期和图注通过 `font-light`、斜体或 75%–80% 不透明度弱化，不另增字体家族。

### Named Rules

**The One-Mono-Family Rule.** 界面文字、中文正文、元数据和代码共享系统等宽字体；只有第三方搜索结果中的嵌套提示符允许使用 `system-ui`。

**The Modest Scale Rule.** 除首页首句和 404 数字外，页面标题保持 1.5–1.875rem 的紧凑尺度。不要把文章标题扩展成占满视口的海报字。

## Layout

全站的基础容器是居中的 `max-w-3xl` 阅读栏：外宽上限 48rem，宽度为 100%，左右各有 1rem 内边距。桌面实测视口约 1490px 时，外栏宽 768px、可用内容宽约 736px；页眉分隔线、主内容和页脚分隔线严格共线。正文、文章详情和关于页继续使用同一宽度，不建立额外的宽屏侧栏。

首页按自然文档流垂直展开：页眉、介绍区、精选/最近文章区、全部文章入口与页脚。介绍区使用上下留白和底边框；内容分区通常以上方 3rem、下方 1.5rem 的节奏分隔。文章详情同样是单栏，标题与元数据之后进入 `.app-prose`，底部依次出现标签、返回顶部、分享和上一篇/下一篇。

### Responsive Structure

- **默认 / `<640px`:** 阅读栏保持满宽并保留 1rem 安全内边距。导航折叠为菜单按钮；文字链接列表默认隐藏，展开后成为 11rem 的两列网格。文章入口仍为单列；社交区、页脚版权和上一篇/下一篇纵向堆叠。首页 Display 收至 2.25rem，页面标题收至 1.5rem。
- **`sm` / `≥640px`:** 页眉改为水平布局，站点名与文章、标签、关于、归档、搜索、主题开关同排；导航项使用紧凑横向间距。页脚改为版权与社交链接两端排列，上一篇/下一篇使用两列，日期可回到 1rem。
- **`md` / `≥768px`:** 返回顶部控件从固定的 56px 圆形浮钮变为文内粘性紧凑控件；文章标题后的锚点默认隐藏，仅在标题悬浮或锚点聚焦时显示。
- **Overflow:** 长链接允许断行；表格中的代码在小屏可强制断词，列表裁切横向溢出，代码块保留自身滚动与聚焦边界。

**The Reading Rail Rule.** 新页面的主内容默认使用同一居中 48rem 阅读栏；只有内容本身确实需要更宽的图表或媒体时，才可局部突破，而不是扩大整个站点外壳。

## Elevation & Depth

核心阅读界面是平面的。页眉、区段、文章正文与页脚依靠 1px 语义边框、虚线分隔、透明度和垂直留白建立层级，文章条目没有背景卡、描边框或阴影。唯一显著抬升是移动端返回顶部按钮使用圆形底、`shadow-xl` 和环形阅读进度；到 `md` 断点后取消阴影并变为带轻微背景透明度和模糊的文内控件。跳到正文链接也可使用轻微背景模糊，以便从页面上方浮现时保持可读。

**The Flat Reading Rule.** 内容层级默认平面化；阴影只属于暂时覆盖内容的实用控件，不用于文章列表、导航或普通内容容器。

## Shapes

主要页面结构、文章条目、导航与分隔线均为直角。交互识别更多来自虚线下划线、波浪形活动导航下划线、1–2px 边线与线性 SVG 图标，而不是圆角卡片。局部圆角是功能性的：行内代码使用轻微圆角（`inline`），搜索输入和桌面返回顶部控件使用 0.375rem（`control`），移动返回顶部按钮使用完全圆形（`round`）。图片默认有 1px 主题边框；关于页显式移除图片边框。

## Components

### Navigation

- **Desktop:** 阅读栏顶部水平排列站点名与导航；站点名为 1.5rem、600 字重，底部用 1px 主题边框收束。文字链接为中等字重，悬浮转强调色；当前栏目使用 2px 波浪下划线和 0.25rem 偏移。
- **Mobile:** 站点名保持左侧，菜单按钮在右侧。按钮同步维护 `aria-expanded`、`aria-controls` 和“打开菜单 / 关闭菜单”标签；展开内容以中文文字为主，搜索与主题开关保留图标。
- **Utilities:** 归档、搜索和主题控件使用无填充线性图标；移动端扩大内边距，主题按钮达到 48px 方形，桌面收为 32px。

### Article Entry

- **Structure:** 每篇文章是具有 1.5rem 上下间距的列表项，顺序为标题链接、日期、摘要。
- **Title:** 1.125rem、500 字重、主题强调色；默认不画容器，悬浮时出现虚线下划线，键盘聚焦时以全局虚线焦点轮廓替代下划线。
- **Metadata:** 日期与日历图标使用约 80% 不透明度；小尺寸为 0.875rem，文章详情中的大尺寸在 `sm` 断点恢复到 1rem。
- **Body:** 摘要直接落在页面底色上，不使用背景、描边、圆角、缩略图或“阅读更多”按钮。

### Theme Control

- **Resolution order:** 先读取 `localStorage`，若未保存且未设置固定主主题，则跟随 `prefers-color-scheme`。
- **Behavior:** 主题值写入根元素 `data-theme`，在首屏脚本阶段提前应用以避免闪白；切换时保存偏好，并同步更新主题按钮的 `aria-label` 与浏览器 `theme-color`。
- **Feedback:** 月亮与太阳图标通过旋转和缩放交替；系统主题改变时会同步更新站点主题。

### Links and Tags

- **Body links:** 正文链接为前景色配虚线下划线，悬浮转强调色；长 URL 允许断行。
- **Tags:** 标签前置井号图标并使用 2px 虚线底边；悬浮时向上移动 0.125rem，同时边框与文字转强调色。
- **Icon links:** 社交与分享链接使用线性图标，悬浮轻微旋转 6deg；文本标签保留给屏幕阅读器。

### Long-form Content

- **Typography:** `.app-prose` 覆盖 Tailwind Typography，使标题、正文、列表、表格和代码统一使用主题前景色。
- **Code:** 行内代码置于 75% 弱化色背景和轻微圆角中；代码块使用 Shiki 的明暗双主题颜色，支持新增、删除、行高亮与词高亮。
- **Structure:** 列表标记使用强调色，引用以强调色左边线和约 80% 不透明度区分，图片与表格使用主题边框，水平线使用主题边框。
- **Article utilities:** 顶部 4px 阅读进度条使用强调色；二级及以下标题自动获得可复制锚点；代码块在悬浮或聚焦时显示复制控件。

### Back to Top

- **Mobile:** 固定在右下角的 56px 圆形按钮，外圈使用圆锥渐变显示阅读进度；页面滚动超过 30% 后以 500ms 位移和透明度过渡出现。
- **Desktop:** 在 `md` 断点变为正文右侧的紧凑粘性控件，去除阴影并显示“回到顶部”文字。

### Accessibility

- 页面开头提供“跳到正文”链接，平时位于视口上方，键盘聚焦时进入可视区。
- 所有链接和按钮使用 2px 虚线强调色 `focus-visible` 轮廓和 1px 外偏移；正文链接聚焦时去除下划线，避免与轮廓叠加。
- 导航、面包屑、分页与文章使用语义元素；当前面包屑使用 `aria-current="page"`，分页有可读标签，禁用分页项同时具备 `aria-disabled` 与视觉弱化。
- 纯图标操作提供 `title`、`aria-label` 或屏幕阅读器专用文本；主题按钮使用 `aria-live="polite"`，移动菜单公开展开状态。
- 明暗主题根据系统偏好初始化并保持高对比的前景/背景组合；选中文本反转为强调色底和页面背景色文字。
- 当前源码启用平滑滚动和若干过渡，但没有显式的 `prefers-reduced-motion` 覆盖。新增动画时应补充减少动态分支，且不能让动画成为理解状态的唯一方式。

## Do's and Don'ts

### Do:

- **Do** 直接复用 AstroPaper v5.5.1 的现有组件、线性图标和交互模式，再做必要的中文内容适配。
- **Do** 让所有标准页面沿用居中的 `max-w-3xl` 阅读栏和 1rem 页面内边距。
- **Do** 通过语义主题变量使用颜色，确保浅色蓝与深色橙承担同一强调职责。
- **Do** 保持系统等宽字体贯穿导航、正文、元数据和代码。
- **Do** 把文章列表写成标题—日期—摘要的平面条目，并保留虚线链接、细边框和稳定垂直节奏。
- **Do** 同时验证 `<640px`、`≥640px` 和 `≥768px` 的导航、页脚、文章工具与长内容换行。
- **Do** 保留跳转正文、清晰焦点、可读图标标签、菜单展开状态和主题状态同步。

### Don't:

- **Don't** 恢复旧版编号目录、超大目录号、信号波形、横向卡组、钴蓝/酸性青柠配色或 League Gothic / Noto Sans SC 字体组合。
- **Don't** 把文章入口包成带阴影、圆角、背景色或大图的营销卡片。
- **Don't** 把桌面阅读栏拉成全宽多栏首页，或让页眉、正文和页脚失去共同左边线。
- **Don't** 在组件内硬编码主题色，或让强调色铺满大面积背景。
- **Don't** 仅靠颜色、悬浮或动画表达当前状态；保留文字、图标、下划线、ARIA 与键盘焦点的等价信息。
- **Don't** 为“品牌感”引入第二套展示字体、玻璃拟态、渐变背景或与 AstroPaper 无关的装饰系统。
