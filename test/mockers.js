const assert = require('assert');

const mockReadFile = (mockFiles) => {
  return (fileName, encoding) => {
    assert.strictEqual(encoding, 'utf8');
    assert.ok(Object.keys(mockFiles).includes(fileName));
    return mockFiles[fileName];
  };
};

const mockConsole = (contents, ...args) => {
  let index = 0;
  return (actualText) => {
    assert.ok(index < args.length);
    assert.equal(actualText, args[index]);
    contents.push(actualText);
    index++;
  };
};

exports.mockConsole = mockConsole;
exports.mockReadFile = mockReadFile;
