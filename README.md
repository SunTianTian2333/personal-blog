# personal-blog

Astro + Markdown 静态博客（Phase 0 框架）。适合部署到 **GitHub Pages**，给 HR 一个 HTTPS 链接即可访问。

## 线上地址

- 仓库：<https://github.com/SunTianTian2333/personal-blog>
- 站点（HR 可访问）：<https://suntiantian2333.github.io/personal-blog/>

首次发布约需 1–3 分钟构建；若 404，稍等后刷新。

## 本地预览

```powershell
cd projects/personal-blog
npm install
npm run dev
```

浏览器打开终端里提示的地址。默认 `base` 为 `/personal-blog/`（模拟 GitHub 项目站），本地入口一般为：

`http://localhost:4321/personal-blog/`

仅本地快速看、不关心路径时：

```powershell
$env:ASTRO_BASE="/"; npm run dev
```

## 写文章

在 `src/content/blog/` 新建 `*.md`，frontmatter 示例：

```yaml
---
title: "标题"
description: "列表摘要"
pubDate: 2026-10-02
draft: false
tags: ["agent"]
---
```

正文用 Markdown。`draft: true` 的文章不会出现在列表与构建路由中。

## 构建

```powershell
npm run build
npm run preview
```

## 更新线上内容（当前：gh-pages 分支）

改完文章或页面后：

```powershell
cd projects/personal-blog
$env:ASTRO_SITE="https://SunTianTian2333.github.io"
$env:ASTRO_BASE="/personal-blog/"
npm run build
npx --yes gh-pages -d dist -b gh-pages
```

（`gh-pages` 会把 `dist/` 推到远程 `gh-pages` 分支，无需 Actions。）

### 可选：GitHub Actions 自动部署

本地已有 `.github/workflows/deploy-pages.yml`。推送 workflow 需要 GitHub CLI 带 `workflow` 权限：

```powershell
gh auth refresh -h github.com -s workflow,repo
git add .github
git commit -m "Add GitHub Actions Pages deploy"
git push
```

然后在仓库 **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。

### 环境变量

| 变量 | 含义 |
|------|------|
| `ASTRO_SITE` | 站点 origin，如 `https://octocat.github.io` |
| `ASTRO_BASE` | 子路径，项目站为 `/<仓库名>/`；根站或 Vercel 用 `/` |

## 下一步（可选）

- `public/resume.pdf` + 关于页链接
- RSS / sitemap（`@astrojs/sitemap`）
- Giscus 评论
