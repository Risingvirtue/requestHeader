var express = require('express');
var path = require('path');
var app = express();
console.log('listening on port 3000');

app.get('/', function(req, res) {
	res.send('Hello!');
});

app.listen('3000');