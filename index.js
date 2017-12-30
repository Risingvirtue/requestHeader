var express = require('express');
var path = require('path');
var os = require('os');
var app = express();
var port = process.env.PORT || 8080;
console.log('listening on port ' + port);

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
	var a = {"ipaddress": req.ip, "language":  req.headers["accept-language"],
	"software": os.platform()};
	res.send(a);
});

app.listen(port, function() {
    console.log('Our app is running');
});