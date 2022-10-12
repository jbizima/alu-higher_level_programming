#!/usr/bin/node
const request = require('request');
const episode = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/';
request(url + episode, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const jsonobj = JSON.parse(body);
    console.log(jsonobj.title);
  } 
});
