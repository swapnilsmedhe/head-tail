const { parseArgs } = require('./parseArgs.js');
const { split, join } = require('./stringUtils.js');
const { printContent } = require('./printContent.js');

const firstNElements = (elements, count) => elements.slice(0, count);

const determineDelimeter = (option) => option === 'lines' ? '\n' : '';

const head = (content, { name: option, value }) => {
  const delimeter = determineDelimeter(option);
  const splitContent = split(content, delimeter);
  const headOfContent = firstNElements(splitContent, value);
  return join(headOfContent, delimeter);
};

const headFile = (readFile, file, option) => {
  try {
    const fileContent = readFile(file, 'utf8');
    const content = head(fileContent, option);
    return { file, content };
  } catch (error) {
    const errorMessage = `head: ${file}: No such file or directory`;
    return { file, errorMessage };
  }
};

const getExitCode = (headsOfFiles) =>
  headsOfFiles.some(({ errorMessage }) => errorMessage) ? 1 : 0;

const headMain = (args, readFile, console) => {
  const { files, option } = parseArgs(args);
  const headOfFiles = files.map((file) => headFile(readFile, file, option));
  printContent(headOfFiles, console);
  return getExitCode(headOfFiles);
};

exports.headMain = headMain;
exports.head = head;
exports.firstNElements = firstNElements;
exports.headFile = headFile;
