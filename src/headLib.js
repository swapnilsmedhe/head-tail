const NEWLINE = '\n';

const splitLines = (content) => content.split(NEWLINE);
const joinLines = (lines) => lines.join(NEWLINE);

const head = (content) => {
  const lines = splitLines(content);
  const firstTenLines = lines.slice(0, 10);
  return joinLines(firstTenLines);
};

exports.head = head;
