import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://rayliao.com/",
  author: "Ray Liao",
  desc: "浩瀚宇宙，只是尽力记录自己消耗的时光 | rayliao,博客,前端,互联网,技术,生活,客家,广州,摄影,电影",
  title: "Ray's Blog",
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/rayliao",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ray__liao/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:rayliao89@outlook.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Bento",
    href: "https://bento.me/rayliao",
    linkTitle: `${SITE.title} on Bento`,
    active: true,
  },
];