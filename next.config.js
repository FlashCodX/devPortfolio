/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    reactRemoveProperties: true,
  },
  images: {
    domains: ["swiperjs.com"],
  },
};

module.exports = nextConfig;
