const assert = require('assert');
const { parseArgs } = require('../../src/tail/parser.js');

const optionsInfo = [
  {
    flag: '-n',
    name: 'lines',
    needsValue: true
  },
  {
    flag: '-c',
    name: 'bytes',
    needsValue: true
  }
];

describe('parseArgs', () => {
  it('should parse -n option along with a single file name', () => {
    assert.deepStrictEqual(parseArgs(optionsInfo, ['-n', '3', 'b.txt']), {
      files: ['b.txt'],
      options: [{ name: 'lines', count: 3 }]
    });
  });

  it('should parse -c option along with a single file name', () => {
    assert.deepStrictEqual(parseArgs(optionsInfo, ['-c', '5', 'c.txt']), {
      files: ['c.txt'],
      options: [{ name: 'bytes', count: 5 }]
    });
  });

  it('should parse multiple options', () => {
    const args = ['-n', '5', '-n', '3', 'a.txt'];
    const expected = {
      files: ['a.txt'],
      options: [{ name: 'lines', count: 5 }, { name: 'lines', count: 3 }]
    };

    assert.deepStrictEqual(parseArgs(optionsInfo, args), expected);
  });
});
