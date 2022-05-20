const { splitLines, joinLines } = require('./stringUtils.js');

const firstNLines = (lines, count) => lines.slice(0, count);

const head = (content) => {
  const lines = splitLines(content);
  return joinLines(firstNLines(lines, 10));
};

exports.head = head;
exports.firstNLines = firstNLines;
