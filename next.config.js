const constants = require("./conf/constants");

const withESLint = constants.IS_DEV ? require("next-eslint") : (_) => _;

module.exports = withESLint();
