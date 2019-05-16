var exec = require("child_process").exec;
const app = require("express");

const http = require('http');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('/FrontEnd/index.html');
});

server.listen(port, hostname, () => {
  console.log(`Server running up and running at localhost:8080`);
});