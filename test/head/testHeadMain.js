const assert = require('assert');
const { headMain } = require('../../src/head/headLib.js');
const { mockReadFile, mockConsole } = require('./mockers.js');

describe('headMain', () => {
  it('should print only 10 lines if file provided without any options', () => {
    const contents = [];
    const readFileMock = mockReadFile({ 'a.txt': 'hello' });
    const mockLog = mockConsole(contents, 'hello');
    const mockError = mockConsole();
    headMain(readFileMock, mockLog, mockError, 'a.txt');
    assert.deepStrictEqual(contents, ['hello']);
  });

  it('should only print n lines if -n option is provided', () => {
    const contents = [];
    const readFileMock = mockReadFile({ 'a.txt': 'a\nb\nc\nd\ne\nf' });
    const mockLog = mockConsole(contents, 'a\nb\nc\nd');
    const mockError = mockConsole();
    headMain(readFileMock, mockLog, mockError, '-n', '4', 'a.txt');
    assert.deepStrictEqual(contents, ['a\nb\nc\nd']);
  });

  it('should only print n characters if -c option is provided', () => {
    const contents = [];
    const readFileMock = mockReadFile({ 'a.txt': 'hello\nhi' });
    const mockLog = mockConsole(contents, 'he');
    const mockError = mockConsole();
    headMain(readFileMock, mockLog, mockError, '-c', '2', 'a.txt');
    assert.deepStrictEqual(contents, ['he']);
  });

  it('should print only 10 lines of each file if multiple files provided without any options', () => {
    const contents = [];
    const readFileMock = mockReadFile({
      'a.txt': 'hello\nhi',
      'b.txt': 'sea\nlake'
    });
    const mockLog = mockConsole(contents,
      '==> a.txt <==\nhello\nhi',
      '==> b.txt <==\nsea\nlake'
    );
    const mockError = mockConsole();
    headMain(readFileMock, mockLog, mockError, 'a.txt', 'b.txt');
    assert.deepStrictEqual(contents, [
      '==> a.txt <==\nhello\nhi',
      '==> b.txt <==\nsea\nlake'
    ]);
  });

  it('should print error if could not read a file', () => {
    const content = [];
    const error = 'head: b.txt: No such file or directory';
    const readFileMock = mockReadFile({ 'a.txt': 'hello' });
    const mockLog = mockConsole();
    const mockError = mockConsole(content, error);
    headMain(readFileMock, mockLog, mockError, 'b.txt');
    assert.deepStrictEqual(content, [error]);
  });

  it('should print lines along with error if some files could not read', () => {
    const logContent = [];
    const errorContent = [];
    const error = 'head: c.txt: No such file or directory';
    const readFileMock = mockReadFile({ 'a.txt': 'sea', 'b.txt': 'lake' });
    const mockLog = mockConsole(logContent, '==> a.txt <==\nsea');
    const mockError = mockConsole(errorContent, error);
    headMain(readFileMock, mockLog, mockError, 'a.txt', 'c.txt');
    assert.deepStrictEqual(logContent, ['==> a.txt <==\nsea']);
    assert.deepStrictEqual(errorContent, [error]);
  });
});
