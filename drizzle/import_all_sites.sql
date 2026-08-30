INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '饭搭子影视', '最新热门电影电视剧动漫综艺体育免费观看', 'https://fdzys666.xyz/', 'https://fdzys666.xyz/favicon.ico', '["最新","推荐","4K","资源丰富","高清"]', 3, 1, 1, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://fdzys666.xyz/' OR name = '饭搭子影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 5, '巅峰剧单——9分好剧', '横跨美剧、英剧、韩剧与国产剧的巅峰之作。剧集介绍、在线观看与高清下载，一站尽览，献给每一位热爱故事的观众。', 'https://best.i8k.tv/', 'https://best.i8k.tv/favicon.ico', '["推荐","4K","9分好剧","高清"]', 3, 1, 1, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://best.i8k.tv/' OR name = '巅峰剧单——9分好剧');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '低端影视', '极简主义的高清影视站。利用 AI 智能筛选并重写片源简介，无广告干扰，专注提供高码率观影体验。', 'https://ddys.io/', 'https://ddys.io/favicon.ico', '["免费","资源丰富"]', 5, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://ddys.io/' OR name = '低端影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'SeedHub', '影视&动漫分享平台', 'https://www.seedhub.cc/', 'https://www.seedhub.cc/favicon.ico', '["动漫","综合","支持下载"]', 5, 1, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.seedhub.cc/' OR name = 'SeedHub');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '好恐怖影院', '资源挺丰富的，尤其有一些老...', 'https://www.haokongbu.top/', 'https://www.haokongbu.top/favicon.ico', '["下载"]', 5, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.haokongbu.top/' OR name = '好恐怖影院');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 5, '播剧网', '2025最新电影在线观看，高清电视剧免费播放...', 'https://www.ysxq.cc/', 'https://www.ysxq.cc/favicon.ico', '["免费","无广告","资源丰富"]', 5, 1, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.ysxq.cc/' OR name = '播剧网');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '爱壹帆', '海量高清视频免费在线观看', 'https://www.iyf.tv/', 'https://www.iyf.tv/favicon.ico', '["免费","资源丰富"]', 5, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.iyf.tv/' OR name = '爱壹帆');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '飞快TV', '免费高清影视在线播放网盘下载', 'https://feikuai.tv/', 'https://feikuai.tv/favicon.ico', '["免费","资源丰富"]', 5, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://feikuai.tv/' OR name = '飞快TV');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '网飞猫', '免费高清影视在线播放网盘下载', 'https://ncat22.com/', 'https://ncat22.com/favicon.ico', '["免费","资源丰富"]', 5, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://ncat22.com/' OR name = '网飞猫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, '电影先生', '聚合全网高清影视在线观看、下载', 'https://dyxs39.com/', 'https://dyxs39.com/favicon.ico', '["免费","资源丰富"]', 5, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://dyxs39.com/' OR name = '电影先生');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '磁力熊', '豆瓣高分电影1080P磁力下载', 'https://www.cilixiong.org/', 'https://www.cilixiong.org/favicon.ico', '["免费","资源丰富"]', 5, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.cilixiong.org/' OR name = '磁力熊');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '可可影视', '最新Netflix新剧，韩国电影免费在线观看', 'https://www.kkys02.com/', 'https://www.kkys02.com/favicon.ico', '["免费","资源丰富"]', 4, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 3
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.kkys02.com/' OR name = '可可影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '爱看机器人', '爱看机器人 - 影视导航', 'https://v.ikanbot.com/', 'https://v.ikanbot.com/favicon.ico', '["免费","资源丰富"]', 4, 0, 0, 'from-blue-50/40 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/20', 3
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://v.ikanbot.com/' OR name = '爱看机器人');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '修罗影视', '修罗影视（简称XLYS,旧XLYS、BDYS），热门电影，最新电影，最新电视剧，免费下载，迅雷下载，磁力下载，电驴下载，免费在线观看', 'https://xl01.com.de/', 'https://xl01.com.de/favicon.ico', '["免费","资源丰富"]', 4, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 3
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://xl01.com.de/' OR name = '修罗影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '注视影视', '免费在线观影', 'https://gaze.run/', 'https://gaze.run/favicon.ico', '["免费","资源丰富"]', 4, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 4
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://gaze.run/' OR name = '注视影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '剧爷爷', '剧爷爷', 'https://www.juyeye.cc/', 'https://www.juyeye.cc/favicon.ico', '["只支持手机端"]', 5, 1, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 5
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.juyeye.cc/' OR name = '剧爷爷');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, '兄弟盘', '百度云搜索站，不用关注公众号', 'https://xiongdipan.com/', 'https://xiongdipan.com/favicon.ico', '["免费","无广告","百度盘"]', 5, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://xiongdipan.com/' OR name = '兄弟盘');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '迪士尼Disney+', '迪斯尼流媒体服务，米老鼠、...', 'https://www.disneyplus.com/zh-hk/', 'https://www.disneyplus.com/favicon.ico', '["Disney","海外资源"]', 5, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 6
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.disneyplus.com/zh-hk/' OR name = '迪士尼Disney+');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '奈飞Netflix', 'Netflix 海外知名流媒体平台', 'https://www.netflix.com/hk/', 'https://www.netflix.com/favicon.ico', '["Netflix","海外资源"]', 5, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 7
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.netflix.com/hk/' OR name = '奈飞Netflix');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '哔哩哔哩', '国内知名的视频弹幕网站，这...', 'https://www.bilibili.com/', 'https://www.bilibili.com/favicon.ico', '["弹幕"]', 5, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 8
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.bilibili.com/' OR name = '哔哩哔哩');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '低端影视', '超清在线视频', 'https://ddys.run/', 'https://ddys.run/favicon.ico', '["高清","速度快","资源丰富","在线秒播"]', 5, 0, 0, 'from-blue-50/40 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/20', 9
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://ddys.run/' OR name = '低端影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '全球电影票房', '全球电影票房TOP100的排名以...', 'https://www.boxofficemojo.com/', 'https://www.boxofficemojo.com/favicon.ico', '["票房排行"]', 5, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 4
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.boxofficemojo.com/' OR name = '全球电影票房');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, '追影猫', '影视聚合搜索', 'https://zhuiyingmao3.com/', 'https://zhuiyingmao3.com/favicon.ico', '["在线秒播","资源丰富"]', 5, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 3
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://zhuiyingmao3.com/' OR name = '追影猫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'FreeOK - 追剧也很卷', 'FreeOK-追剧也很卷，为您提供2025最新电视剧、最新电影、动漫番剧、学习课程，蓝光视频免费在线观看服务，无广...', 'https://www.freeok.mobi/', 'https://www.freeok.mobi/favicon.ico', '["在线播放","高清"]', 5, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 3
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.freeok.mobi/' OR name = 'FreeOK - 追剧也很卷');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '稀饭动漫', '稀饭动漫 免费高清动漫分享', 'https://dick.xfani.com/', 'https://dick.xfani.com/favicon.ico', '["动漫","高清"]', 5, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 4
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://dick.xfani.com/' OR name = '稀饭动漫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '追新番', '日剧主要资源站', 'https://www.fanxinzhui.com/', 'https://www.fanxinzhui.com/favicon.ico', '["日剧","海外剧"]', 4, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 5
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.fanxinzhui.com/' OR name = '追新番');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '音范丝', '主打蓝光和4K下载,发烧友不错...', 'https://www.yinfans.me/', 'https://www.yinfans.me/favicon.ico', '["4K","支持下载","高清","磁力"]', 4, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 10
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.yinfans.me/' OR name = '音范丝');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '猫狸盘搜', '资源失效的不多,不用关注公众号', 'https://www.alipansou.com/', 'https://www.alipansou.com/favicon.ico', '["免费","公众号关注"]', 4, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 11
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.alipansou.com/' OR name = '猫狸盘搜');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '爱盘搜', '夸克云盘资源搜索，需要关注公众号', 'https://aipanso.com/', 'https://aipanso.com/favicon.ico', '["免费","夸克盘","公众号关注"]', 4, 0, 0, 'from-blue-50/40 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/20', 4
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://aipanso.com/' OR name = '爱盘搜');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '热盘搜', '挺不错的网盘搜索网站，跟坑...', 'http://www.repanso.com/', 'http://www.repanso.com/favicon.ico', '["免费","百度盘","阿里盘","夸克盘"]', 4, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 5
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'http://www.repanso.com/' OR name = '热盘搜');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '直播吧', '知名体育平台,主要为足球迷,...', 'https://www.zhibo8.com/', 'https://www.zhibo8.com/favicon.ico', '["体育","直播"]', 4, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 12
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.zhibo8.com/' OR name = '直播吧');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'CCTV在线', '央视网在线节目', 'https://tv.cctv.com/live/cctv1/', 'https://tv.cctv.com/favicon.ico', '["央视"]', 4, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 13
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://tv.cctv.com/live/cctv1/' OR name = 'CCTV在线');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, '找台词', '根据一段台词找到影片', 'https://zhaotaici.cn/', 'https://zhaotaici.cn/favicon.ico', '["台词搜索"]', 4, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 4
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://zhaotaici.cn/' OR name = '找台词');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, '33台词', '通过台词找到影片，还可以进...', 'https://33.agilestudio.cn/', 'https://33.agilestudio.cn/favicon.ico', '["台词搜索"]', 4, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 5
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://33.agilestudio.cn/' OR name = '33台词');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '烂番茄', '美国著名影评网站', 'https://www.rottentomatoes.com/', 'https://www.rottentomatoes.com/favicon.ico', '["美国","影评"]', 4, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 14
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.rottentomatoes.com/' OR name = '烂番茄');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, 'Gimy TV 剧迷影院', '秒播放,高清海量影视', 'https://www.jagcys.com/', 'https://www.jagcys.com/favicon.ico', '["高清","速度快","资源丰富"]', 4, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 5
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.jagcys.com/' OR name = 'Gimy TV 剧迷影院');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '日娱观察所', '每日同步更新的日本娱乐资讯，涵盖日剧、电影、动漫、综艺等最新动态', 'https://ribenyule.com/', 'https://ribenyule.com/favicon.ico', '["NEW","日剧","日本","资讯","海外剧"]', 4, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 6
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://ribenyule.com/' OR name = '日娱观察所');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '视觉影视', '海量高清影视,极速线路', 'https://www.sypfjy.com/', 'https://www.sypfjy.com/favicon.ico', '["高清","资源丰富"]', 4, 0, 0, 'from-blue-50/40 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/20', 15
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.sypfjy.com/' OR name = '视觉影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '桃子影视', '无广告速度快', 'https://taozi008.com/', 'https://taozi008.com/favicon.ico', '["免费","无广告","速度快"]', 4, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 16
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://taozi008.com/' OR name = '桃子影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 8, '盗火线', '纪录片下载网站，提供百度云...', 'https://dao-fire.com/', 'https://dao-fire.com/favicon.ico', '["支持下载","会员制","纪录片"]', 3, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://dao-fire.com/' OR name = '盗火线');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 7, '深影译站', '美剧字幕组，也有少量的西剧...', 'https://sysub.com/', 'https://sysub.com/favicon.ico', '["字幕","海外剧","美国"]', 3, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://sysub.com/' OR name = '深影译站');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 7, '深影字幕组', '美剧字幕组，也有少量的西剧...', 'https://sybbs.vip/member.php/', 'https://sybbs.vip/favicon.ico', '["字幕","海外剧","美国"]', 3, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://sybbs.vip/member.php/' OR name = '深影字幕组');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'CHAOSPACE', '高清压制,无广告,需要会员下载', 'https://www.chaospace.xyz/', 'https://www.chaospace.xyz/favicon.ico', '["付费注册","支持下载","无广告","高清"]', 3, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 17
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.chaospace.xyz/' OR name = 'CHAOSPACE');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '日剧跑', '日剧资源丰富，下载提供云盘...', 'https://www.rijupao.com/', 'https://www.rijupao.com/favicon.ico', '["支持下载","日本","海外剧","资源丰富"]', 3, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 6
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.rijupao.com/' OR name = '日剧跑');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '6V电影', '老牌下载站，资源丰富', 'http://www.6v520.com/', 'http://www.6v520.com/favicon.ico', '["支持下载","资源丰富","磁力"]', 3, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 6
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'http://www.6v520.com/' OR name = '6V电影');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '我爱ABC', '少儿动画站，有中文和英文原版', 'https://www.oiabc.net/', 'https://www.oiabc.net/favicon.ico', '["少儿","动画"]', 3, 0, 0, 'from-blue-50/40 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/20', 18
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.oiabc.net/' OR name = '我爱ABC');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '下载001论坛', '资源整理的不错，影视剧下载不错', 'https://xiazai001.org/', 'https://xiazai001.org/favicon.ico', '["支持下载","论坛","会员"]', 3, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 19
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://xiazai001.org/' OR name = '下载001论坛');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '阿里小站', '阿里云网盘资源,很多精心整理...', 'https://pan666.net/', 'https://pan666.net/favicon.ico', '["网盘资源","阿里云盘","会员"]', 3, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 7
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://pan666.net/' OR name = '阿里小站');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '一刻电影', '老电影不少,支持云盘和磁力下载', 'https://www.yikedy.co/', 'https://www.yikedy.co/favicon.ico', '["支持下载"]', 3, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 8
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.yikedy.co/' OR name = '一刻电影');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '天逸搜', '天翼云盘搜索站，不用关注公众号', 'https://www.tianyiso.com/', 'https://www.tianyiso.com/favicon.ico', '["免费","天翼盘","无广告"]', 3, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 9
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.tianyiso.com/' OR name = '天逸搜');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '盘么么', '跟盘58、热盘搜等属同一家', 'http://www.panmeme.com/', 'http://www.panmeme.com/favicon.ico', '["免费","百度盘","阿里盘","夸克盘"]', 3, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 10
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'http://www.panmeme.com/' OR name = '盘么么');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'AfreecaTV', '韩国直播', 'https://www.sooplive.co.kr/', 'https://www.sooplive.co.kr/favicon.ico', '["免费","韩国"]', 3, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 20
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.sooplive.co.kr/' OR name = 'AfreecaTV');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, 'QuoDB', '只做英文台词搜索的搜索引擎', 'https://www.quodb.com/', 'https://www.quodb.com/favicon.ico', '["英文"]', 3, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 6
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.quodb.com/' OR name = 'QuoDB');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'Dialogue.moe', '动漫台词对白搜索引擎', 'https://dialogue.moe/', 'https://dialogue.moe/favicon.ico', '["动漫"]', 3, 0, 0, 'from-blue-50/40 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/20', 7
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://dialogue.moe/' OR name = 'Dialogue.moe');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'SauceNAO', '以图搜图的动漫引擎', 'https://saucenao.com/', 'https://saucenao.com/favicon.ico', '["动漫"]', 3, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 8
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://saucenao.com/' OR name = 'SauceNAO');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, 'UP云搜', '阿里云盘搜索站，简单无套路...', 'https://www.upyunso.com/', 'https://www.upyunso.com/favicon.ico', '["免费","无广告","阿里盘"]', 3, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 11
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.upyunso.com/' OR name = 'UP云搜');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '韩娱网', '最新热门韩剧、韩国电影、综艺、动漫免费在线观看，每日更新韩国娱乐资讯', 'https://koreayule.com/', 'https://koreayule.com/favicon.ico', '["NEW","韩剧","韩国","海外剧","资源丰富"]', 4, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 9
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://koreayule.com/' OR name = '韩娱网');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '影猫 · MVCAT', '如果不知道看什么电影，不妨...', 'https://www.mvcat.com/movie/', 'https://www.mvcat.com/favicon.ico', '["推荐","评分","片单"]', 3, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 7
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.mvcat.com/movie/' OR name = '影猫 · MVCAT');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '动漫新番表', '动漫爱好者必备!致力于为动漫...', 'https://xf.hmacg.cn/', 'https://xf.hmacg.cn/favicon.ico', '["动漫"]', 3, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 10
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://xf.hmacg.cn/' OR name = '动漫新番表');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '免費動漫网', '海外更新最快的動漫網，是壹個在海外動漫資源最全，日漫更新速度第壹，播放資源高清完整版的壹個大型動漫社區，同时为您提...', 'https://qkan8.com/', 'https://qkan8.com/favicon.ico', '["动漫","高清"]', 3, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 11
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://qkan8.com/' OR name = '免費動漫网');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '酷米动漫', '专门为15岁以下的孩子提供绿...', 'http://www.kumi.cn/', 'http://www.kumi.cn/favicon.ico', '["动漫","少儿"]', 3, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 12
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'http://www.kumi.cn/' OR name = '酷米动漫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '番薯动漫', '提供最新最快的动漫新番资讯和在线播放，观看完全免费、无须注册、高速播放、更新及时的专业在线番薯动漫站，我们致力为所有动漫迷们提供最好看的动漫。', 'https://www.fanshudm.com/', 'https://www.fanshudm.com/favicon.ico', '["免费","动漫","速度快"]', 3, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 13
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.fanshudm.com/' OR name = '番薯动漫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'FreeOK影视大全', '无广告不卡、实时更新', 'https://www.jsard.com/', 'https://www.jsard.com/favicon.ico', '["免费","无广告"]', 3, 0, 0, 'from-blue-50/40 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/20', 21
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.jsard.com/' OR name = 'FreeOK影视大全');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '飘零影院', '无广告在线观影', 'https://www.tzqjdy.com/', 'https://www.tzqjdy.com/favicon.ico', '["免费","无广告"]', 3, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 8
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.tzqjdy.com/' OR name = '飘零影院');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 5, '极光影视', '极光影视是一个免费为广大追剧迷提供在线播放的影视站，涵盖大量免费的VIP电视剧资源、最新上映大片、好看的综艺节目及...', 'https://hellociqryx6e.com/', 'https://hellociqryx6e.com/favicon.ico', '["高清"]', 3, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 3
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://hellociqryx6e.com/' OR name = '极光影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 7, 'SubHD', '欧美剧字幕聚合站，尤其包含...', 'https://subhd.tv/', 'https://subhd.tv/favicon.ico', '["字幕","海外剧","美国","高清"]', 3, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 3
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://subhd.tv/' OR name = 'SubHD');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 7, '神叨字幕组', '产量不高,贵在无广告,论坛生...', 'https://www.shenbibi.com/', 'https://www.shenbibi.com/favicon.ico', '["免费","字幕","会员制","不可注册"]', 3, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 4
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.shenbibi.com/' OR name = '神叨字幕组');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '云盘资源社区', '阿里云网盘资源分享社区，涉...', 'https://yunpan1.cc/', 'https://yunpan1.cc/favicon.ico', '["关注公众号","网盘资源"]', 3, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 12
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://yunpan1.cc/' OR name = '云盘资源社区');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 5, '韩饭网', '韩剧下载，提供BT和百度云两...（好久没更新了）', 'https://www.hanfan.cc/', 'https://www.hanfan.cc/favicon.ico', '["支持下载","海外剧","韩国"]', 3, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 4
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.hanfan.cc/' OR name = '韩饭网');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '人人影视下载分享', '应该是之前爬了人人完整的数...', 'https://yyets.click/', 'https://yyets.click/favicon.ico', '["支持下载"]', 3, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 22
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://yyets.click/' OR name = '人人影视下载分享');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '漫猫动漫BT下载', '番剧,日剧下载，更新速度比较快', 'http://www.comicat.org/', 'http://www.comicat.org/favicon.ico', '["动漫","支持下载","日本","海外剧","速度快"]', 3, 0, 0, 'from-blue-50/40 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/20', 14
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'http://www.comicat.org/' OR name = '漫猫动漫BT下载');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 10, '短剧剧', '热门短剧免费在线观看，海量短剧资源持续更新', 'https://duanjujui.com/', 'https://duanjujui.com/favicon.ico', '["NEW","短剧","免费"]', 4, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://duanjujui.com/' OR name = '短剧剧');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '优聚搜', '阿里云盘搜索站，体验还可以...', 'https://jujuso.com/', 'https://jujuso.com/favicon.ico', '["会员制"]', 3, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 13
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://jujuso.com/' OR name = '优聚搜');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '奈斯搜索', '阿里云盘搜索，无广告但需关注公众号激活', 'https://www.niceso.net/', 'https://www.niceso.net/favicon.ico', '["免费","无广告","阿里盘","关注公众号"]', 3, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 14
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.niceso.net/' OR name = '奈斯搜索');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '小马盘', '需要关注公众号，除此之外还...', 'https://www.xiaomapan.com/', 'https://www.xiaomapan.com/favicon.ico', '["实名制","阿里盘","公众号关注"]', 3, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 15
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.xiaomapan.com/' OR name = '小马盘');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'trace.moe', '强大的以图搜图的日本动漫图...', 'https://trace.moe/', 'https://trace.moe/favicon.ico', '["动漫","日本"]', 3, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 15
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://trace.moe/' OR name = 'trace.moe');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 5, '天府泰剧', '无官网，仅有一个官方微博', 'https://weibo.com/tfthaimovie/', 'https://weibo.com/favicon.ico', '["微博","海外剧","泰国","封禁中"]', 3, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 5
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://weibo.com/tfthaimovie/' OR name = '天府泰剧');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '虾米解析', '支持国内各大视频网站的解析', 'https://jx.xmflv.com/?url=&amp;ref=i8k.tv/', 'https://jx.xmflv.com/favicon.ico', '[]', 4, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 23
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://jx.xmflv.com/?url=&amp;ref=i8k.tv/' OR name = '虾米解析');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'M3U8.TV', '免费、高清的解析接口', 'https://jx.m3u8.tv/jiexi/?url=&amp;ref=i8k.tv/', 'https://jx.m3u8.tv/favicon.ico', '["高清","免费"]', 4, 0, 0, 'from-blue-50/40 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/20', 24
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://jx.m3u8.tv/jiexi/?url=&amp;ref=i8k.tv/' OR name = 'M3U8.TV');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'PlayM3U8', '无广告视频解析，支持各大视...', 'https://www.playm3u8.cn/jiexi.php?url=&amp;ref=i8k.tv/', 'https://www.playm3u8.cn/favicon.ico', '["免费","无广告"]', 4, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 25
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.playm3u8.cn/jiexi.php?url=&amp;ref=i8k.tv/' OR name = 'PlayM3U8');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'TVBox安卓电视盒子', '免费开源的电视必备观影神器', 'https://qianfangzy.com/40541.html/', 'https://qianfangzy.com/favicon.ico', '["免费"]', 4, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 26
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://qianfangzy.com/40541.html/' OR name = 'TVBox安卓电视盒子');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'ZY Player播放器', '支持Windows、macOS的PC开源...', 'https://zyplayer.fun/', 'https://zyplayer.fun/favicon.ico', '[]', 4, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 27
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://zyplayer.fun/' OR name = 'ZY Player播放器');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '电视盒子的APP合集', '电视盒子的APP合集', 'https://qianfangzy.com/?s=TV&amp;ref=i8k.tv/', 'https://qianfangzy.com/favicon.ico', '[]', 4, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 28
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://qianfangzy.com/?s=TV&amp;ref=i8k.tv/' OR name = '电视盒子的APP合集');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, '7080网', '聚合影视搜索网', 'https://7080.wang/', 'https://7080.wang/favicon.ico', '[]', 4, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 7
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://7080.wang/' OR name = '7080网');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '茶杯狐', '茶杯狐cupfox电影官方网站在...', 'https://cupfox.app/', 'https://cupfox.app/favicon.ico', '[]', 4, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 9
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://cupfox.app/' OR name = '茶杯狐');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '豌豆免费影视', '最全面的影视网', 'https://www.wandou.la/', 'https://www.wandou.la/favicon.ico', '["免费"]', 4, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 29
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.wandou.la/' OR name = '豌豆免费影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, '青麦', '聚合全网最新优质影视资源的...', 'https://www.qmtv.pro/', 'https://www.qmtv.pro/favicon.ico', '["资源丰富"]', 4, 0, 0, 'from-blue-50/40 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/20', 8
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.qmtv.pro/' OR name = '青麦');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, '搜片.com', '影视搜索引擎', 'https://soupian.one/', 'https://soupian.one/favicon.ico', '[]', 4, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 9
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://soupian.one/' OR name = '搜片.com');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '哎呦不错网', '一个每天必看的网站', 'https://aiyoubucuo.com/', 'https://aiyoubucuo.com/favicon.ico', '[]', 4, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 30
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://aiyoubucuo.com/' OR name = '哎呦不错网');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '看片狂人', '在线观影', 'https://www.kpkuang.fun/', 'https://www.kpkuang.fun/favicon.ico', '[]', 4, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 31
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.kpkuang.fun/' OR name = '看片狂人');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, 'MOFLIX影院', '速度挺快', 'http://4.567.li/', 'http://4.567.li/favicon.ico', '["速度快"]', 4, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 10
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'http://4.567.li/' OR name = 'MOFLIX影院');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'IPTV直播源', '一个国内可直连的IPTV直播源目', 'https://github.com/wang987742/fanmingming/', 'https://github.com/favicon.ico', '[]', 4, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 32
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://github.com/wang987742/fanmingming/' OR name = 'IPTV直播源');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'NT动漫', 'NT动漫，专注的动漫的网站，...', 'https://www.ntdm9.com/', 'https://www.ntdm9.com/favicon.ico', '["动漫"]', 4, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 16
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.ntdm9.com/' OR name = 'NT动漫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '百思派电影', '免费看国外最新大片', 'https://www.bestpipe.cn/', 'https://www.bestpipe.cn/favicon.ico', '["免费","海外资源"]', 4, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 11
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.bestpipe.cn/' OR name = '百思派电影');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '555影视', '找电影更容易', 'https://www.55yy8.com/', 'https://www.55yy8.com/favicon.ico', '[]', 4, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 12
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.55yy8.com/' OR name = '555影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 10, '樱花视频', '在线秒播+短剧板块', 'https://www.dcjyb.com/', 'https://www.dcjyb.com/favicon.ico', '["速度快"]', 4, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.dcjyb.com/' OR name = '樱花视频');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '豆花影院', '在线秒播+无广告', 'https://www.widiz.com/', 'https://www.widiz.com/favicon.ico', '["免费","无广告","速度快"]', 4, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 13
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.widiz.com/' OR name = '豆花影院');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'iKanBot', '片源30+', 'https://v.aikanbot.com/', 'https://v.aikanbot.com/favicon.ico', '[]', 4, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 33
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://v.aikanbot.com/' OR name = 'iKanBot');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '蛋蛋兔', '自有线路无广告', 'https://www.dandantu.cc/', 'https://www.dandantu.cc/favicon.ico', '["免费","无广告"]', 4, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 34
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.dandantu.cc/' OR name = '蛋蛋兔');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, '星颜社', '韩流资讯聚合平台，聚焦K-POP、韩综、韩剧与明星动态', 'https://kvariety.news/', 'https://kvariety.news/favicon.ico', '["NEW","韩国","韩综","K-POP","资讯"]', 4, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 10
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://kvariety.news/' OR name = '星颜社');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 5, '泰小圈', '专注泰剧的在线追剧网站', 'https://txquu.com/', 'https://txquu.com/favicon.ico', '[]', 4, 0, 0, 'from-blue-50/40 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/20', 6
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://txquu.com/' OR name = '泰小圈');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '茅台资源站', '极速加载，海量高清资源，新...', 'https://mtzy.me/', 'https://mtzy.me/favicon.ico', '["高清","资源丰富"]', 4, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 35
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://mtzy.me/' OR name = '茅台资源站');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '最强最全国内外AI神器推荐！', '最强最全国内外AI神器推荐！', 'https://qianfangzy.com/126675.html/', 'https://qianfangzy.com/favicon.ico', '[]', 4, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 36
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://qianfangzy.com/126675.html/' OR name = '最强最全国内外AI神器推荐！');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '影剧资源', '海量资源看不完', 'https://yjzy.tv/', 'https://yjzy.tv/favicon.ico', '["资源丰富"]', 4, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 37
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://yjzy.tv/' OR name = '影剧资源');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'NT动漫', 'NT动漫，专注的动漫的网站，立志为广大动漫迷提供一个在线看动漫的好平台', 'http://www.ntdm8.com/', 'http://www.ntdm8.com/favicon.ico', '["动漫"]', 4, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 17
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'http://www.ntdm8.com/' OR name = 'NT动漫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'Anime1.in 動畫線上看', '上千部動漫免費線上看！', 'https://anime1.in/', 'https://anime1.in/favicon.ico', '["动漫"]', 4, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 18
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://anime1.in/' OR name = 'Anime1.in 動畫線上看');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'Omofun动漫', 'Omofun动漫为您免费提供最新的动漫番剧哦~专注于动漫卡通资源收集整理，海量无修动漫卡通资源免费在线观看下载。', 'https://cn.211dm.com/', 'https://cn.211dm.com/favicon.ico', '["动漫","支持下载","资源丰富"]', 4, 0, 0, 'from-blue-50/40 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/20', 19
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://cn.211dm.com/' OR name = 'Omofun动漫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, '火车太堵', '全网蓝光急速观影', 'https://www.tdgo.shop/', 'https://www.tdgo.shop/favicon.ico', '["高清"]', 4, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 11
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.tdgo.shop/' OR name = '火车太堵');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '皮皮妖', '皮皮妖提供最新最快的视频分享数据', 'https://www.pipiyao.cc/', 'https://www.pipiyao.cc/favicon.ico', '["只支持手机观看"]', 4, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 38
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.pipiyao.cc/' OR name = '皮皮妖');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '蜜柑计划', '蜜柑计划：新一代的动漫下载站', 'https://mikan.tangbai.cc/', 'https://mikan.tangbai.cc/favicon.ico', '["动漫","支持下载"]', 4, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 20
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://mikan.tangbai.cc/' OR name = '蜜柑计划');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '类似电影', '我们的服务将帮助您找到更多与您喜欢的电影类似的电影。 所有列表都会定期更新，因此您将始终了解适合您口味的新电影和最佳电影。', 'https://leisidianying.com/', 'https://leisidianying.com/favicon.ico', '["电影推荐"]', 4, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 14
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://leisidianying.com/' OR name = '类似电影');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '路漫漫在线动漫', '在线动画,日本动漫,国产动漫,动漫免费在线', 'https://www.lmm96.com/', 'https://www.lmm96.com/favicon.ico', '["动漫"]', 4, 0, 0, 'from-violet-50/40 to-purple-50/40 dark:from-violet-950/20 dark:to-purple-950/20', 21
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.lmm96.com/' OR name = '路漫漫在线动漫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '4k影视-高清在线 - 4k影视', '4k影视-高清在线 - 4k影视', 'https://www.4kvm.tv/', 'https://www.4kvm.tv/favicon.ico', '["4K","高清"]', 4, 0, 0, 'from-amber-50/40 to-yellow-50/40 dark:from-amber-950/20 dark:to-yellow-950/20', 39
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.4kvm.tv/' OR name = '4k影视-高清在线 - 4k影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'SeaTV 24', '动漫站，Watch And Download Donghua Stream 4K 2K HD For Free in SeaTV 24 With Multi Subtitle for free new and upcoming', 'https://seatv-24.xyz/', 'https://seatv-24.xyz/favicon.ico', '["4K","动漫","高清"]', 4, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 22
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://seatv-24.xyz/' OR name = 'SeaTV 24');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '次元城动画', '动漫站', 'https://www.cycani.org/', 'https://www.cycani.org/favicon.ico', '["动漫"]', 4, 0, 0, 'from-blue-50/40 to-indigo-50/40 dark:from-blue-950/20 dark:to-indigo-950/20', 23
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.cycani.org/' OR name = '次元城动画');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'E站-E站弹幕网', 'E站弹幕网是国内专业的二次元（ACG）社区. 在线动漫&下载、GALGAME、动漫图集、漫评影视等，E站弹幕网为您一网打尽。', 'https://www.ezdmw.site/', 'https://www.ezdmw.site/favicon.ico', '["动漫","弹幕","支持下载"]', 4, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 24
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.ezdmw.site/' OR name = 'E站-E站弹幕网');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '🍉西瓜卡通', '动漫站', 'https://cn.xgcartoon.com/', 'https://cn.xgcartoon.com/favicon.ico', '["动漫"]', 4, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 25
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://cn.xgcartoon.com/' OR name = '🍉西瓜卡通');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '二矿动漫', '只收录超高清画质的动漫网站(宁缺毋滥)，资源如海的免费观看并无广告、无删减的动漫网站', 'https://www.2rk.cc/', 'https://www.2rk.cc/favicon.ico', '["4K","动漫","无广告","高清"]', 4, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 26
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.2rk.cc/' OR name = '二矿动漫');