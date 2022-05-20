const assert = require('assert');
const { head, firstNElements } = require('../src/headLib.js');

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

  it('should give first n characters when bytes option is specified', () => {
    let option = { name: 'bytes', value: 1 };
    assert.strictEqual(head('hello', option), 'h');

    option = { name: 'bytes', value: 2 };
    assert.strictEqual(head('sky', option), 'sk');
  });
});

describe('firstNElements', () => {
  it('should give first n elements', () => {
    assert.deepStrictEqual(firstNElements(['hello', 'hi'], 1), ['hello']);
    assert.deepStrictEqual(firstNElements(['a', 'b', 'c'], 2), ['a', 'b']);
  });

  it('should give all elements if elements are less than given count', () => {
    assert.deepStrictEqual(firstNElements(['sea', 'lake'], 5), ['sea', 'lake']);
  });

  it('should not give any element if count is 0', () => {
    assert.deepStrictEqual(firstNElements(['sea', 'river'], 0), []);
  });
});
