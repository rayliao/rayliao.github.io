/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  // i18n: {
  //   locales: ["en", "zh-Hant", "zh-Hans", "jp", "fr", "ko"],
  //   defaultLocale: "en",
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
