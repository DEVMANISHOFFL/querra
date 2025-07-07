/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /pdf\.worker\.js$/,
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = nextConfig;
