const { parseArgs } = require('./parseArgs.js');
const { splitLines, joinLines } = require('./stringUtils.js');
const { print } = require('./print.js');

const firstNLines = (content, count) => {
  const lines = splitLines(content);
  return joinLines(lines.slice(0, count));
};

const firstNCharacters = (content, count) => content.substring(0, count);

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

const headFile = (file, head, { value }, readFile) => {
  const { fileContent, errorNo } = readFileContent(file, readFile);

  if (errorNo) {
    return { file, errorMessage: generateErrorMessage(file) };
  }
  const content = head(fileContent, value);
  return { file, content };
};

const mapHead = (option) =>
  option.name === 'lines' ? firstNLines : firstNCharacters;

const getExitCode = (headsOfFiles) =>
  headsOfFiles.some(({ errorMessage }) => errorMessage) ? 1 : 0;

const headMain = (args, readFile, console) => {
  const { files, option } = parseArgs(args);
  const head = mapHead(option);
  const headOfFiles = files.map((file) =>
    headFile(file, head, option, readFile));

  print(headOfFiles, console);
  return getExitCode(headOfFiles);
};

exports.headMain = headMain;
exports.firstNLines = firstNLines;
exports.firstNCharacters = firstNCharacters;
exports.headFile = headFile;
exports.readFileContent = readFileContent;
