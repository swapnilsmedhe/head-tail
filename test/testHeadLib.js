const assert = require('assert');
const { head, firstNLines } = require('../src/headLib.js');

describe('head', () => {
  it('should give all lines if count is greater than number of lines', () => {
    let option = { name: 'lines', value: 3 };
    assert.strictEqual(head('hello', option), 'hello');

    option = { name: 'lines', value: 5 };
    assert.strictEqual(head('hello\nhi', option), 'hello\nhi');

    option = { name: 'lines', value: 9 };
    assert.strictEqual(head('hello\nhi\nbye', option), 'hello\nhi\nbye');
  });

  it('should only give first n lines', () => {
    let option = { name: 'lines', value: 1 };
    assert.strictEqual(head('hi\nhello\nbye', option), 'hi');

    option = { name: 'lines', value: 2 };
    assert.strictEqual(head('sea\nriver\nlake\npond\nwell', option),
      'sea\nriver');
  });

  it('should not give any lines if count is 0', () => {
    const option = { name: 'lines', value: 0 };
    assert.strictEqual(head('hi\nhello', option), '');
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
