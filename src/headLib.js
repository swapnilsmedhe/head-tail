const { split, join } = require('./stringUtils.js');

const firstNElements = (elements, count) => elements.slice(0, count);

const head = (content, { name: option, value }) => {
  const delimeter = option === 'lines' ? '\n' : '';
  const splitContent = split(content, delimeter);
  return join(firstNElements(splitContent, value), delimeter);
};

exports.head = head;
exports.firstNElements = firstNElements;
