const fs = require('fs');
const appRoot = require('app-root-path');

const parse = (fileName, callback) => {
  try {
    // const rawdata = fs.readFileSync(path.join(__dirname, 'files',fileName));
    const rawdata = fs.readFileSync(`${appRoot.path}/server/files/${fileName}`);
    const data = JSON.parse(rawdata);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};

module.exports = { parse };
