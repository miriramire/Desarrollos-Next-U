var express = require('express'),
app = express(),
server = require('http').createServer(app);

var swig = require('swig');
var logger = require('morgan');
var bodyParser= require('body-parser');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({cache: false});
app.use(logger('dev'));
app.use(bodyParser());
app.use(express.static(__dirname+'/public'));

app.get('/partials/*', function(req, res){
	console.log(req.params);
	res.render('../..public/app'+req.params['0']);
});

app.get('*', function(req, res){
	res.render('index');
});

server.listen(3000, function(){
	console.log("servidor corriendo en el puerto: 3000")
});