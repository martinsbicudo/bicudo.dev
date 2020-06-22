const constants = require('./conf/constants');

const withPlugins = require('next-compose-plugins');
const withESLint = constants.IS_DEV ? require('next-eslint') : (_) => _;

const withMDX = require('@next/mdx')();

const aliases = require('./conf/webpack/aliases');

const nextConfig = {
  webpack(config) {
    const customConfig = {
      ...config,
    };

    customConfig.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
    };

    return customConfig;
  },
};

module.exports = withPlugins([withESLint, withMDX], nextConfig);
