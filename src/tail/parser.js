const getOptionInfo = (optionsInfo, option) =>
  optionsInfo.find((optionInfo) => optionInfo.flag === option);

const parseArgs = (optionsInfo, args) => {
  let index = 0;
  const options = [];

  while (args[index].startsWith('-')) {
    const optionInfo = getOptionInfo(optionsInfo, args[index]);
    if (optionInfo.needsValue) {
      const option = { name: optionInfo.name, count: +args[index + 1] };
      options.push(option);
    }
    index += 2;
  }
  const files = args.slice(index);
  return { files, options };
};

exports.parseArgs = parseArgs;
