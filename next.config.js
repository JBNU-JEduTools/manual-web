const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { withContentlayer } = require('next-contentlayer');

module.exports = withBundleAnalyzer(
  withContentlayer()({
    swcMinify: true,
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  })
);
