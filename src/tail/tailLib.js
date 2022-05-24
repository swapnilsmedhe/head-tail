const tail = (content) => {
  const lines = content.split('\n');
  const tailedLines = lines.slice(-10);
  return tailedLines.join('\n');
};

exports.tail = tail;
