const constants = require('./conf/constants');

const withESLint = constants.IS_DEV ? require('next-eslint') : (_) => _;

const aliases = require('./conf/webpack/aliases');

module.exports = withESLint({
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
});
