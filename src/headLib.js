const { parseArgs } = require('./parseArgs.js');
const { split, join } = require('./stringUtils.js');

const firstNElements = (elements, count) => elements.slice(0, count);

const head = (content, { name: option, value }) => {
  const delimeter = option === 'lines' ? '\n' : '';
  const splitContent = split(content, delimeter);
  return join(firstNElements(splitContent, value), delimeter);
};

const headMain = (readFile, ...args) => {
  const { files, option } = parseArgs(args);
  const content = readFile(files[0], 'utf8');
  return head(content, option);
};

exports.headMain = headMain;
exports.head = head;
exports.firstNElements = firstNElements;
