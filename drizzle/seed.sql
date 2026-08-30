DELETE FROM sites;
DELETE FROM categories;
DELETE FROM sqlite_sequence WHERE name IN ('categories', 'sites');

INSERT INTO categories (id, title, title_en, emoji, sort_order) VALUES
(1, '综合影视', 'Comprehensive', '🎭', 0),
(2, '动漫动画', 'Anime', '🎨', 1),
(3, '聚合搜索', 'Search', '🔍', 2),
(4, '网盘资源', 'Cloud Drive', '📂', 3),
(5, '电视剧', 'TV Series', '📺', 4),
(6, '电影专区', 'Movies', '🎞️', 5),
(7, '字幕资源', 'Subtitles', '🈯', 6),
(8, '纪录片', 'Documentary', '🎥', 7),
(9, '综艺娱乐', 'Variety', '🎪', 8),
(10, '短剧短视频', 'Short Video', '📱', 9);

INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order) VALUES
(1, '饭搭子影视', '最新热门电影电视剧动漫综艺体育免费观看', 'https://fdzys666.xyz/', 'https://fdzys.net/template/mizhiady/statics/images/logo_blue.png', '["最新","推荐","4K","资源丰富","高清"]', 5, 1, 1, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 0),
(1, '低端影视', '极简主义的高清影视站。利用 AI 智能筛选并重写片源简介，无广告干扰，专注提供高码率观影体验。', 'https://ddys.io/', 'https://ddys.io/favicon.ico', '["免费","资源丰富"]', 5, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 1),
(1, 'SeedHub', '影视&动漫分享平台', 'https://www.seedhub.cc/', 'https://www.seedhub.cc/favicon.ico', '["动漫","综合","支持下载"]', 5, 1, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 2),
(1, '播剧网', '2025最新电影在线观看，高清电视剧免费播放', 'https://www.ysxq.cc/', 'https://www.ysxq.cc/favicon.ico', '["免费","无广告","资源丰富"]', 5, 1, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 3),
(1, '爱壹帆', '海量高清视频免费在线观看', 'https://www.iyf.tv/', 'https://www.iyf.tv/favicon.ico', '["免费","资源丰富"]', 5, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 4),
(1, '飞快TV', '免费高清影视在线播放网盘下载', 'https://feikuai.tv/', 'https://www.feikuai.tv/favicon.ico', '["免费","资源丰富"]', 5, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 5),
(1, '电影先生', '高清电影在线观看', 'https://www.dyxs.cc/', 'https://www.dyxs.cc/favicon.ico', '["免费","高清"]', 4, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 6),
(2, '樱花动漫', '专注动漫的门户网站，提供最新最全的动漫资源', 'https://www.yhdmp.net/', 'https://www.yhdmp.net/favicon.ico', '["动漫","免费","更新快"]', 5, 1, 1, 'from-pink-50/40 to-rose-50/40 dark:from-pink-950/20 dark:to-rose-950/20', 0),
(2, 'AGE动漫', 'AGE动漫专注于资源收集整理 海量的有效的高质量的动漫资源', 'https://www.agemys.org/', 'https://www.agemys.org/favicon.ico', '["动漫","高清","资源丰富"]', 4, 0, 0, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 1),
(2, '嘀哩嘀哩', '二次元动漫网站,提供最新最快的动漫新番资源', 'https://dilidili.ink/', 'https://dilidili.ink/favicon.ico', '["动漫","新番","免费"]', 4, 0, 0, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 2),
(3, '茶杯狐', '全网影视聚合搜索引擎', 'https://cupfox.app/', 'https://cupfox.app/favicon.ico', '["聚合搜索","全网"]', 5, 1, 1, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 0),
(7, '字幕库', '字幕下载网站，提供海量中英文字幕', 'https://zimuku.org/', 'https://zimuku.org/favicon.ico', '["字幕","中英文"]', 4, 0, 0, 'from-teal-50/40 to-green-50/40 dark:from-teal-950/20 dark:to-green-950/20', 0);
