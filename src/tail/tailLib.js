const { splitLines, joinLines } = require('./stringUtils.js');

const tail = (content, count) => {
  const lines = splitLines(content);
  const tailedLines = lines.slice(-count);
  return joinLines(tailedLines);
};

exports.tail = tail;
