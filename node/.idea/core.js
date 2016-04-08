// file system core module
// you dont need the path just the name of the module
// allows us to read and write files fx takes path, data and options...actually makes the text file
var fs = require('fs');

fs.writeFileSync("fod.txt", "get ya some");

