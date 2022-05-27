const insertHeader = ({ content, file }) => {
  const header = `==> ${file} <==\n`;
  return header + content;
};

const noHeader = ({ content }) => content;

const printContent = ({ log, error }, headsOfFiles) => {
  const formatter = headsOfFiles.length === 1 ? noHeader : insertHeader;

  headsOfFiles.forEach(headOfFile => {
    if (headOfFile.isFileRead) {
      log(formatter(headOfFile));
      return;
    }
    error(`head: ${headOfFile.file}: No such file or directory`);
  });
};

exports.printContent = printContent;
