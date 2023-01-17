#!/usr/bin/node
// script prints the number of movies where
// the character "wedge Antilles" is present

const req = require('request');
const endpoint = process.argv[2];
let count = 0;

req(endpoint, (err, res, body) => {
	if (err) throw err;

	JSON.parse(body).results.forEach(result => {
		result.characters.forEach(character => {
			if (character.endsWith('18/')) count++;
		});
	});
	console.log(count);
});
