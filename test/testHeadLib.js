const assert = require('assert');
const { head, firstNLines } = require('../src/headLib.js');

describe('head', () => {
  it('should give all lines if the content has less than 11 lines', () => {
    assert.strictEqual(head('hello'), 'hello');
    assert.strictEqual(head('hello\nhi'), 'hello\nhi');
    assert.strictEqual(head('hello\nhi\nbye'), 'hello\nhi\nbye');
  });

  it('should only give 10 lines if the content has more than 10 lines', () => {
    const letters = 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk';
    const expected = 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj';
    assert.strictEqual(head(letters), expected);
  });
});

describe('firstNLines', () => {
  it('should give first n from given lines', () => {
    assert.deepStrictEqual(firstNLines(['hello', 'hi'], 1), ['hello']);
    assert.deepStrictEqual(firstNLines(['a', 'b', 'c'], 2), ['a', 'b']);
  });

  it('should give all the lines if lines are less than given count', () => {
    assert.deepStrictEqual(firstNLines(['sea', 'river'], 5), ['sea', 'river']);
  });

  it('should not give any lines if count is 0', () => {
    return assert.deepStrictEqual(firstNLines(['sea', 'river'], 0), []);
  });

});
