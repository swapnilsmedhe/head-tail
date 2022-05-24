const assert = require('assert');
const { createIterator } = require('../src/argsIterator.js');
const parseArgsLib = require('../src/parseArgs.js');
const { parseArgs, parseOption, parseOptions, validateOption } = parseArgsLib;

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

  it('should parse options independent of order', () => {
    const expected = {
      option: { name: 'lines', value: 2 },
      files: ['a.txt']
    };
    assert.deepStrictEqual(parseArgs(['-n', '5', '-n', '2', 'a.txt']),
      expected);
  });

  it('should report an error if both -n and -c options are provided', () => {
    assert.throws(() => parseArgs(['-n', '5', '-c', '3', 'a.txt']), {
      name: 'illegalOption',
      message: 'head: can\'t combine line and byte counts'
    });
  });
});

describe('parseOption', () => {
  it('should parse -n option', () => {
    const argsIterator = createIterator(['-n', '5', 'a.txt']);
    const expected = { name: 'lines', value: 5 };
    assert.deepStrictEqual(parseOption(argsIterator), expected);
  });

  it('should parse -c option', () => {
    const argsIterator = createIterator(['-c', '3', 'a.txt']);
    const expected = { name: 'bytes', value: 3 };
    assert.deepStrictEqual(parseOption(argsIterator), expected);
  });

  it('should parse non-spaced options', () => {
    const argsIterator = createIterator(['-n2', 'a.txt']);
    const expected = { name: 'lines', value: 2 };
    assert.deepStrictEqual(parseOption(argsIterator), expected);
  });
});

describe('validateOption', () => {
  it('should report an error if two different options provided', () => {
    const newOption = { name: 'lines', value: 3 };
    const oldOption = { name: 'bytes', value: 5 };
    assert.throws(() => validateOption(newOption, oldOption), {
      name: 'illegalOption',
      message: 'head: can\'t combine line and byte counts'
    });
  });

  it('should give the new opition back if it is same as the old option', () => {
    const newOption = { name: 'lines', value: 3 };
    const oldOption = { name: 'lines', value: 5 };
    assert.deepStrictEqual(validateOption(newOption, oldOption), newOption);
  });

  it('should give the new option back if old option is empty', () => {
    const newOption = { name: 'lines', value: 3 };
    assert.deepStrictEqual(validateOption(newOption, {}), newOption);
  });
});

describe('parseOptions', () => {
  it('should parse given valid options', () => {
    let argsIterator = createIterator(['-n', '5', 'a.txt']);
    assert.deepStrictEqual(parseOptions(argsIterator), {
      name: 'lines', value: 5
    });

    argsIterator = createIterator(['-c', '2', 'b.txt']);
    assert.deepStrictEqual(parseOptions(argsIterator), {
      name: 'bytes', value: 2
    });
  });

  it('should give -n option with default of 10 if no options provided', () => {
    const argsIterator = createIterator(['a.txt']);
    assert.deepStrictEqual(parseOptions(argsIterator), {
      name: 'lines', value: 10
    });
  });
});
