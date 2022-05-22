**TODO**

- [ ] Implement `headMain`
- [ ] Make head work for multiple files
- [ ] Implement `parseArgs`
  - [x] Make it work for single file
  - [ ] Report errors if provided options are invalid
      [x] If both `-n` and `-c` options are provided
      [ ] No value provided with option
  - [x] If no options are given provide default option of count lines with defualt of 10
  - [ ] Make it work for multiple files
  - [x] Options should be parsed independent of order
  - [ ] Iplement parser for non-spaced options (`-n2`)
- [ ] Simplify `parseOption`
- [ ] Extract `parseOptions` function from `parseArgs`
- [ ] Test `validateOption`
- [ ] Test `parseOption`

**DONE**

- [x] Refactor `argsIterator` to have a single object
- [x] Create `argsIterator.js`
- [x] Move iterator code to `argsIterator.js`
- [x] Test `argsIterator`
- [x] Implement `headMain` with command line option for `-c`
- [x] Implement `headMain` with command line option for `-n`
- [x] Make `testParseArgs.js`
- [x] Make `parseArgs.js`
- [x] Make `head` work for single file without any options
- [x] Make `testHeadMain.js`
- [x] Test `stringUtils.js`
- [x] Imlement `head` with bytes option
- [x] Consider a richer structure for option as an argument to head
- [x] Implement `head` with custom count option
- [x] Move `splitLines`, `joinLines` and `NEWLINE` to string `utils.js`
- [x] Extract a function which will give required number of lines
- [x] Extract `\n` to a constant
- [x] Extract functions to split and join lines
- [x] Make `src` and `test` directory 
- [x] Verify `mocha` exists
- [x] Make `testHeadLib.js`
- [x] Write test case
- [x] Make `headLib.js`
- [x] Make `head` work for default option of 10 lines without file
