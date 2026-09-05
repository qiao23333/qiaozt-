# 部署说明（乌鹊南飞 · 个人站）

这份文档给后续维护者或 AI 使用。本项目基于 Astro 静态构建，产物在 `dist/`，部署到任何主流静态托管平台即可（Vercel、Cloudflare Pages、Netlify、EdgeOne Pages 等）。**不依赖任何原作者的个人服务器或域名。**

## 基本信息

- 框架：Astro
- 构建产物：`dist/`（构建后生成）
- 推荐托管：Vercel / Cloudflare Pages / Netlify
- 部署内容：`dist/` 目录里的全部文件
- 仓库：`https://github.com/qiao23333/qiaozt-`

## 本地开发

在项目根目录执行：

```powershell
pnpm install      # 安装依赖
pnpm dev          # 开发服务器，默认 http://localhost:4321
pnpm build        # 构建到 ./dist
pnpm preview      # 本地预览生产构建产物
```

要求：Node.js ≥ 22，pnpm ≥ 9。

> 若开发/构建时遇到 Node 进程内存不足（OOM）被系统关闭（日志里出现 `FATAL ERROR: process out of memory`），可在运行前加大内存上限：
> ```powershell
> $env:NODE_OPTIONS="--max-old-space-size=4096"
> pnpm build
> ```

## 部署：Vercel / Cloudflare Pages

这是一个纯静态 Astro 站点，仓库根目录配置了平台所需的文件（`vercel.json` / `wrangler.jsonc`），可直接连接仓库自动部署。

通用配置参数：

- Framework Preset：`Astro`
- Root Directory：`./`
- Build Command：`pnpm run build`
- Output Directory：`dist`
- Install Command：`pnpm install`

部署后将 your 正式域名填入 `src/config/siteConfig.ts` 的 `site_url`，便于生成正确的 sitemap 与 RSS 链接。

## 部署原则

- 静态资源带 hash，平台会基于新构建产物整体替换，无需手动清旧文件。
- 部署前确认 `dist/` 已重新构建，避免推出旧产物。
- 不要把任何个人密钥、Token 提交进仓库；平台侧通过环境变量注入。

## 线上验证

部署后至少检查首页能正常返回，并确认页面里没有原作者（rainzt.cn / 朝朝听雨）的站点标识或预览链接。

## 注意事项

- 如站点使用自定义域名，请按托管平台指引配置 DNS 与证书。
- `dist/` 是构建产物，通常不需要提交到 Git。
- 若线上页面显示旧交互或旧样式，多半是 CDN/缓存或旧构建产物，先重新构建再发布。