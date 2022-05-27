const insertHeader = ({ content, file }) => {
  const header = `==> ${file} <==\n`;
  return header + content;
};

const noHeader = ({ content }) => content;

const printContent = (headsOfFiles, { log, error }) => {
  const formatter = headsOfFiles.length === 1 ? noHeader : insertHeader;

  headsOfFiles.forEach(headOfFile => {
    if (headOfFile.content) {
      log(formatter(headOfFile));
      return;
    }
    error(headOfFile.errorMessage);
  });
};

exports.printContent = printContent;
