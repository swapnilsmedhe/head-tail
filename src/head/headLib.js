const { parseArgs } = require('./parseArgs.js');
const { split, join } = require('./stringUtils.js');
const { print } = require('./print.js');

const firstNElements = (elements, count) => elements.slice(0, count);

const determineDelimeter = (option) => option === 'lines' ? '\n' : '';

const head = (content, { name: option, value }) => {
  const delimeter = determineDelimeter(option);
  const splitContent = split(content, delimeter);
  const headOfContent = firstNElements(splitContent, value);
  return join(headOfContent, delimeter);
};

const readFileContent = (file, readFile) => {
  try {
    const fileContent = readFile(file, 'utf8');
    return { file, fileContent };
  } catch (error) {
    return { file, errorNo: error.errno };
  }
};

const generateErrorMessage = (file) =>
  `head: ${file}: No such file or directory`;

const headFile = (file, option, readFile) => {
  const { fileContent, errorNo } = readFileContent(file, readFile);

  if (errorNo) {
    return { file, errorMessage: generateErrorMessage(file) };
  }
  const content = head(fileContent, option);
  return { file, content };
};

const getExitCode = (headsOfFiles) =>
  headsOfFiles.some(({ errorMessage }) => errorMessage) ? 1 : 0;

const headMain = (args, readFile, console) => {
  const { files, option } = parseArgs(args);
  const headOfFiles = files.map((file) => headFile(file, option, readFile));
  print(headOfFiles, console);
  return getExitCode(headOfFiles);
};

exports.headMain = headMain;
exports.head = head;
exports.firstNElements = firstNElements;
exports.headFile = headFile;
exports.readFileContent = readFileContent;
