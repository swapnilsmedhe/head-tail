const fs = require('fs');
const { headMain } = require('./src/head/headLib.js');

const main = () => {
  const args = process.argv.slice(2);
  const { log, error } = console;
  try {
    process.exitCode = headMain(args, fs.readFileSync, { log, error });
  } catch (error) {
    error(error.message);
    process.exitCode = 1;
  }
};

main();
