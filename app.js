const zlib = require('zlib');  //support only lossless compression

const fs = require("fs")

const src = fs.createReadStream("huge_text_file.txt");

const dest = fs.createWriteStream("huge_text_file.txt.gz");

src.pipe(zlib.createGzip()).pipe(dest);


