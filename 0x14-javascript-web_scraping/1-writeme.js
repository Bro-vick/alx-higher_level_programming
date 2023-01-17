#!/usr/bin/node
// script writes a string to a file

const fs = require('fs');
const filepath = process.argv[2];
const string = process.argv[3];

fs.writeFile(filepath, string, 'utf-8', function (err, input) {
  if (err) console.error(err);
});
