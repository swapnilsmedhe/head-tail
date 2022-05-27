const { parseArgs } = require('./parseArgs.js');
const { split, join } = require('./stringUtils.js');
const { printContent } = require('./printContent.js');

const firstNElements = (elements, count) => elements.slice(0, count);

const head = (content, { name: option, value }) => {
  const delimeter = option === 'lines' ? '\n' : '';
  const splitContent = split(content, delimeter);
  return join(firstNElements(splitContent, value), delimeter);
};

const headFile = (readFile, file, option) => {
  let content;
  let isFileRead = true;
  try {
    const fileContent = readFile(file, 'utf8');
    content = head(fileContent, option);
  } catch (error) {
    isFileRead = false;
  }
  return { file, content, isFileRead };
};

const getExitCode = (headsOfFiles) =>
  headsOfFiles.some(({ isFileRead }) => !isFileRead) ? 1 : 0;

const headMain = (readFile, consoleLog, consoleError, ...args) => {
  const { files, option } = parseArgs(args);
  const headsOfFiles = files.map((file) => headFile(readFile, file, option));
  printContent(consoleLog, consoleError, headsOfFiles);
  return getExitCode(headsOfFiles);
};

exports.headMain = headMain;
exports.head = head;
exports.firstNElements = firstNElements;
exports.headFile = headFile;
