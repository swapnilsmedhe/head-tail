const assert = require('assert');
const { tail, lastNLines } = require('../../src/tail/tailLib');

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
