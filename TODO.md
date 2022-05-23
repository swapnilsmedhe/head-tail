**TODO**

- [ ] Implement `headMain`
- [ ] Implement `parseArgs`
  - [x] Make it work for single file
  - [ ] Report errors if provided options are invalid
      [x] If both `-n` and `-c` options are provided
      [ ] No value provided with option
  - [x] If no options are given provide default option of count lines with defualt of 10
  - [x] Make it work for multiple files
  - [x] Options should be parsed independent of order
  - [x] Iplement parser for non-spaced options (`-n2`)
- [ ] Extract the code of `head.js` into `main`
- [ ] Simplify `print.js`
- [ ] Simplify `headMain.js`
- [ ] Move mockers to `mockers.js`
- [ ] Rename `print`

**DONE**

- [x] Make head work for multiple files
- [x] Give the output of head to `print` instead of returning it
- [x] ~~Consider returning a richer structure from `headMain`~~ `headMain` is not returning anything
- [x] Make a `print` function which will print the output
- [x] Remove `hasMoreArgs`
- [x] Report error when unable to read file
- [x] Extract `parseOptions` function from `parseArgs`
- [x] Simplify `parseOption`
- [x] Test `validateOption`
- [x] Test `parseOption`
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
