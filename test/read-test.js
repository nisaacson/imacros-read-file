var readFile = require('../index');
var filePath = 'file:///users/noah/Downloads/dummy.txt'
var contents = readFile(filePath, function (err, reply) {
  if (err) {
    throw new Error('error reading text file: ' + JSON.stringify(err));
  }
  if (!reply) {
    throw new Error('no data read from file');
  }
  iimDisplay('Success! text file contents: ' + reply);
});
