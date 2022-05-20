const { splitLines, joinLines } = require('./stringUtils.js');

const firstNLines = (lines, count) => lines.slice(0, count);

const head = (content, count) => {
  const lines = splitLines(content);
  return joinLines(firstNLines(lines, count));
};

exports.head = head;
exports.firstNLines = firstNLines;
