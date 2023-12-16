/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
