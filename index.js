var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;
console.log('listening on port ' + port);

app.get('/', function(req, res) {
	res.send('Hello!');
});

app.listen('3000');


// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {


    res.send('Hello!');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});