const { fs } = require("fs")

read_file = function(path) {
    return fs.readFileSync(path, 'utf8');
}

write_file = function(path, output) {
    return fs.writeFileSync(path, output);
}