const { withNetlify } = require('@netlify/next');

const nextConfig = {
  // Your existing config here
  webpack(config) {
    config.module.rules.push({
      test: /pdf\.worker\.js$/,
      type: 'asset/resource',
    });

    return config;
  },
};

module.exports = withNetlify(nextConfig);
