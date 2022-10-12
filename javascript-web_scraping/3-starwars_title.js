#!/usr/bin/node
const request = require('request');
const episode = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/:id/' + episode + '/';
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    let jsonobj = JSON.parse(body);
    console.log(jsonobj.title);
  } 
});
