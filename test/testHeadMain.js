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
  it('should not give more than 10 lines if options are not specified', () => {
    let mockedReadFile = mockReadFile('a.txt', 'hello');
    assert.strictEqual(headMain(mockedReadFile, 'a.txt'), 'hello');

    mockedReadFile = mockReadFile('b.txt', 'sea\nriver');
    assert.strictEqual(headMain(mockedReadFile, 'b.txt'), 'sea\nriver');
  });

  it('should only give n lines if -n option is specified', () => {
    let mockedReadFile = mockReadFile('a.txt', 'hi\nbye\nhello');
    assert.strictEqual(headMain(mockedReadFile, '-n', '2', 'a.txt'), 'hi\nbye');

    mockedReadFile = mockReadFile('b.txt', 'sea\nriver\nlake');
    assert.strictEqual(headMain(mockedReadFile, '-n', '1', 'b.txt'), 'sea');
  });

  it('should only give n characters if -c option is specified', () => {
    let mockedReadFile = mockReadFile('b.txt', 'sea\nlake');
    assert.strictEqual(headMain(mockedReadFile, '-c', '2', 'b.txt'), 'se');

    mockedReadFile = mockReadFile('c.txt', 'lake\nriver');
    assert.strictEqual(headMain(mockedReadFile, '-c', '6', 'c.txt'), 'lake\nr');
  });

  it('should report an error if unable to read a file', () => {
    const mockedReadFile = mockReadFile('b.txt', 'hello');
    assert.throws(() => headMain(mockedReadFile, 'a.txt'), {
      name: 'fileReadError',
      message: 'head: a.txt: No such file or directory'
    });
  });
});
