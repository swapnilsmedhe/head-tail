const appendHeader = ({ content, file }) => {
  const header = `==> ${file} <==\n`;
  return header + content;
};

const print = (consoleLog, consoleError, records) => {
  const firstRecord = records[0];
  if (records.length === 1 && firstRecord.isFileRead) {
    consoleLog(firstRecord.content);
    return;
  }

  records.forEach(fileRecord => {
    if (fileRecord.isFileRead) {
      consoleLog(appendHeader(fileRecord));
    } else {
      consoleError(`head: ${fileRecord.file}: No such file or directory`);
    }
  });
};

exports.print = print;
