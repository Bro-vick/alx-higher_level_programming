#!/usr/bin/node
// script displays the status code of a Get request

const request = require('request');
const endpoint = process.argv[2];

request(endpoint, (err, res, body) => {
  if (!err) console.log('code:', res.statusCode);
});
