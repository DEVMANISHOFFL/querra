/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Static HTML export (important for Netlify)
  trailingSlash: true, // ✅ Ensures Netlify routing works
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

export default nextConfig;
