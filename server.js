var express = require('express');
var app = express();

app.configure(function () {
	app.set('port', process.env.PORT || 3000);
	app.use(express.static(__dirname + '/httpdocs'));
});

app.get('/', function(req, res){
	res.sendfile(__dirname + 'index.html');
});

app.get('/git-hook', function (req, res) {
	var sys = require('sys');
	var exec = require('child_process').exec;

	function puts(error, stdout, stderr) {
		sys.puts(stdout)
	}

	exec("git pull", puts);

});

app.listen(3000);

console.log('Listening on port 3000');