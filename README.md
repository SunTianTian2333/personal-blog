# personal-blog

Astro + Markdown 静态博客（Phase 0 框架）。适合部署到 **GitHub Pages**，给 HR 一个 HTTPS 链接即可访问。

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

## 部署到 GitHub（给 HR 访问）

### 方式 A：单独仓库（推荐）

1. 在 GitHub 新建仓库，例如 `personal-blog`，只推送本目录内容（或整仓子目录用 Actions，见方式 B）。
2. 仓库 **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**。
3. 使用本目录内 `.github/workflows/deploy-pages.yml`（路径为仓库根时的 standalone 版见该文件注释）。
4. 推送 `main` 后访问：`https://<你的用户名>.github.io/personal-blog/`

### 方式 B：放在 agent-career  monorepo

仓库根目录已有（或添加）`.github/workflows/deploy-personal-blog-pages.yml`，仅当 `projects/personal-blog/**` 变更时构建并发布 Pages。

### 环境变量

| 变量 | 含义 |
|------|------|
| `ASTRO_SITE` | 站点 origin，如 `https://octocat.github.io` |
| `ASTRO_BASE` | 子路径，项目站为 `/<仓库名>/`；根站或 Vercel 用 `/` |

## 下一步（可选）

- `public/resume.pdf` + 关于页链接
- RSS / sitemap（`@astrojs/sitemap`）
- Giscus 评论
