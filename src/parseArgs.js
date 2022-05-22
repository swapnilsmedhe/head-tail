const { createIterator } = require('./argsIterator.js');

const parseOption = (argsIterator) => {
  const switches = { '-n': 'lines', '-c': 'bytes' };
  return {
    name: switches[argsIterator.currentArg()],
    value: +argsIterator.nextArg()
  };
};

const validateOption = (newOption, oldOption) => {
  if (oldOption.name !== newOption.name && !isEmpty(oldOption)) {
    throw {
      name: 'illegalOption',
      message: 'Cannnot combine line and byte counts'
    };
  }
  return newOption;
};

const isEmpty = (option) => Object.keys(option).length === 0;

const parseArgs = (args) => {
  let option = {};
  const argsIterator = createIterator(args);

  while (argsIterator.currentArg().startsWith('-')) {
    const newOption = parseOption(argsIterator);
    option = validateOption(newOption, option);
    argsIterator.nextArg();
  }
  if (isEmpty(option)) {
    option = { name: 'lines', value: 10 };
  }
  const files = argsIterator.restOfArgs();
  return { option, files };
};

exports.parseArgs = parseArgs;
exports.parseOption = parseOption;
exports.validateOption = validateOption;
