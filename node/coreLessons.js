// file system modules, for reading and writing....actually creates the file and writes to it...you dont need the ./ path
var fs = require('fs');
var path = require('path');
// path.dirname gives directory name
// path.extname gives the extension
// pass iint path, data, option(none here)
fs.writeFileSync("food.txt", "get ya some");

console.log(fs.readFileSync('food.txt').toString());
console.log(__dirname);
console.log(__filename);