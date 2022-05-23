const { parseArgs } = require('./parseArgs.js');
const { split, join } = require('./stringUtils.js');
const { print } = require('./print.js');

const firstNElements = (elements, count) => elements.slice(0, count);

const head = (content, { name: option, value }) => {
  const delimeter = option === 'lines' ? '\n' : '';
  const splitContent = split(content, delimeter);
  return join(firstNElements(splitContent, value), delimeter);
};

const headMain = (readFile, consoleLog, consoleError, ...args) => {
  const { files, option } = parseArgs(args);
  const contents = files.map((file) => {
    let content;
    let isFileRead = true;
    try {
      const fileContent = readFile(file, 'utf8');
      content = head(fileContent, option);
    } catch (error) {
      isFileRead = false;
    }
    return { file, content, isFileRead };
  });
  print(consoleLog, consoleError, contents);
};

exports.headMain = headMain;
exports.head = head;
exports.firstNElements = firstNElements;
