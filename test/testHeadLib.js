const assert = require('assert');
const { head, firstNLines } = require('../src/headLib.js');

describe('head', () => {
  it('should give all lines if count is greater than number of lines', () => {
    assert.strictEqual(head('hello', 3), 'hello');
    assert.strictEqual(head('hello\nhi', 5), 'hello\nhi');
    assert.strictEqual(head('hello\nhi\nbye', 9), 'hello\nhi\nbye');
  });

  it('should only give first n lines', () => {
    assert.strictEqual(head('hi\nhello\nbye', 1), 'hi');
    assert.strictEqual(head('sea\nriver\nlake\npond\nwell', 2), 'sea\nriver');
  });

  it('should not give any lines if count is 0', () => {
    return assert.strictEqual(head('hi\nhello', 0), '');
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
    assert.deepStrictEqual(firstNLines(['sea', 'river'], 0), []);
  });
});
