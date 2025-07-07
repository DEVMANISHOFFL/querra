/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export

  typescript: {
    ignoreBuildErrors: true, // Avoids breaking builds due to TS errors (use cautiously)
  },

  webpack(config) {
    config.module.rules.push({
      test: /pdf\.worker\.js$/,
      type: 'asset/resource', // Used for loading custom PDF workers
    });
    return config;
  },
};

module.exports = nextConfig;
