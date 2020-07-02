const moment = require('moment');
const path = require('path');
const write = require('write');

const postDate = moment().format('DD/MM/YYYY');
const postName = process.env.POST_NAME;
const fileName = postName.toLowerCase().replace(/ +/g, '-');

function getPath(file) {
  return path.resolve(file);
}

async function writePostMDX() {
  const file = await write.sync(
    getPath(`posts/${fileName}.mdx`),
    `export const meta = {
  publishDate: '${postDate}',
  title: '${postName}',
}

Hello
=====

Lorem ipsum dolor sit amet.`
  );

  return file;
}

writePostMDX();
