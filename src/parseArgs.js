const parseArgs = (args) => {
  let option = { name: 'lines', value: 10 };
  let files = [];
  const switches = { '-n': 'lines', '-c': 'bytes' };
  const firstArg = args[0];

  if (!firstArg.startsWith('-')) {
    files = args;
    return { option, files };
  }
  option = { name: switches[firstArg], value: +args[1] };
  files = args.slice(2);
  return { option, files };
};

exports.parseArgs = parseArgs;
