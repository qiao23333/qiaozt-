// 作品 / 项目配置
// ---------------------------------------------------------------------------
// 这是「作品」页面的唯一数据来源。以后新增作品，只需在此数组里增加一条记录，
// 页面会自动生成对应的项目卡片，无需改动任何样式或页面代码。
//
// 字段说明：
//   name        项目名称（显示在卡片标题）
//   description 一句话简介（显示在卡片正文）
//   icon        图标名，语法：图标集:图标名（如 "material-symbols:photo"）
//   githubUrl   项目仓库地址（卡片点击后打开）
//   accent      卡片主题色，任意 CSS 颜色值
//   tags        标签数组，展示项目类型 / 技术栈
// ---------------------------------------------------------------------------

export type Project = {
	name: string;
	description: string;
	icon: string;
	githubUrl: string;
	accent: string;
	tags: string[];
};

export const projects: Project[] = [
	{
		name: "SnapSort",
		description: "图片分类整理工具，按规则批量整理图片到对应文件夹，提升素材管理效率。",
		icon: "material-symbols:photo-library",
		githubUrl: "https://github.com/qiao23333/SnapSort",
		accent: "#8b5cf6",
		tags: ["工具", "图片整理", "Python"],
	},
	{
		name: "乌鹊南飞 · 个人站",
		description: "本网站。基于 Astro / Firefly 主题二改的个人世界，作品、文章与创作都会沉淀在这里。",
		icon: "material-symbols:web",
		githubUrl: "https://github.com/qiao23333/qiaozt-",
		accent: "#06b6d4",
		tags: ["网站", "Astro", "内容"],
	},
];