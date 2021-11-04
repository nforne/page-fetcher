const ftc = process.argv.slice(2);
// ftc = [URL, local file path];
// console.log(ftc)
const request = require('request');
const fs = require("fs")
request(ftc[0], (error, response, body) => {

  fs.writeFile(ftc[1], body, 'utf8', () => {
    let fsize = 0;
    fs.stat(ftc[1], (err, stats) => {
      err ? fsize : fsize = stats.size;
      // console.log(fsize);
      error ? console.log(response) : console.log(
        `Downloaded and saved ${fsize} bytes to ${ftc[1]}`
      );
    });
  })
});

// example
// node fetcher.js 'http://www.example.edu' "./ftsOutPut.txt"