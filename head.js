const fs = require('fs');
const { headMain } = require('./src/head/headLib.js');

const main = () => {
  const args = process.argv.slice(2);
  let exitCode;
  try {
    exitCode = headMain(fs.readFileSync, console.log, console.error, ...args);
  } catch (error) {
    console.error(error.message);
    exitCode = 1;
  }
  process.exit(exitCode);
};

main();
