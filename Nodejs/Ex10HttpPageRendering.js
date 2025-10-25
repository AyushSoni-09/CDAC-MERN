//This example covers rendering of files of HTML type in the server using http module of Nodejs.
// we need HTTP for Web Server Dev , FS for File Handling , BODY-PARSER for Processing POST handling

const http = require('http');
const fs = require('fs');

const parse = require('url').parse; //Http-GET Method Processing
const qs = require("quesrystring"); // Http-POST method Processing