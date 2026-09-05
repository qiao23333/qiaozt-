import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "👋 欢迎来到乌鹊南飞",

	// 公告内容
	content:
		"这里是乌鹊南飞的个人世界——作品、文章与创作都会慢慢沉淀。正在持续折腾新东西，欢迎常来看看。",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
