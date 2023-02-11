/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["da", "en", "uk"],
        defaultLocale: "da",
    },
};

module.exports = nextConfig;
