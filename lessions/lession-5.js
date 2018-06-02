/**
 * Working with node internal module: fs  (File system)
 */

var fs = require("fs"),
        path = require("path");

// async reading file
fs.readFile(__filename, "utf8", function (err, content) {
        console.log(content);
});
console.log("After reading file");
var data = fs.readFileSync(__filename, "utf8");
console.log("============Got data=========");
console.log(data);

let dir = path.join(__dirname, "..", "..", "..");
fs.readdir(dir, (err, files) => {
        console.log("============Listing files =========");
        console.log(files);
        for (let file of files) {
                fs.stat(path.join(dir, file), (err, stats) => {
                        console.log(file, stats.isDirectory(), stats.size);
                });
        }
});

fs.writeFile("readme.txt", data + " this is modified data", {
        flag: 'a'
}, (err) => {
        if (err) {
                   console.error("Got error", err);
        }
});