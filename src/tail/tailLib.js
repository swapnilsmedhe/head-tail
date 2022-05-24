const tail = (content, count) => {
  const lines = content.split('\n');
  const tailedLines = lines.slice(-count);
  return tailedLines.join('\n');
};

exports.tail = tail;
