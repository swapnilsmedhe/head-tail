const { splitLines, joinLines } = require('./stringUtils.js');

const lastNLines = (lines, count) => count ? lines.slice(-count) : [];

const lastNCharacters = (content, count) => {
  const totalCharacters = content.length;
  return content.substring(totalCharacters - count);
};

const tail = (content, { name: option, count }) => {
  if (option === 'bytes') {
    return lastNCharacters(content, count);
  }
  const lines = splitLines(content);
  return joinLines(lastNLines(lines, count));
};

const tailMain = (readFile, fileName) => {
  const content = readFile(fileName, 'utf8');
  return tail(content, { name: 'lines', count: 10 });
};

exports.tail = tail;
exports.tailMain = tailMain;
exports.lastNLines = lastNLines;
exports.lastNCharacters = lastNCharacters;
