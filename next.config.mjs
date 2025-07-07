/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ✅ Prevent Next.js from type-checking during build
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

export default nextConfig;
