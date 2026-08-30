INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 7, '字幕工具箱', '字幕工具箱 - 优质影视资源导航推荐', 'https://zm.i8k.tv/', 'https://zm.i8k.tv/favicon.ico', '["免费","高清"]', 5, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://zm.i8k.tv/' OR name = '字幕工具箱');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 7, '字幕下载', '字幕下载 - 优质影视资源导航推荐', 'https://downsub.com/', 'https://downsub.com/favicon.ico', '["免费","高清"]', 5, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://downsub.com/' OR name = '字幕下载');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '饭搭子影视', '饭搭子影视', 'https://fdzys666.xyz/', 'https://fdzys.net/template/mizhiady/statics/images/logo_blue.png', '["最新","4K","资源丰富","高清"]', 5, 1, 1, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://fdzys666.xyz/' OR name = '饭搭子影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 5, '巅峰剧单——9分好剧', '巅峰剧单——9分好剧', 'https://best.i8k.tv/', 'https://best.i8k.tv/favicon.ico', '["经典","4K","9分好剧","高清"]', 5, 1, 1, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://best.i8k.tv/' OR name = '巅峰剧单——9分好剧');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '低端影视', '低端影视', 'https://ddys.io/', 'https://ddys.io/favicon.ico', '["免费","资源丰富"]', 5, 0, 1, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://ddys.io/' OR name = '低端影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'SeedHub', 'SeedHub', 'https://www.seedhub.cc/', 'https://www.seedhub.cc/favicon.ico', '["动漫","综合","支持下载"]', 5, 1, 1, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.seedhub.cc/' OR name = 'SeedHub');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '好恐怖影院', '好恐怖影院', 'https://www.haokongbu.top/', 'https://www.haokongbu.top/favicon.ico', '["下载"]', 5, 0, 1, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.haokongbu.top/' OR name = '好恐怖影院');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '播剧网', '播剧网', 'https://www.ysxq.cc/', 'https://www.ysxq.cc/favicon.ico', '["免费","无广告","资源丰富"]', 5, 1, 1, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 3
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.ysxq.cc/' OR name = '播剧网');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '爱壹帆', '爱壹帆', 'https://www.iyf.tv/', 'https://www.iyf.tv/favicon.ico', '["免费","资源丰富"]', 5, 0, 1, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 4
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.iyf.tv/' OR name = '爱壹帆');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '飞快TV', '飞快TV', 'https://feikuai.tv/', 'https://www.feikuai.tv/favicon.ico', '["免费","资源丰富"]', 5, 0, 1, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 5
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://feikuai.tv/' OR name = '飞快TV');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '网飞猫', '网飞猫', 'https://ncat22.com/', 'https://vf.zclmjc.com/vod_pc_static_ncat/images/favicon.ico?ver=ggewasd', '["免费","资源丰富"]', 5, 0, 1, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 6
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://ncat22.com/' OR name = '网飞猫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '电影先生', '电影先生', 'https://dyxs39.com/', 'https://dyxs39.com/favicon.ico', '["免费","资源丰富"]', 5, 0, 1, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://dyxs39.com/' OR name = '电影先生');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '磁力熊', '磁力熊', 'https://www.cilixiong.org/', 'https://www.cilixiong.org/favicon.ico', '["免费","资源丰富"]', 5, 0, 1, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.cilixiong.org/' OR name = '磁力熊');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '可可影视', '可可影视', 'https://www.kkys02.com/', 'https://www.kkys02.com/favicon.ico', '["免费","资源丰富"]', 5, 0, 1, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 7
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.kkys02.com/' OR name = '可可影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '爱看机器人', '爱看机器人', 'https://v.ikanbot.com/', 'https://v.ikanbot.com/favicon.ico', '["免费","资源丰富"]', 5, 0, 1, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 8
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://v.ikanbot.com/' OR name = '爱看机器人');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '修罗影视', '修罗影视', 'https://xl01.com.de/', 'https://xl01.com.de/images/favicon.png', '["免费","资源丰富"]', 5, 0, 1, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 9
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://xl01.com.de/' OR name = '修罗影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '注视影视', '注视影视', 'https://gaze.run/', 'https://gaze.run/favicon.ico', '["免费","资源丰富"]', 5, 0, 1, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 10
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://gaze.run/' OR name = '注视影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '剧爷爷', '剧爷爷', 'https://www.juyeye.cc/', 'https://www.juyeye.cc/favicon.ico', '["只支持手机端"]', 5, 1, 1, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 11
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.juyeye.cc/' OR name = '剧爷爷');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '兄弟盘', '兄弟盘', 'https://xiongdipan.com/', 'https://xiongdipan.com/favicon.ico', '["免费","无广告","百度盘"]', 5, 0, 1, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 12
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://xiongdipan.com/' OR name = '兄弟盘');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '迪士尼Disney+', '迪士尼Disney+', 'https://www.disneyplus.com/zh-hk/', 'https://www.disneyplus.com/favicon.ico', '["Disney","海外资源"]', 5, 0, 1, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 13
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.disneyplus.com/zh-hk/' OR name = '迪士尼Disney+');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '奈飞Netflix', '奈飞Netflix', 'https://www.netflix.com/hk/', 'https://www.netflix.com/favicon.ico', '["Netflix","海外资源"]', 5, 0, 1, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 14
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.netflix.com/hk/' OR name = '奈飞Netflix');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '哔哩哔哩', '哔哩哔哩', 'https://www.bilibili.com/', 'https://www.bilibili.com/favicon.ico', '["弹幕"]', 5, 0, 1, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 15
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.bilibili.com/' OR name = '哔哩哔哩');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '全球电影票房', '全球电影票房', 'https://www.boxofficemojo.com/', 'https://www.boxofficemojo.com/favicon.ico', '["票房排行"]', 5, 0, 1, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 3
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.boxofficemojo.com/' OR name = '全球电影票房');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '追影猫', '追影猫', 'https://zhuiyingmao3.com/', 'https://zhuiyingmao3.com/favicon.ico', '["在线秒播","资源丰富"]', 5, 0, 1, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 16
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://zhuiyingmao3.com/' OR name = '追影猫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'FreeOK - 追剧也很卷', 'FreeOK - 追剧也很卷', 'https://www.freeok.mobi/', 'https://www.freeok.mobi/mxtheme/images/newlogo.jpg', '["在线播放","高清"]', 5, 0, 1, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 17
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.freeok.mobi/' OR name = 'FreeOK - 追剧也很卷');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '稀饭动漫', '稀饭动漫', 'https://dick.xfani.com/', 'https://img20.360buyimg.com/openfeedback/jfs/t1/291795/1/467/167590/680dc955F2481270d/d874122576b32bc2.png', '["动漫","高清"]', 5, 0, 1, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://dick.xfani.com/' OR name = '稀饭动漫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '追新番', '追新番', 'https://www.fanxinzhui.com/', 'https://favicon.cccyun.cc/www.fanxinzhui.com', '["日剧","海外剧"]', 5, 0, 1, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 3
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.fanxinzhui.com/' OR name = '追新番');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '音范丝', '音范丝', 'https://www.yinfans.me/', 'https://www.yinfans.me/favicon.ico', '["4K","支持下载","高清","磁力"]', 5, 0, 1, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.yinfans.me/' OR name = '音范丝');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '猫狸盘搜', '猫狸盘搜', 'https://www.alipansou.com/', 'https://www.alipansou.com/favicon.ico', '["免费","公众号关注"]', 5, 0, 1, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 18
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.alipansou.com/' OR name = '猫狸盘搜');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '爱盘搜', '爱盘搜', 'https://aipanso.com/', 'https://aipanso.com/favicon.ico', '["免费","夸克盘","公众号关注"]', 5, 0, 1, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 3
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://aipanso.com/' OR name = '爱盘搜');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '热盘搜', '热盘搜', 'http://www.repanso.com/', 'http://www.repanso.com/favicon.ico', '["免费","百度盘","阿里盘","夸克盘"]', 5, 0, 1, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 4
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'http://www.repanso.com/' OR name = '热盘搜');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '直播吧', '直播吧', 'https://www.zhibo8.com/', 'https://www.zhibo8.com/favicon.ico', '["体育","直播"]', 5, 0, 1, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 19
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.zhibo8.com/' OR name = '直播吧');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'CCTV在线', 'CCTV在线', 'https://tv.cctv.com/live/cctv1/', 'https://tv.cctv.com/favicon.ico', '["央视"]', 5, 0, 1, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 20
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://tv.cctv.com/live/cctv1/' OR name = 'CCTV在线');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, '找台词', '找台词', 'https://zhaotaici.cn/', 'https://zhaotaici.cn/img/favicon.ico', '["台词搜索"]', 5, 0, 1, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://zhaotaici.cn/' OR name = '找台词');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, '33台词', '33台词', 'https://33.agilestudio.cn/', 'https://33.agilestudio.cn/favicon.ico', '["台词搜索"]', 5, 0, 1, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://33.agilestudio.cn/' OR name = '33台词');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '烂番茄', '烂番茄', 'https://www.rottentomatoes.com/', 'https://www.rottentomatoes.com/favicon.ico', '["美国","影评"]', 5, 0, 1, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 21
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.rottentomatoes.com/' OR name = '烂番茄');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, 'Gimy TV 剧迷影院', 'Gimy TV 剧迷影院', 'https://www.jagcys.com/', 'https://www.jagcys.com/favicon.png', '["高清","速度快","资源丰富"]', 5, 0, 1, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 4
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.jagcys.com/' OR name = 'Gimy TV 剧迷影院');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 5, '日娱观察所', '日娱观察所', 'https://ribenyule.com/', 'https://ribenyule.com/template/riju03/statics/images/riju-favicon-32.png', '["NEW","日剧","日本","资讯","海外剧"]', 5, 0, 0, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 2
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://ribenyule.com/' OR name = '日娱观察所');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '视觉影视', '视觉影视', 'https://www.sypfjy.com/', 'https://www.sypfjy.com/favicon.ico', '["高清","资源丰富"]', 5, 0, 1, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 22
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.sypfjy.com/' OR name = '视觉影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '桃子影视', '桃子影视', 'https://taozi008.com/', 'https://taozi008.com/favicon.ico', '["免费","无广告","速度快"]', 5, 0, 1, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 23
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://taozi008.com/' OR name = '桃子影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 8, '盗火线', '盗火线', 'https://dao-fire.com/', 'https://dao-fire.com/favicon.ico', '["支持下载","会员制","纪录片"]', 5, 0, 1, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://dao-fire.com/' OR name = '盗火线');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 7, '深影译站', '深影译站', 'https://sysub.com/', 'https://sysub.com/favicon.ico', '["字幕","海外剧","美国"]', 5, 0, 1, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 3
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://sysub.com/' OR name = '深影译站');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 7, '深影字幕组', '深影字幕组', 'https://sybbs.vip/member.php/', 'https://sybbs.vip/favicon.ico', '["字幕","海外剧","美国"]', 5, 0, 1, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 4
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://sybbs.vip/member.php/' OR name = '深影字幕组');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'CHAOSPACE', 'CHAOSPACE', 'https://www.chaospace.xyz/', 'https://www.chaospace.xyz/favicon.ico', '["付费注册","支持下载","无广告","高清"]', 5, 0, 1, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 24
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.chaospace.xyz/' OR name = 'CHAOSPACE');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 5, '日剧跑', '日剧跑', 'https://www.rijupao.com/', 'https://www.rijupao.com/favicon.ico', '["支持下载","日本","海外剧","资源丰富"]', 5, 0, 1, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 3
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.rijupao.com/' OR name = '日剧跑');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '6V电影', '6V电影', 'http://www.6v520.com/', 'http://www.6v520.com/favicon.ico', '["支持下载","资源丰富","磁力"]', 5, 0, 1, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 5
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'http://www.6v520.com/' OR name = '6V电影');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '我爱ABC', '我爱ABC', 'https://www.oiabc.net/', 'https://www.oiabc.net/favicon.ico', '["少儿","动画"]', 5, 0, 1, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 25
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.oiabc.net/' OR name = '我爱ABC');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '下载001论坛', '下载001论坛', 'https://xiazai001.org/', 'https://xiazai001.org/favicon.ico', '["支持下载","论坛","会员"]', 5, 0, 1, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 26
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://xiazai001.org/' OR name = '下载001论坛');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '阿里小站', '阿里小站', 'https://pan666.net/', 'https://pan666.net/favicon.ico', '["网盘资源","阿里云盘","会员"]', 5, 0, 1, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 6
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://pan666.net/' OR name = '阿里小站');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '一刻电影', '一刻电影', 'https://www.yikedy.co/', 'https://www.yikedy.co/favicon.ico', '["支持下载"]', 5, 0, 1, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 5
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.yikedy.co/' OR name = '一刻电影');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '天逸搜', '天逸搜', 'https://www.tianyiso.com/', 'https://www.tianyiso.com/favicon.ico', '["免费","天翼盘","无广告"]', 5, 0, 1, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 27
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.tianyiso.com/' OR name = '天逸搜');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '盘么么', '盘么么', 'http://www.panmeme.com/', 'http://www.panmeme.com/favicon.ico', '["免费","百度盘","阿里盘","夸克盘"]', 5, 0, 1, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 7
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'http://www.panmeme.com/' OR name = '盘么么');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'AfreecaTV', 'AfreecaTV', 'https://www.sooplive.co.kr/', 'https://www.sooplive.co.kr/favicon.ico', '["免费","韩国"]', 5, 0, 1, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 28
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.sooplive.co.kr/' OR name = 'AfreecaTV');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'QuoDB', 'QuoDB', 'https://www.quodb.com/', 'https://www.quodb.com/favicon.ico', '["英文"]', 5, 0, 1, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 29
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.quodb.com/' OR name = 'QuoDB');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'Dialogue.moe', 'Dialogue.moe', 'https://dialogue.moe/', 'https://dialogue.moe/favicon.ico', '["动漫"]', 5, 0, 1, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 4
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://dialogue.moe/' OR name = 'Dialogue.moe');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'SauceNAO', 'SauceNAO', 'https://saucenao.com/', 'https://saucenao.com/favicon.ico', '["动漫"]', 5, 0, 1, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 5
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://saucenao.com/' OR name = 'SauceNAO');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, 'UP云搜', 'UP云搜', 'https://www.upyunso.com/', 'https://www.upyunso.com/static/favicon.ico', '["免费","无广告","阿里盘"]', 5, 0, 1, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 8
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.upyunso.com/' OR name = 'UP云搜');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 5, '韩娱网', '韩娱网', 'https://koreayule.com/', 'https://koreayule.com/template/hanju2/statics/uploads/favicon-20260624105637-13bd44.png', '["NEW","韩剧","韩国","海外剧","资源丰富"]', 5, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 4
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://koreayule.com/' OR name = '韩娱网');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '影猫 · MVCAT', '影猫 · MVCAT', 'https://www.mvcat.com/movie/', 'https://www.mvcat.com/favicon.ico', '["评分","片单"]', 5, 0, 1, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 30
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.mvcat.com/movie/' OR name = '影猫 · MVCAT');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '动漫新番表', '动漫新番表', 'https://xf.hmacg.cn/', 'https://xf.hmacg.cn/favicon.ico', '["动漫"]', 5, 0, 1, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 6
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://xf.hmacg.cn/' OR name = '动漫新番表');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '免費動漫网', '免費動漫网', 'https://qkan8.com/', 'https://k8dm.com/template/vfed/asset/img/favicon.png', '["动漫","高清"]', 5, 0, 1, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 7
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://qkan8.com/' OR name = '免費動漫网');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '酷米动漫', '酷米动漫', 'http://www.kumi.cn/', 'http://www.kumi.cn/favicon.ico', '["动漫","少儿"]', 5, 0, 1, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 8
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'http://www.kumi.cn/' OR name = '酷米动漫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '番薯动漫', '番薯动漫', 'https://www.fanshudm.com/', 'https://www.fanshudm.com/apple-touch-icon.png', '["免费","动漫","速度快"]', 5, 0, 1, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 9
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.fanshudm.com/' OR name = '番薯动漫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'FreeOK影视大全', 'FreeOK影视大全', 'https://www.jsard.com/', 'https://www.jsard.com/favicon.png', '["免费","无广告"]', 5, 0, 1, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 31
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.jsard.com/' OR name = 'FreeOK影视大全');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '飘零影院', '飘零影院', 'https://www.tzqjdy.com/', 'https://www.tzqjdy.com/favicon.ico', '["免费","无广告"]', 5, 0, 1, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 6
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.tzqjdy.com/' OR name = '飘零影院');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '极光影视', '极光影视', 'https://hellociqryx6e.com/', 'https://obs.yinruifei.com/upload/site_ico/20240624-1/76e60462ea139ea94637a442852adf71_180x180.png', '["高清"]', 5, 0, 1, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 32
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://hellociqryx6e.com/' OR name = '极光影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 7, 'SubHD', 'SubHD', 'https://subhd.tv/', 'https://subhd.tv/favicon.ico', '["字幕","海外剧","美国","高清"]', 5, 0, 1, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 5
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://subhd.tv/' OR name = 'SubHD');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 7, '神叨字幕组', '神叨字幕组', 'https://www.shenbibi.com/', 'https://www.shenbibi.com/favicon.ico', '["免费","字幕","会员制","不可注册"]', 5, 0, 1, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 6
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.shenbibi.com/' OR name = '神叨字幕组');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '云盘资源社区', '云盘资源社区', 'https://yunpan1.cc/', 'https://yunpan1.cc/favicon.ico', '["关注公众号","网盘资源"]', 5, 0, 1, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 9
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://yunpan1.cc/' OR name = '云盘资源社区');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '韩饭网', '韩饭网', 'https://www.hanfan.cc/', 'https://www.hanfan.cc/favicon.ico', '["支持下载","海外剧","韩国"]', 5, 0, 1, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 33
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.hanfan.cc/' OR name = '韩饭网');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '人人影视下载分享', '人人影视下载分享', 'https://yyets.click/', 'https://yyets.click/favicon.ico', '["支持下载"]', 5, 0, 1, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 34
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://yyets.click/' OR name = '人人影视下载分享');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '漫猫动漫BT下载', '漫猫动漫BT下载', 'http://www.comicat.org/', 'http://www.comicat.org/favicon.ico', '["动漫","支持下载","日本","海外剧","速度快"]', 5, 0, 1, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 10
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'http://www.comicat.org/' OR name = '漫猫动漫BT下载');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 10, '短剧剧', '短剧剧', 'https://duanjujui.com/', 'https://duanjujui.com/upload/site_favicon/20260724-1/f29f24c77983169a33adb1b8abd0e2b4.jpg', '["NEW","短剧","免费"]', 5, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 1
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://duanjujui.com/' OR name = '短剧剧');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '优聚搜', '优聚搜', 'https://jujuso.com/', 'https://jujuso.com/favicon.ico', '["会员制"]', 5, 0, 1, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 35
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://jujuso.com/' OR name = '优聚搜');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '奈斯搜索', '奈斯搜索', 'https://www.niceso.net/', 'https://www.niceso.net/favicon.ico', '["免费","无广告","阿里盘","关注公众号"]', 5, 0, 1, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 10
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.niceso.net/' OR name = '奈斯搜索');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 4, '小马盘', '小马盘', 'https://www.xiaomapan.com/', 'https://www.xiaomapan.com/favicon.ico', '["实名制","阿里盘","公众号关注"]', 5, 0, 1, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 11
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.xiaomapan.com/' OR name = '小马盘');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'trace.moe', 'trace.moe', 'https://trace.moe/', 'https://trace.moe/favicon.png', '["动漫","日本"]', 5, 0, 1, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 11
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://trace.moe/' OR name = 'trace.moe');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 5, '天府泰剧', '天府泰剧', 'https://weibo.com/tfthaimovie/', 'https://weibo.com/favicon.ico', '["微博","海外剧","泰国","封禁中"]', 5, 0, 1, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 5
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://weibo.com/tfthaimovie/' OR name = '天府泰剧');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '虾米解析', '虾米解析', 'https://jx.xmflv.com/?url=/', 'https://jx.xmflv.com/favicon.ico', '["免费","高清"]', 5, 0, 0, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 36
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://jx.xmflv.com/?url=/' OR name = '虾米解析');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'M3U8.TV', 'M3U8.TV', 'https://jx.m3u8.tv/jiexi/?url=/', 'https://jx.m3u8.tv/favicon.ico', '["高清","免费"]', 5, 0, 0, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 37
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://jx.m3u8.tv/jiexi/?url=/' OR name = 'M3U8.TV');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'PlayM3U8', 'PlayM3U8', 'https://www.playm3u8.cn/jiexi.php?url=/', 'https://favicon.cccyun.cc/www.playm3u8.cn', '["免费","无广告"]', 5, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 38
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.playm3u8.cn/jiexi.php?url=/' OR name = 'PlayM3U8');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'TVBox安卓电视盒子', 'TVBox安卓电视盒子', 'https://qianfangzy.com/40541.html/', 'https://qianfangzy.com/favicon.ico', '["免费"]', 5, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 39
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://qianfangzy.com/40541.html/' OR name = 'TVBox安卓电视盒子');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'ZY Player播放器', 'ZY Player播放器', 'https://zyplayer.fun/', 'https://zyplayer.fun/favicon.ico', '["免费","高清"]', 5, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 40
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://zyplayer.fun/' OR name = 'ZY Player播放器');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '电视盒子的APP合集', '电视盒子的APP合集', 'https://qianfangzy.com/?s=TV/', 'https://qianfangzy.com/favicon.ico', '["免费","高清"]', 5, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 41
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://qianfangzy.com/?s=TV/' OR name = '电视盒子的APP合集');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '7080网', '7080网', 'https://7080.wang/', 'https://7080.wang/favicon.ico', '["免费","高清"]', 5, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 42
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://7080.wang/' OR name = '7080网');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, '茶杯狐', '茶杯狐', 'https://cupfox.app/', 'https://cupfox.app/favicon.ico', '["免费","高清"]', 5, 0, 0, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 3
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://cupfox.app/' OR name = '茶杯狐');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '豌豆免费影视', '豌豆免费影视', 'https://www.wandou.la/', 'https://www.wandou.la/favicon.ico', '["免费"]', 5, 0, 0, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 43
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.wandou.la/' OR name = '豌豆免费影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '青麦', '青麦', 'https://www.qmtv.pro/', 'https://www.qmtv.pro/favicon.ico', '["资源丰富"]', 5, 0, 0, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 44
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.qmtv.pro/' OR name = '青麦');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 3, '搜片.com', '搜片.com', 'https://soupian.one/', 'https://soupian.one/favicon.ico', '["免费","高清"]', 5, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 4
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://soupian.one/' OR name = '搜片.com');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '哎呦不错网', '哎呦不错网', 'https://aiyoubucuo.com/', 'https://aiyoubucuo.com/favicon.ico', '["免费","高清"]', 5, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 45
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://aiyoubucuo.com/' OR name = '哎呦不错网');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '看片狂人', '看片狂人', 'https://www.kpkuang.fun/', 'https://www.kpkuang.fun/favicon.ico', '["免费","高清"]', 5, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 46
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.kpkuang.fun/' OR name = '看片狂人');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, 'MOFLIX影院', 'MOFLIX影院', 'http://4.567.li/', 'http://4.567.li/favicon.ico', '["速度快"]', 5, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 7
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'http://4.567.li/' OR name = 'MOFLIX影院');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'IPTV直播源', 'IPTV直播源', 'https://github.com/wang987742/fanmingming/', 'https://github.com/favicon.ico', '["免费","高清"]', 5, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 47
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://github.com/wang987742/fanmingming/' OR name = 'IPTV直播源');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'NT动漫', 'NT动漫', 'https://www.ntdm9.com/', 'https://www.ntdm9.com/favicon.ico', '["动漫"]', 5, 0, 0, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 12
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.ntdm9.com/' OR name = 'NT动漫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '百思派电影', '百思派电影', 'https://www.bestpipe.cn/', 'https://www.bestpipe.cn/favicon.ico', '["免费","海外资源"]', 5, 0, 0, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 8
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.bestpipe.cn/' OR name = '百思派电影');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '555影视', '555影视', 'https://www.55yy8.com/', 'https://www.55yy8.com/favicon.ico', '["免费","高清"]', 5, 0, 0, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 48
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.55yy8.com/' OR name = '555影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '樱花视频', '樱花视频', 'https://www.dcjyb.com/', 'https://www.dcjyb.com/favicon.ico', '["速度快"]', 5, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 49
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.dcjyb.com/' OR name = '樱花视频');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '豆花影院', '豆花影院', 'https://www.widiz.com/', 'https://www.widiz.com/favicon.ico', '["免费","无广告","速度快"]', 5, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 9
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.widiz.com/' OR name = '豆花影院');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, 'iKanBot', 'iKanBot', 'https://v.aikanbot.com/', 'https://v.aikanbot.com/favicon.ico', '["免费","高清"]', 5, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 50
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://v.aikanbot.com/' OR name = 'iKanBot');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '蛋蛋兔', '蛋蛋兔', 'https://www.dandantu.cc/', 'https://favicon.cccyun.cc/www.dandantu.cc', '["免费","无广告"]', 5, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 51
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.dandantu.cc/' OR name = '蛋蛋兔');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '星颜社', '星颜社', 'https://kvariety.news/', 'https://thousand-realms-prod.oss-cn-guangzhou.aliyuncs.com/media/DM_20251103143814_001-removebg-preview-300x300.png?x-oss-process=image/resize,m_pad,w_32,h_32,color_00000000/format,png', '["NEW","韩国","韩综","K-POP","资讯"]', 5, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 52
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://kvariety.news/' OR name = '星颜社');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '泰小圈', '泰小圈', 'https://txquu.com/', 'https://favicon.cccyun.cc/txquu.com', '["免费","高清"]', 5, 0, 0, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 53
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://txquu.com/' OR name = '泰小圈');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '茅台资源站', '茅台资源站', 'https://mtzy.me/', 'https://mtzy.me/favicon.ico', '["高清","资源丰富"]', 5, 0, 0, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 54
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://mtzy.me/' OR name = '茅台资源站');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '最强最全国内外AI神器！', '最强最全国内外AI神器推荐！', 'https://qianfangzy.com/126675.html/', 'https://qianfangzy.com/favicon.ico', '["免费","高清"]', 5, 0, 1, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 55
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://qianfangzy.com/126675.html/' OR name = '最强最全国内外AI神器！');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '影剧资源', '影剧资源', 'https://yjzy.tv/', 'https://yjzy.tv/favicon.ico', '["资源丰富"]', 5, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 56
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://yjzy.tv/' OR name = '影剧资源');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'Anime1.in 動畫線上看', 'Anime1.in 動畫線上看', 'https://anime1.in/', 'https://anime1.in/apple-touch-icon.png', '["动漫"]', 5, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 13
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://anime1.in/' OR name = 'Anime1.in 動畫線上看');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'Omofun动漫', 'Omofun动漫', 'https://cn.211dm.com/', 'https://cn.211dm.com/template/the4/statics/img/favicon.ico', '["动漫","支持下载","资源丰富"]', 5, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 14
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://cn.211dm.com/' OR name = 'Omofun动漫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '火车太堵', '火车太堵', 'https://www.tdgo.shop/', 'https://m.360buyimg.com/i/jfs/t1/312869/15/22473/40397/689031f2Fd3716602/5b90d45e3392cebd.png', '["高清"]', 5, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 57
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.tdgo.shop/' OR name = '火车太堵');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '皮皮妖', '皮皮妖', 'https://www.pipiyao.cc/', 'https://www.pipiyao.cc/mxtheme/images/favicon.png', '["只支持手机观看"]', 5, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 58
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.pipiyao.cc/' OR name = '皮皮妖');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '蜜柑计划', '蜜柑计划', 'https://mikan.tangbai.cc/', 'https://mikan.tangbai.cc/images/favicon.ico?v=2', '["动漫","支持下载"]', 5, 0, 0, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 15
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://mikan.tangbai.cc/' OR name = '蜜柑计划');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 6, '类似电影', '类似电影', 'https://leisidianying.com/', 'https://leisidianying.com/img_zh/favicon/favicon-96x96.png', '["电影推荐"]', 5, 0, 1, 'from-amber-50/40 to-orange-50/40 dark:from-amber-950/20 dark:to-orange-950/20', 10
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://leisidianying.com/' OR name = '类似电影');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '路漫漫在线动漫', '路漫漫在线动漫', 'https://www.lmm96.com/', 'https://www.lmm58.com/template/jable/statics/icon/favicon.ico', '["动漫"]', 5, 0, 0, 'from-sky-50/40 to-blue-50/40 dark:from-sky-950/20 dark:to-blue-950/20', 16
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.lmm96.com/' OR name = '路漫漫在线动漫');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 1, '4k影视-高清在线 - 4k影视', '4k影视-高清在线 - 4k影视', 'https://www.4kvm.tv/', 'https://www.4kvm.tv/wp-content/uploads/2020/07/385d1786e61233.png', '["4K","高清"]', 5, 0, 0, 'from-rose-50/40 to-pink-50/40 dark:from-rose-950/20 dark:to-pink-950/20', 59
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.4kvm.tv/' OR name = '4k影视-高清在线 - 4k影视');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'SeaTV 24', 'SeaTV 24', 'https://seatv-24.xyz/', 'https://i0.wp.com/seatv-24.xyz/wp-content/uploads/2023/12/cropped-Favicon-32x32.png', '["4K","动漫","高清"]', 5, 0, 0, 'from-orange-50/40 to-red-50/40 dark:from-orange-950/20 dark:to-red-950/20', 17
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://seatv-24.xyz/' OR name = 'SeaTV 24');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '次元城动画', '次元城动画', 'https://www.cycani.org/', 'https://www.cycani.org/upload/site/20240319-1/25e700991446a527804c82a744731b60.png', '["动漫"]', 5, 0, 0, 'from-purple-50/40 to-pink-50/40 dark:from-purple-950/20 dark:to-pink-950/20', 18
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.cycani.org/' OR name = '次元城动画');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, 'E站-E站弹幕网', 'E站-E站弹幕网', 'https://www.ezdmw.site/', 'https://favicon.cccyun.cc/www.ezdmw.site', '["动漫","弹幕","支持下载"]', 5, 0, 0, 'from-green-50/40 to-emerald-50/40 dark:from-green-950/20 dark:to-emerald-950/20', 19
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.ezdmw.site/' OR name = 'E站-E站弹幕网');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '🍉西瓜卡通', '🍉西瓜卡通', 'https://cn.xgcartoon.com/', 'https://cn.xgcartoon.com/xgct/icon/apple-touch-icon.png', '["动漫"]', 5, 0, 0, 'from-cyan-50/40 to-blue-50/40 dark:from-cyan-950/20 dark:to-blue-950/20', 20
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://cn.xgcartoon.com/' OR name = '🍉西瓜卡通');
INSERT INTO sites (category_id, name, description, url, logo_url, tags, rating, is_hot, is_recommended, bg_gradient, sort_order)
SELECT 2, '二矿动漫', '二矿动漫', 'https://www.2rk.cc/', 'https://www.2rk.cc/favicon.ico', '["4K","动漫","无广告","高清"]', 5, 0, 0, 'from-indigo-50/40 to-purple-50/40 dark:from-indigo-950/20 dark:to-purple-950/20', 21
WHERE NOT EXISTS (SELECT 1 FROM sites WHERE url = 'https://www.2rk.cc/' OR name = '二矿动漫');