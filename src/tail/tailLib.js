const splitLines = (content) => content.split('\n');
const joinLines = (lines) => lines.join('\n');

const tail = (content, count) => {
  const lines = splitLines(content);
  const tailedLines = lines.slice(-count);
  return joinLines(tailedLines);
};

exports.tail = tail;
