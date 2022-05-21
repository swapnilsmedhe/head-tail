const fs = require('fs');
const { headMain } = require('./src/headLib.js');

const args = process.argv.slice(2);
console.log(headMain(fs.readFileSync, ...args));
