const assert = require('assert');
const { tail, lastNLines } = require('../../src/tail/tailLib');

describe('tail', () => {
  it('should give all lines if count is gretear than number of lines', () => {
    assert.strictEqual(tail('hello', 3), 'hello');
    assert.strictEqual(tail('hello\nhi', 10), 'hello\nhi');
  });

  it('should give last n lines of given contents', () => {
    assert.strictEqual(tail('sea\nlake\nriver', 2), 'lake\nriver');
    assert.strictEqual(tail('sea\nlake\nriver\npond\ngulf', 3),
      'river\npond\ngulf');
    assert.strictEqual(tail('a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk', 10),
      'b\nc\nd\ne\nf\ng\nh\ni\nj\nk');
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
