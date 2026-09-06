# AGENTS.md — 本仓库的 Agent 协作规则

> 所有 AI Agent（TRAE / Codex / WorkBuddy 或其他）在本仓库干活前必读本文件。
> 本文件是跨对话、跨 Agent 的唯一事实来源。重要约定写在这里，不要依赖对话记忆。

## 仓库身份

- 这是「乌鹊南飞」的个人网站，基于 Firefly 主题（Astro 框架）二改。
- 当前主题：**主题 1（Firefly 二改）**，基线快照标签 `theme-1-firefly-baseline`。
- 远程：`origin` = https://github.com/qiao23333/qiaozt- （唯一推送目标）；`upstream` = 原作者主题仓库，**禁止推送**。
- 内容生产以 `src/content/` 与 `src/config/` 为中心；外观层是 `src/layouts` + `src/components` + `src/pages` + `src/styles`。

## 硬约束（违反即事故）

1. **推送只去 origin**，且需要走本地代理：`git` 直连 github.com 会失败，推送前设置
   `HTTP_PROXY=http://127.0.0.1:17891`、`HTTPS_PROXY=http://127.0.0.1:17891`（仅当次会话）。
2. **不做破坏性 git 操作**（force push / reset --hard / 删分支），除非用户明确要求。
3. **个人资源不可删**：头像 `src/assets/images/joe-avatar.png`、`public/favicon/` 全套图标是本人 GitHub 头像生成的。
4. **隐私红线**（来自作品集规划）：客户/员工隐私不上站；团队共同成果不得写成个人独立完成；无法核验的增长数字不用。
5. **本地构建受内存限制**：机器提交内存常不足，`astro build` 可能失败（wasm/sharp 崩溃）。失败不代表代码错——先用 `astro check` 验证类型，再直接提交推送交给云端构建。不要反复重试构建。

## 工作流程（每个对话、每个 Agent 都执行）

1. **开工先对表**：`git status` + `git pull`（或 fetch+rebase），基于最新状态操作。
2. **改动最小化**：只改任务相关文件；不顺手重构、不加无关功能。
3. **完工即闭环**：提交（说明改了什么、为什么）→ 走代理推送 origin main。不留未推送的本地改动。
4. **新约定进本文件**：产生了新规则/新机制/新路径约定，追加到本文件对应章节，让下个对话/下个 Agent 能看到。

## 常用命令

```powershell
pnpm post-studio        # 可视化写作器 localhost:4323（轻量，随时可跑）
pnpm new-post -- 标题    # 命令行建文章
npx astro check          # 类型检查（内存紧张时的验证手段，勿用完整 build 验证）
pnpm build               # 完整构建（吃内存，失败勿重试，见硬约束 5）
pnpm preview             # 本地预览 dist（需先构建成功）
```

## 内容地图（速查）

- 站点设置/文字/开关：`src/config/*.ts`（site=站名与页面开关, profile=头像签名, navBar=菜单, announcement=公告, friends/gallery/music/sponsor=各功能数据）
- 文章：`src/content/posts/*.md`；关于页文案：`src/content/spec/about.md`
- 页面：`src/pages/*.astro`（works.astro 自动拉取 GitHub `qiao23333` 的公开仓库，无需手动维护）
- 组件：`src/components/`（features=功能组件, layout=布局组件）
- 图片素材：`src/assets/`（构建压缩）；原样静态文件：`public/`

## 多主题机制

- 用户说 **「开始创建新的主题」** 时执行：①提交推送当前全部改动 → ②打标签存档 → ③建分支 `theme/1-firefly` 推送冻结 → ④在 main 上开发新主题（内容与配置共享，外观层重写）。
- 切回主题 1 = 部署 `theme/1-firefly` 分支。详见 `THEMES.md`。

## 协作分工（用户的多 Agent 环境）

- **TRAE**：本仓库（个人站）的主要开发与维护方。
- **Codex**：SnapSort 项目（`D:\codex\个人\SnapSort`，独立仓库，规则见其自身文档）。
- **WorkBuddy**：日程/记录/个人事务。
- 跨区作业前在回复中明确声明，避免误碰他人区域。
- 同一仓库**禁止两个对话并行修改**——任务串行，一个对话闭环再开下一个。
