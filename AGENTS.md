# Repository Guidelines

## Project Structure & Module Organization

Firefly is an Astro 7 site with Svelte islands and TypeScript configuration. Main source code lives in `src/`: routes in `src/pages`, layouts in `src/layouts`, reusable UI in `src/components`, styles in `src/styles`, content in `src/content`, helpers in `src/utils`, and Markdown/HTML plugins in `src/plugins`. Site configuration is split across `src/config` with matching type definitions in `src/types`; prefer imports from `@/config` when available. Static files served directly belong in `public`, source-managed images in `src/assets`, docs in `docs` and `Firefly-Docs`, and automation in `scripts`.

## Build, Test, and Development Commands

Use `pnpm`; the `preinstall` script enforces it.

- `pnpm dev` or `pnpm start`: run the local Astro dev server.
- `pnpm check`: run Astro diagnostics.
- `pnpm type-check`: run TypeScript with `--noEmit`.
- `pnpm format`: format `src` with Biome.
- `pnpm lint`: run Biome checks and safe fixes on `src`.
- `pnpm build`: generate icons, LQIPs, the Astro build, font subsets, and Pagefind search output in `dist`.
- `pnpm preview`: preview the production build locally.
- `pnpm new-post`: scaffold a new content post.
- `pnpm post-studio`: visual writing studio at `localhost:4323`.

## Coding Style & Naming Conventions

Biome is the formatter and linter. It uses tabs for indentation and double quotes for JavaScript/TypeScript strings. Keep Astro and Svelte components in `PascalCase` (`PostCard.astro`, `ArchivePanel.svelte`), config modules in `camelCase` ending with `Config.ts`, and utilities in descriptive kebab case such as `date-utils.ts`. Keep `src/types` aligned with `src/config`. Avoid unrelated formatting churn.

## Testing Guidelines

There is no dedicated unit-test framework configured. Before submitting changes, run `pnpm check`, `pnpm type-check`, and `pnpm build` for rendering, content, or generated asset work. For visual or interactive changes, verify with `pnpm dev` or `pnpm preview` and include screenshots in the PR. Name future tests near the feature they cover, using the local file name as the stem.

## Commit & Pull Request Guidelines

Use Conventional Commits, matching the current history: `feat: ...`, `fix: ...`, and `chore: ...`. Keep commits and PRs focused on one concern. PRs should include a concise summary, linked issues when relevant, validation commands run, and screenshots for UI changes. Discuss major features or design changes in an issue or discussion before implementation.

## Security & Configuration Tips

Do not commit secrets, tokens, or service keys in config files. Keep deployment-specific settings in the target platform environment, and review generated files such as `dist`, `src/constants/lqips.json`, and `src/constants/icons.ts` before committing them.

## 乌鹊南飞 · Joe 个人站本地协作约定（追加）

本仓库是从公开主题 Aemeath/Firefly fork 的个人站点。任何新接入的 AI / 开发者，动手前**先读**：本文件、`MATERIALS.md`、`DEPLOY.md`、`README.md`。

### 站点定位
这是长期公开的个人世界（作品 / 项目 / 文章 / 创作 / 轨迹），**不是求职简历**。求职只是 `/hire` 一个入口。SnapSort 是旗舰项目，但不应让网站变成"SnapSort 官网"。

### 改动边界（务必遵守）
- 只改：站点身份/文案（`src/config`）、内容（`src/content`）、素材（`src/assets`、`public`）、导航（`src/config/navBarConfig.ts`）、页面（`src/pages`）。
- **不重写**开源框架已有能力（分类/标签/搜索/主题/壁纸/响应式/相册/友链等）。
- 内容、路由、页面语义保持不变时可做主题视觉变化；**不复制整页 CSS 硬覆盖**。
- 不擅自生成图片；不用原作者素材（见 `MATERIALS.md` 待替换清单）。

### Git 与协作流程
- 提交身份（本仓库）：name `乌鹊南飞`，email `1162393961@qq.com`。仅在命令级用 `git -c user.name=... -c user.email=...`，不改全局配置。
- 每个改动一个 commit，用 Conventional Commits（`feat:` / `fix:` / `chore:`）。
- 改前 `git pull`，改完 `git push`（需要 Personal Access Token，GitHub 不支持密码）。多个 AI 共用同一工作区时**轮流改**（一个完成再给下一个），或按文件/分支分开改，避免同文件冲突。
- 作者原样状态保存在 git tag `original-upstream`，随时可回退。

### 网络与推送（本机环境）
- `git` 直连 github.com 会失败，推送前设 `HTTP_PROXY=http://127.0.0.1:17891`、`HTTPS_PROXY=http://127.0.0.1:17891`（仅当次会话，代理不可用时可稍后重试或提醒用户开启代理软件）。
- 推送只去 `origin`（github.com/qiao23333/qiaozt-）；`upstream` 是原作者仓库，**禁止推送**。

### 本地验证
- 完整 `pnpm build` 可能因机器内存不足(OOM)失败。可先用 `npx astro check` 做轻量类型验证；视觉/交互用 `pnpm dev`。
- 构建失败不代表代码有错，勿反复重试；推送 GitHub 后云端会自动构建。
- 改完运行 `pnpm check`、`pnpm type-check`。构建产物在 `dist/`。

### 勿犯（多 AI 尤其注意）
- 不把 Personal 私人日记 / 原始资料公开。
- 不用作者的角色图 / 个人照 / 音乐 / 文章封面当作站点正式内容。
- 在作者未提供素材前不生成图片。
- 不建立数据库 / 评论后台 / 复杂云服务（保持静态站）。
- 不在没有内容时堆砌大量空栏目。
- 隐私红线：客户/员工隐私不上站；团队共同成果不写成个人独立完成；无法核验的增长数字不用。

### 多 Agent 分工与对话纪律（2026-09 追加）
用户同时使用多个 Agent：**TRAE** 负责本仓库（个人站）；**Codex** 负责 SnapSort（`D:\codex\个人\SnapSort`，独立仓库）；**WorkBuddy** 负责日程/记录/个人事务。跨区作业前须在回复中明确声明。
- **状态进文件，不进记忆**：新产生的约定必须追加到本文件，让下一个对话/Agent 可见；不依赖"上次聊过"。
- **一个任务一个对话**：任务闭环（提交+推送）后换新对话；同一仓库禁止两个对话并行修改，串行最安全。
- 完工即闭环：不留只在对话记忆里的改动。

### 多主题机制（2026-09 追加）
- 当前主题：**主题 1（Firefly 二改）**，基线标签 `theme-1-firefly-baseline`。
- 用户说 **「开始创建新的主题」** 时执行：①提交推送当前改动 → ②打标签存档 → ③建分支 `theme/1-firefly` 推送冻结 → ④在 main 上开发新主题（内容与配置共享，外观层重写）。详见 `THEMES.md`。

### 内容速查
- 设置/文字/开关：`src/config/*.ts`；文章：`src/content/posts/`；关于页：`src/content/spec/about.md`。
- 作品页 `works.astro` 自动拉取 GitHub `qiao23333` 公开仓库，勿手动加卡。
- 一键启动：仓库根目录 `start-site.cmd`（写作器 + 预览）。
