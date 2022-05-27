const insertHeader = ({ content, file }) => {
  const header = `==> ${file} <==\n`;
  return header + content;
};

const noHeader = ({ content }) => content;

const printContent = (consoleLog, consoleError, headsOfFiles) => {
  const formatter = headsOfFiles.length === 1 ? noHeader : insertHeader;

  headsOfFiles.forEach(headOfFile => {
    if (headOfFile.isFileRead) {
      consoleLog(formatter(headOfFile));
      return;
    }
    consoleError(`head: ${headOfFile.file}: No such file or directory`);
  });
};

exports.printContent = printContent;
