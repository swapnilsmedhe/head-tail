const assert = require('assert');
const { tailMain } = require('../../src/tail/tailLib');

const mockReadFile = (mockFiles) => {
  return (fileName, encoding) => {
    assert.strictEqual(encoding, 'utf8');
    assert.ok(Object.keys(mockFiles).includes(fileName));
    return mockFiles[fileName];
  };
};

describe('tailMain', () => {
  it('should give last 10 lines of file if no options specified', () => {
    const readFileMock = mockReadFile({ 'a.txt': 'hello' });
    assert.strictEqual(tailMain(readFileMock, 'a.txt'), 'hello');
  });
});
