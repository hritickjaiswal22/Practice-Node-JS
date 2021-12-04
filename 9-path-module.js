const path = require("path");

//* The seperator used for current system
console.log(path.sep);

const filepath = path.join("/content", "subfolder", "test.txt");
console.log(filepath);

const basename = path.basename(filepath);
console.log(basename);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
