const nextArg = function () {
  this.index++;
  return this.args[this.index];
};

const hasMoreArgs = function () {
  return this.index < this.args.length - 1;
};

const currentArg = function () {
  return this.args[this.index];
};

const restOfArgs = function () {
  return this.args.slice(this.index);
};

const createIterator = (args) => {
  const argsIterator = {};
  const properties = { args, index: 0 };

  argsIterator.nextArg = nextArg.bind(properties);
  argsIterator.hasMoreArgs = hasMoreArgs.bind(properties);
  argsIterator.currentArg = currentArg.bind(properties);
  argsIterator.restOfArgs = restOfArgs.bind(properties);
  return argsIterator;
};

exports.createIterator = createIterator;
