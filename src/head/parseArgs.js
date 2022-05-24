const { createIterator } = require('./argsIterator.js');

const optionName = (option) => {
  const options = { '-n': 'lines', '-c': 'bytes' };
  return options[option];
};

const isOptionIntegrated = (option) => {
  const endsWithDigit = /\d$/;
  return endsWithDigit.test(option);
};

const extractOption = (arg) => arg.substring(0, 2);
const extractValue = (arg) => arg.substring(2);

const parseOption = (argsIterator) => {
  if (isOptionIntegrated(argsIterator.currentArg())) {
    const option = extractOption(argsIterator.currentArg());
    const value = +extractValue(argsIterator.currentArg());
    const name = optionName(option);
    return { name, value };
  }
  const name = optionName(argsIterator.currentArg());
  const value = +argsIterator.nextArg();
  return { name, value };
};

const validateOption = (newOption, oldOption) => {
  if (oldOption.name !== newOption.name && !isEmpty(oldOption)) {
    throw {
      name: 'illegalOption',
      message: 'head: can\'t combine line and byte counts'
    };
  }
  return newOption;
};

const isEmpty = (option) => Object.keys(option).length === 0;

const parseOptions = (argsIterator) => {
  let option = {};
  while (argsIterator.currentArg().startsWith('-')) {
    const newOption = parseOption(argsIterator);
    option = validateOption(newOption, option);
    argsIterator.nextArg();
  }
  return isEmpty(option) ? { name: 'lines', value: 10 } : option;
};

const parseArgs = (args) => {
  const argsIterator = createIterator(args);
  const option = parseOptions(argsIterator);
  const files = argsIterator.restOfArgs();
  return { option, files };
};

exports.parseArgs = parseArgs;
exports.parseOption = parseOption;
exports.parseOptions = parseOptions;
exports.validateOption = validateOption;
