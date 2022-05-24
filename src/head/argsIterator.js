const nextArg = function () {
  this.index++;
  return this.args[this.index];
};

const currentArg = function () {
  return this.args[this.index];
};

const restOfArgs = function () {
  return this.args.slice(this.index);
};

const createIterator = (args) => {
  const argsIterator = { args, index: 0 };

  argsIterator.nextArg = nextArg.bind(argsIterator);
  argsIterator.currentArg = currentArg.bind(argsIterator);
  argsIterator.restOfArgs = restOfArgs.bind(argsIterator);
  return argsIterator;
};

exports.createIterator = createIterator;
