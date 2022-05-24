const assert = require('assert');
const { tail, lastNLines, lastNCharacters } = require('../../src/tail/tailLib');

describe('tail', () => {
  it('should give all lines if count is gretear than number of lines', () => {
    let option = { name: 'lines', count: 3 };
    assert.strictEqual(tail('hello', option), 'hello');

    option = { name: 'lines', count: 10 };
    assert.strictEqual(tail('hello\nhi', option), 'hello\nhi');
  });

  it('should give last n lines of given contents', () => {
    let option = { name: 'lines', count: 2 };
    assert.strictEqual(tail('sea\nlake\nriver', option), 'lake\nriver');

    option = { name: 'lines', count: 3 };
    assert.strictEqual(tail('sea\nlake\nriver\npond\ngulf', option),
      'river\npond\ngulf');

    option = { name: 'lines', count: 10 };
    assert.strictEqual(tail('a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk', option),
      'b\nc\nd\ne\nf\ng\nh\ni\nj\nk');
  });

  it('should give last n characters if bytes option is specified', () => {
    let option = { name: 'bytes', count: 3 };
    assert.strictEqual(tail('hello', option), 'llo');

    option = { name: 'bytes', count: 7 };
    assert.strictEqual(tail('sea\nriver', option), 'a\nriver');

    option = { name: 'bytes', count: 10 };
    assert.strictEqual(tail('hi\nby\nhello', option), 'i\nby\nhello');
  });

  it('should not give any characters if count is 0', () => {
    const option = { name: 'bytes', count: 0 };
    assert.strictEqual(tail('hello', option), '');
  });
});

describe('lastNLines', () => {
  it('should give last n lines', () => {
    assert.deepStrictEqual(lastNLines(['hello', 'hi'], 1), ['hi']);
    assert.deepStrictEqual(lastNLines(['a', 'b', 'c', 'd'], 2), ['c', 'd']);
  });

  it('should not give any lines if given count is 0', () => {
    assert.deepStrictEqual(lastNLines(['hello', 'hi'], 0), []);
  });

  it('should not give any lines if lines empty', () => {
    assert.deepStrictEqual(lastNLines([], 3), []);
  });
});

describe('lastNCharacters', () => {
  it('should give last n characters', () => {
    assert.strictEqual(lastNCharacters('hello', 2), 'lo');
    assert.strictEqual(lastNCharacters('sea\nlake', 7), 'ea\nlake');
  });

  it('should not give any characters if count is 0', () => {
    assert.strictEqual(lastNCharacters('sea', 0), '');
  });
});
