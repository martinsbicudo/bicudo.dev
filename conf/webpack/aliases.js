const path = require('path');

module.exports = {
  '~': path.resolve('.'),
  '@Conf': path.resolve('./conf'),
  '@Utils': path.resolve('./utils'),
  '@Context': path.resolve('./context'),
  '@Hook': path.resolve('./hook'),
  '@Common': path.resolve('./components/common'),
  '@Container': path.resolve('./components/container'),
  '@Presentation': path.resolve('./components/presentation'),
};
