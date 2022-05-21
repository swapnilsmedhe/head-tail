const assert = require('assert');
const { parseArgs } = require('../src/parseArgs.js');

describe('parseArgs', () => {
  it('should just parse the file name', () => {
    const expected = {
      option: { name: 'lines', value: 10 },
      files: ['a.txt']
    };
    assert.deepStrictEqual(parseArgs(['a.txt']), expected);
  });

  it('should parse file name along with -n option', () => {
    const expected = {
      option: { name: 'lines', value: 5 },
      files: ['b.txt']
    };
    assert.deepStrictEqual(parseArgs(['-n', '5', 'b.txt']), expected);
  });

  it('should parse file name along with -c option', () => {
    const expected = {
      option: { name: 'bytes', value: 3 },
      files: ['sea.txt']
    };
    assert.deepStrictEqual(parseArgs(['-c', '3', 'sea.txt']), expected);
  });
});
