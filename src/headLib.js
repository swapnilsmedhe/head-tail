const head = (content) => {
  const lines = content.split('\n');
  const firstTenLines = lines.slice(0, 10);
  return firstTenLines.join('\n');
};

exports.head = head;
