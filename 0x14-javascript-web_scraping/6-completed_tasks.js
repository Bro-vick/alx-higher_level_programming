#!/usr/bin/node
// computes the number of tasks completed by user id

const request = require('request');
const endpoint = process.argv[2];
const obj = {};

request(endpoint, (err, res, body) => {
  if (err) throw err;

  JSON.parse(body).forEach(todo => {
    const id = todo.userId;
    if (!obj[id]) obj[id] = 0;
    if (todo.completed) obj[id]++;
    if (obj[id] === 0) delete obj[id];
  });
  console.log(obj);
});
