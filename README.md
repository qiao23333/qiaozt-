# 乌鹊南飞 · 个人站

月明星稀，乌鹊南飞。

这是我的长期公开个人世界——作品 / 项目 / 文章 / 创作 / 轨迹的沉淀处，**不是求职简历**，求职只是 `/hire` 一个入口。

## 站点定位

这是一个用 [Astro](https://astro.build) + [Firefly 主题](https://github.com/CuteLeaf/Firefly) 二改、fork 自 [Jarvis0227/Aemeath](https://github.com/Jarvis0227/Aemeath) 的个人站点。内容与展示分离：

- **内容层**：站点身份 / 文案在 `src/config`，文章在 `src/content`
- **作品层**：项目卡片的数据在 `src/config/projectsConfig.ts`，新增作品只需在此加一条记录
- **布局层**：沿用开源主题能力（分类 / 标签 / 搜索 / 主题 / 壁纸 / 响应式 / 相册 / 友链），不做无谓重写

## 本地开发

```
pnpm install      # 安装依赖
pnpm dev          # 启动开发服务器，localhost:4321
pnpm build        # 构建到 ./dist
pnpm check        # 检查代码
pnpm preview      # 本地预览生产构建
```

要求：Node.js ≥ 22，pnpm ≥ 9。

## 目录速览

```
src/
├── config/       # 站点配置（身份、导航、作品、资料等）
│   └── projectsConfig.ts   # 作品页数据源，新增作品改这里
├── content/      # 文章内容（Markdown）
├── pages/        # 页面路由
├── components/   # 可复用组件
├── layouts/      # 布局
├── assets/       # 源素材（头像、Logo 等）
└── styles/       # 样式
public/           # 静态文件（favicon、图片等）
```

## 协作约定

新的 AI / 开发者接手动工前请先读：`AGENTS.md`、`MATERIALS.md`、`README.md`。核心约定：

- 只改站点身份 / 文案 / 内容 / 素材 / 导航 / 页面；**不重写**开源框架已有能力
- 不擅自生成图片，不用原作者素材（待替换清单见 `MATERIALS.md`）
- 提交身份：`乌鹊南飞` / `1162393961@qq.com`，仅在命令级指定，不改全局配置

## 许可

代码基于 [MIT license](./LICENSE)，保留了底层主题（Firefly / fuwari）的版权声明与致谢。

- Copyright (c) 2024 saicaca - fuwari
- Copyright (c) 2025 CuteLeaf - Firefly