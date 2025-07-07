// const { withNetlify } = require('@netlify/next');
const {withNetlify} = require('@netlify/next')

module.exports = withNetlify({
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
});
