const assert = require('assert');
const { tail } = require('../../src/tail/tailLib');

describe('tail', () => {
  it('should give all lines if count is gretear than number of lines', () => {
    assert.strictEqual(tail('hello'), 'hello');
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
