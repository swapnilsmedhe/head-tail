const insertHeader = ({ content, file }) => {
  const header = `==> ${file} <==\n`;
  return header + content;
};

const noHeader = ({ content }) => content;

const print = (consoleLog, consoleError, fileRecords) => {
  const formatter = fileRecords.length === 1 ? noHeader : insertHeader;

  fileRecords.forEach(fileRecord => {
    if (fileRecord.isFileRead) {
      consoleLog(formatter(fileRecord));
    } else {
      consoleError(`head: ${fileRecord.file}: No such file or directory`);
    }
  });
};

exports.print = print;
