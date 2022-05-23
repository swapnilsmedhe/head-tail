const fs = require('fs');
const { headMain } = require('./src/headLib.js');

const args = process.argv.slice(2);
try {
  console.log(headMain(fs.readFileSync, ...args));
} catch (error) {
  console.error(error.message);
}
