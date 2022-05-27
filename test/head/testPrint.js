const assert = require('assert');
const { print } = require('../../src/head/print.js');
const { mockConsole } = require('./mockers.js');

describe('print', () => {
  it('should print content of single file if contents are present', () => {
    const contents = [];
    const mockLog = mockConsole(contents, 'hello');
    const mockError = mockConsole();
    const console = { log: mockLog, error: mockError };
    const headOfFiles = [
      { file: 'a.txt', content: 'hello' }
    ];

    print(headOfFiles, console,);
    assert.deepStrictEqual(contents, ['hello']);
  });

  it('should print error if error message is present', () => {
    const contents = [];
    const error = 'head: a.txt: No such file or directory';
    const mockLog = mockConsole();
    const mockError = mockConsole(contents, error);
    const console = { log: mockLog, error: mockError };
    const headOfFiles = [
      { file: 'a.txt', errorMessage: 'head: a.txt: No such file or directory' }
    ];

    print(headOfFiles, console);
    assert.deepStrictEqual(contents, [error]);
  });

  it('should print content of multiple files if contents are present', () => {
    const contents = [];
    const mockLog = mockConsole(contents,
      '==> a.txt <==\nocean',
      '==> b.txt <==\nriver'
    );

    const mockError = mockConsole();
    const headOfFiles = [
      { file: 'a.txt', content: 'ocean' },
      { file: 'b.txt', content: 'river' }
    ];

    const console = { log: mockLog, error: mockError };
    print(headOfFiles, console);
    assert.deepStrictEqual(contents, [
      '==> a.txt <==\nocean',
      '==> b.txt <==\nriver'
    ]);
  });

  it('should print content and error if some files have error message', () => {
    const logContents = [];
    const errorContents = [];
    const error = 'head: b.txt: No such file or directory';
    const mockLog = mockConsole(logContents, '==> a.txt <==\nsea');
    const mockError = mockConsole(errorContents, error);

    const headOfFiles = [
      { file: 'a.txt', content: 'sea' },
      { file: 'b.txt', errorMessage: 'head: b.txt: No such file or directory' }
    ];

    const console = { log: mockLog, error: mockError };
    print(headOfFiles, console);
    assert.deepStrictEqual(logContents, ['==> a.txt <==\nsea']);
    assert.deepStrictEqual(errorContents, [error]);
  });
});
