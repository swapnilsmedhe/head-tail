const assert = require('assert');

const mockReadFile = (mockFiles, error) => {
  return (fileName, encoding) => {
    assert.strictEqual(encoding, 'utf8');
    if (!mockFiles[fileName]) {
      throw error;
    }
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
