#!/usr/bin/node
const request = require('request');
const argv = process.argv;
const url = 'https://swapi-api.hbtn.io/api/films/' + argv[2] + '/';

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const jsonobj = JSON.parse(body);
    console.log(jsonobj.title);
  } 
});
