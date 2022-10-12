#!/usr/bin/node
const request = require('request');
let url = 'https://swapi-api.hbtn.io/api/films/:id/';
let episode = process.argv[2];
request(url + episode, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    let jsonobj = JSON.parse(body);
    console.log(jsonobj.title);
  } 
});
