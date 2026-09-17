# 章思哲的个人博客

一个使用原生 HTML、CSS 和 JavaScript 构建的个人博客，以“编号出版目录”为视觉概念。

## 本地运行

```bash
python -m http.server 4173 --directory site
```

然后访问 `http://127.0.0.1:4173/`。也可以直接打开 `site/index.html` 浏览静态内容。

## 发布

推送到 `main` 分支后，GitHub Actions 会直接发布 `site/` 到 GitHub Pages，无需构建步骤。

主要文件：

- `site/index.html`：页面结构与内容
- `site/style.css`：视觉系统与响应式布局
- `site/script.js`：文章卡组、详情展开与导航状态
- `DESIGN.md`：设计系统与后续迭代约束
