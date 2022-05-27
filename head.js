const fs = require('fs');
const { headMain } = require('./src/head/headLib.js');

const main = () => {
  const args = process.argv.slice(2);
  try {
    process.exitCode = headMain(fs.readFileSync, console.log, console.error, ...args);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
};

main();
