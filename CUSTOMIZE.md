# 站点自定义指南

这份指南回答三个问题：**东西放在哪、怎么改、上传什么规格**。所有路径都相对仓库根目录 `D:\codex\个人\个人站`。

---

## 一、内容修改地图（什么改哪里）

### 站点基础信息

| 想改什么 | 改哪里 |
|---------|--------|
| 站点标题 / 副标题 / 描述 / 关键词 | `src/config/siteConfig.ts` 顶部 |
| 站点图标（favicon 全套） | `public/favicon/` 下同名替换图片即可 |
| 页面开关（友链/打赏/留言板/相册/番组） | `src/config/siteConfig.ts` 的 `pages` 段，`false` = 页面返回 404 并从导航隐藏 |
| 主题色 / 默认亮暗模式 | `src/config/siteConfig.ts` 的 `themeColor`（hue 0-360） |
| 导航栏菜单项与顺序 | `src/config/navBarConfig.ts` |

### 个人信息

| 想改什么 | 改哪里 |
|---------|--------|
| 头像 / 名字 / 签名 / 社交链接 | `src/config/profileConfig.ts` |
| 头像图片文件 | `src/assets/images/joe-avatar.png`（正方形，600×600 起） |
| 关于页正文 | `src/content/spec/about.md`（纯 Markdown） |

### 各功能页

| 想改什么 | 改哪里 |
|---------|--------|
| 公告栏（首页顶部） | `src/config/announcementConfig.ts` |
| 页脚自定义 HTML | `src/config/FooterConfig.html`（备案号等） |
| 友链数据 | `src/config/friendsConfig.ts`，往数组里加一项即可 |
| 友链页正文（申请说明/模板） | `src/content/spec/friends.mdx` |
| 相册 | `src/config/galleryConfig.ts` 加相册 + `public/gallery/<相册id>/` 放照片 |
| 音乐播放器 | `src/config/musicConfig.ts` 的 `local.playlist` |
| 打赏 | `src/config/sponsorConfig.ts` |
| 作品页 | **自动**：从 GitHub `qiao23333` 拉取公开仓库生成卡片，无需改代码 |
| 工具页 | `src/pages/tools.astro` 顶部的 `myTools` / `thirdPartyTools` 数组 |
| 更新日志 | `src/pages/changelog.astro` 顶部的数组 |
| 欢迎弹窗文字 | `src/components/features/WelcomeToast.astro` |
| 名言/一言 | `src/components/widget/QuoteOfTheDay.astro` |

---

## 二、写文章：完整流程

### 方式 A：命令行建稿（推荐）

```powershell
cd D:\codex\个人\个人站
pnpm new-post -- 我的第一篇文章
```

会在 `src/content/posts/` 下生成带模板的 `.md` 文件，打开直接写。

### 方式 B：图形界面

```powershell
pnpm post-studio
```

浏览器打开 `http://localhost:4323`，可视化写作器（建稿/编辑/预览/草稿管理）。

### Frontmatter 模板（文章开头那段配置）

```markdown
---
title: 文章标题（必填）
published: 2026-09-05（必填，发布日期）
description: 一两句话的摘要，会显示在文章卡片上
aiSummary: AI 摘要——填了之后文章页顶部会出现打字机效果的「AI 摘要」横幅
image: 封面图路径（见下方图片规格）
tags: [标签1, 标签2]
category: 分类名
draft: false（true = 草稿，不对外显示）
pinned: false（true = 置顶）
---

正文从这里开始，用标准 Markdown 语法……
```

**AI 摘要怎么来**：主题不做在线 AI 调用，`aiSummary` 就是你自己填的一段话（可以让任意 AI 帮你生成后粘贴进来），填了就展示。

### 排版：不用模板，直接写 Markdown

正文就是标准 Markdown，主题已内置好排版样式（标题层级、引用块、代码块、表格、图片都自动美化）。此外还支持：

- **数学公式**：`$行内$` / `$$独立块$$`（KaTeX）
- **Mermaid 流程图**：` ```mermaid ` 代码块
- **PlantUML**：` ```plantuml ` 代码块
- **折叠/警告框**：GitHub 风格的 `> [!NOTE]` `> [!TIP]` `> [!WARNING]`
- **MDX 组件**：文件后缀用 `.mdx` 可嵌入交互组件

参考示例：仓库自带 `markdown-tutorial.md`（排版大全）、`katex-math-example.md`（公式）、`markdown-mermaid.md`（图表）这几篇演示文章，写之前翻一遍就有数了。

### 文章里的图片放哪

1. **方式一（推荐）**：放 `src/assets/` 下（可建子目录），文章里用相对路径引用，构建时自动压缩成 WebP。
2. **方式二**：放 `public/` 下，用 `/路径/图片名` 引用，原样输出不压缩。

---

## 三、图片规格规范

| 用途 | 位置 | 规格 |
|------|------|------|
| 站点头像 | `src/assets/images/joe-avatar.png` | 正方形 1:1，≥600×600，PNG |
| favicon | `public/favicon/` | 已从头像生成全套（512~16 + dark/light + .ico），换头像后需重新生成 |
| 文章封面 | 文章 frontmatter 的 `image` 字段 | 建议 16:9 或 3:2，≥1200px 宽 |
| 桌面壁纸 | `src/assets/images/DesktopWallpaper/` | WebP，1920×1080 起 |
| 手机壁纸 | `src/assets/images/MobileWallpaper/` | WebP，竖屏比例 |
| 相册照片 | `public/gallery/<相册id>/` | 任意常见格式，建议长边 ≥1200px |

---

## 四、主题切换与保存机制

网站的主题由三层组成，**访客端切换、自动保存在访客浏览器（localStorage）**，下次访问自动恢复：

| 主题层 | 访客怎么切 | 保存在哪 | 站长默认值在哪设 |
|--------|-----------|---------|----------------|
| 亮 / 暗 / 跟随系统 | 导航栏设置面板 | `localStorage.theme` | `siteConfig.themeColor.defaultMode` |
| 主题色相（0-360 彩虹盘） | 设置面板的色相滑块 | `localStorage.hue` | `siteConfig.themeColor.hue` |
| 壁纸（12 套桌面+手机） | 设置面板壁纸选择 | `localStorage.wallpaperMode` + 壁纸索引 | `src/config/backgroundWallpaper.ts` |

也就是说：你不需要做任何事来「保存主题」——每个访客自己选的亮暗、颜色、壁纸都会被他的浏览器记住。你要改的只是**默认值**（新访客第一次看到的样子），全部在上面那两个配置文件里。

---

## 五、常见操作速查

**加一个友链**：`src/config/friendsConfig.ts` 的数组里加：
```ts
{ name: "对方站名", siteurl: "https://example.com", avatar: "https://example.com/avatar.png",
  desc: "一句话介绍", tags: ["博客"], enabled: true }
```
加了之后「现在」页还会自动聚合对方的 RSS 更新。

**加一个作品**：不用做任何事——在你的 GitHub 上新建公开仓库，作品页自动出现。想自定义某仓库的名称/简介，改 `src/pages/works.astro` 顶部的 `repoOverrides`。

**加一个相册**：`src/config/galleryConfig.ts` 的 `albums` 加一项，照片放 `public/gallery/<id>/`。

**换公告**：改 `src/config/announcementConfig.ts`，两分钟生效。

**上线部署**：见 `DEPLOY.md`（Vercel / Cloudflare Pages 二选一）。
