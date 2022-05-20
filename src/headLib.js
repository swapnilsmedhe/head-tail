const { splitLines, joinLines } = require('./stringUtils.js');

const firstNLines = (lines, count) => lines.slice(0, count);

const head = (content, { name: option, value }) => {
  const lines = splitLines(content);
  return joinLines(firstNLines(lines, value));
};

exports.head = head;
exports.firstNLines = firstNLines;
