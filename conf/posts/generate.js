const camelcase = require('camelcase');
const glob = require('glob');
const path = require('path');
const write = require('write');

const { folder, ext } = {
  folder: 'posts/',
  ext: '.mdx',
};

function getPID(file) {
  const pid = file.replace(folder, '').replace(ext, '');

  return pid;
}

function getPath(file) {
  return path.resolve(file);
}

async function getContent() {
  const files = await glob.sync(`${folder}/*${ext}`);
  const imports = files.reduceRight(
    (currentImports, file) =>
      `import * as ${camelcase(getPID(file))} from '~/${file}';
${currentImports}`,
    ''
  );
  const exports = files.reduceRight(
    (currentImports, file) =>
      `export { ${camelcase(getPID(file))} };
${currentImports}`,
    ''
  );

  return `${imports}
${exports}`;
}

async function writePostsJS() {
  const posts = await getContent();
  const file = await write.sync(getPath('conf/posts/index.js'), posts);

  return file;
}

module.exports = writePostsJS;
module.exports.postsPath = getPath(folder);
