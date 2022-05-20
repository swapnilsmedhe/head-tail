`head [-n count | -c bytes] [file ...]`

This filter displays the first count lines or bytes of each of the specified files. If count is omitted it defaults to 10.

```
head [file...]
  Displays first 10 lines of each of the specified files.

head -n count [file...]
  Allows to specify the count of lines to be displayed.

head -c bytes [file...]
  Allows to specify the count of bytes to be displayed.
```