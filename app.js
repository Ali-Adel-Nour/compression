const zlib = require('zlib');  //support only lossless compression

const fs = require("fs")

const src = fs.createReadStream("huge_text_file.txt");

const dest = fs.createWriteStream("huge_text_file.txt.gz");

//src.pipe(zlib.createGzip()).pipe(dest);

//a bit faster than gzip but consume more cpu resources
src.pipe(zlib.createBrotliCompress()).pipe(dest);

//src.pipe(zlib.createDeflate()).pipe(dest);

//zlib.createGunzip()