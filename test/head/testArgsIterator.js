const assert = require('assert');
const { createIterator } = require('../../src/head/argsIterator.js');

describe('iterator', () => {
  it('should give the current argument', () => {
    const argsIterator = createIterator(['hello', 'hi']);
    assert.strictEqual(argsIterator.currentArg(), 'hello');
    argsIterator.index = 1;
    assert.strictEqual(argsIterator.currentArg(), 'hi');
  });

  it('should give the next argument', () => {
    const argsIterator = createIterator(['sea', 'river', 'lake']);
    assert.strictEqual(argsIterator.nextArg(), 'river');
    assert.strictEqual(argsIterator.nextArg(), 'lake');
  });

  it('should give the rest of arguments', () => {
    const argsIterator = createIterator(['sea', 'river', 'lake']);
    assert.deepStrictEqual(argsIterator.restOfArgs(), ['sea', 'river', 'lake']);
    argsIterator.index = 1;
    assert.deepStrictEqual(argsIterator.restOfArgs(), ['river', 'lake']);
  });
});
