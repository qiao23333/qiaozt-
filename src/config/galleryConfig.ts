import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	// 说明：相册暂空——原作者的相册内容已清空。以后有想展示的照片，往下面数组加一项即可：
	// { id, name, description, location?, date, tags?, cover? }，并在 public/gallery/<id>/ 放好图片。
	albums: [],

	// 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数，默认 240
	// 值越小列数越多，值越大列数越少
	columnWidth: 240,
};
