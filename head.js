const fs = require('fs');
const { headMain } = require('./src/headLib.js');

console.log('usage: head [-n lines | -c bytes] [file ...]');

const args = process.argv.slice(2);
console.log(headMain(fs.readFileSync, ...args));
