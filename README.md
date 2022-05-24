# Head 

**Synopsis**

`head [-n count | -c bytes] [file ...]`

**Description**

This filter displays the first count lines or bytes of each of the specified files. If count is omitted it defaults to 10.

**Options**
```
head [file...]
  Displays first 10 lines of each of the specified files.

head -n count [file...]
  Allows to specify the count of lines to be displayed.

head -c bytes [file...]
  Allows to specify the count of bytes to be displayed.
```

# Tail 

**Synopsis**

`tail [-c # | -n #] [file ...]`

**Description**

This utility displays the last part of a file, lines or bytes depending on the specified option. The default option is lines with the count of 10.

**Options**
```
tail [file...]
  Displays last 10 lines of each specified file.

tail -n count [file...]
  Allows to specify the count of lines to be displayed. 

tail -c count [file...] 
  Allows to specify the count of bytes to be displayed.

```
