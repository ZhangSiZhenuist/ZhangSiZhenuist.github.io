---
name: "章思哲个人博客：思想航线"
description: "以深海军蓝电影画面、编辑排版与鲜明行动色构成的可探索个人写作航线。"
colors:
  deep-navy: "#001B48"
  flight-blue: "#02457A"
  cloud-white: "#F5F5F7"
  cool-muted: "#9BB1C4"
  signal-yellow: "#FFDE17"
  signal-yellow-hover: "#E5C50C"
  route-amber: "#FFB300"
  atmospheric-line: "rgba(255, 255, 255, 0.12)"
  contact-light: "#F2F4F5"
typography:
  display:
    fontFamily: '"Inter", "Noto Sans SC", system-ui, sans-serif'
    fontSize: "clamp(4.25rem, 6.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Inter", "Noto Sans SC", system-ui, sans-serif'
    fontSize: "clamp(2.5rem, 4vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  editorial:
    fontFamily: '"Playfair Display", Georgia, serif'
    fontSize: "clamp(2.7rem, 4.6vw, 4.8rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"Inter", "Noto Sans SC", system-ui, sans-serif'
    fontSize: "clamp(1.55rem, 2.4vw, 2.1rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Inter", "Noto Sans SC", system-ui, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: '"Inter", "Noto Sans SC", system-ui, sans-serif'
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  control: "8px"
  module: "12px"
  surface: "14px"
  pill: "999px"
  circle: "50%"
spacing:
  compact: "12px"
  control-inline: "22px"
  card: "30px"
  section-desktop: "130px"
components:
  button-primary:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.deep-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  button-quiet:
    backgroundColor: "rgba(255, 255, 255, 0.07)"
    textColor: "{colors.cloud-white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  navigation-shell:
    backgroundColor: "rgba(0, 27, 72, 0.5)"
    textColor: "{colors.cloud-white}"
    rounded: "{rounded.surface}"
    padding: "12px 18px 12px 24px"
    height: "68px"
  reading-route:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.deep-navy}"
    rounded: "{rounded.module}"
    padding: "24px 28px 28px"
  destination-card:
    backgroundColor: "{colors.flight-blue}"
    textColor: "{colors.cloud-white}"
    rounded: "{rounded.surface}"
    padding: "30px"
  circular-control:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.deep-navy}"
    rounded: "{rounded.circle}"
    size: "46px"
  magnetic-cta:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.deep-navy}"
    rounded: "{rounded.circle}"
    size: "180px"
---

# Design System: 章思哲个人博客

## Overview

**Creative North Star: “思想航线 / The Thinking Skyway”**

这个系统把个人博客塑造成一段可探索的思想航线：深海军蓝构成夜航般的连续世界，山峰、云海与机舱窗口带来电影感纵深，鲜明黄色把阅读入口变成清晰信号。航空只是一种关于探索、坐标与前往下一站的视觉语言；内容始终忠于章思哲本人、真实文章和公开联系方式。

体验在沉浸与可读之间保持明确秩序。首页以全屏影像和固定玻璃导航建立氛围，但文章入口仍在首屏可见；白色阅读路线模块穿出深色场景，随后以横向目的地、非对称内容网格、真实头像、数据带、编辑引语和浅色联系收束引导访客继续阅读。成品评审的全部实质问题已解决，当前视觉世界可作为后续页面的正式权威。

**Key Characteristics:**

- 深海军蓝连续画布、电影化山峰影像与机舱窗口共同建立“航线”世界。
- 信号黄专门标示主要行动、焦点和关键状态；琥珀色只用于阅读路线的出发动作。
- Inter 承担清晰、现代的中文界面与大标题，Playfair Display 只作为稀疏的编辑性强调。
- 宽屏容器、大片留白、横向目的地卡与非对称编辑网格形成桌面优先的节奏。
- 12px / 14px 曲面与圆形控件构成稳定形态语言，不把页面变成同质卡片墙。
- 动效服务于“穿越、前往、继续探索”，且减少动态模式直接呈现可读终态。

## Colors

色彩像夜航仪表：深蓝负责世界与深度，冷白负责信息，黄色与琥珀以低面积、高辨识度标出行动。

### Primary

- **深海军蓝**（`deep-navy`，#001B48）：全页主画布、深色文字反差与主操作前景，保证品牌世界持续而稳定。
- **航行蓝**（`flight-blue`，#02457A）：目的地卡、最新文章面板和深色画布上的次级表面。

### Secondary

- **信号黄**（`signal-yellow`，#FFDE17）：主要按钮、焦点轮廓、关键词、图标和统计数字；悬浮使用 `signal-yellow-hover`（#E5C50C）。
- **航线琥珀**（`route-amber`，#FFB300）：白色阅读路线模块中的提交动作，用于区分“规划路线”和全站主 CTA。

### Neutral

- **云层白**（`cloud-white`，#F5F5F7）：深色场景中的正文与标题。
- **冷雾灰蓝**（`cool-muted`，#9BB1C4）：辅助文案、元数据和弱化说明。
- **大气细线**（`atmospheric-line`，rgba(255, 255, 255, 0.12)）：玻璃导航、内容网格、卡片与页脚控件的低对比边界。
- **近云白**（`contact-light`，#F2F4F5）：尾段联系区的明亮反转画布。

### Named Rules

**The Signal, Not Paint Rule.** 信号黄只用于行动、焦点和少数关键强调；不要把它铺成大面积背景或用于普通说明文字。

**The One Night Sky Rule.** 首页从英雄区到编辑内容保持一块连续深海军蓝画布；只有阅读路线模块和联系收束允许以浅色面主动穿出。

**The Amber Departure Rule.** 琥珀色只标记阅读路线模块中的“出发”动作，不与全局信号黄争夺主层级。

## Typography

**Display Font:** Inter（回退至 Noto Sans SC、system-ui、sans-serif）

**Body Font:** Inter（回退至 Noto Sans SC、system-ui、sans-serif）

**Editorial Accent:** Playfair Display（回退至 Georgia、serif）

**Character:** Inter 提供航空界面般的清晰和高效，粗重、紧字距的大标题带来电影海报的冲击。Playfair Display 只在右侧英雄文案与编辑引语中出现，让克制的衬线节奏像一本旅行杂志，而不是另起一套正文系统。

### Hierarchy

- **Display**（800，`clamp(4.25rem, 6.5vw, 6rem)`，1.02）：首屏中心主张；移动端收为 `clamp(2.5rem, 13vw, 3.8rem)`。
- **Headline**（800，`clamp(2.5rem, 4vw, 3.5rem)`，1.08）：区段主标题，保持宽屏、短行和强层级。
- **Editorial**（700，`clamp(2.7rem, 4.6vw, 4.8rem)`，1.08）：编辑引语和稀疏的英文氛围文案。
- **Title**（700，`clamp(1.55rem, 2.4vw, 2.1rem)`，1.12）：目的地卡和文章面板标题。
- **Body**（400，1rem，1.6）：介绍、摘要和主要说明；长段落通常限制在 50–62ch。
- **Label**（700，0.78rem，0.08em）：元数据、路线标签和卡片眉题；英文可使用大写，中文保持自然字形。

### Named Rules

**The Editorial Accent Rule.** Playfair Display 只用于独立的编辑性短句，不用于导航、按钮、元数据或中文长正文。

**The Bold Horizon Rule.** 大标题用粗重字重、紧字距和短行建立地平线般的力量；不要用描边、渐变字或多余字体效果制造层级。

## Layout

桌面基础容器为 `min(1280px, calc(100vw - 96px))`，固定玻璃导航略宽至 `min(1380px, calc(100% - 48px))`。首屏占满 100svh（最小 680px），山峰视频、深蓝遮罩、中心文案和覆盖全画面的机舱窗口共用同一舞台；白色阅读路线模块以 -72px 上移量压在首屏末端，让真实阅读入口在沉浸场景结束前出现。

主体不是等宽卡片队列。目的地以横向滚动的大幅卡展开；写作价值使用 1.18 / 0.82 的非对称网格，首项跨两行；关于区以 0.95 / 1.05 的文案—头像组合呈现；统计带为四等分；编辑引语与最新文章面板采用 1 / 1 双栏。常规区段桌面上下留白为 130px，关于、旅程等叙事段落可扩大到 160px。

### Responsive Structure

- **桌面 / >1024px:** 保持 1280px 宽屏容器、完整固定导航、横向目的地卡、非对称体验网格和双栏关于/旅程构图。
- **紧凑桌面与平板 / ≤1024px:** 容器变为 `min(100% - 48px, 940px)`；阅读路线重排为四列两行，卡片宽度扩至约 45vw，文案与图像间距收紧。
- **移动 / ≤768px:** 容器变为 `calc(100% - 28px)`；导航只保留品牌、文章和联系；阅读路线改为纵向字段；卡片宽 84vw；体验、关于、旅程和联系区全部按 DOM 顺序单列；统计改为 2×2；区段留白收至约 88–100px。

**The Visible Reading Route Rule.** 无论画面多沉浸，真实文章入口必须在首屏内或首屏末端清晰露出，不能让访客先穿过纯装饰性序幕。

**The Editorial Asymmetry Rule.** 桌面用跨行、偏重列和横向滚动创造节奏；移动端按语义顺序收成单列，不维持会压缩文字的桌面构图。

## Elevation & Depth

系统以选择性抬升而非普遍阴影建立深度。视频、遮罩、机舱窗口和前景文字形成电影式空间；固定导航使用半透明深蓝与 12px 背景模糊，阅读路线模块以强环境阴影从英雄区中浮出。普通内容网格靠色调、细线和留白分层，目的地卡以内嵌图像渐变表达深度，不额外悬浮成白色卡片。

### Shadow Vocabulary

- **Glass Navigation**（`0 12px 34px rgba(0, 13, 35, 0.22)`）：固定导航从影像背景中保持可读。
- **Reading Route Lift**（`0 18px 56px rgba(0, 10, 28, 0.28)`）：白色阅读路线模块跨越英雄和正文时的主要结构阴影。
- **Hero Text Atmosphere**（`0 18px 48px rgba(0, 20, 52, 0.32)`）：只用于首屏主标题抵抗复杂山景。
- **Magnetic CTA Glow**（`0 18px 45px rgba(188, 154, 0, 0.24)`）：浅色联系区中黄色圆形 CTA 的暖色环境光。

### Named Rules

**The Lift Only at Crossings Rule.** 阴影只出现在跨越复杂影像、重叠两个区段或需要独立操控的元素上；普通文章与信息网格保持平面。

## Shapes

形态语言由三档曲率组成：主要按钮使用 8px 的紧凑圆角，阅读路线使用 12px，玻璃导航、目的地卡、头像容器与文章面板使用 14px。它们让大面积影像和深色表面保持现代而克制，不制造柔软玩具感。导航联系动作使用 999px 胶囊；交换、轮播、社交和最终 CTA 使用完整圆形，圆形只属于明确的操作或指标，不用于普通内容容器。

**The Surface-or-Control Rule.** 12px / 14px 用于承载内容的表面，8px 用于按钮，完整圆形用于单一动作；不要随意混用曲率或给每段文字加圆角底板。

## Components

### Fixed Glass Navigation

- **Shape:** 14px 曲面、1px 大气细线；桌面最小高度 68px，距视口顶部 18px。
- **Material:** 50% 透明深海军蓝、12px 背景模糊和低位环境阴影。
- **Typography:** 品牌 1.28rem / 800；导航 0.86rem / 600。
- **State:** 普通链接悬浮时黄色下划线由左展开；联系使用黄色胶囊。移动端高度收至 58px，只保留品牌、文章与联系。

### Buttons

- **Shape:** 8px 圆角、至少 52px 高，左右 22px 内边距。
- **Primary:** 信号黄底、深海军蓝字，悬浮上移 2px并切换至较深黄色。
- **Quiet:** 7% 白色透明底、云层白文字、轻微背景模糊，以细白边界保持在影像上可读。
- **Focus:** 所有链接与按钮使用 3px 信号黄实线轮廓和 4px 外偏移。

### Reading Route Module

- **Surface:** 纯白底、深海军蓝文字、12px 圆角，以主结构阴影压在英雄区末端。
- **Layout:** 桌面为五组信息加一个动作的单行网格；字段间用冷灰细线区分；≤1024px 折成两行，≤768px 变为纵向字段。
- **Controls:** 38px 圆形交换按钮悬浮旋转 180°；“开始阅读”使用琥珀底，悬浮转信号黄。

### Destination / Article Cards

- **Corner Style:** 14px，内容裁切在表面内。
- **Background:** 航行蓝及同一深蓝家族的少量变体；有图像时使用从透明到深海军蓝的底部渐变保证文字对比。
- **Internal Padding:** 30px；卡片高约 440px，标题与说明靠底部组织。
- **State:** 图片在 700ms 中轻微放大，箭头向右上移动；卡片本身不做夸张浮起。

### Editorial Experience Grid

- **Structure:** 一项跨两行的主叙事与两项辅助叙事组成非对称网格，细线直接分割连续深色画布。
- **State:** 悬浮上移 10px、表面从 2.5% 白提高到 5% 白，黄色图标轻微放大并旋转，右上角柔光渐显。
- **Mobile:** 三项按语义顺序堆叠，主项不再跨行。

### About Portrait

- **Shape:** 14px 裁切的高幅真实头像，桌面高 650px，移动端高 420px。
- **Depth:** 底部深蓝渐变保护署名；图像随滚动在 -7% 至 7% 间产生克制视差。
- **Content:** 只使用真实 GitHub 头像，不以库存人物或虚构履历填充画面。

### Magnetic CTA

- **Shape:** 桌面 180px、移动端 140px 的完整圆形。
- **Color:** 信号黄底、深海军蓝字与暖色环境阴影，落在近云白联系区上。
- **Behavior:** 指针区域内最多按相对位移的 16% 跟随，离开后弹性归位；减少动态模式完全停止位移。

### Motion & Reduced Motion

- **Cinematic Hero:** GSAP 将英雄区固定约 110% 滚动距离，机舱窗口从 1.05 放大至 2.15，同时编辑文案和中心文案淡出；静止时窗口以 3s `sine.inOut` 上下浮动 15px。
- **Smooth Travel:** Lenis 使用 1.2s 指数缓动；卡片、按钮和网格状态通常使用 180–260ms，图像放大使用 700ms 的强出缓动。
- **Portrait & Magnet:** 头像以滚动视差增强纵深，最终 CTA 使用 `power3.out` 跟随与弹性归位。
- **Fallback:** `prefers-reduced-motion: reduce` 不初始化 Lenis、固定缩放、浮动、头像视差或磁吸；CSS 动画与过渡缩至 0.01ms，并把机舱窗口和头像直接置于最终可读状态。

## Do's and Don'ts

### Do:

- **Do** 用深海军蓝、航行蓝、冷白和稀疏信号色维持统一的夜航世界。
- **Do** 让作者身份、真实文章入口和可验证联系方式始终优先于航空装饰。
- **Do** 在桌面使用宽容器、横向卡片和非对称构图，在 1024px / 768px 断点按语义顺序重排。
- **Do** 把 Playfair Display 限制在少量编辑强调，把中文正文与操作保持为清晰的 Inter / Noto Sans SC。
- **Do** 为视频、滚动穿越、视差和磁吸提供完整的减少动态终态，并保留明显键盘焦点。
- **Do** 让影像与动画引导访客前往内容，而不是挡住内容。

### Don't:

- **Don't** 恢复 AstroPaper 的居中等宽阅读栏、双主题橙蓝系统或纯文本列表视觉。
- **Don't** 把航空语言变成虚构订票、机组、航班、项目成果、评价或影响力数据。
- **Don't** 用大面积黄色、任意渐变字、过多玻璃面或随处投影削弱深蓝世界的克制感。
- **Don't** 把所有内容做成相同尺寸、相同圆角、相同阴影的卡片墙。
- **Don't** 在移动端强保留桌面双栏和跨行构图，或隐藏首屏真实阅读入口。
- **Don't** 让动效成为理解导航、阅读路径或内容状态的唯一方式。
