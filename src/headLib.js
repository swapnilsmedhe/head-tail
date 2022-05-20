const { splitLines, joinLines } = require('./stringUtils.js');

const head = (content) => {
  const lines = splitLines(content);
  const firstTenLines = lines.slice(0, 10);
  return joinLines(firstTenLines);
};

exports.head = head;
