const { splitLines, joinLines } = require('./stringUtils.js');

const lastNLines = (lines, count) => count ? lines.slice(-count) : [];

const tail = (content, count) => {
  const lines = splitLines(content);
  return joinLines(lastNLines(lines, count));
};

exports.tail = tail;
exports.lastNLines = lastNLines;
