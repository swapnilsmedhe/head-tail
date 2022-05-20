const assert = require('assert');
const { headMain } = require('../src/headLib.js');

const mockReadFile = (mockFile, content) => {
  return (fileName, encoding) => {
    assert.strictEqual(fileName, mockFile);
    assert.strictEqual(encoding, 'utf8');
    return content;
  };
};

describe('headMain', () => {
  it('should give all lines if file has less than 11 lines', () => {
    let mockedReadFile = mockReadFile('a.txt', 'hello');
    assert.strictEqual(headMain(mockedReadFile, 'a.txt'), 'hello');

    mockedReadFile = mockReadFile('b.txt', 'sea\nriver');
    assert.strictEqual(headMain(mockedReadFile, 'b.txt'), 'sea\nriver');
  });
});
