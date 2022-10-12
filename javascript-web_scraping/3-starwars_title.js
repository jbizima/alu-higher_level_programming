#!/usr/bin/node
const request = require('request');
const argv = process.argv;
const url = 'https://swapi-api.hbtn.io/api/films/' + argv[2] + '/';
request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    let jsonobj = JSON.parse(body);
    console.log(jsonobj.title);
  } 
});
