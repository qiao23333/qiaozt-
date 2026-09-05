import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

// ============================================================================
// 导航栏配置 - 根据顺序动态生成导航栏链接
// NavBar Configuration - Dynamically generate navigation bar links based on order
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: NavBarLink[] = [
		// 主页
		LinkPresets.Home,
	];

	// 文章及其子菜单
	links.push({
		name: "文章",
		url: "#",
		icon: "material-symbols:article",
		children: [
			// 归档
			LinkPresets.Archive,

			// 分类
			LinkPresets.Categories,

			// 标签
			LinkPresets.Tags,
		],
	});

	// 作品（项目与作品集）
	links.push(LinkPresets.Works);

	// 现在（最近在做的事 / 状态）
	links.push(LinkPresets.Moments);

	// 关于及其子菜单
	links.push({
		name: "关于",
		url: "#",
		icon: "material-symbols:info",
		children: [
			// 关于我
			LinkPresets.About,

			// 更新日志
			LinkPresets.Changelog,

			// 友链
			LinkPresets.Friends,

			// 留言
			LinkPresets.Guestbook,
		],
	});

	// 更多及其子菜单
	links.push({
		name: "更多",
		url: "#",
		icon: "material-symbols:more-horiz",
		children: [
			// 求职入口
			LinkPresets.Hire,

			// 相册
			LinkPresets.Gallery,

			// 打赏
			LinkPresets.Sponsor,
		],
	});

	// 文档链接（可选）
	// links.push({
	// 	name: "文档",
	// 	url: "/posts/",
	// 	external: false,
	// 	icon: "material-symbols:docs",
	// });

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

// ============================================================================
// 链接预设 - 可自由自定义导航栏链接的名称、图标和URL
// Link Presets - Allows free customization of the name, icon, and URL of navigation bar links
// ============================================================================
export const LinkPresets: Record<string, NavBarLink> = {
	Home: {
		name: "主页",
		url: "/",
		icon: "material-symbols:home",
	},
	Works: {
		name: "作品",
		url: "/works/",
		icon: "material-symbols:folder",
	},
	Archive: {
		name: "归档",
		url: "/archive/",
		icon: "material-symbols:archive",
	},
	Categories: {
		name: "分类",
		url: "/categories/",
		icon: "material-symbols:folder-open-rounded",
	},
	Tags: {
		name: "标签",
		url: "/tags/",
		icon: "material-symbols:tag-rounded",
	},
	Tools: {
		name: "工具",
		url: "/tools/",
		icon: "material-symbols:construction-rounded",
	},
	Changelog: {
		name: "更新日志",
		url: "/changelog/",
		icon: "material-symbols:history-edu-rounded",
	},
	Friends: {
		name: "友链",
		url: "/friends/",
		icon: "material-symbols:group",
		pageKey: "friends",
	},
	Moments: {
		name: "现在",
		url: "/moments/",
		icon: "material-symbols:rss-feed-rounded",
	},
	Sponsor: {
		name: "打赏",
		url: "/sponsor/",
		icon: "material-symbols:favorite",
		pageKey: "sponsor",
	},
	Guestbook: {
		name: "留言",
		url: "/guestbook/",
		icon: "material-symbols:chat",
		pageKey: "guestbook",
	},
	About: {
		name: "关于我",
		url: "/about/",
		icon: "material-symbols:person",
	},
	Bangumi: {
		name: "番组计划",
		url: "/bangumi/",
		icon: "material-symbols:movie",
		pageKey: "bangumi",
	},
	Gallery: {
		name: "相册",
		url: "/gallery/",
		icon: "material-symbols:photo-library",
		pageKey: "gallery",
	},
	Anime: {
		name: "追番",
		url: "/anime/",
		icon: "material-symbols:live-tv",
		pageKey: "anime",
	},
	Hire: {
		name: "求职",
		url: "/hire/",
		icon: "material-symbols:work",
		external: false,
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
