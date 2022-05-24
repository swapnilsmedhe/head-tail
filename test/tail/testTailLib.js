const assert = require('assert');
const { tail } = require('../../src/tail/tailLib');

describe('tail', () => {
  it('should give all lines if the contents are less than 11 lines', () => {
    assert.strictEqual(tail('hello'), 'hello');
    assert.strictEqual(tail('hello\nhi'), 'hello\nhi');
  });

  it('should only give last 10 lines if content has more than 10 lines', () => {
    assert.strictEqual(tail('a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk'),
      'b\nc\nd\ne\nf\ng\nh\ni\nj\nk');
  });
});
