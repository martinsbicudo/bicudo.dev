const watch = require('node-watch');

const generate = require('./generate');

generate();

if (process.env.WATCH_POSTS === 'true') {
  watch(generate.postsPath, () => {
    generate();
  });
}
