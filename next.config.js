const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["zh-Hant", "zh-Hans", "en", "jp", "fr", "ko"],
    defaultLocale: "en",
  },
};

module.exports = withContentlayer(nextConfig);
