const insertHeader = ({ content, file }) => {
  const header = `==> ${file} <==\n`;
  return header + content;
};

const noHeader = ({ content }) => content;

const printContent = (headOfFiles, { log, error }) => {
  const formatter = headOfFiles.length === 1 ? noHeader : insertHeader;

  headOfFiles.forEach(headOfFile => {
    if (headOfFile.content) {
      log(formatter(headOfFile));
      return;
    }
    error(headOfFile.errorMessage);
  });
};

exports.printContent = printContent;
