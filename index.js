module.exports = function readFile(filePath, cb) {
  var txtFile = new XMLHttpRequest();
  txtFile.open("GET", filePath, true);
  txtFile.onreadystatechange = function() {
    if (txtFile.readyState == 4) {
      var text = txtFile.responseText;
      return cb(null, text);
    }
  }
  txtFile.send(null)
}

// file:///users/noah/Downloads/dummy.txt