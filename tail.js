const { tailMain } = require('./src/tail/tailLib.js');
const fs = require('fs');

console.log(tailMain(fs.readFileSync, process.argv[2]));

