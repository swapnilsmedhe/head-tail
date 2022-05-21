const isValidOption = (arg) => arg === '-n' || arg === '-c';

const parseArgs = (args) => {
  const switches = { '-n': 'lines', '-c': 'bytes' };
  let option = { name: 'lines', value: 10 };
  let index = 0;
  let currentArg = args[index];

  while (isValidOption(currentArg)) {
    option = { name: switches[currentArg], value: +args[index + 1] };
    index += 2;
    currentArg = args[index];
  }
  const files = args.slice(index);
  return { option, files };
};

exports.parseArgs = parseArgs;
