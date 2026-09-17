export const SITE = {
  website: "https://zhangsizhenuist.github.io/",
  author: "章思哲",
  profile: "https://github.com/ZhangSiZhenuist",
  desc: "章思哲的个人博客：记录技术实践、学习过程与真实思考。",
  title: "章思哲",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "编辑此页",
    url: "https://github.com/ZhangSiZhenuist/ZhangSiZhenuist.github.io/edit/main/",
  },
  dynamicOgImage: false,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
