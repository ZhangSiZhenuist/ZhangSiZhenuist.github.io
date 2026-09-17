# 章思哲的个人博客

部署地址：<https://zhangsizhenuist.github.io/>

这是一个基于 [AstroPaper v5.5.1](https://github.com/satnaing/astro-paper/tree/v5.5.1) 的静态个人博客。项目直接复用了 AstroPaper 的开源源码与交互体系，并完成了中文内容、个人信息、GitHub Pages 部署和 Windows 构建适配。

## 本地运行

需要 Node.js 22+ 与 pnpm 10。

```bash
pnpm install --frozen-lockfile
pnpm dev
```

访问 <http://localhost:4321/>。

## 写文章

文章位于 `src/data/blog/`。新建 Markdown 文件并填写标题、发布日期、标签和摘要即可；现有文章 `from-here.md` 可作为最小示例。

```yaml
---
author: 章思哲
pubDatetime: 2026-09-03T00:00:00+08:00
title: 文章标题
featured: false
draft: false
tags:
  - 标签
description: 一句话摘要
---
```

## 构建与部署

```bash
pnpm build
pnpm preview
```

推送到 `main` 分支后，`.github/workflows/deploy.yml` 会构建 `dist/` 并部署到 GitHub Pages。

## 来源与许可

界面与主要代码来自 AstroPaper v5.5.1，采用 MIT License。完整许可见 [LICENSE](LICENSE)，第三方说明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
