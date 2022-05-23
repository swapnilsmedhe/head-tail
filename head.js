const fs = require('fs');
const { headMain } = require('./src/headLib.js');

const args = process.argv.slice(2);
try {
  headMain(fs.readFileSync, console.log, console.error, ...args);
} catch (error) {
  console.error(error.message);
}
