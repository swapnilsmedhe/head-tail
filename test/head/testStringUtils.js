const assert = require('assert');
const { split, join } = require('../../src/head/stringUtils.js');

describe('split', () => {
  it('should split given content with delimeter "\\n" ', () => {
    assert.deepStrictEqual(split('hello\nhi', '\n'), ['hello', 'hi']);
  });

  it('should split given content with delimeter "|"', () => {
    assert.deepStrictEqual(split('sea|lake', '|'), ['sea', 'lake']);
  });

  it('should split given content with delimeter "" ', () => {
    assert.deepStrictEqual(split('ocean', ''), ['o', 'c', 'e', 'a', 'n']);
  });
});

describe('join', () => {
  it('should join given elements with delimeter "\\n"', () => {
    assert.strictEqual(join(['hello', 'hi'], '\n'), 'hello\nhi');
  });

  it('should join given elements with delimeter "|" ', () => {
    assert.strictEqual(join(['hi', 'hello'], '|'), 'hi|hello');
  });

  it('should join given elements with delimeter "" ', () => {
    assert.strictEqual(join(['sea', 'sky'], ''), 'seasky');
  });
});
