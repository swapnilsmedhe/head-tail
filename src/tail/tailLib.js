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

exports.tail = tail;
exports.lastNLines = lastNLines;
exports.lastNCharacters = lastNCharacters;
