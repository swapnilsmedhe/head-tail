const assert = require('assert');
const { head } = require('../src/headLib.js');

describe('head', () => {
  it('should give all lines if the content has less than 11 lines', () => {
    assert.strictEqual(head('hello'), 'hello');
    assert.strictEqual(head('hello\nhi'), 'hello\nhi');
    assert.strictEqual(head('hello\nhi\nbye'), 'hello\nhi\nbye');
  });

  it('should only give 10 lines if the content has more than 10 lines', () => {
    const letters = 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk';
    const expected = 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj';
    return assert.strictEqual(head(letters), expected);
  });
});
