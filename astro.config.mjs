// @ts-check
import { defineConfig } from "astro/config";

// GitHub Pages「项目站」: https://<user>.github.io/<repo>/
// 若仓库名不是 personal-blog，请改 base 为 '/<仓库名>/'
// Vercel / 用户主站 (username.github.io 根仓库) 请设 base: '/'
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "personal-blog";
const base = process.env.ASTRO_BASE ?? `/${repoName}/`;

/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: process.env.ASTRO_SITE ?? "https://example.github.io",
  base,
  trailingSlash: "always",
});
