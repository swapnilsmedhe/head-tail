# TAIL 

- **TODO**

  - [ ] Implement `tailMain` with custom count option for single file
  - [ ] Implement `tailMain` with bytes option for single file
  - [ ] Make `tailMain` work for single file with `-n` and `-c` option
  - [ ] Write parser for `tail`
  - [ ] Change directory structure from `src/head src/tail test/head test/tail` to `src` and `test`

- **DONE**
  - [x] Parse Multiple options
  - [x] Consider other structure to be return from `parseArgs`
  - [x] Make parser work for single `-c` option assuming option and value are space separated
  - [x] Make parser work for single `-n` option assuming option and value space are separated
  - [x] Add `tailMain`
  - [x] Implement `tailMain` with default option of lines for a single file
  - [x] Make `tail` work with file content instead of file
  - [x] Implement `tail` with bytes option with contents of file instead of file
  - [x] Implement `tail` with lines option with contents of file instead of file
  - [x] Consider a richer structure for option as an argument to `tail`
  - [x] Extract a function which will give last n lines
  - [x] Move `splitLines` and `joinLines` to `stringUtils`
  - [x] Extract `\n` into a variable
  - [x] Extract `splitLines` and `joinLines` from `tail`
  - [x] Write README for `tail`
  - [x] Make `head` and `tail` directories in `src` and `test`
  - [x] Make `testTailLib.js` in `test/tail` directory
  - [x] Write a test for `testTailLib.js`
  - [x] Make `tailLib.js` in `src/tail` directory
  - [x] Make `tail` work for default option of lines with count of 10 with file contents

---

# HEAD

- **TODO**

  - [ ] Rename `printContent` to `print`
  - [ ] Implement `parseArgs`
    - [x] Make it work for single file
    - [ ] Report errors if provided options are invalid
        [x] If both `-n` and `-c` options are provided
        [ ] No value provided with option
    - [x] If no options are given provide default option of count lines with defualt of 10
    - [x] Make it work for multiple files
    - [x] Options should be parsed independent of order
    - [x] Iplement parser for non-spaced options (`-n2`)

- **DONE**

  - [x] Rename `headsOfFiles` to `headOfFile`
  - [x] Return the error of `No such file or directory` from `headFile`
  - [x] Rearrage order of arguments of `headMain`
  - [x] Rearrange order of arguments of `printContent`
  - [x] Insted of sending `console.log` and `console.error` separately send them as an object
  - [x] Use `process.exitCode` instead of `process.exit()`
  - [x] Rename `fileRecords` variable of `printContent` function
  - [x] Extract a function to determine exit code
  - [x] Return exit code of 1 from `headMain` if file not successfully read
  - [x] Give exit code of 1 from `main` when any error occurs
  - [x] Change the error message for `can't combine line and byte counts`
  - [x] Simplify `headMain.js`
  - [x] Implement `headMain`
  - [x] Rename `print`
  - [x] Move mockers to `mockers.js`
  - [x] Simplify `print.js`
  - [x] Extract the code of `head.js` into `main`
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
