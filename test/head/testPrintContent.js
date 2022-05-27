const assert = require('assert');
const { printContent } = require('../../src/head/printContent.js');
const { mockConsole } = require('./mockers.js');

describe('print', () => {
  it('should print output of single file if it was read succesfully', () => {
    const contents = [];
    const mockLog = mockConsole(contents, 'hello');
    const mockError = mockConsole();
    const console = { log: mockLog, error: mockError };
    const headsOfFiles = [
      { file: 'a.txt', content: 'hello', isFileRead: true }
    ];

    printContent(headsOfFiles, console,);
    assert.deepStrictEqual(contents, ['hello']);
  });

  it('should print error if file was read unsuccesfully', () => {
    const contents = [];
    const error = 'head: a.txt: No such file or directory';
    const mockLog = mockConsole();
    const mockError = mockConsole(contents, error);
    const console = { log: mockLog, error: mockError };
    const headsOfFiles = [
      { file: 'a.txt', content: '', isFileRead: false }
    ];

    printContent(headsOfFiles, console);
    assert.deepStrictEqual(contents, [error]);
  });

  it('should print output of multiple files if were read succesfully', () => {
    const contents = [];
    const mockLog = mockConsole(contents,
      '==> a.txt <==\nhello',
      '==> b.txt <==\nhi'
    );

    const mockError = mockConsole();
    const headsOfFiles = [
      { file: 'a.txt', content: 'hello', isFileRead: true },
      { file: 'b.txt', content: 'hi', isFileRead: true }
    ];

    const console = { log: mockLog, error: mockError };
    printContent(headsOfFiles, console);
    assert.deepStrictEqual(contents, [
      '==> a.txt <==\nhello',
      '==> b.txt <==\nhi'
    ]);
  });

  it('should print output and error if some files read unsuccesfully', () => {
    const logContents = [];
    const errorContents = [];
    const error = 'head: b.txt: No such file or directory';
    const mockLog = mockConsole(logContents, '==> a.txt <==\nsea');
    const mockError = mockConsole(errorContents, error);

    const headsOfFiles = [
      { file: 'a.txt', content: 'sea', isFileRead: true },
      { file: 'b.txt', content: '', isFileRead: false }
    ];

    const console = { log: mockLog, error: mockError };
    printContent(headsOfFiles, console);
    assert.deepStrictEqual(logContents, ['==> a.txt <==\nsea']);
    assert.deepStrictEqual(errorContents, [error]);
  });
});
