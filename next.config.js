/** @type {import('next').NextConfig} */

module.exports = {
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  images: {
    domains: ["localhost:3000"],
  },
  reactStrictMode: 'true',
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: true,
};

