#!/usr/bin/node
// script gets the content of a webpage
// stores it in a file

const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filename = process.argv[3];

request.get(url, function (error, response, body) {
	if (!error && response.statusCode === 200) {
		fs.writeFile(filename, body, function (err) {
			if (err) console.error(err);
		});
	} else {
		console.error(error);
	}
});
