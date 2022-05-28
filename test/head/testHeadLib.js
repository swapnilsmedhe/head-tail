const assert = require('assert');
const lib = require('../../src/head/headLib.js');
const { headFile, readFileContent, firstNLines, firstNCharacters } = lib;
const { mockReadFile } = require('./mockers.js');

describe('firstNLines', () => {
  it('should give all lines if given count is greater than lines', () => {
    assert.strictEqual(firstNLines('hello', 3), 'hello');
    assert.strictEqual(firstNLines('ocean\nsea', 3), 'ocean\nsea');
  });

  it('should give n lines', () => {
    assert.strictEqual(firstNLines('ocean\nsea\nriver', 2), 'ocean\nsea');
    assert.strictEqual(firstNLines('sea\nriver\nlake\npond', 3),
      'sea\nriver\nlake');
  });

  it('should not give any lines if count is 0', () => {
    assert.strictEqual(firstNLines('sea\nlake', 0), '');
  });
});

describe('firstNCharacters', () => {
  it('should give all characters if count is greater than characters', () => {
    assert.strictEqual(firstNCharacters('by', 3), 'by');
    assert.strictEqual(firstNCharacters('hello', 8), 'hello');
  });

  it('should give n characters', () => {
    assert.strictEqual(firstNCharacters('ocean', 4), 'ocea');
    assert.strictEqual(firstNCharacters('sea\nriver', 5), 'sea\nr');
  });

  it('should not give any characters if count is 0', () => {
    assert.strictEqual(firstNCharacters('sea\nlake', 0), '');
  });
});

describe('headFile', () => {
  it('should give head of content of given file', () => {
    const readFileMock = mockReadFile({ 'a.txt': 'hello' });
    const option = { name: 'lines', value: 10 };
    const actual = headFile('a.txt', firstNCharacters, option, readFileMock);
    const expected = { file: 'a.txt', content: 'hello' };
    assert.deepStrictEqual(actual, expected);
  });

  it('should give error if could not read a file', () => {
    const error = { errno: 1 };
    const readFileMock = mockReadFile({ 'b.txt': 'sea' }, error);
    const option = { name: 'lines', value: 10 };
    const actual = headFile('a.txt', firstNLines, option, readFileMock);
    const expected = {
      file: 'a.txt', errorMessage: 'head: a.txt: No such file or directory'
    };

    assert.deepStrictEqual(actual, expected);
  });

  it('should only give n lines of given file', () => {
    const readFileMock = mockReadFile({ 'c.txt': 'ocean' });
    const option = { name: 'lines', value: 10 };
    const actual = headFile('c.txt', firstNLines, option, readFileMock);
    const expected = { file: 'c.txt', content: 'ocean' };
    assert.deepStrictEqual(actual, expected);
  });

  it('should give only n characters of given file', () => {
    const readFileMock = mockReadFile({ 'a.txt': 'all-rounder' });
    const option = { name: 'bytes', value: 5 };
    const actual = headFile('a.txt', firstNCharacters, option, readFileMock);
    const expected = { file: 'a.txt', content: 'all-r' };
    assert.deepStrictEqual(actual, expected);
  });
});

describe('readFileContent', () => {
  it('should give content of file if file read successfully', () => {
    const readFileMock = mockReadFile({ 'a.txt': 'ocean' });
    assert.deepStrictEqual(readFileContent('a.txt', readFileMock), {
      file: 'a.txt', fileContent: 'ocean'
    });
  });

  it('shoud give error if could not read file', () => {
    const readFileMock = mockReadFile({ 'c.txt': 'river' }, { errno: 1 });
    assert.deepStrictEqual(readFileContent('b.txt', readFileMock), {
      file: 'b.txt', errorNo: 1
    });
  });
});
