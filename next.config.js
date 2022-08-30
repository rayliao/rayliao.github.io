/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["zh-Hant", "zh-Hans", "en", "jp", "fr", "ko"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
